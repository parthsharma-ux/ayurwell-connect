import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
        free_chat_available: false,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check free chat status
    const { data: freeChat } = await supabase
      .from('vaidya_free_chats')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

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
        free_chat_available: false,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // If user hasn't used free chat yet
    if (!freeChat || !freeChat.free_chat_used) {
      return new Response(JSON.stringify({
        has_access: true,
        reason: 'free_chat',
        free_chat_available: true,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // User has used free chat and no subscription
    return new Response(JSON.stringify({
      has_access: false,
      reason: 'subscription_required',
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
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
