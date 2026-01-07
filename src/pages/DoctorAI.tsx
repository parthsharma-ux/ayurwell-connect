import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Send, Sparkles, AlertCircle, Globe, User } from "lucide-react";

type Message = { role: "user" | "ai"; content: string };
type ConsultationStage = "greeting" | "collecting_info" | "followup_1" | "followup_2" | "treatment";
type UserLanguage = "hinglish" | "english";

interface UserProfile {
  symptom: string;
  sleepPattern?: string;
  digestion?: string;
  stressLevel?: string;
  weather?: string;
}

// Dosha determination logic
const determineDoshaFromProfile = (profile: UserProfile): string => {
  const answers = [
    profile.sleepPattern?.toLowerCase() || "",
    profile.digestion?.toLowerCase() || "",
    profile.stressLevel?.toLowerCase() || "",
    profile.weather?.toLowerCase() || ""
  ].join(" ");

  let vataScore = 0, pittaScore = 0, kaphaScore = 0;

  // Vata indicators
  if (answers.includes("irregular") || answers.includes("light") || answers.includes("anxious") || 
      answers.includes("cold") || answers.includes("dry") || answers.includes("variable") ||
      answers.includes("restless") || answers.includes("worried")) {
    vataScore += 2;
  }

  // Pitta indicators
  if (answers.includes("sharp") || answers.includes("hot") || answers.includes("irritable") || 
      answers.includes("acid") || answers.includes("intense") || answers.includes("burning") ||
      answers.includes("angry") || answers.includes("competitive")) {
    pittaScore += 2;
  }

  // Kapha indicators
  if (answers.includes("heavy") || answers.includes("slow") || answers.includes("cold") || 
      answers.includes("sluggish") || answers.includes("oily") || answers.includes("calm") ||
      answers.includes("lethargic") || answers.includes("humid")) {
    kaphaScore += 2;
  }

  if (vataScore >= pittaScore && vataScore >= kaphaScore) return "Vata";
  if (pittaScore >= vataScore && pittaScore >= kaphaScore) return "Pitta";
  return "Kapha";
};

