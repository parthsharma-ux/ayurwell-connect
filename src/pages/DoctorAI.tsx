import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Send, Sparkles, AlertCircle } from "lucide-react";

const hinglishResponses = [
  {
    keywords: ["sar", "sir", "head", "dard", "pain", "headache", "migraine", "cephalalgia"],
    response: `Aapke symptoms sun kar lagta hai ki yeh **Vata-Pitta imbalance** ho sakta hai.

**Possible Condition:** Ardhavabhedaka (Migraine) ya Shirah Shool (Headache)

**Gharelu Upchar (Home Remedies):**
• Haldi wala doodh raat ko piyen
• Pudina ya lavender ka tel sir pe lagayen
• Adrak ki chai mein thoda shahad mila kar piyen
• Aankhon pe kheera ya aalu ke slice rakhen

**Recommended Dawaiyan:**
• Godanti Bhasma - migraine ke liye
• Brahmi Vati - nervous system ke liye
• Pathyadi Kwath - sinus headache ke liye

**Diet Tips:**
• Paani zyada piyen (din mein 8-10 glass)
• Screen time kam karein
• Regular neend lein (7-8 hours)

Agar dard 3 din se zyada rahe toh please kisi Ayurvedic doctor se zaroor milein.`
  },
  {
    keywords: ["pet", "stomach", "acidity", "gas", "bloating", "digestion", "constipation", "kabz", "gastric"],
    response: `Aapke symptoms se lagta hai yeh **Pitta ya Vata imbalance** hai.

**Possible Condition:** Amlapitta (Acidity) ya Vibandha (Constipation)

**Gharelu Upchar:**
• Subah khali pet ek glass garam paani mein nimbu aur shahad milakar piyen
• Jeera aur saunf ka paani din mein 2-3 baar piyen
• Triphala churna raat ko sone se pehle lein
• Papita khana shuru karein

**Recommended Dawaiyan:**
• Avipattikar Churna - acidity ke liye
• Hingvastak Churna - gas ke liye
• Triphala - constipation ke liye
• Pudin Hara - instant relief ke liye

**Diet Tips:**
• Mirchi aur fried cheezein avoid karein
• Chhoti-chhoti meal lein
• Raat ko der se khana na khayen
• Thanda paani aur cold drinks se parhez karein

Agar problem 1 hafte se zyada rahe toh doctor se zaroor consulT karein.`
  },
  {
    keywords: ["joint", "jod", "ghutna", "knee", "gathiya", "arthritis", "pain", "stiffness", "swelling"],
    response: `Yeh **Vata dosha ki vikruti** lag rahi hai.

**Possible Condition:** Sandhivata (Arthritis) ya Joint Pain

**Gharelu Upchar:**
• Til ka tel garam karke joints pe malish karein
• Haldi wala doodh roz raat ko piyen (kali mirch zaroor dalein)
• Adrak ka compress lagayen
• Methi dana bheego kar subah khayen

**Recommended Dawaiyan:**
• Yograj Guggulu - joint pain ke liye best
• Maharasnadi Kwath - inflammation ke liye
• Ashwagandha Churna - strength ke liye
• Mahanarayan Tel - massage ke liye

**Lifestyle Tips:**
• Subah 15-20 minute walk karein
• Bhanda (cold) cheezein avoid karein
• Garam paani ka sek dein
• Yoga karein - specially Trikonasana aur Virabhadrasana

Dhyan rakhein: Agar sujan bahut zyada ho ya fever ho toh turant doctor se milein.`
  },
  {
    keywords: ["neend", "sleep", "insomnia", "anidra", "sleeping", "rest", "thakan", "fatigue"],
    response: `Aapko **Vata imbalance** lagta hai jo neend ko affect kar raha hai.

**Possible Condition:** Anidra (Insomnia)

**Gharelu Upchar:**
• Sone se pehle garam doodh mein jaiphal (nutmeg) ka powder lein
• Brahmi tel se sir ki malish karein
• Pair ke talwe mein sarson ka tel lagayen
• Chamomile ya lavender ki khushbu kamre mein rakhein

**Recommended Dawaiyan:**
• Ashwagandha Churna - stress aur anxiety ke liye
• Brahmi Vati - mind ko calm karne ke liye
• Jatamansi - natural sleep inducer
• Shankhpushpi - memory aur neend dono ke liye

**Lifestyle Changes:**
• Phone/TV sone se 1 ghanta pehle band karein
• Fixed time pe soyen aur uthein
• Shaam ko chai/coffee avoid karein
• Light dinner karein, heavy khana neend kharab karta hai

Agar 2 hafte se zyada insomnia rahe toh expert se zaroor milein.`
  },
  {
    keywords: ["sugar", "diabetes", "madhumeha", "blood", "glucose", "meetha", "thirst", "pyaas"],
    response: `Yeh **Kapha-Pitta imbalance** ke symptoms hain.

**Possible Condition:** Madhumeha (Diabetes)

**Gharelu Upchar:**
• Karela juice subah khali pet piyen
• Methi dana raat bhar bheego kar subah khayen
• Jamun ke beej ka powder din mein 2 baar lein
• Amla juice ya powder daily lein

**Recommended Dawaiyan:**
• Chandraprabha Vati - comprehensive diabetes care
• Gudmar (Gymnema) - sugar destroyer kehte hain isse
• Nishamalaki - turmeric aur amla ka powerful combo
• Shilajit - energy aur metabolism ke liye

**Diet Tips:**
• White rice ki jagah brown rice ya jowar ki roti khayen
• Meethi cheezein bilkul avoid karein
• Karela, lauki, turai jaise sabzi khayen
• Regular walk zaroor karein (30 mins daily)

⚠️ **Important:** Diabetes serious condition hai. Regular blood sugar check karwate rahein aur doctor ki advice zaroor lein.`
  },
  {
    keywords: ["bp", "blood pressure", "hypertension", "rakta", "chakkar", "dizziness", "tension"],
    response: `Yeh **Vata-Pitta imbalance** se related symptoms hain.

**Possible Condition:** Rakta Gata Vata (Hypertension)

**Gharelu Upchar:**
• Lehsun (garlic) ki 2 kali subah khali pet khayen
• Lauki ka juice daily piyen
• Amla ka murabba ya juice lein
• Arjun ki chhal ka kadha piyen

**Recommended Dawaiyan:**
• Sarpagandha Vati - BP control ke liye
• Arjunarishta - heart tonic
• Mukta Vati - natural BP reducer
• Brahmi - stress kam karta hai

**Lifestyle Tips:**
• Namak kam khayen
• Stress management zaroor karein
• Daily 30 minute walk ya pranayam karein
• Anulom-Vilom breathing exercise try karein

⚠️ **Warning:** High BP serious hai. Regular monitoring zaroor karein aur agar BP bahut high ho (180+ / 120+) toh turant doctor ke paas jayen.`
  },
  {
    keywords: ["skin", "chamdi", "khujli", "itching", "rash", "pimple", "acne", "eczema", "allergy"],
    response: `Yeh **Pitta-Kapha imbalance** ke symptoms hain.

**Possible Condition:** Kushtha (Skin Disorders)

**Gharelu Upchar:**
• Neem ka paani se affected area dhoyen
• Haldi aur chandan ka paste lagayen
• Aloe vera gel fresh use karein
• Nariyal tel mein camphor mila ke lagayen

**Recommended Dawaiyan:**
• Khadirarishta - blood purifier
• Mahamanjisthadi Kwath - skin problems ke liye
• Neem tablets/capsules - antibacterial
• Gandhak Rasayan - chronic skin issues ke liye

**Diet Tips:**
• Khatta (sour) cheezein avoid karein
• Fermented food kam khayen
• Zyada paani piyen
• Green vegetables aur fruits badhayen

**Precautions:**
• Tight kapde na pehnen
• Chemical products se door rahein
• Direct sunlight se bachein (agar problem ho rahi ho)

Agar skin problem 2 hafte mein theek na ho toh dermatologist se milein.`
  },
  {
    keywords: ["baal", "hair", "hairfall", "ganja", "dandruff", "rusi", "scalp", "baldness"],
    response: `Hair problems mein **Pitta-Vata imbalance** hota hai mostly.

**Possible Condition:** Khalitya (Hair Fall) ya Rusi (Dandruff)

**Gharelu Upchar:**
• Amla, reetha, shikakai se baal dhoyen
• Nariyal tel mein curry leaves garam karke lagayen
• Onion juice scalp pe lagayen (30 mins)
• Methi seeds ka paste baalon mein lagayen

**Recommended Dawaiyan:**
• Bhringraj Tel - king of hair oils
• Mahabhringraj Tel - advanced formula
• Neelibhringadi Tel - South Indian formula
• Amalaki Rasayan - andar se nutrition ke liye

**Diet Tips:**
• Protein zyada lein (dal, paneer, eggs)
• Iron-rich foods khayen (palak, chana)
• Biotin ke liye almonds, walnuts khayen
• Paani zyada piyen

**Lifestyle Tips:**
• Stress kam karein (yeh major reason hai)
• Chemical treatments se bachein
• Sirsasana (headstand) try karein
• Regular oil massage karein

Agar bahut zyada hair fall ho toh thyroid test karwa lein.`
  },
  {
    keywords: ["cough", "khansi", "cold", "sardi", "fever", "bukhar", "throat", "gala"],
    response: `Yeh **Kapha-Vata imbalance** ke symptoms hain.

**Possible Condition:** Pratishyaya (Cold & Cough)

**Gharelu Upchar:**
• Adrak, tulsi, kali mirch ki chai piyen
• Haldi wala doodh raat ko piyen
• Shahad mein adrak ka ras mila ke lein
• Garam paani mein namak dal ke gargles karein

**Recommended Dawaiyan:**
• Sitopaladi Churna - khansi ke liye best
• Talisadi Churna - chest congestion ke liye
• Vasavaleha - chronic cough ke liye
• Tulsi drops - immunity ke liye

**Steam Inhalation:**
• Garam paani mein ajwain ya eucalyptus tel daal ke steam lein
• Din mein 2-3 baar karein

**Diet Tips:**
• Cold cheezein bilkul avoid karein
• Garam soup piyen
• Khichdi ya halka khana khayen
• Dahi aur ice cream se parhez karein

Agar fever 3 din se zyada rahe ya khansi mein khoon aaye toh doctor ke paas zaroor jayen.`
  },
  {
    keywords: ["anxiety", "tension", "stress", "worry", "chinta", "depression", "sad", "nervous"],
    response: `Yeh **Vata imbalance** ke mental symptoms hain.

**Possible Condition:** Chittodvega (Anxiety) ya Manas Rog

**Gharelu Upchar:**
• Brahmi tea daily piyen
• Raat ko garam doodh mein kesar daal ke piyen
• Lavender ya chamomile ki khushbu use karein
• Daily 10-15 minute meditation karein

**Recommended Dawaiyan:**
• Ashwagandha - stress buster #1
• Brahmi Vati - brain tonic
• Shankhpushpi - calming effect
• Jatamansi - natural anxiety reliever

**Yoga & Pranayam:**
• Anulom Vilom - 10 minutes daily
• Bhramari Pranayam - calming ke liye
• Shavasana - relaxation ke liye
• Yoga Nidra - deep rest ke liye

**Lifestyle Tips:**
• Regular routine follow karein
• Social media aur news ka exposure kam karein
• Nature mein time spend karein
• Apne feelings kisi se share karein

⚠️ Mental health important hai. Agar bahut zyada problem ho toh professional help zaroor lein. Koi sharam nahi hai ismein.`
  }
];

