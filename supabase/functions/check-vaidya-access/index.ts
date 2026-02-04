import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MAX_FREE_CHATS = 15;
const FREE_TRIAL_DAYS = 1;

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

    // Free trial starts from the user's first AI Doctor use (first_chat_at)
    // We persist this in vaidya_free_chats so the trial is consistent across devices.
    const now = new Date();
    let { data: freeChat } = await supabase
      .from('vaidya_free_chats')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    // If the user doesn't have a record yet, create one and start the trial now.
    if (!freeChat) {
      const { data: inserted } = await supabase
        .from('vaidya_free_chats')
        .insert({
          user_id: user.id,
          free_chats_count: 0,
          free_chat_used: false,
          first_chat_at: now.toISOString(),
        })
        .select('*')
        .maybeSingle();

      freeChat = inserted ?? null;
    }

    const trialStartIso = freeChat?.first_chat_at ?? now.toISOString();
    const trialStart = new Date(trialStartIso);
    const hoursSinceTrialStart = (now.getTime() - trialStart.getTime()) / (1000 * 60 * 60);
    const trialHours = FREE_TRIAL_DAYS * 24; // Convert days to hours (1 day = 24 hours)
    const isInFreeTrial = hoursSinceTrialStart <= trialHours;
    const trialHoursRemaining = Math.max(0, Math.ceil(trialHours - hoursSinceTrialStart));

    // If user is within 1-day (24 hour) free trial - unlimited access
    if (isInFreeTrial) {
      return new Response(JSON.stringify({
        has_access: true,
        reason: 'free_trial',
        free_trial: true,
        trial_hours_remaining: trialHoursRemaining,
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
