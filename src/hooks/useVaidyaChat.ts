import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

type Message = { role: "user" | "assistant"; content: string };
type UserLanguage = "hinglish" | "english";

type VaidyaSession = {
  id: string;
  title: string;
  language: string;
  created_at: string;
  updated_at: string;
};

export const useVaidyaChat = (language: UserLanguage) => {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<VaidyaSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingSessions, setLoadingSessions] = useState(false);

  // Load user's sessions
  const loadSessions = useCallback(async () => {
    if (!user) {
      setSessions([]);
      return;
    }
    
    setLoadingSessions(true);
    const { data, error } = await supabase
      .from("vaidya_sessions")
      .select("*")
      .order("updated_at", { ascending: false });
    
    if (!error && data) {
      setSessions(data);
    }
    setLoadingSessions(false);
  }, [user]);

  // Load messages for a session
  const loadSession = useCallback(async (sessionId: string) => {
    const { data, error } = await supabase
      .from("vaidya_messages")
      .select("*")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true });
    
    if (!error && data) {
      setMessages(data.map(m => ({ role: m.role as "user" | "assistant", content: m.content })));
      setCurrentSessionId(sessionId);
    }
  }, []);

  // Create a new session
  const createSession = useCallback(async (firstMessage: string): Promise<string | null> => {
    if (!user) return null;
    
    const title = firstMessage.slice(0, 50) + (firstMessage.length > 50 ? "..." : "");
    
    const { data, error } = await supabase
      .from("vaidya_sessions")
      .insert({ user_id: user.id, title, language })
      .select()
      .single();
    
    if (error || !data) return null;
    
    setCurrentSessionId(data.id);
    setSessions(prev => [data, ...prev]);
    return data.id;
  }, [user, language]);

  // Save a message to the database
  const saveMessage = useCallback(async (sessionId: string, role: "user" | "assistant", content: string) => {
    await supabase
      .from("vaidya_messages")
      .insert({ session_id: sessionId, role, content });
    
    // Update session timestamp
    await supabase
      .from("vaidya_sessions")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", sessionId);
  }, []);

  // Delete a session
  const deleteSession = useCallback(async (sessionId: string) => {
    await supabase
      .from("vaidya_sessions")
      .delete()
      .eq("id", sessionId);
    
    setSessions(prev => prev.filter(s => s.id !== sessionId));
    
    if (currentSessionId === sessionId) {
      setCurrentSessionId(null);
      setMessages([]);
    }
  }, [currentSessionId]);

  // Start new chat
  const startNewChat = useCallback(() => {
    setCurrentSessionId(null);
    setMessages([]);
  }, []);

  // Load sessions when user changes
  useEffect(() => {
    loadSessions();
  }, [loadSessions]);

  return {
    sessions,
    currentSessionId,
    messages,
    setMessages,
    loadingSessions,
    loadSessions,
    loadSession,
    createSession,
    saveMessage,
    deleteSession,
    startNewChat,
  };
};