const defaultResponse = `Namaste! 🙏 Aapke symptoms samajh mein aaye.

Mujhe thoda aur detail mein batayein:
• Yeh problem kab se hai?
• Kya koi aur symptoms bhi hain?
• Kya pehle se koi dawai le rahe hain?

**General Ayurvedic Tips:**
• Din mein 8-10 glass paani piyen
• Regular exercise ya yoga karein
• Time pe khana khayen aur time pe soyen
• Stress se bachne ki koshish karein

Aap mujhe specific symptoms batayein jaise:
- Sar dard (headache)
- Pet ki problem (stomach issues)
- Joint pain (jodo ka dard)
- Skin problems (chamdi ki samasya)
- Neend na aana (insomnia)
- Khansi/Sardi (cold/cough)

Main aapko proper Ayurvedic guidance de sakta hoon! 😊

**Disclaimer:** Yeh sirf informational guidance hai. Serious problems ke liye qualified Ayurvedic doctor se zaroor milein.`;

const DoctorAI = () => {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Namaste! 🙏 Main aapka AI Vaidya hoon. Mujhe apni taklif batayein - jaise sar dard, pet ki problem, joint pain, skin issues ya kuch bhi. Main Ayurvedic nazar se dekhkar aapko sahi remedy suggest karunga.\n\n**Note:** Yeh sirf guidance ke liye hai, professional medical advice ki jagah nahi le sakta." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const response of hinglishResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    
    return defaultResponse;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getAIResponse(input);
      setMessages((prev) => [...prev, { role: "ai", content: response }]);
      setIsTyping(false);
    }, 1500);
    
    setInput("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            AI-Powered Ayurvedic Consultation
          </div>
          <h1 className="font-display text-3xl font-bold">AI Vaidya</h1>
          <p className="text-muted-foreground mt-2">Apni taklif batayein, Ayurvedic guidance payein</p>
        </div>

        <div className="bg-amber-950/30 border border-amber-700/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-200/80">
            Yeh AI assistant sirf general Ayurvedic information deta hai. Professional medical diagnosis ya treatment ki jagah nahi le sakta. Serious problems ke liye doctor se zaroor milein.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="h-[450px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Brain className="h-4 w-4 text-secondary" />
                  </div>
                )}
                <div className={`max-w-[85%] p-4 rounded-2xl ${msg.role === "user" ? "bg-primary/20 rounded-tr-sm" : "bg-muted rounded-tl-sm"}`}>
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Brain className="h-4 w-4 text-secondary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm p-4">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Apni taklif yahan likhein... (e.g., sar mein dard hai, pet kharab hai)"
                className="flex-1 h-12 px-4 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button variant="gold" size="lg" onClick={handleSend} disabled={isTyping}>
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Sar dard hai", "Pet mein problem", "Joint pain", "Neend nahi aati"].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              className="text-sm px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorAI;
