import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MAX_FREE_CHATS = 15;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Not authenticated');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get user from token
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);

    if (userError || !user) {
      throw new Error('Invalid token');
    }

    // Check if record exists
    const { data: existingRecord } = await supabase
      .from('vaidya_free_chats')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (existingRecord) {
      // Increment the count (DB trigger will cap at MAX_FREE_CHATS)
      const { error } = await supabase
        .from('vaidya_free_chats')
        .update({
          free_chats_count: existingRecord.free_chats_count + 1,
        })
        .eq('user_id', user.id);

      if (error) throw error;

      return new Response(JSON.stringify({
        success: true,
        message: 'Free chat count incremented',
        chats_used: existingRecord.free_chats_count + 1,
        chats_remaining: Math.max(0, MAX_FREE_CHATS - (existingRecord.free_chats_count + 1)),
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      // Create new record with count 1
      const { error } = await supabase
        .from('vaidya_free_chats')
        .insert({
          user_id: user.id,
          free_chats_count: 1,
          first_chat_at: new Date().toISOString(),
        });

      if (error) throw error;

      return new Response(JSON.stringify({
        success: true,
        message: 'First free chat used',
        chats_used: 1,
        chats_remaining: MAX_FREE_CHATS - 1,
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
