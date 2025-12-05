import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Send, Sparkles, AlertCircle } from "lucide-react";

const DoctorAI = () => {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Namaste! I'm your AI Vaidya. Describe your symptoms and I'll help identify potential dosha imbalances and suggest Ayurvedic remedies. Please note that this is for informational purposes only and not a substitute for professional medical advice." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    
    // Simulated AI response (placeholder for actual AI integration)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `Based on your symptoms, here are some observations:\n\n**Possible Dosha Imbalance:** This could indicate a Vata or Pitta imbalance.\n\n**Suggested Remedies:**\n• Warm turmeric milk before bed\n• Gentle pranayama breathing exercises\n• Avoid cold and dry foods\n\n**Recommended Medicines:**\n• Ashwagandha for stress\n• Triphala for digestion\n\nPlease consult a qualified Ayurvedic practitioner for personalized advice.`
        }
      ]);
    }, 1000);
    
    setInput("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            AI-Powered Consultation
          </div>
          <h1 className="font-display text-3xl font-bold">AI Vaidya</h1>
          <p className="text-muted-foreground mt-2">Describe your symptoms for Ayurvedic guidance</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            This AI assistant provides general Ayurvedic information only. It is not a substitute for professional medical diagnosis or treatment.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="h-[400px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Brain className="h-4 w-4 text-secondary" />
                  </div>
                )}
                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === "user" ? "bg-primary/10 rounded-tr-sm" : "bg-muted rounded-tl-sm"}`}>
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Describe your symptoms..."
                className="flex-1 h-12 px-4 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button variant="gold" size="lg" onClick={handleSend}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorAI;
