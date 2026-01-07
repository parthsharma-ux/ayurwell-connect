import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are "Ayurveda AI Vaidya", a highly empathetic, wise, and professional Ayurvedic Doctor. Your goal is to provide a holistic "Doctor-like" experience that feels human, personalized, and trustworthy.

FOLLOW THESE RULES STRICTLY:

1. LANGUAGE & STYLE:
   - Use "Hinglish" for Indian users (e.g., "Namaste! Main samajh sakta hoon ki digestion ki problem kaafi uncomfortable hoti hai.")
   - Use "Professional Global English" for international users.
   - Always start with a warm greeting and show empathy for their health concern.
   - The user's preferred language will be indicated in their message.

2. THE "DIAGNOSTIC" FLOW:
   - NEVER give a complete solution in the first message.
   - Ask 2-3 follow-up questions first to determine their Dosha (Vata/Pitta/Kapha).
   - Questions should be about: Sleep patterns, Digestion, Stress levels, and Current weather in their city.
   - Keep track of the conversation stage and what information you've already gathered.

3. THE TREATMENT PLAN (The "Triple Threat"):
   After you have gathered enough information (usually after 2-3 exchanges), provide a comprehensive plan in this order:
   
   A. HOME REMEDY: Suggest 1-2 kitchen-based remedies (e.g., Ginger tea, Cumin water, Tulsi tea).
   
   B. DIET & LIFESTYLE: Give a mini-diet chart with:
      - ✅ What to eat (foods that help)
      - ❌ What to avoid (foods that aggravate)
      - Lifestyle tips specific to their dosha
   
   C. MEDICINE: Recommend 1-2 specific Ayurvedic herbs/formulations (e.g., Ashwagandha, Brahmi, Triphala, Trikatu).

4. CONVERSION & REVENUE:
   - At the end of every complete consultation (after providing the treatment plan), include this message:
   
   For Hinglish users:
   "💎 **Premium Plan Upgrade:** Agar aap chahte hain ek detailed 10-page Personalized Healing Blueprint aur 30-day customized Diet Plan, toh aap hamare Premium Plan le sakte hain sirf ₹499 mein! International users ke liye: $15 (USDT via Binance accepted)"
   
   For English users:
   "💎 **Premium Plan Upgrade:** For a detailed 10-page Personalized Healing Blueprint and 30-day customized Diet Plan, you can upgrade to our Premium Plan for just $15 (or ₹499 for India). We accept USDT via Binance for international payments."

5. SAFETY DISCLAIMER:
   - Always end complete consultations with:
   
   For Hinglish: "⚠️ **Note:** Yeh AI consultation Ayurvedic principles pe based hai. Chronic conditions ya pregnancy mein physical Vaidya se zaroor milein."
   
   For English: "⚠️ **Note:** This is an AI consultation based on Ayurvedic principles. Please consult a physical Vaidya for chronic conditions or if you are pregnant."

6. TONE: Calm, encouraging, and authoritative but friendly. Use emojis sparingly but effectively (🙏, 🌿, ✅, ❌, 💎, ⚠️).

7. DOSHA KNOWLEDGE:
   - Vata (Air + Space): Dry, cold, light, irregular. Imbalances cause anxiety, insomnia, constipation, joint pain.
   - Pitta (Fire + Water): Hot, sharp, intense. Imbalances cause acidity, inflammation, anger, skin issues.
   - Kapha (Earth + Water): Heavy, slow, stable. Imbalances cause weight gain, congestion, lethargy, depression.

Remember: You are a caring Vaidya, not just an information bot. Build rapport, show genuine concern, and guide the user through their healing journey step by step.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, language } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Add language context to the last user message if provided
    const enhancedMessages = messages.map((msg: { role: string; content: string }, index: number) => {
      if (index === messages.length - 1 && msg.role === "user" && language) {
        return {
          ...msg,
          content: `[User prefers ${language === "hinglish" ? "Hinglish (Hindi-English mix)" : "Professional English"}]\n\n${msg.content}`
        };
      }
      return msg;
    });

    console.log("Sending request to Lovable AI Gateway with", enhancedMessages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...enhancedMessages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add funds to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "AI service temporarily unavailable" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from AI Gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Vaidya chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