// Treatment plans based on symptoms and dosha
const getTreatmentPlan = (symptom: string, dosha: string, lang: UserLanguage): string => {
  const lowerSymptom = symptom.toLowerCase();
  
  const treatments: Record<string, Record<string, { home: string; diet: string; medicine: string }>> = {
    // Digestive issues
    digestion: {
      Vata: {
        home: lang === "hinglish" 
          ? "1. Garam adrak chai subah khali pet lein\n2. Jeera paani (1 tsp jeera boil karke) din mein 2 baar" 
          : "1. Warm ginger tea on empty stomach in morning\n2. Cumin water (boil 1 tsp cumin) twice daily",
        diet: lang === "hinglish"
          ? "✅ Khayein: Garam, oily khana, khichdi, soups, ghee\n❌ Avoid: Kachchi sabzi, cold drinks, dry snacks"
          : "✅ Eat: Warm, oily foods, khichdi, soups, ghee\n❌ Avoid: Raw vegetables, cold drinks, dry snacks",
        medicine: lang === "hinglish"
          ? "• Hingvastak Churna - 1/2 tsp khane se pehle\n• Triphala - raat ko garam paani ke saath"
          : "• Hingvastak Churna - 1/2 tsp before meals\n• Triphala - at night with warm water"
      },
      Pitta: {
        home: lang === "hinglish"
          ? "1. Saunf paani (1 tsp saunf soak karke) din mein 3 baar\n2. Dhaniya ke patte ka juice subah"
          : "1. Fennel water (soak 1 tsp fennel) 3 times daily\n2. Fresh coriander leaf juice in morning",
        diet: lang === "hinglish"
          ? "✅ Khayein: Thanda khana, coconut, cucumber, mishti\n❌ Avoid: Spicy, fried, sour foods"
          : "✅ Eat: Cooling foods, coconut, cucumber, sweet fruits\n❌ Avoid: Spicy, fried, sour foods",
        medicine: lang === "hinglish"
          ? "• Avipattikar Churna - 1/2 tsp khane ke baad\n• Amalaki - din mein 2 baar"
          : "• Avipattikar Churna - 1/2 tsp after meals\n• Amalaki - twice daily"
      },
      Kapha: {
        home: lang === "hinglish"
          ? "1. Garam paani mein nimbu aur shahad subah\n2. Adrak + kali mirch ki chai"
          : "1. Warm water with lemon and honey in morning\n2. Ginger + black pepper tea",
        diet: lang === "hinglish"
          ? "✅ Khayein: Halka khana, sabziyaan, spicy food\n❌ Avoid: Heavy, oily, dairy products"
          : "✅ Eat: Light foods, vegetables, spicy food\n❌ Avoid: Heavy, oily, dairy products",
        medicine: lang === "hinglish"
          ? "• Trikatu Churna - 1/4 tsp honey ke saath\n• Chitrakadi Vati - khane se pehle"
          : "• Trikatu Churna - 1/4 tsp with honey\n• Chitrakadi Vati - before meals"
      }
    },
    // Stress/Anxiety
    stress: {
      Vata: {
        home: lang === "hinglish"
          ? "1. Garam doodh mein haldi aur jaiphal raat ko\n2. Chamomile ya lavender ki chai"
          : "1. Warm milk with turmeric and nutmeg at night\n2. Chamomile or lavender tea",
        diet: lang === "hinglish"
          ? "✅ Khayein: Warm comfort foods, ghee, nuts, dates\n❌ Avoid: Caffeine, cold foods, irregular meals"
          : "✅ Eat: Warm comfort foods, ghee, nuts, dates\n❌ Avoid: Caffeine, cold foods, irregular meals",
        medicine: lang === "hinglish"
          ? "• Ashwagandha - 500mg raat ko\n• Brahmi - din mein 2 baar focus ke liye"
          : "• Ashwagandha - 500mg at night\n• Brahmi - twice daily for focus"
      },
      Pitta: {
        home: lang === "hinglish"
          ? "1. Rose water thanda paani mein\n2. Coconut oil ki malish sar pe"
          : "1. Rose water in cool water\n2. Coconut oil head massage",
        diet: lang === "hinglish"
          ? "✅ Khayein: Sweet fruits, coconut, milk\n❌ Avoid: Alcohol, coffee, spicy food"
          : "✅ Eat: Sweet fruits, coconut, milk\n❌ Avoid: Alcohol, coffee, spicy food",
        medicine: lang === "hinglish"
          ? "• Brahmi - 500mg din mein 2 baar\n• Shankhpushpi - stress relief ke liye"
          : "• Brahmi - 500mg twice daily\n• Shankhpushpi - for stress relief"
      },
      Kapha: {
        home: lang === "hinglish"
          ? "1. Tulsi chai energizing hoti hai\n2. Dry brush massage circulation ke liye"
          : "1. Tulsi tea for energy\n2. Dry brush massage for circulation",
        diet: lang === "hinglish"
          ? "✅ Khayein: Light, spicy foods, green vegetables\n❌ Avoid: Heavy foods, excessive sleep"
          : "✅ Eat: Light, spicy foods, green vegetables\n❌ Avoid: Heavy foods, excessive sleep",
        medicine: lang === "hinglish"
          ? "• Guggulu - metabolism boost ke liye\n• Brahmi - mental clarity ke liye"
          : "• Guggulu - for metabolism boost\n• Brahmi - for mental clarity"
      }
    },
    // Headache
    headache: {
      Vata: {
        home: lang === "hinglish"
          ? "1. Til ka tel garam karke sar pe lagayein\n2. Garam paani mein pair daalein 15 min"
          : "1. Apply warm sesame oil on head\n2. Soak feet in warm water for 15 min",
        diet: lang === "hinglish"
          ? "✅ Khayein: Warm soups, ghee, hydrating foods\n❌ Avoid: Dry foods, skipping meals, cold"
          : "✅ Eat: Warm soups, ghee, hydrating foods\n❌ Avoid: Dry foods, skipping meals, cold",
        medicine: lang === "hinglish"
          ? "• Pathyadi Kwath - sar dard ke liye\n• Brahmi Ghrit - nasya ke liye"
          : "• Pathyadi Kwath - for headache\n• Brahmi Ghrit - for nasal application"
      },
      Pitta: {
        home: lang === "hinglish"
          ? "1. Chandan ka lep mathe pe\n2. Thandi towel aankhon pe rakhein"
          : "1. Sandalwood paste on forehead\n2. Cold towel on eyes",
        diet: lang === "hinglish"
          ? "✅ Khayein: Cooling foods, coconut water, cucumber\n❌ Avoid: Sun exposure, spicy food"
          : "✅ Eat: Cooling foods, coconut water, cucumber\n❌ Avoid: Sun exposure, spicy food",
        medicine: lang === "hinglish"
          ? "• Shirashuladi Vajra Ras\n• Godanti Bhasma"
          : "• Shirashuladi Vajra Ras\n• Godanti Bhasma"
      },
      Kapha: {
        home: lang === "hinglish"
          ? "1. Eucalyptus oil ki steam lein\n2. Garam adrak chai"
          : "1. Steam with eucalyptus oil\n2. Hot ginger tea",
        diet: lang === "hinglish"
          ? "✅ Khayein: Light, warm foods, honey\n❌ Avoid: Dairy, cold, heavy foods"
          : "✅ Eat: Light, warm foods, honey\n❌ Avoid: Dairy, cold, heavy foods",
        medicine: lang === "hinglish"
          ? "• Trikatu Churna\n• Lakshmivilas Ras"
          : "• Trikatu Churna\n• Lakshmivilas Ras"
      }
    },
    // Sleep issues
    sleep: {
      Vata: {
        home: lang === "hinglish"
          ? "1. Garam doodh mein ashwagandha aur jaiphal\n2. Pair mein ghee ki malish raat ko"
          : "1. Warm milk with ashwagandha and nutmeg\n2. Ghee foot massage at night",
        diet: lang === "hinglish"
          ? "✅ Khayein: Warm, grounding foods, dinner early\n❌ Avoid: Screens, caffeine, late eating"
          : "✅ Eat: Warm, grounding foods, early dinner\n❌ Avoid: Screens, caffeine, late eating",
        medicine: lang === "hinglish"
          ? "• Ashwagandha - 500mg raat ko\n• Jatamansi - neend ke liye"
          : "• Ashwagandha - 500mg at night\n• Jatamansi - for sleep"
      },
      Pitta: {
        home: lang === "hinglish"
          ? "1. Chandan ka tel mathe pe\n2. Thanda doodh raat ko"
          : "1. Sandalwood oil on forehead\n2. Cool milk at night",
        diet: lang === "hinglish"
          ? "✅ Khayein: Cooling foods before bed\n❌ Avoid: Spicy dinner, alcohol"
          : "✅ Eat: Cooling foods before bed\n❌ Avoid: Spicy dinner, alcohol",
        medicine: lang === "hinglish"
          ? "• Brahmi - shanti ke liye\n• Shankhpushpi - relaxation"
          : "• Brahmi - for calmness\n• Shankhpushpi - for relaxation"
      },
      Kapha: {
        home: lang === "hinglish"
          ? "1. Light dinner, no snacking\n2. Eucalyptus oil inhale karein"
          : "1. Light dinner, no snacking\n2. Inhale eucalyptus oil",
        diet: lang === "hinglish"
          ? "✅ Khayein: Light, early dinner\n❌ Avoid: Heavy foods, daytime sleep"
          : "✅ Eat: Light, early dinner\n❌ Avoid: Heavy foods, daytime sleep",
        medicine: lang === "hinglish"
          ? "• Vacha - alertness ke liye din mein\n• Light Triphala - raat ko"
          : "• Vacha - for daytime alertness\n• Light Triphala - at night"
      }
    },
    // Joint pain
    joints: {
      Vata: {
        home: lang === "hinglish"
          ? "1. Til tel ki garam malish daily\n2. Ajwain ka poultice affected area pe"
          : "1. Warm sesame oil massage daily\n2. Ajwain poultice on affected area",
        diet: lang === "hinglish"
          ? "✅ Khayein: Warm, oily foods, soups, ghee\n❌ Avoid: Cold, dry, raw foods"
          : "✅ Eat: Warm, oily foods, soups, ghee\n❌ Avoid: Cold, dry, raw foods",
        medicine: lang === "hinglish"
          ? "• Yograj Guggulu - joint health\n• Mahanarayan Tel - external use"
          : "• Yograj Guggulu - joint health\n• Mahanarayan Tel - external use"
      },
      Pitta: {
        home: lang === "hinglish"
          ? "1. Coconut oil ki malish\n2. Castor leaves ki poultice"
          : "1. Coconut oil massage\n2. Castor leaves poultice",
        diet: lang === "hinglish"
          ? "✅ Khayein: Cooling, anti-inflammatory foods\n❌ Avoid: Spicy, sour, fried"
          : "✅ Eat: Cooling, anti-inflammatory foods\n❌ Avoid: Spicy, sour, fried",
        medicine: lang === "hinglish"
          ? "• Kaishor Guggulu\n• Chandanadi Vati"
          : "• Kaishor Guggulu\n• Chandanadi Vati"
      },
      Kapha: {
        home: lang === "hinglish"
          ? "1. Mustard oil + camphor ki malish\n2. Hot water bottle compress"
          : "1. Mustard oil + camphor massage\n2. Hot water bottle compress",
        diet: lang === "hinglish"
          ? "✅ Khayein: Light, warm, spicy foods\n❌ Avoid: Dairy, cold, heavy foods"
          : "✅ Eat: Light, warm, spicy foods\n❌ Avoid: Dairy, cold, heavy foods",
        medicine: lang === "hinglish"
          ? "• Punarnavadi Guggulu\n• Simhanada Guggulu"
          : "• Punarnavadi Guggulu\n• Simhanada Guggulu"
      }
    },
    // Skin issues
    skin: {
      Vata: {
        home: lang === "hinglish"
          ? "1. Til tel + haldi paste dry skin pe\n2. Doodh mein shahad bath"
          : "1. Sesame oil + turmeric paste on dry skin\n2. Milk and honey bath",
        diet: lang === "hinglish"
          ? "✅ Khayein: Healthy fats, ghee, hydrating foods\n❌ Avoid: Dry, cold, astringent foods"
          : "✅ Eat: Healthy fats, ghee, hydrating foods\n❌ Avoid: Dry, cold, astringent foods",
        medicine: lang === "hinglish"
          ? "• Kumkumadi Tailam - face ke liye\n• Gandhak Rasayan"
          : "• Kumkumadi Tailam - for face\n• Gandhak Rasayan"
      },
      Pitta: {
        home: lang === "hinglish"
          ? "1. Neem + tulsi ka paste\n2. Aloe vera gel fresh lagayein"
          : "1. Neem + tulsi paste\n2. Apply fresh aloe vera gel",
        diet: lang === "hinglish"
          ? "✅ Khayein: Bitter greens, cooling foods\n❌ Avoid: Spicy, fermented, fried"
          : "✅ Eat: Bitter greens, cooling foods\n❌ Avoid: Spicy, fermented, fried",
        medicine: lang === "hinglish"
          ? "• Khadirarishta\n• Mahamanjisthadi Kwath"
          : "• Khadirarishta\n• Mahamanjisthadi Kwath"
      },
      Kapha: {
        home: lang === "hinglish"
          ? "1. Dry brushing before bath\n2. Besan + haldi ubtan"
          : "1. Dry brushing before bath\n2. Chickpea flour + turmeric ubtan",
        diet: lang === "hinglish"
          ? "✅ Khayein: Light, detox foods\n❌ Avoid: Oily, sweet, dairy"
          : "✅ Eat: Light, detox foods\n❌ Avoid: Oily, sweet, dairy",
        medicine: lang === "hinglish"
          ? "• Arogyavardhini Vati\n• Nimbadi Churna"
          : "• Arogyavardhini Vati\n• Nimbadi Churna"
      }
    }
  };

  // Match symptom to category
  let category = "digestion"; // default
  if (lowerSymptom.includes("stress") || lowerSymptom.includes("anxiety") || lowerSymptom.includes("tension") || lowerSymptom.includes("neend") || lowerSymptom.includes("worry")) {
    category = "stress";
  } else if (lowerSymptom.includes("head") || lowerSymptom.includes("sar") || lowerSymptom.includes("migraine")) {
    category = "headache";
  } else if (lowerSymptom.includes("sleep") || lowerSymptom.includes("insomnia") || lowerSymptom.includes("neend")) {
    category = "sleep";
  } else if (lowerSymptom.includes("joint") || lowerSymptom.includes("pain") || lowerSymptom.includes("dard") || lowerSymptom.includes("ghutna") || lowerSymptom.includes("arthritis")) {
    category = "joints";
  } else if (lowerSymptom.includes("skin") || lowerSymptom.includes("acne") || lowerSymptom.includes("pimple") || lowerSymptom.includes("eczema") || lowerSymptom.includes("chamdi")) {
    category = "skin";
  }

  const plan = treatments[category]?.[dosha] || treatments.digestion.Vata;
  return `${plan.home}\n\n${plan.diet}\n\n${plan.medicine}`;
};

const DoctorAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState<ConsultationStage>("greeting");
  const [userProfile, setUserProfile] = useState<UserProfile>({ symptom: "" });
  const [language, setLanguage] = useState<UserLanguage>("hinglish");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    const greeting = language === "hinglish"
      ? "Namaste! 🙏 Main aapka Ayurveda AI Vaidya hoon. Aapki sehat ki chinta mujhe bhi hai.\n\nMujhe batayein, aaj aap kis taklif se guzar rahe hain? (Jaise: pet mein problem, sar dard, stress, joint pain, skin issues...)"
      : "Namaste! 🙏 I am your Ayurveda AI Vaidya. Your health is my priority.\n\nPlease tell me, what health concern brings you here today? (For example: digestive issues, headache, stress, joint pain, skin problems...)";
    
    setMessages([{ role: "ai", content: greeting }]);
  }, [language]);

  const generateFollowupQuestion = (questionNum: number): string => {
    if (language === "hinglish") {
      switch (questionNum) {
        case 1:
          return "Dhanyavaad apni problem batane ke liye. 🙏\n\nAapka Dosha samajhne ke liye kuch sawaal:\n\n**1. Aapki neend kaisi hai?**\n(Jaise: achhi neend aati hai, beech mein uthta hoon, late tak jaagta hoon, bahut zyada sota hoon)";
        case 2:
          return "Samajh gaya. Ab batayein:\n\n**2. Aapka digestion kaisa hai?**\n(Jaise: normal hai, gas/acidity hoti hai, slow digestion, kabz rehti hai)";
        case 3:
          return "Theek hai. Last question:\n\n**3. Aapka stress level kaisa hai aur aapke city mein weather kaisa hai?**\n(Jaise: bahut stressed, thoda tension, relaxed. Weather: garam, thanda, humid, dry)";
        default:
          return "";
      }
    } else {
      switch (questionNum) {
        case 1:
          return "Thank you for sharing your concern. 🙏\n\nTo understand your Dosha constitution, I need to ask a few questions:\n\n**1. How is your sleep pattern?**\n(For example: sleep well, wake up frequently, stay up late, oversleep)";
        case 2:
          return "I understand. Now tell me:\n\n**2. How is your digestion?**\n(For example: normal, gas/acidity issues, slow digestion, constipation)";
        case 3:
          return "Good. Last question:\n\n**3. What is your stress level and the current weather in your city?**\n(For example: very stressed, somewhat tense, relaxed. Weather: hot, cold, humid, dry)";
        default:
          return "";
      }
    }
  };

  const generateTreatmentResponse = (profile: UserProfile): string => {
    const dosha = determineDoshaFromProfile(profile);
    const treatment = getTreatmentPlan(profile.symptom, dosha, language);
    
    if (language === "hinglish") {
      return `🌿 **Aapki Ayurvedic Consultation Report**

Based on aapke answers, aapka dominant dosha **${dosha}** lagta hai.

---

**A. 🏠 GHAR KA UPAY (Home Remedy):**
${treatment.split("\n\n")[0]}

---

**B. 🍽️ DIET & LIFESTYLE:**
${treatment.split("\n\n")[1]}

---

**C. 💊 AYURVEDIC MEDICINE:**
${treatment.split("\n\n")[2]}

---

💎 **Premium Plan Upgrade:**
Agar aap chahte hain ek detailed **10-page Personalized Healing Blueprint** aur **30-day customized Diet Plan**, toh aap hamare Premium Plan le sakte hain sirf **₹499** mein!

International users ke liye: **$15** (USDT via Binance accepted)

🛒 Specific products ke liye: [AyurWell Shop](/)

---

⚠️ **Note:** Yeh AI consultation Ayurvedic principles pe based hai. Chronic conditions ya pregnancy mein physical Vaidya se zaroor milein.`;
    } else {
      return `🌿 **Your Ayurvedic Consultation Report**

Based on your responses, your dominant dosha appears to be **${dosha}**.

---

**A. 🏠 HOME REMEDY:**
${treatment.split("\n\n")[0]}

---

**B. 🍽️ DIET & LIFESTYLE:**
${treatment.split("\n\n")[1]}

---

**C. 💊 AYURVEDIC MEDICINE:**
${treatment.split("\n\n")[2]}

---

💎 **Premium Plan Upgrade:**
For a detailed **10-page Personalized Healing Blueprint** and **30-day customized Diet Plan**, you can upgrade to our Premium Plan for just **$15** (or ₹499 for India).

We accept USDT via Binance for international payments.

🛒 For specific products: [AyurWell Shop](/)

---

⚠️ **Note:** This is an AI consultation based on Ayurvedic principles. Please consult a physical Vaidya for chronic conditions or if you are pregnant.`;
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      let newStage = stage;

      switch (stage) {
        case "greeting":
          setUserProfile(prev => ({ ...prev, symptom: userMessage }));
          response = generateFollowupQuestion(1);
          newStage = "followup_1";
          break;
        
        case "followup_1":
          setUserProfile(prev => ({ ...prev, sleepPattern: userMessage }));
          response = generateFollowupQuestion(2);
          newStage = "followup_2";
          break;
        
        case "followup_2":
          setUserProfile(prev => ({ ...prev, digestion: userMessage }));
          response = generateFollowupQuestion(3);
          newStage = "collecting_info";
          break;
        
        case "collecting_info":
          const updatedProfile = { ...userProfile, stressLevel: userMessage, weather: userMessage };
          setUserProfile(updatedProfile);
          response = generateTreatmentResponse(updatedProfile);
          newStage = "treatment";
          break;
        
        case "treatment":
          // After treatment, allow follow-up questions
          if (language === "hinglish") {
            response = "Kya aapko koi aur sawal hai ya kisi aur problem ke baare mein jaanna chahte hain?\n\nNaya consultation shuru karne ke liye page refresh karein ya apni nayi taklif batayein.";
          } else {
            response = "Do you have any other questions or would you like to discuss another health concern?\n\nTo start a new consultation, refresh the page or tell me about your new concern.";
          }
          break;
      }

      setStage(newStage);
      setMessages(prev => [...prev, { role: "ai", content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "hinglish" ? "english" : "hinglish");
    setStage("greeting");
    setUserProfile({ symptom: "" });
  };

  const suggestedPrompts = language === "hinglish" 
    ? ["Pet mein gas aur acidity", "Bahut stress ho raha hai", "Ghutno mein dard", "Skin pe pimples", "Neend nahi aati"]
    : ["Digestive issues", "Stress and anxiety", "Joint pain", "Skin problems", "Sleep issues"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            {language === "hinglish" ? "AI-Powered Ayurvedic Consultation" : "AI-Powered Ayurvedic Consultation"}
          </div>
          <h1 className="font-display text-3xl font-bold">Ayurveda AI Vaidya</h1>
          <p className="text-muted-foreground mt-2">
            {language === "hinglish" 
              ? "Apni taklif batayein, personalized Ayurvedic guidance payein" 
              : "Share your concerns, receive personalized Ayurvedic guidance"}
          </p>
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted transition-colors text-sm"
          >
            <Globe className="h-4 w-4" />
            {language === "hinglish" ? "Switch to English" : "हिंग्लिश में बदलें"}
          </button>
        </div>

        <div className="bg-amber-950/30 border border-amber-700/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-200/80">
            {language === "hinglish" 
              ? "Yeh AI Vaidya sirf general Ayurvedic guidance deta hai. Serious problems ke liye physical doctor se milein."
              : "This AI Vaidya provides general Ayurvedic guidance only. Please consult a physical doctor for serious conditions."}
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
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ml-3 flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
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
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          {stage === "greeting" && messages.length <= 1 && (
            <div className="px-6 pb-4">
              <p className="text-xs text-muted-foreground mb-2">
                {language === "hinglish" ? "Ya inme se chunein:" : "Or choose from:"}
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(prompt)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-border">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={language === "hinglish" ? "Apni taklif yahan likhein..." : "Type your concern here..."}
                className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button 
                variant="gold" 
                size="icon" 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="rounded-xl h-11 w-11"
              >
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
