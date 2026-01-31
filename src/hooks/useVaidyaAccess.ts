import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

type AccessStatus = {
  hasAccess: boolean;
  reason: 'subscribed' | 'free_chat' | 'subscription_required' | 'not_authenticated' | 'loading' | 'error';
  freeChatAvailable: boolean;
  subscription?: {
    plan: string;
    expiresAt: string;
  };
};

export const useVaidyaAccess = () => {
  const { user, session, loading: authLoading } = useAuth();
  const [accessStatus, setAccessStatus] = useState<AccessStatus>({
    hasAccess: false,
    reason: 'loading',
    freeChatAvailable: false,
  });
  const [loading, setLoading] = useState(true);

  const checkAccess = useCallback(async () => {
    if (authLoading) return;
    
    if (!user || !session) {
      setAccessStatus({
        hasAccess: false,
        reason: 'not_authenticated',
        freeChatAvailable: false,
      });
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('check-vaidya-access', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        throw error;
      }

      setAccessStatus({
        hasAccess: data.has_access,
        reason: data.reason,
        freeChatAvailable: data.free_chat_available || false,
        subscription: data.subscription,
      });
    } catch (err) {
      console.error('Error checking access:', err);
      setAccessStatus({
        hasAccess: false,
        reason: 'error',
        freeChatAvailable: false,
      });
    } finally {
      setLoading(false);
    }
  }, [user, session, authLoading]);

  const markFreeChatUsed = useCallback(async () => {
    if (!session) return;
    
    try {
      await supabase.functions.invoke('mark-free-chat-used', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });
      // Refresh access status after marking free chat as used
      await checkAccess();
    } catch (err) {
      console.error('Error marking free chat used:', err);
    }
  }, [session, checkAccess]);

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  return {
    ...accessStatus,
    loading: loading || authLoading,
    checkAccess,
    markFreeChatUsed,
  };
};
