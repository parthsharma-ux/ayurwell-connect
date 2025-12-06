export interface Disease {
  id: string;
  name: string;
  hindi_name?: string;
  symptoms: string[];
  dosha_involved: string;
  description: string;
  causes: string[];
  recommended_medicines: string[];
  home_remedies: string[];
  diet_tips: {
    foods_to_eat: string[];
    foods_to_avoid: string[];
  };
  yoga_postures: string[];
  category: string;
  image?: string;
}

export const diseases: Disease[] = [
  {
    id: "diabetes",
    name: "Diabetes (Madhumeha)",
    hindi_name: "मधुमेह",
    symptoms: ["Excessive thirst", "Frequent urination", "Fatigue", "Blurred vision", "Slow wound healing", "Unexplained weight loss"],
    dosha_involved: "Kapha-Pitta",
    description: "Diabetes is called Madhumeha in Ayurveda. It is primarily a Kapha disorder caused by diminished functioning of Agni (digestive fire) leading to high blood sugar levels.",
    causes: ["Sedentary lifestyle", "Excessive sweet consumption", "Genetic factors", "Obesity", "Stress"],
    recommended_medicines: ["med-1", "med-2", "med-3", "med-4"],
    home_remedies: ["remedy-1", "remedy-2", "remedy-3"],
    diet_tips: {
      foods_to_eat: ["Bitter gourd", "Fenugreek seeds", "Amla", "Turmeric", "Barley", "Green leafy vegetables", "Jamun"],
      foods_to_avoid: ["Sugar", "White rice", "Potatoes", "Sweet fruits", "Processed foods", "Deep fried foods"]
    },
    yoga_postures: ["Surya Namaskar", "Paschimottanasana", "Ardha Matsyendrasana", "Dhanurasana", "Pranayama"],
    category: "Metabolic Disorders"
  },
  {
    id: "hypertension",
    name: "Hypertension (Rakta Gata Vata)",
    hindi_name: "उच्च रक्तचाप",
    symptoms: ["Headache", "Dizziness", "Chest pain", "Shortness of breath", "Nosebleeds", "Vision problems"],
    dosha_involved: "Vata-Pitta",
    description: "High blood pressure in Ayurveda is known as Rakta Gata Vata. It occurs when Vata accumulates in the blood channels causing increased pressure.",
    causes: ["Stress", "High salt intake", "Obesity", "Lack of exercise", "Genetic factors", "Excessive alcohol"],
    recommended_medicines: ["med-5", "med-6", "med-7"],
    home_remedies: ["remedy-4", "remedy-5"],
    diet_tips: {
      foods_to_eat: ["Garlic", "Honey", "Watermelon", "Banana", "Spinach", "Beetroot", "Celery"],
      foods_to_avoid: ["Salt", "Fried foods", "Red meat", "Caffeine", "Alcohol", "Processed foods"]
    },
    yoga_postures: ["Shavasana", "Sukhasana", "Vajrasana", "Shitali Pranayama", "Anulom Vilom"],
    category: "Cardiovascular"
  },
  {
    id: "arthritis",
    name: "Arthritis (Sandhivata)",
    hindi_name: "गठिया",
    symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Crackling sound in joints", "Warmth around joints"],
    dosha_involved: "Vata",
    description: "Sandhivata is a Vata disorder where Vata accumulates in joints causing pain, stiffness, and degeneration of joint tissues.",
    causes: ["Aging", "Injury", "Obesity", "Cold weather", "Improper diet", "Sedentary lifestyle"],
    recommended_medicines: ["med-8", "med-9", "med-10", "med-11"],
    home_remedies: ["remedy-6", "remedy-7", "remedy-8"],
    diet_tips: {
      foods_to_eat: ["Ginger", "Turmeric", "Ghee", "Warm soups", "Sesame oil", "Green vegetables", "Garlic"],
      foods_to_avoid: ["Cold foods", "Raw vegetables", "Beans", "Potatoes", "Tomatoes", "Eggplant"]
    },
    yoga_postures: ["Trikonasana", "Virabhadrasana", "Setu Bandhasana", "Marjariasana", "Gentle stretching"],
    category: "Musculoskeletal"
  },
  {
    id: "acidity",
    name: "Acidity (Amlapitta)",
    hindi_name: "अम्लपित्त",
    symptoms: ["Burning sensation in chest", "Sour taste in mouth", "Bloating", "Nausea", "Headache", "Bad breath"],
    dosha_involved: "Pitta",
    description: "Amlapitta is a Pitta disorder characterized by excessive acid production in the stomach leading to heartburn and digestive discomfort.",
    causes: ["Spicy food", "Irregular eating", "Stress", "Excessive tea/coffee", "Late night eating", "Alcohol"],
    recommended_medicines: ["med-12", "med-13", "med-14"],
    home_remedies: ["remedy-9", "remedy-10", "remedy-11"],
    diet_tips: {
      foods_to_eat: ["Coconut water", "Banana", "Cold milk", "Cucumber", "Watermelon", "Fennel seeds", "Coriander"],
      foods_to_avoid: ["Spicy food", "Citrus fruits", "Tomatoes", "Onions", "Garlic", "Fried foods", "Coffee"]
    },
    yoga_postures: ["Vajrasana", "Pawanmuktasana", "Halasana", "Shitali Pranayama"],
    category: "Digestive"
  },
  {
    id: "constipation",
    name: "Constipation (Vibandha)",
    hindi_name: "कब्ज",
    symptoms: ["Difficulty passing stool", "Hard stools", "Bloating", "Abdominal discomfort", "Loss of appetite", "Headache"],
    dosha_involved: "Vata",
    description: "Vibandha is caused by Vata imbalance leading to dryness in the colon and difficulty in bowel movements.",
    causes: ["Low fiber diet", "Dehydration", "Lack of exercise", "Suppressing urges", "Stress", "Medications"],
    recommended_medicines: ["med-15", "med-16", "med-17"],
    home_remedies: ["remedy-12", "remedy-13", "remedy-14"],
    diet_tips: {
      foods_to_eat: ["Papaya", "Prunes", "Whole grains", "Leafy greens", "Warm water", "Ghee", "Flaxseeds"],
      foods_to_avoid: ["Processed foods", "White bread", "Dairy", "Red meat", "Fried foods", "Bananas"]
    },
    yoga_postures: ["Pawanmuktasana", "Malasana", "Ardha Matsyendrasana", "Bhujangasana"],
    category: "Digestive"
  },
  {
    id: "asthma",
    name: "Asthma (Tamaka Shwasa)",
    hindi_name: "दमा",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty breathing at night", "Fatigue"],
    dosha_involved: "Kapha-Vata",
    description: "Tamaka Shwasa is a respiratory disorder caused by Kapha blocking the respiratory channels with Vata aggravation.",
    causes: ["Allergies", "Pollution", "Cold weather", "Dust", "Emotional stress", "Respiratory infections"],
    recommended_medicines: ["med-18", "med-19", "med-20"],
    home_remedies: ["remedy-15", "remedy-16", "remedy-17"],
    diet_tips: {
      foods_to_eat: ["Ginger", "Turmeric", "Honey", "Warm water", "Light foods", "Black pepper", "Garlic"],
      foods_to_avoid: ["Cold foods", "Dairy", "Bananas", "Rice", "Heavy foods", "Fried foods"]
    },
    yoga_postures: ["Pranayama", "Bhujangasana", "Matsyasana", "Sukhasana", "Anulom Vilom"],
    category: "Respiratory"
  },
  {
    id: "migraine",
    name: "Migraine (Ardhavabhedaka)",
    hindi_name: "माइग्रेन",
    symptoms: ["Severe headache", "Nausea", "Sensitivity to light", "Visual disturbances", "Throbbing pain", "Vomiting"],
    dosha_involved: "Pitta-Vata",
    description: "Ardhavabhedaka is characterized by severe, one-sided headaches caused by Pitta and Vata imbalance.",
    causes: ["Stress", "Hormonal changes", "Irregular sleep", "Certain foods", "Bright lights", "Strong smells"],
    recommended_medicines: ["med-21", "med-22", "med-23"],
    home_remedies: ["remedy-18", "remedy-19", "remedy-20"],
    diet_tips: {
      foods_to_eat: ["Grapes", "Spinach", "Ginger tea", "Almonds", "Sesame seeds", "Buttermilk"],
      foods_to_avoid: ["Cheese", "Chocolate", "Alcohol", "Processed foods", "Caffeine", "Citrus fruits"]
    },
    yoga_postures: ["Shavasana", "Balasana", "Setu Bandhasana", "Padmasana", "Shitali Pranayama"],
    category: "Neurological"
  },
  {
    id: "obesity",
    name: "Obesity (Sthaulya)",
    hindi_name: "मोटापा",
    symptoms: ["Excessive weight", "Breathlessness", "Excessive sweating", "Fatigue", "Joint pain", "Low stamina"],
    dosha_involved: "Kapha",
    description: "Sthaulya is a Kapha disorder characterized by excessive accumulation of fat tissue due to impaired metabolism.",
    causes: ["Overeating", "Sedentary lifestyle", "Hormonal imbalance", "Genetics", "Emotional eating", "Sleep disorders"],
    recommended_medicines: ["med-24", "med-25", "med-26"],
    home_remedies: ["remedy-21", "remedy-22", "remedy-23"],
    diet_tips: {
      foods_to_eat: ["Honey", "Ginger", "Green tea", "Barley", "Horse gram", "Bitter vegetables", "Warm water"],
      foods_to_avoid: ["Sweets", "Fried foods", "Dairy", "White rice", "Potatoes", "Cold drinks"]
    },
    yoga_postures: ["Surya Namaskar", "Trikonasana", "Paschimottanasana", "Dhanurasana", "Kapalbhati"],
    category: "Metabolic Disorders"
  },
  {
    id: "anxiety",
    name: "Anxiety (Chittodvega)",
    hindi_name: "चिंता",
    symptoms: ["Restlessness", "Racing thoughts", "Difficulty sleeping", "Palpitations", "Sweating", "Trembling"],
    dosha_involved: "Vata",
    description: "Chittodvega is a mental disorder caused by Vata imbalance affecting the mind and nervous system.",
    causes: ["Stress", "Trauma", "Genetics", "Excessive stimulation", "Irregular routine", "Caffeine"],
    recommended_medicines: ["med-27", "med-28", "med-29"],
    home_remedies: ["remedy-24", "remedy-25", "remedy-26"],
    diet_tips: {
      foods_to_eat: ["Warm milk", "Almonds", "Ghee", "Ashwagandha", "Chamomile tea", "Banana"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Sugar", "Processed foods", "Spicy foods"]
    },
    yoga_postures: ["Shavasana", "Balasana", "Viparita Karani", "Anulom Vilom", "Meditation"],
    category: "Mental Health"
  },
  {
    id: "skin-disorders",
    name: "Skin Disorders (Kushtha)",
    hindi_name: "त्वचा रोग",
    symptoms: ["Itching", "Rashes", "Discoloration", "Dryness", "Scaling", "Burning sensation"],
    dosha_involved: "Pitta-Kapha",
    description: "Kushtha encompasses various skin disorders caused by imbalance of Pitta and Kapha affecting skin tissues.",
    causes: ["Impure blood", "Poor digestion", "Allergies", "Stress", "Unhygienic conditions", "Wrong food combinations"],
    recommended_medicines: ["med-30", "med-31", "med-32"],
    home_remedies: ["remedy-27", "remedy-28", "remedy-29"],
    diet_tips: {
      foods_to_eat: ["Neem", "Turmeric", "Bitter gourd", "Aloe vera", "Coconut water", "Cucumber"],
      foods_to_avoid: ["Sour foods", "Fermented foods", "Seafood", "Spicy foods", "Dairy", "Junk food"]
    },
    yoga_postures: ["Sarvangasana", "Matsyasana", "Bhujangasana", "Pranayama"],
    category: "Dermatological"
  },
  {
    id: "hair-fall",
    name: "Hair Fall (Khalitya)",
    hindi_name: "बाल झड़ना",
    symptoms: ["Excessive hair loss", "Thinning hair", "Receding hairline", "Bald patches", "Dry scalp", "Weak hair roots"],
    dosha_involved: "Pitta-Vata",
    description: "Khalitya is hair loss caused by excess Pitta heating the hair follicles with Vata causing dryness.",
    causes: ["Stress", "Poor nutrition", "Hormonal changes", "Pollution", "Chemical treatments", "Genetics"],
    recommended_medicines: ["med-33", "med-34", "med-35"],
    home_remedies: ["remedy-30", "remedy-31", "remedy-32"],
    diet_tips: {
      foods_to_eat: ["Amla", "Coconut", "Green vegetables", "Eggs", "Nuts", "Seeds", "Iron-rich foods"],
      foods_to_avoid: ["Junk food", "Excess salt", "Sugar", "Alcohol", "Smoking", "Spicy foods"]
    },
    yoga_postures: ["Sirsasana", "Sarvangasana", "Balayam", "Adho Mukha Svanasana"],
    category: "Dermatological"
  },
  {
    id: "insomnia",
    name: "Insomnia (Anidra)",
    hindi_name: "अनिद्रा",
    symptoms: ["Difficulty falling asleep", "Waking up frequently", "Fatigue", "Irritability", "Poor concentration", "Daytime sleepiness"],
    dosha_involved: "Vata",
    description: "Anidra is sleep disorder caused by Vata imbalance affecting the mind and nervous system.",
    causes: ["Stress", "Anxiety", "Irregular schedule", "Screen exposure", "Caffeine", "Poor sleep hygiene"],
    recommended_medicines: ["med-36", "med-37", "med-38"],
    home_remedies: ["remedy-33", "remedy-34", "remedy-35"],
    diet_tips: {
      foods_to_eat: ["Warm milk", "Almonds", "Cherries", "Bananas", "Chamomile tea", "Nutmeg"],
      foods_to_avoid: ["Caffeine", "Heavy meals at night", "Alcohol", "Spicy foods", "Sugar"]
    },
    yoga_postures: ["Shavasana", "Yoga Nidra", "Viparita Karani", "Balasana", "Meditation"],
    category: "Mental Health"
  },
  {
    id: "cold-cough",
    name: "Cold & Cough (Pratishyaya)",
    hindi_name: "सर्दी-खांसी",
    symptoms: ["Runny nose", "Sneezing", "Sore throat", "Coughing", "Congestion", "Mild fever"],
    dosha_involved: "Kapha-Vata",
    description: "Pratishyaya is common cold caused by Kapha accumulation with Vata imbalance in respiratory channels.",
    causes: ["Weather change", "Low immunity", "Cold exposure", "Viral infection", "Allergies"],
    recommended_medicines: ["med-39", "med-40", "med-41"],
    home_remedies: ["remedy-36", "remedy-37", "remedy-38"],
    diet_tips: {
      foods_to_eat: ["Ginger tea", "Honey", "Tulsi", "Black pepper", "Warm soups", "Turmeric milk"],
      foods_to_avoid: ["Cold drinks", "Ice cream", "Dairy", "Sour foods", "Fried foods"]
    },
    yoga_postures: ["Bhujangasana", "Setu Bandhasana", "Kapalbhati", "Jala Neti"],
    category: "Respiratory"
  },
  {
    id: "thyroid",
    name: "Thyroid Disorders (Galaganda)",
    hindi_name: "थायराइड",
    symptoms: ["Weight changes", "Fatigue", "Hair loss", "Mood changes", "Temperature sensitivity", "Irregular periods"],
    dosha_involved: "Kapha-Vata",
    description: "Galaganda refers to thyroid gland disorders caused by Kapha blocking channels with Vata imbalance.",
    causes: ["Iodine deficiency", "Autoimmune conditions", "Stress", "Genetic factors", "Poor diet"],
    recommended_medicines: ["med-42", "med-43", "med-44"],
    home_remedies: ["remedy-39", "remedy-40", "remedy-41"],
    diet_tips: {
      foods_to_eat: ["Coconut oil", "Seaweed", "Brazil nuts", "Eggs", "Fish", "Ashwagandha"],
      foods_to_avoid: ["Soy products", "Gluten", "Processed foods", "Sugar", "Cruciferous vegetables (raw)"]
    },
    yoga_postures: ["Sarvangasana", "Halasana", "Matsyasana", "Ustrasana", "Ujjayi Pranayama"],
    category: "Endocrine"
  },
  {
    id: "piles",
    name: "Piles (Arsha)",
    hindi_name: "बवासीर",
    symptoms: ["Bleeding during bowel movement", "Pain", "Itching", "Swelling", "Lump near anus", "Mucus discharge"],
    dosha_involved: "Vata-Pitta",
    description: "Arsha is hemorrhoids caused by Vata-Pitta imbalance leading to swollen veins in the rectal area.",
    causes: ["Chronic constipation", "Sedentary lifestyle", "Straining", "Pregnancy", "Obesity", "Low fiber diet"],
    recommended_medicines: ["med-45", "med-46", "med-47"],
    home_remedies: ["remedy-42", "remedy-43", "remedy-44"],
    diet_tips: {
      foods_to_eat: ["Fiber-rich foods", "Radish", "Buttermilk", "Papaya", "Leafy greens", "Lots of water"],
      foods_to_avoid: ["Spicy foods", "Processed foods", "Red meat", "Alcohol", "Fried foods"]
    },
    yoga_postures: ["Malasana", "Pawanmuktasana", "Balasana", "Sarvangasana"],
    category: "Digestive"
  },
  {
    id: "kidney-stones",
    name: "Kidney Stones (Ashmari)",
    hindi_name: "गुर्दे की पथरी",
    symptoms: ["Severe pain in back", "Blood in urine", "Nausea", "Frequent urination", "Burning urination", "Fever"],
    dosha_involved: "Kapha-Vata",
    description: "Ashmari is formation of stones in urinary tract due to Kapha accumulation with Vata drying effect.",
    causes: ["Dehydration", "High oxalate diet", "Excessive calcium", "Obesity", "Family history"],
    recommended_medicines: ["med-48", "med-49", "med-50"],
    home_remedies: ["remedy-45", "remedy-46", "remedy-47"],
    diet_tips: {
      foods_to_eat: ["Lots of water", "Lemon juice", "Watermelon", "Barley water", "Coconut water", "Cucumber"],
      foods_to_avoid: ["Spinach", "Tomatoes", "Chocolate", "Nuts", "Salt", "Animal protein"]
    },
    yoga_postures: ["Pawanmuktasana", "Uttanpadasana", "Bhujangasana", "Dhanurasana"],
    category: "Urological"
  },
  {
    id: "liver-disorders",
    name: "Liver Disorders (Yakrit Vikara)",
    hindi_name: "यकृत रोग",
    symptoms: ["Yellowing of skin", "Fatigue", "Abdominal pain", "Dark urine", "Loss of appetite", "Nausea"],
    dosha_involved: "Pitta",
    description: "Yakrit Vikara are liver disorders primarily caused by Pitta imbalance affecting the liver's functions.",
    causes: ["Alcohol", "Fatty foods", "Infections", "Medications", "Obesity", "Toxin exposure"],
    recommended_medicines: ["med-51", "med-52", "med-53"],
    home_remedies: ["remedy-48", "remedy-49", "remedy-50"],
    diet_tips: {
      foods_to_eat: ["Bitter gourd", "Turmeric", "Papaya", "Lemon", "Beetroot", "Green leafy vegetables"],
      foods_to_avoid: ["Alcohol", "Fried foods", "Processed foods", "Red meat", "Sugar", "Salt"]
    },
    yoga_postures: ["Ardha Matsyendrasana", "Dhanurasana", "Gomukhasana", "Kapalbhati"],
    category: "Hepatic"
  },
  {
    id: "pcod-pcos",
    name: "PCOD/PCOS (Artava Kshaya)",
    hindi_name: "पीसीओडी",
    symptoms: ["Irregular periods", "Weight gain", "Acne", "Hair growth on face", "Hair thinning", "Mood swings"],
    dosha_involved: "Kapha-Vata",
    description: "PCOD is a hormonal disorder in women caused by Kapha blocking channels and Vata affecting reproductive system.",
    causes: ["Hormonal imbalance", "Insulin resistance", "Obesity", "Genetics", "Sedentary lifestyle", "Stress"],
    recommended_medicines: ["med-54", "med-55", "med-56"],
    home_remedies: ["remedy-51", "remedy-52", "remedy-53"],
    diet_tips: {
      foods_to_eat: ["Whole grains", "Leafy greens", "Lean protein", "Berries", "Cinnamon", "Flaxseeds"],
      foods_to_avoid: ["Dairy", "Sugar", "Processed foods", "Refined carbs", "Fried foods"]
    },
    yoga_postures: ["Baddha Konasana", "Supta Baddha Konasana", "Bharadvajasana", "Surya Namaskar"],
    category: "Gynecological"
  },
  {
    id: "anemia",
    name: "Anemia (Pandu Roga)",
    hindi_name: "रक्ताल्पता",
    symptoms: ["Fatigue", "Pale skin", "Weakness", "Shortness of breath", "Dizziness", "Cold hands and feet"],
    dosha_involved: "Pitta-Vata",
    description: "Pandu Roga is deficiency of blood caused by Pitta imbalance destroying blood cells with Vata affecting production.",
    causes: ["Iron deficiency", "Vitamin B12 deficiency", "Blood loss", "Chronic diseases", "Poor diet"],
    recommended_medicines: ["med-57", "med-58", "med-59"],
    home_remedies: ["remedy-54", "remedy-55", "remedy-56"],
    diet_tips: {
      foods_to_eat: ["Pomegranate", "Beetroot", "Spinach", "Dates", "Jaggery", "Raisins", "Apple"],
      foods_to_avoid: ["Tea with meals", "Coffee", "Calcium-rich foods with iron", "Processed foods"]
    },
    yoga_postures: ["Sarvangasana", "Viparita Karani", "Trikonasana", "Pranayama"],
    category: "Blood Disorders"
  },
  {
    id: "joint-pain",
    name: "Joint Pain (Sandhi Shool)",
    hindi_name: "जोड़ों का दर्द",
    symptoms: ["Pain in joints", "Swelling", "Stiffness", "Reduced mobility", "Crackling sound", "Warmth"],
    dosha_involved: "Vata",
    description: "Sandhi Shool is joint pain primarily caused by Vata accumulation in joints causing pain and stiffness.",
    causes: ["Aging", "Injury", "Overuse", "Cold weather", "Poor posture", "Lack of exercise"],
    recommended_medicines: ["med-60", "med-61", "med-62"],
    home_remedies: ["remedy-57", "remedy-58", "remedy-59"],
    diet_tips: {
      foods_to_eat: ["Ginger", "Turmeric", "Garlic", "Warm foods", "Ghee", "Omega-3 rich foods"],
      foods_to_avoid: ["Cold foods", "Dry foods", "Raw vegetables", "Beans", "Nightshades"]
    },
    yoga_postures: ["Virabhadrasana", "Trikonasana", "Setu Bandhasana", "Gentle stretching"],
    category: "Musculoskeletal"
  },
  {
    id: "gastritis",
    name: "Gastritis (Urdhvaga Amlapitta)",
    hindi_name: "गैस्ट्राइटिस",
    symptoms: ["Upper abdominal pain", "Nausea", "Vomiting", "Bloating", "Loss of appetite", "Hiccups"],
    dosha_involved: "Pitta",
    description: "Inflammation of stomach lining caused by excess Pitta and improper eating habits.",
    causes: ["Spicy food", "Alcohol", "Stress", "NSAIDs", "H.pylori infection", "Irregular meals"],
    recommended_medicines: ["med-12", "med-13", "med-14"],
    home_remedies: ["remedy-9", "remedy-10", "remedy-11"],
    diet_tips: {
      foods_to_eat: ["Banana", "Rice", "Coconut water", "Cold milk", "Papaya", "Bottle gourd"],
      foods_to_avoid: ["Spicy food", "Alcohol", "Coffee", "Citrus fruits", "Tomatoes", "Fried foods"]
    },
    yoga_postures: ["Vajrasana", "Pawanmuktasana", "Shavasana", "Pranayama"],
    category: "Digestive"
  },
  {
    id: "uti",
    name: "Urinary Tract Infection (Mutrakrichhra)",
    hindi_name: "मूत्र संक्रमण",
    symptoms: ["Burning urination", "Frequent urination", "Cloudy urine", "Pelvic pain", "Strong urine odor", "Fever"],
    dosha_involved: "Pitta",
    description: "UTI is caused by Pitta aggravation leading to infection and inflammation in urinary tract.",
    causes: ["Dehydration", "Poor hygiene", "Holding urine", "Diabetes", "Weak immunity"],
    recommended_medicines: ["med-48", "med-63", "med-64"],
    home_remedies: ["remedy-45", "remedy-60", "remedy-61"],
    diet_tips: {
      foods_to_eat: ["Coconut water", "Cranberry juice", "Barley water", "Cucumber", "Watermelon", "Lots of water"],
      foods_to_avoid: ["Spicy food", "Alcohol", "Caffeine", "Sugar", "Processed foods"]
    },
    yoga_postures: ["Malasana", "Baddha Konasana", "Supta Baddha Konasana", "Pranayama"],
    category: "Urological"
  },
  {
    id: "sinusitis",
    name: "Sinusitis (Pratishyaya)",
    hindi_name: "साइनसाइटिस",
    symptoms: ["Facial pain", "Nasal congestion", "Headache", "Post-nasal drip", "Reduced smell", "Fatigue"],
    dosha_involved: "Kapha",
    description: "Inflammation of sinuses caused by Kapha accumulation blocking nasal passages.",
    causes: ["Allergies", "Cold weather", "Pollution", "Weak immunity", "Structural abnormalities"],
    recommended_medicines: ["med-39", "med-40", "med-65"],
    home_remedies: ["remedy-36", "remedy-37", "remedy-62"],
    diet_tips: {
      foods_to_eat: ["Ginger tea", "Turmeric", "Black pepper", "Garlic", "Warm soups", "Honey"],
      foods_to_avoid: ["Dairy", "Cold drinks", "Ice cream", "Bananas", "Fried foods", "Heavy foods"]
    },
    yoga_postures: ["Jala Neti", "Bhujangasana", "Sarvangasana", "Kapalbhati"],
    category: "Respiratory"
  },
  {
    id: "vertigo",
    name: "Vertigo (Bhrama)",
    hindi_name: "चक्कर आना",
    symptoms: ["Spinning sensation", "Nausea", "Vomiting", "Loss of balance", "Sweating", "Tinnitus"],
    dosha_involved: "Vata-Pitta",
    description: "Bhrama is dizziness caused by Vata-Pitta imbalance affecting inner ear and nervous system.",
    causes: ["Inner ear problems", "Low BP", "Dehydration", "Anxiety", "Cervical issues", "Anemia"],
    recommended_medicines: ["med-21", "med-66", "med-67"],
    home_remedies: ["remedy-63", "remedy-64", "remedy-65"],
    diet_tips: {
      foods_to_eat: ["Amla", "Almonds", "Ginger", "Pomegranate", "Dates", "Iron-rich foods"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Salt", "Sugar", "Processed foods"]
    },
    yoga_postures: ["Shavasana", "Balasana", "Pranayama", "Meditation"],
    category: "Neurological"
  },
  {
    id: "backpain",
    name: "Back Pain (Kati Shool)",
    hindi_name: "कमर दर्द",
    symptoms: ["Lower back pain", "Stiffness", "Muscle spasms", "Limited mobility", "Radiating pain", "Numbness"],
    dosha_involved: "Vata",
    description: "Kati Shool is back pain caused by Vata aggravation in lumbar region.",
    causes: ["Poor posture", "Sedentary lifestyle", "Heavy lifting", "Obesity", "Stress", "Aging"],
    recommended_medicines: ["med-8", "med-9", "med-68"],
    home_remedies: ["remedy-6", "remedy-7", "remedy-66"],
    diet_tips: {
      foods_to_eat: ["Ginger", "Turmeric", "Ghee", "Warm foods", "Sesame oil", "Milk"],
      foods_to_avoid: ["Cold foods", "Dry foods", "Beans", "Raw salads", "Carbonated drinks"]
    },
    yoga_postures: ["Bhujangasana", "Shalabhasana", "Marjariasana", "Balasana"],
    category: "Musculoskeletal"
  },
  {
    id: "eczema",
    name: "Eczema (Vicharchika)",
    hindi_name: "एक्जिमा",
    symptoms: ["Itchy skin", "Red patches", "Dry skin", "Scaling", "Oozing", "Thickened skin"],
    dosha_involved: "Kapha-Pitta",
    description: "Vicharchika is chronic skin condition caused by vitiated Kapha and Pitta affecting skin.",
    causes: ["Allergies", "Genetics", "Stress", "Irritants", "Dry weather", "Immune dysfunction"],
    recommended_medicines: ["med-30", "med-31", "med-69"],
    home_remedies: ["remedy-27", "remedy-28", "remedy-67"],
    diet_tips: {
      foods_to_eat: ["Bitter gourd", "Neem", "Turmeric", "Coconut oil", "Omega-3 foods", "Green vegetables"],
      foods_to_avoid: ["Dairy", "Eggs", "Soy", "Gluten", "Processed foods", "Sugar"]
    },
    yoga_postures: ["Pranayama", "Shavasana", "Sarvangasana", "Matsyasana"],
    category: "Dermatological"
  },
  {
    id: "ibs",
    name: "Irritable Bowel Syndrome (Grahani)",
    hindi_name: "आईबीएस",
    symptoms: ["Abdominal pain", "Bloating", "Diarrhea", "Constipation", "Mucus in stool", "Gas"],
    dosha_involved: "Vata-Pitta",
    description: "Grahani is digestive disorder caused by weak digestive fire and dosha imbalance.",
    causes: ["Stress", "Poor diet", "Food intolerance", "Gut infection", "Irregular eating", "Antibiotics"],
    recommended_medicines: ["med-70", "med-71", "med-72"],
    home_remedies: ["remedy-68", "remedy-69", "remedy-70"],
    diet_tips: {
      foods_to_eat: ["Buttermilk", "Pomegranate", "Ginger", "Fennel", "Rice", "Mung dal"],
      foods_to_avoid: ["Spicy food", "Dairy", "Gluten", "Caffeine", "Alcohol", "Raw vegetables"]
    },
    yoga_postures: ["Pawanmuktasana", "Vajrasana", "Ardha Matsyendrasana", "Pranayama"],
    category: "Digestive"
  },
  {
    id: "allergic-rhinitis",
    name: "Allergic Rhinitis (Vataja Pratishyaya)",
    hindi_name: "एलर्जिक राइनाइटिस",
    symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Nasal congestion", "Watery eyes", "Throat irritation"],
    dosha_involved: "Kapha-Vata",
    description: "Allergic inflammation of nasal passages caused by environmental allergens and weak immunity.",
    causes: ["Pollen", "Dust mites", "Pet dander", "Mold", "Pollution", "Weather changes"],
    recommended_medicines: ["med-73", "med-74", "med-75"],
    home_remedies: ["remedy-71", "remedy-72", "remedy-73"],
    diet_tips: {
      foods_to_eat: ["Honey", "Turmeric", "Ginger", "Garlic", "Vitamin C foods", "Warm foods"],
      foods_to_avoid: ["Dairy", "Cold foods", "Bananas", "Sugar", "Processed foods", "Histamine-rich foods"]
    },
    yoga_postures: ["Jala Neti", "Kapalbhati", "Bhastrika", "Pranayama"],
    category: "Respiratory"
  },
  {
    id: "jaundice",
    name: "Jaundice (Kamala)",
    hindi_name: "पीलिया",
    symptoms: ["Yellow skin", "Yellow eyes", "Dark urine", "Pale stools", "Fatigue", "Abdominal pain"],
    dosha_involved: "Pitta",
    description: "Kamala is liver disorder caused by excess Pitta affecting bile production and flow.",
    causes: ["Hepatitis", "Alcohol", "Gallstones", "Medications", "Infections", "Liver disease"],
    recommended_medicines: ["med-51", "med-52", "med-76"],
    home_remedies: ["remedy-48", "remedy-49", "remedy-74"],
    diet_tips: {
      foods_to_eat: ["Sugarcane juice", "Radish", "Lemon", "Papaya", "Barley", "Buttermilk"],
      foods_to_avoid: ["Alcohol", "Fried foods", "Spicy foods", "Red meat", "Heavy foods", "Oily foods"]
    },
    yoga_postures: ["Ardha Matsyendrasana", "Dhanurasana", "Bhujangasana", "Kapalbhati"],
    category: "Hepatic"
  },
  {
    id: "bronchitis",
    name: "Bronchitis (Shwasa Nali Shotha)",
    hindi_name: "ब्रोंकाइटिस",
    symptoms: ["Persistent cough", "Mucus production", "Chest discomfort", "Fatigue", "Shortness of breath", "Wheezing"],
    dosha_involved: "Kapha",
    description: "Inflammation of bronchial tubes caused by Kapha accumulation in respiratory tract.",
    causes: ["Viral infection", "Smoking", "Pollution", "Cold weather", "Weak immunity", "Allergies"],
    recommended_medicines: ["med-18", "med-19", "med-77"],
    home_remedies: ["remedy-15", "remedy-16", "remedy-75"],
    diet_tips: {
      foods_to_eat: ["Ginger", "Honey", "Turmeric", "Garlic", "Warm soups", "Black pepper"],
      foods_to_avoid: ["Dairy", "Cold foods", "Bananas", "Fried foods", "Sugar", "Ice cream"]
    },
    yoga_postures: ["Bhujangasana", "Matsyasana", "Setu Bandhasana", "Pranayama"],
    category: "Respiratory"
  },
  {
    id: "sciatica",
    name: "Sciatica (Gridhrasi)",
    hindi_name: "साइटिका",
    symptoms: ["Lower back pain", "Leg pain", "Numbness", "Tingling", "Weakness", "Difficulty walking"],
    dosha_involved: "Vata",
    description: "Gridhrasi is nerve pain caused by Vata aggravation affecting sciatic nerve.",
    causes: ["Herniated disc", "Spinal stenosis", "Poor posture", "Obesity", "Prolonged sitting", "Injury"],
    recommended_medicines: ["med-8", "med-9", "med-78"],
    home_remedies: ["remedy-6", "remedy-7", "remedy-76"],
    diet_tips: {
      foods_to_eat: ["Ghee", "Sesame oil", "Ginger", "Garlic", "Warm foods", "Milk"],
      foods_to_avoid: ["Cold foods", "Dry foods", "Beans", "Raw foods", "Carbonated drinks"]
    },
    yoga_postures: ["Bhujangasana", "Shalabhasana", "Ardha Matsyendrasana", "Supta Padangusthasana"],
    category: "Neurological"
  },
  {
    id: "gout",
    name: "Gout (Vatarakta)",
    hindi_name: "गाउट",
    symptoms: ["Severe joint pain", "Swelling", "Redness", "Warmth", "Limited mobility", "Tophi formation"],
    dosha_involved: "Vata-Rakta",
    description: "Vatarakta is inflammatory arthritis caused by Vata and blood (Rakta) vitiation from uric acid.",
    causes: ["High purine diet", "Alcohol", "Obesity", "Genetics", "Kidney problems", "Medications"],
    recommended_medicines: ["med-11", "med-79", "med-80"],
    home_remedies: ["remedy-77", "remedy-78", "remedy-79"],
    diet_tips: {
      foods_to_eat: ["Cherries", "Cucumber", "Celery", "Lemon water", "Low-fat dairy", "Vegetables"],
      foods_to_avoid: ["Red meat", "Organ meats", "Seafood", "Alcohol", "Sugar", "High-fructose foods"]
    },
    yoga_postures: ["Trikonasana", "Virabhadrasana", "Gentle stretching", "Pranayama"],
    category: "Musculoskeletal"
  },
  {
    id: "cervical-spondylosis",
    name: "Cervical Spondylosis (Manya Stambha)",
    hindi_name: "सर्वाइकल",
    symptoms: ["Neck pain", "Stiffness", "Headache", "Arm pain", "Numbness", "Dizziness"],
    dosha_involved: "Vata",
    description: "Degenerative condition of cervical spine caused by Vata aggravation and aging.",
    causes: ["Aging", "Poor posture", "Computer work", "Neck injury", "Lack of exercise", "Obesity"],
    recommended_medicines: ["med-81", "med-82", "med-83"],
    home_remedies: ["remedy-80", "remedy-81", "remedy-82"],
    diet_tips: {
      foods_to_eat: ["Calcium-rich foods", "Milk", "Sesame seeds", "Green vegetables", "Fish", "Nuts"],
      foods_to_avoid: ["Cold foods", "Dry foods", "Caffeine", "Alcohol", "Processed foods"]
    },
    yoga_postures: ["Neck exercises", "Bhujangasana", "Marjariasana", "Shavasana"],
    category: "Musculoskeletal"
  },
  {
    id: "fatty-liver",
    name: "Fatty Liver (Yakrit Vriddhi)",
    hindi_name: "फैटी लिवर",
    symptoms: ["Upper right abdominal pain", "Fatigue", "Weight gain", "Bloating", "Poor appetite", "Weakness"],
    dosha_involved: "Kapha-Pitta",
    description: "Accumulation of fat in liver cells caused by Kapha and Pitta imbalance.",
    causes: ["Obesity", "Alcohol", "Diabetes", "High cholesterol", "Sedentary lifestyle", "Poor diet"],
    recommended_medicines: ["med-51", "med-52", "med-84"],
    home_remedies: ["remedy-48", "remedy-49", "remedy-83"],
    diet_tips: {
      foods_to_eat: ["Bitter gourd", "Green tea", "Lemon", "Turmeric", "Garlic", "Leafy greens"],
      foods_to_avoid: ["Alcohol", "Fried foods", "Sugar", "White bread", "Red meat", "Processed foods"]
    },
    yoga_postures: ["Ardha Matsyendrasana", "Dhanurasana", "Naukasana", "Kapalbhati"],
    category: "Hepatic"
  },
  {
    id: "ulcer",
    name: "Peptic Ulcer (Parinaama Shool)",
    hindi_name: "अल्सर",
    symptoms: ["Burning stomach pain", "Bloating", "Nausea", "Heartburn", "Weight loss", "Blood in stool"],
    dosha_involved: "Pitta",
    description: "Open sores in stomach lining caused by excess Pitta and acid secretion.",
    causes: ["H.pylori bacteria", "NSAIDs", "Stress", "Spicy food", "Alcohol", "Smoking"],
    recommended_medicines: ["med-12", "med-13", "med-85"],
    home_remedies: ["remedy-9", "remedy-10", "remedy-84"],
    diet_tips: {
      foods_to_eat: ["Banana", "Cabbage juice", "Honey", "Licorice", "Aloe vera", "Coconut water"],
      foods_to_avoid: ["Spicy food", "Alcohol", "Coffee", "Citrus", "Tomatoes", "Chocolate"]
    },
    yoga_postures: ["Vajrasana", "Pawanmuktasana", "Shavasana", "Pranayama"],
    category: "Digestive"
  },
  {
    id: "menstrual-disorders",
    name: "Menstrual Disorders (Artava Dushti)",
    hindi_name: "मासिक धर्म विकार",
    symptoms: ["Irregular periods", "Heavy bleeding", "Painful periods", "Missed periods", "PMS symptoms", "Mood swings"],
    dosha_involved: "Vata-Pitta",
    description: "Disorders of menstrual cycle caused by hormonal imbalance and dosha vitiation.",
    causes: ["Hormonal imbalance", "Stress", "PCOS", "Thyroid issues", "Poor nutrition", "Obesity"],
    recommended_medicines: ["med-54", "med-55", "med-86"],
    home_remedies: ["remedy-51", "remedy-52", "remedy-85"],
    diet_tips: {
      foods_to_eat: ["Iron-rich foods", "Jaggery", "Sesame seeds", "Papaya", "Ginger", "Turmeric"],
      foods_to_avoid: ["Cold foods", "Processed foods", "Excess salt", "Caffeine", "Alcohol"]
    },
    yoga_postures: ["Baddha Konasana", "Supta Baddha Konasana", "Balasana", "Pranayama"],
    category: "Gynecological"
  },
  {
    id: "psoriasis",
    name: "Psoriasis (Ekakushtha)",
    hindi_name: "सोरायसिस",
    symptoms: ["Red patches", "Silvery scales", "Dry skin", "Itching", "Burning", "Thickened nails"],
    dosha_involved: "Vata-Kapha",
    description: "Chronic autoimmune skin condition caused by Vata and Kapha vitiation.",
    causes: ["Genetics", "Immune dysfunction", "Stress", "Infections", "Cold weather", "Certain medications"],
    recommended_medicines: ["med-30", "med-31", "med-87"],
    home_remedies: ["remedy-27", "remedy-28", "remedy-86"],
    diet_tips: {
      foods_to_eat: ["Fish oil", "Turmeric", "Aloe vera", "Leafy greens", "Nuts", "Olive oil"],
      foods_to_avoid: ["Dairy", "Gluten", "Nightshades", "Red meat", "Alcohol", "Processed foods"]
    },
    yoga_postures: ["Pranayama", "Meditation", "Shavasana", "Gentle yoga"],
    category: "Dermatological"
  },
  {
    id: "hernia",
    name: "Hernia (Antra Vriddhi)",
    hindi_name: "हर्निया",
    symptoms: ["Bulge in groin/abdomen", "Pain when lifting", "Heavy feeling", "Discomfort", "Weakness", "Burning sensation"],
    dosha_involved: "Vata",
    description: "Protrusion of organ through weakened muscle wall caused by Vata aggravation.",
    causes: ["Heavy lifting", "Chronic cough", "Obesity", "Constipation", "Genetic weakness", "Pregnancy"],
    recommended_medicines: ["med-88", "med-89", "med-90"],
    home_remedies: ["remedy-87", "remedy-88", "remedy-89"],
    diet_tips: {
      foods_to_eat: ["High fiber foods", "Vegetables", "Fruits", "Whole grains", "Lean protein", "Water"],
      foods_to_avoid: ["Heavy foods", "Fried foods", "Spicy foods", "Carbonated drinks", "Large meals"]
    },
    yoga_postures: ["Avoid heavy exercises", "Gentle walking", "Pranayama", "Light stretching"],
    category: "Digestive"
  },
  {
    id: "tonsillitis",
    name: "Tonsillitis (Tundikeri)",
    hindi_name: "टॉन्सिलाइटिस",
    symptoms: ["Sore throat", "Difficulty swallowing", "Red tonsils", "White patches", "Fever", "Bad breath"],
    dosha_involved: "Kapha-Pitta",
    description: "Inflammation of tonsils caused by infection and Kapha-Pitta vitiation.",
    causes: ["Viral infection", "Bacterial infection", "Weak immunity", "Cold weather", "Pollution"],
    recommended_medicines: ["med-91", "med-92", "med-93"],
    home_remedies: ["remedy-90", "remedy-91", "remedy-92"],
    diet_tips: {
      foods_to_eat: ["Warm water", "Honey", "Ginger tea", "Soft foods", "Turmeric milk", "Soups"],
      foods_to_avoid: ["Cold drinks", "Ice cream", "Sour foods", "Fried foods", "Spicy foods"]
    },
    yoga_postures: ["Simhasana (Lion pose)", "Pranayama", "Neck exercises", "Meditation"],
    category: "Respiratory"
  },
  {
    id: "pcos",
    name: "PCOS (Aartava Kshaya)",
    hindi_name: "पीसीओएस",
    symptoms: ["Irregular periods", "Weight gain", "Acne", "Hirsutism", "Hair loss", "Infertility"],
    dosha_involved: "Kapha-Vata",
    description: "Hormonal disorder affecting ovaries caused by Kapha obstruction and Vata imbalance.",
    causes: ["Hormonal imbalance", "Insulin resistance", "Genetics", "Obesity", "Inflammation", "Lifestyle"],
    recommended_medicines: ["med-54", "med-55", "med-94"],
    home_remedies: ["remedy-51", "remedy-52", "remedy-93"],
    diet_tips: {
      foods_to_eat: ["Whole grains", "Lean protein", "Leafy greens", "Berries", "Cinnamon", "Flaxseeds"],
      foods_to_avoid: ["Dairy", "Sugar", "Refined carbs", "Processed foods", "Red meat", "Gluten"]
    },
    yoga_postures: ["Baddha Konasana", "Supta Baddha Konasana", "Bharadvajasana", "Surya Namaskar"],
    category: "Gynecological"
  },
  {
    id: "uric-acid",
    name: "High Uric Acid (Vatarakta Purvaroop)",
    hindi_name: "यूरिक एसिड",
    symptoms: ["Joint pain", "Swelling", "Stiffness", "Kidney stones", "Fatigue", "Fever"],
    dosha_involved: "Vata-Pitta",
    description: "Elevated uric acid levels caused by metabolic imbalance and Pitta-Vata vitiation.",
    causes: ["High purine diet", "Obesity", "Kidney dysfunction", "Alcohol", "Dehydration", "Genetics"],
    recommended_medicines: ["med-11", "med-95", "med-96"],
    home_remedies: ["remedy-77", "remedy-94", "remedy-95"],
    diet_tips: {
      foods_to_eat: ["Cherries", "Citrus fruits", "Vegetables", "Low-fat dairy", "Water", "Whole grains"],
      foods_to_avoid: ["Red meat", "Organ meats", "Seafood", "Alcohol", "High-fructose foods", "Beans"]
    },
    yoga_postures: ["Ardha Matsyendrasana", "Bhujangasana", "Pawanmuktasana", "Pranayama"],
    category: "Metabolic Disorders"
  },
  {
    id: "varicose-veins",
    name: "Varicose Veins (Siraja Granthi)",
    hindi_name: "वैरिकोज वेन्स",
    symptoms: ["Swollen veins", "Leg pain", "Heaviness", "Cramping", "Itching", "Skin discoloration"],
    dosha_involved: "Vata-Pitta",
    description: "Enlarged twisted veins caused by Vata-Pitta imbalance affecting blood circulation.",
    causes: ["Prolonged standing", "Obesity", "Pregnancy", "Genetics", "Age", "Sedentary lifestyle"],
    recommended_medicines: ["med-97", "med-98", "med-99"],
    home_remedies: ["remedy-96", "remedy-97", "remedy-98"],
    diet_tips: {
      foods_to_eat: ["Fiber-rich foods", "Berries", "Citrus fruits", "Leafy greens", "Garlic", "Ginger"],
      foods_to_avoid: ["Salt", "Processed foods", "Refined carbs", "Alcohol", "Caffeine"]
    },
    yoga_postures: ["Viparita Karani", "Sarvangasana", "Pawanmuktasana", "Walking"],
    category: "Cardiovascular"
  },
  {
    id: "memory-loss",
    name: "Memory Loss (Smriti Bhramsha)",
    hindi_name: "याददाश्त कमजोरी",
    symptoms: ["Forgetfulness", "Difficulty concentrating", "Confusion", "Losing track", "Repeating questions", "Misplacing items"],
    dosha_involved: "Vata",
    description: "Cognitive decline caused by Vata imbalance affecting brain functions.",
    causes: ["Aging", "Stress", "Sleep deprivation", "Nutritional deficiency", "Head injury", "Depression"],
    recommended_medicines: ["med-23", "med-100", "med-101"],
    home_remedies: ["remedy-99", "remedy-100", "remedy-101"],
    diet_tips: {
      foods_to_eat: ["Almonds", "Walnuts", "Brahmi", "Ashwagandha", "Turmeric", "Omega-3 rich foods"],
      foods_to_avoid: ["Processed foods", "Sugar", "Trans fats", "Alcohol", "Excessive caffeine"]
    },
    yoga_postures: ["Sarvangasana", "Halasana", "Padmasana", "Meditation"],
    category: "Neurological"
  },
  {
    id: "mouth-ulcer",
    name: "Mouth Ulcer (Mukhapaka)",
    hindi_name: "मुंह के छाले",
    symptoms: ["Painful sores", "Burning sensation", "Difficulty eating", "Redness", "Swelling", "Fever"],
    dosha_involved: "Pitta",
    description: "Oral ulcers caused by excess Pitta and heat accumulation in the body.",
    causes: ["Stress", "Acidic foods", "Vitamin deficiency", "Hormonal changes", "Medications", "Poor oral hygiene"],
    recommended_medicines: ["med-102", "med-103", "med-104"],
    home_remedies: ["remedy-102", "remedy-103", "remedy-104"],
    diet_tips: {
      foods_to_eat: ["Coconut water", "Honey", "Ghee", "Cold milk", "Banana", "Papaya"],
      foods_to_avoid: ["Spicy food", "Citrus fruits", "Tomatoes", "Hot beverages", "Salty foods"]
    },
    yoga_postures: ["Shitali Pranayama", "Sheetkari Pranayama", "Shavasana", "Meditation"],
    category: "Digestive"
  },
  {
    id: "eye-problems",
    name: "Eye Problems (Netra Roga)",
    hindi_name: "आंखों की समस्या",
    symptoms: ["Blurred vision", "Eye strain", "Dryness", "Redness", "Watering", "Itching"],
    dosha_involved: "Pitta-Vata",
    description: "Various eye disorders caused by Pitta heat and Vata dryness affecting eyes.",
    causes: ["Screen exposure", "Aging", "Nutritional deficiency", "Pollution", "Lack of sleep", "Stress"],
    recommended_medicines: ["med-105", "med-106", "med-107"],
    home_remedies: ["remedy-105", "remedy-106", "remedy-107"],
    diet_tips: {
      foods_to_eat: ["Carrots", "Amla", "Spinach", "Almonds", "Ghee", "Triphala"],
      foods_to_avoid: ["Excessive screen time", "Spicy foods", "Alcohol", "Smoking", "Late nights"]
    },
    yoga_postures: ["Eye exercises", "Trataka", "Palming", "Shavasana"],
    category: "Neurological"
  },
  {
    id: "gout",
    name: "Gout (Vatarakta)",
    hindi_name: "गाउट",
    symptoms: ["Severe joint pain", "Swelling", "Redness", "Warmth in joints", "Limited mobility", "Tenderness"],
    dosha_involved: "Vata-Pitta",
    description: "Vatarakta is a condition where Vata and Rakta (blood) get vitiated causing intense pain in joints, especially big toe.",
    causes: ["High purine diet", "Alcohol", "Obesity", "Kidney problems", "Genetics", "Medications"],
    recommended_medicines: ["med-108", "med-109", "med-110"],
    home_remedies: ["remedy-108", "remedy-109", "remedy-110"],
    diet_tips: {
      foods_to_eat: ["Cherries", "Ginger", "Turmeric", "Lemon water", "Green vegetables", "Barley"],
      foods_to_avoid: ["Red meat", "Organ meats", "Seafood", "Alcohol", "Sugary drinks", "Beans"]
    },
    yoga_postures: ["Pawanmuktasana", "Viparita Karani", "Shavasana", "Gentle stretching"],
    category: "Musculoskeletal"
  },
  {
    id: "fibromyalgia",
    name: "Fibromyalgia (Mamsagata Vata)",
    hindi_name: "फाइब्रोमायल्जिया",
    symptoms: ["Widespread pain", "Fatigue", "Sleep problems", "Memory issues", "Mood changes", "Headaches"],
    dosha_involved: "Vata",
    description: "Chronic pain disorder caused by Vata lodging in muscle tissues causing widespread musculoskeletal pain.",
    causes: ["Stress", "Trauma", "Infections", "Genetics", "Sleep disorders", "Hormonal imbalance"],
    recommended_medicines: ["med-111", "med-112", "med-113"],
    home_remedies: ["remedy-111", "remedy-112", "remedy-113"],
    diet_tips: {
      foods_to_eat: ["Warm soups", "Ghee", "Ginger", "Turmeric", "Sesame oil", "Cooked vegetables"],
      foods_to_avoid: ["Cold foods", "Raw vegetables", "Caffeine", "Processed foods", "Sugar"]
    },
    yoga_postures: ["Gentle yoga", "Shavasana", "Balasana", "Viparita Karani", "Meditation"],
    category: "Musculoskeletal"
  },
  {
    id: "sciatica",
    name: "Sciatica (Gridhrasi)",
    hindi_name: "सायटिका",
    symptoms: ["Lower back pain", "Leg pain", "Numbness", "Tingling", "Weakness", "Burning sensation"],
    dosha_involved: "Vata",
    description: "Gridhrasi is sciatic nerve pain caused by Vata aggravation affecting the sciatic nerve pathway.",
    causes: ["Herniated disc", "Spinal stenosis", "Piriformis syndrome", "Injury", "Prolonged sitting", "Obesity"],
    recommended_medicines: ["med-114", "med-115", "med-116"],
    home_remedies: ["remedy-114", "remedy-115", "remedy-116"],
    diet_tips: {
      foods_to_eat: ["Warm milk with turmeric", "Ginger", "Garlic", "Sesame oil", "Ghee", "Whole grains"],
      foods_to_avoid: ["Cold foods", "Dry foods", "Beans", "Raw vegetables", "Carbonated drinks"]
    },
    yoga_postures: ["Bhujangasana", "Shalabhasana", "Setu Bandhasana", "Ardha Matsyendrasana"],
    category: "Musculoskeletal"
  },
  {
    id: "cervical-spondylosis",
    name: "Cervical Spondylosis (Greeva Stambha)",
    hindi_name: "सर्वाइकल स्पोंडिलोसिस",
    symptoms: ["Neck pain", "Stiffness", "Headache", "Numbness in arms", "Dizziness", "Grinding sensation"],
    dosha_involved: "Vata-Kapha",
    description: "Degenerative changes in cervical spine caused by Vata degeneration with Kapha accumulation.",
    causes: ["Aging", "Poor posture", "Desk work", "Injury", "Obesity", "Genetics"],
    recommended_medicines: ["med-117", "med-118", "med-119"],
    home_remedies: ["remedy-117", "remedy-118", "remedy-119"],
    diet_tips: {
      foods_to_eat: ["Calcium-rich foods", "Vitamin D foods", "Milk", "Almonds", "Green leafy vegetables"],
      foods_to_avoid: ["Cold foods", "Sour foods", "Heavy meals", "Processed foods", "Excess salt"]
    },
    yoga_postures: ["Bhujangasana", "Matsyasana", "Neck rotations", "Marjariasana"],
    category: "Musculoskeletal"
  },
  {
    id: "lumbar-spondylosis",
    name: "Lumbar Spondylosis (Kati Graha)",
    hindi_name: "कमर दर्द",
    symptoms: ["Lower back pain", "Stiffness", "Radiating leg pain", "Difficulty standing", "Muscle spasms", "Reduced flexibility"],
    dosha_involved: "Vata",
    description: "Degenerative changes in lumbar spine primarily caused by Vata imbalance affecting lower back.",
    causes: ["Aging", "Heavy lifting", "Poor posture", "Obesity", "Sedentary lifestyle", "Injury"],
    recommended_medicines: ["med-120", "med-121", "med-122"],
    home_remedies: ["remedy-120", "remedy-121", "remedy-122"],
    diet_tips: {
      foods_to_eat: ["Warm foods", "Ghee", "Milk", "Almonds", "Dates", "Sesame seeds"],
      foods_to_avoid: ["Cold foods", "Dry foods", "Heavy foods", "Fried items", "Beans"]
    },
    yoga_postures: ["Bhujangasana", "Marjariasana", "Setu Bandhasana", "Pawanmuktasana"],
    category: "Musculoskeletal"
  },
  {
    id: "frozen-shoulder",
    name: "Frozen Shoulder (Apabahuka)",
    hindi_name: "फ्रोजन शोल्डर",
    symptoms: ["Shoulder stiffness", "Pain", "Limited movement", "Difficulty reaching", "Night pain", "Gradual onset"],
    dosha_involved: "Vata-Kapha",
    description: "Apabahuka is shoulder joint disorder caused by Vata affecting shoulder with Kapha causing stiffness.",
    causes: ["Injury", "Diabetes", "Thyroid disorders", "Immobilization", "Age", "Surgery"],
    recommended_medicines: ["med-123", "med-124", "med-125"],
    home_remedies: ["remedy-123", "remedy-124", "remedy-125"],
    diet_tips: {
      foods_to_eat: ["Warm milk", "Ghee", "Ginger", "Garlic", "Turmeric", "Sesame oil"],
      foods_to_avoid: ["Cold foods", "Ice cream", "Refrigerated foods", "Dry snacks", "Beans"]
    },
    yoga_postures: ["Garudasana", "Gomukhasana", "Shoulder rotations", "Gentle stretching"],
    category: "Musculoskeletal"
  },
  {
    id: "tennis-elbow",
    name: "Tennis Elbow (Kurpara Sandhivata)",
    hindi_name: "टेनिस एल्बो",
    symptoms: ["Elbow pain", "Weak grip", "Pain when lifting", "Tenderness", "Stiffness", "Burning sensation"],
    dosha_involved: "Vata-Pitta",
    description: "Inflammation of elbow tendons caused by repetitive strain with Vata-Pitta involvement.",
    causes: ["Repetitive motion", "Tennis", "Computer work", "Gripping activities", "Age", "Occupation"],
    recommended_medicines: ["med-126", "med-127", "med-128"],
    home_remedies: ["remedy-126", "remedy-127", "remedy-128"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Turmeric", "Ginger", "Omega-3 rich foods", "Green vegetables"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Caffeine", "Fried foods"]
    },
    yoga_postures: ["Wrist stretches", "Forearm stretches", "Gentle movements", "Relaxation"],
    category: "Musculoskeletal"
  },
  {
    id: "carpal-tunnel",
    name: "Carpal Tunnel Syndrome (Manyastambha)",
    hindi_name: "कार्पल टनल",
    symptoms: ["Hand numbness", "Tingling", "Weakness", "Pain", "Difficulty gripping", "Night symptoms"],
    dosha_involved: "Vata",
    description: "Compression of median nerve in wrist caused by Vata affecting nerve channels.",
    causes: ["Repetitive motion", "Computer work", "Pregnancy", "Diabetes", "Thyroid issues", "Arthritis"],
    recommended_medicines: ["med-129", "med-130", "med-131"],
    home_remedies: ["remedy-129", "remedy-130", "remedy-131"],
    diet_tips: {
      foods_to_eat: ["Vitamin B6 foods", "Turmeric", "Ginger", "Flaxseeds", "Walnuts", "Green vegetables"],
      foods_to_avoid: ["Salt", "Processed foods", "Sugar", "Caffeine", "Alcohol"]
    },
    yoga_postures: ["Wrist stretches", "Hand exercises", "Prayer position stretch", "Relaxation"],
    category: "Musculoskeletal"
  },
  {
    id: "osteoporosis",
    name: "Osteoporosis (Asthi Kshaya)",
    hindi_name: "ऑस्टियोपोरोसिस",
    symptoms: ["Bone fractures", "Back pain", "Loss of height", "Stooped posture", "Bone pain", "Weakness"],
    dosha_involved: "Vata",
    description: "Bone loss condition caused by Vata depleting bone tissue leading to fragile bones.",
    causes: ["Aging", "Menopause", "Low calcium", "Vitamin D deficiency", "Sedentary lifestyle", "Genetics"],
    recommended_medicines: ["med-132", "med-133", "med-134"],
    home_remedies: ["remedy-132", "remedy-133", "remedy-134"],
    diet_tips: {
      foods_to_eat: ["Milk", "Yogurt", "Cheese", "Leafy greens", "Almonds", "Sesame seeds"],
      foods_to_avoid: ["Excessive salt", "Caffeine", "Alcohol", "Carbonated drinks", "Processed foods"]
    },
    yoga_postures: ["Weight-bearing exercises", "Tadasana", "Vrikshasana", "Walking"],
    category: "Musculoskeletal"
  },
  {
    id: "plantar-fasciitis",
    name: "Plantar Fasciitis (Padavalmaka)",
    hindi_name: "एड़ी का दर्द",
    symptoms: ["Heel pain", "Morning stiffness", "Pain after standing", "Arch pain", "Tenderness", "Swelling"],
    dosha_involved: "Vata",
    description: "Inflammation of plantar fascia caused by Vata affecting the foot's connective tissue.",
    causes: ["Overuse", "Obesity", "Improper footwear", "Flat feet", "Tight calves", "Age"],
    recommended_medicines: ["med-135", "med-136", "med-137"],
    home_remedies: ["remedy-135", "remedy-136", "remedy-137"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Turmeric", "Ginger", "Cherries", "Leafy greens"],
      foods_to_avoid: ["Sugar", "Processed foods", "Trans fats", "Excess salt", "Alcohol"]
    },
    yoga_postures: ["Calf stretches", "Foot exercises", "Toe stretches", "Ball rolling"],
    category: "Musculoskeletal"
  },
  {
    id: "ibs",
    name: "Irritable Bowel Syndrome (Grahani)",
    hindi_name: "इर्रिटेबल बाउल सिंड्रोम",
    symptoms: ["Abdominal pain", "Bloating", "Diarrhea", "Constipation", "Gas", "Mucus in stool"],
    dosha_involved: "Vata-Pitta",
    description: "Grahani is digestive disorder caused by weak digestive fire with Vata-Pitta imbalance.",
    causes: ["Stress", "Food sensitivity", "Gut bacteria imbalance", "Infection history", "Hormones"],
    recommended_medicines: ["med-138", "med-139", "med-140"],
    home_remedies: ["remedy-138", "remedy-139", "remedy-140"],
    diet_tips: {
      foods_to_eat: ["Buttermilk", "Ginger", "Cumin", "Fennel", "Cooked vegetables", "Rice"],
      foods_to_avoid: ["Dairy", "Gluten", "Fried foods", "Beans", "Caffeine", "Alcohol"]
    },
    yoga_postures: ["Pawanmuktasana", "Ardha Matsyendrasana", "Vajrasana", "Breathing exercises"],
    category: "Digestive"
  },
  {
    id: "crohns-disease",
    name: "Crohn's Disease (Pakvashayagata Vata)",
    hindi_name: "क्रोहन रोग",
    symptoms: ["Abdominal pain", "Diarrhea", "Weight loss", "Fatigue", "Blood in stool", "Mouth sores"],
    dosha_involved: "Vata-Pitta",
    description: "Inflammatory bowel disease caused by aggravated Vata and Pitta affecting intestinal lining.",
    causes: ["Autoimmune factors", "Genetics", "Environmental triggers", "Gut bacteria", "Smoking"],
    recommended_medicines: ["med-141", "med-142", "med-143"],
    home_remedies: ["remedy-141", "remedy-142", "remedy-143"],
    diet_tips: {
      foods_to_eat: ["Easily digestible foods", "Cooked vegetables", "Rice", "Ghee", "Pomegranate"],
      foods_to_avoid: ["Spicy foods", "High fiber foods", "Dairy", "Alcohol", "Caffeine"]
    },
    yoga_postures: ["Gentle yoga", "Shavasana", "Pranayama", "Meditation"],
    category: "Digestive"
  },
  {
    id: "ulcerative-colitis",
    name: "Ulcerative Colitis (Raktapitta)",
    hindi_name: "अल्सरेटिव कोलाइटिस",
    symptoms: ["Bloody diarrhea", "Abdominal cramps", "Urgency", "Weight loss", "Fatigue", "Fever"],
    dosha_involved: "Pitta",
    description: "Inflammatory condition of colon caused by aggravated Pitta causing ulceration and bleeding.",
    causes: ["Autoimmune factors", "Genetics", "Stress", "Diet", "Environmental factors"],
    recommended_medicines: ["med-144", "med-145", "med-146"],
    home_remedies: ["remedy-144", "remedy-145", "remedy-146"],
    diet_tips: {
      foods_to_eat: ["Cooling foods", "Pomegranate", "Coconut", "Rice", "Ghee", "Buttermilk"],
      foods_to_avoid: ["Spicy foods", "Sour foods", "Alcohol", "Caffeine", "Fried foods"]
    },
    yoga_postures: ["Shavasana", "Gentle stretches", "Pranayama", "Meditation"],
    category: "Digestive"
  },
  {
    id: "gastritis",
    name: "Gastritis (Urdhvaga Amlapitta)",
    hindi_name: "गैस्ट्राइटिस",
    symptoms: ["Upper abdominal pain", "Nausea", "Vomiting", "Bloating", "Loss of appetite", "Hiccups"],
    dosha_involved: "Pitta",
    description: "Inflammation of stomach lining caused by excess Pitta and impaired digestive fire.",
    causes: ["H. pylori infection", "NSAIDs", "Alcohol", "Stress", "Spicy foods", "Autoimmune factors"],
    recommended_medicines: ["med-147", "med-148", "med-149"],
    home_remedies: ["remedy-147", "remedy-148", "remedy-149"],
    diet_tips: {
      foods_to_eat: ["Coconut water", "Banana", "Rice", "Khichdi", "Pomegranate", "Cooling herbs"],
      foods_to_avoid: ["Spicy foods", "Acidic foods", "Alcohol", "Coffee", "Fried foods"]
    },
    yoga_postures: ["Vajrasana", "Pawanmuktasana", "Shavasana", "Shitali Pranayama"],
    category: "Digestive"
  },
  {
    id: "peptic-ulcer",
    name: "Peptic Ulcer (Parinaama Shula)",
    hindi_name: "पेप्टिक अल्सर",
    symptoms: ["Burning stomach pain", "Bloating", "Heartburn", "Nausea", "Dark stools", "Weight loss"],
    dosha_involved: "Pitta-Vata",
    description: "Ulcers in stomach or duodenum caused by Pitta erosion with Vata aggravation.",
    causes: ["H. pylori", "NSAIDs", "Stress", "Smoking", "Alcohol", "Spicy foods"],
    recommended_medicines: ["med-150", "med-151", "med-152"],
    home_remedies: ["remedy-150", "remedy-151", "remedy-152"],
    diet_tips: {
      foods_to_eat: ["Ghee", "Coconut", "Banana", "Cabbage juice", "Licorice", "Shatavari"],
      foods_to_avoid: ["Spicy foods", "Citrus", "Coffee", "Alcohol", "Fried foods"]
    },
    yoga_postures: ["Vajrasana", "Pawanmuktasana", "Shavasana", "Meditation"],
    category: "Digestive"
  },
  {
    id: "gerd",
    name: "GERD (Amlapitta)",
    hindi_name: "जीईआरडी",
    symptoms: ["Heartburn", "Regurgitation", "Chest pain", "Difficulty swallowing", "Chronic cough", "Hoarseness"],
    dosha_involved: "Pitta",
    description: "Gastroesophageal reflux caused by excess Pitta and weak lower esophageal sphincter.",
    causes: ["Obesity", "Pregnancy", "Hiatal hernia", "Smoking", "Large meals", "Lying down after eating"],
    recommended_medicines: ["med-153", "med-154", "med-155"],
    home_remedies: ["remedy-153", "remedy-154", "remedy-155"],
    diet_tips: {
      foods_to_eat: ["Fennel", "Ginger", "Aloe vera", "Banana", "Oatmeal", "Green vegetables"],
      foods_to_avoid: ["Citrus", "Tomatoes", "Chocolate", "Mint", "Spicy foods", "Fried foods"]
    },
    yoga_postures: ["Vajrasana after meals", "Pawanmuktasana", "Supta Baddha Konasana"],
    category: "Digestive"
  },
  {
    id: "gallstones",
    name: "Gallstones (Pittashmari)",
    hindi_name: "पित्त की पथरी",
    symptoms: ["Upper right abdominal pain", "Nausea", "Vomiting", "Back pain", "Shoulder pain", "Indigestion"],
    dosha_involved: "Pitta-Kapha",
    description: "Stone formation in gallbladder caused by Pitta and Kapha imbalance in bile.",
    causes: ["High cholesterol", "Obesity", "Fasting", "Rapid weight loss", "Pregnancy", "Genetics"],
    recommended_medicines: ["med-156", "med-157", "med-158"],
    home_remedies: ["remedy-156", "remedy-157", "remedy-158"],
    diet_tips: {
      foods_to_eat: ["Apple cider vinegar", "Lemon", "Beetroot", "Olive oil", "Vegetables", "Whole grains"],
      foods_to_avoid: ["Fatty foods", "Fried foods", "Dairy", "Eggs", "Red meat", "Refined sugars"]
    },
    yoga_postures: ["Sarvangasana", "Dhanurasana", "Bhujangasana", "Nauli"],
    category: "Hepatic"
  },
  {
    id: "hepatitis",
    name: "Hepatitis (Kamala)",
    hindi_name: "हेपेटाइटिस",
    symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Dark urine", "Pale stools", "Nausea"],
    dosha_involved: "Pitta",
    description: "Liver inflammation primarily caused by aggravated Pitta affecting liver functions.",
    causes: ["Viral infection", "Alcohol", "Toxins", "Autoimmune factors", "Medications", "Obesity"],
    recommended_medicines: ["med-159", "med-160", "med-161"],
    home_remedies: ["remedy-159", "remedy-160", "remedy-161"],
    diet_tips: {
      foods_to_eat: ["Sugarcane juice", "Amla", "Papaya", "Pomegranate", "Bottle gourd", "Bitter herbs"],
      foods_to_avoid: ["Alcohol", "Fried foods", "Spicy foods", "Red meat", "Processed foods"]
    },
    yoga_postures: ["Shavasana", "Gentle twists", "Pranayama", "Meditation"],
    category: "Hepatic"
  },
  {
    id: "fatty-liver",
    name: "Fatty Liver (Yakrit Vriddhi)",
    hindi_name: "फैटी लिवर",
    symptoms: ["Fatigue", "Abdominal discomfort", "Weight gain", "Weakness", "Confusion", "Enlarged liver"],
    dosha_involved: "Kapha-Pitta",
    description: "Fat accumulation in liver caused by Kapha excess with Pitta dysfunction.",
    causes: ["Obesity", "Diabetes", "High cholesterol", "Alcohol", "Poor diet", "Sedentary lifestyle"],
    recommended_medicines: ["med-162", "med-163", "med-164"],
    home_remedies: ["remedy-162", "remedy-163", "remedy-164"],
    diet_tips: {
      foods_to_eat: ["Green tea", "Garlic", "Omega-3 foods", "Cruciferous vegetables", "Turmeric", "Lemon"],
      foods_to_avoid: ["Sugar", "White bread", "Fried foods", "Alcohol", "Red meat", "Salt"]
    },
    yoga_postures: ["Kapalbhati", "Ardha Matsyendrasana", "Dhanurasana", "Nauli"],
    category: "Hepatic"
  },
  {
    id: "cirrhosis",
    name: "Cirrhosis (Yakrit Shotha)",
    hindi_name: "सिरोसिस",
    symptoms: ["Fatigue", "Easy bruising", "Swelling", "Jaundice", "Confusion", "Spider angiomas"],
    dosha_involved: "Pitta-Kapha",
    description: "Severe liver scarring caused by chronic Pitta aggravation with Kapha obstruction.",
    causes: ["Chronic alcoholism", "Hepatitis", "Fatty liver", "Bile duct diseases", "Genetic disorders"],
    recommended_medicines: ["med-165", "med-166", "med-167"],
    home_remedies: ["remedy-165", "remedy-166", "remedy-167"],
    diet_tips: {
      foods_to_eat: ["Papaya", "Amla", "Turmeric", "Green vegetables", "Whole grains", "Lean protein"],
      foods_to_avoid: ["Alcohol", "Salt", "Processed foods", "Fried foods", "Red meat"]
    },
    yoga_postures: ["Gentle yoga", "Shavasana", "Pranayama", "Meditation"],
    category: "Hepatic"
  },
  {
    id: "pancreatitis",
    name: "Pancreatitis (Agnashaya Shotha)",
    hindi_name: "अग्नाशय शोथ",
    symptoms: ["Upper abdominal pain", "Pain radiating to back", "Nausea", "Vomiting", "Fever", "Rapid pulse"],
    dosha_involved: "Pitta",
    description: "Pancreas inflammation caused by aggravated Pitta affecting digestive enzyme secretion.",
    causes: ["Gallstones", "Alcohol", "High triglycerides", "Infections", "Medications", "Trauma"],
    recommended_medicines: ["med-168", "med-169", "med-170"],
    home_remedies: ["remedy-168", "remedy-169", "remedy-170"],
    diet_tips: {
      foods_to_eat: ["Easily digestible foods", "Rice water", "Coconut water", "Bland diet", "Small meals"],
      foods_to_avoid: ["Alcohol", "Fatty foods", "Fried foods", "Red meat", "Sugary foods"]
    },
    yoga_postures: ["Shavasana", "Gentle breathing", "Meditation", "Rest"],
    category: "Digestive"
  },
  {
    id: "appendicitis",
    name: "Appendicitis (Unduka Shotha)",
    hindi_name: "अपेंडिसाइटिस",
    symptoms: ["Right lower abdominal pain", "Nausea", "Vomiting", "Fever", "Loss of appetite", "Constipation"],
    dosha_involved: "Vata-Pitta",
    description: "Appendix inflammation caused by Vata obstruction with Pitta inflammation.",
    causes: ["Blockage", "Infection", "Fecal matter", "Enlarged lymph nodes", "Trauma"],
    recommended_medicines: ["med-171", "med-172", "med-173"],
    home_remedies: ["remedy-171", "remedy-172", "remedy-173"],
    diet_tips: {
      foods_to_eat: ["Light diet", "Clear fluids", "Easily digestible foods", "Rest"],
      foods_to_avoid: ["Solid foods initially", "Spicy foods", "Fatty foods", "Alcohol"]
    },
    yoga_postures: ["Rest recommended", "Gentle breathing after recovery"],
    category: "Digestive"
  },
  {
    id: "hernia",
    name: "Hernia (Antra Vriddhi)",
    hindi_name: "हर्निया",
    symptoms: ["Bulge in affected area", "Pain", "Discomfort", "Heavy feeling", "Burning sensation", "Weakness"],
    dosha_involved: "Vata",
    description: "Organ protrusion through muscle wall caused by Vata weakening tissues.",
    causes: ["Heavy lifting", "Straining", "Chronic cough", "Obesity", "Pregnancy", "Genetics"],
    recommended_medicines: ["med-174", "med-175", "med-176"],
    home_remedies: ["remedy-174", "remedy-175", "remedy-176"],
    diet_tips: {
      foods_to_eat: ["High fiber foods", "Fruits", "Vegetables", "Whole grains", "Light meals"],
      foods_to_avoid: ["Heavy meals", "Spicy foods", "Acidic foods", "Carbonated drinks"]
    },
    yoga_postures: ["Avoid straining", "Gentle exercises post-treatment", "Breathing exercises"],
    category: "Digestive"
  },
  {
    id: "hemorrhoids",
    name: "Hemorrhoids (Arsha)",
    hindi_name: "अर्श",
    symptoms: ["Rectal bleeding", "Itching", "Pain", "Swelling", "Lump near anus", "Discomfort"],
    dosha_involved: "Vata-Pitta-Kapha",
    description: "Swollen blood vessels in rectum caused by tridosha imbalance with constipation.",
    causes: ["Constipation", "Straining", "Sitting long", "Pregnancy", "Obesity", "Low fiber diet"],
    recommended_medicines: ["med-177", "med-178", "med-179"],
    home_remedies: ["remedy-177", "remedy-178", "remedy-179"],
    diet_tips: {
      foods_to_eat: ["High fiber foods", "Radish", "Buttermilk", "Papaya", "Leafy greens", "Water"],
      foods_to_avoid: ["Spicy foods", "Processed foods", "Red meat", "Alcohol", "Fried foods"]
    },
    yoga_postures: ["Malasana", "Pawanmuktasana", "Balasana", "Sarvangasana"],
    category: "Digestive"
  },
  {
    id: "anal-fissure",
    name: "Anal Fissure (Parikartika)",
    hindi_name: "गुदा विदर",
    symptoms: ["Pain during bowel movement", "Bleeding", "Itching", "Burning", "Muscle spasms", "Visible tear"],
    dosha_involved: "Vata-Pitta",
    description: "Tear in anal lining caused by Vata dryness with Pitta inflammation.",
    causes: ["Constipation", "Hard stools", "Diarrhea", "Childbirth", "Crohn's disease", "Anal intercourse"],
    recommended_medicines: ["med-180", "med-181", "med-182"],
    home_remedies: ["remedy-180", "remedy-181", "remedy-182"],
    diet_tips: {
      foods_to_eat: ["High fiber foods", "Water", "Ghee", "Triphala", "Papaya", "Banana"],
      foods_to_avoid: ["Spicy foods", "Dry foods", "Processed foods", "Alcohol", "Caffeine"]
    },
    yoga_postures: ["Sitz bath", "Malasana", "Pawanmuktasana", "Gentle stretching"],
    category: "Digestive"
  },
  {
    id: "fistula",
    name: "Anal Fistula (Bhagandara)",
    hindi_name: "भगंदर",
    symptoms: ["Pain", "Swelling", "Discharge", "Fever", "Recurrent abscesses", "Skin irritation"],
    dosha_involved: "Vata-Pitta-Kapha",
    description: "Abnormal channel between anal canal and skin caused by tridosha imbalance.",
    causes: ["Anal abscess", "Crohn's disease", "Tuberculosis", "Trauma", "Radiation therapy"],
    recommended_medicines: ["med-183", "med-184", "med-185"],
    home_remedies: ["remedy-183", "remedy-184", "remedy-185"],
    diet_tips: {
      foods_to_eat: ["Light easily digestible foods", "Fiber", "Water", "Triphala", "Bitter herbs"],
      foods_to_avoid: ["Spicy foods", "Sour foods", "Heavy foods", "Meat", "Alcohol"]
    },
    yoga_postures: ["Kshara Sutra treatment", "Gentle exercises", "Pranayama"],
    category: "Digestive"
  },
  {
    id: "bronchitis",
    name: "Bronchitis (Kasa Shwasa)",
    hindi_name: "ब्रोंकाइटिस",
    symptoms: ["Persistent cough", "Mucus production", "Chest discomfort", "Fatigue", "Shortness of breath", "Wheezing"],
    dosha_involved: "Kapha-Vata",
    description: "Bronchial inflammation caused by Kapha accumulation with Vata aggravation.",
    causes: ["Viral infection", "Smoking", "Air pollution", "Dust exposure", "Weak immunity", "Cold weather"],
    recommended_medicines: ["med-186", "med-187", "med-188"],
    home_remedies: ["remedy-186", "remedy-187", "remedy-188"],
    diet_tips: {
      foods_to_eat: ["Ginger tea", "Honey", "Turmeric", "Tulsi", "Warm fluids", "Light foods"],
      foods_to_avoid: ["Cold foods", "Dairy", "Fried foods", "Bananas", "Sweets"]
    },
    yoga_postures: ["Pranayama", "Bhujangasana", "Matsyasana", "Steam inhalation"],
    category: "Respiratory"
  },
  {
    id: "pneumonia",
    name: "Pneumonia (Shwasanaka Jvara)",
    hindi_name: "निमोनिया",
    symptoms: ["Fever", "Cough with phlegm", "Chest pain", "Difficulty breathing", "Fatigue", "Chills"],
    dosha_involved: "Kapha-Pitta",
    description: "Lung infection caused by Kapha accumulation with Pitta-induced fever.",
    causes: ["Bacterial infection", "Viral infection", "Fungal infection", "Aspiration", "Weak immunity"],
    recommended_medicines: ["med-189", "med-190", "med-191"],
    home_remedies: ["remedy-189", "remedy-190", "remedy-191"],
    diet_tips: {
      foods_to_eat: ["Warm fluids", "Vegetable soups", "Honey", "Ginger", "Tulsi", "Light foods"],
      foods_to_avoid: ["Cold foods", "Heavy foods", "Dairy", "Fried foods", "Sweets"]
    },
    yoga_postures: ["Rest recommended", "Pranayama after recovery", "Steam inhalation"],
    category: "Respiratory"
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (Rajayakshma)",
    hindi_name: "क्षय रोग",
    symptoms: ["Chronic cough", "Blood in sputum", "Weight loss", "Night sweats", "Fever", "Fatigue"],
    dosha_involved: "Vata-Pitta-Kapha",
    description: "Chronic lung infection involving all three doshas with tissue destruction.",
    causes: ["Mycobacterium tuberculosis", "Weak immunity", "Close contact", "Poor nutrition", "HIV"],
    recommended_medicines: ["med-192", "med-193", "med-194"],
    home_remedies: ["remedy-192", "remedy-193", "remedy-194"],
    diet_tips: {
      foods_to_eat: ["High protein foods", "Milk", "Ghee", "Chyawanprash", "Fruits", "Vegetables"],
      foods_to_avoid: ["Alcohol", "Smoking", "Processed foods", "Cold foods", "Fried foods"]
    },
    yoga_postures: ["Pranayama", "Gentle yoga after recovery", "Rest", "Meditation"],
    category: "Respiratory"
  },
  {
    id: "copd",
    name: "COPD (Shwasa Roga)",
    hindi_name: "सीओपीडी",
    symptoms: ["Chronic cough", "Breathlessness", "Wheezing", "Chest tightness", "Frequent infections", "Fatigue"],
    dosha_involved: "Vata-Kapha",
    description: "Chronic obstructive lung disease caused by Vata affecting airways with Kapha obstruction.",
    causes: ["Smoking", "Air pollution", "Occupational exposure", "Genetics", "Respiratory infections"],
    recommended_medicines: ["med-195", "med-196", "med-197"],
    home_remedies: ["remedy-195", "remedy-196", "remedy-197"],
    diet_tips: {
      foods_to_eat: ["Warm fluids", "Ginger", "Turmeric", "Honey", "Light foods", "Easily digestible"],
      foods_to_avoid: ["Cold foods", "Dairy", "Fried foods", "Processed foods", "Carbonated drinks"]
    },
    yoga_postures: ["Pranayama", "Pursed lip breathing", "Diaphragmatic breathing", "Gentle yoga"],
    category: "Respiratory"
  },
  {
    id: "allergic-rhinitis",
    name: "Allergic Rhinitis (Vataja Pratishyaya)",
    hindi_name: "एलर्जिक राइनाइटिस",
    symptoms: ["Sneezing", "Runny nose", "Nasal congestion", "Itchy eyes", "Watery eyes", "Post-nasal drip"],
    dosha_involved: "Kapha-Vata",
    description: "Allergic nasal inflammation caused by Kapha accumulation triggered by Vata imbalance.",
    causes: ["Pollen", "Dust mites", "Pet dander", "Mold", "Cold air", "Weather changes"],
    recommended_medicines: ["med-198", "med-199", "med-200"],
    home_remedies: ["remedy-198", "remedy-199", "remedy-200"],
    diet_tips: {
      foods_to_eat: ["Honey", "Ginger", "Turmeric", "Warm fluids", "Vitamin C foods", "Tulsi"],
      foods_to_avoid: ["Cold foods", "Dairy", "Bananas", "Ice cream", "Heavy foods"]
    },
    yoga_postures: ["Jala Neti", "Pranayama", "Bhujangasana", "Kapalbhati"],
    category: "Respiratory"
  },
  {
    id: "sinusitis",
    name: "Sinusitis (Dushta Pratishyaya)",
    hindi_name: "साइनसाइटिस",
    symptoms: ["Facial pain", "Nasal congestion", "Thick discharge", "Headache", "Reduced smell", "Cough"],
    dosha_involved: "Kapha",
    description: "Sinus inflammation primarily caused by Kapha accumulation in sinus cavities.",
    causes: ["Infection", "Allergies", "Nasal polyps", "Deviated septum", "Cold weather", "Pollution"],
    recommended_medicines: ["med-201", "med-202", "med-203"],
    home_remedies: ["remedy-201", "remedy-202", "remedy-203"],
    diet_tips: {
      foods_to_eat: ["Warm fluids", "Spices", "Ginger", "Garlic", "Pepper", "Turmeric"],
      foods_to_avoid: ["Dairy", "Cold foods", "Ice cream", "Fried foods", "Heavy foods"]
    },
    yoga_postures: ["Jala Neti", "Pranayama", "Bhujangasana", "Steam inhalation"],
    category: "Respiratory"
  },
  {
    id: "nasal-polyps",
    name: "Nasal Polyps (Nasarsha)",
    hindi_name: "नाक की गांठ",
    symptoms: ["Nasal obstruction", "Runny nose", "Reduced smell", "Post-nasal drip", "Facial pressure", "Snoring"],
    dosha_involved: "Kapha",
    description: "Growths in nasal passages caused by chronic Kapha accumulation.",
    causes: ["Chronic inflammation", "Asthma", "Allergies", "Infections", "Genetics", "Sensitivity"],
    recommended_medicines: ["med-204", "med-205", "med-206"],
    home_remedies: ["remedy-204", "remedy-205", "remedy-206"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Turmeric", "Ginger", "Omega-3 foods", "Fruits"],
      foods_to_avoid: ["Dairy", "Processed foods", "Sugar", "Alcohol", "Fried foods"]
    },
    yoga_postures: ["Pranayama", "Jala Neti", "Kapalbhati", "Bhastrika"],
    category: "Respiratory"
  },
  {
    id: "sleep-apnea",
    name: "Sleep Apnea (Nidra Shwasa)",
    hindi_name: "स्लीप एपनिया",
    symptoms: ["Loud snoring", "Breathing stops during sleep", "Gasping", "Morning headache", "Daytime sleepiness", "Irritability"],
    dosha_involved: "Kapha-Vata",
    description: "Sleep breathing disorder caused by Kapha obstruction with Vata irregularity.",
    causes: ["Obesity", "Enlarged tonsils", "Nasal problems", "Alcohol", "Sedatives", "Genetics"],
    recommended_medicines: ["med-207", "med-208", "med-209"],
    home_remedies: ["remedy-207", "remedy-208", "remedy-209"],
    diet_tips: {
      foods_to_eat: ["Light dinner", "Warm milk", "Ginger", "Honey", "Weight loss foods"],
      foods_to_avoid: ["Heavy meals at night", "Alcohol", "Dairy", "Fried foods", "Sedatives"]
    },
    yoga_postures: ["Pranayama", "Ujjayi breathing", "Weight loss yoga", "Throat exercises"],
    category: "Respiratory"
  },
  {
    id: "tonsillitis",
    name: "Tonsillitis (Tundikeri)",
    hindi_name: "टॉन्सिलाइटिस",
    symptoms: ["Sore throat", "Swollen tonsils", "Difficulty swallowing", "Fever", "Neck pain", "Bad breath"],
    dosha_involved: "Kapha-Pitta",
    description: "Tonsil inflammation caused by Kapha accumulation with Pitta infection.",
    causes: ["Viral infection", "Bacterial infection", "Low immunity", "Cold weather", "Air pollution"],
    recommended_medicines: ["med-210", "med-211", "med-212"],
    home_remedies: ["remedy-210", "remedy-211", "remedy-212"],
    diet_tips: {
      foods_to_eat: ["Warm salt water gargle", "Honey", "Ginger tea", "Turmeric milk", "Soft foods"],
      foods_to_avoid: ["Cold foods", "Ice cream", "Sour foods", "Fried foods", "Spicy foods"]
    },
    yoga_postures: ["Simhasana", "Ujjayi Pranayama", "Gargling", "Rest"],
    category: "Respiratory"
  },
  {
    id: "laryngitis",
    name: "Laryngitis (Swarabheda)",
    hindi_name: "गला बैठना",
    symptoms: ["Hoarse voice", "Voice loss", "Sore throat", "Dry cough", "Difficulty speaking", "Throat irritation"],
    dosha_involved: "Vata-Kapha",
    description: "Larynx inflammation caused by Vata affecting vocal cords with Kapha accumulation.",
    causes: ["Viral infection", "Voice overuse", "Acid reflux", "Smoking", "Allergies", "Dry air"],
    recommended_medicines: ["med-213", "med-214", "med-215"],
    home_remedies: ["remedy-213", "remedy-214", "remedy-215"],
    diet_tips: {
      foods_to_eat: ["Warm fluids", "Honey", "Ginger", "Ghee", "Steam inhalation", "Rest voice"],
      foods_to_avoid: ["Cold foods", "Spicy foods", "Alcohol", "Caffeine", "Smoking"]
    },
    yoga_postures: ["Voice rest", "Pranayama", "Humming", "Steam inhalation"],
    category: "Respiratory"
  },
  {
    id: "pharyngitis",
    name: "Pharyngitis (Kantharoga)",
    hindi_name: "गले की सूजन",
    symptoms: ["Sore throat", "Pain when swallowing", "Fever", "Headache", "Swollen glands", "Cough"],
    dosha_involved: "Pitta-Kapha",
    description: "Throat inflammation caused by Pitta heat with Kapha mucus accumulation.",
    causes: ["Viral infection", "Bacterial infection", "Allergies", "Dry air", "Acid reflux", "Pollution"],
    recommended_medicines: ["med-216", "med-217", "med-218"],
    home_remedies: ["remedy-216", "remedy-217", "remedy-218"],
    diet_tips: {
      foods_to_eat: ["Warm salt water gargle", "Honey", "Tulsi", "Ginger", "Warm fluids"],
      foods_to_avoid: ["Cold foods", "Sour foods", "Fried foods", "Irritants", "Smoking"]
    },
    yoga_postures: ["Simhasana", "Ujjayi Pranayama", "Rest", "Steam inhalation"],
    category: "Respiratory"
  },
  {
    id: "alzheimers",
    name: "Alzheimer's Disease (Smriti Bhransha)",
    hindi_name: "अल्जाइमर",
    symptoms: ["Memory loss", "Confusion", "Difficulty with tasks", "Language problems", "Mood changes", "Disorientation"],
    dosha_involved: "Vata",
    description: "Progressive brain disorder caused by Vata aggravation affecting memory and cognition.",
    causes: ["Aging", "Genetics", "Head trauma", "Cardiovascular disease", "Lifestyle factors"],
    recommended_medicines: ["med-219", "med-220", "med-221"],
    home_remedies: ["remedy-219", "remedy-220", "remedy-221"],
    diet_tips: {
      foods_to_eat: ["Brahmi", "Shankhpushpi", "Almonds", "Walnuts", "Ghee", "Turmeric"],
      foods_to_avoid: ["Processed foods", "Sugar", "Trans fats", "Alcohol", "Excessive salt"]
    },
    yoga_postures: ["Meditation", "Pranayama", "Memory exercises", "Gentle yoga"],
    category: "Neurological"
  },
  {
    id: "parkinsons",
    name: "Parkinson's Disease (Kampavata)",
    hindi_name: "पार्किंसन",
    symptoms: ["Tremors", "Slowness of movement", "Rigidity", "Balance problems", "Speech changes", "Writing changes"],
    dosha_involved: "Vata",
    description: "Progressive nervous system disorder caused by severe Vata aggravation affecting movement.",
    causes: ["Aging", "Genetics", "Environmental toxins", "Head injuries", "Dopamine deficiency"],
    recommended_medicines: ["med-222", "med-223", "med-224"],
    home_remedies: ["remedy-222", "remedy-223", "remedy-224"],
    diet_tips: {
      foods_to_eat: ["Mucuna pruriens", "Ashwagandha", "Ghee", "Warm foods", "Easily digestible"],
      foods_to_avoid: ["Dry foods", "Cold foods", "Caffeine", "Alcohol", "Processed foods"]
    },
    yoga_postures: ["Gentle movements", "Balance exercises", "Pranayama", "Meditation"],
    category: "Neurological"
  },
  {
    id: "multiple-sclerosis",
    name: "Multiple Sclerosis (Avrita Vata)",
    hindi_name: "मल्टीपल स्क्लेरोसिस",
    symptoms: ["Numbness", "Weakness", "Vision problems", "Fatigue", "Balance issues", "Cognitive changes"],
    dosha_involved: "Vata-Kapha",
    description: "Autoimmune disorder caused by Vata affecting nerve sheaths with Kapha involvement.",
    causes: ["Autoimmune factors", "Genetics", "Vitamin D deficiency", "Smoking", "Infections"],
    recommended_medicines: ["med-225", "med-226", "med-227"],
    home_remedies: ["remedy-225", "remedy-226", "remedy-227"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Omega-3 fatty acids", "Vitamin D foods", "Turmeric"],
      foods_to_avoid: ["Saturated fats", "Processed foods", "Sugar", "Dairy", "Gluten"]
    },
    yoga_postures: ["Gentle yoga", "Stretching", "Pranayama", "Meditation"],
    category: "Neurological"
  },
  {
    id: "epilepsy",
    name: "Epilepsy (Apasmara)",
    hindi_name: "मिर्गी",
    symptoms: ["Seizures", "Confusion", "Staring spells", "Uncontrollable movements", "Loss of consciousness", "Fear"],
    dosha_involved: "Vata-Pitta-Kapha",
    description: "Seizure disorder caused by tridosha imbalance affecting brain electrical activity.",
    causes: ["Genetics", "Head trauma", "Brain conditions", "Infections", "Prenatal injury", "Developmental disorders"],
    recommended_medicines: ["med-228", "med-229", "med-230"],
    home_remedies: ["remedy-228", "remedy-229", "remedy-230"],
    diet_tips: {
      foods_to_eat: ["Brahmi", "Shankhpushpi", "Ghee", "Milk", "Calming foods", "Regular meals"],
      foods_to_avoid: ["Stimulants", "Alcohol", "Caffeine", "Irregular eating", "Fasting"]
    },
    yoga_postures: ["Shavasana", "Meditation", "Pranayama", "Avoid inversions"],
    category: "Neurological"
  },
  {
    id: "vertigo",
    name: "Vertigo (Bhrama)",
    hindi_name: "चक्कर आना",
    symptoms: ["Spinning sensation", "Nausea", "Vomiting", "Balance problems", "Sweating", "Hearing changes"],
    dosha_involved: "Vata-Pitta",
    description: "Dizziness disorder caused by Vata affecting inner ear with Pitta involvement.",
    causes: ["Inner ear problems", "Migraines", "Head injury", "Medications", "Blood pressure changes"],
    recommended_medicines: ["med-231", "med-232", "med-233"],
    home_remedies: ["remedy-231", "remedy-232", "remedy-233"],
    diet_tips: {
      foods_to_eat: ["Ginger", "Amla", "Almonds", "Easily digestible foods", "Hydrating fluids"],
      foods_to_avoid: ["Salt", "Caffeine", "Alcohol", "Sugar", "Processed foods"]
    },
    yoga_postures: ["Balance exercises", "Eye movements", "Epley maneuver", "Rest"],
    category: "Neurological"
  },
  {
    id: "bells-palsy",
    name: "Bell's Palsy (Ardita)",
    hindi_name: "बेल्स पाल्सी",
    symptoms: ["Facial weakness", "Drooping", "Drooling", "Eye dryness", "Taste changes", "Ear pain"],
    dosha_involved: "Vata",
    description: "Facial paralysis caused by Vata affecting facial nerves.",
    causes: ["Viral infection", "Immune response", "Stress", "Cold exposure", "Diabetes"],
    recommended_medicines: ["med-234", "med-235", "med-236"],
    home_remedies: ["remedy-234", "remedy-235", "remedy-236"],
    diet_tips: {
      foods_to_eat: ["Warm foods", "Ghee", "Sesame oil", "Ashwagandha", "Nourishing foods"],
      foods_to_avoid: ["Cold foods", "Dry foods", "Caffeine", "Alcohol", "Processed foods"]
    },
    yoga_postures: ["Facial exercises", "Pranayama", "Nasya", "Gentle massage"],
    category: "Neurological"
  },
  {
    id: "trigeminal-neuralgia",
    name: "Trigeminal Neuralgia (Anantavata)",
    hindi_name: "ट्राइजेमिनल न्यूराल्जिया",
    symptoms: ["Severe facial pain", "Electric shock-like pain", "Triggered by touch", "One-sided pain", "Brief episodes"],
    dosha_involved: "Vata",
    description: "Intense facial nerve pain caused by Vata affecting trigeminal nerve.",
    causes: ["Blood vessel compression", "Multiple sclerosis", "Tumor", "Injury", "Aging"],
    recommended_medicines: ["med-237", "med-238", "med-239"],
    home_remedies: ["remedy-237", "remedy-238", "remedy-239"],
    diet_tips: {
      foods_to_eat: ["Soft foods", "Warm foods", "Ghee", "Ashwagandha", "Calming herbs"],
      foods_to_avoid: ["Trigger foods", "Cold foods", "Hard foods", "Caffeine", "Alcohol"]
    },
    yoga_postures: ["Relaxation", "Pranayama", "Meditation", "Gentle yoga"],
    category: "Neurological"
  },
  {
    id: "depression",
    name: "Depression (Vishada)",
    hindi_name: "अवसाद",
    symptoms: ["Persistent sadness", "Loss of interest", "Sleep changes", "Fatigue", "Appetite changes", "Hopelessness"],
    dosha_involved: "Kapha-Vata",
    description: "Mental health disorder caused by Kapha heaviness with Vata anxiety.",
    causes: ["Brain chemistry", "Genetics", "Life events", "Medical conditions", "Medications", "Trauma"],
    recommended_medicines: ["med-240", "med-241", "med-242"],
    home_remedies: ["remedy-240", "remedy-241", "remedy-242"],
    diet_tips: {
      foods_to_eat: ["Saffron", "Ashwagandha", "Brahmi", "Fresh fruits", "Light foods", "Warm milk"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Caffeine", "Heavy foods"]
    },
    yoga_postures: ["Surya Namaskar", "Backbends", "Pranayama", "Meditation"],
    category: "Mental Health"
  },
  {
    id: "bipolar-disorder",
    name: "Bipolar Disorder (Unmada)",
    hindi_name: "द्विध्रुवी विकार",
    symptoms: ["Mood swings", "Manic episodes", "Depressive episodes", "Sleep changes", "Energy changes", "Impulsivity"],
    dosha_involved: "Vata-Pitta",
    description: "Mood disorder caused by Vata instability with Pitta intensity.",
    causes: ["Genetics", "Brain structure", "Stress", "Trauma", "Substance abuse"],
    recommended_medicines: ["med-243", "med-244", "med-245"],
    home_remedies: ["remedy-243", "remedy-244", "remedy-245"],
    diet_tips: {
      foods_to_eat: ["Grounding foods", "Regular meals", "Brahmi", "Ashwagandha", "Ghee"],
      foods_to_avoid: ["Stimulants", "Caffeine", "Alcohol", "Sugar", "Irregular eating"]
    },
    yoga_postures: ["Grounding poses", "Pranayama", "Meditation", "Routine yoga"],
    category: "Mental Health"
  },
  {
    id: "schizophrenia",
    name: "Schizophrenia (Unmada)",
    hindi_name: "सिज़ोफ्रेनिया",
    symptoms: ["Hallucinations", "Delusions", "Disorganized thinking", "Social withdrawal", "Flat affect", "Cognitive issues"],
    dosha_involved: "Vata",
    description: "Serious mental disorder caused by severe Vata imbalance affecting perception and thinking.",
    causes: ["Genetics", "Brain chemistry", "Environment", "Prenatal factors", "Stress"],
    recommended_medicines: ["med-246", "med-247", "med-248"],
    home_remedies: ["remedy-246", "remedy-247", "remedy-248"],
    diet_tips: {
      foods_to_eat: ["Calming foods", "Brahmi", "Shankhpushpi", "Ghee", "Regular meals"],
      foods_to_avoid: ["Stimulants", "Caffeine", "Alcohol", "Processed foods", "Sugar"]
    },
    yoga_postures: ["Gentle yoga", "Grounding practices", "Meditation", "Pranayama"],
    category: "Mental Health"
  },
  {
    id: "ocd",
    name: "OCD (Atattvabhinivesha)",
    hindi_name: "ओसीडी",
    symptoms: ["Obsessive thoughts", "Compulsive behaviors", "Anxiety", "Repetitive actions", "Fear", "Doubt"],
    dosha_involved: "Vata",
    description: "Anxiety disorder caused by Vata creating repetitive thought patterns.",
    causes: ["Genetics", "Brain structure", "Environment", "Stress", "Trauma"],
    recommended_medicines: ["med-249", "med-250", "med-251"],
    home_remedies: ["remedy-249", "remedy-250", "remedy-251"],
    diet_tips: {
      foods_to_eat: ["Calming foods", "Warm milk", "Ashwagandha", "Brahmi", "Ghee"],
      foods_to_avoid: ["Caffeine", "Stimulants", "Sugar", "Processed foods", "Alcohol"]
    },
    yoga_postures: ["Pranayama", "Meditation", "Yoga Nidra", "Grounding poses"],
    category: "Mental Health"
  },
  {
    id: "ptsd",
    name: "PTSD (Bhaya)",
    hindi_name: "पीटीएसडी",
    symptoms: ["Flashbacks", "Nightmares", "Avoidance", "Hypervigilance", "Mood changes", "Sleep problems"],
    dosha_involved: "Vata",
    description: "Trauma-related disorder caused by Vata creating fear and anxiety responses.",
    causes: ["Traumatic events", "War", "Abuse", "Accidents", "Natural disasters", "Violence"],
    recommended_medicines: ["med-252", "med-253", "med-254"],
    home_remedies: ["remedy-252", "remedy-253", "remedy-254"],
    diet_tips: {
      foods_to_eat: ["Grounding foods", "Warm foods", "Ashwagandha", "Brahmi", "Ghee"],
      foods_to_avoid: ["Stimulants", "Caffeine", "Alcohol", "Processed foods", "Sugar"]
    },
    yoga_postures: ["Trauma-sensitive yoga", "Pranayama", "Meditation", "Grounding practices"],
    category: "Mental Health"
  },
  {
    id: "adhd",
    name: "ADHD (Chanchalta)",
    hindi_name: "एडीएचडी",
    symptoms: ["Inattention", "Hyperactivity", "Impulsivity", "Difficulty focusing", "Restlessness", "Forgetfulness"],
    dosha_involved: "Vata",
    description: "Attention disorder caused by Vata excess creating mental restlessness.",
    causes: ["Genetics", "Brain development", "Premature birth", "Environmental factors", "Toxin exposure"],
    recommended_medicines: ["med-255", "med-256", "med-257"],
    home_remedies: ["remedy-255", "remedy-256", "remedy-257"],
    diet_tips: {
      foods_to_eat: ["Brahmi", "Shankhpushpi", "Ghee", "Almonds", "Grounding foods", "Regular meals"],
      foods_to_avoid: ["Sugar", "Artificial colors", "Processed foods", "Caffeine", "Junk food"]
    },
    yoga_postures: ["Focused breathing", "Balancing poses", "Meditation", "Structured routines"],
    category: "Mental Health"
  },
  {
    id: "panic-disorder",
    name: "Panic Disorder (Prachanda Bhaya)",
    hindi_name: "पैनिक डिसऑर्डर",
    symptoms: ["Panic attacks", "Rapid heartbeat", "Sweating", "Trembling", "Shortness of breath", "Fear of dying"],
    dosha_involved: "Vata",
    description: "Anxiety disorder caused by acute Vata aggravation creating intense fear episodes.",
    causes: ["Genetics", "Stress", "Trauma", "Brain chemistry", "Major life changes"],
    recommended_medicines: ["med-258", "med-259", "med-260"],
    home_remedies: ["remedy-258", "remedy-259", "remedy-260"],
    diet_tips: {
      foods_to_eat: ["Calming foods", "Warm milk", "Ashwagandha", "Brahmi", "Chamomile"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Sugar", "Stimulants", "Processed foods"]
    },
    yoga_postures: ["Pranayama", "Shavasana", "Grounding poses", "Meditation"],
    category: "Mental Health"
  },
  {
    id: "social-anxiety",
    name: "Social Anxiety (Lajja Bhaya)",
    hindi_name: "सामाजिक चिंता",
    symptoms: ["Fear of social situations", "Avoidance", "Blushing", "Sweating", "Trembling", "Nausea"],
    dosha_involved: "Vata-Kapha",
    description: "Anxiety disorder caused by Vata fear with Kapha avoidance tendencies.",
    causes: ["Genetics", "Brain structure", "Environment", "Negative experiences", "Overprotective parenting"],
    recommended_medicines: ["med-261", "med-262", "med-263"],
    home_remedies: ["remedy-261", "remedy-262", "remedy-263"],
    diet_tips: {
      foods_to_eat: ["Confidence-building foods", "Ashwagandha", "Brahmi", "Warm milk", "Ghee"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Sugar", "Heavy foods", "Processed foods"]
    },
    yoga_postures: ["Confidence-building poses", "Pranayama", "Group yoga", "Meditation"],
    category: "Mental Health"
  },
  {
    id: "eating-disorders",
    name: "Eating Disorders (Ahara Vikara)",
    hindi_name: "खाने के विकार",
    symptoms: ["Abnormal eating patterns", "Weight concerns", "Body image issues", "Purging", "Restriction", "Binging"],
    dosha_involved: "Vata-Pitta",
    description: "Psychological disorders affecting eating behavior caused by Vata anxiety with Pitta control.",
    causes: ["Psychological factors", "Social pressure", "Genetics", "Trauma", "Low self-esteem"],
    recommended_medicines: ["med-264", "med-265", "med-266"],
    home_remedies: ["remedy-264", "remedy-265", "remedy-266"],
    diet_tips: {
      foods_to_eat: ["Regular balanced meals", "Nourishing foods", "Ghee", "Warm foods", "Grounding foods"],
      foods_to_avoid: ["Restrictive dieting", "Trigger foods", "Processed foods", "Caffeine"]
    },
    yoga_postures: ["Body-positive yoga", "Pranayama", "Meditation", "Self-acceptance practices"],
    category: "Mental Health"
  },
  {
    id: "psoriasis",
    name: "Psoriasis (Kitibha Kushtha)",
    hindi_name: "सोरायसिस",
    symptoms: ["Red patches", "Silver scales", "Dry skin", "Itching", "Burning", "Cracked skin"],
    dosha_involved: "Vata-Kapha",
    description: "Chronic skin condition caused by Vata dryness with Kapha scaling.",
    causes: ["Autoimmune factors", "Genetics", "Stress", "Infections", "Cold weather", "Medications"],
    recommended_medicines: ["med-267", "med-268", "med-269"],
    home_remedies: ["remedy-267", "remedy-268", "remedy-269"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Turmeric", "Aloe vera", "Bitter gourd", "Neem"],
      foods_to_avoid: ["Dairy", "Red meat", "Nightshades", "Alcohol", "Processed foods"]
    },
    yoga_postures: ["Stress-reducing yoga", "Pranayama", "Meditation", "Sun exposure"],
    category: "Dermatological"
  },
  {
    id: "eczema",
    name: "Eczema (Vicharchika)",
    hindi_name: "एक्जिमा",
    symptoms: ["Itchy skin", "Red rashes", "Dry patches", "Oozing", "Thickened skin", "Swelling"],
    dosha_involved: "Pitta-Kapha",
    description: "Inflammatory skin condition caused by Pitta heat with Kapha moisture imbalance.",
    causes: ["Allergies", "Irritants", "Dry skin", "Genetics", "Stress", "Climate"],
    recommended_medicines: ["med-270", "med-271", "med-272"],
    home_remedies: ["remedy-270", "remedy-271", "remedy-272"],
    diet_tips: {
      foods_to_eat: ["Coconut oil", "Aloe vera", "Neem", "Turmeric", "Cooling foods"],
      foods_to_avoid: ["Dairy", "Eggs", "Gluten", "Soy", "Processed foods", "Spicy foods"]
    },
    yoga_postures: ["Cooling yoga", "Pranayama", "Stress reduction", "Meditation"],
    category: "Dermatological"
  },
  {
    id: "vitiligo",
    name: "Vitiligo (Shvitra)",
    hindi_name: "सफेद दाग",
    symptoms: ["White patches", "Loss of skin color", "Premature graying", "Eye color changes", "Mucous membrane changes"],
    dosha_involved: "Pitta-Vata",
    description: "Pigmentation disorder caused by Pitta burning melanocytes with Vata spread.",
    causes: ["Autoimmune factors", "Genetics", "Stress", "Sunburn", "Chemical exposure", "Trauma"],
    recommended_medicines: ["med-273", "med-274", "med-275"],
    home_remedies: ["remedy-273", "remedy-274", "remedy-275"],
    diet_tips: {
      foods_to_eat: ["Bakuchi", "Copper-rich foods", "Leafy greens", "Figs", "Dates", "Chickpeas"],
      foods_to_avoid: ["Sour foods", "Citrus", "Fish with milk", "Incompatible foods", "Processed foods"]
    },
    yoga_postures: ["Sun exposure", "Pranayama", "Stress reduction", "Meditation"],
    category: "Dermatological"
  },
  {
    id: "acne-vulgaris",
    name: "Acne Vulgaris (Yauvan Pidika)",
    hindi_name: "मुंहासे",
    symptoms: ["Pimples", "Blackheads", "Whiteheads", "Cysts", "Oily skin", "Scarring"],
    dosha_involved: "Pitta-Kapha",
    description: "Skin condition caused by Pitta heat with Kapha excess sebum production.",
    causes: ["Hormones", "Genetics", "Diet", "Stress", "Bacteria", "Cosmetics"],
    recommended_medicines: ["med-276", "med-277", "med-278"],
    home_remedies: ["remedy-276", "remedy-277", "remedy-278"],
    diet_tips: {
      foods_to_eat: ["Neem", "Turmeric", "Aloe vera", "Fruits", "Vegetables", "Water"],
      foods_to_avoid: ["Dairy", "Sugar", "Fried foods", "Chocolate", "Processed foods"]
    },
    yoga_postures: ["Face yoga", "Pranayama", "Stress reduction", "Inversions"],
    category: "Dermatological"
  },
  {
    id: "rosacea",
    name: "Rosacea (Mukhadushika)",
    hindi_name: "रोसेसिया",
    symptoms: ["Facial redness", "Visible blood vessels", "Bumps", "Eye irritation", "Burning", "Swelling"],
    dosha_involved: "Pitta",
    description: "Chronic facial skin condition caused by excess Pitta heat in face.",
    causes: ["Sun exposure", "Hot drinks", "Spicy foods", "Alcohol", "Extreme temperatures", "Stress"],
    recommended_medicines: ["med-279", "med-280", "med-281"],
    home_remedies: ["remedy-279", "remedy-280", "remedy-281"],
    diet_tips: {
      foods_to_eat: ["Cooling foods", "Cucumber", "Aloe vera", "Coconut", "Coriander", "Mint"],
      foods_to_avoid: ["Spicy foods", "Hot drinks", "Alcohol", "Sun exposure", "Trigger foods"]
    },
    yoga_postures: ["Cooling yoga", "Shitali Pranayama", "Gentle practices", "Avoid hot yoga"],
    category: "Dermatological"
  },
  {
    id: "urticaria",
    name: "Urticaria/Hives (Sheetapitta)",
    hindi_name: "पित्ती",
    symptoms: ["Itchy welts", "Red bumps", "Swelling", "Burning", "Raised patches", "Varying sizes"],
    dosha_involved: "Pitta-Kapha",
    description: "Allergic skin reaction caused by Pitta heat with Kapha swelling.",
    causes: ["Allergies", "Infections", "Medications", "Stress", "Temperature changes", "Food"],
    recommended_medicines: ["med-282", "med-283", "med-284"],
    home_remedies: ["remedy-282", "remedy-283", "remedy-284"],
    diet_tips: {
      foods_to_eat: ["Cooling foods", "Turmeric", "Neem", "Coconut water", "Coriander"],
      foods_to_avoid: ["Trigger foods", "Shellfish", "Nuts", "Eggs", "Preservatives", "Alcohol"]
    },
    yoga_postures: ["Cooling pranayama", "Stress reduction", "Gentle yoga", "Meditation"],
    category: "Dermatological"
  },
  {
    id: "fungal-infections",
    name: "Fungal Infections (Dadru)",
    hindi_name: "फंगल संक्रमण",
    symptoms: ["Ring-shaped rash", "Itching", "Redness", "Scaling", "Cracking", "Blisters"],
    dosha_involved: "Kapha-Pitta",
    description: "Skin fungal infection caused by Kapha moisture with Pitta inflammation.",
    causes: ["Warm moist environment", "Sweating", "Tight clothing", "Weak immunity", "Contact"],
    recommended_medicines: ["med-285", "med-286", "med-287"],
    home_remedies: ["remedy-285", "remedy-286", "remedy-287"],
    diet_tips: {
      foods_to_eat: ["Garlic", "Turmeric", "Neem", "Coconut oil", "Probiotics", "Vegetables"],
      foods_to_avoid: ["Sugar", "Yeast", "Alcohol", "Processed foods", "Dairy"]
    },
    yoga_postures: ["Drying practices", "Kapalbhati", "Sun exposure", "Good hygiene"],
    category: "Dermatological"
  },
  {
    id: "scabies",
    name: "Scabies (Pama)",
    hindi_name: "खाज",
    symptoms: ["Intense itching", "Rash", "Burrowing tracks", "Sores", "Night itching", "Crusting"],
    dosha_involved: "Kapha-Pitta",
    description: "Parasitic skin infestation caused by Kapha providing favorable environment with Pitta inflammation.",
    causes: ["Mite infestation", "Close contact", "Shared items", "Crowded conditions", "Poor hygiene"],
    recommended_medicines: ["med-288", "med-289", "med-290"],
    home_remedies: ["remedy-288", "remedy-289", "remedy-290"],
    diet_tips: {
      foods_to_eat: ["Neem", "Turmeric", "Garlic", "Bitter foods", "Clean water"],
      foods_to_avoid: ["Sugar", "Processed foods", "Heavy foods", "Dairy", "Oily foods"]
    },
    yoga_postures: ["Cleanliness practices", "Neem baths", "Sun exposure", "Hygiene"],
    category: "Dermatological"
  },
  {
    id: "leprosy",
    name: "Leprosy (Kushtha)",
    hindi_name: "कुष्ठ रोग",
    symptoms: ["Skin lesions", "Numbness", "Muscle weakness", "Eye problems", "Nasal stuffiness", "Nodules"],
    dosha_involved: "Vata-Pitta-Kapha",
    description: "Chronic bacterial infection involving all three doshas affecting skin and nerves.",
    causes: ["Mycobacterium leprae", "Close contact", "Weak immunity", "Genetics"],
    recommended_medicines: ["med-291", "med-292", "med-293"],
    home_remedies: ["remedy-291", "remedy-292", "remedy-293"],
    diet_tips: {
      foods_to_eat: ["Neem", "Turmeric", "Bitter herbs", "Light foods", "Fresh vegetables"],
      foods_to_avoid: ["Heavy foods", "Dairy", "Meat", "Sour foods", "Incompatible foods"]
    },
    yoga_postures: ["Gentle movements", "Pranayama", "Meditation", "Sun exposure"],
    category: "Dermatological"
  },
  {
    id: "hyperthyroidism",
    name: "Hyperthyroidism (Atiyakrit Thyroid)",
    hindi_name: "हाइपरथायरायडिज्म",
    symptoms: ["Weight loss", "Rapid heartbeat", "Anxiety", "Tremors", "Sweating", "Heat intolerance"],
    dosha_involved: "Pitta-Vata",
    description: "Overactive thyroid caused by excess Pitta metabolism with Vata stimulation.",
    causes: ["Graves' disease", "Thyroid nodules", "Thyroiditis", "Excess iodine", "Medications"],
    recommended_medicines: ["med-294", "med-295", "med-296"],
    home_remedies: ["remedy-294", "remedy-295", "remedy-296"],
    diet_tips: {
      foods_to_eat: ["Cruciferous vegetables", "Berries", "Calcium foods", "Cooling foods", "Coconut oil"],
      foods_to_avoid: ["Iodine-rich foods", "Caffeine", "Sugar", "Processed foods", "Gluten"]
    },
    yoga_postures: ["Cooling yoga", "Shitali Pranayama", "Sarvangasana", "Meditation"],
    category: "Endocrine"
  },
  {
    id: "hypothyroidism",
    name: "Hypothyroidism (Alpayakrit Thyroid)",
    hindi_name: "हाइपोथायरायडिज्म",
    symptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Dry skin", "Constipation", "Depression"],
    dosha_involved: "Kapha-Vata",
    description: "Underactive thyroid caused by Kapha sluggishness with Vata depletion.",
    causes: ["Hashimoto's disease", "Thyroid surgery", "Radiation", "Medications", "Iodine deficiency"],
    recommended_medicines: ["med-297", "med-298", "med-299"],
    home_remedies: ["remedy-297", "remedy-298", "remedy-299"],
    diet_tips: {
      foods_to_eat: ["Seaweed", "Brazil nuts", "Fish", "Eggs", "Coconut oil", "Ashwagandha"],
      foods_to_avoid: ["Soy", "Gluten", "Processed foods", "Sugar", "Cruciferous vegetables (raw)"]
    },
    yoga_postures: ["Sarvangasana", "Halasana", "Matsyasana", "Ujjayi Pranayama"],
    category: "Endocrine"
  },
  {
    id: "cushings-syndrome",
    name: "Cushing's Syndrome (Atisthoola)",
    hindi_name: "कुशिंग सिंड्रोम",
    symptoms: ["Weight gain", "Moon face", "Buffalo hump", "Thin skin", "Easy bruising", "Muscle weakness"],
    dosha_involved: "Kapha",
    description: "Hormonal disorder caused by excess Kapha from high cortisol levels.",
    causes: ["Prolonged corticosteroids", "Pituitary tumor", "Adrenal tumor", "Ectopic ACTH"],
    recommended_medicines: ["med-300", "med-301", "med-302"],
    home_remedies: ["remedy-300", "remedy-301", "remedy-302"],
    diet_tips: {
      foods_to_eat: ["Low-calorie foods", "Calcium-rich foods", "Vitamin D foods", "Lean protein"],
      foods_to_avoid: ["High sodium", "Sugar", "Saturated fats", "Refined carbs", "Alcohol"]
    },
    yoga_postures: ["Gentle yoga", "Weight-bearing exercises", "Pranayama", "Stress reduction"],
    category: "Endocrine"
  },
  {
    id: "addisons-disease",
    name: "Addison's Disease (Adrenal Kshaya)",
    hindi_name: "एडिसन रोग",
    symptoms: ["Fatigue", "Weight loss", "Low blood pressure", "Darkening skin", "Salt craving", "Nausea"],
    dosha_involved: "Vata",
    description: "Adrenal insufficiency caused by Vata depletion of adrenal function.",
    causes: ["Autoimmune destruction", "Tuberculosis", "Infections", "Cancer", "Genetics"],
    recommended_medicines: ["med-303", "med-304", "med-305"],
    home_remedies: ["remedy-303", "remedy-304", "remedy-305"],
    diet_tips: {
      foods_to_eat: ["Salt", "High-calorie foods", "Protein", "Ashwagandha", "Licorice root"],
      foods_to_avoid: ["Low-sodium diet", "Grapefruit", "Excessive potassium", "Alcohol"]
    },
    yoga_postures: ["Gentle restorative yoga", "Pranayama", "Stress management", "Rest"],
    category: "Endocrine"
  },
  {
    id: "pituitary-disorders",
    name: "Pituitary Disorders (Shiro Marmaja)",
    hindi_name: "पिट्यूटरी विकार",
    symptoms: ["Hormone imbalances", "Vision changes", "Headaches", "Fatigue", "Growth issues", "Mood changes"],
    dosha_involved: "Vata-Kapha",
    description: "Master gland disorders caused by Vata affecting nerve function with Kapha tumors.",
    causes: ["Tumors", "Surgery", "Radiation", "Infections", "Trauma", "Genetics"],
    recommended_medicines: ["med-306", "med-307", "med-308"],
    home_remedies: ["remedy-306", "remedy-307", "remedy-308"],
    diet_tips: {
      foods_to_eat: ["Hormone-balancing foods", "Brahmi", "Ashwagandha", "Healthy fats", "Protein"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Caffeine", "Soy"]
    },
    yoga_postures: ["Balancing poses", "Pranayama", "Meditation", "Gentle yoga"],
    category: "Endocrine"
  },
  {
    id: "hyperglycemia",
    name: "Hyperglycemia (Prameha)",
    hindi_name: "उच्च रक्त शर्करा",
    symptoms: ["Frequent urination", "Increased thirst", "Blurred vision", "Fatigue", "Headache", "Weight loss"],
    dosha_involved: "Kapha-Pitta",
    description: "High blood sugar caused by Kapha blocking insulin action with Pitta metabolism.",
    causes: ["Diabetes", "Stress", "Illness", "Medications", "Inactivity", "Overeating"],
    recommended_medicines: ["med-309", "med-310", "med-311"],
    home_remedies: ["remedy-309", "remedy-310", "remedy-311"],
    diet_tips: {
      foods_to_eat: ["Bitter gourd", "Fenugreek", "Jamun", "Turmeric", "Low glycemic foods"],
      foods_to_avoid: ["Sugar", "White rice", "Potatoes", "Sweet fruits", "Processed foods"]
    },
    yoga_postures: ["Surya Namaskar", "Paschimottanasana", "Ardha Matsyendrasana", "Kapalbhati"],
    category: "Metabolic Disorders"
  },
  {
    id: "hypoglycemia",
    name: "Hypoglycemia (Alpa Raktasharkara)",
    hindi_name: "निम्न रक्त शर्करा",
    symptoms: ["Shakiness", "Sweating", "Hunger", "Confusion", "Anxiety", "Palpitations"],
    dosha_involved: "Vata",
    description: "Low blood sugar caused by Vata irregularity in glucose metabolism.",
    causes: ["Diabetes medications", "Skipping meals", "Excessive exercise", "Alcohol", "Illness"],
    recommended_medicines: ["med-312", "med-313", "med-314"],
    home_remedies: ["remedy-312", "remedy-313", "remedy-314"],
    diet_tips: {
      foods_to_eat: ["Regular small meals", "Complex carbs", "Protein", "Healthy fats", "Nuts"],
      foods_to_avoid: ["Simple sugars", "Alcohol", "Caffeine", "Skipping meals"]
    },
    yoga_postures: ["Gentle yoga", "Regular meal times", "Stress management", "Balanced routine"],
    category: "Metabolic Disorders"
  },
  {
    id: "high-cholesterol",
    name: "High Cholesterol (Meda Vriddhi)",
    hindi_name: "उच्च कोलेस्ट्रॉल",
    symptoms: ["No obvious symptoms", "Fatty deposits", "Chest pain", "Leg pain", "Shortness of breath"],
    dosha_involved: "Kapha",
    description: "Excess cholesterol caused by Kapha accumulation of fats in blood vessels.",
    causes: ["Unhealthy diet", "Obesity", "Lack of exercise", "Smoking", "Genetics", "Diabetes"],
    recommended_medicines: ["med-315", "med-316", "med-317"],
    home_remedies: ["remedy-315", "remedy-316", "remedy-317"],
    diet_tips: {
      foods_to_eat: ["Garlic", "Oats", "Omega-3 foods", "Fiber", "Nuts", "Olive oil"],
      foods_to_avoid: ["Trans fats", "Saturated fats", "Fried foods", "Red meat", "Processed foods"]
    },
    yoga_postures: ["Surya Namaskar", "Kapalbhati", "Ardha Matsyendrasana", "Aerobic exercises"],
    category: "Metabolic Disorders"
  },
  {
    id: "metabolic-syndrome",
    name: "Metabolic Syndrome (Santarpanajanya Vikara)",
    hindi_name: "मेटाबोलिक सिंड्रोम",
    symptoms: ["Large waistline", "High triglycerides", "Low HDL", "High blood pressure", "High blood sugar"],
    dosha_involved: "Kapha",
    description: "Cluster of metabolic conditions caused by Kapha excess and sluggish metabolism.",
    causes: ["Obesity", "Sedentary lifestyle", "Insulin resistance", "Genetics", "Aging"],
    recommended_medicines: ["med-318", "med-319", "med-320"],
    home_remedies: ["remedy-318", "remedy-319", "remedy-320"],
    diet_tips: {
      foods_to_eat: ["Whole grains", "Vegetables", "Fruits", "Lean protein", "Healthy fats"],
      foods_to_avoid: ["Refined carbs", "Sugar", "Trans fats", "Processed foods", "Excess salt"]
    },
    yoga_postures: ["Regular exercise", "Surya Namaskar", "Kapalbhati", "Lifestyle changes"],
    category: "Metabolic Disorders"
  },
  {
    id: "glandular-fever",
    name: "Glandular Fever (Gandamala Jvara)",
    hindi_name: "ग्लैंडुलर फीवर",
    symptoms: ["Fatigue", "Fever", "Sore throat", "Swollen lymph nodes", "Swollen spleen", "Rash"],
    dosha_involved: "Kapha-Pitta",
    description: "Viral infection caused by Kapha lymph involvement with Pitta fever.",
    causes: ["Epstein-Barr virus", "Kissing", "Sharing utensils", "Weak immunity"],
    recommended_medicines: ["med-321", "med-322", "med-323"],
    home_remedies: ["remedy-321", "remedy-322", "remedy-323"],
    diet_tips: {
      foods_to_eat: ["Rest", "Fluids", "Soft foods", "Immunity boosters", "Vitamin C"],
      foods_to_avoid: ["Contact sports", "Alcohol", "Heavy foods", "Processed foods"]
    },
    yoga_postures: ["Complete rest", "Gentle breathing after recovery", "Gradual return to activity"],
    category: "Blood Disorders"
  },
  {
    id: "coronary-artery-disease",
    name: "Coronary Artery Disease (Hridroga)",
    hindi_name: "कोरोनरी धमनी रोग",
    symptoms: ["Chest pain", "Shortness of breath", "Heart attack", "Fatigue", "Irregular heartbeat"],
    dosha_involved: "Kapha-Vata",
    description: "Heart disease caused by Kapha plaque buildup with Vata affecting circulation.",
    causes: ["High cholesterol", "High blood pressure", "Smoking", "Diabetes", "Obesity", "Genetics"],
    recommended_medicines: ["med-324", "med-325", "med-326"],
    home_remedies: ["remedy-324", "remedy-325", "remedy-326"],
    diet_tips: {
      foods_to_eat: ["Arjuna", "Garlic", "Omega-3 foods", "Fruits", "Vegetables", "Whole grains"],
      foods_to_avoid: ["Trans fats", "Saturated fats", "Salt", "Processed foods", "Smoking"]
    },
    yoga_postures: ["Gentle cardiac yoga", "Pranayama", "Walking", "Stress reduction"],
    category: "Cardiovascular"
  },
  {
    id: "heart-failure",
    name: "Heart Failure (Hrid Daurbalya)",
    hindi_name: "हृदय विफलता",
    symptoms: ["Shortness of breath", "Fatigue", "Swelling", "Rapid heartbeat", "Cough", "Fluid retention"],
    dosha_involved: "Kapha-Vata",
    description: "Weakened heart caused by Kapha fluid accumulation with Vata affecting heart function.",
    causes: ["Coronary artery disease", "High blood pressure", "Valve disease", "Cardiomyopathy", "Diabetes"],
    recommended_medicines: ["med-327", "med-328", "med-329"],
    home_remedies: ["remedy-327", "remedy-328", "remedy-329"],
    diet_tips: {
      foods_to_eat: ["Low sodium", "Arjuna", "Fresh fruits", "Vegetables", "Lean protein"],
      foods_to_avoid: ["Salt", "Processed foods", "Saturated fats", "Alcohol", "Caffeine"]
    },
    yoga_postures: ["Gentle movements", "Breathing exercises", "Rest", "Medical supervision"],
    category: "Cardiovascular"
  },
  {
    id: "arrhythmia",
    name: "Arrhythmia (Hridaya Spandana Vikara)",
    hindi_name: "अतालता",
    symptoms: ["Irregular heartbeat", "Palpitations", "Dizziness", "Shortness of breath", "Chest discomfort", "Fainting"],
    dosha_involved: "Vata",
    description: "Irregular heart rhythm caused by Vata affecting electrical impulses.",
    causes: ["Heart disease", "Electrolyte imbalance", "Caffeine", "Stress", "Medications", "Thyroid"],
    recommended_medicines: ["med-330", "med-331", "med-332"],
    home_remedies: ["remedy-330", "remedy-331", "remedy-332"],
    diet_tips: {
      foods_to_eat: ["Potassium-rich foods", "Magnesium foods", "Arjuna", "Calming foods"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Stimulants", "Excessive salt", "Processed foods"]
    },
    yoga_postures: ["Gentle yoga", "Pranayama", "Meditation", "Avoid inversions"],
    category: "Cardiovascular"
  },
  {
    id: "peripheral-artery-disease",
    name: "Peripheral Artery Disease (Vata Rakta)",
    hindi_name: "परिधीय धमनी रोग",
    symptoms: ["Leg pain when walking", "Numbness", "Coldness in legs", "Weak pulse", "Slow healing", "Skin changes"],
    dosha_involved: "Vata-Kapha",
    description: "Narrowed arteries to limbs caused by Vata with Kapha plaque buildup.",
    causes: ["Atherosclerosis", "Smoking", "Diabetes", "High blood pressure", "High cholesterol"],
    recommended_medicines: ["med-333", "med-334", "med-335"],
    home_remedies: ["remedy-333", "remedy-334", "remedy-335"],
    diet_tips: {
      foods_to_eat: ["Omega-3 foods", "Garlic", "Ginger", "Fruits", "Vegetables", "Whole grains"],
      foods_to_avoid: ["Saturated fats", "Trans fats", "Smoking", "Processed foods", "Excess salt"]
    },
    yoga_postures: ["Walking", "Leg exercises", "Pranayama", "Circulation-improving poses"],
    category: "Cardiovascular"
  },
  {
    id: "deep-vein-thrombosis",
    name: "Deep Vein Thrombosis (Siragata Vata)",
    hindi_name: "गहरी शिरा घनास्त्रता",
    symptoms: ["Leg swelling", "Pain", "Warmth", "Redness", "Cramping", "Skin discoloration"],
    dosha_involved: "Kapha-Vata",
    description: "Blood clot in deep veins caused by Kapha clotting with Vata stagnation.",
    causes: ["Prolonged sitting", "Surgery", "Injury", "Cancer", "Birth control", "Obesity"],
    recommended_medicines: ["med-336", "med-337", "med-338"],
    home_remedies: ["remedy-336", "remedy-337", "remedy-338"],
    diet_tips: {
      foods_to_eat: ["Blood thinning foods", "Ginger", "Turmeric", "Omega-3 foods", "Hydration"],
      foods_to_avoid: ["Vitamin K excess", "Alcohol", "Processed foods", "Salt", "Sedentary habits"]
    },
    yoga_postures: ["Movement", "Leg exercises", "Walking", "Avoid prolonged sitting"],
    category: "Cardiovascular"
  },
  {
    id: "varicose-veins",
    name: "Varicose Veins (Siraja Granthi)",
    hindi_name: "वैरिकोज वेन्स",
    symptoms: ["Bulging veins", "Aching legs", "Heaviness", "Itching", "Skin changes", "Swelling"],
    dosha_involved: "Vata-Kapha",
    description: "Enlarged veins caused by Vata weakness with Kapha stagnation in venous valves.",
    causes: ["Age", "Pregnancy", "Prolonged standing", "Obesity", "Genetics", "Sedentary lifestyle"],
    recommended_medicines: ["med-339", "med-340", "med-341"],
    home_remedies: ["remedy-339", "remedy-340", "remedy-341"],
    diet_tips: {
      foods_to_eat: ["Fiber-rich foods", "Vitamin C foods", "Flavonoid foods", "Horse chestnut"],
      foods_to_avoid: ["Salt", "Processed foods", "Refined carbs", "Alcohol", "Standing long"]
    },
    yoga_postures: ["Leg elevation", "Viparita Karani", "Walking", "Avoid prolonged standing"],
    category: "Cardiovascular"
  },
  {
    id: "stroke",
    name: "Stroke (Pakshaghata)",
    hindi_name: "स्ट्रोक",
    symptoms: ["Sudden numbness", "Confusion", "Trouble speaking", "Vision problems", "Dizziness", "Severe headache"],
    dosha_involved: "Vata",
    description: "Brain blood supply interruption caused by Vata affecting brain circulation.",
    causes: ["High blood pressure", "Heart disease", "Diabetes", "Smoking", "High cholesterol", "Obesity"],
    recommended_medicines: ["med-342", "med-343", "med-344"],
    home_remedies: ["remedy-342", "remedy-343", "remedy-344"],
    diet_tips: {
      foods_to_eat: ["Omega-3 foods", "Fruits", "Vegetables", "Whole grains", "Lean protein"],
      foods_to_avoid: ["Salt", "Saturated fats", "Trans fats", "Processed foods", "Alcohol"]
    },
    yoga_postures: ["Rehabilitation exercises", "Gentle movements", "Pranayama", "Supervision needed"],
    category: "Cardiovascular"
  },
  {
    id: "low-blood-pressure",
    name: "Low Blood Pressure (Nyuna Raktachapa)",
    hindi_name: "निम्न रक्तचाप",
    symptoms: ["Dizziness", "Fainting", "Blurred vision", "Nausea", "Fatigue", "Lack of concentration"],
    dosha_involved: "Vata",
    description: "Low blood pressure caused by Vata affecting vascular tone.",
    causes: ["Dehydration", "Heart problems", "Endocrine issues", "Medications", "Blood loss", "Pregnancy"],
    recommended_medicines: ["med-345", "med-346", "med-347"],
    home_remedies: ["remedy-345", "remedy-346", "remedy-347"],
    diet_tips: {
      foods_to_eat: ["Salt", "Fluids", "Caffeine (moderate)", "Small frequent meals", "Licorice"],
      foods_to_avoid: ["Large meals", "Alcohol", "Hot weather exposure", "Sudden position changes"]
    },
    yoga_postures: ["Gradual position changes", "Leg exercises", "Hydration", "Avoid inversions"],
    category: "Cardiovascular"
  },
  {
    id: "uti",
    name: "Urinary Tract Infection (Mutrakrichra)",
    hindi_name: "मूत्र संक्रमण",
    symptoms: ["Burning urination", "Frequent urination", "Urgency", "Cloudy urine", "Blood in urine", "Pelvic pain"],
    dosha_involved: "Pitta",
    description: "Urinary infection primarily caused by Pitta heat and inflammation in urinary tract.",
    causes: ["Bacteria", "Sexual activity", "Poor hygiene", "Diabetes", "Kidney stones", "Catheter use"],
    recommended_medicines: ["med-348", "med-349", "med-350"],
    home_remedies: ["remedy-348", "remedy-349", "remedy-350"],
    diet_tips: {
      foods_to_eat: ["Cranberry", "Water", "Coconut water", "Coriander", "Cooling foods"],
      foods_to_avoid: ["Spicy foods", "Caffeine", "Alcohol", "Sugar", "Carbonated drinks"]
    },
    yoga_postures: ["Hydration", "Pranayama", "Gentle yoga", "Good hygiene"],
    category: "Urological"
  },
  {
    id: "prostatitis",
    name: "Prostatitis (Vatashthila)",
    hindi_name: "प्रोस्टेटाइटिस",
    symptoms: ["Painful urination", "Frequent urination", "Pelvic pain", "Groin pain", "Flu-like symptoms"],
    dosha_involved: "Vata-Pitta",
    description: "Prostate inflammation caused by Vata with Pitta infection or inflammation.",
    causes: ["Bacterial infection", "Nerve damage", "Immune disorders", "Injury", "Urinary problems"],
    recommended_medicines: ["med-351", "med-352", "med-353"],
    home_remedies: ["remedy-351", "remedy-352", "remedy-353"],
    diet_tips: {
      foods_to_eat: ["Pumpkin seeds", "Tomatoes", "Green tea", "Zinc-rich foods", "Omega-3 foods"],
      foods_to_avoid: ["Spicy foods", "Caffeine", "Alcohol", "Acidic foods", "Red meat"]
    },
    yoga_postures: ["Pelvic exercises", "Baddha Konasana", "Pranayama", "Relaxation"],
    category: "Urological"
  },
  {
    id: "bph",
    name: "Benign Prostatic Hyperplasia (Vatashthila)",
    hindi_name: "प्रोस्टेट वृद्धि",
    symptoms: ["Frequent urination", "Weak stream", "Incomplete emptying", "Nocturia", "Urgency", "Dribbling"],
    dosha_involved: "Kapha-Vata",
    description: "Prostate enlargement caused by Kapha growth with Vata urinary symptoms.",
    causes: ["Aging", "Hormonal changes", "Genetics", "Obesity", "Diabetes", "Heart disease"],
    recommended_medicines: ["med-354", "med-355", "med-356"],
    home_remedies: ["remedy-354", "remedy-355", "remedy-356"],
    diet_tips: {
      foods_to_eat: ["Pumpkin seeds", "Saw palmetto", "Tomatoes", "Vegetables", "Zinc foods"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Spicy foods", "Dairy", "Red meat"]
    },
    yoga_postures: ["Kegel exercises", "Baddha Konasana", "Ashwini Mudra", "Pranayama"],
    category: "Urological"
  },
  {
    id: "erectile-dysfunction",
    name: "Erectile Dysfunction (Klaibya)",
    hindi_name: "स्तंभन दोष",
    symptoms: ["Difficulty getting erection", "Difficulty maintaining erection", "Reduced desire", "Anxiety"],
    dosha_involved: "Vata",
    description: "Sexual dysfunction primarily caused by Vata affecting reproductive channels.",
    causes: ["Vascular disease", "Diabetes", "Hormonal issues", "Medications", "Stress", "Obesity"],
    recommended_medicines: ["med-357", "med-358", "med-359"],
    home_remedies: ["remedy-357", "remedy-358", "remedy-359"],
    diet_tips: {
      foods_to_eat: ["Ashwagandha", "Shatavari", "Almonds", "Dates", "Ghee", "Kapikacchu"],
      foods_to_avoid: ["Alcohol", "Smoking", "Processed foods", "Excess caffeine", "Stress"]
    },
    yoga_postures: ["Ashwini Mudra", "Kegel exercises", "Pranayama", "Stress reduction"],
    category: "Urological"
  },
  {
    id: "premature-ejaculation",
    name: "Premature Ejaculation (Shukra Atiskhalana)",
    hindi_name: "शीघ्रपतन",
    symptoms: ["Early ejaculation", "Inability to delay", "Distress", "Relationship issues"],
    dosha_involved: "Vata-Pitta",
    description: "Sexual disorder caused by Vata speed with Pitta excitement.",
    causes: ["Anxiety", "Stress", "Relationship issues", "Hormonal imbalance", "Hypersensitivity"],
    recommended_medicines: ["med-360", "med-361", "med-362"],
    home_remedies: ["remedy-360", "remedy-361", "remedy-362"],
    diet_tips: {
      foods_to_eat: ["Ashwagandha", "Shatavari", "Almonds", "Milk", "Ghee", "Calming foods"],
      foods_to_avoid: ["Stimulants", "Alcohol", "Spicy foods", "Caffeine", "Stress"]
    },
    yoga_postures: ["Pranayama", "Ashwini Mudra", "Meditation", "Relaxation techniques"],
    category: "Urological"
  },
  {
    id: "infertility-male",
    name: "Male Infertility (Shukra Dosha)",
    hindi_name: "पुरुष बांझपन",
    symptoms: ["Inability to conceive", "Low sperm count", "Abnormal sperm", "Hormonal issues", "Sexual dysfunction"],
    dosha_involved: "Vata",
    description: "Reproductive disorder caused by Vata affecting sperm quality and quantity.",
    causes: ["Hormonal issues", "Varicocele", "Infections", "Lifestyle factors", "Heat exposure", "Toxins"],
    recommended_medicines: ["med-363", "med-364", "med-365"],
    home_remedies: ["remedy-363", "remedy-364", "remedy-365"],
    diet_tips: {
      foods_to_eat: ["Ashwagandha", "Shatavari", "Kapikacchu", "Milk", "Ghee", "Dates"],
      foods_to_avoid: ["Alcohol", "Smoking", "Processed foods", "Soy", "Heat exposure"]
    },
    yoga_postures: ["Fertility yoga", "Ashwini Mudra", "Pranayama", "Stress reduction"],
    category: "Urological"
  },
  {
    id: "infertility-female",
    name: "Female Infertility (Vandhyatva)",
    hindi_name: "महिला बांझपन",
    symptoms: ["Inability to conceive", "Irregular periods", "Hormonal issues", "Painful periods", "Pelvic issues"],
    dosha_involved: "Vata-Kapha",
    description: "Reproductive disorder caused by Vata blocking with Kapha obstruction.",
    causes: ["Ovulation disorders", "PCOS", "Endometriosis", "Tubal issues", "Age", "Hormonal imbalance"],
    recommended_medicines: ["med-366", "med-367", "med-368"],
    home_remedies: ["remedy-366", "remedy-367", "remedy-368"],
    diet_tips: {
      foods_to_eat: ["Shatavari", "Ashwagandha", "Lodhra", "Ghee", "Milk", "Folic acid foods"],
      foods_to_avoid: ["Processed foods", "Trans fats", "Excess caffeine", "Alcohol", "Stress"]
    },
    yoga_postures: ["Fertility yoga", "Baddha Konasana", "Supta Baddha Konasana", "Pranayama"],
    category: "Gynecological"
  },
  {
    id: "menstrual-disorders",
    name: "Menstrual Disorders (Artava Vikara)",
    hindi_name: "मासिक धर्म विकार",
    symptoms: ["Irregular periods", "Heavy bleeding", "Painful periods", "Absent periods", "PMS", "Mood changes"],
    dosha_involved: "Vata-Pitta",
    description: "Menstrual irregularities caused by Vata affecting timing with Pitta affecting flow.",
    causes: ["Hormonal imbalance", "Stress", "PCOS", "Thyroid disorders", "Weight changes", "Medications"],
    recommended_medicines: ["med-369", "med-370", "med-371"],
    home_remedies: ["remedy-369", "remedy-370", "remedy-371"],
    diet_tips: {
      foods_to_eat: ["Iron-rich foods", "Shatavari", "Ashoka", "Lodhra", "Leafy greens"],
      foods_to_avoid: ["Processed foods", "Caffeine", "Cold foods", "Spicy foods during period"]
    },
    yoga_postures: ["Baddha Konasana", "Supta Baddha Konasana", "Pranayama", "Gentle yoga"],
    category: "Gynecological"
  },
  {
    id: "endometriosis",
    name: "Endometriosis (Yonivyapad)",
    hindi_name: "एंडोमेट्रियोसिस",
    symptoms: ["Pelvic pain", "Painful periods", "Pain during intercourse", "Infertility", "Heavy bleeding", "Fatigue"],
    dosha_involved: "Vata-Kapha",
    description: "Endometrial tissue growth outside uterus caused by Vata displacement with Kapha growth.",
    causes: ["Retrograde menstruation", "Immune dysfunction", "Genetics", "Hormonal factors", "Surgery"],
    recommended_medicines: ["med-372", "med-373", "med-374"],
    home_remedies: ["remedy-372", "remedy-373", "remedy-374"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Omega-3 foods", "Turmeric", "Ginger", "Vegetables"],
      foods_to_avoid: ["Red meat", "Dairy", "Gluten", "Caffeine", "Alcohol", "Soy"]
    },
    yoga_postures: ["Gentle hip openers", "Restorative yoga", "Pranayama", "Pain management"],
    category: "Gynecological"
  },
  {
    id: "uterine-fibroids",
    name: "Uterine Fibroids (Garbhashaya Granthi)",
    hindi_name: "गर्भाशय फाइब्रॉइड",
    symptoms: ["Heavy bleeding", "Pelvic pain", "Frequent urination", "Constipation", "Back pain", "Enlarged uterus"],
    dosha_involved: "Kapha",
    description: "Non-cancerous uterine growths primarily caused by Kapha accumulation.",
    causes: ["Hormonal factors", "Genetics", "Obesity", "Diet", "Race", "Early menstruation"],
    recommended_medicines: ["med-375", "med-376", "med-377"],
    home_remedies: ["remedy-375", "remedy-376", "remedy-377"],
    diet_tips: {
      foods_to_eat: ["Green vegetables", "Fruits", "Whole grains", "Legumes", "Green tea"],
      foods_to_avoid: ["Red meat", "Dairy", "Alcohol", "Caffeine", "Processed foods"]
    },
    yoga_postures: ["Gentle abdominal work", "Pranayama", "Stress reduction", "Walking"],
    category: "Gynecological"
  },
  {
    id: "ovarian-cysts",
    name: "Ovarian Cysts (Granthi)",
    hindi_name: "अंडाशय गांठ",
    symptoms: ["Pelvic pain", "Bloating", "Painful periods", "Pain during intercourse", "Nausea", "Breast tenderness"],
    dosha_involved: "Kapha-Vata",
    description: "Fluid-filled sacs on ovaries caused by Kapha accumulation with Vata movement.",
    causes: ["Hormonal imbalance", "PCOS", "Endometriosis", "Pregnancy", "Pelvic infections"],
    recommended_medicines: ["med-378", "med-379", "med-380"],
    home_remedies: ["remedy-378", "remedy-379", "remedy-380"],
    diet_tips: {
      foods_to_eat: ["Fiber-rich foods", "Flaxseeds", "Vegetables", "Fruits", "Whole grains"],
      foods_to_avoid: ["Dairy", "Red meat", "Caffeine", "Alcohol", "Processed foods"]
    },
    yoga_postures: ["Hip openers", "Pranayama", "Stress reduction", "Gentle twists"],
    category: "Gynecological"
  },
  {
    id: "menopause",
    name: "Menopause (Rajonivrutti)",
    hindi_name: "रजोनिवृत्ति",
    symptoms: ["Hot flashes", "Night sweats", "Mood changes", "Vaginal dryness", "Sleep problems", "Weight gain"],
    dosha_involved: "Vata-Pitta",
    description: "End of menstruation caused by Vata transition with Pitta heat symptoms.",
    causes: ["Natural aging", "Ovarian failure", "Surgery", "Chemotherapy", "Genetics"],
    recommended_medicines: ["med-381", "med-382", "med-383"],
    home_remedies: ["remedy-381", "remedy-382", "remedy-383"],
    diet_tips: {
      foods_to_eat: ["Phytoestrogen foods", "Shatavari", "Flaxseeds", "Soy", "Calcium foods"],
      foods_to_avoid: ["Spicy foods", "Caffeine", "Alcohol", "Hot drinks", "Trigger foods"]
    },
    yoga_postures: ["Cooling yoga", "Pranayama", "Meditation", "Hormone-balancing poses"],
    category: "Gynecological"
  },
  {
    id: "leucorrhea",
    name: "Leucorrhea (Shweta Pradara)",
    hindi_name: "श्वेत प्रदर",
    symptoms: ["White discharge", "Itching", "Burning", "Lower back pain", "Weakness", "Fatigue"],
    dosha_involved: "Kapha",
    description: "Abnormal vaginal discharge primarily caused by Kapha imbalance.",
    causes: ["Infections", "Poor hygiene", "Hormonal changes", "Stress", "Diabetes", "Weak immunity"],
    recommended_medicines: ["med-384", "med-385", "med-386"],
    home_remedies: ["remedy-384", "remedy-385", "remedy-386"],
    diet_tips: {
      foods_to_eat: ["Light foods", "Bitter vegetables", "Turmeric", "Neem", "Fenugreek"],
      foods_to_avoid: ["Heavy foods", "Dairy", "Sugar", "Fermented foods", "Sour foods"]
    },
    yoga_postures: ["Pelvic exercises", "Pranayama", "Hygiene practices", "Light exercise"],
    category: "Gynecological"
  },
  {
    id: "vaginitis",
    name: "Vaginitis (Yoni Kandu)",
    hindi_name: "योनि शोथ",
    symptoms: ["Vaginal itching", "Discharge", "Burning", "Odor", "Pain", "Swelling"],
    dosha_involved: "Pitta-Kapha",
    description: "Vaginal inflammation caused by Pitta heat with Kapha discharge.",
    causes: ["Bacterial vaginosis", "Yeast infection", "Trichomoniasis", "Chemical irritants", "Hormonal changes"],
    recommended_medicines: ["med-387", "med-388", "med-389"],
    home_remedies: ["remedy-387", "remedy-388", "remedy-389"],
    diet_tips: {
      foods_to_eat: ["Probiotics", "Yogurt", "Garlic", "Coconut oil", "Turmeric", "Neem"],
      foods_to_avoid: ["Sugar", "Alcohol", "Processed foods", "Tight clothing", "Douching"]
    },
    yoga_postures: ["Pelvic floor exercises", "Pranayama", "Good hygiene", "Stress reduction"],
    category: "Gynecological"
  },
  {
    id: "morning-sickness",
    name: "Morning Sickness (Garbha Chardi)",
    hindi_name: "गर्भावस्था उल्टी",
    symptoms: ["Nausea", "Vomiting", "Food aversions", "Heightened smell", "Fatigue", "Dizziness"],
    dosha_involved: "Pitta-Vata",
    description: "Pregnancy nausea caused by Pitta imbalance with Vata during early pregnancy.",
    causes: ["Hormonal changes", "hCG levels", "Sensitivity", "Stress", "Multiple pregnancy"],
    recommended_medicines: ["med-390", "med-391", "med-392"],
    home_remedies: ["remedy-390", "remedy-391", "remedy-392"],
    diet_tips: {
      foods_to_eat: ["Ginger", "Small frequent meals", "Crackers", "Lemon", "Mint", "Cool foods"],
      foods_to_avoid: ["Spicy foods", "Fatty foods", "Strong smells", "Large meals", "Empty stomach"]
    },
    yoga_postures: ["Gentle pregnancy yoga", "Breathing exercises", "Rest", "Acupressure"],
    category: "Gynecological"
  },
  {
    id: "postpartum-depression",
    name: "Postpartum Depression (Prasava Vishada)",
    hindi_name: "प्रसवोत्तर अवसाद",
    symptoms: ["Severe mood swings", "Excessive crying", "Difficulty bonding", "Withdrawal", "Sleep problems", "Fatigue"],
    dosha_involved: "Vata",
    description: "Depression after childbirth caused by Vata depletion and hormonal changes.",
    causes: ["Hormonal changes", "Sleep deprivation", "History of depression", "Stress", "Lack of support"],
    recommended_medicines: ["med-393", "med-394", "med-395"],
    home_remedies: ["remedy-393", "remedy-394", "remedy-395"],
    diet_tips: {
      foods_to_eat: ["Warm nourishing foods", "Ghee", "Ashwagandha", "Shatavari", "Protein"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Processed foods", "Cold foods", "Sugar"]
    },
    yoga_postures: ["Gentle postpartum yoga", "Pranayama", "Meditation", "Support groups"],
    category: "Mental Health"
  },
  {
    id: "sickle-cell-anemia",
    name: "Sickle Cell Anemia (Vikrit Rakta Kana)",
    hindi_name: "सिकल सेल एनीमिया",
    symptoms: ["Pain episodes", "Fatigue", "Swelling", "Frequent infections", "Delayed growth", "Vision problems"],
    dosha_involved: "Vata-Pitta",
    description: "Inherited blood disorder caused by Vata malformation with Pitta inflammation.",
    causes: ["Genetics", "Inherited from both parents", "Sickle hemoglobin gene"],
    recommended_medicines: ["med-396", "med-397", "med-398"],
    home_remedies: ["remedy-396", "remedy-397", "remedy-398"],
    diet_tips: {
      foods_to_eat: ["Folic acid foods", "Zinc foods", "Iron-rich foods", "Hydration", "Vitamin D"],
      foods_to_avoid: ["Dehydration", "Extreme temperatures", "High altitude", "Alcohol"]
    },
    yoga_postures: ["Gentle movements", "Pranayama", "Rest during crisis", "Stress reduction"],
    category: "Blood Disorders"
  },
  {
    id: "thalassemia",
    name: "Thalassemia (Vikrit Raktakana)",
    hindi_name: "थैलेसीमिया",
    symptoms: ["Fatigue", "Weakness", "Pale skin", "Facial bone deformities", "Slow growth", "Dark urine"],
    dosha_involved: "Pitta-Vata",
    description: "Inherited blood disorder caused by Pitta affecting hemoglobin with Vata depletion.",
    causes: ["Genetics", "Inherited gene mutations", "Both parents carriers"],
    recommended_medicines: ["med-399", "med-400", "med-401"],
    home_remedies: ["remedy-399", "remedy-400", "remedy-401"],
    diet_tips: {
      foods_to_eat: ["Folic acid foods", "Calcium foods", "Vitamin D", "Low iron if indicated"],
      foods_to_avoid: ["Excess iron", "Iron supplements unless prescribed", "Alcohol"]
    },
    yoga_postures: ["Gentle yoga", "Pranayama", "Energy conservation", "Stress reduction"],
    category: "Blood Disorders"
  },
  {
    id: "hemophilia",
    name: "Hemophilia (Raktasrava)",
    hindi_name: "हीमोफीलिया",
    symptoms: ["Excessive bleeding", "Easy bruising", "Joint bleeding", "Blood in urine/stool", "Nosebleeds"],
    dosha_involved: "Pitta",
    description: "Bleeding disorder caused by Pitta affecting blood clotting factors.",
    causes: ["Genetics", "X-linked inheritance", "Clotting factor deficiency"],
    recommended_medicines: ["med-402", "med-403", "med-404"],
    home_remedies: ["remedy-402", "remedy-403", "remedy-404"],
    diet_tips: {
      foods_to_eat: ["Vitamin K foods", "Iron-rich foods", "Protein", "Calcium", "Healthy diet"],
      foods_to_avoid: ["Aspirin", "Blood thinners", "Contact sports", "Injury risks"]
    },
    yoga_postures: ["Very gentle movements", "Avoid injury", "Pranayama", "Meditation"],
    category: "Blood Disorders"
  },
  {
    id: "leukemia",
    name: "Leukemia (Rakta Arbuda)",
    hindi_name: "ल्यूकेमिया",
    symptoms: ["Fatigue", "Fever", "Frequent infections", "Weight loss", "Easy bleeding", "Bone pain"],
    dosha_involved: "Pitta-Kapha",
    description: "Blood cancer caused by Pitta affecting blood cells with Kapha abnormal growth.",
    causes: ["Genetics", "Radiation exposure", "Chemicals", "Previous chemotherapy", "Genetic disorders"],
    recommended_medicines: ["med-405", "med-406", "med-407"],
    home_remedies: ["remedy-405", "remedy-406", "remedy-407"],
    diet_tips: {
      foods_to_eat: ["Antioxidant foods", "Protein", "Fruits", "Vegetables", "Whole grains"],
      foods_to_avoid: ["Processed foods", "Raw foods if immunity low", "Alcohol", "Sugar"]
    },
    yoga_postures: ["Restorative yoga", "Gentle movements", "Pranayama", "Meditation"],
    category: "Blood Disorders"
  },
  {
    id: "lymphoma",
    name: "Lymphoma (Lasika Arbuda)",
    hindi_name: "लिम्फोमा",
    symptoms: ["Swollen lymph nodes", "Fatigue", "Fever", "Night sweats", "Weight loss", "Itching"],
    dosha_involved: "Kapha",
    description: "Lymphatic system cancer caused by Kapha abnormal lymph cell growth.",
    causes: ["Immune deficiency", "Infections", "Age", "Genetics", "Autoimmune diseases"],
    recommended_medicines: ["med-408", "med-409", "med-410"],
    home_remedies: ["remedy-408", "remedy-409", "remedy-410"],
    diet_tips: {
      foods_to_eat: ["Antioxidant foods", "Anti-inflammatory foods", "Protein", "Vegetables"],
      foods_to_avoid: ["Processed foods", "Red meat", "Alcohol", "Sugar", "Refined carbs"]
    },
    yoga_postures: ["Gentle yoga", "Lymphatic drainage", "Pranayama", "Meditation"],
    category: "Blood Disorders"
  },
  {
    id: "dengue",
    name: "Dengue Fever (Dandaka Jvara)",
    hindi_name: "डेंगू",
    symptoms: ["High fever", "Severe headache", "Pain behind eyes", "Joint pain", "Rash", "Bleeding"],
    dosha_involved: "Pitta",
    description: "Mosquito-borne viral fever caused by acute Pitta aggravation with blood involvement.",
    causes: ["Aedes mosquito bite", "Dengue virus", "Endemic areas", "Standing water"],
    recommended_medicines: ["med-411", "med-412", "med-413"],
    home_remedies: ["remedy-411", "remedy-412", "remedy-413"],
    diet_tips: {
      foods_to_eat: ["Papaya leaves", "Giloy", "Fluids", "Coconut water", "Light foods"],
      foods_to_avoid: ["Oily foods", "Spicy foods", "Caffeine", "Alcohol", "Heavy foods"]
    },
    yoga_postures: ["Complete rest", "Hydration", "Gentle recovery exercises"],
    category: "Blood Disorders"
  },
  {
    id: "malaria",
    name: "Malaria (Vishama Jvara)",
    hindi_name: "मलेरिया",
    symptoms: ["Cyclic fever", "Chills", "Sweating", "Headache", "Nausea", "Muscle pain"],
    dosha_involved: "Vata-Pitta-Kapha",
    description: "Parasitic infection causing cyclic fever involving all three doshas.",
    causes: ["Anopheles mosquito bite", "Plasmodium parasite", "Endemic areas", "Travel"],
    recommended_medicines: ["med-414", "med-415", "med-416"],
    home_remedies: ["remedy-414", "remedy-415", "remedy-416"],
    diet_tips: {
      foods_to_eat: ["Light easily digestible foods", "Fluids", "Giloy", "Turmeric", "Tulsi"],
      foods_to_avoid: ["Heavy foods", "Oily foods", "Cold foods", "Raw vegetables"]
    },
    yoga_postures: ["Rest during fever", "Gradual recovery", "Pranayama after recovery"],
    category: "Blood Disorders"
  },
  {
    id: "typhoid",
    name: "Typhoid (Antrika Jvara)",
    hindi_name: "टाइफाइड",
    symptoms: ["Sustained fever", "Headache", "Abdominal pain", "Constipation or diarrhea", "Rose spots", "Weakness"],
    dosha_involved: "Pitta",
    description: "Bacterial infection primarily caused by Pitta affecting intestines.",
    causes: ["Salmonella typhi", "Contaminated food/water", "Poor sanitation", "Carriers"],
    recommended_medicines: ["med-417", "med-418", "med-419"],
    home_remedies: ["remedy-417", "remedy-418", "remedy-419"],
    diet_tips: {
      foods_to_eat: ["Easily digestible foods", "Rice water", "Coconut water", "Buttermilk", "Light soups"],
      foods_to_avoid: ["Spicy foods", "Oily foods", "Raw vegetables", "Heavy foods", "Fiber-rich foods"]
    },
    yoga_postures: ["Complete rest", "Hydration", "Gradual recovery", "Light movements after"],
    category: "Digestive"
  },
  {
    id: "chikungunya",
    name: "Chikungunya (Sandhi Jvara)",
    hindi_name: "चिकनगुनिया",
    symptoms: ["High fever", "Severe joint pain", "Muscle pain", "Headache", "Rash", "Fatigue"],
    dosha_involved: "Vata-Pitta",
    description: "Viral fever with severe joint involvement caused by Vata-Pitta aggravation.",
    causes: ["Aedes mosquito bite", "Chikungunya virus", "Endemic areas"],
    recommended_medicines: ["med-420", "med-421", "med-422"],
    home_remedies: ["remedy-420", "remedy-421", "remedy-422"],
    diet_tips: {
      foods_to_eat: ["Papaya leaves", "Giloy", "Coconut water", "Light foods", "Anti-inflammatory foods"],
      foods_to_avoid: ["Oily foods", "Spicy foods", "Non-vegetarian", "Heavy foods"]
    },
    yoga_postures: ["Rest", "Gentle joint movements after fever", "Recovery exercises"],
    category: "Musculoskeletal"
  },
  {
    id: "chicken-pox",
    name: "Chicken Pox (Laghu Masurika)",
    hindi_name: "चेचक",
    symptoms: ["Itchy rash", "Blisters", "Fever", "Fatigue", "Loss of appetite", "Headache"],
    dosha_involved: "Pitta-Kapha",
    description: "Viral infection caused by Pitta heat with Kapha fluid-filled blisters.",
    causes: ["Varicella-zoster virus", "Direct contact", "Airborne transmission", "Weak immunity"],
    recommended_medicines: ["med-423", "med-424", "med-425"],
    home_remedies: ["remedy-423", "remedy-424", "remedy-425"],
    diet_tips: {
      foods_to_eat: ["Cooling foods", "Neem", "Soft foods", "Fluids", "Vitamin C foods"],
      foods_to_avoid: ["Spicy foods", "Oily foods", "Scratching", "Heavy foods"]
    },
    yoga_postures: ["Rest", "Neem baths", "Cooling practices", "Gentle recovery"],
    category: "Dermatological"
  },
  {
    id: "measles",
    name: "Measles (Romantika)",
    hindi_name: "खसरा",
    symptoms: ["High fever", "Cough", "Runny nose", "Red eyes", "Rash", "Koplik spots"],
    dosha_involved: "Pitta-Kapha",
    description: "Viral infection caused by Pitta fever with Kapha respiratory symptoms.",
    causes: ["Measles virus", "Airborne transmission", "Direct contact", "Unvaccinated"],
    recommended_medicines: ["med-426", "med-427", "med-428"],
    home_remedies: ["remedy-426", "remedy-427", "remedy-428"],
    diet_tips: {
      foods_to_eat: ["Light foods", "Fluids", "Vitamin A foods", "Soft foods", "Coconut water"],
      foods_to_avoid: ["Heavy foods", "Oily foods", "Spicy foods", "Cold drinks"]
    },
    yoga_postures: ["Complete rest", "Isolation", "Gradual recovery", "Eye care"],
    category: "Respiratory"
  },
  {
    id: "mumps",
    name: "Mumps (Karnapali Shotha)",
    hindi_name: "गलसुआ",
    symptoms: ["Swollen salivary glands", "Fever", "Headache", "Muscle aches", "Fatigue", "Pain chewing"],
    dosha_involved: "Kapha",
    description: "Viral infection primarily caused by Kapha affecting salivary glands.",
    causes: ["Mumps virus", "Respiratory droplets", "Direct contact", "Unvaccinated"],
    recommended_medicines: ["med-429", "med-430", "med-431"],
    home_remedies: ["remedy-429", "remedy-430", "remedy-431"],
    diet_tips: {
      foods_to_eat: ["Soft foods", "Fluids", "Ice pops", "Mashed foods", "Warm compresses"],
      foods_to_avoid: ["Sour foods", "Hard foods", "Chewing difficult foods", "Citrus"]
    },
    yoga_postures: ["Rest", "Warm compresses", "Gentle recovery", "Isolation"],
    category: "Respiratory"
  },
  {
    id: "whooping-cough",
    name: "Whooping Cough (Kukkur Kasa)",
    hindi_name: "काली खांसी",
    symptoms: ["Severe coughing fits", "Whooping sound", "Vomiting after cough", "Exhaustion", "Red face"],
    dosha_involved: "Kapha-Vata",
    description: "Bacterial respiratory infection caused by Kapha mucus with Vata spasmodic cough.",
    causes: ["Bordetella pertussis", "Respiratory droplets", "Close contact", "Unvaccinated"],
    recommended_medicines: ["med-432", "med-433", "med-434"],
    home_remedies: ["remedy-432", "remedy-433", "remedy-434"],
    diet_tips: {
      foods_to_eat: ["Honey", "Ginger", "Warm fluids", "Small frequent meals", "Light foods"],
      foods_to_avoid: ["Cold foods", "Dairy", "Heavy meals", "Trigger foods"]
    },
    yoga_postures: ["Rest", "Humidifier use", "Gentle breathing after recovery"],
    category: "Respiratory"
  },
  {
    id: "diphtheria",
    name: "Diphtheria (Rohini)",
    hindi_name: "गलघोंटू",
    symptoms: ["Sore throat", "Fever", "Swollen glands", "Gray membrane in throat", "Difficulty breathing", "Weakness"],
    dosha_involved: "Kapha",
    description: "Bacterial infection primarily caused by Kapha forming throat membrane.",
    causes: ["Corynebacterium diphtheriae", "Respiratory droplets", "Contaminated items", "Unvaccinated"],
    recommended_medicines: ["med-435", "med-436", "med-437"],
    home_remedies: ["remedy-435", "remedy-436", "remedy-437"],
    diet_tips: {
      foods_to_eat: ["Soft foods", "Warm fluids", "Light foods", "Honey", "Gargling"],
      foods_to_avoid: ["Hard foods", "Cold foods", "Irritating foods", "Heavy foods"]
    },
    yoga_postures: ["Complete rest", "Medical treatment essential", "Recovery exercises"],
    category: "Respiratory"
  },
  {
    id: "tetanus",
    name: "Tetanus (Dhanustambha)",
    hindi_name: "टेटनस",
    symptoms: ["Muscle stiffness", "Jaw stiffness", "Difficulty swallowing", "Muscle spasms", "Fever", "Sweating"],
    dosha_involved: "Vata",
    description: "Bacterial infection caused by Vata affecting nervous system causing spasms.",
    causes: ["Clostridium tetani", "Wound contamination", "Rusty objects", "Unvaccinated"],
    recommended_medicines: ["med-438", "med-439", "med-440"],
    home_remedies: ["remedy-438", "remedy-439", "remedy-440"],
    diet_tips: {
      foods_to_eat: ["Liquid diet if needed", "Soft foods", "High calorie", "Protein", "Fluids"],
      foods_to_avoid: ["Chewing if jaw affected", "Hard foods", "Difficult foods"]
    },
    yoga_postures: ["Medical emergency", "Complete rest", "Rehabilitation after"],
    category: "Neurological"
  },
  {
    id: "rabies",
    name: "Rabies (Alarka Visha)",
    hindi_name: "रेबीज",
    symptoms: ["Fever", "Headache", "Anxiety", "Confusion", "Hydrophobia", "Hallucinations"],
    dosha_involved: "Vata-Pitta",
    description: "Viral infection caused by Vata affecting nervous system with Pitta fever.",
    causes: ["Rabies virus", "Animal bite", "Infected saliva", "Bats", "Dogs"],
    recommended_medicines: ["med-441", "med-442", "med-443"],
    home_remedies: ["remedy-441", "remedy-442", "remedy-443"],
    diet_tips: {
      foods_to_eat: ["Immediate medical attention", "Post-exposure prophylaxis", "Supportive care"],
      foods_to_avoid: ["Delay in treatment", "Home remedies alone"]
    },
    yoga_postures: ["Medical emergency", "Immediate vaccination", "Complete treatment"],
    category: "Neurological"
  },
  {
    id: "food-poisoning",
    name: "Food Poisoning (Anna Visha)",
    hindi_name: "भोजन विषाक्तता",
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Abdominal cramps", "Fever", "Dehydration"],
    dosha_involved: "Pitta",
    description: "Gastrointestinal infection caused by Pitta from contaminated food.",
    causes: ["Contaminated food", "Bacteria", "Viruses", "Parasites", "Toxins", "Poor hygiene"],
    recommended_medicines: ["med-444", "med-445", "med-446"],
    home_remedies: ["remedy-444", "remedy-445", "remedy-446"],
    diet_tips: {
      foods_to_eat: ["ORS", "Clear fluids", "Bland foods", "Rice", "Banana", "Toast"],
      foods_to_avoid: ["Dairy", "Fatty foods", "Spicy foods", "Caffeine", "Alcohol"]
    },
    yoga_postures: ["Rest", "Hydration", "Gradual food introduction", "Gentle recovery"],
    category: "Digestive"
  },
  {
    id: "cholera",
    name: "Cholera (Visuchika)",
    hindi_name: "हैजा",
    symptoms: ["Profuse watery diarrhea", "Vomiting", "Severe dehydration", "Muscle cramps", "Sunken eyes", "Thirst"],
    dosha_involved: "Pitta-Vata",
    description: "Acute diarrheal infection caused by Pitta with Vata rapid dehydration.",
    causes: ["Vibrio cholerae", "Contaminated water", "Contaminated food", "Poor sanitation"],
    recommended_medicines: ["med-447", "med-448", "med-449"],
    home_remedies: ["remedy-447", "remedy-448", "remedy-449"],
    diet_tips: {
      foods_to_eat: ["ORS urgently", "Clean water", "Rice water", "Coconut water", "Light foods"],
      foods_to_avoid: ["Raw foods", "Contaminated water", "Heavy foods", "Dairy"]
    },
    yoga_postures: ["Medical emergency", "Immediate rehydration", "Rest", "Recovery"],
    category: "Digestive"
  },
  {
    id: "jaundice",
    name: "Jaundice (Kamala)",
    hindi_name: "पीलिया",
    symptoms: ["Yellow skin", "Yellow eyes", "Dark urine", "Pale stools", "Itching", "Fatigue"],
    dosha_involved: "Pitta",
    description: "Liver condition caused by excess Pitta and bilirubin accumulation.",
    causes: ["Hepatitis", "Gallstones", "Liver disease", "Hemolysis", "Pancreatic cancer", "Medications"],
    recommended_medicines: ["med-450", "med-451", "med-452"],
    home_remedies: ["remedy-450", "remedy-451", "remedy-452"],
    diet_tips: {
      foods_to_eat: ["Sugarcane juice", "Radish", "Papaya", "Lemon", "Bitter vegetables", "Light foods"],
      foods_to_avoid: ["Alcohol", "Oily foods", "Spicy foods", "Heavy foods", "Processed foods"]
    },
    yoga_postures: ["Rest", "Gentle yoga after recovery", "Pranayama", "Liver-supporting poses"],
    category: "Hepatic"
  },
  {
    id: "hepatitis-a",
    name: "Hepatitis A (Yakrit Shotha A)",
    hindi_name: "हेपेटाइटिस ए",
    symptoms: ["Fatigue", "Nausea", "Abdominal pain", "Loss of appetite", "Jaundice", "Dark urine"],
    dosha_involved: "Pitta",
    description: "Viral liver infection caused by Pitta aggravation from contaminated food/water.",
    causes: ["Hepatitis A virus", "Contaminated food", "Contaminated water", "Close contact"],
    recommended_medicines: ["med-453", "med-454", "med-455"],
    home_remedies: ["remedy-453", "remedy-454", "remedy-455"],
    diet_tips: {
      foods_to_eat: ["Light easily digestible foods", "Papaya", "Coconut water", "Bitter herbs"],
      foods_to_avoid: ["Alcohol", "Fatty foods", "Processed foods", "Heavy meals"]
    },
    yoga_postures: ["Rest", "Gentle recovery", "Pranayama", "Avoid strenuous activity"],
    category: "Hepatic"
  },
  {
    id: "hepatitis-b",
    name: "Hepatitis B (Yakrit Shotha B)",
    hindi_name: "हेपेटाइटिस बी",
    symptoms: ["Fatigue", "Abdominal pain", "Joint pain", "Jaundice", "Dark urine", "Loss of appetite"],
    dosha_involved: "Pitta",
    description: "Viral liver infection caused by Pitta affecting liver through blood contact.",
    causes: ["Hepatitis B virus", "Blood contact", "Sexual contact", "Mother to child", "Needles"],
    recommended_medicines: ["med-456", "med-457", "med-458"],
    home_remedies: ["remedy-456", "remedy-457", "remedy-458"],
    diet_tips: {
      foods_to_eat: ["Liver-protective foods", "Turmeric", "Amla", "Bitter vegetables", "Light foods"],
      foods_to_avoid: ["Alcohol", "Fatty foods", "Processed foods", "Raw shellfish"]
    },
    yoga_postures: ["Gentle yoga", "Pranayama", "Stress reduction", "Regular monitoring"],
    category: "Hepatic"
  },
  {
    id: "hepatitis-c",
    name: "Hepatitis C (Yakrit Shotha C)",
    hindi_name: "हेपेटाइटिस सी",
    symptoms: ["Often asymptomatic", "Fatigue", "Fever", "Muscle aches", "Jaundice", "Dark urine"],
    dosha_involved: "Pitta",
    description: "Chronic viral liver infection caused by Pitta through blood contact.",
    causes: ["Hepatitis C virus", "Blood transfusion", "Needle sharing", "Healthcare exposure"],
    recommended_medicines: ["med-459", "med-460", "med-461"],
    home_remedies: ["remedy-459", "remedy-460", "remedy-461"],
    diet_tips: {
      foods_to_eat: ["Liver-supportive foods", "Turmeric", "Milk thistle", "Vegetables", "Whole grains"],
      foods_to_avoid: ["Alcohol", "Fatty foods", "Iron supplements", "Raw shellfish"]
    },
    yoga_postures: ["Gentle yoga", "Pranayama", "Stress management", "Regular treatment"],
    category: "Hepatic"
  },
  {
    id: "celiac-disease",
    name: "Celiac Disease (Grahani)",
    hindi_name: "सीलिएक रोग",
    symptoms: ["Diarrhea", "Bloating", "Weight loss", "Fatigue", "Anemia", "Skin rash"],
    dosha_involved: "Vata-Pitta",
    description: "Autoimmune gluten intolerance caused by Vata-Pitta affecting intestinal lining.",
    causes: ["Gluten consumption", "Genetics", "Autoimmune response", "Environmental triggers"],
    recommended_medicines: ["med-462", "med-463", "med-464"],
    home_remedies: ["remedy-462", "remedy-463", "remedy-464"],
    diet_tips: {
      foods_to_eat: ["Gluten-free grains", "Rice", "Quinoa", "Fruits", "Vegetables", "Protein"],
      foods_to_avoid: ["Wheat", "Barley", "Rye", "Cross-contaminated foods", "Most breads"]
    },
    yoga_postures: ["Digestive yoga", "Pranayama", "Stress reduction", "Gentle practices"],
    category: "Digestive"
  },
  {
    id: "lactose-intolerance",
    name: "Lactose Intolerance (Dugdha Asahishnuta)",
    hindi_name: "लैक्टोज असहिष्णुता",
    symptoms: ["Bloating", "Diarrhea", "Gas", "Abdominal cramps", "Nausea", "Rumbling stomach"],
    dosha_involved: "Vata",
    description: "Inability to digest lactose caused by Vata affecting digestive enzymes.",
    causes: ["Lactase deficiency", "Genetics", "Aging", "Intestinal diseases", "Injury"],
    recommended_medicines: ["med-465", "med-466", "med-467"],
    home_remedies: ["remedy-465", "remedy-466", "remedy-467"],
    diet_tips: {
      foods_to_eat: ["Lactose-free dairy", "Plant milks", "Hard cheeses", "Yogurt", "Calcium foods"],
      foods_to_avoid: ["Milk", "Ice cream", "Soft cheeses", "Cream", "Hidden lactose foods"]
    },
    yoga_postures: ["Digestive poses", "Pawanmuktasana", "Pranayama", "Vajrasana"],
    category: "Digestive"
  },
  {
    id: "food-allergies",
    name: "Food Allergies (Ahara Pratyurjata)",
    hindi_name: "खाद्य एलर्जी",
    symptoms: ["Hives", "Swelling", "Itching", "Breathing difficulty", "Nausea", "Anaphylaxis"],
    dosha_involved: "Pitta",
    description: "Immune reaction to food caused by Pitta inflammatory response.",
    causes: ["Immune system reaction", "Genetics", "Common allergens", "Cross-reactivity"],
    recommended_medicines: ["med-468", "med-469", "med-470"],
    home_remedies: ["remedy-468", "remedy-469", "remedy-470"],
    diet_tips: {
      foods_to_eat: ["Non-allergenic foods", "Fresh fruits", "Vegetables", "Safe proteins"],
      foods_to_avoid: ["Trigger foods", "Nuts (if allergic)", "Shellfish", "Dairy", "Eggs", "Wheat"]
    },
    yoga_postures: ["Immune-balancing yoga", "Pranayama", "Stress reduction", "Allergen avoidance"],
    category: "Digestive"
  },
  {
    id: "diverticulitis",
    name: "Diverticulitis (Antra Granthi)",
    hindi_name: "डायवर्टीकुलाइटिस",
    symptoms: ["Abdominal pain", "Fever", "Nausea", "Constipation", "Diarrhea", "Bloating"],
    dosha_involved: "Vata-Pitta",
    description: "Inflamed intestinal pouches caused by Vata with Pitta inflammation.",
    causes: ["Low fiber diet", "Aging", "Obesity", "Lack of exercise", "Smoking", "Medications"],
    recommended_medicines: ["med-471", "med-472", "med-473"],
    home_remedies: ["remedy-471", "remedy-472", "remedy-473"],
    diet_tips: {
      foods_to_eat: ["High fiber (after acute phase)", "Fluids", "Probiotics", "Whole grains"],
      foods_to_avoid: ["Low fiber during flare", "Nuts (debated)", "Seeds", "Popcorn"]
    },
    yoga_postures: ["Gentle abdominal work", "Pranayama", "Walking", "Stress reduction"],
    category: "Digestive"
  },
  {
    id: "gastric-cancer",
    name: "Gastric Cancer (Amashaya Arbuda)",
    hindi_name: "पेट का कैंसर",
    symptoms: ["Indigestion", "Stomach pain", "Nausea", "Weight loss", "Blood in stool", "Loss of appetite"],
    dosha_involved: "Kapha-Pitta",
    description: "Stomach cancer caused by Kapha growth with Pitta inflammation.",
    causes: ["H. pylori", "Diet", "Smoking", "Genetics", "Obesity", "Pickled foods"],
    recommended_medicines: ["med-474", "med-475", "med-476"],
    home_remedies: ["remedy-474", "remedy-475", "remedy-476"],
    diet_tips: {
      foods_to_eat: ["Small frequent meals", "Easily digestible foods", "Antioxidants", "Protein"],
      foods_to_avoid: ["Processed meats", "Smoked foods", "Pickled foods", "Alcohol", "Spicy foods"]
    },
    yoga_postures: ["Gentle supportive yoga", "Pranayama", "Meditation", "Medical treatment primary"],
    category: "Digestive"
  },
  {
    id: "colon-cancer",
    name: "Colon Cancer (Pakvashaya Arbuda)",
    hindi_name: "कोलन कैंसर",
    symptoms: ["Blood in stool", "Change in bowel habits", "Abdominal pain", "Weight loss", "Fatigue", "Narrow stools"],
    dosha_involved: "Kapha",
    description: "Colon cancer caused by Kapha abnormal cell growth in large intestine.",
    causes: ["Age", "Diet", "Inflammatory bowel disease", "Genetics", "Polyps", "Obesity"],
    recommended_medicines: ["med-477", "med-478", "med-479"],
    home_remedies: ["remedy-477", "remedy-478", "remedy-479"],
    diet_tips: {
      foods_to_eat: ["High fiber", "Fruits", "Vegetables", "Whole grains", "Lean protein"],
      foods_to_avoid: ["Processed meats", "Red meat", "Alcohol", "Refined grains", "Sugar"]
    },
    yoga_postures: ["Supportive yoga", "Pranayama", "Walking", "Medical treatment primary"],
    category: "Digestive"
  },
  {
    id: "breast-cancer",
    name: "Breast Cancer (Stana Arbuda)",
    hindi_name: "स्तन कैंसर",
    symptoms: ["Breast lump", "Nipple discharge", "Skin changes", "Nipple changes", "Breast pain", "Swelling"],
    dosha_involved: "Kapha",
    description: "Breast cancer caused by Kapha abnormal tissue growth in breast.",
    causes: ["Genetics", "Age", "Hormones", "Obesity", "Alcohol", "Radiation exposure"],
    recommended_medicines: ["med-480", "med-481", "med-482"],
    home_remedies: ["remedy-480", "remedy-481", "remedy-482"],
    diet_tips: {
      foods_to_eat: ["Cruciferous vegetables", "Berries", "Fiber", "Turmeric", "Green tea"],
      foods_to_avoid: ["Alcohol", "Processed foods", "High-fat dairy", "Red meat", "Sugar"]
    },
    yoga_postures: ["Supportive yoga", "Pranayama", "Meditation", "Gentle movement"],
    category: "Gynecological"
  },
  {
    id: "prostate-cancer",
    name: "Prostate Cancer (Purushagrantha Arbuda)",
    hindi_name: "प्रोस्टेट कैंसर",
    symptoms: ["Urinary problems", "Blood in urine", "Erectile dysfunction", "Bone pain", "Weight loss"],
    dosha_involved: "Kapha",
    description: "Prostate cancer caused by Kapha abnormal growth in prostate gland.",
    causes: ["Age", "Genetics", "Race", "Diet", "Obesity", "Hormones"],
    recommended_medicines: ["med-483", "med-484", "med-485"],
    home_remedies: ["remedy-483", "remedy-484", "remedy-485"],
    diet_tips: {
      foods_to_eat: ["Tomatoes", "Cruciferous vegetables", "Green tea", "Omega-3 foods", "Pomegranate"],
      foods_to_avoid: ["Red meat", "Dairy", "High-fat foods", "Processed foods", "Calcium excess"]
    },
    yoga_postures: ["Pelvic exercises", "Pranayama", "Walking", "Stress reduction"],
    category: "Urological"
  },
  {
    id: "lung-cancer",
    name: "Lung Cancer (Phupphusa Arbuda)",
    hindi_name: "फेफड़ों का कैंसर",
    symptoms: ["Persistent cough", "Coughing blood", "Chest pain", "Hoarseness", "Weight loss", "Shortness of breath"],
    dosha_involved: "Kapha",
    description: "Lung cancer caused by Kapha abnormal growth in lung tissue.",
    causes: ["Smoking", "Secondhand smoke", "Radon", "Asbestos", "Air pollution", "Genetics"],
    recommended_medicines: ["med-486", "med-487", "med-488"],
    home_remedies: ["remedy-486", "remedy-487", "remedy-488"],
    diet_tips: {
      foods_to_eat: ["Antioxidant foods", "Vegetables", "Fruits", "Protein", "Turmeric"],
      foods_to_avoid: ["Smoking", "Processed foods", "Red meat", "Alcohol", "Fried foods"]
    },
    yoga_postures: ["Breathing exercises", "Pranayama", "Gentle yoga", "Medical treatment primary"],
    category: "Respiratory"
  },
  {
    id: "skin-cancer",
    name: "Skin Cancer (Tvak Arbuda)",
    hindi_name: "त्वचा कैंसर",
    symptoms: ["New growths", "Changing moles", "Non-healing sores", "Irregular borders", "Color changes"],
    dosha_involved: "Pitta",
    description: "Skin cancer caused by Pitta heat and UV damage to skin cells.",
    causes: ["UV exposure", "Fair skin", "Moles", "Sunburns", "Family history", "Weak immunity"],
    recommended_medicines: ["med-489", "med-490", "med-491"],
    home_remedies: ["remedy-489", "remedy-490", "remedy-491"],
    diet_tips: {
      foods_to_eat: ["Antioxidants", "Vitamin C foods", "Leafy greens", "Turmeric", "Green tea"],
      foods_to_avoid: ["Excess sun", "Processed foods", "Sugar", "Alcohol", "Trans fats"]
    },
    yoga_postures: ["Sun protection", "Gentle yoga", "Stress reduction", "Regular skin checks"],
    category: "Dermatological"
  },
  {
    id: "brain-tumor",
    name: "Brain Tumor (Mastishka Arbuda)",
    hindi_name: "ब्रेन ट्यूमर",
    symptoms: ["Headaches", "Seizures", "Vision changes", "Confusion", "Personality changes", "Nausea"],
    dosha_involved: "Kapha",
    description: "Brain mass caused by Kapha abnormal tissue growth in brain.",
    causes: ["Genetics", "Radiation exposure", "Immune disorders", "Age", "Unknown factors"],
    recommended_medicines: ["med-492", "med-493", "med-494"],
    home_remedies: ["remedy-492", "remedy-493", "remedy-494"],
    diet_tips: {
      foods_to_eat: ["Antioxidant foods", "Omega-3 foods", "Turmeric", "Berries", "Green leafy vegetables"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Trans fats", "Artificial additives"]
    },
    yoga_postures: ["Gentle supportive yoga", "Meditation", "Pranayama", "Medical treatment primary"],
    category: "Neurological"
  },
  {
    id: "bone-cancer",
    name: "Bone Cancer (Asthi Arbuda)",
    hindi_name: "हड्डी का कैंसर",
    symptoms: ["Bone pain", "Swelling", "Fractures", "Fatigue", "Weight loss", "Limited movement"],
    dosha_involved: "Vata-Kapha",
    description: "Bone tumor caused by Vata affecting bones with Kapha abnormal growth.",
    causes: ["Genetics", "Previous radiation", "Paget's disease", "Unknown factors"],
    recommended_medicines: ["med-495", "med-496", "med-497"],
    home_remedies: ["remedy-495", "remedy-496", "remedy-497"],
    diet_tips: {
      foods_to_eat: ["Calcium foods", "Vitamin D", "Protein", "Antioxidants", "Bone-strengthening foods"],
      foods_to_avoid: ["Alcohol", "Caffeine excess", "Processed foods", "Sugar"]
    },
    yoga_postures: ["Gentle movement", "Pain management", "Pranayama", "Medical treatment primary"],
    category: "Musculoskeletal"
  },
  {
    id: "kidney-cancer",
    name: "Kidney Cancer (Vrikka Arbuda)",
    hindi_name: "किडनी कैंसर",
    symptoms: ["Blood in urine", "Back pain", "Lump in side", "Weight loss", "Fatigue", "Fever"],
    dosha_involved: "Kapha",
    description: "Kidney tumor caused by Kapha abnormal growth in kidney tissue.",
    causes: ["Smoking", "Obesity", "High blood pressure", "Genetics", "Dialysis", "Toxin exposure"],
    recommended_medicines: ["med-498", "med-499", "med-500"],
    home_remedies: ["remedy-498", "remedy-499", "remedy-500"],
    diet_tips: {
      foods_to_eat: ["Low sodium", "Fruits", "Vegetables", "Lean protein", "Hydration"],
      foods_to_avoid: ["Salt", "Processed foods", "Red meat", "Alcohol", "Smoking"]
    },
    yoga_postures: ["Gentle yoga", "Pranayama", "Stress reduction", "Medical treatment primary"],
    category: "Urological"
  },
  {
    id: "pancreatic-cancer",
    name: "Pancreatic Cancer (Agnashaya Arbuda)",
    hindi_name: "अग्नाशय कैंसर",
    symptoms: ["Abdominal pain", "Weight loss", "Jaundice", "Loss of appetite", "New diabetes", "Blood clots"],
    dosha_involved: "Pitta-Kapha",
    description: "Pancreatic tumor caused by Pitta affecting pancreas with Kapha growth.",
    causes: ["Smoking", "Obesity", "Diabetes", "Chronic pancreatitis", "Genetics", "Age"],
    recommended_medicines: ["med-501", "med-502", "med-503"],
    home_remedies: ["remedy-501", "remedy-502", "remedy-503"],
    diet_tips: {
      foods_to_eat: ["Small frequent meals", "Easily digestible foods", "Pancreatic enzymes", "Protein"],
      foods_to_avoid: ["Fatty foods", "Large meals", "Alcohol", "Smoking", "Processed foods"]
    },
    yoga_postures: ["Gentle supportive yoga", "Rest", "Pranayama", "Medical treatment primary"],
    category: "Digestive"
  },
  {
    id: "ovarian-cancer",
    name: "Ovarian Cancer (Andashaya Arbuda)",
    hindi_name: "अंडाशय कैंसर",
    symptoms: ["Bloating", "Pelvic pain", "Difficulty eating", "Urinary symptoms", "Fatigue", "Back pain"],
    dosha_involved: "Kapha",
    description: "Ovarian tumor caused by Kapha abnormal growth in ovaries.",
    causes: ["Age", "Genetics", "BRCA mutations", "Endometriosis", "Hormone therapy", "Obesity"],
    recommended_medicines: ["med-504", "med-505", "med-506"],
    home_remedies: ["remedy-504", "remedy-505", "remedy-506"],
    diet_tips: {
      foods_to_eat: ["Cruciferous vegetables", "Berries", "Green tea", "Omega-3 foods", "Fiber"],
      foods_to_avoid: ["High-fat dairy", "Red meat", "Processed foods", "Sugar", "Alcohol"]
    },
    yoga_postures: ["Gentle yoga", "Pranayama", "Meditation", "Supportive care"],
    category: "Gynecological"
  },
  {
    id: "cervical-cancer",
    name: "Cervical Cancer (Garbhashaya Mukha Arbuda)",
    hindi_name: "सर्वाइकल कैंसर",
    symptoms: ["Abnormal bleeding", "Pelvic pain", "Pain during intercourse", "Unusual discharge", "Post-menopausal bleeding"],
    dosha_involved: "Kapha-Pitta",
    description: "Cervical tumor caused by Kapha growth with Pitta inflammation.",
    causes: ["HPV infection", "Smoking", "Weak immunity", "Multiple partners", "Early sexual activity", "Oral contraceptives"],
    recommended_medicines: ["med-507", "med-508", "med-509"],
    home_remedies: ["remedy-507", "remedy-508", "remedy-509"],
    diet_tips: {
      foods_to_eat: ["Antioxidant foods", "Folic acid foods", "Vitamin C foods", "Cruciferous vegetables"],
      foods_to_avoid: ["Processed foods", "Red meat", "Sugar", "Alcohol", "Smoking"]
    },
    yoga_postures: ["Pelvic floor exercises", "Pranayama", "Gentle yoga", "Screening important"],
    category: "Gynecological"
  },
  {
    id: "thyroid-cancer",
    name: "Thyroid Cancer (Galaganda Arbuda)",
    hindi_name: "थायराइड कैंसर",
    symptoms: ["Neck lump", "Swallowing difficulty", "Voice changes", "Neck pain", "Swollen lymph nodes"],
    dosha_involved: "Kapha",
    description: "Thyroid tumor caused by Kapha abnormal growth in thyroid gland.",
    causes: ["Radiation exposure", "Genetics", "Iodine deficiency", "Gender", "Age"],
    recommended_medicines: ["med-510", "med-511", "med-512"],
    home_remedies: ["remedy-510", "remedy-511", "remedy-512"],
    diet_tips: {
      foods_to_eat: ["Iodine-balanced diet", "Selenium foods", "Antioxidants", "Vegetables"],
      foods_to_avoid: ["Excess iodine", "Processed foods", "Soy", "Goitrogens (raw)"]
    },
    yoga_postures: ["Neck exercises", "Pranayama", "Meditation", "Regular monitoring"],
    category: "Endocrine"
  },
  {
    id: "liver-cancer",
    name: "Liver Cancer (Yakrit Arbuda)",
    hindi_name: "लिवर कैंसर",
    symptoms: ["Abdominal pain", "Weight loss", "Jaundice", "Fatigue", "Nausea", "Enlarged liver"],
    dosha_involved: "Pitta-Kapha",
    description: "Liver tumor caused by Pitta affecting liver with Kapha growth.",
    causes: ["Hepatitis B/C", "Cirrhosis", "Alcohol", "Fatty liver", "Aflatoxins", "Diabetes"],
    recommended_medicines: ["med-513", "med-514", "med-515"],
    home_remedies: ["remedy-513", "remedy-514", "remedy-515"],
    diet_tips: {
      foods_to_eat: ["Liver-protective foods", "Turmeric", "Green vegetables", "Lean protein"],
      foods_to_avoid: ["Alcohol", "Fatty foods", "Processed foods", "Salt", "Sugar"]
    },
    yoga_postures: ["Gentle yoga", "Pranayama", "Rest", "Medical treatment primary"],
    category: "Hepatic"
  },
  {
    id: "bladder-cancer",
    name: "Bladder Cancer (Mutrashaya Arbuda)",
    hindi_name: "मूत्राशय कैंसर",
    symptoms: ["Blood in urine", "Painful urination", "Frequent urination", "Back pain", "Pelvic pain"],
    dosha_involved: "Pitta-Kapha",
    description: "Bladder tumor caused by Pitta irritation with Kapha growth.",
    causes: ["Smoking", "Chemical exposure", "Chronic infections", "Age", "Gender", "Radiation"],
    recommended_medicines: ["med-516", "med-517", "med-518"],
    home_remedies: ["remedy-516", "remedy-517", "remedy-518"],
    diet_tips: {
      foods_to_eat: ["Hydration", "Fruits", "Vegetables", "Cruciferous vegetables", "Antioxidants"],
      foods_to_avoid: ["Smoking", "Artificial sweeteners", "Processed foods", "Red meat"]
    },
    yoga_postures: ["Pelvic exercises", "Pranayama", "Hydration", "Medical treatment primary"],
    category: "Urological"
  },
  {
    id: "esophageal-cancer",
    name: "Esophageal Cancer (Grasani Arbuda)",
    hindi_name: "अन्ननली कैंसर",
    symptoms: ["Swallowing difficulty", "Weight loss", "Chest pain", "Hoarseness", "Chronic cough", "Vomiting"],
    dosha_involved: "Pitta-Kapha",
    description: "Esophageal tumor caused by Pitta irritation with Kapha growth.",
    causes: ["GERD", "Barrett's esophagus", "Smoking", "Alcohol", "Obesity", "Hot beverages"],
    recommended_medicines: ["med-519", "med-520", "med-521"],
    home_remedies: ["remedy-519", "remedy-520", "remedy-521"],
    diet_tips: {
      foods_to_eat: ["Soft foods", "Small frequent meals", "Protein shakes", "Easily digestible"],
      foods_to_avoid: ["Hot beverages", "Alcohol", "Smoking", "Spicy foods", "Acidic foods"]
    },
    yoga_postures: ["Gentle yoga", "Swallowing exercises", "Rest", "Medical treatment primary"],
    category: "Digestive"
  },
  {
    id: "mouth-cancer",
    name: "Mouth Cancer (Mukha Arbuda)",
    hindi_name: "मुंह का कैंसर",
    symptoms: ["Non-healing sore", "White/red patches", "Lump", "Loose teeth", "Difficulty chewing", "Numbness"],
    dosha_involved: "Pitta-Kapha",
    description: "Oral cancer caused by Pitta heat with Kapha abnormal growth.",
    causes: ["Tobacco", "Alcohol", "HPV", "Sun exposure (lips)", "Poor oral hygiene", "Betel nut"],
    recommended_medicines: ["med-522", "med-523", "med-524"],
    home_remedies: ["remedy-522", "remedy-523", "remedy-524"],
    diet_tips: {
      foods_to_eat: ["Soft foods", "Turmeric", "Green tea", "Antioxidant foods", "Vitamin C"],
      foods_to_avoid: ["Tobacco", "Alcohol", "Betel nut", "Spicy foods", "Hot foods"]
    },
    yoga_postures: ["Oral exercises", "Pranayama", "Stress reduction", "Tobacco cessation"],
    category: "Digestive"
  },
  {
    id: "laryngeal-cancer",
    name: "Laryngeal Cancer (Kantha Arbuda)",
    hindi_name: "गले का कैंसर",
    symptoms: ["Hoarseness", "Sore throat", "Difficulty swallowing", "Ear pain", "Lump in neck", "Cough"],
    dosha_involved: "Kapha",
    description: "Larynx cancer caused by Kapha abnormal growth in voice box.",
    causes: ["Smoking", "Alcohol", "HPV", "GERD", "Asbestos exposure", "Poor diet"],
    recommended_medicines: ["med-525", "med-526", "med-527"],
    home_remedies: ["remedy-525", "remedy-526", "remedy-527"],
    diet_tips: {
      foods_to_eat: ["Soft foods", "Turmeric", "Ginger", "Antioxidants", "Protein"],
      foods_to_avoid: ["Smoking", "Alcohol", "Spicy foods", "Acidic foods", "Hot foods"]
    },
    yoga_postures: ["Voice rest", "Gentle breathing", "Stress reduction", "Medical treatment primary"],
    category: "Respiratory"
  },
  {
    id: "mesothelioma",
    name: "Mesothelioma (Phupphusavarana Arbuda)",
    hindi_name: "मेसोथेलियोमा",
    symptoms: ["Chest pain", "Shortness of breath", "Cough", "Weight loss", "Fatigue", "Fluid buildup"],
    dosha_involved: "Kapha",
    description: "Cancer of organ lining caused by Kapha growth from asbestos exposure.",
    causes: ["Asbestos exposure", "Occupational exposure", "Environmental exposure", "Radiation"],
    recommended_medicines: ["med-528", "med-529", "med-530"],
    home_remedies: ["remedy-528", "remedy-529", "remedy-530"],
    diet_tips: {
      foods_to_eat: ["High calorie", "Protein", "Antioxidants", "Easy to eat foods"],
      foods_to_avoid: ["Asbestos avoidance", "Processed foods", "Sugar", "Alcohol"]
    },
    yoga_postures: ["Breathing exercises", "Gentle yoga", "Rest", "Medical treatment primary"],
    category: "Respiratory"
  },
  {
    id: "melanoma",
    name: "Melanoma (Tvak Krishnarbuda)",
    hindi_name: "मेलानोमा",
    symptoms: ["Changing moles", "Asymmetric lesions", "Irregular borders", "Color variation", "Diameter growth", "Evolution"],
    dosha_involved: "Pitta",
    description: "Serious skin cancer caused by Pitta affecting melanocytes.",
    causes: ["UV exposure", "Fair skin", "Many moles", "Family history", "Sunburns", "Weak immunity"],
    recommended_medicines: ["med-531", "med-532", "med-533"],
    home_remedies: ["remedy-531", "remedy-532", "remedy-533"],
    diet_tips: {
      foods_to_eat: ["Antioxidants", "Vitamin D", "Omega-3 foods", "Turmeric", "Green tea"],
      foods_to_avoid: ["Excess sun", "Alcohol", "Processed foods", "Sugar"]
    },
    yoga_postures: ["Sun protection", "Stress reduction", "Gentle yoga", "Regular skin checks"],
    category: "Dermatological"
  },
  {
    id: "carpal-tunnel-syndrome",
    name: "Carpal Tunnel Syndrome (Manyastambha)",
    hindi_name: "कार्पल टनल सिंड्रोम",
    symptoms: ["Hand numbness", "Tingling fingers", "Weakness", "Pain", "Dropping objects", "Night symptoms"],
    dosha_involved: "Vata",
    description: "Nerve compression in wrist caused by Vata affecting median nerve.",
    causes: ["Repetitive motion", "Computer work", "Pregnancy", "Diabetes", "Thyroid issues", "Arthritis"],
    recommended_medicines: ["med-534", "med-535", "med-536"],
    home_remedies: ["remedy-534", "remedy-535", "remedy-536"],
    diet_tips: {
      foods_to_eat: ["Vitamin B6 foods", "Turmeric", "Ginger", "Anti-inflammatory foods", "Flaxseeds"],
      foods_to_avoid: ["Salt", "Processed foods", "Sugar", "Caffeine", "Alcohol"]
    },
    yoga_postures: ["Wrist stretches", "Hand exercises", "Breaks from repetitive work", "Relaxation"],
    category: "Musculoskeletal"
  },
  {
    id: "rotator-cuff-injury",
    name: "Rotator Cuff Injury (Amsa Sandhivata)",
    hindi_name: "रोटेटर कफ चोट",
    symptoms: ["Shoulder pain", "Weakness", "Limited movement", "Night pain", "Crackling", "Stiffness"],
    dosha_involved: "Vata",
    description: "Shoulder tendon injury caused by Vata affecting rotator cuff muscles.",
    causes: ["Overuse", "Age", "Sports", "Falls", "Lifting", "Repetitive overhead motions"],
    recommended_medicines: ["med-537", "med-538", "med-539"],
    home_remedies: ["remedy-537", "remedy-538", "remedy-539"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Protein", "Vitamin C foods", "Collagen foods"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Inflammatory foods"]
    },
    yoga_postures: ["Shoulder stretches", "Gentle strengthening", "Range of motion exercises"],
    category: "Musculoskeletal"
  },
  {
    id: "bursitis",
    name: "Bursitis (Sandhishotha)",
    hindi_name: "बर्साइटिस",
    symptoms: ["Joint pain", "Swelling", "Stiffness", "Redness", "Warmth", "Limited movement"],
    dosha_involved: "Kapha-Pitta",
    description: "Bursa inflammation caused by Kapha fluid accumulation with Pitta inflammation.",
    causes: ["Repetitive motion", "Injury", "Age", "Arthritis", "Infection", "Gout"],
    recommended_medicines: ["med-540", "med-541", "med-542"],
    home_remedies: ["remedy-540", "remedy-541", "remedy-542"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Turmeric", "Ginger", "Omega-3 foods", "Vegetables"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Inflammatory foods"]
    },
    yoga_postures: ["Rest initially", "Gentle stretching", "Range of motion exercises", "Ice/heat"],
    category: "Musculoskeletal"
  },
  {
    id: "tendinitis",
    name: "Tendinitis (Snayu Shotha)",
    hindi_name: "टेंडिनाइटिस",
    symptoms: ["Pain at tendon site", "Tenderness", "Mild swelling", "Stiffness", "Weakness"],
    dosha_involved: "Vata-Pitta",
    description: "Tendon inflammation caused by Vata strain with Pitta inflammation.",
    causes: ["Overuse", "Repetitive motion", "Age", "Sports", "Poor posture", "Sudden increase in activity"],
    recommended_medicines: ["med-543", "med-544", "med-545"],
    home_remedies: ["remedy-543", "remedy-544", "remedy-545"],
    diet_tips: {
      foods_to_eat: ["Protein", "Vitamin C foods", "Collagen foods", "Anti-inflammatory foods"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Inflammatory foods"]
    },
    yoga_postures: ["Rest", "Gentle stretching", "Eccentric exercises", "Gradual return to activity"],
    category: "Musculoskeletal"
  },
  {
    id: "sprains-strains",
    name: "Sprains and Strains (Mamsakshepa)",
    hindi_name: "मोच",
    symptoms: ["Pain", "Swelling", "Bruising", "Limited movement", "Popping sensation", "Muscle spasms"],
    dosha_involved: "Vata",
    description: "Ligament or muscle injury caused by Vata trauma to soft tissues.",
    causes: ["Injury", "Falls", "Sports", "Overuse", "Improper lifting", "Fatigue"],
    recommended_medicines: ["med-546", "med-547", "med-548"],
    home_remedies: ["remedy-546", "remedy-547", "remedy-548"],
    diet_tips: {
      foods_to_eat: ["Protein", "Vitamin C foods", "Anti-inflammatory foods", "Calcium foods"],
      foods_to_avoid: ["Alcohol", "Processed foods", "Sugar", "Inflammatory foods"]
    },
    yoga_postures: ["RICE initially", "Gentle stretching after acute phase", "Gradual strengthening"],
    category: "Musculoskeletal"
  },
  {
    id: "whiplash",
    name: "Whiplash (Greeva Abhighata)",
    hindi_name: "व्हिपलैश",
    symptoms: ["Neck pain", "Stiffness", "Headaches", "Shoulder pain", "Dizziness", "Fatigue"],
    dosha_involved: "Vata",
    description: "Neck injury from rapid back-and-forth movement caused by Vata trauma.",
    causes: ["Car accidents", "Sports injuries", "Falls", "Physical abuse", "Amusement rides"],
    recommended_medicines: ["med-549", "med-550", "med-551"],
    home_remedies: ["remedy-549", "remedy-550", "remedy-551"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Protein", "Magnesium foods", "Omega-3 foods"],
      foods_to_avoid: ["Caffeine", "Alcohol", "Processed foods", "Sugar"]
    },
    yoga_postures: ["Gentle neck movements", "Rest initially", "Gradual mobilization", "Heat therapy"],
    category: "Musculoskeletal"
  },
  {
    id: "herniated-disc",
    name: "Herniated Disc (Kati Sandhi Vikara)",
    hindi_name: "हर्नियेटेड डिस्क",
    symptoms: ["Back pain", "Leg pain", "Numbness", "Tingling", "Weakness", "Sciatica"],
    dosha_involved: "Vata",
    description: "Spinal disc protrusion caused by Vata affecting disc integrity.",
    causes: ["Age", "Heavy lifting", "Repetitive strain", "Obesity", "Genetics", "Trauma"],
    recommended_medicines: ["med-552", "med-553", "med-554"],
    home_remedies: ["remedy-552", "remedy-553", "remedy-554"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Calcium foods", "Vitamin D foods", "Protein"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Inflammatory foods"]
    },
    yoga_postures: ["Gentle stretching", "Core strengthening", "McKenzie exercises", "Avoid bending"],
    category: "Musculoskeletal"
  },
  {
    id: "spinal-stenosis",
    name: "Spinal Stenosis (Sushumna Sankocha)",
    hindi_name: "स्पाइनल स्टेनोसिस",
    symptoms: ["Back pain", "Leg weakness", "Numbness", "Cramping", "Balance problems", "Pain with walking"],
    dosha_involved: "Vata-Kapha",
    description: "Spinal canal narrowing caused by Vata degeneration with Kapha bone growth.",
    causes: ["Aging", "Arthritis", "Herniated discs", "Thickened ligaments", "Tumors", "Injury"],
    recommended_medicines: ["med-555", "med-556", "med-557"],
    home_remedies: ["remedy-555", "remedy-556", "remedy-557"],
    diet_tips: {
      foods_to_eat: ["Anti-inflammatory foods", "Calcium foods", "Vitamin D foods", "Omega-3 foods"],
      foods_to_avoid: ["Processed foods", "Sugar", "Alcohol", "Inflammatory foods"]
    },
    yoga_postures: ["Flexion exercises", "Walking", "Swimming", "Avoid extension"],
    category: "Musculoskeletal"
  }
];

export const diseaseCategories = [
  "Metabolic Disorders",
  "Cardiovascular",
  "Musculoskeletal",
  "Digestive",
  "Respiratory",
  "Neurological",
  "Mental Health",
  "Dermatological",
  "Endocrine",
  "Urological",
  "Hepatic",
  "Gynecological",
  "Blood Disorders",
  "Infectious Diseases",
  "Cancer"
];
