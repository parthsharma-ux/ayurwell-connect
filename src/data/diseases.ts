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
