import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MAX_FREE_CHATS = 15;
const FREE_TRIAL_DAYS = 3;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({
        has_access: false,
        reason: 'not_authenticated',
        free_chats_remaining: 0,
        free_chat_available: false,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get user from token
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);

    if (userError || !user) {
      return new Response(JSON.stringify({
        has_access: false,
        reason: 'invalid_token',
        free_chats_remaining: 0,
        free_chat_available: false,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check if user is within 3-day free trial period
    const userCreatedAt = new Date(user.created_at);
    const now = new Date();
    const daysSinceSignup = (now.getTime() - userCreatedAt.getTime()) / (1000 * 60 * 60 * 24);
    const isInFreeTrial = daysSinceSignup <= FREE_TRIAL_DAYS;
    const trialDaysRemaining = Math.max(0, Math.ceil(FREE_TRIAL_DAYS - daysSinceSignup));

    // If user is within 3-day free trial - unlimited access
    if (isInFreeTrial) {
      return new Response(JSON.stringify({
        has_access: true,
        reason: 'free_trial',
        free_trial: true,
        trial_days_remaining: trialDaysRemaining,
        free_chats_remaining: 0,
        free_chat_available: false,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check active subscription
    const { data: subscription } = await supabase
      .from('user_subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .gte('current_period_end', new Date().toISOString())
      .maybeSingle();

    // If user has active subscription
    if (subscription) {
      return new Response(JSON.stringify({
        has_access: true,
        reason: 'subscribed',
        subscription: {
          plan: subscription.plan_type,
          expires_at: subscription.current_period_end,
        },
        free_chats_remaining: 0,
        free_chat_available: false,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check free chat status (after trial expires)
    const { data: freeChat } = await supabase
      .from('vaidya_free_chats')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    // Calculate remaining free chats
    const usedChats = freeChat?.free_chats_count || 0;
    const remainingChats = Math.max(0, MAX_FREE_CHATS - usedChats);
    const hasFreeChatAccess = remainingChats > 0;

    // If user still has free chats remaining
    if (hasFreeChatAccess) {
      return new Response(JSON.stringify({
        has_access: true,
        reason: 'free_chat',
        free_chats_remaining: remainingChats,
        free_chat_available: true,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // User has used all free chats and no subscription
    return new Response(JSON.stringify({
      has_access: false,
      reason: 'subscription_required',
      free_chats_remaining: 0,
      free_chat_available: false,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      has_access: false,
      reason: 'error',
      free_chats_remaining: 0,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
