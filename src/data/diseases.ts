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
  "Blood Disorders"
];
