import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are "Ayurveda AI Vaidya" — a warm, wise Ayurvedic doctor. Reply SHORT, SCANNABLE, and HUMAN. Never write long paragraphs.

STRICT LENGTH RULES:
- Max 120 words per reply. Never exceed.
- Use short bullets (max 6-8 words each), not paragraphs.
- 1 short empathy line at the top (max 12 words).
- Use bold headings like **Remedy**, **Diet**, **Herb** — one line each.
- No filler, no repetition, no long disclaimers.
- Emojis: use 1-2 max (🌿 ✅ ❌ 💎 ⚠️).

LANGUAGE:
- Hinglish for Indian users, simple English for others (based on user's language tag).

FLOW:
1) First 1-2 replies: ask ONLY 2 short follow-up questions (sleep / digestion / stress / weather). No solution yet.
2) After enough info, give the "Triple Threat" in this exact compact format:

**🌿 Remedy:** 1 line (kitchen remedy)
**Diet:**
✅ eat: 3-4 items
❌ avoid: 3-4 items
**Herb:** 1-2 names, 1 line dosage hint

Then ONE short line:
💎 Premium blueprint + 30-day diet plan — ₹499 / $15.
⚠️ Consult a physical Vaidya for chronic/pregnancy cases.

DOSHA QUICK REF (internal): Vata=dry/anxious, Pitta=hot/acidic, Kapha=heavy/sluggish.

Tone: caring, confident, crisp. NEVER give a wall of text. If the answer feels long, cut it in half.`;

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
