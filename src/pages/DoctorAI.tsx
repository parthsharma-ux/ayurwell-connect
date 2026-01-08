import { useState, useRef, useEffect, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Send, Sparkles, AlertCircle, Globe, User, Loader2, History, LogIn, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useVaidyaChat } from "@/hooks/useVaidyaChat";
import { AuthModal } from "@/components/vaidya/AuthModal";
import { ChatHistory } from "@/components/vaidya/ChatHistory";

type Message = { role: "user" | "assistant"; content: string };
type UserLanguage = "hinglish" | "english";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/vaidya-chat`;

const DoctorAI = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<UserLanguage>("hinglish");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
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
  };

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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            AI-Powered Ayurvedic Consultation
          </div>
          <h1 className="font-display text-3xl font-bold">Ayurveda AI Vaidya</h1>
          <p className="text-muted-foreground mt-2">
            {language === "hinglish" 
              ? "Apni taklif batayein, personalized Ayurvedic guidance payein" 
              : "Share your concerns, receive personalized Ayurvedic guidance"}
          </p>
          
          <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm"
            >
              <Globe className="h-4 w-4" />
              {language === "hinglish" ? "Switch to English" : "हिंग्लिश में बदलें"}
            </button>
            
            {user ? (
              <>
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm"
                >
                  <History className="h-4 w-4" />
                  {showHistory ? "Hide History" : "Past Consultations"}
                </button>
                <button
                  onClick={() => signOut()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/10 hover:bg-primary/20 transition-colors text-sm text-primary"
              >
                <LogIn className="h-4 w-4" />
                Sign In to Save Chats
              </button>
            )}
          </div>
        </div>

        {/* Chat History Panel */}
        {user && showHistory && (
          <div className="bg-card rounded-xl border border-border p-4 mb-6">
            <h3 className="font-medium text-sm mb-3">Your Consultations</h3>
            <ChatHistory
              sessions={sessions}
              currentSessionId={currentSessionId}
              loading={loadingSessions}
              onSelectSession={loadSession}
              onDeleteSession={deleteSession}
              onNewChat={handleNewChat}
            />
          </div>
        )}

        <div className="bg-amber-950/30 border border-amber-700/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-200/80">
            {language === "hinglish" 
              ? "Yeh AI Vaidya sirf general Ayurvedic guidance deta hai. Serious problems ke liye physical doctor se milein."
              : "This AI Vaidya provides general Ayurvedic guidance only. Please consult a physical doctor for serious conditions."}
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="h-[450px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Brain className="h-4 w-4 text-secondary" />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-2xl ${msg.role === "user" ? "bg-primary/20 rounded-tr-sm" : "bg-muted rounded-tl-sm"}`}>
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ml-3 flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Brain className="h-4 w-4 text-secondary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm p-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-6 pb-4">
              <p className="text-xs text-muted-foreground mb-2">
                {language === "hinglish" ? "Ya inme se chunein:" : "Or choose from:"}
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(prompt)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-border">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                placeholder={language === "hinglish" ? "Apni taklif yahan likhein..." : "Type your concern here..."}
                className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={isLoading}
              />
              <Button 
                variant="gold" 
                size="icon" 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="rounded-xl h-11 w-11"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </Layout>
  );
};

export default DoctorAI;
