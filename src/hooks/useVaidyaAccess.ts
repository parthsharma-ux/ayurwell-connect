import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

type AccessStatus = {
  hasAccess: boolean;
  reason: 'subscribed' | 'free_chat' | 'free_trial' | 'subscription_required' | 'not_authenticated' | 'loading' | 'error';
  freeChatAvailable: boolean;
  freeChatsRemaining: number;
  freeTrial?: boolean;
  trialHoursRemaining?: number;
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
    freeChatsRemaining: 0,
  });
  const [loading, setLoading] = useState(true);

  const checkAccess = useCallback(async () => {
    if (authLoading) return;
    
    if (!user || !session) {
      setAccessStatus({
        hasAccess: false,
        reason: 'not_authenticated',
        freeChatAvailable: false,
        freeChatsRemaining: 0,
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
        freeChatsRemaining: data.free_chats_remaining || 0,
        freeTrial: data.free_trial || false,
        trialHoursRemaining: data.trial_hours_remaining || 0,
        subscription: data.subscription,
      });
    } catch (err) {
      console.error('Error checking access:', err);
      setAccessStatus({
        hasAccess: false,
        reason: 'error',
        freeChatAvailable: false,
        freeChatsRemaining: 0,
      });
    } finally {
      setLoading(false);
    }
  }, [user, session, authLoading]);

  const markFreeChatUsed = useCallback(async () => {
    if (!session) return;
    
    try {
      const { data } = await supabase.functions.invoke('mark-free-chat-used', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });
      
      // Update local state with remaining chats (only if not in free trial)
      if (data?.success) {
        setAccessStatus(prev => {
          // Don't change access during free trial
          if (prev.freeTrial) return prev;
          
          return {
            ...prev,
            freeChatsRemaining: data.chats_remaining,
            freeChatAvailable: data.chats_remaining > 0,
            hasAccess: data.chats_remaining > 0 || prev.reason === 'subscribed',
            reason: data.chats_remaining > 0 ? 'free_chat' : 'subscription_required',
          };
        });
      }
    } catch (err) {
      console.error('Error marking free chat used:', err);
    }
  }, [session]);

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
