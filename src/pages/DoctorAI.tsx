import { useState, useRef, useEffect, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Stethoscope, Send, AlertCircle, User, Loader2, History, LogIn, LogOut, Mic, Volume2, Square, ShieldCheck, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useVaidyaChat } from "@/hooks/useVaidyaChat";
import { AuthModal } from "@/components/vaidya/AuthModal";
import { ChatHistory } from "@/components/vaidya/ChatHistory";
import ReactMarkdown from "react-markdown";
import { useVoiceSearch } from "@/hooks/useVoiceSearch";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import SymptomStarter from "@/components/vaidya/SymptomStarter";

type Message = { role: "user" | "assistant"; content: string };
type UserLanguage = "hinglish" | "english";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/vaidya-chat`;

const DoctorAI = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<UserLanguage>("hinglish");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [speakingMessageIndex, setSpeakingMessageIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  
  
  const {
    sessions,
    currentSessionId,
    messages,
    setMessages,
    loadingSessions,
    loadSession,
    createSession,
    saveMessage,
    deleteSession,
    startNewChat,
  } = useVaidyaChat(language);

  // Voice search integration - store pending voice message
  const pendingVoiceMessageRef = useRef<string | null>(null);

  const {
    isListening,
    isSupported: voiceSupported,
    interimTranscript,
    startListening,
    stopListening,
  } = useVoiceSearch({
    onResult: (transcript) => {
      setInput(transcript);
      pendingVoiceMessageRef.current = transcript;
    },
    onError: (error) => {
      toast({
        title: language === "hinglish" ? "Voice Error" : "Voice Error",
        description: error,
        variant: "destructive",
      });
    },
    language: language === "hinglish" ? "hi-IN" : "en-IN",
  });

  const textForSpeech = useCallback((raw: string) => {
    return raw
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1')
      .replace(/^[\s>*#-]+/gm, '')
      .replace(/[\*_~]/g, '')
      .replace(/[\[\]\(\){}<>]/g, ' ')
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }, []);

  // Stop TTS when user starts listening (to avoid conflict)
  useEffect(() => {
    if (isListening && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setSpeakingMessageIndex(null);
    }
  }, [isListening]);

  // Preload voices for TTS (critical for mobile)
  const voicesLoadedRef = useRef(false);
  const [voicesReady, setVoicesReady] = useState(false);
  
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        voicesLoadedRef.current = true;
        setVoicesReady(true);
      }
    };
    
    if ('speechSynthesis' in window) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // TTS function using browser's Web Speech API with mobile fixes
  const speakMessage = useCallback((text: string, messageIndex: number) => {
    // Don't start TTS if user is listening
    if (isListening) {
      toast({
        title: language === "hinglish" ? "Pehle bolna band karein" : "Stop listening first",
        description: language === "hinglish" ? "Voice input chal raha hai" : "Voice input is active",
        variant: "destructive",
      });
      return;
    }

    if (!('speechSynthesis' in window)) {
      toast({
        title: "Not Supported",
        description: language === "hinglish" ? "Aapka browser speech support nahi karta" : "Your browser doesn't support text-to-speech",
        variant: "destructive",
      });
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    if (speakingMessageIndex === messageIndex) {
      setSpeakingMessageIndex(null);
      return;
    }

    const cleaned = textForSpeech(text);
    if (!cleaned) {
      toast({
        title: "Nothing to read",
        description: language === "hinglish" ? "Padhne ke liye text nahi mila" : "No readable text found",
        variant: "destructive",
      });
      setSpeakingMessageIndex(null);
      return;
    }

    setSpeakingMessageIndex(messageIndex);

    // Split long text into chunks for mobile (Chrome mobile cuts off after ~15s)
    const maxChunkLength = 200;
    const sentences = cleaned.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [cleaned];
    const chunks: string[] = [];
    let currentChunk = '';
    
    for (const sentence of sentences) {
      if ((currentChunk + sentence).length > maxChunkLength && currentChunk) {
        chunks.push(currentChunk.trim());
        currentChunk = sentence;
      } else {
        currentChunk += sentence;
      }
    }
    if (currentChunk.trim()) chunks.push(currentChunk.trim());

    const voices = window.speechSynthesis.getVoices();
    const langPrefix = language === "hinglish" ? "hi" : "en";
    const preferredVoice = voices.find(v => v.lang.startsWith(langPrefix));

    let chunkIndex = 0;
    const speakNextChunk = () => {
      if (chunkIndex >= chunks.length) {
        setSpeakingMessageIndex(null);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(chunks[chunkIndex]);
      utterance.lang = language === "hinglish" ? "hi-IN" : "en-IN";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      let resumeInterval: ReturnType<typeof setInterval> | null = null;

      utterance.onend = () => {
        if (resumeInterval) clearInterval(resumeInterval);
        chunkIndex++;
        speakNextChunk();
      };
      
      utterance.onerror = (e) => {
        if (resumeInterval) clearInterval(resumeInterval);
        // 'interrupted' and 'cancelled' are normal when user stops
        if (e.error === 'interrupted' || e.error === 'canceled') return;
        setSpeakingMessageIndex(null);
        toast({
          title: "Speech Error",
          description: language === "hinglish" ? "Awaaz nahi sun sakte" : "Could not generate speech",
          variant: "destructive",
        });
      };

      window.speechSynthesis.speak(utterance);
      
      // Chrome workaround: pause/resume every 5s to prevent auto-stop bug
      resumeInterval = setInterval(() => {
        if (!window.speechSynthesis.speaking) {
          if (resumeInterval) clearInterval(resumeInterval);
          return;
        }
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }, 5000);
    };

    speakNextChunk();
  }, [speakingMessageIndex, language, toast, textForSpeech, isListening]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages.length]);

  // Initial greeting when no session is loaded
  useEffect(() => {
    if (!currentSessionId && messages.length === 0) {
      const greeting = language === "hinglish"
        ? "Namaste. Pehle kuch sawal, phir samanya Ayurvedic margdarshan."
        : "Namaste. I’ll ask a few questions first, then share general Ayurvedic guidance.";
      
      setMessages([{ role: "assistant", content: greeting }]);
    }
  }, [language, currentSessionId, messages.length, setMessages]);

  const streamChat = useCallback(async (userMessages: Message[], sessionId: string | null) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ 
        messages: userMessages.map(m => ({ role: m.role, content: m.content })),
        language 
      }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      if (resp.status === 429) {
        throw new Error("Rate limit exceeded. Please wait a moment and try again.");
      }
      if (resp.status === 402) {
        throw new Error("AI service credits exhausted. Please try again later.");
      }
      throw new Error(errorData.error || "Failed to get response");
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant" && prev.length > 1) {
                return prev.map((m, i) => 
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m
                );
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    // Final flush
    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => 
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m
                );
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch { /* ignore */ }
      }
    }

    // Save AI response to database
    if (sessionId && assistantContent) {
      await saveMessage(sessionId, "assistant", assistantContent);
    }
  }, [language, setMessages, saveMessage]);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;
    
    // Check if user needs to login
    if (!user) {
      setShowAuthModal(true);
      toast({
        title: language === "hinglish" ? "Login karein" : "Please Login",
        description: language === "hinglish" ? "Chat karne ke liye pehle login karein" : "Please login to start chatting",
        variant: "destructive",
      });
      return;
    }
    
    const newUserMsg: Message = { role: "user", content: userMessage };
    
    // Get current messages without the initial greeting for context
    const conversationHistory = messages.filter((_, i) => i > 0);
    const allMessages = [...conversationHistory, newUserMsg];
    
    setMessages(prev => [...prev, newUserMsg]);
    setInput("");
    setIsLoading(true);

    let sessionId = currentSessionId;

    try {
      // Create session on first user message (if logged in)
      if (user && !sessionId) {
        sessionId = await createSession(userMessage);
      }

      // Save user message to database
      if (sessionId) {
        await saveMessage(sessionId, "user", userMessage);
      }

      await streamChat(allMessages, sessionId);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages, currentSessionId, user, createSession, saveMessage, streamChat, toast, setMessages, language]);

  const handleSend = () => {
    sendMessage(input.trim());
  };

  const handleStarterSubmit = (message: string) => {
    sendMessage(message);
  };

  // Auto-send voice message after listening stops
  useEffect(() => {
    if (!isListening && pendingVoiceMessageRef.current) {
      const message = pendingVoiceMessageRef.current;
      pendingVoiceMessageRef.current = null;
      const timer = setTimeout(() => {
        if (message.trim()) {
          sendMessage(message.trim());
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isListening, sendMessage]);

  const changeLanguage = (nextLanguage: UserLanguage) => {
    if (nextLanguage === language) return;
    setLanguage(nextLanguage);
    startNewChat();
  };

  const handleNewChat = () => {
    startNewChat();
    setMessages([]);
  };

  return (
    <Layout>
      <SEO
        title="AI Vaidya — Free Ayurvedic Doctor Chat | AyurVeda"
        description="Chat free with AI Vaidya for Ayurvedic remedies, diet, and herbs tailored to your symptoms. Bilingual (English/Hindi) with voice support."
      />
      <div className="container mx-auto max-w-4xl px-4 py-5 md:py-7">
        <motion.header
          className="mb-5 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-secondary/30 bg-secondary/10 text-secondary">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h1 className="font-display text-2xl font-semibold">AI Vaidya</h1>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                  {language === "hinglish" ? "मुफ़्त • असीमित" : "Free • Unlimited"}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {language === "hinglish" ? "Ayurvedic sehat margdarshan" : "Ayurvedic health guidance"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-md border border-border p-1" aria-label="Chat language">
              <Button
                type="button"
                size="sm"
                variant={language === "hinglish" ? "secondary" : "ghost"}
                aria-pressed={language === "hinglish"}
                onClick={() => changeLanguage("hinglish")}
                className="h-8 px-3 text-xs"
              >
                हिंग्लिश
              </Button>
              <Button
                type="button"
                size="sm"
                variant={language === "english" ? "secondary" : "ghost"}
                aria-pressed={language === "english"}
                onClick={() => changeLanguage("english")}
                className="h-8 px-3 text-xs"
              >
                English
              </Button>
            </div>
            {user ? (
              <>
                <Button
                  type="button"
                  variant={showHistory ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setShowHistory(!showHistory)}
                  aria-label={showHistory ? "Hide consultation history" : "Show consultation history"}
                  className="h-10 gap-2"
                >
                  <History className="h-4 w-4" />
                  <span className="hidden sm:inline">{language === "hinglish" ? "इतिहास" : "History"}</span>
                </Button>
                <Button type="button" variant="ghost" size="icon" onClick={() => signOut()} aria-label="Sign out" title="Sign out">
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button type="button" variant="outline" size="sm" onClick={() => setShowAuthModal(true)} className="h-10 gap-2">
                <LogIn className="h-4 w-4" />
                {language === "hinglish" ? "साइन इन" : "Sign in"}
              </Button>
            )}
          </div>
        </motion.header>

        <AnimatePresence>
          {user && showHistory && (
            <motion.section
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-5 overflow-hidden border-b border-border pb-5"
              aria-label="Consultation history"
            >
              <h2 className="mb-3 text-sm font-semibold">{language === "hinglish" ? "Pichhli baatcheet" : "Past consultations"}</h2>
              <ChatHistory
                sessions={sessions}
                currentSessionId={currentSessionId}
                loading={loadingSessions}
                onSelectSession={loadSession}
                onDeleteSession={deleteSession}
                onNewChat={handleNewChat}
              />
            </motion.section>
          )}
        </AnimatePresence>

        <div className="mb-3 flex items-start gap-2 text-sm leading-6 text-muted-foreground">
          <AlertCircle className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <p>
            {language === "hinglish"
              ? "Yeh samanya margdarshan hai, diagnosis nahi. Gambhir ya achanak lakshan par doctor ko dikhayein."
              : "General guidance, not a diagnosis. Seek care for serious or sudden symptoms."}
          </p>
        </div>

        <motion.section
          className="overflow-hidden rounded-md border border-border bg-card shadow-soft"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          aria-label={language === "hinglish" ? "AI Vaidya consultation" : "AI Vaidya consultation"}
        >
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <Stethoscope className="h-4 w-4 shrink-0 text-secondary" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">{language === "hinglish" ? "Baatcheet" : "Consultation"}</p>
                <p className="text-xs text-muted-foreground">{language === "hinglish" ? "Samanya swasthya margdarshan" : "General health guidance"}</p>
              </div>
            </div>
            {messages.length > 1 && (
              <Button type="button" variant="ghost" size="sm" onClick={handleNewChat} className="h-9 shrink-0 gap-1.5 px-2 text-xs">
                <Plus className="h-4 w-4" />
                <span>{language === "hinglish" ? "Nayi baatcheet" : "New chat"}</span>
              </Button>
            )}
          </div>

          <div className={`${messages.length <= 1 ? "min-h-[100px]" : "h-[300px] sm:h-[340px]"} space-y-4 overflow-y-auto p-4 scroll-smooth sm:p-5`}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {msg.role === "assistant" && (
                  <div className="mr-2.5 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                    <Stethoscope className="h-4 w-4" />
                  </div>
                )}
                <div className={`max-w-[88%] min-w-0 rounded-md px-4 py-3 ${
                  msg.role === "user" ? "border border-primary/20 bg-primary/10" : "bg-muted/70"
                }`}>
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                    {msg.role === "user" ? (language === "hinglish" ? "Aap" : "You") : "AI Vaidya"}
                  </p>
                  {msg.role === "user" ? (
                    <p className="whitespace-pre-line text-base leading-relaxed">{msg.content}</p>
                  ) : (
                    <div className="prose prose-sm dark:prose-invert max-w-none text-base leading-relaxed [&>p]:my-2 [&>ul]:my-2 [&>ol]:my-2 [&>ul]:pl-4 [&>ol]:pl-4 [&>li]:my-1 [&>h1]:text-lg [&>h2]:text-base [&>h3]:text-base [&>code]:rounded [&>code]:bg-background/50 [&>code]:px-1.5 [&>code]:py-0.5 [&>pre]:rounded-md [&>pre]:bg-background/50 [&>pre]:p-3 [&>blockquote]:border-l-2 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  )}
                  {msg.role === "assistant" && i > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => speakMessage(msg.content, i)}
                      aria-label={speakingMessageIndex === i ? "Stop speaking" : "Listen to response"}
                      title={speakingMessageIndex === i ? "Stop speaking" : "Listen to response"}
                      className="mt-2 h-8 gap-1.5 px-2 text-xs text-muted-foreground"
                    >
                      {speakingMessageIndex === i ? <Square className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                      {speakingMessageIndex === i ? (language === "hinglish" ? "Band karein" : "Stop") : (language === "hinglish" ? "Sunein" : "Listen")}
                    </Button>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="ml-2.5 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </motion.div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground" role="status" aria-live="polite">
                <Loader2 className="h-4 w-4 animate-spin text-secondary" />
                {language === "hinglish" ? "Aapki baat samajh raha hoon…" : "Considering what you shared…"}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="border-t border-border px-4 py-4 sm:px-5">
              <SymptomStarter language={language} disabled={isLoading} onSubmit={handleStarterSubmit} />
            </div>
          )}

          <div className="border-t border-border p-3 sm:p-4">
            <AnimatePresence>
              {isListening && interimTranscript && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-2 px-1 text-sm text-muted-foreground"
                  aria-live="polite"
                >
                  {interimTranscript}…
                </motion.p>
              )}
            </AnimatePresence>
            <div className="flex items-center gap-2">
              {voiceSupported && (
                <Button
                  type="button"
                  variant={isListening ? "secondary" : "outline"}
                  size="icon"
                  onPointerDown={() => !isLoading && startListening()}
                  onPointerUp={stopListening}
                  onPointerLeave={stopListening}
                  onPointerCancel={stopListening}
                  onContextMenu={(event) => event.preventDefault()}
                  disabled={isLoading}
                  aria-label={language === "hinglish" ? "Dabaye rakhein aur bolein" : "Hold to speak"}
                  title={language === "hinglish" ? "Dabaye rakhein aur bolein" : "Hold to speak"}
                  className={`h-11 w-11 shrink-0 touch-none select-none ${isListening ? "text-primary" : "text-muted-foreground"}`}
                >
                  <Mic className={`h-4 w-4 ${isListening ? "animate-pulse" : ""}`} />
                </Button>
              )}
              <input
                type="text"
                value={isListening ? interimTranscript || input : input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleSend();
                  }
                }}
                aria-label={language === "hinglish" ? "Apni taklif likhein" : "Describe your health concern"}
                placeholder={isListening
                  ? (language === "hinglish" ? "Sun raha hoon…" : "Listening…")
                  : (language === "hinglish" ? "Apni taklif likhein…" : "Describe what is troubling you…")}
                className="h-11 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading || isListening}
              />
              <Button
                type="button"
                variant="default"
                size="icon"
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                aria-label={language === "hinglish" ? "Bhejein" : "Send message"}
                className="h-11 w-11 shrink-0 rounded-md"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </motion.section>
      </div>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </Layout>
  );
};

export default DoctorAI;
