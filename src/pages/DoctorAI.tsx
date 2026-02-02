import { useState, useRef, useEffect, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Send, Sparkles, AlertCircle, Globe, User, Loader2, History, LogIn, LogOut, Mic, Volume2, Square, Crown, Lock, Star, Gem, Zap, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useVaidyaChat } from "@/hooks/useVaidyaChat";
import { useVaidyaAccess } from "@/hooks/useVaidyaAccess";
import { AuthModal } from "@/components/vaidya/AuthModal";
import { ChatHistory } from "@/components/vaidya/ChatHistory";
import SubscriptionModal from "@/components/vaidya/SubscriptionModal";
import ReactMarkdown from "react-markdown";
import { useVoiceSearch } from "@/hooks/useVoiceSearch";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "assistant"; content: string };
type UserLanguage = "hinglish" | "english";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/vaidya-chat`;

const DoctorAI = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<UserLanguage>("hinglish");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [speakingMessageIndex, setSpeakingMessageIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { user, signOut } = useAuth();
  
  // Access control hook
  const { hasAccess, reason, freeChatAvailable, freeChatsRemaining, loading: accessLoading, checkAccess, markFreeChatUsed } = useVaidyaAccess();
  
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

  // TTS function using browser's Web Speech API
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

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    if (speakingMessageIndex === messageIndex) {
      setSpeakingMessageIndex(null);
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

    setSpeakingMessageIndex(messageIndex);

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

    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = language === "hinglish" ? "hi-IN" : "en-IN";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.lang.startsWith(language === "hinglish" ? "hi" : "en")
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => setSpeakingMessageIndex(null);
    utterance.onerror = () => {
      setSpeakingMessageIndex(null);
      toast({
        title: "Speech Error",
        description: language === "hinglish" ? "Awaaz nahi sun sakte" : "Could not generate speech",
        variant: "destructive",
      });
    };

    window.speechSynthesis.speak(utterance);
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
        ? "Namaste! 🙏 Main aapka Ayurveda AI Vaidya hoon. Aapki sehat ki chinta mujhe bhi hai.\n\nMujhe batayein, aaj aap kis taklif se guzar rahe hain? (Jaise: pet mein problem, sar dard, stress, joint pain, skin issues...)"
        : "Namaste! 🙏 I am your Ayurveda AI Vaidya. Your health is my priority.\n\nPlease tell me, what health concern brings you here today? (For example: digestive issues, headache, stress, joint pain, skin problems...)";
      
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
    
    // Check access - if no access and already used free chats, show paywall
    if (!hasAccess && reason === "subscription_required") {
      setShowSubscriptionModal(true);
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
      
      // Mark free chat as used after successful message (only if using free tier)
      if (freeChatAvailable && reason === 'free_chat') {
        await markFreeChatUsed();
      }
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
  }, [isLoading, messages, currentSessionId, user, createSession, saveMessage, streamChat, toast, setMessages, hasAccess, reason, freeChatAvailable, markFreeChatUsed, language]);

  const handleSend = () => {
    sendMessage(input.trim());
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

  const toggleLanguage = () => {
    setLanguage(prev => prev === "hinglish" ? "english" : "hinglish");
    startNewChat();
  };

  const handleNewChat = () => {
    startNewChat();
    setMessages([]);
  };

  const suggestedPrompts = language === "hinglish" 
    ? ["Pet mein gas aur acidity", "Bahut stress ho raha hai", "Ghutno mein dard", "Skin pe pimples", "Neend nahi aati"]
    : ["Digestive issues", "Stress and anxiety", "Joint pain", "Skin problems", "Sleep issues"];

  const isPremium = reason === "subscribed";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Premium Header with luxury animations */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {isPremium ? (
            <motion.div 
              className="relative inline-block mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold/30 via-primary/20 to-gold/30 blur-2xl rounded-full transform scale-150" />
              
              <motion.div 
                className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/20 via-primary/10 to-gold/20 border-2 border-gold/50 shadow-glow-gold backdrop-blur-sm"
                animate={{ 
                  boxShadow: [
                    "0 0 30px hsl(45 90% 55% / 0.3), 0 0 60px hsl(45 90% 55% / 0.15)",
                    "0 0 50px hsl(45 90% 55% / 0.5), 0 0 100px hsl(45 90% 55% / 0.25)",
                    "0 0 30px hsl(45 90% 55% / 0.3), 0 0 60px hsl(45 90% 55% / 0.15)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Crown className="h-6 w-6 text-gold drop-shadow-lg" />
                </motion.div>
                <span className="text-lg font-bold bg-gradient-to-r from-gold via-primary to-gold bg-clip-text text-transparent">
                  {language === "hinglish" ? "प्रीमियम AI वैद्य" : "Premium AI Vaidya"}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                    >
                      <Star className="h-4 w-4 text-gold fill-gold" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              AI-Powered Ayurvedic Consultation
            </div>
          )}
          
          <h1 className={`font-display text-3xl md:text-4xl font-bold mb-2 ${
            isPremium 
              ? "bg-gradient-to-r from-gold via-primary to-gold bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent" 
              : ""
          }`}>
            {isPremium 
              ? (language === "hinglish" ? "श्रेष्ठ आयुर्वेद विशेषज्ञ" : "Elite Ayurveda Expert")
              : "Ayurveda AI Vaidya"
            }
          </h1>
          
          <p className={`text-base ${isPremium ? "text-gold/80" : "text-muted-foreground"} mt-2 max-w-lg mx-auto`}>
            {isPremium 
              ? (language === "hinglish" 
                  ? "✨ असीमित प्रीमियम परामर्श • व्यक्तिगत उपचार योजना • प्राथमिकता सहायता" 
                  : "✨ Unlimited Premium Consultations • Personalized Treatment Plans • Priority Support")
              : (language === "hinglish" 
                  ? "Apni taklif batayein, personalized Ayurvedic guidance payein" 
                  : "Share your concerns, receive personalized Ayurvedic guidance")
            }
          </p>
          
          <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all text-sm font-medium ${
                isPremium 
                  ? "border-gold/40 bg-gold/10 hover:bg-gold/20 text-gold shadow-sm" 
                  : "border-border bg-card hover:bg-muted"
              }`}
            >
              <Globe className="h-4 w-4" />
              {language === "hinglish" ? "Switch to English" : "हिंग्लिश में बदलें"}
            </motion.button>
            
            {user ? (
              <>
                {/* Subscription Status Badge */}
                {isPremium ? (
                  <motion.div 
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold/30 via-primary/20 to-gold/30 border-2 border-gold/50 shadow-glow-gold"
                    animate={{ 
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Gem className="h-5 w-5 text-gold" />
                    <span className="text-sm font-bold text-gold">
                      {language === "hinglish" ? "प्रीमियम सदस्य" : "Premium Member"}
                    </span>
                    <Shield className="h-4 w-4 text-gold/70" />
                  </motion.div>
                ) : freeChatAvailable ? (
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold border border-emerald-500/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Zap className="h-4 w-4" />
                    {language === "hinglish" 
                      ? `${freeChatsRemaining} मुफ्त चैट बाकी` 
                      : `${freeChatsRemaining} Free Chats Left`}
                  </motion.span>
                ) : (
                  <motion.button
                    onClick={() => setShowSubscriptionModal(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-gold/20 to-primary/20 text-gold text-sm font-semibold border border-gold/30 hover:border-gold/50 transition-all shadow-sm hover:shadow-glow-gold"
                  >
                    <Lock className="h-4 w-4" />
                    {language === "hinglish" ? "प्रीमियम अपग्रेड" : "Go Premium"}
                  </motion.button>
                )}
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all text-sm ${
                    isPremium 
                      ? "border-gold/30 bg-gold/10 hover:bg-gold/20 text-gold" 
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <History className="h-4 w-4" />
                  {showHistory ? "Hide" : "History"}
                </button>
                <button
                  onClick={() => signOut()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </>
            ) : (
              <motion.button
                onClick={() => setShowAuthModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-gold text-primary-foreground font-semibold text-sm shadow-lg hover:shadow-glow-terracotta transition-all"
              >
                <LogIn className="h-4 w-4" />
                {language === "hinglish" ? "लॉगिन करें" : "Sign In to Chat"}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Chat History Panel */}
        <AnimatePresence>
          {user && showHistory && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl p-4 mb-6 overflow-hidden ${
                isPremium 
                  ? "bg-gradient-to-r from-gold/5 via-card to-gold/5 border-2 border-gold/20" 
                  : "bg-card border border-border"
              }`}
            >
              <h3 className={`font-medium text-sm mb-3 ${isPremium ? "text-gold" : ""}`}>
                {isPremium 
                  ? (language === "hinglish" ? "आपके प्रीमियम परामर्श" : "Your Premium Consultations")
                  : "Your Consultations"
                }
              </h3>
              <ChatHistory
                sessions={sessions}
                currentSessionId={currentSessionId}
                loading={loadingSessions}
                onSelectSession={loadSession}
                onDeleteSession={deleteSession}
                onNewChat={handleNewChat}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className={`rounded-xl p-4 mb-6 flex items-start gap-3 ${
            isPremium 
              ? "bg-gradient-to-r from-gold/10 via-card to-gold/10 border border-gold/30" 
              : "bg-amber-950/30 border border-amber-700/30"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <AlertCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${isPremium ? "text-gold" : "text-amber-500"}`} />
          <p className={`text-sm ${isPremium ? "text-gold/80" : "text-amber-200/80"}`}>
            {language === "hinglish" 
              ? "Yeh AI Vaidya sirf general Ayurvedic guidance deta hai. Serious problems ke liye physical doctor se milein."
              : "This AI Vaidya provides general Ayurvedic guidance only. Please consult a physical doctor for serious conditions."}
          </p>
        </motion.div>

        {/* Chat Container - Premium luxury styling */}
        <motion.div 
          className={`rounded-2xl overflow-hidden transition-all duration-500 ${
            isPremium 
              ? "bg-gradient-to-br from-card via-card to-gold/5 border-2 border-gold/40 shadow-glow-gold" 
              : "bg-card border border-border shadow-card"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Premium header bar with shimmer */}
          {isPremium && (
            <motion.div 
              className="px-6 py-4 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 border-b border-gold/30 flex items-center justify-between relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex items-center gap-3 relative z-10">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-gold"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1] 
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-sm font-semibold text-gold">
                  {language === "hinglish" ? "प्रीमियम सत्र सक्रिय" : "Premium Session Active"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gold/70 relative z-10">
                <Crown className="h-4 w-4 text-gold" />
                <span>{language === "hinglish" ? "असीमित परामर्श" : "Unlimited Consultations"}</span>
              </div>
            </motion.div>
          )}
          
          <div className="h-[450px] overflow-y-auto p-6 space-y-4 scroll-smooth">
            {messages.map((msg, i) => (
              <motion.div 
                key={i} 
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {msg.role === "assistant" && (
                  <motion.div 
                    className={`w-11 h-11 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      isPremium 
                        ? "bg-gradient-to-br from-gold/40 to-primary/30 border-2 border-gold/50 shadow-glow-gold" 
                        : "bg-secondary/20 border border-secondary/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {isPremium ? (
                      <Crown className="h-5 w-5 text-gold drop-shadow-sm" />
                    ) : (
                      <Brain className="h-5 w-5 text-secondary" />
                    )}
                  </motion.div>
                )}
                <div className={`max-w-[85%] rounded-2xl transition-all ${
                  msg.role === "user" 
                    ? (isPremium 
                        ? "bg-gradient-to-r from-gold/25 to-primary/20 border border-gold/30 rounded-tr-sm shadow-sm" 
                        : "bg-primary/20 border border-primary/20 rounded-tr-sm")
                    : (isPremium 
                        ? "bg-gradient-to-r from-muted via-muted to-gold/5 border border-gold/20 rounded-tl-sm shadow-sm" 
                        : "bg-muted rounded-tl-sm")
                }`}>
                  <div className="p-4">
                    {msg.role === "user" ? (
                      <p className="text-base leading-relaxed whitespace-pre-line">{msg.content}</p>
                    ) : (
                      <div className={`prose prose-sm dark:prose-invert max-w-none text-base leading-relaxed [&>p]:my-2 [&>ul]:my-2 [&>ol]:my-2 [&>ul]:pl-4 [&>ol]:pl-4 [&>li]:my-1 [&>h1]:text-lg [&>h2]:text-base [&>h3]:text-base [&>code]:bg-background/50 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>pre]:bg-background/50 [&>pre]:p-3 [&>pre]:rounded-lg [&>blockquote]:border-l-3 [&>blockquote]:pl-4 [&>blockquote]:italic ${isPremium ? "[&>blockquote]:border-gold [&>strong]:text-gold" : "[&>blockquote]:border-primary"}`}>
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                  {/* TTS Button for AI messages */}
                  {msg.role === "assistant" && i > 0 && (
                    <div className="px-4 pb-3 pt-0">
                      <motion.button
                        onClick={() => speakMessage(msg.content, i)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all ${
                          speakingMessageIndex === i
                            ? (isPremium ? "bg-gold/20 text-gold" : "bg-primary/20 text-primary")
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        title={speakingMessageIndex === i 
                          ? (language === "hinglish" ? "Awaaz band karein" : "Stop speaking") 
                          : (language === "hinglish" ? "Sunein" : "Listen")}
                      >
                        {speakingMessageIndex === i ? (
                          <Square className="h-3.5 w-3.5" />
                        ) : (
                          <Volume2 className="h-3.5 w-3.5" />
                        )}
                        <span>
                          {speakingMessageIndex === i 
                            ? (language === "hinglish" ? "Band" : "Stop") 
                            : (language === "hinglish" ? "Sunein" : "Listen")}
                        </span>
                      </motion.button>
                    </div>
                  )}
                </div>
                {msg.role === "user" && (
                  <motion.div 
                    className={`w-11 h-11 rounded-full flex items-center justify-center ml-3 flex-shrink-0 ${
                      isPremium 
                        ? "bg-gradient-to-r from-gold/30 to-primary/20 border-2 border-gold/40" 
                        : "bg-primary/20 border border-primary/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <User className={`h-5 w-5 ${isPremium ? "text-gold" : "text-primary"}`} />
                  </motion.div>
                )}
              </motion.div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <motion.div 
                className="flex justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                  isPremium ? "bg-gradient-to-br from-gold/30 to-primary/20 border border-gold/30" : "bg-secondary/20"
                }`}>
                  {isPremium ? <Crown className="h-4 w-4 text-gold" /> : <Brain className="h-4 w-4 text-secondary" />}
                </div>
                <div className={`rounded-2xl rounded-tl-sm p-4 ${isPremium ? "bg-gradient-to-r from-muted to-gold/5 border border-gold/20" : "bg-muted"}`}>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span 
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full ${isPremium ? "bg-gold/60" : "bg-muted-foreground/50"}`}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <motion.div 
              className="px-6 pb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs text-muted-foreground mb-2">
                {language === "hinglish" ? "Ya inme se chunein:" : "Or choose from:"}
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setInput(prompt)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-xs px-3 py-2 rounded-full border transition-all ${
                      isPremium 
                        ? "border-gold/30 bg-gold/5 hover:bg-gold/10 hover:border-gold/50 text-foreground" 
                        : "border-border bg-muted/50 hover:bg-muted"
                    }`}
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          <div className={`p-4 border-t ${isPremium ? "border-gold/20 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" : "border-border"}`}>
            {/* Show interim transcript while listening */}
            <AnimatePresence>
              {isListening && interimTranscript && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-2 text-sm text-muted-foreground italic px-2"
                >
                  {interimTranscript}...
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex gap-2">
              {voiceSupported && (
                <motion.button
                  type="button"
                  onPointerDown={() => !isLoading && startListening()}
                  onPointerUp={stopListening}
                  onPointerLeave={stopListening}
                  onPointerCancel={stopListening}
                  onContextMenu={(e) => e.preventDefault()}
                  disabled={isLoading}
                  whileHover={{ scale: isListening ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center justify-center rounded-xl h-12 w-12 transition-all select-none touch-none ${
                    isListening 
                      ? (isPremium 
                          ? "bg-gradient-to-br from-gold to-primary text-primary-foreground scale-110 shadow-glow-gold" 
                          : "bg-primary text-primary-foreground scale-110 shadow-glow-terracotta")
                      : (isPremium 
                          ? "bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30" 
                          : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground")
                  }`}
                  style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}
                  title={language === "hinglish" ? "Dabaye rakhein aur bolein" : "Hold to speak"}
                >
                  <Mic className={`h-5 w-5 ${isListening ? "animate-pulse" : ""}`} />
                  <AnimatePresence>
                    {isListening && (
                      <motion.span 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute -bottom-5 text-[9px] font-semibold text-primary whitespace-nowrap"
                      >
                        {language === "hinglish" ? "Chhod dein" : "Release"}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
              <input
                type="text"
                value={isListening ? interimTranscript || input : input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder={
                  isListening 
                    ? (language === "hinglish" ? "Sun raha hoon..." : "Listening...") 
                    : (language === "hinglish" ? "Apni taklif yahan likhein ya mic dabayein..." : "Type or tap mic to speak...")
                }
                className={`flex-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${
                  isPremium 
                    ? "bg-gold/5 border border-gold/20 focus:ring-gold/30 focus:border-gold/40 placeholder:text-gold/40" 
                    : "bg-muted focus:ring-primary/50"
                }`}
                disabled={isLoading || isListening}
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant={isPremium ? "gold" : "gold"}
                  size="icon" 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={`rounded-xl h-12 w-12 ${isPremium ? "shadow-glow-gold" : ""}`}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
      <SubscriptionModal 
        open={showSubscriptionModal} 
        onOpenChange={setShowSubscriptionModal}
        onSuccess={checkAccess}
      />
    </Layout>
  );
};

export default DoctorAI;
