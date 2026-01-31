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
    const { order_type, items, amount, currency, customer_info, user_id } = await req.json();

    const razorpayKeyId = Deno.env.get('RAZORPAY_KEY_ID');
    const razorpayKeySecret = Deno.env.get('RAZORPAY_KEY_SECRET');

    if (!razorpayKeyId || !razorpayKeySecret) {
      throw new Error('Razorpay credentials not configured');
    }

    // Create Razorpay order
    const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${razorpayKeyId}:${razorpayKeySecret}`),
      },
      body: JSON.stringify({
        amount: amount, // amount in smallest currency unit (paise/cents)
        currency: currency || 'INR',
        receipt: `order_${Date.now()}`,
        notes: {
          order_type,
          customer_name: customer_info?.name || '',
        },
      }),
    });

    if (!razorpayResponse.ok) {
      const error = await razorpayResponse.text();
      throw new Error(`Razorpay API error: ${error}`);
    }

    const razorpayOrder = await razorpayResponse.json();

    // Save order to database
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: dbOrder, error: dbError } = await supabase
      .from('orders')
      .insert({
        user_id: user_id || null,
        order_type,
        items,
        total_amount: amount,
        currency: currency || 'INR',
        status: 'pending',
        razorpay_order_id: razorpayOrder.id,
        customer_name: customer_info?.name,
        customer_email: customer_info?.email,
        customer_phone: customer_info?.phone,
        shipping_address: customer_info?.address || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to create order in database');
    }

    return new Response(JSON.stringify({
      success: true,
      order_id: dbOrder.id,
      razorpay_order_id: razorpayOrder.id,
      razorpay_key_id: razorpayKeyId,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

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
