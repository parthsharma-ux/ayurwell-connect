export type RemedyRegion = 'india' | 'us' | 'uk' | 'global';

export interface Remedy {
  id: string;
  problem: string;
  title: string;
  ingredients: { name: string; quantity: string }[];
  method: string[];
  how_often: string;
  precautions: string[];
  benefits: string[];
  related_diseases: string[];
  difficulty: "Easy" | "Medium" | "Advanced";
  preparation_time: string;
  region?: RemedyRegion; // 'india' | 'us' | 'uk' | 'global' - defaults to 'india' for traditional remedies
}

// Helper to get remedy region (defaults to 'india' for traditional Ayurvedic remedies)
export const getRemedyRegion = (remedy: Remedy): RemedyRegion => {
  return remedy.region || 'india';
};

export const remedies: Remedy[] = [
  // Diabetes remedies
  {
    id: "remedy-1",
    problem: "Diabetes",
    title: "Fenugreek Seeds Water",
    ingredients: [
      { name: "Fenugreek seeds (Methi)", quantity: "2 tablespoons" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Soak fenugreek seeds in water overnight",
      "Strain the water in the morning",
      "Drink the water on empty stomach",
      "You can also chew the soaked seeds"
    ],
    how_often: "Daily in the morning on empty stomach",
    precautions: [
      "May cause stomach upset initially",
      "Pregnant women should consult doctor",
      "May interact with diabetes medications"
    ],
    benefits: [
      "Helps lower blood sugar levels",
      "Improves insulin sensitivity",
      "Rich in fiber and nutrients"
    ],
    related_diseases: ["diabetes", "obesity"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking"
  },
  {
    id: "remedy-2",
    problem: "Diabetes",
    title: "Bitter Gourd Juice",
    ingredients: [
      { name: "Bitter gourd (Karela)", quantity: "1 medium" },
      { name: "Water", quantity: "Half cup" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Wash and remove seeds from bitter gourd",
      "Cut into small pieces",
      "Blend with water",
      "Strain and add lemon juice",
      "Drink immediately"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "Very bitter taste",
      "Not recommended during pregnancy",
      "May cause hypoglycemia with medications"
    ],
    benefits: [
      "Contains plant insulin",
      "Lowers blood glucose naturally",
      "Improves pancreatic function"
    ],
    related_diseases: ["diabetes", "obesity", "skin-disorders"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-3",
    problem: "Diabetes",
    title: "Jamun Seeds Powder",
    ingredients: [
      { name: "Jamun seeds powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Collect seeds from ripe jamun fruits",
      "Dry in shade for 3-4 days",
      "Grind into fine powder",
      "Store in airtight container",
      "Take with warm water"
    ],
    how_often: "Twice daily before meals",
    precautions: [
      "May cause constipation",
      "Avoid on empty stomach if acidity prone"
    ],
    benefits: [
      "Controls blood sugar spikes",
      "Improves insulin production",
      "Reduces diabetes symptoms"
    ],
    related_diseases: ["diabetes"],
    difficulty: "Medium",
    preparation_time: "3-4 days for preparation"
  },
  // Hypertension remedies
  {
    id: "remedy-4",
    problem: "Hypertension",
    title: "Garlic Honey Mixture",
    ingredients: [
      { name: "Raw garlic cloves", quantity: "2-3" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush garlic cloves to release allicin",
      "Wait for 10 minutes",
      "Mix with honey",
      "Consume on empty stomach"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "May cause bad breath",
      "Not suitable for those on blood thinners",
      "May cause stomach irritation"
    ],
    benefits: [
      "Natural blood pressure reducer",
      "Improves blood circulation",
      "Has anti-inflammatory properties"
    ],
    related_diseases: ["hypertension"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-5",
    problem: "Hypertension",
    title: "Hibiscus Tea",
    ingredients: [
      { name: "Dried hibiscus flowers", quantity: "2 teaspoons" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey (optional)", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil water",
      "Add dried hibiscus flowers",
      "Steep for 5-10 minutes",
      "Strain and add honey if desired",
      "Drink warm"
    ],
    how_often: "2-3 cups daily",
    precautions: [
      "May interact with blood pressure medications",
      "Avoid during pregnancy",
      "May lower blood pressure too much"
    ],
    benefits: [
      "Rich in antioxidants",
      "Natural ACE inhibitor",
      "Promotes relaxation"
    ],
    related_diseases: ["hypertension", "anxiety"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  // Arthritis remedies
  {
    id: "remedy-6",
    problem: "Arthritis",
    title: "Turmeric Golden Milk",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the milk (don't boil)",
      "Add turmeric powder",
      "Add a pinch of black pepper (increases absorption)",
      "Mix well and add honey",
      "Drink while warm"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "May stain teeth and clothes",
      "May cause stomach upset in high doses",
      "Not recommended before surgery"
    ],
    benefits: [
      "Powerful anti-inflammatory",
      "Reduces joint pain and stiffness",
      "Promotes better sleep"
    ],
    related_diseases: ["arthritis", "joint-pain", "insomnia"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-7",
    problem: "Arthritis",
    title: "Ginger Compress",
    ingredients: [
      { name: "Fresh ginger", quantity: "2 inches" },
      { name: "Water", quantity: "2 cups" },
      { name: "Clean cloth", quantity: "1" }
    ],
    method: [
      "Grate fresh ginger",
      "Boil in water for 10 minutes",
      "Let it cool slightly (should be warm, not hot)",
      "Soak cloth in the water",
      "Apply to affected joints for 15-20 minutes"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Test temperature before applying",
      "Avoid on open wounds",
      "May cause skin irritation in sensitive individuals"
    ],
    benefits: [
      "Improves blood circulation",
      "Reduces inflammation locally",
      "Provides warming relief"
    ],
    related_diseases: ["arthritis", "joint-pain"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-8",
    problem: "Arthritis",
    title: "Sesame Oil Massage",
    ingredients: [
      { name: "Sesame oil", quantity: "2-3 tablespoons" },
      { name: "Camphor (optional)", quantity: "Small piece" }
    ],
    method: [
      "Warm the sesame oil slightly",
      "Dissolve camphor in oil if using",
      "Massage gently on affected joints",
      "Use circular motions for 15-20 minutes",
      "Leave for 30 minutes, then wash off"
    ],
    how_often: "Daily before bath",
    precautions: [
      "Do patch test first",
      "Avoid if skin is broken",
      "Be careful on floors after application"
    ],
    benefits: [
      "Lubricates joints naturally",
      "Reduces Vata imbalance",
      "Improves joint mobility"
    ],
    related_diseases: ["arthritis", "joint-pain"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  // Acidity remedies
  {
    id: "remedy-9",
    problem: "Acidity",
    title: "Cold Milk",
    ingredients: [
      { name: "Cold milk", quantity: "1 glass" }
    ],
    method: [
      "Take cold milk from refrigerator",
      "Drink slowly without adding sugar",
      "Best consumed after meals"
    ],
    how_often: "As needed when experiencing acidity",
    precautions: [
      "Not suitable for lactose intolerant",
      "Avoid if you have congestion",
      "Don't add sugar or cocoa"
    ],
    benefits: [
      "Neutralizes stomach acid",
      "Provides instant relief",
      "Calcium helps strengthen stomach lining"
    ],
    related_diseases: ["acidity"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  {
    id: "remedy-10",
    problem: "Acidity",
    title: "Fennel Seeds Water",
    ingredients: [
      { name: "Fennel seeds (Saunf)", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Soak fennel seeds in water for 8-10 hours",
      "Strain the water",
      "Drink on empty stomach",
      "Can also chew seeds after meals"
    ],
    how_often: "After each meal or when needed",
    precautions: [
      "May cause allergic reaction in rare cases",
      "Pregnant women should use moderately"
    ],
    benefits: [
      "Cools the digestive system",
      "Reduces bloating and gas",
      "Freshens breath naturally"
    ],
    related_diseases: ["acidity", "constipation"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking"
  },
  {
    id: "remedy-11",
    problem: "Acidity",
    title: "Banana and Cardamom",
    ingredients: [
      { name: "Ripe banana", quantity: "1" },
      { name: "Cardamom powder", quantity: "A pinch" }
    ],
    method: [
      "Take a ripe banana (overripe is better)",
      "Mash or eat directly",
      "Sprinkle cardamom powder",
      "Eat slowly"
    ],
    how_often: "Once daily, preferably after lunch",
    precautions: [
      "Avoid unripe bananas",
      "Diabetics should monitor sugar intake"
    ],
    benefits: [
      "Natural antacid",
      "Forms protective coating in stomach",
      "Cardamom aids digestion"
    ],
    related_diseases: ["acidity"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // Constipation remedies
  {
    id: "remedy-12",
    problem: "Constipation",
    title: "Triphala Water",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Add triphala powder to warm water",
      "Mix well",
      "Let it sit for 5 minutes",
      "Drink before bedtime"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "May cause loose motion initially",
      "Avoid during pregnancy",
      "Reduce dose if diarrhea occurs"
    ],
    benefits: [
      "Natural laxative",
      "Detoxifies digestive system",
      "Improves digestion overall"
    ],
    related_diseases: ["constipation", "acidity", "obesity"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-13",
    problem: "Constipation",
    title: "Isabgol with Milk",
    ingredients: [
      { name: "Isabgol (Psyllium husk)", quantity: "2 teaspoons" },
      { name: "Warm milk", quantity: "1 glass" }
    ],
    method: [
      "Add isabgol to warm milk",
      "Stir quickly (it thickens fast)",
      "Drink immediately",
      "Follow with another glass of water"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "Drink plenty of water throughout day",
      "Take immediately after mixing",
      "May cause bloating initially"
    ],
    benefits: [
      "Adds bulk to stool",
      "Safe for daily use",
      "Also helps reduce cholesterol"
    ],
    related_diseases: ["constipation", "piles"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-14",
    problem: "Constipation",
    title: "Papaya and Honey",
    ingredients: [
      { name: "Ripe papaya", quantity: "1 cup diced" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Take ripe papaya cubes",
      "Add honey",
      "Eat as breakfast or snack"
    ],
    how_often: "Daily as part of breakfast",
    precautions: [
      "Avoid during pregnancy (raw papaya)",
      "Use only ripe papaya",
      "Diabetics should limit quantity"
    ],
    benefits: [
      "Contains papain enzyme",
      "Natural digestive aid",
      "Rich in fiber"
    ],
    related_diseases: ["constipation", "acidity"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Asthma remedies
  {
    id: "remedy-15",
    problem: "Asthma",
    title: "Ginger Honey Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Tulsi leaves", quantity: "5-6" }
    ],
    method: [
      "Grate fresh ginger",
      "Boil water with ginger and tulsi",
      "Simmer for 5 minutes",
      "Strain and add honey when warm",
      "Drink while warm"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Not a replacement for inhalers",
      "May cause acidity in some",
      "Avoid if allergic to any ingredient"
    ],
    benefits: [
      "Opens up airways",
      "Reduces inflammation",
      "Soothes respiratory tract"
    ],
    related_diseases: ["asthma", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-16",
    problem: "Asthma",
    title: "Turmeric Milk Steam",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 bowl" }
    ],
    method: [
      "Add turmeric to hot water",
      "Lean over the bowl",
      "Cover head with towel",
      "Inhale the steam for 10-15 minutes",
      "Keep eyes closed"
    ],
    how_often: "Once or twice daily during episodes",
    precautions: [
      "Be careful with hot water",
      "Don't go too close to water",
      "Stop if feeling dizzy"
    ],
    benefits: [
      "Clears respiratory passages",
      "Anti-inflammatory effect",
      "Loosens mucus"
    ],
    related_diseases: ["asthma", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-17",
    problem: "Asthma",
    title: "Black Pepper and Honey",
    ingredients: [
      { name: "Black pepper powder", quantity: "1/4 teaspoon" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1/4 cup" }
    ],
    method: [
      "Mix black pepper powder in honey",
      "Add warm water",
      "Mix well",
      "Consume slowly"
    ],
    how_often: "Twice daily, morning and evening",
    precautions: [
      "May cause burning sensation",
      "Not for children under 5",
      "Reduce amount if too pungent"
    ],
    benefits: [
      "Clears chest congestion",
      "Stimulates circulation",
      "Natural expectorant"
    ],
    related_diseases: ["asthma", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Migraine remedies
  {
    id: "remedy-18",
    problem: "Migraine",
    title: "Ginger Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush or grate ginger",
      "Boil in water for 5-7 minutes",
      "Strain",
      "Add honey",
      "Drink while warm"
    ],
    how_often: "At the onset of migraine and 2-3 times during episode",
    precautions: [
      "May cause heartburn",
      "Avoid if on blood thinners"
    ],
    benefits: [
      "Reduces nausea",
      "Has anti-inflammatory properties",
      "May reduce migraine severity"
    ],
    related_diseases: ["migraine", "acidity"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-19",
    problem: "Migraine",
    title: "Peppermint Oil Application",
    ingredients: [
      { name: "Peppermint essential oil", quantity: "2-3 drops" },
      { name: "Coconut oil", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix peppermint oil with coconut oil",
      "Apply on temples and forehead",
      "Massage gently in circular motion",
      "Rest in dark, quiet room"
    ],
    how_often: "As needed during migraine",
    precautions: [
      "Do patch test first",
      "Avoid contact with eyes",
      "Not for children under 6"
    ],
    benefits: [
      "Cooling sensation",
      "Relaxes tense muscles",
      "May reduce headache intensity"
    ],
    related_diseases: ["migraine"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-20",
    problem: "Migraine",
    title: "Cold Compress",
    ingredients: [
      { name: "Ice cubes", quantity: "5-6" },
      { name: "Clean cloth or towel", quantity: "1" }
    ],
    method: [
      "Wrap ice cubes in cloth",
      "Apply to forehead and temples",
      "Keep for 15-20 minutes",
      "Take breaks between applications"
    ],
    how_often: "Every few hours during migraine",
    precautions: [
      "Don't apply ice directly to skin",
      "Avoid if you have cold sensitivity"
    ],
    benefits: [
      "Numbs the pain",
      "Reduces inflammation",
      "Constricts blood vessels"
    ],
    related_diseases: ["migraine"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // Anxiety remedies
  {
    id: "remedy-24",
    problem: "Anxiety",
    title: "Ashwagandha Milk",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1/2 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the milk (don't boil)",
      "Add ashwagandha powder",
      "Mix well",
      "Add honey",
      "Drink before bedtime"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "May cause drowsiness",
      "Avoid during pregnancy",
      "Consult doctor if on medications"
    ],
    benefits: [
      "Adaptogenic - reduces stress hormones",
      "Promotes calmness",
      "Improves sleep quality"
    ],
    related_diseases: ["anxiety", "insomnia"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-25",
    problem: "Anxiety",
    title: "Brahmi Tea",
    ingredients: [
      { name: "Dried brahmi leaves", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil water",
      "Add brahmi leaves",
      "Steep for 10 minutes",
      "Strain",
      "Add honey and drink"
    ],
    how_often: "1-2 times daily",
    precautions: [
      "May cause drowsiness",
      "Start with small amounts"
    ],
    benefits: [
      "Calms the nervous system",
      "Improves concentration",
      "Reduces racing thoughts"
    ],
    related_diseases: ["anxiety", "insomnia", "migraine"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-26",
    problem: "Anxiety",
    title: "Deep Breathing with Essential Oils",
    ingredients: [
      { name: "Lavender essential oil", quantity: "2-3 drops" },
      { name: "Handkerchief or diffuser", quantity: "1" }
    ],
    method: [
      "Add lavender oil to handkerchief",
      "Hold near nose",
      "Practice deep breathing: inhale for 4 counts",
      "Hold for 4 counts",
      "Exhale for 6 counts",
      "Repeat 10 times"
    ],
    how_often: "As needed during anxious moments",
    precautions: [
      "Don't ingest essential oils",
      "Keep away from eyes",
      "Some may be allergic"
    ],
    benefits: [
      "Activates parasympathetic nervous system",
      "Lavender has calming properties",
      "Instant stress relief"
    ],
    related_diseases: ["anxiety", "insomnia"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // Skin disorder remedies
  {
    id: "remedy-27",
    problem: "Skin Disorders",
    title: "Neem Paste",
    ingredients: [
      { name: "Fresh neem leaves", quantity: "1 cup" },
      { name: "Turmeric powder", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "As needed" }
    ],
    method: [
      "Wash neem leaves thoroughly",
      "Grind to paste with little water",
      "Add turmeric powder",
      "Apply on affected areas",
      "Leave for 20-30 minutes",
      "Wash with lukewarm water"
    ],
    how_often: "Once daily",
    precautions: [
      "Do patch test first",
      "Avoid on open wounds",
      "May cause dryness"
    ],
    benefits: [
      "Antibacterial and antifungal",
      "Reduces itching",
      "Purifies skin"
    ],
    related_diseases: ["skin-disorders"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-28",
    problem: "Skin Disorders",
    title: "Aloe Vera Gel Application",
    ingredients: [
      { name: "Fresh aloe vera leaf", quantity: "1" }
    ],
    method: [
      "Cut aloe vera leaf",
      "Scoop out the gel",
      "Apply directly on affected skin",
      "Leave for 30 minutes",
      "Wash with cool water"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Use fresh gel only",
      "Some may be allergic - do patch test",
      "Avoid yellow sap near skin"
    ],
    benefits: [
      "Soothes irritated skin",
      "Promotes healing",
      "Natural moisturizer"
    ],
    related_diseases: ["skin-disorders", "hair-fall"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-29",
    problem: "Skin Disorders",
    title: "Turmeric Sandalwood Pack",
    ingredients: [
      { name: "Turmeric powder", quantity: "1/2 teaspoon" },
      { name: "Sandalwood powder", quantity: "1 teaspoon" },
      { name: "Rose water", quantity: "As needed" }
    ],
    method: [
      "Mix turmeric and sandalwood powder",
      "Add rose water to make paste",
      "Apply on face or affected areas",
      "Leave for 20 minutes",
      "Wash with cool water"
    ],
    how_often: "2-3 times weekly",
    precautions: [
      "Turmeric may stain skin temporarily",
      "Do patch test",
      "Avoid sun exposure immediately after"
    ],
    benefits: [
      "Anti-inflammatory",
      "Reduces blemishes",
      "Cooling effect"
    ],
    related_diseases: ["skin-disorders", "acidity"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Hair fall remedies
  {
    id: "remedy-30",
    problem: "Hair Fall",
    title: "Coconut Oil and Curry Leaves",
    ingredients: [
      { name: "Coconut oil", quantity: "100ml" },
      { name: "Fresh curry leaves", quantity: "1 handful" }
    ],
    method: [
      "Heat coconut oil on low flame",
      "Add curry leaves",
      "Heat until leaves turn black",
      "Cool and strain",
      "Apply to scalp and hair",
      "Leave overnight and wash next morning"
    ],
    how_often: "2-3 times weekly",
    precautions: [
      "Don't overheat oil",
      "Be careful while heating",
      "May make pillow oily"
    ],
    benefits: [
      "Strengthens hair roots",
      "Prevents premature graying",
      "Nourishes scalp"
    ],
    related_diseases: ["hair-fall"],
    difficulty: "Medium",
    preparation_time: "30 minutes"
  },
  {
    id: "remedy-31",
    problem: "Hair Fall",
    title: "Onion Juice Treatment",
    ingredients: [
      { name: "Onion", quantity: "1 medium" },
      { name: "Cotton ball", quantity: "1" }
    ],
    method: [
      "Grate or blend onion",
      "Extract juice",
      "Apply to scalp using cotton",
      "Massage gently",
      "Leave for 30-60 minutes",
      "Wash with mild shampoo"
    ],
    how_often: "2 times weekly",
    precautions: [
      "Strong smell - wash thoroughly",
      "May cause irritation in some",
      "Avoid on wounds"
    ],
    benefits: [
      "Rich in sulfur",
      "Improves blood circulation",
      "Promotes hair regrowth"
    ],
    related_diseases: ["hair-fall"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-32",
    problem: "Hair Fall",
    title: "Amla Hair Mask",
    ingredients: [
      { name: "Amla powder", quantity: "2 tablespoons" },
      { name: "Yogurt", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix amla powder with yogurt",
      "Add honey",
      "Make smooth paste",
      "Apply to scalp and hair",
      "Leave for 45 minutes",
      "Wash with mild shampoo"
    ],
    how_often: "Once weekly",
    precautions: [
      "May cause tangles - use conditioner after",
      "Avoid if allergic to dairy"
    ],
    benefits: [
      "Rich in Vitamin C",
      "Strengthens hair follicles",
      "Adds shine"
    ],
    related_diseases: ["hair-fall"],
    difficulty: "Easy",
    preparation_time: "50 minutes"
  },
  // Insomnia remedies
  {
    id: "remedy-33",
    problem: "Insomnia",
    title: "Warm Milk with Nutmeg",
    ingredients: [
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Nutmeg powder", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk (not too hot)",
      "Add a small pinch of nutmeg",
      "Add honey",
      "Drink 30 minutes before bed"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "Use only small amount of nutmeg",
      "Large amounts can be toxic",
      "Not for lactose intolerant"
    ],
    benefits: [
      "Natural sedative",
      "Promotes deep sleep",
      "Calms nervous system"
    ],
    related_diseases: ["insomnia", "anxiety"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-34",
    problem: "Insomnia",
    title: "Chamomile Tea",
    ingredients: [
      { name: "Dried chamomile flowers", quantity: "1 tablespoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add chamomile to hot water",
      "Steep for 5-10 minutes",
      "Strain",
      "Add honey",
      "Drink 30 minutes before bed"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "May cause allergic reaction in some",
      "Avoid if allergic to ragweed"
    ],
    benefits: [
      "Natural relaxant",
      "Reduces anxiety",
      "Mild sedative effect"
    ],
    related_diseases: ["insomnia", "anxiety"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-35",
    problem: "Insomnia",
    title: "Foot Massage with Sesame Oil",
    ingredients: [
      { name: "Sesame oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Warm sesame oil slightly",
      "Apply to soles of feet",
      "Massage for 10-15 minutes",
      "Focus on pressure points",
      "Wear socks and go to bed"
    ],
    how_often: "Daily before bed",
    precautions: [
      "Be careful walking after - may be slippery",
      "Wear old socks"
    ],
    benefits: [
      "Grounds Vata energy",
      "Promotes relaxation",
      "Improves circulation"
    ],
    related_diseases: ["insomnia", "anxiety"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  // Cold & Cough remedies
  {
    id: "remedy-36",
    problem: "Cold & Cough",
    title: "Tulsi Ginger Tea",
    ingredients: [
      { name: "Fresh tulsi leaves", quantity: "8-10" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Black pepper", quantity: "3-4" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil water with tulsi, ginger, and black pepper",
      "Simmer until reduced to 1 cup",
      "Strain",
      "Add honey when warm",
      "Drink while warm"
    ],
    how_often: "3-4 times daily during cold",
    precautions: [
      "May cause acidity in some",
      "Honey should not be added to boiling water"
    ],
    benefits: [
      "Boosts immunity",
      "Clears congestion",
      "Soothes throat"
    ],
    related_diseases: ["cold-cough", "asthma"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-37",
    problem: "Cold & Cough",
    title: "Turmeric Milk (Haldi Doodh)",
    ingredients: [
      { name: "Turmeric powder", quantity: "1/2 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Ghee", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Warm milk",
      "Add turmeric and black pepper",
      "Add ghee",
      "Mix well",
      "Drink before bedtime"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "May stain clothes",
      "Don't use excessive turmeric"
    ],
    benefits: [
      "Anti-inflammatory",
      "Boosts immunity",
      "Helps fight infection"
    ],
    related_diseases: ["cold-cough", "arthritis"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-38",
    problem: "Cold & Cough",
    title: "Steam Inhalation with Eucalyptus",
    ingredients: [
      { name: "Hot water", quantity: "1 bowl" },
      { name: "Eucalyptus oil", quantity: "3-4 drops" }
    ],
    method: [
      "Boil water and pour in bowl",
      "Add eucalyptus oil",
      "Cover head with towel",
      "Inhale steam for 10-15 minutes",
      "Keep eyes closed"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Be careful with hot water",
      "Don't go too close",
      "Not for small children"
    ],
    benefits: [
      "Opens nasal passages",
      "Relieves congestion",
      "Moisturizes airways"
    ],
    related_diseases: ["cold-cough", "asthma"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Additional remedies for other conditions
  {
    id: "remedy-39",
    problem: "Thyroid",
    title: "Coconut Oil Pulling",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "1 tablespoon" }
    ],
    method: [
      "Take coconut oil on empty stomach",
      "Swish in mouth for 15-20 minutes",
      "Don't swallow",
      "Spit out and rinse mouth",
      "Brush teeth normally"
    ],
    how_often: "Daily in the morning",
    precautions: [
      "Don't swallow the oil",
      "May cause jaw fatigue initially"
    ],
    benefits: [
      "Supports thyroid function",
      "Detoxifies",
      "Improves oral health"
    ],
    related_diseases: ["thyroid"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-40",
    problem: "Thyroid",
    title: "Ashwagandha Root Tea",
    ingredients: [
      { name: "Ashwagandha root powder", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil water",
      "Add ashwagandha powder",
      "Simmer for 10 minutes",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "Once daily",
    precautions: [
      "Consult doctor if on thyroid medication",
      "Avoid during pregnancy"
    ],
    benefits: [
      "Balances thyroid hormones",
      "Reduces stress",
      "Supports adrenal function"
    ],
    related_diseases: ["thyroid", "anxiety"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-42",
    problem: "Piles",
    title: "Radish Juice",
    ingredients: [
      { name: "White radish", quantity: "1 medium" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Wash and peel radish",
      "Grate and extract juice",
      "Mix with honey",
      "Drink on empty stomach"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "May cause gas in some",
      "Start with small amounts"
    ],
    benefits: [
      "Natural remedy for piles",
      "Improves digestion",
      "Reduces inflammation"
    ],
    related_diseases: ["piles", "constipation"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-43",
    problem: "Piles",
    title: "Sitz Bath with Epsom Salt",
    ingredients: [
      { name: "Warm water", quantity: "Enough to fill tub" },
      { name: "Epsom salt", quantity: "1/2 cup" }
    ],
    method: [
      "Fill tub with warm water",
      "Add Epsom salt",
      "Sit in the bath for 15-20 minutes",
      "Pat dry gently",
      "Apply coconut oil to area"
    ],
    how_often: "2-3 times daily, especially after bowel movements",
    precautions: [
      "Water should be warm, not hot",
      "Keep area dry otherwise"
    ],
    benefits: [
      "Reduces swelling",
      "Relieves pain and itching",
      "Promotes healing"
    ],
    related_diseases: ["piles"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-45",
    problem: "Kidney Stones",
    title: "Lemon Water",
    ingredients: [
      { name: "Fresh lemon juice", quantity: "Half lemon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Squeeze fresh lemon juice",
      "Add to water",
      "Drink on empty stomach",
      "Repeat 2-3 times daily"
    ],
    how_often: "3-4 times daily",
    precautions: [
      "May cause acidity in some",
      "Use straw to protect teeth"
    ],
    benefits: [
      "Citrate prevents stone formation",
      "Increases urination",
      "Helps dissolve stones"
    ],
    related_diseases: ["kidney-stones"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-46",
    problem: "Kidney Stones",
    title: "Barley Water",
    ingredients: [
      { name: "Barley", quantity: "1/4 cup" },
      { name: "Water", quantity: "4 cups" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Soak barley for 4 hours",
      "Boil in water until soft",
      "Strain the water",
      "Add lemon juice",
      "Drink throughout the day"
    ],
    how_often: "1-2 glasses daily",
    precautions: [
      "May cause bloating initially",
      "Celiac patients should avoid"
    ],
    benefits: [
      "Diuretic effect",
      "Flushes out toxins",
      "Prevents stone formation"
    ],
    related_diseases: ["kidney-stones"],
    difficulty: "Medium",
    preparation_time: "4+ hours"
  },
  {
    id: "remedy-54",
    problem: "Anemia",
    title: "Beetroot Carrot Juice",
    ingredients: [
      { name: "Beetroot", quantity: "1 medium" },
      { name: "Carrot", quantity: "1 medium" },
      { name: "Orange juice", quantity: "1/4 cup" }
    ],
    method: [
      "Wash and chop vegetables",
      "Blend together",
      "Add orange juice for vitamin C",
      "Drink fresh"
    ],
    how_often: "Once daily",
    precautions: [
      "May turn urine/stool pink - this is normal",
      "Diabetics should monitor portions"
    ],
    benefits: [
      "Rich in iron and folic acid",
      "Vitamin C improves iron absorption",
      "Increases hemoglobin"
    ],
    related_diseases: ["anemia"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-55",
    problem: "Anemia",
    title: "Pomegranate Seeds",
    ingredients: [
      { name: "Fresh pomegranate", quantity: "1" }
    ],
    method: [
      "Extract seeds from pomegranate",
      "Eat fresh or juice them",
      "Have on empty stomach for best absorption"
    ],
    how_often: "Once daily",
    precautions: [
      "May interact with blood thinners",
      "Juice may stain"
    ],
    benefits: [
      "Rich in iron",
      "Contains vitamin C",
      "Improves blood circulation"
    ],
    related_diseases: ["anemia"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-57",
    problem: "Joint Pain",
    title: "Hot and Cold Compress",
    ingredients: [
      { name: "Hot water bag", quantity: "1" },
      { name: "Ice pack", quantity: "1" },
      { name: "Towels", quantity: "2" }
    ],
    method: [
      "Start with hot compress for 15 minutes",
      "Follow with cold compress for 10 minutes",
      "Repeat 2-3 times",
      "Always wrap in towel before applying"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Never apply directly to skin",
      "Avoid if you have circulation problems"
    ],
    benefits: [
      "Reduces inflammation",
      "Improves blood flow",
      "Relieves pain and stiffness"
    ],
    related_diseases: ["joint-pain", "arthritis"],
    difficulty: "Easy",
    preparation_time: "30 minutes"
  },
  {
    id: "remedy-58",
    problem: "Joint Pain",
    title: "Epsom Salt Bath",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Warm bath water", quantity: "Full tub" }
    ],
    method: [
      "Fill bathtub with warm water",
      "Add Epsom salt",
      "Soak for 20-30 minutes",
      "Gently move joints while soaking",
      "Pat dry and rest"
    ],
    how_often: "2-3 times weekly",
    precautions: [
      "Not for those with kidney problems",
      "Stay hydrated",
      "Don't use if skin is broken"
    ],
    benefits: [
      "Magnesium absorption through skin",
      "Relaxes muscles",
      "Reduces joint swelling"
    ],
    related_diseases: ["joint-pain", "arthritis"],
    difficulty: "Easy",
    preparation_time: "30 minutes"
  },
  // UTI Remedies
  {
    id: "remedy-61",
    problem: "UTI",
    title: "Cranberry and Coconut Water",
    ingredients: [
      { name: "Fresh coconut water", quantity: "1 glass" },
      { name: "Cranberry juice (unsweetened)", quantity: "2 tablespoons" }
    ],
    method: [
      "Take fresh coconut water",
      "Mix with cranberry juice",
      "Drink immediately",
      "Repeat multiple times daily"
    ],
    how_often: "3-4 times daily",
    precautions: [
      "Use unsweetened cranberry only",
      "Consult doctor if symptoms persist",
      "May interact with blood thinners"
    ],
    benefits: [
      "Prevents bacteria from sticking to bladder",
      "Natural diuretic",
      "Flushes out toxins"
    ],
    related_diseases: ["uti"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-62",
    problem: "UTI",
    title: "Coriander Seeds Water",
    ingredients: [
      { name: "Coriander seeds (Dhaniya)", quantity: "2 tablespoons" },
      { name: "Water", quantity: "2 glasses" }
    ],
    method: [
      "Soak coriander seeds in water overnight",
      "Strain in the morning",
      "Drink on empty stomach",
      "Can also boil for 10 minutes if urgent"
    ],
    how_often: "Twice daily",
    precautions: [
      "Stay well hydrated",
      "See doctor if fever develops"
    ],
    benefits: [
      "Cooling effect on urinary system",
      "Natural antibacterial",
      "Reduces burning sensation"
    ],
    related_diseases: ["uti", "kidney-stones"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking"
  },
  {
    id: "remedy-63",
    problem: "UTI",
    title: "Barley Water",
    ingredients: [
      { name: "Barley (Jau)", quantity: "1/4 cup" },
      { name: "Water", quantity: "4 cups" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Wash barley thoroughly",
      "Boil in water for 30 minutes",
      "Strain the water",
      "Add lemon juice when cool",
      "Drink throughout the day"
    ],
    how_often: "3-4 glasses daily",
    precautions: [
      "May lower blood sugar",
      "Not for celiac patients"
    ],
    benefits: [
      "Excellent diuretic",
      "Cleanses urinary tract",
      "Reduces infection"
    ],
    related_diseases: ["uti", "kidney-stones"],
    difficulty: "Medium",
    preparation_time: "40 minutes"
  },
  // Sinusitis Remedies
  {
    id: "remedy-64",
    problem: "Sinusitis",
    title: "Steam Inhalation with Ajwain",
    ingredients: [
      { name: "Ajwain (Carom seeds)", quantity: "1 tablespoon" },
      { name: "Hot water", quantity: "1 large bowl" }
    ],
    method: [
      "Boil water and pour into bowl",
      "Add ajwain seeds",
      "Cover head with towel",
      "Inhale steam for 10-15 minutes",
      "Keep eyes closed"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Be careful with hot water",
      "Not for small children",
      "Stop if dizzy"
    ],
    benefits: [
      "Opens blocked sinuses",
      "Relieves congestion",
      "Natural decongestant"
    ],
    related_diseases: ["sinusitis", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-65",
    problem: "Sinusitis",
    title: "Neti Pot Saline Rinse",
    ingredients: [
      { name: "Warm distilled water", quantity: "1 cup" },
      { name: "Non-iodized salt", quantity: "1/4 teaspoon" },
      { name: "Baking soda", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix salt and baking soda in warm water",
      "Use a neti pot or squeeze bottle",
      "Tilt head over sink",
      "Pour solution through one nostril",
      "Let it drain from other nostril"
    ],
    how_often: "1-2 times daily",
    precautions: [
      "Use only distilled or boiled water",
      "Clean neti pot after each use",
      "Don't use if one nostril completely blocked"
    ],
    benefits: [
      "Clears mucus and debris",
      "Reduces sinus pressure",
      "Ancient Ayurvedic practice"
    ],
    related_diseases: ["sinusitis", "allergic-rhinitis"],
    difficulty: "Medium",
    preparation_time: "10 minutes"
  },
  // Weight Loss Remedies
  {
    id: "remedy-66",
    problem: "Weight Loss",
    title: "Warm Lemon Honey Water",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Heat water to warm (not boiling)",
      "Add fresh lemon juice",
      "Mix in honey",
      "Drink first thing in morning"
    ],
    how_often: "Daily on empty stomach",
    precautions: [
      "May harm teeth if taken long term",
      "Avoid if acid reflux prone",
      "Use lukewarm water only"
    ],
    benefits: [
      "Boosts metabolism",
      "Aids digestion",
      "Detoxifies liver"
    ],
    related_diseases: ["obesity", "constipation"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "remedy-67",
    problem: "Weight Loss",
    title: "Cumin Cinnamon Tea",
    ingredients: [
      { name: "Cumin seeds (Jeera)", quantity: "1 teaspoon" },
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Water", quantity: "1.5 cups" }
    ],
    method: [
      "Boil water with cumin and cinnamon",
      "Simmer for 5 minutes",
      "Strain into cup",
      "Drink warm before meals"
    ],
    how_often: "2-3 times daily before meals",
    precautions: [
      "May lower blood sugar",
      "Avoid excess cinnamon during pregnancy",
      "May cause heartburn in some"
    ],
    benefits: [
      "Increases metabolic rate",
      "Reduces belly fat",
      "Controls appetite"
    ],
    related_diseases: ["obesity", "diabetes"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-68",
    problem: "Weight Loss",
    title: "Apple Cider Vinegar Drink",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix apple cider vinegar in warm water",
      "Add honey to taste",
      "Stir well",
      "Drink before meals"
    ],
    how_often: "1-2 times daily before meals",
    precautions: [
      "Always dilute properly",
      "May damage tooth enamel",
      "Start with small amounts"
    ],
    benefits: [
      "Promotes feeling of fullness",
      "Helps regulate blood sugar",
      "Improves digestion"
    ],
    related_diseases: ["obesity", "diabetes"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // Immunity Boosting
  {
    id: "remedy-69",
    problem: "Immunity",
    title: "Chyawanprash Daily Dose",
    ingredients: [
      { name: "Chyawanprash", quantity: "1 tablespoon" },
      { name: "Warm milk", quantity: "1 glass" }
    ],
    method: [
      "Take chyawanprash directly or with milk",
      "Best consumed in morning",
      "Can also take at bedtime"
    ],
    how_often: "1-2 times daily",
    precautions: [
      "Diabetics should check sugar content",
      "Some may be allergic to ingredients",
      "Store in cool dry place"
    ],
    benefits: [
      "Contains 40+ herbs",
      "Rich in Vitamin C from Amla",
      "Strengthens respiratory system"
    ],
    related_diseases: ["cold-cough", "asthma"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  {
    id: "remedy-70",
    problem: "Immunity",
    title: "Giloy (Guduchi) Kadha",
    ingredients: [
      { name: "Fresh Giloy stem or powder", quantity: "1 inch or 1 tsp" },
      { name: "Water", quantity: "2 cups" },
      { name: "Tulsi leaves", quantity: "5-6" },
      { name: "Black pepper", quantity: "2-3" }
    ],
    method: [
      "Boil giloy and tulsi in water",
      "Add crushed black pepper",
      "Reduce to half",
      "Strain and drink warm"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "May lower blood sugar",
      "Avoid during pregnancy",
      "May cause constipation"
    ],
    benefits: [
      "Powerful immunomodulator",
      "Fights infections",
      "Detoxifies blood"
    ],
    related_diseases: ["cold-cough", "fever"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-71",
    problem: "Immunity",
    title: "Ashwagandha Milk",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1/2 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the milk (don't boil)",
      "Add ashwagandha powder",
      "Mix well, add honey",
      "Drink at bedtime"
    ],
    how_often: "Once daily at night",
    precautions: [
      "May cause drowsiness",
      "Avoid during pregnancy",
      "Consult doctor if on thyroid medication"
    ],
    benefits: [
      "Reduces stress and cortisol",
      "Improves strength",
      "Enhances overall immunity"
    ],
    related_diseases: ["anxiety", "insomnia"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Menstrual Disorders
  {
    id: "remedy-72",
    problem: "Menstrual Cramps",
    title: "Ginger Jaggery Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Jaggery (Gur)", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1.5 cups" }
    ],
    method: [
      "Grate fresh ginger",
      "Boil in water for 10 minutes",
      "Add jaggery and stir",
      "Strain and drink warm"
    ],
    how_often: "2-3 times daily during periods",
    precautions: [
      "May increase bleeding slightly",
      "Avoid if very heavy flow"
    ],
    benefits: [
      "Relieves menstrual cramps",
      "Jaggery provides iron",
      "Ginger reduces inflammation"
    ],
    related_diseases: ["menstrual-disorders"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-73",
    problem: "Menstrual Cramps",
    title: "Ajwain and Jaggery",
    ingredients: [
      { name: "Ajwain (Carom seeds)", quantity: "1 teaspoon" },
      { name: "Jaggery", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Dry roast ajwain lightly",
      "Mix with jaggery",
      "Take with warm water",
      "Can also make tea by boiling"
    ],
    how_often: "2-3 times daily during periods",
    precautions: [
      "May cause acidity in some",
      "Start a day before expected period"
    ],
    benefits: [
      "Relieves spasms and cramps",
      "Reduces bloating",
      "Traditional remedy for period pain"
    ],
    related_diseases: ["menstrual-disorders"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-74",
    problem: "Irregular Periods",
    title: "Aloe Vera and Honey",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh aloe vera gel",
      "Blend to smooth consistency",
      "Mix with honey",
      "Consume on empty stomach"
    ],
    how_often: "Daily for 3 months",
    precautions: [
      "Avoid during pregnancy",
      "May cause diarrhea initially",
      "Stop during menstruation"
    ],
    benefits: [
      "Regulates hormones naturally",
      "Detoxifies reproductive system",
      "Promotes regular cycles"
    ],
    related_diseases: ["menstrual-disorders", "pcos"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Back Pain
  {
    id: "remedy-75",
    problem: "Back Pain",
    title: "Warm Mustard Oil Massage",
    ingredients: [
      { name: "Mustard oil (Sarson)", quantity: "3-4 tablespoons" },
      { name: "Garlic cloves", quantity: "4-5" }
    ],
    method: [
      "Heat mustard oil with garlic",
      "Let garlic turn brown",
      "Cool to warm temperature",
      "Massage on affected area",
      "Leave for 30 minutes"
    ],
    how_often: "Daily before bath",
    precautions: [
      "Test oil temperature first",
      "Avoid on broken skin",
      "May stain clothes"
    ],
    benefits: [
      "Improves blood circulation",
      "Reduces muscle tension",
      "Natural pain reliever"
    ],
    related_diseases: ["back-pain", "sciatica"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-76",
    problem: "Back Pain",
    title: "Hot Salt Compress",
    ingredients: [
      { name: "Rock salt (Sendha namak)", quantity: "1 cup" },
      { name: "Cotton cloth", quantity: "1" }
    ],
    method: [
      "Heat salt in a pan until hot",
      "Wrap in cotton cloth",
      "Apply on painful area",
      "Repeat when salt cools"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Check temperature to avoid burns",
      "Not for acute injuries",
      "Don't use on swollen areas"
    ],
    benefits: [
      "Draws out inflammation",
      "Relaxes muscles",
      "Provides deep heat therapy"
    ],
    related_diseases: ["back-pain", "joint-pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Eye Problems
  {
    id: "remedy-77",
    problem: "Eye Strain",
    title: "Rose Water Eye Drops",
    ingredients: [
      { name: "Pure rose water", quantity: "2-3 drops per eye" }
    ],
    method: [
      "Use pure, preservative-free rose water",
      "Lie down comfortably",
      "Drop 2-3 drops in each eye",
      "Keep eyes closed for 5 minutes"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Use only pure rose water",
      "Discard if any irritation",
      "Don't touch dropper to eye"
    ],
    benefits: [
      "Soothes tired eyes",
      "Reduces redness",
      "Natural coolant for eyes"
    ],
    related_diseases: ["eye-problems"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-78",
    problem: "Eye Health",
    title: "Triphala Eye Wash",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Soak triphala in water overnight",
      "Strain through fine cloth in morning",
      "Use clear water to wash eyes",
      "Can also use as eye drops"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "Strain very thoroughly",
      "Use only the clear liquid",
      "Stop if irritation occurs"
    ],
    benefits: [
      "Strengthens eye muscles",
      "Improves vision over time",
      "Reduces eye infections"
    ],
    related_diseases: ["eye-problems"],
    difficulty: "Medium",
    preparation_time: "Overnight soaking"
  },
  // Memory and Brain Health
  {
    id: "remedy-79",
    problem: "Memory",
    title: "Brahmi Tea",
    ingredients: [
      { name: "Brahmi leaves (fresh or dried)", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1.5 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil brahmi leaves in water",
      "Simmer for 10 minutes",
      "Strain and cool slightly",
      "Add honey and drink"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "May cause drowsiness initially",
      "Avoid during pregnancy",
      "Start with small amounts"
    ],
    benefits: [
      "Enhances memory and focus",
      "Reduces mental fatigue",
      "Calms the mind"
    ],
    related_diseases: ["memory-loss", "anxiety"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-80",
    problem: "Memory",
    title: "Almonds and Milk",
    ingredients: [
      { name: "Almonds (soaked)", quantity: "5-6" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Saffron strands", quantity: "2-3" }
    ],
    method: [
      "Soak almonds overnight",
      "Peel and grind to paste",
      "Mix with warm milk",
      "Add saffron strands",
      "Drink in morning"
    ],
    how_often: "Daily in morning",
    precautions: [
      "Remove almond skin",
      "Use only a few saffron strands"
    ],
    benefits: [
      "Boosts brain power",
      "Rich in omega-3 fatty acids",
      "Saffron improves mood"
    ],
    related_diseases: ["memory-loss"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking + 10 minutes"
  },
  // Liver Health
  {
    id: "remedy-81",
    problem: "Liver Health",
    title: "Bhumyamalaki (Bhumi Amla) Decoction",
    ingredients: [
      { name: "Bhumi amla powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Boil bhumi amla in water",
      "Reduce to half",
      "Strain and drink",
      "Can add honey for taste"
    ],
    how_often: "Twice daily",
    precautions: [
      "Consult doctor if liver disease",
      "May interact with medications"
    ],
    benefits: [
      "Protects liver cells",
      "Helps in fatty liver",
      "Natural hepatoprotective"
    ],
    related_diseases: ["fatty-liver", "jaundice"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-82",
    problem: "Liver Health",
    title: "Turmeric Amla Juice",
    ingredients: [
      { name: "Amla juice", quantity: "2 tablespoons" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Mix amla juice with warm water",
      "Add turmeric powder",
      "Stir well",
      "Drink on empty stomach"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "May cause acidity in some",
      "Diabetics monitor blood sugar"
    ],
    benefits: [
      "Detoxifies liver",
      "Rich in antioxidants",
      "Supports liver regeneration"
    ],
    related_diseases: ["fatty-liver"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Dental Health
  {
    id: "remedy-83",
    problem: "Tooth Pain",
    title: "Clove Oil Application",
    ingredients: [
      { name: "Clove oil", quantity: "2-3 drops" },
      { name: "Cotton ball", quantity: "1 small" }
    ],
    method: [
      "Dip cotton ball in clove oil",
      "Apply directly on painful tooth",
      "Hold for 15-20 minutes",
      "Don't swallow"
    ],
    how_often: "As needed for pain relief",
    precautions: [
      "Don't apply on gums directly",
      "Temporary relief only",
      "See dentist for underlying issue"
    ],
    benefits: [
      "Natural anesthetic",
      "Antibacterial properties",
      "Instant pain relief"
    ],
    related_diseases: ["dental-problems"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-84",
    problem: "Gum Health",
    title: "Oil Pulling with Sesame",
    ingredients: [
      { name: "Sesame oil (cold pressed)", quantity: "1 tablespoon" }
    ],
    method: [
      "Take oil on empty stomach",
      "Swish in mouth for 15-20 minutes",
      "Pull through teeth",
      "Spit out (not in sink)",
      "Rinse with warm water"
    ],
    how_often: "Daily in morning",
    precautions: [
      "Don't swallow oil",
      "Start with 5 minutes if difficult",
      "Do before brushing teeth"
    ],
    benefits: [
      "Removes toxins from mouth",
      "Strengthens gums",
      "Whitens teeth naturally"
    ],
    related_diseases: ["dental-problems"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  // Sore Throat
  {
    id: "remedy-85",
    problem: "Sore Throat",
    title: "Salt Water Gargle",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Salt", quantity: "1/2 teaspoon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Dissolve salt and turmeric in warm water",
      "Gargle for 30 seconds",
      "Spit out",
      "Repeat 3-4 times"
    ],
    how_often: "Every 3-4 hours",
    precautions: [
      "Don't swallow",
      "Use warm not hot water"
    ],
    benefits: [
      "Kills bacteria",
      "Reduces inflammation",
      "Provides instant relief"
    ],
    related_diseases: ["cold-cough", "tonsillitis"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-86",
    problem: "Sore Throat",
    title: "Licorice (Mulethi) Tea",
    ingredients: [
      { name: "Mulethi (Licorice root)", quantity: "1 small piece" },
      { name: "Water", quantity: "1.5 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush mulethi slightly",
      "Boil in water for 10 minutes",
      "Strain and add honey",
      "Sip slowly while warm"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Avoid if high blood pressure",
      "Not for long term use",
      "Pregnant women avoid"
    ],
    benefits: [
      "Soothes throat naturally",
      "Natural expectorant",
      "Anti-inflammatory"
    ],
    related_diseases: ["cold-cough", "sore-throat"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  // Fever
  {
    id: "remedy-87",
    problem: "Fever",
    title: "Tulsi Ginger Kadha",
    ingredients: [
      { name: "Tulsi leaves", quantity: "10-15" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Black pepper", quantity: "4-5" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Boil all ingredients in water",
      "Reduce to 1 cup",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "See doctor if fever persists",
      "May cause sweating",
      "Rest adequately"
    ],
    benefits: [
      "Natural antipyretic",
      "Boosts immunity",
      "Clears congestion"
    ],
    related_diseases: ["fever", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-88",
    problem: "Fever",
    title: "Raisin Water",
    ingredients: [
      { name: "Raisins (Kishmish)", quantity: "25-30" },
      { name: "Water", quantity: "1.5 cups" },
      { name: "Lime juice", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Soak raisins in water for 1 hour",
      "Crush and boil for 10 minutes",
      "Strain and add lime juice",
      "Drink twice daily"
    ],
    how_often: "Twice daily",
    precautions: [
      "Diabetics limit quantity",
      "Use as supportive treatment"
    ],
    benefits: [
      "Natural coolant",
      "Provides energy during illness",
      "Rich in antioxidants"
    ],
    related_diseases: ["fever"],
    difficulty: "Easy",
    preparation_time: "1 hour + 15 minutes"
  },
  // Nausea
  {
    id: "remedy-89",
    problem: "Nausea",
    title: "Ginger Lemon Drops",
    ingredients: [
      { name: "Fresh ginger juice", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Extract fresh ginger juice",
      "Mix with lemon juice",
      "Add honey",
      "Take small sips slowly"
    ],
    how_often: "As needed",
    precautions: [
      "May cause heartburn",
      "Start with small amount"
    ],
    benefits: [
      "Settles stomach quickly",
      "Natural antiemetic",
      "Safe during pregnancy (small amounts)"
    ],
    related_diseases: ["nausea", "morning-sickness"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-90",
    problem: "Nausea",
    title: "Mint (Pudina) Water",
    ingredients: [
      { name: "Fresh mint leaves", quantity: "10-15" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Crush mint leaves slightly",
      "Add to boiling water",
      "Steep for 5 minutes",
      "Strain and sip slowly"
    ],
    how_often: "As needed",
    precautions: [
      "Avoid if acid reflux present",
      "Don't use peppermint oil internally"
    ],
    benefits: [
      "Calms stomach muscles",
      "Freshens breath",
      "Relieves motion sickness"
    ],
    related_diseases: ["nausea", "acidity"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Fatigue
  {
    id: "remedy-91",
    problem: "Fatigue",
    title: "Dates and Milk Energy Drink",
    ingredients: [
      { name: "Dates (Khajoor)", quantity: "4-5" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Cardamom powder", quantity: "A pinch" }
    ],
    method: [
      "Remove seeds from dates",
      "Soak in warm milk for 30 minutes",
      "Blend together",
      "Add cardamom and drink"
    ],
    how_often: "Once daily",
    precautions: [
      "High in natural sugars",
      "Diabetics should limit"
    ],
    benefits: [
      "Natural energy booster",
      "Rich in iron",
      "Increases stamina"
    ],
    related_diseases: ["fatigue", "anemia"],
    difficulty: "Easy",
    preparation_time: "35 minutes"
  },
  {
    id: "remedy-92",
    problem: "Fatigue",
    title: "Sattu Drink",
    ingredients: [
      { name: "Sattu (roasted gram flour)", quantity: "2 tablespoons" },
      { name: "Water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Black salt", quantity: "A pinch" }
    ],
    method: [
      "Mix sattu in cold water",
      "Add lemon and black salt",
      "Stir well to remove lumps",
      "Drink immediately"
    ],
    how_often: "1-2 times daily",
    precautions: [
      "Best consumed fresh",
      "May cause gas initially"
    ],
    benefits: [
      "Instant energy provider",
      "Keeps body cool",
      "High in protein and fiber"
    ],
    related_diseases: ["fatigue", "heat-stroke"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Stress
  {
    id: "remedy-93",
    problem: "Stress",
    title: "Shankhpushpi Milk",
    ingredients: [
      { name: "Shankhpushpi powder", quantity: "1/2 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add shankhpushpi to warm milk",
      "Mix well",
      "Add honey",
      "Drink at bedtime"
    ],
    how_often: "Once daily at night",
    precautions: [
      "May cause drowsiness",
      "Start with smaller dose"
    ],
    benefits: [
      "Calms nervous system",
      "Reduces anxiety",
      "Improves sleep quality"
    ],
    related_diseases: ["anxiety", "insomnia", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-94",
    problem: "Stress",
    title: "Jatamansi Tea",
    ingredients: [
      { name: "Jatamansi powder", quantity: "1/4 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil jatamansi in water",
      "Simmer for 5 minutes",
      "Strain and cool slightly",
      "Add honey and drink"
    ],
    how_often: "Once or twice daily",
    precautions: [
      "May lower blood pressure",
      "Avoid during pregnancy",
      "May interact with sedatives"
    ],
    benefits: [
      "Natural adaptogen",
      "Reduces cortisol",
      "Promotes mental calmness"
    ],
    related_diseases: ["anxiety", "stress", "insomnia"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  // Allergies
  {
    id: "remedy-95",
    problem: "Allergies",
    title: "Local Honey Therapy",
    ingredients: [
      { name: "Local raw honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Get honey from local source",
      "Take 1 tablespoon daily",
      "Best started before allergy season",
      "Can mix with warm water"
    ],
    how_often: "Daily",
    precautions: [
      "Not for children under 1 year",
      "May cause reaction in severe allergies",
      "Use raw, unprocessed honey"
    ],
    benefits: [
      "Builds tolerance to local pollen",
      "Natural antihistamine",
      "Soothes throat irritation"
    ],
    related_diseases: ["allergic-rhinitis", "hay-fever"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  {
    id: "remedy-96",
    problem: "Allergies",
    title: "Turmeric Nettle Tea",
    ingredients: [
      { name: "Dried nettle leaves", quantity: "1 teaspoon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Water", quantity: "1.5 cups" }
    ],
    method: [
      "Boil nettle leaves in water",
      "Add turmeric",
      "Steep for 10 minutes",
      "Strain and drink warm"
    ],
    how_often: "2-3 times daily during allergy season",
    precautions: [
      "May interact with blood thinners",
      "Start before allergy season"
    ],
    benefits: [
      "Natural antihistamine",
      "Reduces inflammation",
      "Clears nasal passages"
    ],
    related_diseases: ["allergic-rhinitis", "sinusitis"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  // Bloating
  {
    id: "remedy-97",
    problem: "Bloating",
    title: "Hing (Asafoetida) Water",
    ingredients: [
      { name: "Hing powder", quantity: "A pinch" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Add a pinch of hing to warm water",
      "Mix well",
      "Drink after meals"
    ],
    how_often: "After meals as needed",
    precautions: [
      "Very strong smell",
      "Use only a small pinch",
      "Avoid during pregnancy"
    ],
    benefits: [
      "Instant relief from gas",
      "Aids digestion",
      "Reduces abdominal discomfort"
    ],
    related_diseases: ["bloating", "gas", "indigestion"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-98",
    problem: "Bloating",
    title: "Ajwain and Black Salt",
    ingredients: [
      { name: "Ajwain seeds", quantity: "1/2 teaspoon" },
      { name: "Black salt", quantity: "A pinch" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Chew ajwain seeds with black salt",
      "Drink warm water after",
      "Can also make tea by boiling"
    ],
    how_often: "After heavy meals",
    precautions: [
      "May cause acidity in excess",
      "Not for those with ulcers"
    ],
    benefits: [
      "Releases trapped gas",
      "Improves digestion",
      "Relieves stomach heaviness"
    ],
    related_diseases: ["bloating", "indigestion"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // Headache
  {
    id: "remedy-99",
    problem: "Headache",
    title: "Peppermint Oil Temple Massage",
    ingredients: [
      { name: "Peppermint essential oil", quantity: "2-3 drops" },
      { name: "Coconut oil", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix peppermint oil with coconut oil",
      "Apply on temples and forehead",
      "Massage gently in circular motion",
      "Rest in dark room"
    ],
    how_often: "As needed",
    precautions: [
      "Avoid contact with eyes",
      "Patch test first",
      "Not for children under 6"
    ],
    benefits: [
      "Cooling sensation relieves pain",
      "Relaxes tense muscles",
      "Improves blood circulation"
    ],
    related_diseases: ["headache", "migraine"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-100",
    problem: "Headache",
    title: "Cinnamon Paste",
    ingredients: [
      { name: "Cinnamon powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "Few drops" }
    ],
    method: [
      "Make thick paste with cinnamon and water",
      "Apply on forehead and temples",
      "Leave for 30 minutes",
      "Wash off with lukewarm water"
    ],
    how_often: "When headache occurs",
    precautions: [
      "May cause skin irritation",
      "Avoid near eyes",
      "Patch test first"
    ],
    benefits: [
      "Relieves headache naturally",
      "Anti-inflammatory properties",
      "Improves circulation to head"
    ],
    related_diseases: ["headache", "sinusitis"],
    difficulty: "Easy",
    preparation_time: "35 minutes"
  },
  // Acne
  {
    id: "remedy-101",
    problem: "Acne",
    title: "Neem Face Pack",
    ingredients: [
      { name: "Neem leaves paste", quantity: "2 tablespoons" },
      { name: "Turmeric powder", quantity: "1/2 teaspoon" },
      { name: "Rose water", quantity: "1 teaspoon" }
    ],
    method: [
      "Make paste from fresh neem leaves",
      "Mix with turmeric and rose water",
      "Apply on face avoiding eyes",
      "Leave for 20 minutes",
      "Wash with cool water"
    ],
    how_often: "2-3 times per week",
    precautions: [
      "Patch test first",
      "Turmeric may temporarily stain",
      "Avoid sun exposure after"
    ],
    benefits: [
      "Antibacterial properties",
      "Reduces acne and pimples",
      "Controls excess oil"
    ],
    related_diseases: ["acne", "skin-disorders"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  {
    id: "remedy-102",
    problem: "Acne",
    title: "Sandalwood Turmeric Paste",
    ingredients: [
      { name: "Sandalwood powder", quantity: "1 tablespoon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Rose water", quantity: "As needed" }
    ],
    method: [
      "Mix sandalwood and turmeric",
      "Add rose water to make paste",
      "Apply on affected areas",
      "Leave until dry",
      "Wash with cool water"
    ],
    how_often: "Daily at night",
    precautions: [
      "May cause dryness",
      "Use pure sandalwood",
      "Moisturize after if needed"
    ],
    benefits: [
      "Soothes inflamed skin",
      "Natural antiseptic",
      "Fades acne marks"
    ],
    related_diseases: ["acne", "skin-disorders"],
    difficulty: "Easy",
    preparation_time: "30 minutes"
  },
  // Dark Circles
  {
    id: "remedy-103",
    problem: "Dark Circles",
    title: "Potato Juice Eye Treatment",
    ingredients: [
      { name: "Raw potato", quantity: "1 small" }
    ],
    method: [
      "Grate raw potato",
      "Extract juice",
      "Soak cotton pads in juice",
      "Place on closed eyes",
      "Leave for 15-20 minutes"
    ],
    how_often: "Daily",
    precautions: [
      "Use fresh juice only",
      "Avoid if skin is sensitive"
    ],
    benefits: [
      "Natural bleaching agent",
      "Reduces puffiness",
      "Lightens dark circles"
    ],
    related_diseases: ["dark-circles", "eye-problems"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  {
    id: "remedy-104",
    problem: "Dark Circles",
    title: "Almond Oil Massage",
    ingredients: [
      { name: "Sweet almond oil", quantity: "4-5 drops" }
    ],
    method: [
      "Take few drops of almond oil",
      "Gently massage under eyes",
      "Use ring finger for light pressure",
      "Leave overnight",
      "Wash in morning"
    ],
    how_often: "Every night",
    precautions: [
      "Avoid getting in eyes",
      "Use pure almond oil",
      "Be gentle around eye area"
    ],
    benefits: [
      "Nourishes delicate skin",
      "Rich in Vitamin E",
      "Reduces pigmentation"
    ],
    related_diseases: ["dark-circles"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Dry Skin
  {
    id: "remedy-105",
    problem: "Dry Skin",
    title: "Milk Cream Honey Pack",
    ingredients: [
      { name: "Fresh milk cream (Malai)", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Mix milk cream and honey",
      "Apply on dry areas",
      "Leave for 20 minutes",
      "Wash with lukewarm water"
    ],
    how_often: "2-3 times per week",
    precautions: [
      "Avoid if acne prone",
      "Use fresh cream only"
    ],
    benefits: [
      "Deep moisturization",
      "Softens rough skin",
      "Natural skin food"
    ],
    related_diseases: ["dry-skin", "skin-disorders"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  {
    id: "remedy-106",
    problem: "Dry Skin",
    title: "Coconut Oil Body Massage",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "2-3 tablespoons" }
    ],
    method: [
      "Warm coconut oil slightly",
      "Massage all over body",
      "Focus on dry areas",
      "Leave for 30 minutes",
      "Bathe with mild soap"
    ],
    how_often: "Daily before bath",
    precautions: [
      "Floors may become slippery",
      "Test if allergic to coconut"
    ],
    benefits: [
      "Deep penetrating moisture",
      "Antibacterial properties",
      "Makes skin supple"
    ],
    related_diseases: ["dry-skin"],
    difficulty: "Easy",
    preparation_time: "35 minutes"
  },
  // Cough
  {
    id: "remedy-107",
    problem: "Cough",
    title: "Honey Pepper Mix",
    ingredients: [
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Black pepper powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix honey and black pepper",
      "Take slowly, letting it coat throat",
      "Don't drink water immediately"
    ],
    how_often: "3-4 times daily",
    precautions: [
      "Not for children under 1 year",
      "May cause slight burning"
    ],
    benefits: [
      "Soothes irritated throat",
      "Natural cough suppressant",
      "Antibacterial action"
    ],
    related_diseases: ["cough", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-108",
    problem: "Cough",
    title: "Onion Honey Syrup",
    ingredients: [
      { name: "Onion", quantity: "1 medium" },
      { name: "Honey", quantity: "3 tablespoons" }
    ],
    method: [
      "Slice onion into rings",
      "Layer with honey in jar",
      "Leave overnight",
      "Strain and use syrup"
    ],
    how_often: "1 tablespoon 3-4 times daily",
    precautions: [
      "Strong taste",
      "Use within 3 days",
      "Keep refrigerated"
    ],
    benefits: [
      "Natural expectorant",
      "Loosens phlegm",
      "Reduces cough frequency"
    ],
    related_diseases: ["cough", "cold-cough", "bronchitis"],
    difficulty: "Easy",
    preparation_time: "Overnight"
  },
  // Bad Breath
  {
    id: "remedy-109",
    problem: "Bad Breath",
    title: "Fennel Seeds Chew",
    ingredients: [
      { name: "Fennel seeds (Saunf)", quantity: "1 teaspoon" }
    ],
    method: [
      "Chew fennel seeds slowly",
      "Let saliva mix with seeds",
      "Best after meals"
    ],
    how_often: "After each meal",
    precautions: [
      "May cause allergic reaction rarely"
    ],
    benefits: [
      "Freshens breath instantly",
      "Aids digestion",
      "Antimicrobial properties"
    ],
    related_diseases: ["bad-breath", "indigestion"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  {
    id: "remedy-110",
    problem: "Bad Breath",
    title: "Cardamom Mouth Freshener",
    ingredients: [
      { name: "Green cardamom", quantity: "2-3 pods" }
    ],
    method: [
      "Chew cardamom pods slowly",
      "Let aromatic oils release",
      "Can swallow or spit out"
    ],
    how_often: "After meals or as needed",
    precautions: [
      "Strong flavor",
      "Don't overuse"
    ],
    benefits: [
      "Natural mouth freshener",
      "Antibacterial action",
      "Improves digestion"
    ],
    related_diseases: ["bad-breath"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  // Muscle Cramps remedies
  {
    id: "remedy-111",
    problem: "Muscle Cramps",
    title: "Mustard Oil Massage",
    ingredients: [
      { name: "Mustard oil", quantity: "2 tablespoons" },
      { name: "Garlic cloves", quantity: "3-4" }
    ],
    method: [
      "Heat mustard oil gently",
      "Add crushed garlic cloves",
      "Let garlic infuse for 5 minutes",
      "Apply warm oil to cramped muscles",
      "Massage in circular motions for 10-15 minutes"
    ],
    how_often: "2-3 times daily or as needed",
    precautions: [
      "Test temperature before applying",
      "Avoid on broken skin",
      "Patch test for allergies"
    ],
    benefits: [
      "Improves blood circulation",
      "Relaxes muscle tension",
      "Provides warming relief"
    ],
    related_diseases: ["muscle-cramps", "joint-pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-112",
    problem: "Muscle Cramps",
    title: "Banana Smoothie",
    ingredients: [
      { name: "Ripe banana", quantity: "1" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Almonds", quantity: "5-6" }
    ],
    method: [
      "Blend banana with milk",
      "Add soaked almonds",
      "Add honey for taste",
      "Blend until smooth",
      "Drink immediately"
    ],
    how_often: "Once daily",
    precautions: [
      "Diabetics should limit honey",
      "Avoid if lactose intolerant"
    ],
    benefits: [
      "Rich in potassium",
      "Prevents muscle cramps",
      "Provides quick energy"
    ],
    related_diseases: ["muscle-cramps", "fatigue"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Ear Infection remedies
  {
    id: "remedy-113",
    problem: "Ear Infection",
    title: "Garlic Oil Drops",
    ingredients: [
      { name: "Garlic cloves", quantity: "2" },
      { name: "Sesame oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Crush garlic cloves",
      "Heat sesame oil with garlic on low flame",
      "Cook until garlic turns brown",
      "Strain and let cool to lukewarm",
      "Put 2-3 drops in affected ear"
    ],
    how_often: "Twice daily for 3-4 days",
    precautions: [
      "Never use if eardrum is perforated",
      "Test temperature carefully",
      "Consult doctor if no improvement"
    ],
    benefits: [
      "Natural antibiotic properties",
      "Reduces ear pain",
      "Fights infection"
    ],
    related_diseases: ["ear-infection"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-114",
    problem: "Ear Infection",
    title: "Holy Basil Juice",
    ingredients: [
      { name: "Fresh tulsi leaves", quantity: "10-15" }
    ],
    method: [
      "Wash tulsi leaves thoroughly",
      "Crush to extract juice",
      "Strain through clean cloth",
      "Warm slightly (lukewarm)",
      "Put 2-3 drops in ear"
    ],
    how_often: "Twice daily",
    precautions: [
      "Use fresh juice only",
      "Don't insert anything into ear",
      "Seek medical help if severe"
    ],
    benefits: [
      "Antibacterial properties",
      "Reduces inflammation",
      "Relieves ear pain"
    ],
    related_diseases: ["ear-infection"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Hiccups remedies
  {
    id: "remedy-115",
    problem: "Hiccups",
    title: "Sugar and Ghee",
    ingredients: [
      { name: "Sugar", quantity: "1 teaspoon" },
      { name: "Ghee", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Mix sugar with ghee",
      "Place mixture under tongue",
      "Let it dissolve slowly",
      "Swallow gradually"
    ],
    how_often: "Once, repeat if needed after 15 minutes",
    precautions: [
      "Diabetics should avoid",
      "Not for frequent use"
    ],
    benefits: [
      "Stimulates vagus nerve",
      "Stops diaphragm spasms",
      "Quick relief"
    ],
    related_diseases: ["hiccups"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  {
    id: "remedy-116",
    problem: "Hiccups",
    title: "Cardamom Water",
    ingredients: [
      { name: "Cardamom powder", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Boil water",
      "Add cardamom powder",
      "Simmer for 5 minutes",
      "Strain and cool slightly",
      "Sip slowly"
    ],
    how_often: "Once when hiccups occur",
    precautions: [
      "Let it cool sufficiently",
      "Sip slowly, don't gulp"
    ],
    benefits: [
      "Relaxes diaphragm",
      "Soothes digestive tract",
      "Pleasant taste"
    ],
    related_diseases: ["hiccups", "indigestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Mouth Ulcers remedies
  {
    id: "remedy-117",
    problem: "Mouth Ulcers",
    title: "Honey and Turmeric Paste",
    ingredients: [
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix honey and turmeric well",
      "Apply directly on ulcer",
      "Leave for 5-10 minutes",
      "Don't eat or drink during this time",
      "Rinse with warm water"
    ],
    how_often: "3-4 times daily",
    precautions: [
      "May cause slight burning initially",
      "Turmeric may stain temporarily"
    ],
    benefits: [
      "Antibacterial action",
      "Promotes healing",
      "Reduces pain"
    ],
    related_diseases: ["mouth-ulcers"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-118",
    problem: "Mouth Ulcers",
    title: "Coconut Oil Swishing",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "1 tablespoon" }
    ],
    method: [
      "Take coconut oil in mouth",
      "Swish around for 5-10 minutes",
      "Don't swallow",
      "Spit out and rinse with warm water",
      "Do before brushing teeth"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "Start with 5 minutes if new",
      "Spit in trash, not sink",
      "Don't swallow oil"
    ],
    benefits: [
      "Antimicrobial properties",
      "Reduces inflammation",
      "Promotes oral health"
    ],
    related_diseases: ["mouth-ulcers", "bad-breath"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-119",
    problem: "Mouth Ulcers",
    title: "Licorice Root Gargle",
    ingredients: [
      { name: "Mulethi (licorice) powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Add mulethi powder to warm water",
      "Stir well and let steep for 10 minutes",
      "Strain the water",
      "Gargle for 30 seconds",
      "Spit out"
    ],
    how_often: "3-4 times daily",
    precautions: [
      "Don't swallow large amounts",
      "Avoid if you have high BP"
    ],
    benefits: [
      "Soothes ulcer pain",
      "Promotes healing",
      "Anti-inflammatory"
    ],
    related_diseases: ["mouth-ulcers", "sore-throat"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  // Sunburn remedies
  {
    id: "remedy-120",
    problem: "Sunburn",
    title: "Aloe Vera Gel",
    ingredients: [
      { name: "Fresh aloe vera leaf", quantity: "1" }
    ],
    method: [
      "Cut aloe vera leaf",
      "Scoop out fresh gel",
      "Apply directly to sunburned skin",
      "Let it dry naturally",
      "Repeat as needed"
    ],
    how_often: "4-5 times daily",
    precautions: [
      "Use fresh gel only",
      "Do patch test first",
      "Store remainder in fridge"
    ],
    benefits: [
      "Instantly cooling",
      "Promotes skin healing",
      "Reduces redness and pain"
    ],
    related_diseases: ["sunburn", "skin-disorders"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-121",
    problem: "Sunburn",
    title: "Cucumber Yogurt Mask",
    ingredients: [
      { name: "Cucumber", quantity: "Half" },
      { name: "Yogurt", quantity: "2 tablespoons" }
    ],
    method: [
      "Grate or blend cucumber",
      "Mix with cold yogurt",
      "Apply to sunburned areas",
      "Leave for 20 minutes",
      "Rinse with cool water"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Use plain unsweetened yogurt",
      "Keep refrigerated"
    ],
    benefits: [
      "Cooling effect",
      "Hydrates skin",
      "Reduces inflammation"
    ],
    related_diseases: ["sunburn", "skin-disorders"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Dandruff remedies
  {
    id: "remedy-122",
    problem: "Dandruff",
    title: "Neem Oil Treatment",
    ingredients: [
      { name: "Neem oil", quantity: "2 tablespoons" },
      { name: "Coconut oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Mix both oils",
      "Warm slightly",
      "Apply to scalp with fingertips",
      "Massage for 10-15 minutes",
      "Leave for 1 hour, then shampoo"
    ],
    how_often: "Twice a week",
    precautions: [
      "Neem has strong smell",
      "Avoid contact with eyes",
      "Patch test first"
    ],
    benefits: [
      "Antifungal properties",
      "Reduces itching",
      "Cleanses scalp"
    ],
    related_diseases: ["dandruff", "hair-fall"],
    difficulty: "Easy",
    preparation_time: "1 hour 15 minutes"
  },
  {
    id: "remedy-123",
    problem: "Dandruff",
    title: "Apple Cider Vinegar Rinse",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "2 tablespoons" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Mix ACV with water",
      "After shampooing, pour over scalp",
      "Massage gently for 2-3 minutes",
      "Rinse with plain water",
      "Condition as usual"
    ],
    how_often: "Twice a week",
    precautions: [
      "May cause stinging if scalp is irritated",
      "Dilute properly",
      "Avoid contact with eyes"
    ],
    benefits: [
      "Balances scalp pH",
      "Removes product buildup",
      "Reduces dandruff flakes"
    ],
    related_diseases: ["dandruff"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-124",
    problem: "Dandruff",
    title: "Fenugreek Hair Pack",
    ingredients: [
      { name: "Fenugreek seeds", quantity: "3 tablespoons" },
      { name: "Water", quantity: "For soaking" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Soak fenugreek seeds overnight",
      "Grind into smooth paste",
      "Add lemon juice and mix",
      "Apply to scalp and hair",
      "Leave for 30-45 minutes, then shampoo"
    ],
    how_often: "Once a week",
    precautions: [
      "May cause slipperiness",
      "Rinse thoroughly"
    ],
    benefits: [
      "Deep conditions scalp",
      "Reduces dandruff",
      "Strengthens hair"
    ],
    related_diseases: ["dandruff", "hair-fall"],
    difficulty: "Medium",
    preparation_time: "Overnight + 45 minutes"
  },
  // Heartburn remedies
  {
    id: "remedy-125",
    problem: "Heartburn",
    title: "Baking Soda Water",
    ingredients: [
      { name: "Baking soda", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Add baking soda to water",
      "Stir until dissolved",
      "Drink slowly"
    ],
    how_often: "Once when heartburn occurs, not daily",
    precautions: [
      "Not for regular use",
      "High in sodium",
      "Avoid if on sodium-restricted diet"
    ],
    benefits: [
      "Neutralizes stomach acid quickly",
      "Provides fast relief",
      "Inexpensive remedy"
    ],
    related_diseases: ["heartburn", "acidity"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-126",
    problem: "Heartburn",
    title: "Licorice Tea",
    ingredients: [
      { name: "Mulethi sticks", quantity: "2-3 small pieces" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Boil water with mulethi sticks",
      "Simmer for 10 minutes",
      "Strain and let cool slightly",
      "Drink before or after meals"
    ],
    how_often: "1-2 times daily",
    precautions: [
      "Avoid if you have high blood pressure",
      "Not for long-term use",
      "Limit to 2 weeks"
    ],
    benefits: [
      "Soothes stomach lining",
      "Reduces acid production",
      "Heals esophagus"
    ],
    related_diseases: ["heartburn", "acidity"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  // Chapped Lips remedies
  {
    id: "remedy-127",
    problem: "Chapped Lips",
    title: "Ghee Lip Balm",
    ingredients: [
      { name: "Pure desi ghee", quantity: "Small amount" }
    ],
    method: [
      "Take small amount of ghee on fingertip",
      "Apply to lips before sleeping",
      "Can apply during day too",
      "Leave overnight"
    ],
    how_often: "2-3 times daily, especially at night",
    precautions: [
      "Use pure ghee only",
      "Keep container clean"
    ],
    benefits: [
      "Deep moisturization",
      "Heals cracks",
      "Natural and safe"
    ],
    related_diseases: ["chapped-lips"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  {
    id: "remedy-128",
    problem: "Chapped Lips",
    title: "Honey Rose Water",
    ingredients: [
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Rose water", quantity: "Few drops" }
    ],
    method: [
      "Mix honey with rose water",
      "Apply to lips",
      "Leave for 15-20 minutes",
      "Wipe off gently with wet cloth"
    ],
    how_often: "Twice daily",
    precautions: [
      "Don't lick lips after applying",
      "Use pure honey"
    ],
    benefits: [
      "Moisturizes deeply",
      "Heals cracks",
      "Adds natural color"
    ],
    related_diseases: ["chapped-lips"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Leg Cramps remedies
  {
    id: "remedy-129",
    problem: "Leg Cramps",
    title: "Warm Epsom Salt Bath",
    ingredients: [
      { name: "Epsom salt", quantity: "1 cup" },
      { name: "Warm water", quantity: "Bucket or tub" }
    ],
    method: [
      "Fill tub with warm water",
      "Add Epsom salt",
      "Stir until dissolved",
      "Soak legs for 15-20 minutes",
      "Pat dry and rest"
    ],
    how_often: "2-3 times a week",
    precautions: [
      "Don't use very hot water",
      "Avoid if you have open wounds",
      "Stay hydrated"
    ],
    benefits: [
      "Magnesium absorption through skin",
      "Relaxes muscles",
      "Reduces cramps"
    ],
    related_diseases: ["leg-cramps", "muscle-cramps"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  {
    id: "remedy-130",
    problem: "Leg Cramps",
    title: "Pickle Juice",
    ingredients: [
      { name: "Pickle juice (from Indian pickles)", quantity: "2-3 tablespoons" }
    ],
    method: [
      "Take pickle juice from jar",
      "Drink 2-3 tablespoons",
      "Best during or immediately after cramp"
    ],
    how_often: "When cramp occurs",
    precautions: [
      "High in sodium",
      "Not for those with hypertension",
      "Use sparingly"
    ],
    benefits: [
      "Quick relief from cramps",
      "Electrolyte balance",
      "Triggers nerve response"
    ],
    related_diseases: ["leg-cramps", "muscle-cramps"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  // Motion Sickness remedies
  {
    id: "remedy-131",
    problem: "Motion Sickness",
    title: "Ginger Candy",
    ingredients: [
      { name: "Dry ginger candy or fresh ginger", quantity: "Small piece" }
    ],
    method: [
      "Keep ginger candy handy",
      "Start chewing 30 minutes before travel",
      "Continue during journey as needed"
    ],
    how_often: "Before and during travel",
    precautions: [
      "May cause heartburn in some",
      "Avoid very spicy ginger"
    ],
    benefits: [
      "Prevents nausea",
      "Settles stomach",
      "Natural and portable"
    ],
    related_diseases: ["motion-sickness", "nausea"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },
  {
    id: "remedy-132",
    problem: "Motion Sickness",
    title: "Lemon and Salt",
    ingredients: [
      { name: "Lemon", quantity: "1" },
      { name: "Black salt", quantity: "Pinch" }
    ],
    method: [
      "Cut lemon into wedges",
      "Sprinkle black salt",
      "Suck on lemon during travel",
      "Or smell lemon peel"
    ],
    how_often: "During travel as needed",
    precautions: [
      "May affect tooth enamel",
      "Rinse mouth after"
    ],
    benefits: [
      "Reduces nausea sensation",
      "Fresh citrus scent helps",
      "Easy to carry"
    ],
    related_diseases: ["motion-sickness", "nausea"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // Food Poisoning remedies
  {
    id: "remedy-133",
    problem: "Food Poisoning",
    title: "Ginger Lemon Water",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grate ginger and extract juice",
      "Add to warm water",
      "Add lemon juice and honey",
      "Sip slowly throughout the day"
    ],
    how_often: "Every 2-3 hours",
    precautions: [
      "Seek medical help if severe",
      "Stay hydrated",
      "Rest completely"
    ],
    benefits: [
      "Antibacterial properties",
      "Settles stomach",
      "Prevents dehydration"
    ],
    related_diseases: ["food-poisoning", "nausea"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-134",
    problem: "Food Poisoning",
    title: "Cumin Water",
    ingredients: [
      { name: "Cumin seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Boil water with cumin seeds",
      "Simmer for 5 minutes",
      "Strain and let cool",
      "Drink slowly"
    ],
    how_often: "2-3 times a day",
    precautions: [
      "Consult doctor if symptoms persist",
      "Avoid solid foods initially"
    ],
    benefits: [
      "Aids digestion",
      "Reduces bloating",
      "Antibacterial action"
    ],
    related_diseases: ["food-poisoning", "indigestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Vertigo remedies
  {
    id: "remedy-135",
    problem: "Vertigo",
    title: "Ginger and Honey",
    ingredients: [
      { name: "Fresh ginger juice", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh ginger juice",
      "Mix with honey",
      "Consume slowly",
      "Rest in dark room after"
    ],
    how_often: "2-3 times daily during episodes",
    precautions: [
      "Seek medical evaluation for persistent vertigo",
      "Don't drive during episodes"
    ],
    benefits: [
      "Improves blood circulation",
      "Reduces dizziness",
      "Anti-inflammatory"
    ],
    related_diseases: ["vertigo"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-136",
    problem: "Vertigo",
    title: "Amla Coriander Water",
    ingredients: [
      { name: "Amla powder", quantity: "1 teaspoon" },
      { name: "Coriander seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Soak amla powder and coriander seeds overnight",
      "Strain in morning",
      "Add jaggery if needed for taste",
      "Drink on empty stomach"
    ],
    how_often: "Daily for 2 weeks",
    precautions: [
      "Don't expect immediate results",
      "Consult doctor for severe cases"
    ],
    benefits: [
      "Rich in Vitamin C",
      "Improves inner ear function",
      "Reduces inflammation"
    ],
    related_diseases: ["vertigo"],
    difficulty: "Medium",
    preparation_time: "Overnight soaking"
  },
  // Weak Eyesight remedies
  {
    id: "remedy-137",
    problem: "Weak Eyesight",
    title: "Carrot and Amla Juice",
    ingredients: [
      { name: "Carrots", quantity: "2 medium" },
      { name: "Amla", quantity: "1" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Wash and peel carrots",
      "Extract juice from carrots and amla",
      "Mix and add honey",
      "Drink fresh immediately"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "Use fresh ingredients",
      "Diabetics should avoid honey"
    ],
    benefits: [
      "Rich in Vitamin A",
      "Improves vision",
      "Antioxidant properties"
    ],
    related_diseases: ["weak-eyesight", "eye-strain"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-138",
    problem: "Weak Eyesight",
    title: "Triphala Eye Wash",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Soak triphala in water overnight",
      "Strain through fine cloth twice",
      "Use clear water to wash eyes",
      "Splash gently 3-4 times each eye"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "Strain very well to remove particles",
      "Use room temperature water",
      "Don't use if eyes are irritated"
    ],
    benefits: [
      "Cleanses eyes naturally",
      "Reduces strain",
      "Improves clarity"
    ],
    related_diseases: ["weak-eyesight", "eye-strain"],
    difficulty: "Medium",
    preparation_time: "Overnight soaking"
  },
  // Cracked Heels remedies
  {
    id: "remedy-139",
    problem: "Cracked Heels",
    title: "Coconut Oil and Lemon",
    ingredients: [
      { name: "Coconut oil", quantity: "2 tablespoons" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Soak feet in warm water for 15 minutes",
      "Scrub heels gently with pumice stone",
      "Mix coconut oil and lemon juice",
      "Apply to heels and massage",
      "Wear socks overnight"
    ],
    how_often: "Daily before bed",
    precautions: [
      "Avoid if skin is severely cracked or bleeding",
      "Lemon may sting on cuts"
    ],
    benefits: [
      "Deep moisturization",
      "Removes dead skin",
      "Softens heels"
    ],
    related_diseases: ["cracked-heels"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-140",
    problem: "Cracked Heels",
    title: "Banana Honey Mask",
    ingredients: [
      { name: "Ripe banana", quantity: "1" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Mash banana into smooth paste",
      "Add honey and mix well",
      "Apply thick layer on heels",
      "Leave for 20 minutes",
      "Rinse and moisturize"
    ],
    how_often: "3 times a week",
    precautions: [
      "Use overripe banana for best results",
      "Can be messy"
    ],
    benefits: [
      "Natural moisturizer",
      "Heals cracks",
      "Softens rough skin"
    ],
    related_diseases: ["cracked-heels"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  // Stomach Ache remedies
  {
    id: "remedy-stomach-ache-1",
    problem: "Stomach Ache",
    title: "Ajwain Water",
    ingredients: [
      { name: "Carom seeds (Ajwain)", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 glass" },
      { name: "Black salt", quantity: "A pinch" }
    ],
    method: [
      "Boil water with ajwain seeds for 5 minutes",
      "Strain the water",
      "Add a pinch of black salt",
      "Drink while warm"
    ],
    how_often: "2-3 times when experiencing stomach ache",
    precautions: [
      "Avoid excessive consumption",
      "Pregnant women should consult doctor"
    ],
    benefits: [
      "Relieves stomach cramps",
      "Improves digestion",
      "Reduces gas and bloating"
    ],
    related_diseases: ["stomach-ache", "bloating", "indigestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-stomach-ache-2",
    problem: "Stomach Ache",
    title: "Ginger and Lemon Drink",
    ingredients: [
      { name: "Fresh ginger juice", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract juice from fresh ginger",
      "Mix with lemon juice and warm water",
      "Add honey and stir well",
      "Drink slowly"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "May cause acidity in sensitive stomachs",
      "Avoid if ulcer is present"
    ],
    benefits: [
      "Soothes stomach lining",
      "Anti-inflammatory properties",
      "Aids digestion"
    ],
    related_diseases: ["stomach-ache", "nausea", "indigestion"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Diarrhea remedies
  {
    id: "remedy-diarrhea-1",
    problem: "Diarrhea",
    title: "Pomegranate Peel Tea",
    ingredients: [
      { name: "Dried pomegranate peel", quantity: "1 tablespoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Dry pomegranate peels in sun or oven",
      "Crush into small pieces",
      "Boil in water until reduced to half",
      "Strain and drink warm"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Ensure peels are properly cleaned",
      "Consult doctor if diarrhea persists"
    ],
    benefits: [
      "Natural astringent",
      "Controls loose motions",
      "Rich in tannins"
    ],
    related_diseases: ["diarrhea", "dysentery"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-diarrhea-2",
    problem: "Diarrhea",
    title: "Banana and Curd",
    ingredients: [
      { name: "Ripe banana", quantity: "1" },
      { name: "Fresh curd", quantity: "1 cup" }
    ],
    method: [
      "Mash ripe banana",
      "Mix with fresh curd",
      "Eat as meal replacement",
      "Can add a pinch of salt"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Use fresh homemade curd",
      "Avoid if lactose intolerant"
    ],
    benefits: [
      "Replenishes gut bacteria",
      "Provides potassium",
      "Easy to digest"
    ],
    related_diseases: ["diarrhea", "weakness"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Dehydration remedies
  {
    id: "remedy-dehydration-1",
    problem: "Dehydration",
    title: "Homemade ORS",
    ingredients: [
      { name: "Water", quantity: "1 liter" },
      { name: "Sugar", quantity: "6 teaspoons" },
      { name: "Salt", quantity: "Half teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Boil and cool the water",
      "Add sugar and salt",
      "Mix thoroughly until dissolved",
      "Add lemon juice for taste",
      "Sip throughout the day"
    ],
    how_often: "Continuous sipping throughout the day",
    precautions: [
      "Measure quantities accurately",
      "Use within 24 hours",
      "Seek medical help for severe dehydration"
    ],
    benefits: [
      "Replenishes electrolytes",
      "Prevents dehydration",
      "Restores energy"
    ],
    related_diseases: ["dehydration", "diarrhea", "fever"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Gas and Flatulence remedies
  {
    id: "remedy-gas-1",
    problem: "Gas",
    title: "Hing Water",
    ingredients: [
      { name: "Asafoetida (Hing)", quantity: "A small pinch" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Add a pinch of hing to warm water",
      "Stir well until dissolved",
      "Drink immediately"
    ],
    how_often: "After meals or when bloated",
    precautions: [
      "Use very small quantity - it's strong",
      "Not for pregnant women"
    ],
    benefits: [
      "Instant relief from gas",
      "Improves digestion",
      "Reduces bloating"
    ],
    related_diseases: ["gas", "bloating", "indigestion"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-gas-2",
    problem: "Gas",
    title: "Cumin and Ginger Tea",
    ingredients: [
      { name: "Cumin seeds", quantity: "1 teaspoon" },
      { name: "Ginger", quantity: "Half inch" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Crush cumin seeds lightly",
      "Grate ginger",
      "Boil in water for 5 minutes",
      "Strain and drink warm"
    ],
    how_often: "After heavy meals",
    precautions: [
      "May cause warmth in body"
    ],
    benefits: [
      "Aids digestion",
      "Expels trapped gas",
      "Prevents flatulence"
    ],
    related_diseases: ["gas", "bloating", "indigestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Worms remedies
  {
    id: "remedy-worms-1",
    problem: "Intestinal Worms",
    title: "Raw Garlic",
    ingredients: [
      { name: "Raw garlic cloves", quantity: "2-3" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Chew raw garlic on empty stomach",
      "Follow with warm water",
      "Continue for 5-7 days"
    ],
    how_often: "Daily in morning for 1 week",
    precautions: [
      "May cause bad breath",
      "Not for people with stomach ulcers",
      "May cause stomach burning"
    ],
    benefits: [
      "Natural antiparasitic",
      "Kills intestinal worms",
      "Boosts immunity"
    ],
    related_diseases: ["intestinal-worms", "stomach-ache"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-worms-2",
    problem: "Intestinal Worms",
    title: "Papaya Seeds",
    ingredients: [
      { name: "Papaya seeds", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Collect seeds from ripe papaya",
      "Dry and grind to powder",
      "Mix with honey",
      "Consume on empty stomach"
    ],
    how_often: "Daily for 5-7 days",
    precautions: [
      "Not for pregnant women",
      "May cause loose stools"
    ],
    benefits: [
      "Contains carpaine which kills worms",
      "Natural deworming agent",
      "Improves digestion"
    ],
    related_diseases: ["intestinal-worms"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Body Odor remedies
  {
    id: "remedy-body-odor-1",
    problem: "Body Odor",
    title: "Neem Leaf Bath",
    ingredients: [
      { name: "Fresh neem leaves", quantity: "20-25" },
      { name: "Water", quantity: "2 liters" }
    ],
    method: [
      "Boil neem leaves in water for 15 minutes",
      "Let it cool to lukewarm",
      "Add to bath water",
      "Bathe normally"
    ],
    how_often: "Daily bath",
    precautions: [
      "Avoid if skin is too dry"
    ],
    benefits: [
      "Antibacterial properties",
      "Kills odor-causing bacteria",
      "Natural deodorant"
    ],
    related_diseases: ["body-odor", "skin-infection"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-body-odor-2",
    problem: "Body Odor",
    title: "Apple Cider Vinegar Spray",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "2 tablespoons" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Mix apple cider vinegar with water",
      "Pour into spray bottle",
      "Spray on underarms after shower",
      "Let it dry naturally"
    ],
    how_often: "After every bath",
    precautions: [
      "May sting on cuts",
      "Do patch test first"
    ],
    benefits: [
      "Balances skin pH",
      "Kills bacteria",
      "Natural deodorizer"
    ],
    related_diseases: ["body-odor"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Common Cold remedies
  {
    id: "remedy-cold-1",
    problem: "Common Cold",
    title: "Kadha (Immunity Drink)",
    ingredients: [
      { name: "Tulsi leaves", quantity: "10-12" },
      { name: "Black pepper", quantity: "4-5" },
      { name: "Cloves", quantity: "2" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Cinnamon", quantity: "1 small stick" },
      { name: "Water", quantity: "2 cups" },
      { name: "Jaggery or honey", quantity: "To taste" }
    ],
    method: [
      "Crush all spices lightly",
      "Boil water with all ingredients except jaggery",
      "Simmer until reduced to half",
      "Strain and add jaggery or honey",
      "Drink warm"
    ],
    how_often: "2-3 times daily when having cold",
    precautions: [
      "Strong taste may not suit everyone",
      "Not for small children",
      "May cause body heat"
    ],
    benefits: [
      "Boosts immunity",
      "Clears congestion",
      "Fights viral infection"
    ],
    related_diseases: ["cold-cough", "fever", "sore-throat"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-cold-2",
    problem: "Common Cold",
    title: "Milk Turmeric Pepper",
    ingredients: [
      { name: "Milk", quantity: "1 glass" },
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Black pepper powder", quantity: "A pinch" },
      { name: "Ghee", quantity: "Half teaspoon" }
    ],
    method: [
      "Heat milk without boiling",
      "Add turmeric and black pepper",
      "Add ghee and mix well",
      "Drink warm before bed"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "May stain clothes",
      "Avoid if lactose intolerant"
    ],
    benefits: [
      "Natural antibiotic",
      "Soothes throat",
      "Promotes better sleep"
    ],
    related_diseases: ["cold-cough", "sore-throat"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Chest Congestion remedies
  {
    id: "remedy-congestion-1",
    problem: "Chest Congestion",
    title: "Eucalyptus Steam",
    ingredients: [
      { name: "Eucalyptus oil", quantity: "4-5 drops" },
      { name: "Hot water", quantity: "1 bowl" }
    ],
    method: [
      "Boil water and pour in a bowl",
      "Add eucalyptus oil drops",
      "Cover head with towel",
      "Inhale steam for 10-15 minutes",
      "Keep eyes closed"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Keep safe distance from hot water",
      "Not for asthma patients without doctor advice",
      "Keep eyes closed"
    ],
    benefits: [
      "Opens blocked airways",
      "Loosens mucus",
      "Provides instant relief"
    ],
    related_diseases: ["chest-congestion", "cold-cough", "sinusitis"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-congestion-2",
    problem: "Chest Congestion",
    title: "Mustard Oil Massage",
    ingredients: [
      { name: "Mustard oil", quantity: "2 tablespoons" },
      { name: "Camphor", quantity: "Small piece" },
      { name: "Garlic cloves", quantity: "2 crushed" }
    ],
    method: [
      "Warm mustard oil slightly",
      "Dissolve camphor in warm oil",
      "Add crushed garlic and heat briefly",
      "Massage on chest and back",
      "Cover with warm cloth"
    ],
    how_often: "Before bedtime",
    precautions: [
      "Test oil temperature before applying",
      "Do patch test first",
      "Avoid near face and eyes"
    ],
    benefits: [
      "Warming effect loosens congestion",
      "Improves blood circulation",
      "Provides overnight relief"
    ],
    related_diseases: ["chest-congestion", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Runny Nose remedies
  {
    id: "remedy-runny-nose-1",
    problem: "Runny Nose",
    title: "Saltwater Nasal Rinse",
    ingredients: [
      { name: "Warm water", quantity: "1 cup" },
      { name: "Salt", quantity: "Half teaspoon" },
      { name: "Baking soda", quantity: "A pinch" }
    ],
    method: [
      "Dissolve salt and baking soda in warm water",
      "Use a neti pot or clean dropper",
      "Tilt head and pour in one nostril",
      "Let it drain from other nostril",
      "Repeat on other side"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Use sterile or boiled water only",
      "Don't share neti pot",
      "Clean pot after each use"
    ],
    benefits: [
      "Clears nasal passage",
      "Removes allergens",
      "Reduces inflammation"
    ],
    related_diseases: ["runny-nose", "sinusitis", "allergies"],
    difficulty: "Medium",
    preparation_time: "5 minutes"
  },
  // Low Energy remedies
  {
    id: "remedy-energy-1",
    problem: "Low Energy",
    title: "Ashwagandha Milk",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add ashwagandha powder to warm milk",
      "Mix well until dissolved",
      "Add honey for taste",
      "Drink at night before bed"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "May cause drowsiness",
      "Not for pregnant women",
      "Consult doctor if on medications"
    ],
    benefits: [
      "Adaptogenic properties",
      "Reduces fatigue",
      "Improves stamina"
    ],
    related_diseases: ["fatigue", "weakness", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-energy-2",
    problem: "Low Energy",
    title: "Dates and Almond Shake",
    ingredients: [
      { name: "Dates (seedless)", quantity: "4-5" },
      { name: "Almonds (soaked)", quantity: "5-6" },
      { name: "Milk", quantity: "1 glass" },
      { name: "Cardamom powder", quantity: "A pinch" }
    ],
    method: [
      "Soak almonds overnight and peel",
      "Blend dates and almonds with milk",
      "Add cardamom powder",
      "Drink fresh"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "High in calories",
      "Diabetics should limit intake"
    ],
    benefits: [
      "Natural energy booster",
      "Rich in iron and vitamins",
      "Strengthens body"
    ],
    related_diseases: ["fatigue", "weakness", "anemia"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Hangover remedies
  {
    id: "remedy-hangover-1",
    problem: "Hangover",
    title: "Coconut Water with Lime",
    ingredients: [
      { name: "Fresh coconut water", quantity: "1 glass" },
      { name: "Lime juice", quantity: "1 tablespoon" },
      { name: "Salt", quantity: "A pinch" }
    ],
    method: [
      "Take fresh coconut water",
      "Add lime juice and salt",
      "Mix well and drink"
    ],
    how_often: "2-3 glasses throughout the day",
    precautions: [
      "Use fresh coconut water only"
    ],
    benefits: [
      "Rehydrates body",
      "Replenishes electrolytes",
      "Reduces nausea"
    ],
    related_diseases: ["hangover", "dehydration", "nausea"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-hangover-2",
    problem: "Hangover",
    title: "Ginger Lime Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Lemon juice", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Grate ginger and boil in water",
      "Strain and add lemon juice",
      "Add honey when warm",
      "Sip slowly"
    ],
    how_often: "2-3 times during hangover",
    precautions: [
      "May cause acidity"
    ],
    benefits: [
      "Settles stomach",
      "Reduces nausea",
      "Detoxifies liver"
    ],
    related_diseases: ["hangover", "nausea", "headache"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // Bruises remedies
  {
    id: "remedy-bruises-1",
    problem: "Bruises",
    title: "Turmeric Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 tablespoon" },
      { name: "Warm water or coconut oil", quantity: "As needed" }
    ],
    method: [
      "Make paste with turmeric and water/oil",
      "Apply on bruised area",
      "Cover with bandage",
      "Leave for 2-3 hours",
      "Rinse off"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Will stain skin temporarily",
      "Avoid on open wounds"
    ],
    benefits: [
      "Anti-inflammatory",
      "Speeds healing",
      "Reduces discoloration"
    ],
    related_diseases: ["bruises", "swelling"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Bee Sting remedies
  {
    id: "remedy-bee-sting-1",
    problem: "Bee Sting",
    title: "Baking Soda Paste",
    ingredients: [
      { name: "Baking soda", quantity: "1 tablespoon" },
      { name: "Water", quantity: "Few drops" }
    ],
    method: [
      "Remove stinger first if present",
      "Make thick paste with baking soda and water",
      "Apply on sting area",
      "Leave for 15-20 minutes",
      "Rinse with cool water"
    ],
    how_often: "Every few hours as needed",
    precautions: [
      "Seek emergency help if allergic reaction occurs",
      "Watch for swelling of throat or difficulty breathing"
    ],
    benefits: [
      "Neutralizes venom",
      "Reduces pain and swelling",
      "Provides cooling relief"
    ],
    related_diseases: ["bee-sting", "insect-bite"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // Burns (minor) remedies
  {
    id: "remedy-burns-1",
    problem: "Minor Burns",
    title: "Aloe Vera Gel",
    ingredients: [
      { name: "Fresh aloe vera leaf", quantity: "1" }
    ],
    method: [
      "Run burn under cool water first",
      "Cut aloe vera leaf and extract gel",
      "Apply fresh gel on burn",
      "Let it dry naturally",
      "Reapply as needed"
    ],
    how_often: "3-4 times daily",
    precautions: [
      "Only for minor burns",
      "Don't apply on open blisters",
      "Seek medical help for serious burns"
    ],
    benefits: [
      "Natural cooling effect",
      "Promotes healing",
      "Prevents scarring"
    ],
    related_diseases: ["minor-burns", "sunburn"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-burns-2",
    problem: "Minor Burns",
    title: "Honey Application",
    ingredients: [
      { name: "Raw honey", quantity: "As needed" }
    ],
    method: [
      "Cool burn under running water first",
      "Pat dry gently",
      "Apply thin layer of raw honey",
      "Cover with clean gauze",
      "Change dressing daily"
    ],
    how_often: "Once or twice daily",
    precautions: [
      "Only for minor burns",
      "Use raw, unprocessed honey",
      "Consult doctor for deep burns"
    ],
    benefits: [
      "Natural antibacterial",
      "Promotes tissue repair",
      "Reduces scarring"
    ],
    related_diseases: ["minor-burns"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  // Toothache additional remedy
  {
    id: "remedy-toothache-extra",
    problem: "Tooth Pain",
    title: "Salt Water Gargle",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Salt", quantity: "1 teaspoon" }
    ],
    method: [
      "Dissolve salt in warm water",
      "Take a mouthful and swish around affected area",
      "Gargle for 30 seconds",
      "Spit out and repeat"
    ],
    how_often: "Every 2-3 hours",
    precautions: [
      "Don't swallow the water",
      "See dentist if pain persists"
    ],
    benefits: [
      "Natural disinfectant",
      "Reduces inflammation",
      "Draws out infection"
    ],
    related_diseases: ["tooth-pain", "gum-infection"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  // ===== MONSOON SEASON REMEDIES =====
  {
    id: "remedy-monsoon-1",
    problem: "Monsoon Infections",
    title: "Tulsi Ginger Kadha",
    ingredients: [
      { name: "Tulsi leaves", quantity: "10-15" },
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Black pepper", quantity: "5-6" },
      { name: "Jaggery", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Crush tulsi leaves and ginger",
      "Boil water with all ingredients",
      "Simmer until reduced to 1 cup",
      "Strain and add jaggery",
      "Drink warm"
    ],
    how_often: "Once daily during monsoon",
    precautions: [
      "Pregnant women should consult doctor",
      "May cause acidity in some"
    ],
    benefits: [
      "Boosts immunity",
      "Prevents monsoon infections",
      "Clears respiratory tract"
    ],
    related_diseases: ["cold-cough", "monsoon-infections", "immunity"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-monsoon-2",
    problem: "Monsoon Infections",
    title: "Neem Water Bath",
    ingredients: [
      { name: "Fresh neem leaves", quantity: "2 handfuls" },
      { name: "Warm water", quantity: "1 bucket" }
    ],
    method: [
      "Boil neem leaves in water for 10 minutes",
      "Add this water to your bath water",
      "Take a normal bath",
      "Can also use neem water for final rinse"
    ],
    how_often: "2-3 times per week during monsoon",
    precautions: [
      "May dry out skin",
      "Use moisturizer after bath",
      "Avoid if allergic to neem"
    ],
    benefits: [
      "Prevents skin infections",
      "Antibacterial and antifungal",
      "Keeps skin healthy during humid weather"
    ],
    related_diseases: ["skin-disorders", "monsoon-infections"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-monsoon-3",
    problem: "Monsoon Infections",
    title: "Turmeric Lemon Water",
    ingredients: [
      { name: "Turmeric powder", quantity: "1/2 teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add turmeric to warm water",
      "Add lemon juice and honey",
      "Stir well",
      "Drink on empty stomach"
    ],
    how_often: "Daily in the morning during monsoon",
    precautions: [
      "May stain teeth temporarily",
      "Avoid if you have acidity issues"
    ],
    benefits: [
      "Boosts immunity naturally",
      "Detoxifies body",
      "Prevents water-borne infections"
    ],
    related_diseases: ["immunity", "monsoon-infections"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-monsoon-4",
    problem: "Fungal Infections",
    title: "Apple Cider Vinegar Foot Soak",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "1/2 cup" },
      { name: "Warm water", quantity: "1 tub" },
      { name: "Salt", quantity: "2 tablespoons" }
    ],
    method: [
      "Fill tub with warm water",
      "Add apple cider vinegar and salt",
      "Soak feet for 15-20 minutes",
      "Dry thoroughly after soaking",
      "Apply antifungal powder"
    ],
    how_often: "Daily until infection clears",
    precautions: [
      "Dry feet completely after soak",
      "Avoid if skin is cracked or wounded",
      "Don't share towels"
    ],
    benefits: [
      "Kills fungus naturally",
      "Prevents athlete's foot",
      "Relieves itching"
    ],
    related_diseases: ["fungal-infections", "monsoon-infections"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  {
    id: "remedy-monsoon-5",
    problem: "Waterborne Diseases",
    title: "Cumin Coriander Water",
    ingredients: [
      { name: "Cumin seeds", quantity: "1 teaspoon" },
      { name: "Coriander seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Boil water with cumin and coriander seeds",
      "Simmer for 5 minutes",
      "Strain and cool",
      "Drink throughout the day"
    ],
    how_often: "Daily during monsoon",
    precautions: [
      "Use fresh seeds for best results",
      "Can be stored for one day"
    ],
    benefits: [
      "Purifies digestive system",
      "Prevents stomach infections",
      "Aids digestion"
    ],
    related_diseases: ["waterborne-diseases", "digestive-issues"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // ===== WINTER SEASON REMEDIES =====
  {
    id: "remedy-winter-1",
    problem: "Winter Cold",
    title: "Dry Ginger Coffee (Sukku Coffee)",
    ingredients: [
      { name: "Dry ginger powder", quantity: "1/2 teaspoon" },
      { name: "Black pepper", quantity: "3-4 crushed" },
      { name: "Palm jaggery", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Boil water with dry ginger and pepper",
      "Simmer for 5 minutes",
      "Add jaggery and stir",
      "Strain and drink hot"
    ],
    how_often: "2-3 times daily during cold",
    precautions: [
      "May cause acidity in some",
      "Reduce pepper if too spicy"
    ],
    benefits: [
      "Warms the body from inside",
      "Relieves cold symptoms",
      "Clears throat congestion"
    ],
    related_diseases: ["cold-cough", "winter-cold"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-winter-2",
    problem: "Winter Cold",
    title: "Badam Pak (Almond Tonic)",
    ingredients: [
      { name: "Almonds", quantity: "10-12" },
      { name: "Milk", quantity: "1 glass" },
      { name: "Saffron strands", quantity: "4-5" },
      { name: "Cardamom powder", quantity: "A pinch" },
      { name: "Sugar/Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak almonds overnight and peel",
      "Grind almonds to paste with little milk",
      "Warm milk and add almond paste",
      "Add saffron and cardamom",
      "Sweeten as desired"
    ],
    how_often: "Once daily in winter mornings",
    precautions: [
      "Not for those with nut allergies",
      "Diabetics should avoid sugar"
    ],
    benefits: [
      "Provides warmth and energy",
      "Nourishes body and brain",
      "Strengthens immunity"
    ],
    related_diseases: ["winter-weakness", "immunity"],
    difficulty: "Medium",
    preparation_time: "15 minutes + overnight soaking"
  },
  {
    id: "remedy-winter-3",
    problem: "Dry Skin (Winter)",
    title: "Ghee and Turmeric Body Massage",
    ingredients: [
      { name: "Pure ghee", quantity: "2 tablespoons" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Warm ghee slightly",
      "Mix in turmeric powder",
      "Massage on dry areas (elbows, knees, heels)",
      "Leave for 30 minutes",
      "Bath with warm water"
    ],
    how_often: "2-3 times per week in winter",
    precautions: [
      "Turmeric may stain clothes",
      "Do patch test first",
      "Use old clothes during application"
    ],
    benefits: [
      "Deep moisturization",
      "Heals cracked skin",
      "Provides natural glow"
    ],
    related_diseases: ["dry-skin", "cracked-heels"],
    difficulty: "Easy",
    preparation_time: "35 minutes"
  },
  {
    id: "remedy-winter-4",
    problem: "Winter Joint Pain",
    title: "Ajwain Garlic Oil",
    ingredients: [
      { name: "Mustard oil", quantity: "1/4 cup" },
      { name: "Ajwain (Carom seeds)", quantity: "1 tablespoon" },
      { name: "Garlic cloves", quantity: "4-5" }
    ],
    method: [
      "Heat mustard oil in a pan",
      "Add crushed garlic and ajwain",
      "Cook until garlic turns brown",
      "Strain and cool slightly",
      "Massage on joints while warm"
    ],
    how_often: "Daily before bedtime in winter",
    precautions: [
      "Test temperature before applying",
      "Avoid on broken skin",
      "Cover with warm cloth after massage"
    ],
    benefits: [
      "Relieves joint stiffness",
      "Improves blood circulation",
      "Reduces winter joint pain"
    ],
    related_diseases: ["joint-pain", "arthritis"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-winter-5",
    problem: "Winter Immunity",
    title: "Chyawanprash Milk",
    ingredients: [
      { name: "Chyawanprash", quantity: "1 tablespoon" },
      { name: "Warm milk", quantity: "1 glass" }
    ],
    method: [
      "Warm milk to drinking temperature",
      "Add chyawanprash",
      "Stir well until dissolved",
      "Drink while warm"
    ],
    how_often: "Once daily in winter (morning or bedtime)",
    precautions: [
      "Check for allergies to ingredients",
      "Diabetics should check sugar content"
    ],
    benefits: [
      "Powerful immunity booster",
      "Keeps body warm",
      "Rich in Vitamin C and antioxidants"
    ],
    related_diseases: ["immunity", "winter-weakness"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-winter-6",
    problem: "Sore Throat (Winter)",
    title: "Mulethi Ginger Tea",
    ingredients: [
      { name: "Mulethi (Licorice root)", quantity: "1 small piece" },
      { name: "Fresh ginger", quantity: "1/2 inch" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Crush mulethi and ginger slightly",
      "Boil in water for 5-7 minutes",
      "Strain and add honey",
      "Sip slowly while warm"
    ],
    how_often: "2-3 times daily for sore throat",
    precautions: [
      "Avoid if you have high blood pressure",
      "Not for prolonged use",
      "Pregnant women should avoid"
    ],
    benefits: [
      "Soothes sore throat",
      "Natural expectorant",
      "Reduces inflammation"
    ],
    related_diseases: ["sore-throat", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // ===== SUMMER SEASON REMEDIES =====
  {
    id: "remedy-summer-1",
    problem: "Heat Stroke",
    title: "Raw Mango Drink (Aam Panna)",
    ingredients: [
      { name: "Raw mango", quantity: "1 medium" },
      { name: "Jaggery/Sugar", quantity: "4 tablespoons" },
      { name: "Cumin powder", quantity: "1/2 teaspoon" },
      { name: "Black salt", quantity: "1/4 teaspoon" },
      { name: "Mint leaves", quantity: "8-10" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Boil raw mango until soft",
      "Peel and extract pulp",
      "Blend with jaggery, cumin, salt, mint",
      "Add water to desired consistency",
      "Serve chilled"
    ],
    how_often: "1-2 times daily in summer",
    precautions: [
      "Diabetics should use less sugar",
      "Don't consume on empty stomach"
    ],
    benefits: [
      "Prevents heat stroke",
      "Replenishes electrolytes",
      "Cools body naturally"
    ],
    related_diseases: ["heat-stroke", "dehydration"],
    difficulty: "Medium",
    preparation_time: "30 minutes"
  },
  {
    id: "remedy-summer-2",
    problem: "Summer Heat",
    title: "Buttermilk (Chaas)",
    ingredients: [
      { name: "Fresh yogurt", quantity: "1/2 cup" },
      { name: "Cold water", quantity: "1 glass" },
      { name: "Roasted cumin powder", quantity: "1/4 teaspoon" },
      { name: "Rock salt", quantity: "A pinch" },
      { name: "Mint leaves", quantity: "5-6" }
    ],
    method: [
      "Blend yogurt with cold water until smooth",
      "Add cumin powder and salt",
      "Garnish with mint leaves",
      "Serve chilled"
    ],
    how_often: "After lunch daily in summer",
    precautions: [
      "Avoid if lactose intolerant",
      "Don't consume at night"
    ],
    benefits: [
      "Aids digestion",
      "Cools body naturally",
      "Prevents acidity"
    ],
    related_diseases: ["summer-heat", "acidity", "digestion"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-summer-3",
    problem: "Prickly Heat",
    title: "Sandalwood Rosewater Paste",
    ingredients: [
      { name: "Sandalwood powder", quantity: "2 tablespoons" },
      { name: "Rosewater", quantity: "As needed" },
      { name: "Camphor", quantity: "A tiny pinch (optional)" }
    ],
    method: [
      "Mix sandalwood powder with rosewater to make paste",
      "Add tiny bit of camphor if using",
      "Apply on affected areas",
      "Leave for 20 minutes",
      "Wash with cool water"
    ],
    how_often: "Once daily until prickly heat subsides",
    precautions: [
      "Do patch test first",
      "Use pure sandalwood only",
      "Avoid if allergic to any ingredient"
    ],
    benefits: [
      "Cools skin instantly",
      "Reduces itching and rash",
      "Antibacterial properties"
    ],
    related_diseases: ["prickly-heat", "heat-rash"],
    difficulty: "Easy",
    preparation_time: "25 minutes"
  },
  {
    id: "remedy-summer-4",
    problem: "Sunburn",
    title: "Cucumber Aloe Mask",
    ingredients: [
      { name: "Cucumber", quantity: "1/2 medium" },
      { name: "Aloe vera gel", quantity: "2 tablespoons" },
      { name: "Mint leaves", quantity: "5-6" }
    ],
    method: [
      "Blend cucumber and mint leaves",
      "Mix with fresh aloe vera gel",
      "Apply on sunburned areas",
      "Leave for 20 minutes",
      "Wash with cool water"
    ],
    how_often: "2-3 times daily for sunburn",
    precautions: [
      "Use fresh aloe vera",
      "Keep refrigerated mixture for extra cooling",
      "Avoid sun exposure while healing"
    ],
    benefits: [
      "Instant cooling relief",
      "Hydrates damaged skin",
      "Reduces redness and peeling"
    ],
    related_diseases: ["sunburn", "summer-skin"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-summer-5",
    problem: "Summer Dehydration",
    title: "Coconut Water with Lime",
    ingredients: [
      { name: "Fresh coconut water", quantity: "1 glass" },
      { name: "Lime juice", quantity: "1 teaspoon" },
      { name: "Pink salt", quantity: "A small pinch" }
    ],
    method: [
      "Take fresh coconut water",
      "Add lime juice and pink salt",
      "Stir well",
      "Drink chilled or at room temperature"
    ],
    how_often: "2-3 times daily in summer",
    precautions: [
      "Use fresh coconut water only",
      "Diabetics should monitor intake"
    ],
    benefits: [
      "Natural electrolyte replacement",
      "Prevents dehydration",
      "Cools body from inside"
    ],
    related_diseases: ["dehydration", "summer-heat"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-summer-6",
    problem: "Summer Fatigue",
    title: "Sattu Drink",
    ingredients: [
      { name: "Sattu (roasted gram flour)", quantity: "2 tablespoons" },
      { name: "Cold water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Black salt", quantity: "1/4 teaspoon" },
      { name: "Roasted cumin powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix sattu in cold water",
      "Add lemon juice, salt, and cumin",
      "Stir well until smooth",
      "Drink immediately"
    ],
    how_often: "Once or twice daily in summer",
    precautions: [
      "Don't store, consume fresh",
      "Avoid if you have digestive issues"
    ],
    benefits: [
      "Instant energy boost",
      "Cools body temperature",
      "High in protein and fiber"
    ],
    related_diseases: ["summer-fatigue", "low-energy"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },

  // ===== CHILDREN'S HEALTH REMEDIES =====
  {
    id: "remedy-children-1",
    problem: "Teething Pain (Children)",
    title: "Honey Gum Massage",
    ingredients: [
      { name: "Organic honey", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Wash your hands thoroughly",
      "Take a small amount of honey on finger",
      "Gently massage baby's gums",
      "Do for 1-2 minutes"
    ],
    how_often: "2-3 times daily during teething",
    precautions: [
      "ONLY for babies above 1 year (honey is unsafe for infants under 1)",
      "Use pure organic honey",
      "Consult pediatrician first"
    ],
    benefits: [
      "Natural pain relief",
      "Antibacterial properties",
      "Soothes irritated gums"
    ],
    related_diseases: ["teething-pain"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-children-2",
    problem: "Colic (Infants)",
    title: "Asafoetida Water (Hing Water)",
    ingredients: [
      { name: "Asafoetida (Hing)", quantity: "A tiny pinch" },
      { name: "Warm water", quantity: "2 teaspoons" }
    ],
    method: [
      "Dissolve tiny pinch of hing in warm water",
      "Cool to lukewarm",
      "Give 1-2 drops to baby",
      "Can also apply hing paste around navel"
    ],
    how_often: "Once or twice when colic occurs",
    precautions: [
      "Use very small amount only",
      "Consult pediatrician first",
      "Not for newborns under 3 months"
    ],
    benefits: [
      "Relieves gas and bloating",
      "Soothes stomach cramps",
      "Traditional colic remedy"
    ],
    related_diseases: ["colic", "gas-in-babies"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-3",
    problem: "Bed Wetting",
    title: "Banana and Amla",
    ingredients: [
      { name: "Ripe banana", quantity: "1 small" },
      { name: "Amla (Indian gooseberry) powder", quantity: "1/4 teaspoon" },
      { name: "Honey", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Mash ripe banana",
      "Mix in amla powder and honey",
      "Give to child in the evening",
      "Avoid excess fluids before bed"
    ],
    how_often: "Daily in evening for 2-3 months",
    precautions: [
      "For children above 3 years",
      "Rule out medical causes first",
      "Be patient - takes time to work"
    ],
    benefits: [
      "Strengthens bladder muscles",
      "Reduces nighttime urination",
      "Nutritious and tasty"
    ],
    related_diseases: ["bed-wetting", "enuresis"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-4",
    problem: "Loss of Appetite (Children)",
    title: "Ajwain Buttermilk",
    ingredients: [
      { name: "Buttermilk", quantity: "1/2 glass" },
      { name: "Ajwain (carom seeds)", quantity: "1/4 teaspoon" },
      { name: "Rock salt", quantity: "A pinch" }
    ],
    method: [
      "Roast ajwain slightly",
      "Add to buttermilk",
      "Add rock salt",
      "Give before meals"
    ],
    how_often: "Once daily before lunch",
    precautions: [
      "For children above 2 years",
      "Use fresh buttermilk",
      "Avoid if child has diarrhea"
    ],
    benefits: [
      "Stimulates appetite",
      "Improves digestion",
      "Treats stomach worms naturally"
    ],
    related_diseases: ["loss-of-appetite", "digestive-issues"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-5",
    problem: "Common Cold (Children)",
    title: "Tulsi Honey Drops",
    ingredients: [
      { name: "Fresh tulsi leaves", quantity: "5-6" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush tulsi leaves to extract juice",
      "Mix with honey",
      "Give in small amounts",
      "Can also add to warm water"
    ],
    how_often: "2-3 times daily during cold",
    precautions: [
      "Only for children above 1 year",
      "Use fresh tulsi only",
      "Watch for allergic reactions"
    ],
    benefits: [
      "Boosts immunity",
      "Relieves cold symptoms",
      "Natural and safe"
    ],
    related_diseases: ["cold-cough", "immunity"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-6",
    problem: "Stomach Worms (Children)",
    title: "Raw Papaya Seeds",
    ingredients: [
      { name: "Raw papaya seeds", quantity: "1/2 teaspoon (crushed)" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush fresh papaya seeds",
      "Mix with honey",
      "Give on empty stomach in morning",
      "Follow with a glass of warm water"
    ],
    how_often: "Once daily for 7 days",
    precautions: [
      "For children above 3 years",
      "Start with small dose",
      "Consult doctor if symptoms persist"
    ],
    benefits: [
      "Natural deworming agent",
      "Safe and effective",
      "Improves appetite after treatment"
    ],
    related_diseases: ["intestinal-worms", "stomach-worms"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-7",
    problem: "Diaper Rash",
    title: "Coconut Oil and Aloe",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "1 tablespoon" },
      { name: "Fresh aloe vera gel", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix coconut oil and aloe vera gel",
      "Clean and dry the affected area",
      "Apply thin layer of mixture",
      "Let it absorb before putting diaper"
    ],
    how_often: "With every diaper change",
    precautions: [
      "Keep area dry",
      "Use natural diapers if possible",
      "Consult doctor for severe rash"
    ],
    benefits: [
      "Soothes irritated skin",
      "Creates protective barrier",
      "Natural antibacterial"
    ],
    related_diseases: ["diaper-rash", "skin-irritation"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-children-8",
    problem: "Weak Immunity (Children)",
    title: "Badam Cashew Powder",
    ingredients: [
      { name: "Almonds", quantity: "10" },
      { name: "Cashews", quantity: "5" },
      { name: "Cardamom", quantity: "2 pods" },
      { name: "Saffron strands", quantity: "2-3" },
      { name: "Mishri (rock sugar)", quantity: "1 teaspoon" }
    ],
    method: [
      "Dry roast nuts slightly",
      "Grind all ingredients to fine powder",
      "Store in airtight container",
      "Mix 1 teaspoon with warm milk"
    ],
    how_often: "Once daily with milk",
    precautions: [
      "Check for nut allergies first",
      "For children above 2 years",
      "Store in cool, dry place"
    ],
    benefits: [
      "Strengthens immunity",
      "Improves brain development",
      "Provides essential nutrients"
    ],
    related_diseases: ["weak-immunity", "growth-support"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-children-9",
    problem: "Fever (Children)",
    title: "Tulsi Ginger Water",
    ingredients: [
      { name: "Fresh tulsi leaves", quantity: "8-10" },
      { name: "Fresh ginger", quantity: "1/2 inch" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Boil water with tulsi leaves and grated ginger",
      "Simmer for 5 minutes",
      "Strain and cool to lukewarm",
      "Add honey and give in small sips"
    ],
    how_often: "3-4 times daily during fever",
    precautions: [
      "Only for children above 1 year",
      "Seek medical help if fever exceeds 103°F",
      "Keep child hydrated"
    ],
    benefits: [
      "Natural fever reducer",
      "Boosts immunity",
      "Soothes throat and body ache"
    ],
    related_diseases: ["fever", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-children-10",
    problem: "Ear Infection (Children)",
    title: "Garlic Mullein Oil Drops",
    ingredients: [
      { name: "Garlic cloves", quantity: "2" },
      { name: "Sesame oil", quantity: "2 tablespoons" },
      { name: "Mullein flowers (optional)", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush garlic and heat in sesame oil on low flame",
      "Let it cool to lukewarm",
      "Strain through fine cloth",
      "Put 2-3 drops in affected ear",
      "Cover with cotton"
    ],
    how_often: "Twice daily for 3-5 days",
    precautions: [
      "Test temperature before use",
      "Don't use if eardrum is perforated",
      "Consult doctor for severe infections"
    ],
    benefits: [
      "Natural antibacterial",
      "Reduces ear pain",
      "Fights mild infections"
    ],
    related_diseases: ["ear-infection", "ear-pain"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-children-11",
    problem: "Brain Development (Children)",
    title: "Brahmi Ghee",
    ingredients: [
      { name: "Brahmi powder", quantity: "1/4 teaspoon" },
      { name: "Pure cow ghee", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix brahmi powder with warm ghee",
      "Add honey after cooling slightly",
      "Give to child after breakfast"
    ],
    how_often: "Once daily for 3 months",
    precautions: [
      "For children above 3 years",
      "Start with small dose",
      "Consult Ayurvedic doctor for dosage"
    ],
    benefits: [
      "Enhances memory and learning",
      "Improves concentration",
      "Supports brain development"
    ],
    related_diseases: ["memory", "concentration", "brain-development"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-12",
    problem: "Growth Support (Children)",
    title: "Ashwagandha Milk",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1/4 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Mishri (rock sugar)", quantity: "1/2 teaspoon" },
      { name: "Saffron strands", quantity: "2-3" }
    ],
    method: [
      "Warm the milk (don't boil)",
      "Add ashwagandha powder and mishri",
      "Add saffron strands",
      "Stir well and give at bedtime"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "For children above 5 years",
      "Use small dose for children",
      "Avoid if child has hyperactivity"
    ],
    benefits: [
      "Promotes healthy growth",
      "Builds strength and stamina",
      "Improves sleep quality"
    ],
    related_diseases: ["growth-support", "weakness", "underweight"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-13",
    problem: "Cough (Children)",
    title: "Honey Pepper Mixture",
    ingredients: [
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Black pepper powder", quantity: "A tiny pinch" },
      { name: "Turmeric powder", quantity: "A tiny pinch" }
    ],
    method: [
      "Mix all ingredients well",
      "Give small licks throughout the day",
      "Can be mixed in warm water"
    ],
    how_often: "3-4 times daily during cough",
    precautions: [
      "Only for children above 1 year",
      "Use very small amount of pepper",
      "Stop if causes stomach upset"
    ],
    benefits: [
      "Soothes throat",
      "Expectorant action",
      "Natural antibacterial"
    ],
    related_diseases: ["cough", "cold", "sore-throat"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-children-14",
    problem: "Constipation (Children)",
    title: "Fig and Raisin Water",
    ingredients: [
      { name: "Dried figs (Anjeer)", quantity: "2" },
      { name: "Raisins", quantity: "5-6" },
      { name: "Warm water", quantity: "1/2 glass" }
    ],
    method: [
      "Soak figs and raisins in warm water overnight",
      "In morning, mash them slightly",
      "Give the soaked fruits and water",
      "Can also blend for younger children"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "For children above 2 years",
      "Introduce gradually",
      "Ensure child drinks enough water"
    ],
    benefits: [
      "Natural laxative",
      "Rich in fiber",
      "Safe for regular use"
    ],
    related_diseases: ["constipation", "digestive-issues"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking"
  },
  {
    id: "remedy-children-15",
    problem: "Hyperactivity (Children)",
    title: "Shankhpushpi Syrup",
    ingredients: [
      { name: "Shankhpushpi syrup", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "2 tablespoons" }
    ],
    method: [
      "Mix shankhpushpi syrup in warm water",
      "Give after meals",
      "Can be given twice daily"
    ],
    how_often: "Twice daily after meals",
    precautions: [
      "For children above 3 years",
      "Buy from reputed brand",
      "Consult doctor for ADHD cases"
    ],
    benefits: [
      "Calms the mind",
      "Improves focus",
      "Reduces restlessness"
    ],
    related_diseases: ["hyperactivity", "adhd", "restlessness"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "remedy-children-16",
    problem: "Skin Rashes (Children)",
    title: "Neem Turmeric Paste",
    ingredients: [
      { name: "Neem leaves", quantity: "10-12 fresh" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Coconut oil", quantity: "1 teaspoon" }
    ],
    method: [
      "Grind neem leaves to paste",
      "Mix with turmeric and coconut oil",
      "Apply thin layer on affected area",
      "Leave for 15 minutes and wash"
    ],
    how_often: "Once or twice daily",
    precautions: [
      "Do patch test first",
      "Avoid near eyes",
      "Consult doctor for severe rashes"
    ],
    benefits: [
      "Natural antibacterial",
      "Reduces itching",
      "Heals skin quickly"
    ],
    related_diseases: ["skin-rash", "eczema", "allergies"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-children-17",
    problem: "Night Terrors (Children)",
    title: "Warm Milk with Nutmeg",
    ingredients: [
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Nutmeg powder", quantity: "A tiny pinch" },
      { name: "Honey", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Warm the milk (not too hot)",
      "Add a tiny pinch of nutmeg powder",
      "Add honey and stir well",
      "Give 30 minutes before bedtime"
    ],
    how_often: "Daily at bedtime",
    precautions: [
      "Use very small amount of nutmeg",
      "For children above 2 years",
      "Excess nutmeg can be harmful"
    ],
    benefits: [
      "Promotes peaceful sleep",
      "Calms nervous system",
      "Reduces anxiety"
    ],
    related_diseases: ["night-terrors", "insomnia", "anxiety"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-18",
    problem: "Vomiting (Children)",
    title: "Cardamom Honey Water",
    ingredients: [
      { name: "Cardamom powder", quantity: "A pinch" },
      { name: "Honey", quantity: "1/2 teaspoon" },
      { name: "Lukewarm water", quantity: "1/4 cup" }
    ],
    method: [
      "Mix cardamom powder in lukewarm water",
      "Add honey and stir",
      "Give in small sips",
      "Wait 15 minutes between sips"
    ],
    how_often: "Small sips every 15-20 minutes",
    precautions: [
      "Only for children above 1 year",
      "Seek doctor if vomiting persists",
      "Keep child hydrated"
    ],
    benefits: [
      "Settles stomach",
      "Prevents dehydration",
      "Natural antiemetic"
    ],
    related_diseases: ["vomiting", "nausea", "upset-stomach"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "remedy-children-19",
    problem: "Eye Infection (Children)",
    title: "Rose Water Eye Wash",
    ingredients: [
      { name: "Pure rose water", quantity: "2 tablespoons" },
      { name: "Distilled water", quantity: "2 tablespoons" },
      { name: "Clean cotton pads", quantity: "2" }
    ],
    method: [
      "Mix rose water with distilled water",
      "Soak cotton pad in mixture",
      "Gently clean eyes from inner to outer corner",
      "Use separate pad for each eye"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Use pure rose water only",
      "Don't reuse cotton pads",
      "Consult doctor for severe infections"
    ],
    benefits: [
      "Soothes irritated eyes",
      "Natural antiseptic",
      "Reduces redness"
    ],
    related_diseases: ["eye-infection", "conjunctivitis", "eye-irritation"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-20",
    problem: "Diarrhea (Children)",
    title: "Pomegranate Peel Water",
    ingredients: [
      { name: "Dried pomegranate peel", quantity: "1 teaspoon powder" },
      { name: "Water", quantity: "1 cup" },
      { name: "Rock salt", quantity: "A tiny pinch" }
    ],
    method: [
      "Boil pomegranate peel powder in water",
      "Reduce to half",
      "Strain and cool",
      "Add rock salt and give in small amounts"
    ],
    how_often: "2-3 times daily during diarrhea",
    precautions: [
      "For children above 2 years",
      "Give ORS for hydration",
      "Seek doctor if blood in stool"
    ],
    benefits: [
      "Natural astringent",
      "Stops loose motions",
      "Replenishes electrolytes"
    ],
    related_diseases: ["diarrhea", "loose-motions", "dysentery"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-children-21",
    problem: "Memory Enhancement (Children)",
    title: "Badam (Almond) Paste",
    ingredients: [
      { name: "Almonds", quantity: "5-6 soaked" },
      { name: "Milk", quantity: "1/2 glass" },
      { name: "Saffron", quantity: "2 strands" },
      { name: "Cardamom", quantity: "1 pod" },
      { name: "Mishri", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Soak almonds overnight and peel",
      "Grind with milk, saffron, and cardamom",
      "Add mishri and blend smooth",
      "Give in morning on empty stomach"
    ],
    how_often: "Daily in morning",
    precautions: [
      "Check for nut allergies",
      "For children above 3 years",
      "Can cause weight gain if excess"
    ],
    benefits: [
      "Sharpens memory",
      "Improves brain function",
      "Provides essential nutrients"
    ],
    related_diseases: ["memory", "concentration", "learning"],
    difficulty: "Medium",
    preparation_time: "Overnight soaking + 10 minutes"
  },
  {
    id: "remedy-children-22",
    problem: "Tonsillitis (Children)",
    title: "Turmeric Salt Gargle",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Rock salt", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix turmeric and salt in warm water",
      "Have child gargle (if old enough)",
      "Don't swallow the water",
      "Spit out after gargling"
    ],
    how_often: "3-4 times daily",
    precautions: [
      "For children above 5 years who can gargle",
      "Supervise younger children",
      "Consult doctor for recurring tonsillitis"
    ],
    benefits: [
      "Reduces throat inflammation",
      "Natural antibacterial",
      "Soothes pain"
    ],
    related_diseases: ["tonsillitis", "sore-throat", "throat-infection"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-23",
    problem: "Height Growth (Children)",
    title: "Shatavari Milk",
    ingredients: [
      { name: "Shatavari powder", quantity: "1/4 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Jaggery", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Add shatavari powder to warm milk",
      "Mix well until dissolved",
      "Add jaggery for taste",
      "Give at bedtime"
    ],
    how_often: "Daily at bedtime for 3-6 months",
    precautions: [
      "For children above 5 years",
      "Consult Ayurvedic doctor for dosage",
      "Combine with proper nutrition"
    ],
    benefits: [
      "Supports natural growth",
      "Strengthens bones",
      "Improves overall health"
    ],
    related_diseases: ["growth-support", "height-growth", "bone-health"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-children-24",
    problem: "Hiccups (Children)",
    title: "Sugar and Butter",
    ingredients: [
      { name: "Organic butter", quantity: "1/2 teaspoon" },
      { name: "Sugar", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix butter with sugar",
      "Give child to eat slowly",
      "Let it melt in mouth"
    ],
    how_often: "When hiccups occur",
    precautions: [
      "For children above 1 year",
      "Don't give too much",
      "Seek help if hiccups persist hours"
    ],
    benefits: [
      "Stops hiccups quickly",
      "Safe for children",
      "Pleasant taste"
    ],
    related_diseases: ["hiccups"],
    difficulty: "Easy",
    preparation_time: "1 minute"
  },

  // ===== WOMEN'S HEALTH REMEDIES =====
  {
    id: "remedy-women-1",
    problem: "PCOS",
    title: "Spearmint Tea",
    ingredients: [
      { name: "Fresh spearmint leaves", quantity: "10-12" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1/2 teaspoon (optional)" }
    ],
    method: [
      "Boil water",
      "Add fresh spearmint leaves",
      "Steep for 5-7 minutes",
      "Strain and add honey if desired",
      "Drink warm"
    ],
    how_often: "2 cups daily",
    precautions: [
      "May affect fertility treatments",
      "Consult doctor if on hormonal medications",
      "Continue medical treatment"
    ],
    benefits: [
      "Helps reduce androgen levels",
      "May improve hirsutism",
      "Supports hormonal balance"
    ],
    related_diseases: ["pcos", "hormonal-imbalance"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-women-2",
    problem: "PCOS",
    title: "Cinnamon Water",
    ingredients: [
      { name: "Ceylon cinnamon stick", quantity: "1 inch" },
      { name: "Water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak cinnamon stick in water overnight",
      "In morning, remove cinnamon",
      "Add lemon juice",
      "Drink on empty stomach"
    ],
    how_often: "Daily for 2-3 months",
    precautions: [
      "Use Ceylon cinnamon only",
      "May interact with diabetes medications",
      "Stop if any adverse reaction"
    ],
    benefits: [
      "Improves insulin sensitivity",
      "Helps regulate periods",
      "Supports weight management"
    ],
    related_diseases: ["pcos", "diabetes", "weight-management"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking"
  },
  {
    id: "remedy-women-3",
    problem: "Menstrual Cramps",
    title: "Ginger Jaggery Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Jaggery", quantity: "1 tablespoon" },
      { name: "Ajwain", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "1.5 cups" }
    ],
    method: [
      "Crush ginger slightly",
      "Boil water with ginger and ajwain",
      "Simmer for 5 minutes",
      "Add jaggery and stir",
      "Strain and drink warm"
    ],
    how_often: "2-3 times during menstruation",
    precautions: [
      "May increase blood flow slightly",
      "Avoid if you have heavy periods"
    ],
    benefits: [
      "Reduces menstrual pain",
      "Relaxes uterine muscles",
      "Improves blood circulation"
    ],
    related_diseases: ["menstrual-cramps", "dysmenorrhea"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-women-4",
    problem: "Heavy Periods",
    title: "Ashoka Bark Decoction",
    ingredients: [
      { name: "Ashoka bark powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Boil ashoka bark powder in water",
      "Reduce to half quantity",
      "Strain and cool slightly",
      "Add honey and drink"
    ],
    how_often: "Twice daily during periods",
    precautions: [
      "Not for pregnant women",
      "Consult Ayurvedic doctor for dosage",
      "Don't use with hormonal medications"
    ],
    benefits: [
      "Regulates menstrual flow",
      "Strengthens uterus",
      "Traditional women's tonic"
    ],
    related_diseases: ["heavy-periods", "menorrhagia"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-women-5",
    problem: "Pregnancy Nausea",
    title: "Dry Ginger Lemon Water",
    ingredients: [
      { name: "Dry ginger powder", quantity: "1/4 teaspoon" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1/2 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Add dry ginger to warm water",
      "Add lemon juice and honey",
      "Mix well",
      "Sip slowly in morning"
    ],
    how_often: "Once in morning or when nauseous",
    precautions: [
      "Use in moderation during pregnancy",
      "Avoid if you have heartburn",
      "Consult your OB-GYN"
    ],
    benefits: [
      "Relieves morning sickness",
      "Settles stomach naturally",
      "Safe in small amounts"
    ],
    related_diseases: ["pregnancy-nausea", "morning-sickness"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-women-6",
    problem: "Lactation Support",
    title: "Fenugreek Milk",
    ingredients: [
      { name: "Fenugreek seeds", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Jaggery", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak fenugreek seeds for 2 hours",
      "Grind to paste",
      "Mix with warm milk",
      "Add jaggery and drink"
    ],
    how_often: "Once or twice daily",
    precautions: [
      "May cause digestive issues initially",
      "Start with small amounts",
      "Consult lactation consultant"
    ],
    benefits: [
      "Natural galactagogue",
      "Increases breast milk supply",
      "Nutritious for nursing mothers"
    ],
    related_diseases: ["low-milk-supply", "lactation-support"],
    difficulty: "Easy",
    preparation_time: "10 minutes + soaking"
  },
  {
    id: "remedy-women-7",
    problem: "Menopause Symptoms",
    title: "Shatavari Milk",
    ingredients: [
      { name: "Shatavari powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add shatavari powder to warm milk",
      "Stir well until dissolved",
      "Add honey",
      "Drink at bedtime"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "Not for those with estrogen-sensitive conditions",
      "Consult doctor if on HRT",
      "May cause weight gain in some"
    ],
    benefits: [
      "Balances hormones naturally",
      "Reduces hot flashes",
      "Supports overall women's health"
    ],
    related_diseases: ["menopause", "hormonal-imbalance"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-women-8",
    problem: "Menopause Hot Flashes",
    title: "Sage Tea",
    ingredients: [
      { name: "Dried sage leaves", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Lemon slice", quantity: "1" }
    ],
    method: [
      "Boil water",
      "Add sage leaves and steep for 5 minutes",
      "Strain and add lemon slice",
      "Can be consumed hot or cold"
    ],
    how_often: "2-3 cups daily",
    precautions: [
      "Avoid during pregnancy",
      "May interact with some medications",
      "Don't use if epileptic"
    ],
    benefits: [
      "Reduces hot flashes",
      "Decreases night sweats",
      "Calms nervous system"
    ],
    related_diseases: ["hot-flashes", "menopause"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-women-9",
    problem: "Leucorrhea",
    title: "Fenugreek Seeds Wash",
    ingredients: [
      { name: "Fenugreek seeds", quantity: "2 tablespoons" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Soak fenugreek seeds in water overnight",
      "Boil in morning for 10 minutes",
      "Strain and cool",
      "Use as intimate wash"
    ],
    how_often: "Once daily",
    precautions: [
      "For external use only",
      "Consult gynecologist for persistent issues",
      "Maintain hygiene"
    ],
    benefits: [
      "Natural antifungal",
      "Reduces discharge",
      "Maintains pH balance"
    ],
    related_diseases: ["leucorrhea", "vaginal-discharge"],
    difficulty: "Easy",
    preparation_time: "15 minutes + overnight soaking"
  },
  {
    id: "remedy-women-10",
    problem: "Iron Deficiency (Women)",
    title: "Jaggery Sesame Ladoo",
    ingredients: [
      { name: "Sesame seeds (til)", quantity: "1 cup" },
      { name: "Jaggery", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "1 tablespoon" },
      { name: "Dry ginger powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Roast sesame seeds until golden",
      "Melt jaggery with ghee",
      "Mix sesame seeds and ginger powder",
      "Form small ladoos while warm",
      "Store in airtight container"
    ],
    how_often: "1-2 ladoos daily",
    precautions: [
      "High in calories",
      "Diabetics should limit intake",
      "Check for sesame allergy"
    ],
    benefits: [
      "Rich in iron and calcium",
      "Prevents anemia",
      "Good for bone health"
    ],
    related_diseases: ["anemia", "iron-deficiency"],
    difficulty: "Medium",
    preparation_time: "30 minutes"
  },
  {
    id: "remedy-women-11",
    problem: "Postpartum Care",
    title: "Ajwain Panjiri",
    ingredients: [
      { name: "Whole wheat flour", quantity: "1 cup" },
      { name: "Ghee", quantity: "4 tablespoons" },
      { name: "Ajwain", quantity: "1 teaspoon" },
      { name: "Dry ginger powder", quantity: "1/2 teaspoon" },
      { name: "Jaggery", quantity: "1/2 cup" },
      { name: "Mixed dry fruits", quantity: "1/4 cup chopped" }
    ],
    method: [
      "Roast wheat flour in ghee until brown",
      "Add ajwain and dry ginger",
      "Add crushed jaggery and mix",
      "Add dry fruits",
      "Store and consume daily"
    ],
    how_often: "2 tablespoons twice daily postpartum",
    precautions: [
      "High in calories - adjust quantity",
      "Ensure no nut allergies",
      "Good for first 40 days after delivery"
    ],
    benefits: [
      "Aids postpartum recovery",
      "Improves digestion",
      "Increases milk production"
    ],
    related_diseases: ["postpartum-care", "lactation-support"],
    difficulty: "Medium",
    preparation_time: "30 minutes"
  },
  {
    id: "remedy-women-12",
    problem: "UTI (Women)",
    title: "Coriander Seeds Water",
    ingredients: [
      { name: "Coriander seeds", quantity: "1 tablespoon" },
      { name: "Water", quantity: "2 cups" },
      { name: "Mishri (rock sugar)", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak coriander seeds in water overnight",
      "Boil in morning until reduced by half",
      "Strain and add mishri",
      "Drink lukewarm"
    ],
    how_often: "2-3 times daily during UTI",
    precautions: [
      "Complete antibiotic course if prescribed",
      "See doctor if fever develops",
      "Drink plenty of water"
    ],
    benefits: [
      "Natural diuretic",
      "Cooling effect on urinary tract",
      "Reduces burning sensation"
    ],
    related_diseases: ["uti", "urinary-infection"],
    difficulty: "Easy",
    preparation_time: "15 minutes + overnight soaking"
  },

  // ========== HEART HEALTH REMEDIES ==========
  {
    id: "remedy-heart-1",
    problem: "High Cholesterol",
    title: "Garlic-Honey Elixir",
    ingredients: [
      { name: "Garlic cloves", quantity: "2-3 crushed" },
      { name: "Raw honey", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush garlic and let sit for 10 minutes to activate allicin",
      "Mix with honey and lemon juice",
      "Consume on empty stomach in morning",
      "Follow with warm water after 30 minutes"
    ],
    how_often: "Daily for 3 months",
    precautions: [
      "Avoid if on blood thinners",
      "May cause heartburn in some",
      "Not for children under 5"
    ],
    benefits: [
      "Reduces LDL cholesterol",
      "Improves blood circulation",
      "Supports heart health"
    ],
    related_diseases: ["high-cholesterol", "heart-disease"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-heart-2",
    problem: "High Cholesterol",
    title: "Arjun Bark Tea",
    ingredients: [
      { name: "Arjun bark powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Cinnamon stick", quantity: "1 small" }
    ],
    method: [
      "Boil water with arjun bark and cinnamon",
      "Simmer for 10 minutes",
      "Strain and let cool slightly",
      "Drink while warm"
    ],
    how_often: "Twice daily before meals",
    precautions: [
      "Consult doctor if on heart medication",
      "Not during pregnancy",
      "May lower BP significantly"
    ],
    benefits: [
      "Strengthens heart muscle",
      "Reduces cholesterol",
      "Improves cardiac function"
    ],
    related_diseases: ["heart-disease", "high-cholesterol", "hypertension"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-heart-3",
    problem: "Poor Circulation",
    title: "Ginger-Cayenne Tonic",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch grated" },
      { name: "Cayenne pepper", quantity: "1/4 teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grate ginger and steep in warm water for 5 minutes",
      "Add cayenne pepper and stir well",
      "Add honey to taste",
      "Drink warm"
    ],
    how_often: "Once daily",
    precautions: [
      "Avoid if you have ulcers",
      "Start with less cayenne",
      "Not on empty stomach if sensitive"
    ],
    benefits: [
      "Improves blood circulation",
      "Warms extremities",
      "Boosts metabolism"
    ],
    related_diseases: ["poor-circulation", "cold-hands-feet"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // ========== LIVER HEALTH REMEDIES ==========
  {
    id: "remedy-liver-1",
    problem: "Fatty Liver",
    title: "Lemon-Turmeric Morning Detox",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 whole lemon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Black pepper", quantity: "1 pinch" }
    ],
    method: [
      "Squeeze fresh lemon into warm water",
      "Add turmeric and black pepper",
      "Mix well and drink immediately",
      "Wait 30 minutes before eating"
    ],
    how_often: "Every morning on empty stomach",
    precautions: [
      "Avoid if you have gallstones",
      "Use straw to protect tooth enamel",
      "Not for those with citrus allergy"
    ],
    benefits: [
      "Detoxifies liver",
      "Aids bile production",
      "Reduces fatty liver"
    ],
    related_diseases: ["fatty-liver", "liver-disease"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "remedy-liver-2",
    problem: "Liver Detox",
    title: "Papaya Seeds Remedy",
    ingredients: [
      { name: "Papaya seeds", quantity: "1 teaspoon dried" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Dry papaya seeds in sun or oven",
      "Grind to fine powder",
      "Mix with honey and lemon",
      "Consume on empty stomach"
    ],
    how_often: "Once daily for 2 weeks",
    precautions: [
      "Not during pregnancy",
      "Start with small quantity",
      "May have strong taste"
    ],
    benefits: [
      "Natural liver cleanser",
      "Anti-parasitic",
      "Improves digestion"
    ],
    related_diseases: ["liver-disease", "fatty-liver"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-liver-3",
    problem: "Jaundice Support",
    title: "Sugarcane-Lemon Juice",
    ingredients: [
      { name: "Fresh sugarcane juice", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Ginger juice", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Extract fresh sugarcane juice",
      "Add lemon and ginger juice",
      "Mix well and consume immediately",
      "Best consumed fresh"
    ],
    how_often: "2-3 times daily during recovery",
    precautions: [
      "Diabetics should consult doctor",
      "Ensure sugarcane is clean",
      "Continue medical treatment"
    ],
    benefits: [
      "Supports liver recovery",
      "Provides instant energy",
      "Natural detoxifier"
    ],
    related_diseases: ["jaundice", "liver-disease"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // ========== KIDNEY HEALTH REMEDIES ==========
  {
    id: "remedy-kidney-1",
    problem: "Kidney Stones",
    title: "Banana Stem Juice",
    ingredients: [
      { name: "Banana stem", quantity: "6 inches" },
      { name: "Water", quantity: "1/2 cup" },
      { name: "Cardamom powder", quantity: "1 pinch" }
    ],
    method: [
      "Extract juice from banana stem",
      "Add water and cardamom",
      "Blend and strain",
      "Drink fresh"
    ],
    how_often: "Once daily for 1 month",
    precautions: [
      "Consult doctor for large stones",
      "Stay hydrated",
      "Monitor stone size with ultrasound"
    ],
    benefits: [
      "Helps dissolve kidney stones",
      "Natural diuretic",
      "Prevents stone formation"
    ],
    related_diseases: ["kidney-stones", "kidney-disease"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-kidney-2",
    problem: "Kidney Health",
    title: "Coconut Water-Barley Drink",
    ingredients: [
      { name: "Tender coconut water", quantity: "1 glass" },
      { name: "Barley water", quantity: "1/2 cup" },
      { name: "Cumin powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Boil barley in water and strain",
      "Mix with fresh coconut water",
      "Add cumin powder",
      "Consume at room temperature"
    ],
    how_often: "Twice daily",
    precautions: [
      "Avoid if allergic to barley",
      "Best consumed fresh",
      "Monitor potassium if on dialysis"
    ],
    benefits: [
      "Flushes toxins",
      "Prevents kidney stones",
      "Cools the body"
    ],
    related_diseases: ["kidney-health", "kidney-stones"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },

  // ========== RESPIRATORY REMEDIES ==========
  {
    id: "remedy-respiratory-1",
    problem: "Bronchitis",
    title: "Onion-Honey Syrup",
    ingredients: [
      { name: "Onion", quantity: "1 medium sliced" },
      { name: "Raw honey", quantity: "4 tablespoons" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Layer onion slices in a jar",
      "Cover with honey and turmeric",
      "Let sit overnight",
      "Strain syrup and store in fridge"
    ],
    how_often: "1 tablespoon 3-4 times daily",
    precautions: [
      "Not for children under 1 year",
      "Diabetics monitor sugar intake",
      "Seek medical care for severe cases"
    ],
    benefits: [
      "Natural expectorant",
      "Soothes bronchial tubes",
      "Antimicrobial properties"
    ],
    related_diseases: ["bronchitis", "cough", "cold"],
    difficulty: "Easy",
    preparation_time: "5 minutes + overnight"
  },
  {
    id: "remedy-respiratory-2",
    problem: "Wheezing",
    title: "Black Pepper-Ghee Mix",
    ingredients: [
      { name: "Black pepper", quantity: "5-6 crushed" },
      { name: "Ghee", quantity: "1 tablespoon" },
      { name: "Jaggery", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm ghee slightly",
      "Mix in crushed black pepper",
      "Add jaggery and blend well",
      "Consume while warm"
    ],
    how_often: "Once daily",
    precautions: [
      "Not for those with ulcers",
      "May cause heat in body",
      "Continue prescribed inhalers"
    ],
    benefits: [
      "Opens airways",
      "Reduces wheezing",
      "Warms respiratory tract"
    ],
    related_diseases: ["wheezing", "asthma", "bronchitis"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-respiratory-3",
    problem: "Nasal Congestion",
    title: "Steam with Ajwain-Eucalyptus",
    ingredients: [
      { name: "Hot water", quantity: "1 large bowl" },
      { name: "Ajwain seeds", quantity: "1 tablespoon" },
      { name: "Eucalyptus oil", quantity: "3-4 drops" }
    ],
    method: [
      "Boil water and pour in bowl",
      "Add ajwain and eucalyptus oil",
      "Cover head with towel",
      "Inhale steam for 10 minutes"
    ],
    how_often: "2-3 times daily when congested",
    precautions: [
      "Keep safe distance from hot water",
      "Not for small children unsupervised",
      "Close eyes during steam"
    ],
    benefits: [
      "Clears nasal passages",
      "Kills airborne pathogens",
      "Relieves sinus pressure"
    ],
    related_diseases: ["nasal-congestion", "sinusitis", "cold"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },

  // ========== DIGESTIVE REMEDIES ==========
  {
    id: "remedy-digestive-1",
    problem: "IBS (Irritable Bowel)",
    title: "Fennel-Mint Digestive Tea",
    ingredients: [
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Fresh mint leaves", quantity: "8-10" },
      { name: "Water", quantity: "1.5 cups" },
      { name: "Honey", quantity: "1/2 teaspoon optional" }
    ],
    method: [
      "Boil water with fennel seeds for 5 minutes",
      "Add mint leaves and steep for 3 minutes",
      "Strain and add honey if desired",
      "Drink warm after meals"
    ],
    how_often: "After each meal",
    precautions: [
      "Avoid if allergic to fennel",
      "Not during pregnancy in large amounts",
      "May cause drowsiness in some"
    ],
    benefits: [
      "Reduces bloating and gas",
      "Calms intestinal spasms",
      "Improves digestion"
    ],
    related_diseases: ["ibs", "bloating", "indigestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-digestive-2",
    problem: "Food Poisoning",
    title: "Ginger-Apple Cider Vinegar Remedy",
    ingredients: [
      { name: "Fresh ginger juice", quantity: "1 teaspoon" },
      { name: "Apple cider vinegar", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix all ingredients in warm water",
      "Stir well until combined",
      "Sip slowly over 15 minutes",
      "Rest after consuming"
    ],
    how_often: "Every 2-3 hours until better",
    precautions: [
      "Seek medical help for severe cases",
      "Stay hydrated with ORS",
      "Avoid solid foods initially"
    ],
    benefits: [
      "Kills harmful bacteria",
      "Settles stomach",
      "Reduces nausea"
    ],
    related_diseases: ["food-poisoning", "stomach-infection"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-digestive-3",
    problem: "Ulcerative Colitis Support",
    title: "Aloe Vera-Pomegranate Juice",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "2 tablespoons" },
      { name: "Pomegranate juice", quantity: "1 cup" },
      { name: "Cumin powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Extract fresh aloe vera gel",
      "Blend with pomegranate juice",
      "Add cumin powder and mix",
      "Consume fresh on empty stomach"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "Ensure aloe vera is food-grade",
      "Continue prescribed medications",
      "Avoid during flare-ups initially"
    ],
    benefits: [
      "Soothes intestinal lining",
      "Reduces inflammation",
      "Promotes healing"
    ],
    related_diseases: ["ulcerative-colitis", "ibd"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // ========== BONE & JOINT REMEDIES ==========
  {
    id: "remedy-bone-1",
    problem: "Osteoporosis",
    title: "Sesame-Jaggery Calcium Balls",
    ingredients: [
      { name: "White sesame seeds", quantity: "1 cup" },
      { name: "Jaggery", quantity: "1/2 cup" },
      { name: "Ghee", quantity: "2 tablespoons" },
      { name: "Dry coconut shredded", quantity: "2 tablespoons" }
    ],
    method: [
      "Dry roast sesame seeds until golden",
      "Melt jaggery with ghee until smooth",
      "Mix sesame and coconut into jaggery",
      "Form small balls while warm"
    ],
    how_often: "2 balls daily",
    precautions: [
      "Diabetics limit intake",
      "High in calories",
      "Store in airtight container"
    ],
    benefits: [
      "Very high in calcium",
      "Strengthens bones",
      "Prevents osteoporosis"
    ],
    related_diseases: ["osteoporosis", "weak-bones"],
    difficulty: "Medium",
    preparation_time: "25 minutes"
  },
  {
    id: "remedy-bone-2",
    problem: "Gout",
    title: "Cherry-Celery Juice",
    ingredients: [
      { name: "Tart cherries", quantity: "1 cup" },
      { name: "Celery stalks", quantity: "2" },
      { name: "Water", quantity: "1/2 cup" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Blend cherries and celery with water",
      "Strain if desired",
      "Add lemon juice",
      "Drink fresh"
    ],
    how_often: "Once daily during flare-ups",
    precautions: [
      "Monitor with uric acid tests",
      "Avoid if diabetic (high sugar)",
      "Continue prescribed medications"
    ],
    benefits: [
      "Reduces uric acid",
      "Anti-inflammatory",
      "Relieves gout pain"
    ],
    related_diseases: ["gout", "high-uric-acid"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-bone-3",
    problem: "Sciatica",
    title: "Garlic-Mustard Oil Massage",
    ingredients: [
      { name: "Mustard oil", quantity: "1/4 cup" },
      { name: "Garlic cloves", quantity: "6-8" },
      { name: "Carom seeds (ajwain)", quantity: "1 teaspoon" }
    ],
    method: [
      "Heat mustard oil with crushed garlic",
      "Add carom seeds and cook until garlic browns",
      "Strain and let cool to warm temperature",
      "Massage along the sciatic nerve path"
    ],
    how_often: "Daily massage at night",
    precautions: [
      "Test on small area first",
      "Avoid if skin is broken",
      "Keep area warm after massage"
    ],
    benefits: [
      "Reduces nerve inflammation",
      "Improves blood flow",
      "Relieves sciatic pain"
    ],
    related_diseases: ["sciatica", "back-pain", "nerve-pain"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },

  // ========== SKIN HEALTH REMEDIES ==========
  {
    id: "remedy-skin-1",
    problem: "Eczema",
    title: "Neem-Coconut Healing Paste",
    ingredients: [
      { name: "Fresh neem leaves", quantity: "1 cup" },
      { name: "Coconut oil", quantity: "3 tablespoons" },
      { name: "Turmeric powder", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Grind neem leaves to paste",
      "Warm coconut oil slightly",
      "Mix all ingredients well",
      "Apply on affected areas"
    ],
    how_often: "Twice daily",
    precautions: [
      "Patch test first",
      "May stain clothes",
      "Consult dermatologist for severe cases"
    ],
    benefits: [
      "Antibacterial and antifungal",
      "Reduces itching",
      "Heals skin naturally"
    ],
    related_diseases: ["eczema", "skin-rash", "dermatitis"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-skin-2",
    problem: "Psoriasis",
    title: "Oatmeal-Aloe Bath",
    ingredients: [
      { name: "Oatmeal (colloidal)", quantity: "1 cup" },
      { name: "Fresh aloe vera gel", quantity: "1/4 cup" },
      { name: "Chamomile tea bags", quantity: "2" }
    ],
    method: [
      "Brew chamomile tea in warm bath water",
      "Add colloidal oatmeal and stir",
      "Add aloe vera gel",
      "Soak for 20-30 minutes"
    ],
    how_often: "3-4 times per week",
    precautions: [
      "Ensure bath is lukewarm not hot",
      "Pat dry gently",
      "Moisturize immediately after"
    ],
    benefits: [
      "Soothes inflamed skin",
      "Reduces scaling",
      "Moisturizes deeply"
    ],
    related_diseases: ["psoriasis", "dry-skin", "skin-inflammation"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-skin-3",
    problem: "Vitiligo Support",
    title: "Radish Seeds Paste",
    ingredients: [
      { name: "Radish seeds", quantity: "2 tablespoons" },
      { name: "Apple cider vinegar", quantity: "To make paste" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Soak radish seeds overnight",
      "Grind to smooth paste with vinegar",
      "Add turmeric and mix",
      "Apply on affected patches"
    ],
    how_often: "Once daily, leave for 2 hours",
    precautions: [
      "Results may vary",
      "Consult dermatologist",
      "Protect from sun exposure"
    ],
    benefits: [
      "May stimulate melanin",
      "Traditional remedy for vitiligo",
      "Natural approach"
    ],
    related_diseases: ["vitiligo", "skin-pigmentation"],
    difficulty: "Medium",
    preparation_time: "20 minutes + overnight"
  },

  // ========== MENTAL HEALTH REMEDIES ==========
  {
    id: "remedy-mental-1",
    problem: "Depression Support",
    title: "Saffron-Milk Mood Booster",
    ingredients: [
      { name: "Saffron strands", quantity: "4-5 strands" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Cardamom powder", quantity: "1 pinch" }
    ],
    method: [
      "Soak saffron in 1 tbsp warm milk for 5 minutes",
      "Heat remaining milk and add saffron",
      "Add cardamom and honey",
      "Drink warm at bedtime"
    ],
    how_often: "Daily at night",
    precautions: [
      "Not a substitute for professional help",
      "Avoid during pregnancy in excess",
      "Use genuine saffron only"
    ],
    benefits: [
      "Natural mood enhancer",
      "Promotes restful sleep",
      "Reduces mild depression"
    ],
    related_diseases: ["depression", "anxiety", "mood-disorders"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-mental-2",
    problem: "Panic Attacks",
    title: "Brahmi-Shankhpushpi Calming Tea",
    ingredients: [
      { name: "Brahmi powder", quantity: "1/2 teaspoon" },
      { name: "Shankhpushpi powder", quantity: "1/2 teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix both powders in warm water",
      "Stir well until dissolved",
      "Add honey",
      "Drink during stressful times"
    ],
    how_often: "1-2 times daily",
    precautions: [
      "Consult mental health professional",
      "May cause drowsiness",
      "Not during pregnancy"
    ],
    benefits: [
      "Calms nervous system",
      "Reduces anxiety",
      "Improves mental clarity"
    ],
    related_diseases: ["panic-attacks", "anxiety", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-mental-3",
    problem: "Focus & Concentration",
    title: "Brahmi-Almond Brain Tonic",
    ingredients: [
      { name: "Almonds soaked overnight", quantity: "5-6" },
      { name: "Brahmi powder", quantity: "1/2 teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Mishri (rock sugar)", quantity: "1 teaspoon" }
    ],
    method: [
      "Peel and grind soaked almonds",
      "Add to warm milk with brahmi",
      "Mix in mishri",
      "Drink in morning"
    ],
    how_often: "Daily in morning",
    precautions: [
      "Nut allergy caution",
      "Best on empty stomach",
      "Give 30 minutes before breakfast"
    ],
    benefits: [
      "Enhances concentration",
      "Improves memory",
      "Brain nourishment"
    ],
    related_diseases: ["memory-issues", "concentration-problems"],
    difficulty: "Easy",
    preparation_time: "10 minutes + overnight soaking"
  },

  // ========== EYE HEALTH REMEDIES ==========
  {
    id: "remedy-eye-1",
    problem: "Weak Eyesight",
    title: "Triphala Eye Wash",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Filtered water", quantity: "1 cup" },
      { name: "Rose water", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak triphala in water overnight",
      "Strain through fine cloth multiple times",
      "Add rose water to clear liquid",
      "Use as eye wash with eye cup"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "Ensure liquid is completely clear",
      "Use clean eye cup",
      "Stop if irritation occurs"
    ],
    benefits: [
      "Strengthens eye muscles",
      "Cleanses and refreshes eyes",
      "Improves vision over time"
    ],
    related_diseases: ["weak-eyesight", "eye-strain"],
    difficulty: "Medium",
    preparation_time: "5 minutes + overnight soaking"
  },
  {
    id: "remedy-eye-2",
    problem: "Computer Eye Strain",
    title: "Cucumber-Rose Water Compress",
    ingredients: [
      { name: "Cucumber slices", quantity: "4 thin slices" },
      { name: "Rose water", quantity: "2 tablespoons" },
      { name: "Cotton pads", quantity: "2" }
    ],
    method: [
      "Refrigerate cucumber slices for 15 minutes",
      "Soak cotton pads in rose water",
      "Place cucumber on closed eyes",
      "Relax for 15-20 minutes"
    ],
    how_often: "After prolonged screen time",
    precautions: [
      "Take regular screen breaks",
      "Ensure clean cucumber",
      "Remove contact lenses first"
    ],
    benefits: [
      "Reduces eye fatigue",
      "Cools and refreshes eyes",
      "Reduces puffiness"
    ],
    related_diseases: ["eye-strain", "digital-eye-strain"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-eye-3",
    problem: "Night Blindness",
    title: "Carrot-Ghee Vision Booster",
    ingredients: [
      { name: "Carrot juice", quantity: "1 cup fresh" },
      { name: "Ghee", quantity: "1 teaspoon" },
      { name: "Black pepper", quantity: "1 pinch" }
    ],
    method: [
      "Extract fresh carrot juice",
      "Warm ghee slightly",
      "Add ghee and pepper to juice",
      "Mix well and drink immediately"
    ],
    how_often: "Once daily",
    precautions: [
      "Use fresh organic carrots",
      "May cause slight skin yellowing if excessive",
      "Continue for 3 months"
    ],
    benefits: [
      "Rich in Vitamin A",
      "Improves night vision",
      "Nourishes eyes"
    ],
    related_diseases: ["night-blindness", "weak-eyesight"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // ========== ORAL HEALTH REMEDIES ==========
  {
    id: "remedy-oral-1",
    problem: "Gum Disease",
    title: "Neem-Salt Gum Massage",
    ingredients: [
      { name: "Neem bark powder", quantity: "1/2 teaspoon" },
      { name: "Rock salt", quantity: "1/4 teaspoon" },
      { name: "Mustard oil", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix neem powder and salt",
      "Add mustard oil to form paste",
      "Massage gently on gums",
      "Leave for 5 minutes and rinse"
    ],
    how_often: "Twice daily",
    precautions: [
      "Gentle massage only",
      "Rinse thoroughly",
      "See dentist for severe cases"
    ],
    benefits: [
      "Antibacterial action",
      "Strengthens gums",
      "Reduces bleeding"
    ],
    related_diseases: ["gum-disease", "gingivitis"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-oral-2",
    problem: "Tooth Sensitivity",
    title: "Clove-Sesame Oil Treatment",
    ingredients: [
      { name: "Clove oil", quantity: "3-4 drops" },
      { name: "Sesame oil", quantity: "1 tablespoon" },
      { name: "Salt", quantity: "1 pinch" }
    ],
    method: [
      "Mix clove oil with sesame oil",
      "Add pinch of salt",
      "Swish in mouth for 3-5 minutes",
      "Spit out and rinse"
    ],
    how_often: "Once daily",
    precautions: [
      "Don't swallow",
      "Too much clove can be numbing",
      "See dentist if persistent"
    ],
    benefits: [
      "Reduces sensitivity",
      "Natural analgesic",
      "Strengthens enamel"
    ],
    related_diseases: ["tooth-sensitivity", "dental-pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },

  // ========== HAIR HEALTH REMEDIES ==========
  {
    id: "remedy-hair-1",
    problem: "Premature Greying",
    title: "Curry Leaves-Coconut Oil",
    ingredients: [
      { name: "Fresh curry leaves", quantity: "15-20" },
      { name: "Coconut oil", quantity: "1/2 cup" },
      { name: "Amla powder", quantity: "1 tablespoon" }
    ],
    method: [
      "Heat coconut oil with curry leaves until leaves turn black",
      "Add amla powder and stir",
      "Cool and strain",
      "Apply to scalp and hair"
    ],
    how_often: "3 times per week",
    precautions: [
      "Results take 3-6 months",
      "May darken pillow covers",
      "Store in dark bottle"
    ],
    benefits: [
      "Slows greying process",
      "Nourishes hair follicles",
      "Promotes melanin production"
    ],
    related_diseases: ["premature-greying", "grey-hair"],
    difficulty: "Medium",
    preparation_time: "30 minutes"
  },
  {
    id: "remedy-hair-2",
    problem: "Dry & Frizzy Hair",
    title: "Banana-Honey Hair Mask",
    ingredients: [
      { name: "Ripe banana", quantity: "1" },
      { name: "Honey", quantity: "2 tablespoons" },
      { name: "Olive oil", quantity: "1 tablespoon" },
      { name: "Yogurt", quantity: "2 tablespoons" }
    ],
    method: [
      "Mash banana until no lumps remain",
      "Mix in honey, olive oil, and yogurt",
      "Apply to damp hair from roots to tips",
      "Cover with shower cap for 30 minutes"
    ],
    how_often: "Once weekly",
    precautions: [
      "Rinse thoroughly to avoid residue",
      "Use ripe banana only",
      "May need two shampoos to remove"
    ],
    benefits: [
      "Deep conditioning",
      "Tames frizz",
      "Adds natural shine"
    ],
    related_diseases: ["dry-hair", "frizzy-hair"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-hair-3",
    problem: "Scalp Infection",
    title: "Tea Tree-Neem Scalp Treatment",
    ingredients: [
      { name: "Neem oil", quantity: "2 tablespoons" },
      { name: "Tea tree oil", quantity: "5 drops" },
      { name: "Coconut oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Mix all oils together",
      "Part hair and apply to scalp sections",
      "Massage gently for 5 minutes",
      "Leave overnight or minimum 2 hours"
    ],
    how_often: "3 times per week until healed",
    precautions: [
      "Patch test for sensitivity",
      "Avoid eyes",
      "See doctor if infection persists"
    ],
    benefits: [
      "Antifungal and antibacterial",
      "Heals scalp infections",
      "Reduces dandruff"
    ],
    related_diseases: ["scalp-infection", "dandruff", "fungal-infection"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },

  // ========== HORMONAL REMEDIES ==========
  {
    id: "remedy-hormone-1",
    problem: "Hypothyroidism Support",
    title: "Ashwagandha-Ginger Thyroid Tonic",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1/2 teaspoon" },
      { name: "Dried ginger powder", quantity: "1/4 teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add ashwagandha and ginger to warm water",
      "Stir well until dissolved",
      "Add honey after water cools slightly",
      "Drink in morning or evening"
    ],
    how_often: "Once or twice daily",
    precautions: [
      "Consult doctor if on thyroid medication",
      "Not during pregnancy",
      "Monitor thyroid levels regularly"
    ],
    benefits: [
      "Supports thyroid function",
      "Reduces fatigue",
      "Balances hormones"
    ],
    related_diseases: ["hypothyroidism", "thyroid-disorder"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-hormone-2",
    problem: "Hyperthyroidism Support",
    title: "Bugleweed-Lemon Balm Tea",
    ingredients: [
      { name: "Dried lemon balm", quantity: "1 teaspoon" },
      { name: "Motherwort herb", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "1.5 cups" }
    ],
    method: [
      "Boil water and pour over herbs",
      "Steep covered for 10 minutes",
      "Strain and let cool slightly",
      "Drink warm"
    ],
    how_often: "2-3 times daily",
    precautions: [
      "Not a replacement for medication",
      "Consult endocrinologist",
      "May interact with thyroid drugs"
    ],
    benefits: [
      "Calms overactive thyroid",
      "Reduces palpitations",
      "Promotes relaxation"
    ],
    related_diseases: ["hyperthyroidism", "thyroid-disorder"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },

  // ========== IMMUNITY BOOSTERS ==========
  {
    id: "remedy-immunity-1",
    problem: "Weak Immunity",
    title: "Chyawanprash-Style Energy Balls",
    ingredients: [
      { name: "Dates pitted", quantity: "1 cup" },
      { name: "Amla powder", quantity: "2 tablespoons" },
      { name: "Ashwagandha powder", quantity: "1 teaspoon" },
      { name: "Ghee", quantity: "1 tablespoon" },
      { name: "Cardamom powder", quantity: "1/4 teaspoon" },
      { name: "Desiccated coconut", quantity: "For coating" }
    ],
    method: [
      "Blend dates until smooth paste",
      "Mix in all powders and ghee",
      "Roll into small balls",
      "Coat with desiccated coconut"
    ],
    how_often: "1-2 balls daily",
    precautions: [
      "Diabetics limit intake",
      "Store in refrigerator",
      "Good for children too"
    ],
    benefits: [
      "Builds immunity naturally",
      "Provides sustained energy",
      "Rich in antioxidants"
    ],
    related_diseases: ["weak-immunity", "frequent-infections"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-immunity-2",
    problem: "Frequent Infections",
    title: "Giloy-Tulsi Immunity Kadha",
    ingredients: [
      { name: "Giloy stem", quantity: "4-5 inches" },
      { name: "Fresh tulsi leaves", quantity: "10-12" },
      { name: "Black pepper", quantity: "4-5" },
      { name: "Dry ginger", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "2 cups" },
      { name: "Jaggery", quantity: "1 tablespoon" }
    ],
    method: [
      "Crush giloy stem lightly",
      "Boil all ingredients except jaggery until reduced by half",
      "Strain and add jaggery",
      "Drink warm"
    ],
    how_often: "Once daily for 2 weeks",
    precautions: [
      "Avoid if autoimmune condition",
      "Not during pregnancy",
      "Consult if on immunosuppressants"
    ],
    benefits: [
      "Powerful immunomodulator",
      "Fights infections",
      "Purifies blood"
    ],
    related_diseases: ["weak-immunity", "frequent-infections", "viral-infections"],
    difficulty: "Medium",
    preparation_time: "25 minutes"
  },

  // ========== PAIN RELIEF REMEDIES ==========
  {
    id: "remedy-pain-1",
    problem: "Chronic Headache",
    title: "Brahmi-Peppermint Head Massage Oil",
    ingredients: [
      { name: "Coconut oil", quantity: "1/4 cup" },
      { name: "Brahmi powder", quantity: "1 tablespoon" },
      { name: "Peppermint oil", quantity: "5 drops" }
    ],
    method: [
      "Heat coconut oil with brahmi powder on low",
      "Strain after 10 minutes",
      "Add peppermint oil when cool",
      "Massage on scalp and temples"
    ],
    how_often: "During headache or preventively at night",
    precautions: [
      "Avoid eyes",
      "Not for migraine with aura",
      "See doctor for persistent headaches"
    ],
    benefits: [
      "Relieves tension headaches",
      "Cooling sensation",
      "Calms mind"
    ],
    related_diseases: ["headache", "tension-headache"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-pain-2",
    problem: "Fibromyalgia Support",
    title: "Epsom Salt-Turmeric Bath",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Turmeric powder", quantity: "1 tablespoon" },
      { name: "Lavender oil", quantity: "10 drops" },
      { name: "Ginger powder", quantity: "1 teaspoon" }
    ],
    method: [
      "Fill bathtub with warm water",
      "Add Epsom salt and dissolve",
      "Mix in turmeric, ginger, and lavender oil",
      "Soak for 20-30 minutes"
    ],
    how_often: "3-4 times per week",
    precautions: [
      "May stain tub - rinse immediately after",
      "Drink water before and after",
      "Not if you have open wounds"
    ],
    benefits: [
      "Reduces muscle pain",
      "Magnesium absorption",
      "Decreases inflammation"
    ],
    related_diseases: ["fibromyalgia", "chronic-pain", "muscle-pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // ========== BLOOD SUGAR REMEDIES ==========
  {
    id: "remedy-sugar-1",
    problem: "Pre-Diabetes",
    title: "Cinnamon-Fenugreek Water",
    ingredients: [
      { name: "Fenugreek seeds", quantity: "1 tablespoon" },
      { name: "Cinnamon stick", quantity: "1 inch" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Soak fenugreek and cinnamon in water overnight",
      "In morning, boil for 5 minutes",
      "Strain and drink warm",
      "Eat the softened fenugreek seeds"
    ],
    how_often: "Every morning on empty stomach",
    precautions: [
      "Monitor blood sugar regularly",
      "May interact with diabetes medications",
      "Don't stop prescribed medications"
    ],
    benefits: [
      "Improves insulin sensitivity",
      "Lowers fasting blood sugar",
      "Prevents progression to diabetes"
    ],
    related_diseases: ["pre-diabetes", "diabetes", "insulin-resistance"],
    difficulty: "Easy",
    preparation_time: "10 minutes + overnight"
  },
  {
    id: "remedy-sugar-2",
    problem: "Type 2 Diabetes Support",
    title: "Bitter Gourd-Jamun Juice",
    ingredients: [
      { name: "Bitter gourd (karela)", quantity: "1 medium" },
      { name: "Jamun (Indian blackberry)", quantity: "10-12" },
      { name: "Amla juice", quantity: "2 tablespoons" }
    ],
    method: [
      "Extract juice from bitter gourd",
      "Blend jamun and strain",
      "Mix both juices with amla",
      "Drink on empty stomach"
    ],
    how_often: "Once daily in morning",
    precautions: [
      "Very bitter taste",
      "Monitor blood sugar closely",
      "Continue prescribed medications"
    ],
    benefits: [
      "Lowers blood glucose",
      "Rich in plant insulin",
      "Supports pancreatic function"
    ],
    related_diseases: ["diabetes", "high-blood-sugar"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },

  // ========== WORLDWIDE COMMON DISEASES ==========
  
  // Flu & Viral Infections (Worldwide)
  {
    id: "remedy-flu-1",
    problem: "Flu & Viral Fever",
    title: "Elderberry-Ginger Immune Syrup",
    ingredients: [
      { name: "Dried elderberries", quantity: "1 cup" },
      { name: "Fresh ginger", quantity: "2 inches" },
      { name: "Cinnamon sticks", quantity: "2" },
      { name: "Cloves", quantity: "5-6" },
      { name: "Water", quantity: "3 cups" },
      { name: "Raw honey", quantity: "1 cup" }
    ],
    method: [
      "Simmer elderberries, ginger, cinnamon, and cloves in water for 45 minutes",
      "Mash berries and strain through cheesecloth",
      "Let cool to lukewarm, then add honey",
      "Store in glass jar in refrigerator"
    ],
    how_often: "1 tablespoon every 2-3 hours during illness",
    precautions: [
      "Raw elderberries are toxic - must be cooked",
      "Not for children under 1 year (honey)",
      "Consult doctor if symptoms persist"
    ],
    benefits: [
      "Powerful antiviral properties",
      "Reduces flu duration by 3-4 days",
      "Boosts immune response"
    ],
    related_diseases: ["flu", "viral-fever", "cold-cough"],
    difficulty: "Medium",
    preparation_time: "1 hour"
  },
  {
    id: "remedy-flu-2",
    problem: "Seasonal Flu",
    title: "Turmeric-Black Pepper Hot Toddy",
    ingredients: [
      { name: "Hot water", quantity: "1 cup" },
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Black pepper", quantity: "1/4 teaspoon" },
      { name: "Lemon juice", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Fresh ginger", quantity: "1 inch grated" }
    ],
    method: [
      "Boil water with grated ginger for 3 minutes",
      "Strain into a cup",
      "Add turmeric and black pepper, stir well",
      "Add lemon and honey when slightly cooled"
    ],
    how_often: "3-4 times daily during flu",
    precautions: [
      "Avoid if on blood thinners",
      "May stain teeth temporarily",
      "Reduce turmeric if causing stomach upset"
    ],
    benefits: [
      "Anti-inflammatory and antiviral",
      "Soothes throat and reduces congestion",
      "Provides hydration"
    ],
    related_diseases: ["flu", "seasonal-flu", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // Allergies (Worldwide common)
  {
    id: "remedy-allergy-1",
    problem: "Seasonal Allergies",
    title: "Local Honey-Bee Pollen Remedy",
    ingredients: [
      { name: "Local raw honey", quantity: "1 tablespoon" },
      { name: "Bee pollen granules", quantity: "1/4 teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Start with small amount of bee pollen (few granules)",
      "Mix honey and pollen in warm water",
      "Drink slowly",
      "Gradually increase pollen over 2 weeks"
    ],
    how_often: "Once daily, start 6 weeks before allergy season",
    precautions: [
      "Start with tiny dose to check for allergy to bee products",
      "Not for those allergic to bee stings",
      "Consult doctor before starting"
    ],
    benefits: [
      "Builds natural tolerance to local pollen",
      "Reduces histamine response",
      "Natural antihistamine effect"
    ],
    related_diseases: ["allergies", "hay-fever", "pollen-allergy"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-allergy-2",
    problem: "Dust & Mold Allergy",
    title: "Nettle-Quercetin Tea",
    ingredients: [
      { name: "Dried nettle leaves", quantity: "2 teaspoons" },
      { name: "Apple (with skin)", quantity: "1/4 sliced" },
      { name: "Hot water", quantity: "2 cups" },
      { name: "Honey", quantity: "Optional" }
    ],
    method: [
      "Pour hot water over nettle leaves and apple slices",
      "Steep covered for 10-15 minutes",
      "Strain and add honey if desired",
      "Drink warm"
    ],
    how_often: "2-3 cups daily during allergy flare-ups",
    precautions: [
      "May interact with blood pressure medications",
      "Avoid if pregnant",
      "May increase urination"
    ],
    benefits: [
      "Natural antihistamine",
      "Reduces inflammation",
      "Quercetin blocks histamine release"
    ],
    related_diseases: ["allergies", "dust-allergy", "sinusitis"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },

  // Cancer Support (Complementary, not replacement)
  {
    id: "remedy-cancer-1",
    problem: "Cancer Support (Nausea)",
    title: "Ginger-Peppermint Nausea Relief",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Fresh peppermint leaves", quantity: "10 leaves" },
      { name: "Lemon slice", quantity: "1" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: [
      "Slice ginger thinly",
      "Add ginger, peppermint, and lemon to cup",
      "Pour hot water and steep 5-10 minutes",
      "Sip slowly"
    ],
    how_often: "30 minutes before chemotherapy or as needed",
    precautions: [
      "Consult oncologist before use",
      "Not a replacement for anti-nausea medications",
      "Avoid if mouth sores present"
    ],
    benefits: [
      "Reduces chemotherapy-induced nausea",
      "Settles stomach naturally",
      "Provides hydration"
    ],
    related_diseases: ["cancer-support", "nausea", "chemotherapy-side-effects"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-cancer-2",
    problem: "Cancer Support (Immunity)",
    title: "Turmeric-Mushroom Immunity Broth",
    ingredients: [
      { name: "Shiitake mushrooms", quantity: "1/2 cup sliced" },
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Garlic cloves", quantity: "3 minced" },
      { name: "Vegetable broth", quantity: "2 cups" },
      { name: "Black pepper", quantity: "1/4 teaspoon" },
      { name: "Fresh ginger", quantity: "1 inch" }
    ],
    method: [
      "Simmer mushrooms in broth with ginger for 20 minutes",
      "Add garlic and turmeric, simmer 5 more minutes",
      "Add black pepper",
      "Strain or drink with mushrooms"
    ],
    how_often: "Once daily during treatment",
    precautions: [
      "Always consult oncologist before use",
      "May interact with certain cancer drugs",
      "Not a replacement for medical treatment"
    ],
    benefits: [
      "Beta-glucans support immune function",
      "Anti-inflammatory properties",
      "Provides nutrients during treatment"
    ],
    related_diseases: ["cancer-support", "weak-immunity"],
    difficulty: "Medium",
    preparation_time: "30 minutes"
  },

  // Stroke Recovery Support
  {
    id: "remedy-stroke-1",
    problem: "Stroke Recovery Support",
    title: "Ginkgo-Gotu Kola Brain Tonic",
    ingredients: [
      { name: "Gotu kola powder", quantity: "1/2 teaspoon" },
      { name: "Brahmi powder", quantity: "1/2 teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the milk (don't boil)",
      "Add gotu kola and brahmi powders",
      "Stir well until dissolved",
      "Add honey when slightly cooled"
    ],
    how_often: "Once daily in evening",
    precautions: [
      "Must be under medical supervision",
      "May interact with blood thinners",
      "Not for acute stroke - only recovery phase"
    ],
    benefits: [
      "Supports brain circulation",
      "Aids neural regeneration",
      "Traditional brain tonic"
    ],
    related_diseases: ["stroke-recovery", "brain-health"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // Autoimmune Support
  {
    id: "remedy-autoimmune-1",
    problem: "Autoimmune Support",
    title: "Anti-Inflammatory Golden Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "1/2 cup" },
      { name: "Water", quantity: "1 cup" },
      { name: "Coconut oil", quantity: "1/3 cup" },
      { name: "Black pepper", quantity: "2 teaspoons" }
    ],
    method: [
      "Mix turmeric and water in pan, stir on low heat 7-10 minutes until paste forms",
      "Remove from heat, add coconut oil and black pepper",
      "Mix well and store in glass jar in refrigerator",
      "Take 1/4 to 1/2 teaspoon with meals"
    ],
    how_often: "Start with 1/4 teaspoon, increase gradually to 1 teaspoon 3x daily",
    precautions: [
      "Consult rheumatologist before use",
      "May interact with immunosuppressants",
      "Start slowly to check tolerance"
    ],
    benefits: [
      "Powerful anti-inflammatory",
      "Modulates immune response",
      "Reduces joint inflammation"
    ],
    related_diseases: ["autoimmune-disorders", "rheumatoid-arthritis", "lupus-support"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },

  // Chronic Fatigue
  {
    id: "remedy-fatigue-1",
    problem: "Chronic Fatigue",
    title: "Ashwagandha-Shilajit Energy Tonic",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1/2 teaspoon" },
      { name: "Shilajit resin", quantity: "Pea-sized" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Ghee", quantity: "1/2 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Dissolve shilajit in warm milk",
      "Add ashwagandha powder and ghee",
      "Stir well until dissolved",
      "Add honey when slightly cooled"
    ],
    how_often: "Once daily in morning or evening",
    precautions: [
      "Not during pregnancy",
      "May affect thyroid medications",
      "Start with smaller dose"
    ],
    benefits: [
      "Adaptogenic - reduces fatigue",
      "Increases stamina and endurance",
      "Supports adrenal function"
    ],
    related_diseases: ["chronic-fatigue", "low-energy", "burnout"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },

  // Nerve Damage / Neuropathy
  {
    id: "remedy-nerve-1",
    problem: "Nerve Health (Neuropathy)",
    title: "Ashwagandha-Saffron Nerve Tonic",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1/2 teaspoon" },
      { name: "Saffron strands", quantity: "4-5" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Almonds (soaked & peeled)", quantity: "5" },
      { name: "Ghee", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Soak saffron in 1 tablespoon warm milk for 10 minutes",
      "Blend almonds with remaining milk until smooth",
      "Add ashwagandha, saffron milk, and ghee",
      "Warm slightly and drink"
    ],
    how_often: "Once daily at bedtime",
    precautions: [
      "Expensive due to saffron - can reduce amount",
      "Consult neurologist for diabetic neuropathy",
      "Not for those with nut allergies"
    ],
    benefits: [
      "Supports nerve regeneration",
      "Reduces nerve pain",
      "Traditional nerve tonic"
    ],
    related_diseases: ["neuropathy", "nerve-damage", "diabetic-neuropathy"],
    difficulty: "Medium",
    preparation_time: "20 minutes"
  },

  // Obesity (Worldwide epidemic)
  {
    id: "remedy-obesity-1",
    problem: "Weight Management",
    title: "Triphala-Apple Cider Vinegar Drink",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Apple cider vinegar (with mother)", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1/2 teaspoon (optional)" }
    ],
    method: [
      "Add triphala powder to warm water",
      "Add apple cider vinegar",
      "Mix well and add honey if needed",
      "Drink on empty stomach"
    ],
    how_often: "Twice daily - morning and before bed",
    precautions: [
      "May cause loose stools initially",
      "Dilute vinegar to protect teeth",
      "Not during pregnancy"
    ],
    benefits: [
      "Boosts metabolism",
      "Aids fat burning",
      "Improves digestion and elimination"
    ],
    related_diseases: ["obesity", "weight-gain", "slow-metabolism"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-obesity-2",
    problem: "Belly Fat",
    title: "Cumin-Lemon Morning Detox",
    ingredients: [
      { name: "Cumin seeds", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1.5 cups" },
      { name: "Lemon juice", quantity: "1/2 lemon" },
      { name: "Honey", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Soak cumin seeds in water overnight",
      "In morning, boil for 5 minutes",
      "Strain and let cool to lukewarm",
      "Add lemon juice and honey"
    ],
    how_often: "Every morning on empty stomach",
    precautions: [
      "May increase body heat",
      "Avoid if suffering from acidity",
      "Drink through straw to protect teeth"
    ],
    benefits: [
      "Targets belly fat specifically",
      "Boosts morning metabolism",
      "Aids digestion all day"
    ],
    related_diseases: ["belly-fat", "obesity", "slow-digestion"],
    difficulty: "Easy",
    preparation_time: "5 minutes + overnight soak"
  },

  // Summer Seasonal Remedies (Worldwide applicable)
  {
    id: "remedy-summer-1",
    problem: "Summer Heat",
    title: "Cooling Mint-Cucumber Cooler",
    ingredients: [
      { name: "Fresh mint leaves", quantity: "15-20 leaves" },
      { name: "Cucumber", quantity: "1/2 sliced" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Water", quantity: "2 glasses" },
      { name: "Rock salt", quantity: "A pinch" },
      { name: "Cumin powder (roasted)", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Blend cucumber and mint with 1 glass water",
      "Strain if desired or drink with pulp",
      "Add remaining water, lemon, salt, and cumin",
      "Serve chilled"
    ],
    how_often: "2-3 times daily in summer",
    precautions: [
      "Avoid if prone to cold",
      "Reduce if causing excess urination",
      "Use organic cucumber if possible"
    ],
    benefits: [
      "Instantly cools body temperature",
      "Prevents dehydration",
      "Balances electrolytes"
    ],
    related_diseases: ["summer-heat", "heat-stroke", "dehydration"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-summer-2",
    problem: "Heat Stroke",
    title: "Raw Mango Panna (Aam Panna)",
    ingredients: [
      { name: "Raw green mango", quantity: "2 medium" },
      { name: "Jaggery or sugar", quantity: "1/2 cup" },
      { name: "Cumin powder (roasted)", quantity: "1 teaspoon" },
      { name: "Black salt", quantity: "1/2 teaspoon" },
      { name: "Mint leaves", quantity: "10 leaves" },
      { name: "Cold water", quantity: "4 cups" }
    ],
    method: [
      "Boil or roast raw mangoes until soft",
      "Remove pulp and blend smooth",
      "Mix all ingredients with water",
      "Serve over ice"
    ],
    how_often: "1-2 glasses daily in peak summer",
    precautions: [
      "Avoid if diabetic (high sugar content)",
      "May cause mouth tingling in excess",
      "Store concentrate in fridge up to 1 week"
    ],
    benefits: [
      "Prevents heat stroke",
      "Replenishes minerals lost in sweat",
      "Traditional Indian summer cooler"
    ],
    related_diseases: ["heat-stroke", "summer-heat", "summer-fatigue"],
    difficulty: "Medium",
    preparation_time: "30 minutes"
  },
  {
    id: "remedy-summer-3",
    problem: "Prickly Heat",
    title: "Sandalwood-Rose Water Paste",
    ingredients: [
      { name: "Sandalwood powder", quantity: "2 tablespoons" },
      { name: "Rose water", quantity: "Enough to make paste" },
      { name: "Fuller's earth (multani mitti)", quantity: "1 tablespoon" }
    ],
    method: [
      "Mix sandalwood and fuller's earth",
      "Add rose water gradually to form smooth paste",
      "Apply on affected areas",
      "Leave for 20-30 minutes, rinse with cool water"
    ],
    how_often: "Once or twice daily until healed",
    precautions: [
      "Patch test first",
      "Avoid if skin is broken",
      "Use pure sandalwood powder"
    ],
    benefits: [
      "Instantly cools and soothes skin",
      "Reduces prickly heat rash",
      "Natural antiseptic"
    ],
    related_diseases: ["prickly-heat", "heat-rash", "summer-heat"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-summer-4",
    problem: "Summer Dehydration",
    title: "Coconut Water Electrolyte Drink",
    ingredients: [
      { name: "Fresh coconut water", quantity: "1 cup" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Pink salt", quantity: "1/8 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix all ingredients together",
      "Stir well until honey dissolves",
      "Serve immediately or chilled"
    ],
    how_often: "2-3 times daily in hot weather",
    precautions: [
      "Diabetics reduce or skip honey",
      "Use fresh coconut water when possible",
      "Not a complete replacement for severe dehydration"
    ],
    benefits: [
      "Natural isotonic drink",
      "Replaces lost electrolytes",
      "More effective than plain water"
    ],
    related_diseases: ["dehydration", "summer-heat", "electrolyte-imbalance"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },

  // Monsoon Remedies
  {
    id: "remedy-monsoon-1",
    problem: "Monsoon Infections",
    title: "Anti-Infection Tulsi-Neem Kadha",
    ingredients: [
      { name: "Fresh tulsi leaves", quantity: "15 leaves" },
      { name: "Neem leaves", quantity: "5 leaves" },
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Black pepper", quantity: "5 whole" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Water", quantity: "2 cups" },
      { name: "Jaggery", quantity: "1 tablespoon" }
    ],
    method: [
      "Boil water with all ingredients except jaggery",
      "Simmer until reduced to 1 cup",
      "Strain and add jaggery",
      "Drink warm"
    ],
    how_often: "Once daily during monsoon",
    precautions: [
      "Neem is very bitter - adjust amount",
      "Avoid during pregnancy",
      "May cause body heat"
    ],
    benefits: [
      "Prevents monsoon infections",
      "Boosts immunity against waterborne diseases",
      "Natural antibiotic effect"
    ],
    related_diseases: ["monsoon-infections", "viral-fever", "waterborne-diseases"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "remedy-monsoon-2",
    problem: "Fungal Infections",
    title: "Neem-Tea Tree Antifungal Paste",
    ingredients: [
      { name: "Neem leaves", quantity: "1 cup fresh" },
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Tea tree oil", quantity: "3-4 drops" },
      { name: "Coconut oil", quantity: "1 tablespoon" }
    ],
    method: [
      "Grind neem leaves into paste",
      "Mix with turmeric and coconut oil",
      "Add tea tree oil and mix well",
      "Apply on affected areas"
    ],
    how_often: "Twice daily until infection clears",
    precautions: [
      "Patch test first for sensitivity",
      "Avoid on open wounds",
      "Keep area dry between applications"
    ],
    benefits: [
      "Powerful antifungal combination",
      "Stops fungal growth",
      "Soothes itching and inflammation"
    ],
    related_diseases: ["fungal-infections", "ringworm", "athletes-foot"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "remedy-monsoon-3",
    problem: "Waterborne Diseases",
    title: "Cumin-Coriander Digestive Water",
    ingredients: [
      { name: "Cumin seeds", quantity: "1 teaspoon" },
      { name: "Coriander seeds", quantity: "1 teaspoon" },
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "4 cups" }
    ],
    method: [
      "Dry roast all seeds lightly",
      "Boil with water for 10 minutes",
      "Strain and store in thermos",
      "Drink throughout the day"
    ],
    how_often: "As drinking water during monsoon",
    precautions: [
      "Make fresh daily",
      "Don't add cold water later",
      "Safe for children too"
    ],
    benefits: [
      "Prevents waterborne stomach infections",
      "Aids digestion",
      "Traditional CCF tea"
    ],
    related_diseases: ["waterborne-diseases", "stomach-infection", "diarrhea"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },

  // Winter Remedies
  {
    id: "remedy-winter-1",
    problem: "Winter Cold",
    title: "Warming Spiced Kadha",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Cinnamon stick", quantity: "1 inch" },
      { name: "Black pepper", quantity: "4-5" },
      { name: "Cloves", quantity: "2" },
      { name: "Tulsi leaves", quantity: "8-10" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Crush ginger and spices lightly",
      "Boil with water and tulsi for 10 minutes",
      "Strain and add honey when warm",
      "Drink hot"
    ],
    how_often: "2-3 times daily during cold",
    precautions: [
      "May cause acidity in some",
      "Reduce spices for children",
      "Not on completely empty stomach"
    ],
    benefits: [
      "Clears congestion",
      "Warms the body from inside",
      "Fights cold and cough"
    ],
    related_diseases: ["winter-cold", "cold-cough", "congestion"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-winter-2",
    problem: "Winter Immunity",
    title: "Chyawanprash Milk Shake",
    ingredients: [
      { name: "Chyawanprash", quantity: "1 tablespoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Ghee", quantity: "1/2 teaspoon" },
      { name: "Saffron strands", quantity: "2-3" }
    ],
    method: [
      "Warm milk with saffron",
      "Add chyawanprash and ghee",
      "Whisk well until mixed",
      "Drink while warm"
    ],
    how_often: "Once daily in winter months",
    precautions: [
      "Check chyawanprash sugar content if diabetic",
      "Not for children under 3",
      "May cause weight gain - use in moderation"
    ],
    benefits: [
      "Traditional immunity booster",
      "Provides warmth in winter",
      "Rich in Vitamin C and antioxidants"
    ],
    related_diseases: ["winter-immunity", "weak-immunity", "frequent-cold"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "remedy-winter-3",
    problem: "Winter Joint Pain",
    title: "Warming Sesame-Ajwain Oil",
    ingredients: [
      { name: "Sesame oil", quantity: "1/4 cup" },
      { name: "Ajwain (carom seeds)", quantity: "1 tablespoon" },
      { name: "Garlic cloves", quantity: "4-5" },
      { name: "Methi (fenugreek) seeds", quantity: "1 teaspoon" }
    ],
    method: [
      "Heat sesame oil on low",
      "Add crushed garlic and all seeds",
      "Cook until garlic browns slightly",
      "Strain and use warm for massage"
    ],
    how_often: "Daily massage before bath in winter",
    precautions: [
      "Test temperature before applying",
      "Avoid on broken skin",
      "Store in dark bottle"
    ],
    benefits: [
      "Deep warming effect",
      "Reduces winter joint stiffness",
      "Improves blood circulation"
    ],
    related_diseases: ["winter-joint-pain", "arthritis", "joint-stiffness"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "remedy-winter-4",
    problem: "Dry Skin (Winter)",
    title: "Ghee-Almond Skin Moisturizer",
    ingredients: [
      { name: "Pure ghee", quantity: "2 tablespoons" },
      { name: "Sweet almond oil", quantity: "1 tablespoon" },
      { name: "Rose water", quantity: "1 teaspoon" },
      { name: "Vitamin E capsule", quantity: "1 (optional)" }
    ],
    method: [
      "Melt ghee gently (don't heat too much)",
      "Mix with almond oil and rose water",
      "Add vitamin E if using",
      "Apply on dry areas before bed"
    ],
    how_often: "Nightly in winter",
    precautions: [
      "Use only on body, not face if acne-prone",
      "May stain light clothes",
      "Store in cool place"
    ],
    benefits: [
      "Intense moisturization",
      "Heals cracked skin",
      "Traditional Ayurvedic skincare"
    ],
    related_diseases: ["dry-skin", "cracked-heels", "winter-skin"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  // ============= US-FRIENDLY REMEDIES =============
  // Using common ingredients available in American supermarkets
  {
    id: "remedy-us-1",
    problem: "Cold & Cough",
    title: "Apple Cider Vinegar Tonic",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "2 tablespoons" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Mix apple cider vinegar in warm water",
      "Add honey and lemon juice",
      "Stir well until honey dissolves",
      "Sip slowly while warm"
    ],
    how_often: "2-3 times daily when sick",
    precautions: [
      "May erode tooth enamel - rinse mouth after",
      "Avoid if you have acid reflux",
      "Always dilute - never drink straight"
    ],
    benefits: [
      "Boosts immune system",
      "Soothes sore throat",
      "Has antimicrobial properties"
    ],
    related_diseases: ["cold-cough", "sore-throat", "immunity"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "us"
  },
  {
    id: "remedy-us-2",
    problem: "Sore Throat",
    title: "Cayenne Pepper Gargle",
    ingredients: [
      { name: "Cayenne pepper", quantity: "1/4 teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Salt", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Add cayenne pepper and salt to warm water",
      "Stir until dissolved",
      "Gargle for 30 seconds",
      "Spit out - do not swallow"
    ],
    how_often: "Every 2-3 hours as needed",
    precautions: [
      "Do not swallow",
      "Avoid if mouth has sores",
      "Start with less cayenne if sensitive"
    ],
    benefits: [
      "Capsaicin numbs throat pain",
      "Reduces inflammation",
      "Kills bacteria naturally"
    ],
    related_diseases: ["sore-throat", "cold-cough"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "us"
  },
  {
    id: "remedy-us-3",
    problem: "Headache",
    title: "Peppermint Oil Temple Massage",
    ingredients: [
      { name: "Peppermint essential oil", quantity: "2-3 drops" },
      { name: "Coconut oil (carrier)", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix peppermint oil with coconut oil",
      "Apply to temples and forehead",
      "Massage in circular motions",
      "Lie down in a dark room for 15 minutes"
    ],
    how_often: "As needed for headaches",
    precautions: [
      "Never apply undiluted essential oil",
      "Keep away from eyes",
      "Patch test first for sensitivity"
    ],
    benefits: [
      "Menthol provides cooling relief",
      "Relaxes tense muscles",
      "Improves blood circulation"
    ],
    related_diseases: ["headache", "migraine", "stress"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "us"
  },
  {
    id: "remedy-us-4",
    problem: "Insomnia",
    title: "Warm Milk with Nutmeg",
    ingredients: [
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Nutmeg powder", quantity: "1/4 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk gently (do not boil)",
      "Add nutmeg powder and honey",
      "Stir well and drink 30 minutes before bed"
    ],
    how_often: "Nightly before bed",
    precautions: [
      "Do not exceed 1/4 tsp nutmeg",
      "Avoid if lactose intolerant - use almond milk",
      "Not suitable for children under 2"
    ],
    benefits: [
      "Tryptophan in milk promotes sleep",
      "Nutmeg has sedative properties",
      "Calms the nervous system"
    ],
    related_diseases: ["insomnia", "anxiety", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "remedy-us-5",
    problem: "Bloating",
    title: "Ginger Lemon Digestive Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch piece" },
      { name: "Lemon", quantity: "Half" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: [
      "Slice ginger thinly or grate it",
      "Steep in hot water for 5-10 minutes",
      "Squeeze in lemon juice",
      "Add honey and drink warm"
    ],
    how_often: "After meals or when bloated",
    precautions: [
      "Avoid on empty stomach if acid-sensitive",
      "May interact with blood thinners",
      "Use less ginger if you get heartburn"
    ],
    benefits: [
      "Reduces gas and bloating",
      "Stimulates digestive enzymes",
      "Settles upset stomach"
    ],
    related_diseases: ["bloating", "gas", "nausea", "acidity"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "us"
  },
  {
    id: "remedy-us-6",
    problem: "Muscle Cramps",
    title: "Pickle Juice Shot",
    ingredients: [
      { name: "Pickle juice (dill)", quantity: "2-3 oz" }
    ],
    method: [
      "Take pickle juice directly from jar",
      "Drink quickly like a shot",
      "Follow with water if needed"
    ],
    how_often: "During or immediately after cramp",
    precautions: [
      "High in sodium - limit if on low-salt diet",
      "May cause heartburn in some",
      "Not for daily use"
    ],
    benefits: [
      "Fast relief from muscle cramps",
      "Replaces electrolytes quickly",
      "Works within seconds"
    ],
    related_diseases: ["muscle-cramps", "leg-cramps", "dehydration"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "us"
  },
  {
    id: "remedy-us-7",
    problem: "Nausea",
    title: "Flat Ginger Ale Remedy",
    ingredients: [
      { name: "Ginger ale (real ginger)", quantity: "1 can" },
      { name: "Crackers (saltines)", quantity: "4-5" }
    ],
    method: [
      "Open ginger ale and let it go flat (stir to speed up)",
      "Sip slowly at room temperature",
      "Nibble on crackers between sips"
    ],
    how_often: "As needed for nausea",
    precautions: [
      "Choose brands with real ginger",
      "Avoid if diabetic - high sugar content",
      "Do not gulp - sip slowly"
    ],
    benefits: [
      "Ginger settles stomach",
      "Crackers absorb excess acid",
      "Easy to keep down"
    ],
    related_diseases: ["nausea", "motion-sickness", "stomach-ache"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "remedy-us-8",
    problem: "Hangover",
    title: "Coconut Water & Banana Recovery",
    ingredients: [
      { name: "Coconut water", quantity: "1 bottle (11 oz)" },
      { name: "Banana", quantity: "1 ripe" },
      { name: "Salt", quantity: "Tiny pinch" }
    ],
    method: [
      "Drink coconut water slowly",
      "Eat banana in small bites",
      "Add tiny pinch of salt to water if desired"
    ],
    how_often: "Morning after, repeat once if needed",
    precautions: [
      "Seek medical help if symptoms are severe",
      "Avoid caffeine which dehydrates",
      "Rest adequately"
    ],
    benefits: [
      "Coconut water rehydrates and restores electrolytes",
      "Banana replenishes potassium",
      "Gentle on upset stomach"
    ],
    related_diseases: ["hangover", "dehydration", "nausea"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "us"
  },
  {
    id: "remedy-us-9",
    problem: "Acne",
    title: "Oatmeal Honey Face Mask",
    ingredients: [
      { name: "Oatmeal (plain)", quantity: "2 tablespoons" },
      { name: "Raw honey", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 tablespoon" }
    ],
    method: [
      "Grind oatmeal into fine powder",
      "Mix with honey and warm water to form paste",
      "Apply to clean face avoiding eyes",
      "Leave for 15-20 minutes",
      "Rinse with lukewarm water"
    ],
    how_often: "2-3 times per week",
    precautions: [
      "Patch test first",
      "Avoid if allergic to oats",
      "Do not use on broken skin"
    ],
    benefits: [
      "Oatmeal absorbs excess oil",
      "Honey has antibacterial properties",
      "Gentle exfoliation without irritation"
    ],
    related_diseases: ["acne", "skin-disorders", "dry-skin"],
    difficulty: "Easy",
    preparation_time: "25 minutes",
    region: "us"
  },
  {
    id: "remedy-us-10",
    problem: "Constipation",
    title: "Prune Juice Morning Flush",
    ingredients: [
      { name: "Prune juice", quantity: "1 cup (8 oz)" },
      { name: "Warm water", quantity: "Half cup" }
    ],
    method: [
      "Mix prune juice with warm water",
      "Drink on empty stomach in morning",
      "Wait 30 minutes before eating",
      "Stay near bathroom!"
    ],
    how_often: "Once daily until relief",
    precautions: [
      "Start with half cup if new to prunes",
      "May cause cramping initially",
      "Not for long-term daily use"
    ],
    benefits: [
      "Natural laxative effect",
      "High in fiber and sorbitol",
      "Gentle on digestive system"
    ],
    related_diseases: ["constipation", "bloating"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "us"
  },
  {
    id: "remedy-us-11",
    problem: "Sunburn",
    title: "Aloe Vera & Coconut Oil Soothe",
    ingredients: [
      { name: "Aloe vera gel (pure)", quantity: "2 tablespoons" },
      { name: "Coconut oil", quantity: "1 teaspoon" },
      { name: "Lavender essential oil", quantity: "2 drops (optional)" }
    ],
    method: [
      "Mix aloe vera gel with coconut oil",
      "Add lavender oil if using",
      "Apply gently to sunburned areas",
      "Reapply every 2-3 hours"
    ],
    how_often: "Multiple times daily until healed",
    precautions: [
      "Keep refrigerated for extra cooling",
      "Avoid on blistered or broken skin",
      "Use pure aloe - avoid colored products"
    ],
    benefits: [
      "Cools and soothes burned skin",
      "Promotes healing",
      "Prevents peeling"
    ],
    related_diseases: ["sunburn", "dry-skin", "minor-burns"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "us"
  },
  {
    id: "remedy-us-12",
    problem: "Allergies",
    title: "Local Honey Allergy Defense",
    ingredients: [
      { name: "Local raw honey", quantity: "1 tablespoon" },
      { name: "Warm water or tea", quantity: "Optional" }
    ],
    method: [
      "Take 1 tablespoon of local raw honey",
      "Eat directly or mix with warm tea",
      "Start 4-6 weeks before allergy season"
    ],
    how_often: "Daily throughout allergy season",
    precautions: [
      "Must be LOCAL honey for effectiveness",
      "Not suitable for children under 1 year",
      "Not a replacement for allergy medication"
    ],
    benefits: [
      "May reduce pollen sensitivity over time",
      "Soothes irritated throat",
      "Natural immune support"
    ],
    related_diseases: ["allergies", "seasonal-allergies", "sore-throat"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "us"
  },
  {
    id: "remedy-us-13",
    problem: "High Cholesterol",
    title: "Oatmeal Heart Health Breakfast",
    ingredients: [
      { name: "Steel-cut oats", quantity: "1/2 cup" },
      { name: "Walnuts", quantity: "1/4 cup chopped" },
      { name: "Blueberries", quantity: "1/2 cup" },
      { name: "Cinnamon", quantity: "1/2 teaspoon" },
      { name: "Water or milk", quantity: "1.5 cups" }
    ],
    method: [
      "Cook oats according to package directions",
      "Top with walnuts and blueberries",
      "Sprinkle with cinnamon",
      "Avoid adding sugar"
    ],
    how_often: "Daily for breakfast",
    precautions: [
      "Choose steel-cut or rolled oats, not instant",
      "Monitor portion if diabetic",
      "Check nut allergies"
    ],
    benefits: [
      "Soluble fiber binds cholesterol",
      "Omega-3s from walnuts support heart",
      "Antioxidants from berries"
    ],
    related_diseases: ["high-cholesterol", "heart-health", "diabetes"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "us"
  },
  {
    id: "remedy-us-14",
    problem: "Anxiety",
    title: "Chamomile Lavender Calm Tea",
    ingredients: [
      { name: "Chamomile tea bag", quantity: "1" },
      { name: "Dried lavender", quantity: "1/2 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: [
      "Steep chamomile tea bag and lavender in hot water",
      "Cover and let sit for 5-7 minutes",
      "Strain out lavender buds",
      "Add honey and sip slowly"
    ],
    how_often: "1-2 times daily or during anxious moments",
    precautions: [
      "May cause drowsiness",
      "Avoid if allergic to ragweed",
      "Not a substitute for prescribed medication"
    ],
    benefits: [
      "Natural calming effect",
      "Reduces cortisol levels",
      "Promotes relaxation without drugs"
    ],
    related_diseases: ["anxiety", "stress", "insomnia"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "us"
  },
  {
    id: "remedy-us-15",
    problem: "Joint Pain",
    title: "Epsom Salt Joint Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Warm bath water", quantity: "Full tub" },
      { name: "Eucalyptus oil", quantity: "5-10 drops (optional)" }
    ],
    method: [
      "Fill bathtub with warm (not hot) water",
      "Add Epsom salt and stir to dissolve",
      "Add eucalyptus oil if using",
      "Soak for 20-30 minutes",
      "Rinse and pat dry"
    ],
    how_often: "2-3 times per week",
    precautions: [
      "Avoid if you have heart conditions",
      "Not for diabetics with neuropathy",
      "Stay hydrated - drink water during soak"
    ],
    benefits: [
      "Magnesium absorbs through skin",
      "Reduces muscle tension and pain",
      "Decreases inflammation"
    ],
    related_diseases: ["joint-pain", "arthritis", "muscle-cramps", "back-pain"],
    difficulty: "Easy",
    preparation_time: "30 minutes",
    region: "us"
  },
  {
    id: "remedy-us-16",
    problem: "Bad Breath",
    title: "Baking Soda Mouth Rinse",
    ingredients: [
      { name: "Baking soda", quantity: "1/2 teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Peppermint extract", quantity: "1-2 drops (optional)" }
    ],
    method: [
      "Dissolve baking soda in warm water",
      "Add peppermint if desired",
      "Swish around mouth for 30 seconds",
      "Spit out and rinse with plain water"
    ],
    how_often: "Once daily or as needed",
    precautions: [
      "Do not swallow",
      "Not for daily long-term use",
      "See dentist if bad breath persists"
    ],
    benefits: [
      "Neutralizes odor-causing acids",
      "Kills bacteria in mouth",
      "Cheaper than commercial rinses"
    ],
    related_diseases: ["bad-breath", "oral-health"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "us"
  },
  {
    id: "remedy-us-17",
    problem: "Fatigue",
    title: "Green Smoothie Energy Boost",
    ingredients: [
      { name: "Spinach", quantity: "2 cups" },
      { name: "Banana", quantity: "1 frozen" },
      { name: "Almond butter", quantity: "1 tablespoon" },
      { name: "Almond milk", quantity: "1 cup" },
      { name: "Chia seeds", quantity: "1 tablespoon" }
    ],
    method: [
      "Add all ingredients to blender",
      "Blend until smooth",
      "Drink immediately for best nutrition"
    ],
    how_often: "Once daily, preferably morning",
    precautions: [
      "Check for nut allergies",
      "May interact with blood thinners (vitamin K in spinach)",
      "Add protein powder if using as meal replacement"
    ],
    benefits: [
      "Iron and B-vitamins from spinach",
      "Sustained energy from healthy fats",
      "No caffeine crash"
    ],
    related_diseases: ["fatigue", "low-energy", "anemia"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "remedy-us-18",
    problem: "Dry Skin",
    title: "Olive Oil Body Moisturizer",
    ingredients: [
      { name: "Extra virgin olive oil", quantity: "2 tablespoons" },
      { name: "Vitamin E oil", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Mix olive oil with vitamin E oil",
      "Apply to damp skin after shower",
      "Massage gently until absorbed",
      "Focus on elbows, knees, and heels"
    ],
    how_often: "Daily after bathing",
    precautions: [
      "May stain light fabrics",
      "Let absorb before dressing",
      "Avoid on face if acne-prone"
    ],
    benefits: [
      "Deep moisturization",
      "Rich in antioxidants",
      "Repairs skin barrier"
    ],
    related_diseases: ["dry-skin", "cracked-heels", "eczema"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "us"
  },
  {
    id: "remedy-us-19",
    problem: "Weight Loss",
    title: "Green Tea Metabolism Booster",
    ingredients: [
      { name: "Green tea", quantity: "1 tea bag or 1 tsp loose" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Lemon wedge", quantity: "1" },
      { name: "Cayenne pepper", quantity: "Tiny pinch (optional)" }
    ],
    method: [
      "Steep green tea in hot water for 3-4 minutes",
      "Remove tea bag",
      "Squeeze lemon and add cayenne if using",
      "Drink warm before meals"
    ],
    how_often: "2-3 cups daily",
    precautions: [
      "Contains caffeine - avoid late evening",
      "May cause nausea on empty stomach",
      "Start with 1 cup to assess tolerance"
    ],
    benefits: [
      "EGCG boosts metabolism",
      "Cayenne increases thermogenesis",
      "Natural appetite suppressant"
    ],
    related_diseases: ["weight-loss", "obesity", "fatigue"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "remedy-us-20",
    problem: "Immunity",
    title: "Elderberry Syrup Immunity Shot",
    ingredients: [
      { name: "Elderberry syrup", quantity: "1 tablespoon" },
      { name: "Orange juice", quantity: "1/4 cup" },
      { name: "Fresh ginger", quantity: "Small slice" }
    ],
    method: [
      "Mix elderberry syrup with orange juice",
      "Grate or muddle ginger into mixture",
      "Strain if desired",
      "Take as a quick shot"
    ],
    how_often: "Daily during cold/flu season",
    precautions: [
      "Buy commercial syrup - raw elderberries are toxic",
      "May interact with immunosuppressants",
      "Not for children under 1 year"
    ],
    benefits: [
      "Rich in antioxidants and vitamins",
      "Supports immune response",
      "May shorten cold duration"
    ],
    related_diseases: ["immunity", "cold-cough", "flu"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "us"
  },
  // ========================================
  // SERIOUS CONDITIONS - SUPPORTIVE CARE
  // DISCLAIMER: These remedies are for supportive care only.
  // They do NOT replace medical treatment. Always consult a doctor.
  // ========================================

  // --- CANCER SUPPORT (Supportive Care) ---
  {
    id: "remedy-cancer-1",
    problem: "Cancer Support",
    title: "Turmeric Golden Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "1/4 cup" },
      { name: "Water", quantity: "1/2 cup" },
      { name: "Black pepper", quantity: "1/2 teaspoon" },
      { name: "Coconut oil or olive oil", quantity: "1/4 cup" }
    ],
    method: [
      "Mix turmeric with water in a pan",
      "Heat on low flame, stirring constantly until thick paste forms (7-10 mins)",
      "Remove from heat, stir in black pepper and oil",
      "Store in glass jar in refrigerator (lasts 2 weeks)",
      "Take 1/4 to 1/2 teaspoon with warm water or food"
    ],
    how_often: "1-3 times daily with meals",
    precautions: [
      "⚠️ IMPORTANT: This is supportive care only - NOT a cancer treatment",
      "Always continue medical treatment as advised by oncologist",
      "May interact with chemotherapy drugs - consult doctor first",
      "Avoid if on blood thinners or before surgery"
    ],
    benefits: [
      "Curcumin has anti-inflammatory properties",
      "May support overall wellbeing during treatment",
      "Traditional Ayurvedic immune support"
    ],
    related_diseases: ["cancer-support", "inflammation", "immunity"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "remedy-cancer-2",
    problem: "Cancer Support",
    title: "Ginger-Lemon Nausea Relief",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch piece" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Grate or finely chop fresh ginger",
      "Steep in warm (not boiling) water for 5 minutes",
      "Strain and add lemon juice and honey",
      "Sip slowly when experiencing nausea"
    ],
    how_often: "As needed for nausea, up to 3 times daily",
    precautions: [
      "⚠️ Supportive care only - does not treat cancer",
      "Ask oncologist before using during chemotherapy",
      "Stop 2 weeks before any surgery"
    ],
    benefits: [
      "Ginger traditionally used for nausea relief",
      "May help with chemotherapy-induced nausea",
      "Gentle on stomach"
    ],
    related_diseases: ["cancer-support", "nausea", "digestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "remedy-cancer-3",
    problem: "Cancer Support",
    title: "Amla-Tulsi Immunity Drink",
    ingredients: [
      { name: "Amla powder (or fresh amla juice)", quantity: "1 teaspoon" },
      { name: "Fresh tulsi leaves", quantity: "5-6 leaves" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Crush tulsi leaves lightly",
      "Add to warm water with amla powder",
      "Stir well and let sit for 2-3 minutes",
      "Add honey and drink"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "⚠️ Supportive care only - consult oncologist",
      "High Vitamin C may affect certain treatments",
      "Not a replacement for medical care"
    ],
    benefits: [
      "Rich in Vitamin C and antioxidants",
      "Traditional immunity booster",
      "Supports overall energy levels"
    ],
    related_diseases: ["cancer-support", "immunity", "fatigue"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "remedy-cancer-4",
    problem: "Cancer Support",
    title: "Fatigue-Fighting Energy Balls",
    ingredients: [
      { name: "Dates (pitted)", quantity: "1 cup" },
      { name: "Almonds or walnuts", quantity: "1/2 cup" },
      { name: "Oats", quantity: "1/2 cup" },
      { name: "Honey", quantity: "2 tablespoons" },
      { name: "Cardamom powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Blend dates, nuts, and oats in food processor",
      "Add honey and cardamom, pulse until combined",
      "Roll into small balls",
      "Refrigerate for 1 hour before eating",
      "Store in refrigerator for up to 2 weeks"
    ],
    how_often: "1-2 balls when fatigued, as a healthy snack",
    precautions: [
      "⚠️ Supportive nutrition only",
      "Check with dietitian if on special cancer diet",
      "Contains nuts - avoid if allergic"
    ],
    benefits: [
      "Natural energy from dates and nuts",
      "Easy to digest",
      "Provides sustained energy"
    ],
    related_diseases: ["cancer-support", "fatigue", "low-energy"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "remedy-cancer-5",
    problem: "Cancer Support",
    title: "Appetite-Boosting CCF Tea",
    ingredients: [
      { name: "Cumin seeds", quantity: "1/2 teaspoon" },
      { name: "Coriander seeds", quantity: "1/2 teaspoon" },
      { name: "Fennel seeds", quantity: "1/2 teaspoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Lightly crush the seeds",
      "Add to water and bring to boil",
      "Simmer for 5-7 minutes",
      "Strain and sip warm before meals"
    ],
    how_often: "Before meals, 2-3 times daily",
    precautions: [
      "⚠️ Supportive care for appetite - not cancer treatment",
      "Generally safe but consult doctor during treatment"
    ],
    benefits: [
      "Traditional digestive aid",
      "May help stimulate appetite",
      "Gentle and soothing"
    ],
    related_diseases: ["cancer-support", "loss-of-appetite", "digestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "remedy-cancer-6",
    problem: "Cancer Support",
    title: "Soothing Sleep Milk",
    ingredients: [
      { name: "Warm milk (dairy or plant-based)", quantity: "1 cup" },
      { name: "Ashwagandha powder", quantity: "1/4 teaspoon" },
      { name: "Nutmeg powder", quantity: "A tiny pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the milk gently",
      "Add ashwagandha and nutmeg",
      "Stir well and add honey",
      "Drink 30 minutes before bed"
    ],
    how_often: "Nightly before sleep",
    precautions: [
      "⚠️ Supportive care only",
      "Ashwagandha may interact with thyroid/sedative medications",
      "Consult oncologist before use"
    ],
    benefits: [
      "May promote restful sleep",
      "Ashwagandha is an adaptogen",
      "Calming nighttime ritual"
    ],
    related_diseases: ["cancer-support", "insomnia", "anxiety"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // --- STROKE RECOVERY SUPPORT ---
  {
    id: "remedy-stroke-1",
    problem: "Stroke Recovery Support",
    title: "Omega-Rich Flaxseed Smoothie",
    ingredients: [
      { name: "Banana", quantity: "1 ripe" },
      { name: "Ground flaxseed", quantity: "1 tablespoon" },
      { name: "Blueberries (fresh or frozen)", quantity: "1/2 cup" },
      { name: "Milk or plant milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add all ingredients to blender",
      "Blend until smooth",
      "Drink immediately for best nutrition"
    ],
    how_often: "Once daily, preferably morning",
    precautions: [
      "⚠️ IMPORTANT: Supportive nutrition only - follow doctor's rehabilitation plan",
      "If on blood thinners, consult doctor about flaxseed intake",
      "Introduce gradually to diet"
    ],
    benefits: [
      "Omega-3 fatty acids support brain health",
      "Antioxidants from blueberries",
      "Easy to consume if swallowing is difficult"
    ],
    related_diseases: ["stroke-recovery", "brain-health", "heart-health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "remedy-stroke-2",
    problem: "Stroke Recovery Support",
    title: "Anti-Inflammatory Garlic-Ginger Broth",
    ingredients: [
      { name: "Vegetable broth", quantity: "2 cups" },
      { name: "Garlic cloves (minced)", quantity: "2" },
      { name: "Fresh ginger (grated)", quantity: "1 teaspoon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Black pepper", quantity: "A pinch" }
    ],
    method: [
      "Heat broth in a pot",
      "Add garlic, ginger, and turmeric",
      "Simmer for 10 minutes",
      "Add black pepper and strain if desired",
      "Sip warm"
    ],
    how_often: "Once daily",
    precautions: [
      "⚠️ Supportive care only - continue medical rehabilitation",
      "Garlic may interact with blood thinners - consult doctor",
      "Monitor blood pressure regularly"
    ],
    benefits: [
      "Anti-inflammatory properties",
      "Supports circulation",
      "Warm and comforting"
    ],
    related_diseases: ["stroke-recovery", "circulation", "inflammation"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "remedy-stroke-3",
    problem: "Stroke Recovery Support",
    title: "Brain-Boosting Walnut-Date Snack",
    ingredients: [
      { name: "Walnuts", quantity: "5-6 halves" },
      { name: "Dates (pitted)", quantity: "2" },
      { name: "A pinch of cinnamon", quantity: "Optional" }
    ],
    method: [
      "Soak walnuts for 2 hours or overnight (easier to digest)",
      "Eat with dates as a snack",
      "Add cinnamon for extra flavor"
    ],
    how_often: "Once daily as a snack",
    precautions: [
      "⚠️ Supportive nutrition only",
      "Ensure nuts are soft enough if swallowing is affected",
      "Contains natural sugars from dates"
    ],
    benefits: [
      "Walnuts resemble brain shape - traditional brain food",
      "Omega-3 and antioxidants",
      "Natural energy boost"
    ],
    related_diseases: ["stroke-recovery", "brain-health", "memory"],
    difficulty: "Easy",
    preparation_time: "5 minutes (plus soaking)",
    region: "global"
  },
  {
    id: "remedy-stroke-4",
    problem: "Stroke Recovery Support",
    title: "Easy-to-Swallow Moong Dal Soup",
    ingredients: [
      { name: "Yellow moong dal", quantity: "1/4 cup" },
      { name: "Water", quantity: "2 cups" },
      { name: "Turmeric", quantity: "1/4 teaspoon" },
      { name: "Cumin powder", quantity: "1/4 teaspoon" },
      { name: "Salt", quantity: "To taste" },
      { name: "Ghee", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Wash dal and pressure cook with water and turmeric until very soft",
      "Blend until smooth (important for swallowing ease)",
      "Add cumin, salt, and ghee",
      "Serve warm"
    ],
    how_often: "As part of regular meals",
    precautions: [
      "⚠️ Supportive nutrition - work with speech therapist for swallowing",
      "Adjust consistency as needed for safe swallowing"
    ],
    benefits: [
      "Easy to digest protein",
      "Smooth texture for those with swallowing difficulties",
      "Traditional comfort food"
    ],
    related_diseases: ["stroke-recovery", "nutrition", "digestion"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "remedy-stroke-5",
    problem: "Stroke Recovery Support",
    title: "Circulation-Boosting Beetroot Juice",
    ingredients: [
      { name: "Beetroot", quantity: "1 small" },
      { name: "Carrot", quantity: "1 medium" },
      { name: "Apple", quantity: "1/2" },
      { name: "Ginger", quantity: "1/2 inch" },
      { name: "Water", quantity: "1/2 cup" }
    ],
    method: [
      "Wash and chop all ingredients",
      "Blend together with water",
      "Strain if desired",
      "Drink fresh"
    ],
    how_often: "Once daily, morning preferred",
    precautions: [
      "⚠️ Supportive care - not a treatment",
      "Beetroot may lower blood pressure - monitor if on BP meds",
      "May turn urine/stool pink (normal)"
    ],
    benefits: [
      "Nitrates in beetroot support blood flow",
      "Rich in vitamins and antioxidants",
      "Naturally sweet"
    ],
    related_diseases: ["stroke-recovery", "circulation", "blood-pressure"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },

  // --- AUTOIMMUNE SUPPORT ---
  {
    id: "remedy-autoimmune-1",
    problem: "Autoimmune Support",
    title: "Anti-Inflammatory Golden Milk",
    ingredients: [
      { name: "Warm milk (coconut/almond preferred)", quantity: "1 cup" },
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Ginger powder", quantity: "1/4 teaspoon" },
      { name: "Cinnamon", quantity: "1/4 teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the milk gently",
      "Whisk in all spices",
      "Add honey after removing from heat",
      "Drink warm"
    ],
    how_often: "Once daily, preferably evening",
    precautions: [
      "⚠️ Supportive care - continue prescribed immunosuppressants",
      "High turmeric may affect certain medications",
      "Consult rheumatologist before regular use"
    ],
    benefits: [
      "Curcumin has anti-inflammatory properties",
      "Warming and soothing",
      "Traditional Ayurvedic support"
    ],
    related_diseases: ["autoimmune-support", "inflammation", "rheumatoid-arthritis"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "remedy-autoimmune-2",
    problem: "Autoimmune Support",
    title: "Omega-3 Chia Pudding",
    ingredients: [
      { name: "Chia seeds", quantity: "3 tablespoons" },
      { name: "Coconut milk", quantity: "1 cup" },
      { name: "Maple syrup or honey", quantity: "1 tablespoon" },
      { name: "Vanilla extract", quantity: "1/4 teaspoon" },
      { name: "Fresh berries", quantity: "For topping" }
    ],
    method: [
      "Mix chia seeds with coconut milk",
      "Add sweetener and vanilla",
      "Stir well and refrigerate overnight",
      "Top with berries before serving"
    ],
    how_often: "3-4 times per week",
    precautions: [
      "⚠️ Supportive nutrition only",
      "Introduce chia gradually to avoid digestive issues",
      "Ensure adequate hydration"
    ],
    benefits: [
      "Rich in omega-3 fatty acids",
      "Anti-inflammatory potential",
      "Fiber supports gut health"
    ],
    related_diseases: ["autoimmune-support", "inflammation", "gut-health"],
    difficulty: "Easy",
    preparation_time: "5 minutes (plus overnight)",
    region: "global"
  },
  {
    id: "remedy-autoimmune-3",
    problem: "Autoimmune Support",
    title: "Gut-Healing Bone Broth",
    ingredients: [
      { name: "Chicken or vegetable bones/scraps", quantity: "1-2 lbs" },
      { name: "Water", quantity: "8 cups" },
      { name: "Apple cider vinegar", quantity: "2 tablespoons" },
      { name: "Onion, celery, carrots", quantity: "Chopped, 1 cup each" },
      { name: "Salt, pepper, herbs", quantity: "To taste" }
    ],
    method: [
      "Place bones and vegetables in large pot",
      "Add water and vinegar",
      "Bring to boil, then simmer for 12-24 hours",
      "Strain and season",
      "Store in refrigerator or freeze"
    ],
    how_often: "1 cup daily",
    precautions: [
      "⚠️ Supportive gut health measure",
      "Skim fat if needed for dietary restrictions",
      "Use within 5 days if refrigerated"
    ],
    benefits: [
      "Collagen and gelatin support gut lining",
      "Easy to digest",
      "Traditional healing food"
    ],
    related_diseases: ["autoimmune-support", "gut-health", "ibs"],
    difficulty: "Medium",
    preparation_time: "12-24 hours (mostly passive)",
    region: "global"
  },
  {
    id: "remedy-autoimmune-4",
    problem: "Autoimmune Support",
    title: "Soothing Aloe Vera Juice",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "2 tablespoons" },
      { name: "Water or coconut water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh gel from aloe vera leaf (avoid yellow latex)",
      "Blend with water until smooth",
      "Add lemon and honey",
      "Drink fresh"
    ],
    how_often: "Once daily on empty stomach",
    precautions: [
      "⚠️ May interact with immunosuppressants - consult doctor",
      "Use only inner gel, avoid latex (yellow part)",
      "Start with small amount to test tolerance"
    ],
    benefits: [
      "May support gut healing",
      "Hydrating and cooling",
      "Traditional digestive aid"
    ],
    related_diseases: ["autoimmune-support", "gut-health", "inflammation"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "remedy-autoimmune-5",
    problem: "Autoimmune Support",
    title: "Ashwagandha Adaptogen Tea",
    ingredients: [
      { name: "Ashwagandha root powder", quantity: "1/2 teaspoon" },
      { name: "Warm milk or water", quantity: "1 cup" },
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Heat milk/water with cinnamon",
      "Add ashwagandha powder and stir well",
      "Simmer for 2-3 minutes",
      "Strain, add honey, and drink"
    ],
    how_often: "Once daily, evening preferred",
    precautions: [
      "⚠️ May affect thyroid - avoid with Hashimoto's unless doctor approves",
      "May interact with immunosuppressants",
      "Not during pregnancy"
    ],
    benefits: [
      "Adaptogenic herb for stress support",
      "Traditional immune modulator in Ayurveda",
      "May help with fatigue"
    ],
    related_diseases: ["autoimmune-support", "stress", "fatigue"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "remedy-autoimmune-6",
    problem: "Autoimmune Support",
    title: "Anti-Inflammatory Ginger-Turmeric Shots",
    ingredients: [
      { name: "Fresh ginger juice", quantity: "1 tablespoon" },
      { name: "Fresh turmeric juice (or 1/4 tsp powder)", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Juice fresh ginger and turmeric (or use powder)",
      "Mix all ingredients in a small glass",
      "Take as a shot"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "⚠️ Check with doctor if on blood thinners or immunosuppressants",
      "Strong taste - may need to adjust",
      "Turmeric stains - handle carefully"
    ],
    benefits: [
      "Concentrated anti-inflammatory compounds",
      "Quick and potent",
      "Traditional immune support"
    ],
    related_diseases: ["autoimmune-support", "inflammation", "immunity"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // --- THYROID SUPPORT (AUTOIMMUNE) ---
  {
    id: "remedy-thyroid-auto-1",
    problem: "Thyroid Autoimmune Support",
    title: "Selenium-Rich Brazil Nut Snack",
    ingredients: [
      { name: "Brazil nuts", quantity: "2-3 nuts" },
      { name: "Dates", quantity: "1-2" }
    ],
    method: [
      "Eat 2-3 Brazil nuts with dates",
      "Chew thoroughly"
    ],
    how_often: "Once daily (do not exceed 3 nuts)",
    precautions: [
      "⚠️ Supportive nutrition - continue thyroid medication",
      "Selenium toxicity possible with excess - stick to 2-3 nuts max",
      "Check selenium levels with doctor"
    ],
    benefits: [
      "Brazil nuts are richest food source of selenium",
      "Selenium important for thyroid function",
      "Easy daily habit"
    ],
    related_diseases: ["hashimotos", "thyroid", "autoimmune-support"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "global"
  },
  {
    id: "remedy-thyroid-auto-2",
    problem: "Thyroid Autoimmune Support",
    title: "Coconut Oil Morning Routine",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "1 teaspoon" },
      { name: "Warm water or herbal tea", quantity: "Optional chaser" }
    ],
    method: [
      "Take 1 teaspoon of virgin coconut oil",
      "Swallow directly or add to warm drink",
      "Take on empty stomach"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "⚠️ Supportive care only - maintain medication schedule",
      "Medium-chain fats - generally well tolerated",
      "Start with 1/2 teaspoon if new to coconut oil"
    ],
    benefits: [
      "Medium-chain triglycerides for energy",
      "May support metabolism",
      "Easy to incorporate"
    ],
    related_diseases: ["thyroid", "autoimmune-support", "metabolism"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "global"
  },

  // --- METABOLIC CHRONIC: HIGH BLOOD PRESSURE ---
  {
    id: "remedy-bp-1",
    problem: "High Blood Pressure Support",
    title: "DASH-Friendly Banana Potassium Boost",
    ingredients: [
      { name: "Ripe banana", quantity: "1" },
      { name: "Plain yogurt (low-fat)", quantity: "1/2 cup" },
      { name: "Spinach leaves", quantity: "Handful" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Blend all ingredients until smooth",
      "Drink as a morning smoothie"
    ],
    how_often: "Once daily",
    precautions: [
      "⚠️ Supportive nutrition - continue BP medications",
      "High potassium - check with doctor if on potassium-sparing diuretics",
      "Monitor blood pressure regularly"
    ],
    benefits: [
      "Potassium helps balance sodium",
      "Supports healthy blood pressure",
      "Heart-healthy nutrients"
    ],
    related_diseases: ["hypertension", "heart-health", "metabolic"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "remedy-bp-2",
    problem: "High Blood Pressure Support",
    title: "Celery Seed Infusion",
    ingredients: [
      { name: "Celery seeds", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "Optional" }
    ],
    method: [
      "Crush celery seeds slightly",
      "Steep in hot water for 10 minutes",
      "Strain and add honey if desired",
      "Drink warm"
    ],
    how_often: "Once daily",
    precautions: [
      "⚠️ Supportive care - do not stop BP medication",
      "May increase sun sensitivity",
      "Avoid during pregnancy"
    ],
    benefits: [
      "Traditional remedy for blood pressure",
      "May have mild diuretic effect",
      "Calming properties"
    ],
    related_diseases: ["hypertension", "fluid-retention", "metabolic"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "remedy-bp-3",
    problem: "High Blood Pressure Support",
    title: "Hibiscus BP Tea",
    ingredients: [
      { name: "Dried hibiscus flowers", quantity: "2 tablespoons" },
      { name: "Water", quantity: "2 cups" },
      { name: "Lime juice", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "To taste" }
    ],
    method: [
      "Boil water and add hibiscus flowers",
      "Steep for 5-10 minutes until deep red",
      "Strain and add lime and honey",
      "Enjoy hot or cold"
    ],
    how_often: "2-3 cups daily",
    precautions: [
      "⚠️ May lower BP significantly - monitor levels",
      "Not with BP medications without doctor approval",
      "Avoid during pregnancy"
    ],
    benefits: [
      "Research supports BP-lowering effects",
      "Rich in antioxidants",
      "Refreshing taste"
    ],
    related_diseases: ["hypertension", "heart-health", "antioxidant"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },

  // --- METABOLIC CHRONIC: HIGH CHOLESTEROL ---
  {
    id: "remedy-cholesterol-1",
    problem: "High Cholesterol Support",
    title: "Oat Bran Heart-Healthy Breakfast",
    ingredients: [
      { name: "Oat bran", quantity: "1/2 cup" },
      { name: "Water or milk", quantity: "1 cup" },
      { name: "Walnuts (chopped)", quantity: "2 tablespoons" },
      { name: "Apple (diced)", quantity: "1/2" },
      { name: "Cinnamon", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Cook oat bran with water/milk until creamy",
      "Top with walnuts, apple, and cinnamon",
      "Eat warm"
    ],
    how_often: "Daily for breakfast",
    precautions: [
      "⚠️ Supportive diet - continue cholesterol medications if prescribed",
      "High fiber - increase water intake",
      "Monitor cholesterol levels regularly"
    ],
    benefits: [
      "Beta-glucan fiber binds cholesterol",
      "Heart-healthy omega-3 from walnuts",
      "Filling and nutritious"
    ],
    related_diseases: ["cholesterol", "heart-health", "metabolic"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "remedy-cholesterol-2",
    problem: "High Cholesterol Support",
    title: "Garlic-Lemon Morning Elixir",
    ingredients: [
      { name: "Raw garlic cloves", quantity: "2 (crushed)" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush garlic and let sit 10 minutes (activates allicin)",
      "Mix with warm water, lemon, and honey",
      "Drink on empty stomach"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "⚠️ May interact with blood thinners and statins",
      "Can cause bad breath and stomach upset",
      "Consult doctor if on cholesterol medication"
    ],
    benefits: [
      "Allicin may help lower LDL cholesterol",
      "Supports circulation",
      "Traditional heart tonic"
    ],
    related_diseases: ["cholesterol", "heart-health", "circulation"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "remedy-cholesterol-3",
    problem: "High Cholesterol Support",
    title: "Fenugreek Water Cholesterol Aid",
    ingredients: [
      { name: "Fenugreek seeds (Methi)", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Soak fenugreek seeds overnight in water",
      "Drink the water on empty stomach",
      "Chew the seeds or discard"
    ],
    how_often: "Daily in the morning",
    precautions: [
      "⚠️ May affect blood sugar and cholesterol meds",
      "Bitter taste",
      "Avoid during pregnancy"
    ],
    benefits: [
      "Soluble fiber may bind bile acids",
      "Traditional cholesterol remedy",
      "Also supports blood sugar"
    ],
    related_diseases: ["cholesterol", "diabetes", "metabolic"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking",
    region: "india"
  },

  // --- METABOLIC CHRONIC: FATTY LIVER ---
  {
    id: "remedy-liver-1",
    problem: "Fatty Liver Support",
    title: "Lemon-Turmeric Liver Flush",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1/2 lemon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" },
      { name: "Cayenne pepper", quantity: "A tiny pinch (optional)" }
    ],
    method: [
      "Squeeze lemon into warm water",
      "Add turmeric and cayenne",
      "Stir and drink first thing in the morning"
    ],
    how_often: "Daily on empty stomach",
    precautions: [
      "⚠️ Supportive care - liver disease needs medical monitoring",
      "Avoid if you have gallstones",
      "Turmeric may interact with medications"
    ],
    benefits: [
      "Supports liver detoxification pathways",
      "Vitamin C and antioxidants",
      "Hydrating morning ritual"
    ],
    related_diseases: ["fatty-liver", "liver-health", "detox"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "remedy-liver-fatty-2",
    problem: "Fatty Liver Support",
    title: "Bitter Greens Salad",
    ingredients: [
      { name: "Arugula or dandelion greens", quantity: "2 cups" },
      { name: "Radicchio", quantity: "1/2 cup" },
      { name: "Olive oil", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Walnuts", quantity: "2 tablespoons" }
    ],
    method: [
      "Wash and dry greens",
      "Toss with olive oil and lemon",
      "Top with walnuts",
      "Eat as a side dish with meals"
    ],
    how_often: "3-4 times per week",
    precautions: [
      "⚠️ Dietary support - continue medical monitoring",
      "Bitter taste - can adjust portions",
      "Wash greens thoroughly"
    ],
    benefits: [
      "Bitter compounds support bile flow",
      "Low calorie, nutrient-dense",
      "Healthy fats from olive oil and walnuts"
    ],
    related_diseases: ["fatty-liver", "digestion", "weight-loss"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "remedy-liver-fatty-3",
    problem: "Fatty Liver Support",
    title: "Amla-Aloe Liver Tonic",
    ingredients: [
      { name: "Amla juice", quantity: "2 tablespoons" },
      { name: "Aloe vera juice (food grade)", quantity: "2 tablespoons" },
      { name: "Water", quantity: "1/2 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix amla juice and aloe vera juice",
      "Add water and honey",
      "Stir and drink on empty stomach"
    ],
    how_often: "Once daily in the morning",
    precautions: [
      "⚠️ Not a cure - liver function needs medical monitoring",
      "Use only food-grade aloe vera juice",
      "Start with smaller amounts"
    ],
    benefits: [
      "Vitamin C from amla supports liver function",
      "Aloe may help with inflammation",
      "Traditional Ayurvedic liver support"
    ],
    related_diseases: ["fatty-liver", "liver-health", "detox"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // --- METABOLIC CHRONIC: TYPE 2 DIABETES SUPPORT ---
  {
    id: "remedy-diabetes-support-1",
    problem: "Type 2 Diabetes Support",
    title: "Cinnamon-Apple Cider Vinegar Drink",
    ingredients: [
      { name: "Apple cider vinegar (with mother)", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Cinnamon powder", quantity: "1/4 teaspoon" },
      { name: "Honey (optional)", quantity: "1/2 teaspoon" }
    ],
    method: [
      "Mix apple cider vinegar with warm water",
      "Add cinnamon and stir well",
      "Add minimal honey if needed",
      "Drink before meals"
    ],
    how_often: "1-2 times daily before meals",
    precautions: [
      "⚠️ IMPORTANT: Continue diabetes medications as prescribed",
      "May lower blood sugar - monitor levels closely",
      "Acidic - rinse mouth after to protect teeth"
    ],
    benefits: [
      "May improve insulin sensitivity",
      "Cinnamon traditionally used for blood sugar",
      "Low calorie"
    ],
    related_diseases: ["diabetes", "pre-diabetes", "metabolic"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "remedy-diabetes-support-2",
    problem: "Type 2 Diabetes Support",
    title: "Okra (Bhindi) Water",
    ingredients: [
      { name: "Fresh okra (bhindi)", quantity: "2-3 pods" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Wash okra and cut off ends",
      "Slice lengthwise and place in water",
      "Soak overnight",
      "Remove okra and drink the water in the morning"
    ],
    how_often: "Daily on empty stomach",
    precautions: [
      "⚠️ Supportive care - do not replace medication",
      "Slimy texture is normal",
      "Monitor blood sugar levels regularly"
    ],
    benefits: [
      "Soluble fiber may help with blood sugar",
      "Traditional remedy in South Asia",
      "Low calorie"
    ],
    related_diseases: ["diabetes", "pre-diabetes", "metabolic"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking",
    region: "india"
  },
  {
    id: "remedy-diabetes-support-3",
    problem: "Type 2 Diabetes Support",
    title: "Low-Glycemic Chia Seed Pudding",
    ingredients: [
      { name: "Chia seeds", quantity: "3 tablespoons" },
      { name: "Unsweetened almond milk", quantity: "1 cup" },
      { name: "Cinnamon", quantity: "1/4 teaspoon" },
      { name: "Vanilla extract", quantity: "1/4 teaspoon" },
      { name: "Berries", quantity: "For topping" }
    ],
    method: [
      "Mix chia seeds with almond milk",
      "Add cinnamon and vanilla",
      "Refrigerate for 2+ hours or overnight",
      "Top with low-glycemic berries"
    ],
    how_often: "As a healthy snack or breakfast",
    precautions: [
      "⚠️ Count carbs if tracking",
      "Fiber-rich - stay hydrated",
      "Natural sugars in berries - portion control"
    ],
    benefits: [
      "Low glycemic index",
      "Fiber slows glucose absorption",
      "Filling and satisfying"
    ],
    related_diseases: ["diabetes", "pre-diabetes", "weight-management"],
    difficulty: "Easy",
    preparation_time: "5 minutes (plus setting time)",
    region: "global"
  },
  {
    id: "remedy-diabetes-support-4",
    problem: "Type 2 Diabetes Support",
    title: "Karela-Amla Juice",
    ingredients: [
      { name: "Bitter gourd (karela)", quantity: "1 small" },
      { name: "Amla (Indian gooseberry)", quantity: "1" },
      { name: "Water", quantity: "1/2 cup" },
      { name: "Salt", quantity: "A pinch" }
    ],
    method: [
      "Remove seeds from karela",
      "Blend karela and amla with water",
      "Strain and add salt",
      "Drink fresh"
    ],
    how_often: "Once daily on empty stomach",
    precautions: [
      "⚠️ May cause hypoglycemia with medications - monitor closely",
      "Very bitter - adjust to taste",
      "Not during pregnancy"
    ],
    benefits: [
      "Both karela and amla traditionally used for blood sugar",
      "Rich in Vitamin C",
      "Potent combination"
    ],
    related_diseases: ["diabetes", "pre-diabetes", "immunity"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "india"
  },

  // --- IBD / ULCERATIVE COLITIS SUPPORT (AUTOIMMUNE) ---
  {
    id: "remedy-ibd-1",
    problem: "IBD Gut Support",
    title: "Soothing Rice Water",
    ingredients: [
      { name: "White rice", quantity: "1/2 cup" },
      { name: "Water", quantity: "4 cups" },
      { name: "Salt", quantity: "A pinch" }
    ],
    method: [
      "Boil rice in excess water until very soft",
      "Strain and collect the starchy water",
      "Add a pinch of salt",
      "Sip throughout the day"
    ],
    how_often: "During flares, as tolerated",
    precautions: [
      "⚠️ Supportive care during flares - follow GI doctor's plan",
      "Very bland - that's the point",
      "Resume regular diet as advised by doctor"
    ],
    benefits: [
      "Easily digestible",
      "Provides calories and hydration",
      "Gentle on inflamed gut"
    ],
    related_diseases: ["ibs", "ulcerative-colitis", "crohns-support"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "global"
  },
  {
    id: "remedy-ibd-2",
    problem: "IBD Gut Support",
    title: "Slippery Elm Soothing Drink",
    ingredients: [
      { name: "Slippery elm powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "Optional" }
    ],
    method: [
      "Mix slippery elm powder with warm water",
      "Stir until dissolved (forms a gel-like consistency)",
      "Add honey if desired",
      "Drink slowly"
    ],
    how_often: "1-2 times daily between meals",
    precautions: [
      "⚠️ May affect medication absorption - take 2 hours apart from meds",
      "Check with GI doctor before use",
      "Start with small amounts"
    ],
    benefits: [
      "Mucilage coats and soothes digestive tract",
      "Traditional remedy for GI issues",
      "May help with discomfort"
    ],
    related_diseases: ["ibs", "ulcerative-colitis", "gut-health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },

  // --- RHEUMATOID ARTHRITIS SUPPORT (AUTOIMMUNE) ---
  {
    id: "remedy-ra-1",
    problem: "Rheumatoid Arthritis Support",
    title: "Anti-Inflammatory Cherry Juice",
    ingredients: [
      { name: "Tart cherry juice (unsweetened)", quantity: "1 cup" },
      { name: "Ginger (grated)", quantity: "1/2 teaspoon" },
      { name: "Turmeric powder", quantity: "1/4 teaspoon" }
    ],
    method: [
      "Mix ginger and turmeric into cherry juice",
      "Stir well",
      "Drink cold or at room temperature"
    ],
    how_often: "Once daily",
    precautions: [
      "⚠️ Supportive care - continue RA medications",
      "Natural sugars in juice - monitor if diabetic",
      "May interact with blood thinners"
    ],
    benefits: [
      "Anthocyanins have anti-inflammatory properties",
      "May help with joint pain",
      "Tasty and easy to consume"
    ],
    related_diseases: ["rheumatoid-arthritis", "joint-pain", "inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "remedy-ra-2",
    problem: "Rheumatoid Arthritis Support",
    title: "Epsom Salt Warm Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Warm bath water", quantity: "Full tub" },
      { name: "Lavender essential oil (optional)", quantity: "5-10 drops" }
    ],
    method: [
      "Fill bathtub with warm (not hot) water",
      "Add Epsom salt and stir to dissolve",
      "Add lavender oil if desired",
      "Soak for 15-20 minutes"
    ],
    how_often: "2-3 times per week",
    precautions: [
      "⚠️ External use only - supportive comfort measure",
      "Avoid very hot water if you have circulatory issues",
      "Stay hydrated during soak"
    ],
    benefits: [
      "Magnesium may be absorbed through skin",
      "Warm water relaxes muscles",
      "Stress relief"
    ],
    related_diseases: ["rheumatoid-arthritis", "muscle-pain", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },

  // --- ADDITIONAL METABOLIC SUPPORT ---
  {
    id: "remedy-metabolic-1",
    problem: "Metabolic Syndrome Support",
    title: "Green Tea Metabolism Booster",
    ingredients: [
      { name: "Green tea bag or loose leaves", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Lemon slice", quantity: "1" },
      { name: "Mint leaves", quantity: "2-3" }
    ],
    method: [
      "Steep green tea in hot (not boiling) water for 2-3 minutes",
      "Add lemon and mint",
      "Drink warm"
    ],
    how_often: "2-3 cups daily",
    precautions: [
      "⚠️ Contains caffeine - avoid late in day",
      "May affect iron absorption - drink between meals",
      "Check with doctor if on blood thinners"
    ],
    benefits: [
      "EGCG catechins support metabolism",
      "Antioxidant-rich",
      "May support weight management"
    ],
    related_diseases: ["metabolic-syndrome", "weight-loss", "energy"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "remedy-metabolic-2",
    problem: "Metabolic Syndrome Support",
    title: "Fiber-Rich Isabgol (Psyllium) Drink",
    ingredients: [
      { name: "Isabgol (psyllium husk)", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 teaspoon (optional)" }
    ],
    method: [
      "Add isabgol to water",
      "Stir quickly and drink immediately (it thickens fast)",
      "Follow with another glass of water"
    ],
    how_often: "Once daily, preferably before bed",
    precautions: [
      "⚠️ Take 2 hours apart from medications",
      "Must drink enough water - can cause blockage if dehydrated",
      "Start with small amounts"
    ],
    benefits: [
      "Soluble fiber supports cholesterol and blood sugar",
      "Promotes regular bowel movements",
      "Supports gut health"
    ],
    related_diseases: ["metabolic-syndrome", "constipation", "cholesterol"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india"
  },
  // ============================================
  // KITCHEN REMEDIES - Common Household Ingredients
  // ============================================
  {
    id: "kitchen-1",
    problem: "Indigestion",
    title: "Cumin Fennel Digestive Water",
    ingredients: [
      { name: "Cumin seeds (Jeera)", quantity: "1 teaspoon" },
      { name: "Fennel seeds (Saunf)", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Boil water with cumin and fennel seeds",
      "Simmer for 5 minutes",
      "Strain and drink warm",
      "Can add a pinch of rock salt"
    ],
    how_often: "After heavy meals or when bloated",
    precautions: ["Safe for most people", "Reduce quantity for children"],
    benefits: ["Relieves bloating", "Improves digestion", "Reduces gas"],
    related_diseases: ["indigestion", "bloating", "gas"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "kitchen-2",
    problem: "Sore Throat",
    title: "Salt Water Gargle with Turmeric",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Salt", quantity: "½ teaspoon" },
      { name: "Turmeric powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Warm the water (not too hot)",
      "Add salt and turmeric",
      "Mix well until dissolved",
      "Gargle for 30 seconds, spit out",
      "Repeat 3-4 times"
    ],
    how_often: "3-4 times daily",
    precautions: ["Do not swallow", "Not for children under 6"],
    benefits: ["Kills bacteria", "Reduces inflammation", "Soothes throat"],
    related_diseases: ["sore-throat", "cold", "cough"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-3",
    problem: "Headache",
    title: "Ginger Lemon Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch piece" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Grate or slice the ginger",
      "Boil water with ginger for 5 minutes",
      "Strain and add lemon juice",
      "Add honey when slightly cooled",
      "Drink slowly while warm"
    ],
    how_often: "When headache occurs, up to 3 times daily",
    precautions: ["Avoid if you have acid reflux", "Reduce ginger for sensitive stomachs"],
    benefits: ["Reduces inflammation", "Improves blood circulation", "Natural pain relief"],
    related_diseases: ["headache", "migraine", "stress"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-4",
    problem: "Cough",
    title: "Honey Pepper Remedy",
    ingredients: [
      { name: "Raw honey", quantity: "1 tablespoon" },
      { name: "Black pepper powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Mix honey and black pepper thoroughly",
      "Take slowly, letting it coat the throat",
      "Do not drink water immediately after"
    ],
    how_often: "2-3 times daily",
    precautions: ["Not for children under 1 year", "Diabetics should limit honey"],
    benefits: ["Soothes cough", "Clears congestion", "Antibacterial properties"],
    related_diseases: ["cough", "cold", "sore-throat"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-5",
    problem: "Nausea",
    title: "Mint Ginger Infusion",
    ingredients: [
      { name: "Fresh mint leaves", quantity: "10-12 leaves" },
      { name: "Fresh ginger", quantity: "½ inch" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Crush mint leaves slightly",
      "Slice ginger thinly",
      "Boil water and add both ingredients",
      "Steep for 5 minutes",
      "Strain and sip slowly"
    ],
    how_often: "As needed for nausea",
    precautions: ["Avoid in severe vomiting", "Consult doctor if persistent"],
    benefits: ["Settles stomach", "Reduces nausea", "Refreshing"],
    related_diseases: ["nausea", "motion-sickness", "indigestion"],
    difficulty: "Easy",
    preparation_time: "8 minutes",
    region: "global"
  },
  {
    id: "kitchen-6",
    problem: "Acidity",
    title: "Cold Milk with Fennel",
    ingredients: [
      { name: "Cold milk", quantity: "1 glass" },
      { name: "Fennel seed powder", quantity: "½ teaspoon" }
    ],
    method: [
      "Add fennel powder to cold milk",
      "Mix well and drink slowly",
      "Best taken after meals"
    ],
    how_often: "After meals when experiencing acidity",
    precautions: ["Avoid if lactose intolerant", "Use plant milk alternative if needed"],
    benefits: ["Neutralizes acid", "Cools the stomach", "Instant relief"],
    related_diseases: ["acidity", "heartburn", "gerd"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india"
  },
  {
    id: "kitchen-7",
    problem: "Constipation",
    title: "Warm Lemon Water with Honey",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the water (not boiling)",
      "Add fresh lemon juice",
      "Mix in honey",
      "Drink first thing in the morning on empty stomach"
    ],
    how_often: "Daily morning on empty stomach",
    precautions: ["Wait 30 minutes before eating", "Rinse mouth after to protect enamel"],
    benefits: ["Stimulates bowel movement", "Hydrates body", "Detoxifies liver"],
    related_diseases: ["constipation", "detox", "digestion"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-8",
    problem: "Cold",
    title: "Turmeric Milk (Haldi Doodh)",
    ingredients: [
      { name: "Milk", quantity: "1 cup" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon (optional)" }
    ],
    method: [
      "Heat milk until warm",
      "Add turmeric and black pepper",
      "Stir well and simmer for 2 minutes",
      "Add honey if desired",
      "Drink warm before bed"
    ],
    how_often: "Once daily, preferably at night",
    precautions: ["Not for those with gallbladder issues", "Black pepper helps absorption"],
    benefits: ["Boosts immunity", "Anti-inflammatory", "Promotes sleep"],
    related_diseases: ["cold", "immunity", "inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-9",
    problem: "Insomnia",
    title: "Nutmeg Warm Milk",
    ingredients: [
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Nutmeg powder (Jaiphal)", quantity: "A pinch" },
      { name: "Cardamom powder", quantity: "A pinch" }
    ],
    method: [
      "Warm the milk gently",
      "Add nutmeg and cardamom powder",
      "Stir well and drink 30 minutes before bed"
    ],
    how_often: "Nightly before bed",
    precautions: ["Do not exceed nutmeg quantity", "Not for children under 5"],
    benefits: ["Promotes sleep", "Calms the mind", "Relaxes muscles"],
    related_diseases: ["insomnia", "stress", "anxiety"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-10",
    problem: "Low Energy",
    title: "Banana Honey Energy Booster",
    ingredients: [
      { name: "Ripe banana", quantity: "1 medium" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Cinnamon powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Mash the banana well",
      "Mix in honey and cinnamon",
      "Eat as a quick energy snack"
    ],
    how_often: "When feeling low energy, 1-2 times daily",
    precautions: ["Diabetics should limit quantity", "Best as mid-morning snack"],
    benefits: ["Instant energy", "Natural sugars", "Rich in potassium"],
    related_diseases: ["fatigue", "low-energy", "weakness"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-11",
    problem: "Bad Breath",
    title: "Cardamom Clove Mouth Freshener",
    ingredients: [
      { name: "Cardamom (Elaichi)", quantity: "2 pods" },
      { name: "Cloves (Laung)", quantity: "2 pieces" }
    ],
    method: [
      "Chew cardamom and cloves slowly",
      "Let the oils release in your mouth",
      "Can swallow or spit out after chewing"
    ],
    how_often: "After meals or as needed",
    precautions: ["Don't chew too many cloves", "Safe for most adults"],
    benefits: ["Freshens breath", "Kills bacteria", "Aids digestion"],
    related_diseases: ["bad-breath", "oral-health", "digestion"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "india"
  },
  {
    id: "kitchen-12",
    problem: "Skin Glow",
    title: "Yogurt Honey Face Mask",
    ingredients: [
      { name: "Fresh yogurt (dahi)", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Turmeric", quantity: "A pinch" }
    ],
    method: [
      "Mix all ingredients to form smooth paste",
      "Apply evenly on clean face",
      "Leave for 15-20 minutes",
      "Rinse with lukewarm water"
    ],
    how_often: "2-3 times weekly",
    precautions: ["Patch test first", "Turmeric may temporarily stain fair skin"],
    benefits: ["Natural glow", "Moisturizes skin", "Reduces tan"],
    related_diseases: ["dull-skin", "dry-skin", "skin-care"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "kitchen-13",
    problem: "Hair Fall",
    title: "Coconut Oil Curry Leaves Treatment",
    ingredients: [
      { name: "Coconut oil", quantity: "4 tablespoons" },
      { name: "Fresh curry leaves (Kadi patta)", quantity: "15-20 leaves" }
    ],
    method: [
      "Heat coconut oil on low flame",
      "Add curry leaves and let them infuse",
      "Heat until leaves turn crispy",
      "Cool and strain the oil",
      "Massage into scalp and leave overnight"
    ],
    how_often: "2-3 times weekly",
    precautions: ["Do patch test", "Wash hair next morning with mild shampoo"],
    benefits: ["Strengthens hair roots", "Prevents premature greying", "Promotes growth"],
    related_diseases: ["hair-fall", "grey-hair", "weak-hair"],
    difficulty: "Medium",
    preparation_time: "20 minutes + overnight",
    region: "india"
  },
  {
    id: "kitchen-14",
    problem: "Joint Pain",
    title: "Warm Mustard Oil Massage",
    ingredients: [
      { name: "Mustard oil", quantity: "2 tablespoons" },
      { name: "Garlic cloves", quantity: "2-3 crushed" },
      { name: "Dried ginger powder", quantity: "½ teaspoon" }
    ],
    method: [
      "Heat mustard oil gently",
      "Add crushed garlic and ginger powder",
      "Warm until garlic turns light brown",
      "Cool slightly and massage on affected joints",
      "Wrap with warm cloth for 30 minutes"
    ],
    how_often: "Daily or when pain occurs",
    precautions: ["Test temperature before applying", "Don't apply on broken skin"],
    benefits: ["Reduces inflammation", "Improves circulation", "Relieves stiffness"],
    related_diseases: ["joint-pain", "arthritis", "muscle-pain"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-15",
    problem: "Immunity",
    title: "Tulsi Ginger Kadha",
    ingredients: [
      { name: "Fresh tulsi leaves", quantity: "10-12 leaves" },
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Black pepper", quantity: "4-5 whole" },
      { name: "Jaggery (Gud)", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Crush tulsi leaves and ginger",
      "Boil water with all ingredients",
      "Simmer until reduced to 1 cup",
      "Strain and add jaggery",
      "Drink warm"
    ],
    how_often: "Once daily, especially during monsoon/winter",
    precautions: ["Reduce if too heating", "Pregnant women consult doctor"],
    benefits: ["Boosts immunity", "Fights infections", "Clears respiratory tract"],
    related_diseases: ["immunity", "cold", "cough", "infections"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-16",
    problem: "Bloating",
    title: "Ajwain Water (Carom Seeds)",
    ingredients: [
      { name: "Ajwain (Carom seeds)", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Black salt", quantity: "A pinch" }
    ],
    method: [
      "Roast ajwain lightly on a pan",
      "Add to warm water",
      "Add black salt and mix",
      "Drink warm after meals"
    ],
    how_often: "After heavy meals or when bloated",
    precautions: ["Avoid during pregnancy", "Reduce quantity if too heating"],
    benefits: ["Relieves gas", "Aids digestion", "Reduces bloating instantly"],
    related_diseases: ["bloating", "gas", "indigestion"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-17",
    problem: "Tooth Pain",
    title: "Clove Oil Application",
    ingredients: [
      { name: "Clove oil", quantity: "2-3 drops" },
      { name: "Cotton ball", quantity: "1 small" }
    ],
    method: [
      "Soak cotton ball in clove oil",
      "Apply directly on the painful tooth",
      "Leave for 10-15 minutes",
      "Repeat as needed"
    ],
    how_often: "Every 2-3 hours as needed for pain",
    precautions: ["Do not swallow", "Avoid on broken gums", "See dentist for persistent pain"],
    benefits: ["Natural anesthetic", "Antibacterial", "Reduces inflammation"],
    related_diseases: ["tooth-pain", "gum-pain", "oral-health"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-18",
    problem: "Menstrual Cramps",
    title: "Ginger Jaggery Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch grated" },
      { name: "Jaggery (Gud)", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1.5 cups" }
    ],
    method: [
      "Boil water with grated ginger",
      "Simmer for 7-8 minutes",
      "Strain and add jaggery",
      "Drink warm 2-3 times during period"
    ],
    how_often: "2-3 times daily during menstruation",
    precautions: ["Avoid if you have heavy bleeding", "Reduce ginger if too heating"],
    benefits: ["Reduces cramps", "Warms the body", "Provides iron from jaggery"],
    related_diseases: ["menstrual-cramps", "period-pain", "dysmenorrhea"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "india"
  },
  {
    id: "kitchen-19",
    problem: "Eye Strain",
    title: "Cucumber Eye Compress",
    ingredients: [
      { name: "Fresh cucumber", quantity: "1 medium" },
      { name: "Rose water (optional)", quantity: "Few drops" }
    ],
    method: [
      "Refrigerate cucumber for 30 minutes",
      "Cut into thick slices",
      "Optionally soak in rose water",
      "Place on closed eyes for 15 minutes",
      "Relax in dark room"
    ],
    how_often: "Daily after prolonged screen time",
    precautions: ["Do not press on eyes", "Remove if any irritation"],
    benefits: ["Reduces strain", "Cools tired eyes", "Reduces puffiness"],
    related_diseases: ["eye-strain", "computer-vision", "tired-eyes"],
    difficulty: "Easy",
    preparation_time: "35 minutes (including chilling)",
    region: "global"
  },
  {
    id: "kitchen-20",
    problem: "Hiccups",
    title: "Sugar and Lemon Remedy",
    ingredients: [
      { name: "Sugar", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "Few drops" }
    ],
    method: [
      "Place sugar on tongue",
      "Add a few drops of lemon juice",
      "Let it dissolve slowly",
      "Swallow gradually"
    ],
    how_often: "When hiccups occur",
    precautions: ["Not for diabetics", "Works best for sudden hiccups"],
    benefits: ["Stimulates vagus nerve", "Stops hiccups quickly", "Safe remedy"],
    related_diseases: ["hiccups"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "global"
  },
  {
    id: "kitchen-21",
    problem: "Motion Sickness",
    title: "Ginger Candy or Fresh Ginger",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 small piece" },
      { name: "Salt", quantity: "A pinch" },
      { name: "Lemon juice", quantity: "Few drops" }
    ],
    method: [
      "Slice ginger into thin pieces",
      "Add salt and lemon juice",
      "Chew slowly before and during travel",
      "Keep extra pieces for the journey"
    ],
    how_often: "Before and during travel",
    precautions: ["May cause heartburn in some", "Start with small quantity"],
    benefits: ["Prevents nausea", "Settles stomach", "Natural anti-emetic"],
    related_diseases: ["motion-sickness", "nausea", "travel-sickness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-22",
    problem: "Mouth Ulcers",
    title: "Honey and Coconut Oil Application",
    ingredients: [
      { name: "Raw honey", quantity: "½ teaspoon" },
      { name: "Virgin coconut oil", quantity: "½ teaspoon" }
    ],
    method: [
      "Mix honey and coconut oil well",
      "Apply directly on ulcer using clean finger",
      "Leave for 10-15 minutes",
      "Repeat 3-4 times daily"
    ],
    how_often: "3-4 times daily until healed",
    precautions: ["Use clean hands", "Avoid eating immediately after"],
    benefits: ["Antibacterial", "Promotes healing", "Reduces pain"],
    related_diseases: ["mouth-ulcers", "canker-sores", "oral-health"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-23",
    problem: "Dark Circles",
    title: "Potato Juice Eye Treatment",
    ingredients: [
      { name: "Raw potato", quantity: "1 medium" },
      { name: "Cotton pads", quantity: "2" }
    ],
    method: [
      "Grate potato and extract juice",
      "Refrigerate juice for 15 minutes",
      "Soak cotton pads in cold juice",
      "Place on closed eyes for 20 minutes",
      "Rinse with cold water"
    ],
    how_often: "Daily before bed",
    precautions: ["Avoid contact with eyes", "Stop if irritation occurs"],
    benefits: ["Natural bleaching", "Reduces puffiness", "Lightens dark circles"],
    related_diseases: ["dark-circles", "under-eye", "tired-eyes"],
    difficulty: "Easy",
    preparation_time: "25 minutes",
    region: "global"
  },
  {
    id: "kitchen-24",
    problem: "Dandruff",
    title: "Lemon Coconut Oil Scalp Treatment",
    ingredients: [
      { name: "Coconut oil", quantity: "3 tablespoons" },
      { name: "Fresh lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Warm coconut oil slightly",
      "Add fresh lemon juice and mix",
      "Massage into scalp for 10 minutes",
      "Leave for 30 minutes",
      "Wash with mild shampoo"
    ],
    how_often: "2-3 times weekly",
    precautions: ["Don't go in sun with lemon on hair", "Reduce lemon if scalp is sensitive"],
    benefits: ["Anti-fungal", "Reduces dandruff", "Moisturizes scalp"],
    related_diseases: ["dandruff", "itchy-scalp", "dry-scalp"],
    difficulty: "Easy",
    preparation_time: "45 minutes",
    region: "india"
  },
  {
    id: "kitchen-25",
    problem: "Sunburn",
    title: "Aloe Cucumber Cooling Gel",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "2 tablespoons" },
      { name: "Cucumber juice", quantity: "2 tablespoons" },
      { name: "Rose water", quantity: "1 tablespoon" }
    ],
    method: [
      "Extract fresh aloe vera gel",
      "Blend cucumber and strain juice",
      "Mix all ingredients well",
      "Refrigerate for 30 minutes",
      "Apply generously on sunburned areas"
    ],
    how_often: "Every 2-3 hours on sunburned skin",
    precautions: ["Do patch test first", "Keep refrigerated"],
    benefits: ["Cools skin instantly", "Promotes healing", "Reduces redness"],
    related_diseases: ["sunburn", "skin-burn", "heat-rash"],
    difficulty: "Easy",
    preparation_time: "40 minutes",
    region: "global"
  },
  {
    id: "kitchen-26",
    problem: "Dry Cough",
    title: "Onion Honey Syrup",
    ingredients: [
      { name: "Red onion", quantity: "1 medium" },
      { name: "Raw honey", quantity: "4 tablespoons" }
    ],
    method: [
      "Slice onion thinly",
      "Layer in a jar alternating onion and honey",
      "Cover and leave overnight",
      "Strain the syrup in morning",
      "Take 1 teaspoon as needed"
    ],
    how_often: "1 teaspoon every 2-3 hours",
    precautions: ["Not for children under 1", "Refrigerate after making"],
    benefits: ["Natural expectorant", "Soothes throat", "Antibacterial"],
    related_diseases: ["dry-cough", "cough", "throat-irritation"],
    difficulty: "Easy",
    preparation_time: "Overnight + 5 minutes",
    region: "global"
  },
  {
    id: "kitchen-27",
    problem: "Stomach Ache",
    title: "Hing Water (Asafoetida)",
    ingredients: [
      { name: "Hing (Asafoetida)", quantity: "A tiny pinch" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Add a tiny pinch of hing to warm water",
      "Stir well until dissolved",
      "Drink slowly while warm"
    ],
    how_often: "When stomach ache occurs",
    precautions: ["Use very small quantity", "Avoid during pregnancy", "Strong smell is normal"],
    benefits: ["Relieves cramps", "Reduces gas", "Aids digestion"],
    related_diseases: ["stomach-ache", "cramps", "gas"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india"
  },
  {
    id: "kitchen-28",
    problem: "Fever",
    title: "Coriander Seed Decoction",
    ingredients: [
      { name: "Coriander seeds (Dhania)", quantity: "1 tablespoon" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush coriander seeds lightly",
      "Boil in water for 10 minutes",
      "Strain and cool slightly",
      "Add honey and drink warm"
    ],
    how_often: "2-3 times daily during fever",
    precautions: ["Stay hydrated", "See doctor if fever persists over 3 days"],
    benefits: ["Reduces fever", "Aids sweating", "Gentle on stomach"],
    related_diseases: ["fever", "viral-fever", "flu"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-29",
    problem: "Weight Loss",
    title: "Apple Cider Vinegar Drink",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "½ teaspoon" },
      { name: "Cinnamon powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Add apple cider vinegar to warm water",
      "Mix in honey and cinnamon",
      "Stir well and drink before meals"
    ],
    how_often: "Once daily before breakfast",
    precautions: ["Dilute well to protect teeth", "May cause acidity in some"],
    benefits: ["Boosts metabolism", "Reduces appetite", "Aids fat burning"],
    related_diseases: ["weight-loss", "obesity", "metabolism"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-30",
    problem: "Acne",
    title: "Neem Turmeric Paste",
    ingredients: [
      { name: "Neem powder", quantity: "1 tablespoon" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Rose water", quantity: "As needed" }
    ],
    method: [
      "Mix neem and turmeric powders",
      "Add rose water to make thick paste",
      "Apply on affected areas",
      "Leave for 20 minutes",
      "Wash with lukewarm water"
    ],
    how_often: "3 times weekly",
    precautions: ["Patch test first", "May cause dryness", "Turmeric stains temporarily"],
    benefits: ["Antibacterial", "Reduces inflammation", "Prevents new acne"],
    related_diseases: ["acne", "pimples", "skin-infections"],
    difficulty: "Easy",
    preparation_time: "25 minutes",
    region: "india"
  },
  {
    id: "kitchen-31",
    problem: "Anxiety",
    title: "Chamomile Lavender Tea",
    ingredients: [
      { name: "Chamomile flowers/tea bag", quantity: "1 tablespoon or 1 bag" },
      { name: "Dried lavender", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: [
      "Steep chamomile and lavender in hot water",
      "Cover and let sit for 5-7 minutes",
      "Strain and add honey",
      "Drink slowly in a quiet space"
    ],
    how_often: "1-2 times daily, especially before bed",
    precautions: ["Avoid if allergic to ragweed", "May cause drowsiness"],
    benefits: ["Calms nerves", "Reduces anxiety", "Promotes sleep"],
    related_diseases: ["anxiety", "stress", "insomnia"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-32",
    problem: "Cracked Heels",
    title: "Coconut Oil Honey Heel Mask",
    ingredients: [
      { name: "Coconut oil", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix all ingredients well",
      "Soak feet in warm water for 10 minutes",
      "Scrub heels gently with pumice stone",
      "Apply mixture and massage well",
      "Wear cotton socks overnight"
    ],
    how_often: "3-4 times weekly",
    precautions: ["Don't walk around after applying", "Use cotton socks only"],
    benefits: ["Deep moisturizing", "Heals cracks", "Softens skin"],
    related_diseases: ["cracked-heels", "dry-feet", "foot-care"],
    difficulty: "Easy",
    preparation_time: "20 minutes + overnight",
    region: "global"
  },
  {
    id: "kitchen-33",
    problem: "High Blood Pressure",
    title: "Garlic Lemon Morning Drink",
    ingredients: [
      { name: "Garlic cloves", quantity: "2 crushed" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush garlic and let sit for 10 minutes (activates allicin)",
      "Add to warm water with lemon and honey",
      "Mix well and drink on empty stomach"
    ],
    how_often: "Daily morning on empty stomach",
    precautions: ["Monitor BP regularly", "May interact with BP medications", "Consult doctor first"],
    benefits: ["Natural BP reducer", "Blood thinner", "Heart healthy"],
    related_diseases: ["high-bp", "hypertension", "heart-health"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "kitchen-34",
    problem: "Cholesterol",
    title: "Oats Apple Breakfast",
    ingredients: [
      { name: "Rolled oats", quantity: "½ cup" },
      { name: "Apple (chopped)", quantity: "1 medium" },
      { name: "Cinnamon powder", quantity: "½ teaspoon" },
      { name: "Walnuts (chopped)", quantity: "5-6 pieces" },
      { name: "Water/Milk", quantity: "1 cup" }
    ],
    method: [
      "Cook oats in water or milk",
      "Add chopped apple and cinnamon",
      "Top with walnuts",
      "Eat warm for breakfast"
    ],
    how_often: "Daily breakfast",
    precautions: ["Choose whole rolled oats", "Avoid instant oats with sugar"],
    benefits: ["Reduces LDL cholesterol", "High fiber", "Heart healthy fats from walnuts"],
    related_diseases: ["high-cholesterol", "heart-health", "weight-management"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-35",
    problem: "Diabetes Support",
    title: "Cinnamon Water",
    ingredients: [
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Hot water", quantity: "1 glass" }
    ],
    method: [
      "Add cinnamon stick to hot water",
      "Let steep for 10-15 minutes",
      "Remove stick and drink warm",
      "Can reuse stick for 2-3 times"
    ],
    how_often: "1-2 times daily",
    precautions: ["Monitor blood sugar", "Use Ceylon cinnamon if possible", "Consult doctor if on diabetes medication"],
    benefits: ["Helps regulate blood sugar", "Improves insulin sensitivity", "Antioxidant"],
    related_diseases: ["diabetes", "pre-diabetes", "blood-sugar"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "kitchen-36",
    problem: "Diarrhea",
    title: "Rice Water (Kanji)",
    ingredients: [
      { name: "Rice", quantity: "½ cup" },
      { name: "Water", quantity: "4 cups" },
      { name: "Salt", quantity: "A pinch" }
    ],
    method: [
      "Wash rice thoroughly",
      "Boil in excess water",
      "Cook until rice is very soft",
      "Strain the starchy water",
      "Add salt and drink warm"
    ],
    how_often: "Multiple times daily during diarrhea",
    precautions: ["Stay hydrated", "See doctor if blood in stool or fever"],
    benefits: ["Replaces fluids", "Provides energy", "Gentle on stomach"],
    related_diseases: ["diarrhea", "loose-motion", "dehydration"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "kitchen-37",
    problem: "Leg Cramps",
    title: "Banana Magnesium Smoothie",
    ingredients: [
      { name: "Ripe banana", quantity: "1 large" },
      { name: "Yogurt", quantity: "½ cup" },
      { name: "Milk", quantity: "½ cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Blend all ingredients until smooth",
      "Drink immediately",
      "Best consumed in the evening"
    ],
    how_often: "Daily if prone to cramps",
    precautions: ["Good before/after exercise", "Avoid if lactose intolerant"],
    benefits: ["High in potassium", "Provides magnesium", "Prevents muscle cramps"],
    related_diseases: ["leg-cramps", "muscle-cramps", "restless-legs"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-38",
    problem: "Hangover",
    title: "Coconut Water Ginger Drink",
    ingredients: [
      { name: "Coconut water", quantity: "1 glass" },
      { name: "Fresh ginger juice", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix all ingredients well",
      "Drink slowly",
      "Follow with another glass of plain water"
    ],
    how_often: "Morning after drinking",
    precautions: ["Drink plenty of water", "Eat light food", "Rest well"],
    benefits: ["Rehydrates quickly", "Replenishes electrolytes", "Settles stomach"],
    related_diseases: ["hangover", "dehydration", "nausea"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-39",
    problem: "Weak Immunity",
    title: "Amla Honey Power Shot",
    ingredients: [
      { name: "Fresh amla juice", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "¼ cup" }
    ],
    method: [
      "Mix amla juice with warm water",
      "Add honey and stir well",
      "Drink as a morning shot"
    ],
    how_often: "Daily morning",
    precautions: ["Fresh amla is best", "Can use amla powder if fresh unavailable"],
    benefits: ["Highest Vitamin C source", "Boosts immunity", "Antioxidant rich"],
    related_diseases: ["weak-immunity", "frequent-colds", "low-energy"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-40",
    problem: "Ear Pain",
    title: "Warm Garlic Mustard Oil Drops",
    ingredients: [
      { name: "Mustard oil", quantity: "1 tablespoon" },
      { name: "Garlic clove", quantity: "1 crushed" }
    ],
    method: [
      "Heat mustard oil with crushed garlic",
      "Let garlic turn slightly brown",
      "Cool until lukewarm (test on wrist)",
      "Put 2-3 drops in affected ear",
      "Keep head tilted for 5 minutes"
    ],
    how_often: "2-3 times daily for mild ear pain",
    precautions: ["NEVER use if eardrum is perforated", "Must be lukewarm only", "See doctor if pain persists or discharge present"],
    benefits: ["Antibacterial", "Reduces pain", "Traditional remedy"],
    related_diseases: ["ear-pain", "ear-infection", "swimmer-ear"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "kitchen-41",
    problem: "Runny Nose",
    title: "Steam Inhalation with Ajwain",
    ingredients: [
      { name: "Ajwain (Carom seeds)", quantity: "1 tablespoon" },
      { name: "Hot water", quantity: "1 large bowl" },
      { name: "Eucalyptus oil (optional)", quantity: "2 drops" }
    ],
    method: [
      "Boil water and pour in large bowl",
      "Add ajwain and eucalyptus oil",
      "Cover head with towel",
      "Inhale steam for 10 minutes",
      "Keep eyes closed"
    ],
    how_often: "2-3 times daily during cold",
    precautions: ["Keep safe distance from hot water", "Not for small children", "Stop if dizzy"],
    benefits: ["Opens nasal passages", "Kills germs", "Relieves congestion"],
    related_diseases: ["runny-nose", "cold", "sinusitis", "congestion"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-42",
    problem: "Chest Congestion",
    title: "Mustard Plaster Compress",
    ingredients: [
      { name: "Mustard powder", quantity: "1 tablespoon" },
      { name: "Flour", quantity: "4 tablespoons" },
      { name: "Warm water", quantity: "As needed" },
      { name: "Coconut oil", quantity: "For skin protection" }
    ],
    method: [
      "Mix mustard powder with flour",
      "Add warm water to make thick paste",
      "Apply coconut oil on chest first",
      "Spread paste on clean cloth",
      "Place on chest for 15-20 minutes"
    ],
    how_often: "Once daily during congestion",
    precautions: ["Do not apply directly on skin", "Remove if burning sensation", "Not for children under 6"],
    benefits: ["Warms chest", "Loosens mucus", "Improves breathing"],
    related_diseases: ["chest-congestion", "bronchitis", "cough"],
    difficulty: "Medium",
    preparation_time: "25 minutes",
    region: "global"
  },
  {
    id: "kitchen-43",
    problem: "Fatigue",
    title: "Dates Almond Energy Balls",
    ingredients: [
      { name: "Dates (Khajoor)", quantity: "10 pieces" },
      { name: "Almonds", quantity: "10 pieces" },
      { name: "Coconut powder", quantity: "2 tablespoons" },
      { name: "Ghee", quantity: "1 teaspoon" }
    ],
    method: [
      "Remove date seeds and soak dates briefly",
      "Blend dates and almonds together",
      "Add ghee and mix well",
      "Roll into small balls",
      "Coat with coconut powder"
    ],
    how_often: "1-2 balls daily as snack",
    precautions: ["High calorie, limit quantity", "Diabetics should limit"],
    benefits: ["Natural energy", "Iron rich", "Sustained energy release"],
    related_diseases: ["fatigue", "anemia", "low-energy"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-44",
    problem: "Sinus",
    title: "Turmeric Saline Nasal Rinse",
    ingredients: [
      { name: "Warm water", quantity: "1 cup" },
      { name: "Salt", quantity: "¼ teaspoon" },
      { name: "Turmeric powder", quantity: "A tiny pinch" },
      { name: "Baking soda", quantity: "⅛ teaspoon" }
    ],
    method: [
      "Mix all ingredients in warm water",
      "Stir until completely dissolved",
      "Use neti pot or squeeze bottle",
      "Tilt head and pour through one nostril",
      "Let it drain from other nostril"
    ],
    how_often: "Once or twice daily during sinus issues",
    precautions: ["Use distilled or boiled-cooled water only", "Don't use if nose is completely blocked"],
    benefits: ["Clears sinuses", "Reduces inflammation", "Antibacterial"],
    related_diseases: ["sinusitis", "sinus", "nasal-congestion"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-45",
    problem: "Stress",
    title: "Brahmi Mint Cooler",
    ingredients: [
      { name: "Fresh mint leaves", quantity: "15-20 leaves" },
      { name: "Brahmi powder", quantity: "½ teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Jaggery/Honey", quantity: "1 tablespoon" },
      { name: "Cold water", quantity: "1 glass" }
    ],
    method: [
      "Crush mint leaves to release oils",
      "Mix brahmi powder in water",
      "Add crushed mint, lemon, and sweetener",
      "Stir well and drink fresh"
    ],
    how_often: "Once daily during stressful periods",
    precautions: ["Brahmi may cause drowsiness", "Avoid during pregnancy"],
    benefits: ["Calms mind", "Improves focus", "Reduces cortisol"],
    related_diseases: ["stress", "anxiety", "mental-fatigue"],
    difficulty: "Easy",
    preparation_time: "8 minutes",
    region: "india"
  },
  {
    id: "kitchen-46",
    problem: "Gas",
    title: "Roasted Cumin Buttermilk",
    ingredients: [
      { name: "Buttermilk (Chaas)", quantity: "1 glass" },
      { name: "Roasted cumin powder", quantity: "½ teaspoon" },
      { name: "Rock salt (Kala namak)", quantity: "¼ teaspoon" },
      { name: "Fresh coriander", quantity: "1 tablespoon chopped" }
    ],
    method: [
      "Add cumin powder and rock salt to buttermilk",
      "Mix well until combined",
      "Garnish with fresh coriander",
      "Drink after meals"
    ],
    how_often: "After lunch daily",
    precautions: ["Avoid if lactose intolerant", "Best at room temperature"],
    benefits: ["Excellent for digestion", "Cools the body", "Relieves gas instantly"],
    related_diseases: ["gas", "bloating", "indigestion", "acidity"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-47",
    problem: "Allergies",
    title: "Local Honey Therapy",
    ingredients: [
      { name: "Local raw honey", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "½ cup" },
      { name: "Apple cider vinegar", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix honey in warm water",
      "Add apple cider vinegar",
      "Stir well and drink slowly",
      "Use local honey from your area"
    ],
    how_often: "Daily, starting 1-2 months before allergy season",
    precautions: ["Not for children under 1", "Local honey works best for local allergens"],
    benefits: ["Builds immunity to local pollen", "Natural antihistamine", "Reduces allergy symptoms"],
    related_diseases: ["allergies", "hay-fever", "seasonal-allergies"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-48",
    problem: "Poor Appetite",
    title: "Ginger Lime Appetizer",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Lime juice", quantity: "2 tablespoons" },
      { name: "Black salt", quantity: "¼ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grate ginger finely",
      "Mix with lime juice, salt and honey",
      "Take this mixture 30 minutes before meals"
    ],
    how_often: "Before lunch and dinner",
    precautions: ["May increase acidity", "Reduce ginger if too strong"],
    benefits: ["Stimulates appetite", "Activates digestive enzymes", "Improves taste"],
    related_diseases: ["poor-appetite", "weak-digestion", "anorexia"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-49",
    problem: "Body Odor",
    title: "Baking Soda Lemon Deodorant",
    ingredients: [
      { name: "Baking soda", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Water", quantity: "2 tablespoons" }
    ],
    method: [
      "Mix baking soda with water to make paste",
      "Add lemon juice and mix",
      "Apply to underarms after shower",
      "Let dry naturally"
    ],
    how_often: "Daily after bathing",
    precautions: ["May cause irritation in some", "Avoid right after shaving", "Patch test first"],
    benefits: ["Neutralizes odor", "Antibacterial", "Natural deodorant"],
    related_diseases: ["body-odor", "excessive-sweating"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-50",
    problem: "Liver Health",
    title: "Warm Lemon Turmeric Liver Tonic",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "2 tablespoons" },
      { name: "Turmeric powder", quantity: "¼ teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the water (not boiling)",
      "Add all ingredients and mix well",
      "Drink first thing in the morning",
      "Wait 30 minutes before eating"
    ],
    how_often: "Daily morning on empty stomach",
    precautions: ["Avoid if you have gallstones", "Black pepper helps turmeric absorption"],
    benefits: ["Detoxifies liver", "Improves bile production", "Antioxidant support"],
    related_diseases: ["fatty-liver", "liver-detox", "digestion"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  // ============= NEW KITCHEN REMEDIES BATCH 2 =============
  {
    id: "kitchen-51",
    problem: "Bloating",
    title: "Ajwain Jeera Digestive Water",
    ingredients: [
      { name: "Ajwain (carom seeds)", quantity: "1 teaspoon" },
      { name: "Cumin seeds (jeera)", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" },
      { name: "Black salt", quantity: "A pinch" }
    ],
    method: [
      "Boil water with ajwain and cumin",
      "Simmer for 5 minutes",
      "Strain and add black salt",
      "Drink warm after meals"
    ],
    how_often: "After heavy meals or when bloated",
    precautions: ["May increase body heat", "Avoid in hyperacidity"],
    benefits: ["Releases trapped gas", "Improves digestion", "Reduces stomach distension"],
    related_diseases: ["bloating", "gas", "indigestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "kitchen-52",
    problem: "Gas",
    title: "Asafoetida Buttermilk",
    ingredients: [
      { name: "Fresh buttermilk", quantity: "1 glass" },
      { name: "Asafoetida (hing)", quantity: "A pinch" },
      { name: "Cumin powder", quantity: "½ teaspoon" },
      { name: "Salt", quantity: "To taste" }
    ],
    method: [
      "Blend buttermilk until smooth",
      "Add hing, cumin powder and salt",
      "Mix well and drink after lunch"
    ],
    how_often: "With lunch daily",
    precautions: ["Avoid if lactose intolerant", "Use fresh buttermilk only"],
    benefits: ["Relieves flatulence instantly", "Cools digestive system", "Probiotic benefits"],
    related_diseases: ["gas", "bloating", "acidity"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-53",
    problem: "Nausea",
    title: "Clove Cardamom Remedy",
    ingredients: [
      { name: "Cloves", quantity: "2" },
      { name: "Cardamom", quantity: "1 pod" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush cloves and cardamom coarsely",
      "Mix with honey to form paste",
      "Take small amounts slowly",
      "Let it dissolve in mouth"
    ],
    how_often: "As needed for nausea",
    precautions: ["Don't use more than 3-4 cloves daily", "May cause numbness in mouth"],
    benefits: ["Stops nausea quickly", "Freshens breath", "Settles stomach"],
    related_diseases: ["nausea", "motion-sickness", "morning-sickness"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-54",
    problem: "Sore Throat",
    title: "Licorice Ginger Gargle",
    ingredients: [
      { name: "Mulethi (licorice) powder", quantity: "1 teaspoon" },
      { name: "Ginger powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Salt", quantity: "½ teaspoon" }
    ],
    method: [
      "Add all powders and salt to warm water",
      "Mix well until dissolved",
      "Gargle for 30 seconds",
      "Repeat 3-4 times"
    ],
    how_often: "3-4 times daily during infection",
    precautions: ["Don't swallow", "Avoid licorice if hypertensive"],
    benefits: ["Soothes inflamed throat", "Antibacterial action", "Reduces pain"],
    related_diseases: ["sore-throat", "cough", "tonsillitis"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-55",
    problem: "Cough",
    title: "Onion Honey Cough Syrup",
    ingredients: [
      { name: "Red onion", quantity: "1 medium" },
      { name: "Raw honey", quantity: "3 tablespoons" }
    ],
    method: [
      "Slice onion thinly",
      "Layer in jar with honey between slices",
      "Cover and leave overnight",
      "Strain the syrup next morning",
      "Take 1 teaspoon every few hours"
    ],
    how_often: "1 teaspoon every 3-4 hours",
    precautions: ["Not for children under 1 year", "May cause bad breath"],
    benefits: ["Natural expectorant", "Soothes cough", "Antibacterial properties"],
    related_diseases: ["cough", "cold", "bronchitis"],
    difficulty: "Easy",
    preparation_time: "Overnight",
    region: "global"
  },
  {
    id: "kitchen-56",
    problem: "Common Cold",
    title: "Pepper Tulsi Kadha",
    ingredients: [
      { name: "Black pepper", quantity: "5 whole" },
      { name: "Tulsi leaves", quantity: "10-12" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Jaggery", quantity: "1 tablespoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Crush pepper and ginger coarsely",
      "Boil water with all ingredients except jaggery",
      "Reduce to 1 cup",
      "Strain, add jaggery while hot",
      "Drink warm"
    ],
    how_often: "2-3 times daily during cold",
    precautions: ["May cause sweating", "Reduce pepper if too spicy"],
    benefits: ["Clears congestion", "Boosts immunity", "Relieves body ache"],
    related_diseases: ["cold", "flu", "fever", "congestion"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-57",
    problem: "Headache",
    title: "Cinnamon Forehead Paste",
    ingredients: [
      { name: "Cinnamon powder", quantity: "1 tablespoon" },
      { name: "Water", quantity: "Just enough to make paste" }
    ],
    method: [
      "Mix cinnamon with water to form thick paste",
      "Apply on forehead and temples",
      "Leave for 20-30 minutes",
      "Wash off with warm water"
    ],
    how_often: "As needed for headache",
    precautions: ["Do patch test first", "Avoid near eyes", "May cause warmth sensation"],
    benefits: ["Relieves tension headache", "Improves blood flow", "Cooling effect after removal"],
    related_diseases: ["headache", "migraine", "tension"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-58",
    problem: "Fever",
    title: "Coriander Seed Infusion",
    ingredients: [
      { name: "Coriander seeds", quantity: "2 tablespoons" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil water with coriander seeds",
      "Reduce to half",
      "Strain and cool slightly",
      "Add honey and drink"
    ],
    how_often: "3-4 times daily during fever",
    precautions: ["Monitor temperature", "Seek medical help if fever persists"],
    benefits: ["Reduces body heat", "Vitamin C boost", "Hydrating"],
    related_diseases: ["fever", "viral", "flu"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-59",
    problem: "Muscle Cramps",
    title: "Mustard Oil Warm Massage",
    ingredients: [
      { name: "Mustard oil", quantity: "3 tablespoons" },
      { name: "Garlic cloves", quantity: "3-4" }
    ],
    method: [
      "Heat oil with crushed garlic until garlic turns brown",
      "Let cool to warm temperature",
      "Massage on cramped muscle in circular motion",
      "Leave for 30 minutes, then wash"
    ],
    how_often: "Whenever cramps occur",
    precautions: ["Test oil temperature", "Avoid on broken skin"],
    benefits: ["Relaxes tight muscles", "Improves circulation", "Pain relief"],
    related_diseases: ["muscle-cramps", "leg-cramps", "muscle-pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "kitchen-60",
    problem: "Eye Strain",
    title: "Rose Water Eye Compress",
    ingredients: [
      { name: "Pure rose water", quantity: "2 tablespoons" },
      { name: "Cotton pads", quantity: "2" }
    ],
    method: [
      "Soak cotton pads in cold rose water",
      "Squeeze out excess",
      "Place on closed eyes",
      "Rest for 15-20 minutes"
    ],
    how_often: "After screen work or when eyes feel tired",
    precautions: ["Use pure rose water only", "Store in refrigerator for extra cooling"],
    benefits: ["Cools and refreshes eyes", "Reduces puffiness", "Relieves strain"],
    related_diseases: ["eye-strain", "computer-eyes", "tired-eyes"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-61",
    problem: "Dark Circles",
    title: "Potato Cucumber Eye Mask",
    ingredients: [
      { name: "Potato", quantity: "Half" },
      { name: "Cucumber", quantity: "Half" }
    ],
    method: [
      "Grate potato and cucumber",
      "Extract juice by squeezing through cloth",
      "Soak cotton pads in mixed juice",
      "Apply under eyes for 20 minutes",
      "Rinse with cold water"
    ],
    how_often: "Daily before bed",
    precautions: ["Avoid if allergic to either", "Be gentle around eyes"],
    benefits: ["Lightens dark circles", "Reduces puffiness", "Hydrates skin"],
    related_diseases: ["dark-circles", "puffy-eyes"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-62",
    problem: "Acne",
    title: "Neem Turmeric Face Pack",
    ingredients: [
      { name: "Neem leaves paste", quantity: "2 tablespoons" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grind fresh neem leaves to paste",
      "Mix with turmeric and honey",
      "Apply on face avoiding eyes",
      "Leave for 15-20 minutes",
      "Wash with lukewarm water"
    ],
    how_often: "3 times a week",
    precautions: ["Turmeric may stain temporarily", "Patch test first"],
    benefits: ["Antibacterial action", "Reduces inflammation", "Controls oil"],
    related_diseases: ["acne", "pimples", "oily-skin"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "kitchen-63",
    problem: "Dry Skin",
    title: "Coconut Oil Honey Moisturizer",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "2 tablespoons" },
      { name: "Raw honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Mix coconut oil and honey",
      "Warm slightly for better blending",
      "Apply on damp skin after shower",
      "Massage gently and let absorb"
    ],
    how_often: "Daily after bathing",
    precautions: ["May feel oily initially", "Use thin layer"],
    benefits: ["Deep moisturizing", "Heals dry patches", "Natural glow"],
    related_diseases: ["dry-skin", "rough-skin", "winter-dryness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-64",
    problem: "Dandruff",
    title: "Apple Cider Vinegar Rinse",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "2 tablespoons" },
      { name: "Water", quantity: "1 cup" },
      { name: "Tea tree oil (optional)", quantity: "3 drops" }
    ],
    method: [
      "Mix ACV with water",
      "Add tea tree oil if using",
      "After shampooing, pour on scalp",
      "Massage for 2-3 minutes",
      "Rinse with cold water"
    ],
    how_often: "2-3 times per week",
    precautions: ["May dry hair initially", "Avoid on cuts/wounds"],
    benefits: ["Balances scalp pH", "Reduces flakes", "Adds shine"],
    related_diseases: ["dandruff", "itchy-scalp", "scalp-buildup"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "us"
  },
  {
    id: "kitchen-65",
    problem: "Hair Fall",
    title: "Onion Juice Hair Treatment",
    ingredients: [
      { name: "Red onion", quantity: "2 medium" },
      { name: "Coconut oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Blend onions and strain juice",
      "Mix with coconut oil",
      "Apply to scalp with cotton",
      "Leave for 30-60 minutes",
      "Wash with mild shampoo"
    ],
    how_often: "2-3 times weekly",
    precautions: ["Strong smell lingers", "Avoid if scalp is sensitive"],
    benefits: ["Promotes hair growth", "Strengthens follicles", "Rich in sulfur"],
    related_diseases: ["hair-fall", "thin-hair", "weak-hair"],
    difficulty: "Medium",
    preparation_time: "45 minutes",
    region: "global"
  },
  {
    id: "kitchen-66",
    problem: "Bad Breath",
    title: "Fennel Clove Mouth Freshener",
    ingredients: [
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Cloves", quantity: "2" },
      { name: "Cardamom", quantity: "2 pods" }
    ],
    method: [
      "Dry roast all spices lightly",
      "Let cool completely",
      "Chew a pinch after meals",
      "Don't swallow immediately, let flavors release"
    ],
    how_often: "After every meal",
    precautions: ["Don't overuse cloves", "May cause dryness"],
    benefits: ["Freshens breath instantly", "Aids digestion", "Antibacterial"],
    related_diseases: ["bad-breath", "halitosis", "oral-hygiene"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-67",
    problem: "Tooth Pain",
    title: "Clove Oil Direct Application",
    ingredients: [
      { name: "Clove oil", quantity: "2-3 drops" },
      { name: "Cotton ball", quantity: "Small piece" }
    ],
    method: [
      "Soak cotton in clove oil",
      "Apply directly on painful tooth",
      "Hold for 10-15 minutes",
      "Repeat as needed"
    ],
    how_often: "Every 2-3 hours as needed",
    precautions: ["May cause numbness", "Don't swallow", "See dentist if pain persists"],
    benefits: ["Natural anesthetic", "Antibacterial", "Fast pain relief"],
    related_diseases: ["tooth-pain", "toothache", "cavity-pain"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-68",
    problem: "Mouth Ulcers",
    title: "Honey Turmeric Paste",
    ingredients: [
      { name: "Raw honey", quantity: "1 teaspoon" },
      { name: "Turmeric powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Mix honey and turmeric to form paste",
      "Apply directly on ulcer",
      "Leave for 5 minutes before eating",
      "Don't rinse immediately"
    ],
    how_often: "3-4 times daily",
    precautions: ["May stain temporarily", "Avoid spicy food"],
    benefits: ["Heals ulcers faster", "Antibacterial", "Reduces pain"],
    related_diseases: ["mouth-ulcers", "canker-sores", "oral-sores"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-69",
    problem: "Stress",
    title: "Ashwagandha Warm Milk",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Nutmeg", quantity: "A pinch" }
    ],
    method: [
      "Warm milk (don't boil)",
      "Add ashwagandha and nutmeg",
      "Mix well and add honey",
      "Drink before bedtime"
    ],
    how_often: "Daily at bedtime",
    precautions: ["May cause drowsiness", "Avoid during pregnancy"],
    benefits: ["Reduces cortisol", "Calms nervous system", "Improves sleep"],
    related_diseases: ["stress", "anxiety", "insomnia"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "kitchen-70",
    problem: "Anxiety",
    title: "Chamomile Lavender Tea",
    ingredients: [
      { name: "Dried chamomile flowers", quantity: "1 tablespoon" },
      { name: "Dried lavender", quantity: "½ teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "To taste" }
    ],
    method: [
      "Steep chamomile and lavender in hot water",
      "Cover and let sit for 5-7 minutes",
      "Strain and add honey",
      "Drink slowly, inhaling aroma"
    ],
    how_often: "1-2 times daily, especially evening",
    precautions: ["Avoid if allergic to daisies", "May cause drowsiness"],
    benefits: ["Natural calming effect", "Reduces anxiety", "Promotes relaxation"],
    related_diseases: ["anxiety", "stress", "nervousness"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-71",
    problem: "Insomnia",
    title: "Nutmeg Warm Milk",
    ingredients: [
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Nutmeg powder", quantity: "¼ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk to comfortable temperature",
      "Add nutmeg powder and mix well",
      "Add honey and drink 30 minutes before bed"
    ],
    how_often: "Nightly 30 minutes before sleep",
    precautions: ["Don't exceed ¼ tsp nutmeg", "May cause vivid dreams initially"],
    benefits: ["Natural sedative", "Improves sleep quality", "Relaxes muscles"],
    related_diseases: ["insomnia", "sleeplessness", "restlessness"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-72",
    problem: "Memory",
    title: "Brahmi Almond Brain Tonic",
    ingredients: [
      { name: "Brahmi powder", quantity: "½ teaspoon" },
      { name: "Almonds (soaked overnight)", quantity: "5" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Peel and grind soaked almonds",
      "Blend with warm milk",
      "Add brahmi powder and honey",
      "Drink in the morning"
    ],
    how_often: "Daily in the morning",
    precautions: ["May cause digestive issues initially", "Consult doctor if on medications"],
    benefits: ["Enhances memory", "Improves focus", "Brain nourishment"],
    related_diseases: ["memory", "concentration", "brain-fog"],
    difficulty: "Medium",
    preparation_time: "10 minutes + overnight",
    region: "india"
  },
  {
    id: "kitchen-73",
    problem: "Low Energy",
    title: "Date Banana Energy Shake",
    ingredients: [
      { name: "Dates (pitted)", quantity: "3" },
      { name: "Ripe banana", quantity: "1" },
      { name: "Milk or almond milk", quantity: "1 cup" },
      { name: "Walnuts", quantity: "3" }
    ],
    method: [
      "Soak dates for 30 minutes",
      "Blend all ingredients until smooth",
      "Drink as morning energizer"
    ],
    how_often: "Morning or when fatigued",
    precautions: ["High in natural sugars", "Diabetics use cautiously"],
    benefits: ["Instant energy boost", "Rich in iron", "Natural sugars"],
    related_diseases: ["fatigue", "low-energy", "tiredness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-74",
    problem: "Immunity",
    title: "Turmeric Ginger Immunity Shot",
    ingredients: [
      { name: "Fresh turmeric", quantity: "1 inch" },
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grate turmeric and ginger finely",
      "Extract juice by squeezing",
      "Mix with lemon juice, pepper and honey",
      "Take as a quick shot"
    ],
    how_often: "Daily in the morning",
    precautions: ["May stain clothes", "Avoid on empty stomach if acidic"],
    benefits: ["Powerful immunity booster", "Anti-inflammatory", "Antioxidant rich"],
    related_diseases: ["immunity", "cold-prevention", "flu-prevention"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-75",
    problem: "Weight Loss",
    title: "Warm Lemon Honey Water",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Fresh lemon juice", quantity: "2 tablespoons" },
      { name: "Raw honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm water (not boiling)",
      "Add fresh lemon juice",
      "Mix in honey",
      "Drink first thing in morning on empty stomach"
    ],
    how_often: "Daily morning before breakfast",
    precautions: ["May erode enamel - use straw", "Rinse mouth after"],
    benefits: ["Boosts metabolism", "Aids digestion", "Detoxifying"],
    related_diseases: ["weight-loss", "obesity", "metabolism"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-76",
    problem: "Indigestion",
    title: "Ginger Mint Digestive Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Fresh mint leaves", quantity: "10" },
      { name: "Water", quantity: "1 cup" },
      { name: "Lemon", quantity: "1 wedge" }
    ],
    method: [
      "Slice ginger thinly",
      "Boil water with ginger for 5 minutes",
      "Add mint leaves and steep 3 minutes",
      "Strain, squeeze lemon and drink"
    ],
    how_often: "After heavy meals",
    precautions: ["May aggravate acid reflux in some", "Reduce ginger if too strong"],
    benefits: ["Settles stomach", "Reduces bloating", "Freshens breath"],
    related_diseases: ["indigestion", "bloating", "heaviness"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-77",
    problem: "Diarrhea",
    title: "Pomegranate Peel Tea",
    ingredients: [
      { name: "Dried pomegranate peel", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "½ teaspoon" }
    ],
    method: [
      "Boil water with dried peels",
      "Simmer for 10 minutes",
      "Strain and add honey when warm",
      "Drink slowly"
    ],
    how_often: "2-3 times daily during diarrhea",
    precautions: ["Ensure peels are organic", "Stay hydrated"],
    benefits: ["Astringent action", "Reduces loose motions", "Rich in tannins"],
    related_diseases: ["diarrhea", "loose-motions", "stomach-upset"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "kitchen-78",
    problem: "Joint Pain",
    title: "Epsom Salt Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Warm water", quantity: "Bathtub or bucket full" },
      { name: "Lavender oil (optional)", quantity: "5 drops" }
    ],
    method: [
      "Fill tub or bucket with warm water",
      "Add Epsom salt and stir to dissolve",
      "Add lavender oil if using",
      "Soak affected joints for 20-30 minutes"
    ],
    how_often: "3-4 times weekly",
    precautions: ["Not for diabetics with wounds", "Don't use in very hot water"],
    benefits: ["Magnesium absorption", "Reduces inflammation", "Relaxes muscles"],
    related_diseases: ["joint-pain", "arthritis", "muscle-soreness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "kitchen-79",
    problem: "Back Pain",
    title: "Hot Rice Pack Compress",
    ingredients: [
      { name: "Uncooked rice", quantity: "2 cups" },
      { name: "Clean cotton sock", quantity: "1 long sock" },
      { name: "Essential oil (optional)", quantity: "Few drops" }
    ],
    method: [
      "Fill sock with rice (add oils if using)",
      "Tie end securely",
      "Microwave for 2-3 minutes",
      "Apply to back for 15-20 minutes"
    ],
    how_often: "As needed for pain",
    precautions: ["Test temperature first", "Don't overheat"],
    benefits: ["Deep heat therapy", "Relaxes tight muscles", "Reusable"],
    related_diseases: ["back-pain", "muscle-pain", "stiffness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-80",
    problem: "Menstrual Cramps",
    title: "Carom Jaggery Tea",
    ingredients: [
      { name: "Ajwain (carom seeds)", quantity: "1 teaspoon" },
      { name: "Jaggery", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Boil water with ajwain",
      "Simmer for 5 minutes",
      "Strain and add jaggery",
      "Drink warm when cramps start"
    ],
    how_often: "2-3 times during menstruation",
    precautions: ["May increase flow slightly", "Avoid if bleeding is heavy"],
    benefits: ["Relieves uterine cramps", "Warming effect", "Iron from jaggery"],
    related_diseases: ["menstrual-cramps", "period-pain", "dysmenorrhea"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "kitchen-81",
    problem: "Sunburn",
    title: "Aloe Cucumber Cooling Gel",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "3 tablespoons" },
      { name: "Cucumber juice", quantity: "2 tablespoons" }
    ],
    method: [
      "Extract fresh aloe gel",
      "Blend cucumber and strain juice",
      "Mix together",
      "Apply generously on sunburned areas",
      "Store excess in refrigerator"
    ],
    how_often: "Every 2-3 hours on sunburn",
    precautions: ["Test for allergies first", "Keep refrigerated"],
    benefits: ["Instant cooling", "Promotes healing", "Reduces redness"],
    related_diseases: ["sunburn", "skin-burn", "sun-damage"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-82",
    problem: "Cracked Heels",
    title: "Coconut Oil Honey Foot Mask",
    ingredients: [
      { name: "Coconut oil", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Banana (ripe)", quantity: "Half" }
    ],
    method: [
      "Mash banana well",
      "Mix with coconut oil and honey",
      "Apply thick layer on heels",
      "Cover with socks overnight",
      "Wash in morning"
    ],
    how_often: "3 times weekly",
    precautions: ["Use old socks", "May be slippery"],
    benefits: ["Deep moisturizing", "Heals cracks", "Softens calluses"],
    related_diseases: ["cracked-heels", "dry-feet", "rough-heels"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-83",
    problem: "Hiccups",
    title: "Sugar Under Tongue",
    ingredients: [
      { name: "Granulated sugar", quantity: "1 teaspoon" }
    ],
    method: [
      "Place sugar under tongue",
      "Let it dissolve slowly",
      "Don't swallow immediately",
      "Allow to stimulate vagus nerve"
    ],
    how_often: "When hiccups occur",
    precautions: ["Diabetics avoid", "Use sparingly"],
    benefits: ["Stops hiccups quickly", "Stimulates nerve reflex", "Safe and easy"],
    related_diseases: ["hiccups"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "global"
  },
  {
    id: "kitchen-84",
    problem: "Motion Sickness",
    title: "Ginger Lemon Travel Remedy",
    ingredients: [
      { name: "Fresh ginger", quantity: "Small piece" },
      { name: "Lemon", quantity: "Few slices" },
      { name: "Mint leaves", quantity: "Few" }
    ],
    method: [
      "Slice ginger thinly",
      "Pack with lemon slices and mint",
      "Chew ginger when nausea starts",
      "Smell lemon for relief"
    ],
    how_often: "Before and during travel",
    precautions: ["May cause heartburn if too much", "Keep handy while traveling"],
    benefits: ["Prevents nausea", "Settles stomach", "Refreshing"],
    related_diseases: ["motion-sickness", "travel-sickness", "nausea"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-85",
    problem: "Hangover",
    title: "Coconut Water Lemon Rehydrator",
    ingredients: [
      { name: "Fresh coconut water", quantity: "2 cups" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Salt", quantity: "A pinch" }
    ],
    method: [
      "Mix coconut water with lemon juice",
      "Add honey and salt",
      "Stir well and drink slowly"
    ],
    how_often: "Morning after drinking",
    precautions: ["Don't rush drinking", "Rest adequately"],
    benefits: ["Rehydrates quickly", "Replaces electrolytes", "Reduces headache"],
    related_diseases: ["hangover", "dehydration", "nausea"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "kitchen-86",
    problem: "Minor Burns",
    title: "Honey Aloe Burn Treatment",
    ingredients: [
      { name: "Raw honey", quantity: "1 tablespoon" },
      { name: "Fresh aloe vera gel", quantity: "1 tablespoon" }
    ],
    method: [
      "Cool burn under running water first",
      "Mix honey and aloe gel",
      "Apply gently on burn",
      "Cover loosely with clean cloth"
    ],
    how_often: "Apply 2-3 times daily",
    precautions: ["For minor burns only", "Seek medical help for serious burns"],
    benefits: ["Antibacterial", "Promotes healing", "Reduces pain"],
    related_diseases: ["minor-burns", "kitchen-burns", "first-degree-burns"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-87",
    problem: "Bee Sting",
    title: "Baking Soda Paste",
    ingredients: [
      { name: "Baking soda", quantity: "1 tablespoon" },
      { name: "Water", quantity: "Few drops" }
    ],
    method: [
      "Remove stinger if present",
      "Make thick paste with baking soda and water",
      "Apply on sting site",
      "Leave for 15-20 minutes"
    ],
    how_often: "Once after sting, repeat if needed",
    precautions: ["Seek help if allergic reaction occurs", "Monitor for swelling"],
    benefits: ["Neutralizes venom", "Reduces pain", "Decreases swelling"],
    related_diseases: ["bee-sting", "insect-bite", "swelling"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "kitchen-88",
    problem: "Bruises",
    title: "Turmeric Ghee Healing Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Ghee", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix turmeric with warm ghee",
      "Apply on bruise area",
      "Leave for 30 minutes",
      "Wipe clean gently"
    ],
    how_often: "2-3 times daily",
    precautions: ["May stain skin/clothes", "Avoid on open wounds"],
    benefits: ["Reduces discoloration", "Anti-inflammatory", "Speeds healing"],
    related_diseases: ["bruises", "contusions", "minor-injuries"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india"
  },
  {
    id: "kitchen-89",
    problem: "Chest Congestion",
    title: "Eucalyptus Steam Inhalation",
    ingredients: [
      { name: "Hot water", quantity: "1 bowl" },
      { name: "Eucalyptus oil", quantity: "3-5 drops" }
    ],
    method: [
      "Boil water and pour in bowl",
      "Add eucalyptus oil",
      "Lean over bowl with towel over head",
      "Inhale steam for 10-15 minutes"
    ],
    how_often: "2-3 times daily during congestion",
    precautions: ["Keep eyes closed", "Careful with hot water"],
    benefits: ["Opens airways", "Loosens phlegm", "Antibacterial"],
    related_diseases: ["chest-congestion", "bronchitis", "cold"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-90",
    problem: "Runny Nose",
    title: "Black Pepper Honey Remedy",
    ingredients: [
      { name: "Black pepper powder", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Mix pepper powder with honey",
      "Take this mixture slowly",
      "Let it coat the throat",
      "Follow with warm water"
    ],
    how_often: "2-3 times daily",
    precautions: ["May cause sneezing initially", "Reduce pepper if too spicy"],
    benefits: ["Dries runny nose", "Clears sinuses", "Warms body"],
    related_diseases: ["runny-nose", "cold", "sinus"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india"
  },
  {
    id: "kitchen-91",
    problem: "Allergies",
    title: "Local Honey Daily Dose",
    ingredients: [
      { name: "Local raw honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Take 1 tablespoon of local raw honey",
      "Let it dissolve in mouth slowly",
      "Don't heat or mix with hot drinks",
      "Best taken on empty stomach"
    ],
    how_often: "Daily, starting 2 months before allergy season",
    precautions: ["Must be local honey", "Not for children under 1"],
    benefits: ["Builds allergy resistance", "Natural antihistamine effect", "Soothes throat"],
    related_diseases: ["allergies", "seasonal-allergies", "hay-fever"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "global"
  },
  {
    id: "kitchen-92",
    problem: "Vertigo",
    title: "Ginger Lemon Vertigo Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Lemon", quantity: "Half" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grate ginger and boil in water",
      "Simmer for 5 minutes",
      "Strain and add lemon juice",
      "Add honey and sip slowly"
    ],
    how_often: "When experiencing vertigo symptoms",
    precautions: ["Sit down while drinking", "Consult doctor for recurring vertigo"],
    benefits: ["Reduces dizziness", "Settles inner ear", "Calming"],
    related_diseases: ["vertigo", "dizziness", "balance-issues"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "kitchen-93",
    problem: "Food Poisoning",
    title: "Apple Cider Vinegar Recovery",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix ACV with warm water",
      "Add honey to taste",
      "Sip slowly throughout the day",
      "Stay hydrated"
    ],
    how_often: "2-3 times daily until recovery",
    precautions: ["Seek medical help if severe", "Stay hydrated"],
    benefits: ["Antibacterial action", "Settles stomach", "Speeds recovery"],
    related_diseases: ["food-poisoning", "stomach-bug", "nausea"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "us"
  },
  {
    id: "kitchen-94",
    problem: "Intestinal Worms",
    title: "Papaya Seeds Morning Treatment",
    ingredients: [
      { name: "Papaya seeds (dried and ground)", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Dry papaya seeds in sun for 2 days",
      "Grind to powder",
      "Mix with honey",
      "Take on empty stomach"
    ],
    how_often: "Once daily for 7 days",
    precautions: ["May cause loose stools", "Not during pregnancy"],
    benefits: ["Natural dewormer", "Anti-parasitic", "Digestive health"],
    related_diseases: ["intestinal-worms", "parasites", "worm-infection"],
    difficulty: "Medium",
    preparation_time: "2 days for drying",
    region: "global"
  },
  {
    id: "kitchen-95",
    problem: "Dehydration",
    title: "Oral Rehydration Drink",
    ingredients: [
      { name: "Water (clean)", quantity: "1 liter" },
      { name: "Sugar", quantity: "6 teaspoons" },
      { name: "Salt", quantity: "½ teaspoon" },
      { name: "Lemon juice (optional)", quantity: "2 tablespoons" }
    ],
    method: [
      "Boil and cool water if unsure of purity",
      "Add sugar and salt",
      "Stir until completely dissolved",
      "Add lemon for taste",
      "Sip throughout the day"
    ],
    how_often: "Throughout day, especially after illness",
    precautions: ["Use exact measurements", "Seek help if severe dehydration"],
    benefits: ["Replaces lost fluids", "Restores electrolytes", "Prevents weakness"],
    related_diseases: ["dehydration", "diarrhea", "vomiting"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "kitchen-96",
    problem: "Leg Cramps",
    title: "Pickle Juice Quick Relief",
    ingredients: [
      { name: "Pickle juice", quantity: "2-3 tablespoons" }
    ],
    method: [
      "Take 2-3 tablespoons of pickle juice",
      "Drink quickly at onset of cramp",
      "Follow with water"
    ],
    how_often: "When cramps occur",
    precautions: ["High in sodium", "Not for those on low-salt diet"],
    benefits: ["Fast cramp relief", "Electrolyte boost", "Nerve signaling"],
    related_diseases: ["leg-cramps", "muscle-cramps", "night-cramps"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "us"
  },
  {
    id: "kitchen-97",
    problem: "Ear Infection",
    title: "Garlic Oil Ear Drops",
    ingredients: [
      { name: "Garlic cloves", quantity: "2" },
      { name: "Olive oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Crush garlic and add to oil",
      "Heat gently for 5 minutes (don't burn)",
      "Strain and cool to room temperature",
      "Put 2-3 drops in affected ear",
      "Keep head tilted for 5 minutes"
    ],
    how_often: "2-3 times daily",
    precautions: ["Test temperature first", "Don't use if eardrum is perforated", "Consult doctor if no improvement"],
    benefits: ["Antibacterial", "Reduces pain", "Natural antibiotic"],
    related_diseases: ["ear-infection", "ear-pain", "otitis"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "kitchen-98",
    problem: "Weak Eyesight",
    title: "Carrot Beetroot Eye Juice",
    ingredients: [
      { name: "Carrots", quantity: "2 medium" },
      { name: "Beetroot", quantity: "Small piece" },
      { name: "Amla (Indian gooseberry)", quantity: "1" }
    ],
    method: [
      "Juice all ingredients together",
      "Drink fresh immediately",
      "Best taken in morning"
    ],
    how_often: "Daily for at least 3 months",
    precautions: ["May turn urine/stool pinkish from beet", "Fresh juice only"],
    benefits: ["Rich in Vitamin A", "Antioxidants", "Improves vision over time"],
    related_diseases: ["weak-eyesight", "night-blindness", "eye-health"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "kitchen-99",
    problem: "Chapped Lips",
    title: "Ghee Honey Lip Balm",
    ingredients: [
      { name: "Ghee", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "½ teaspoon" }
    ],
    method: [
      "Mix ghee and honey well",
      "Apply thick layer on lips",
      "Leave overnight",
      "Gently wipe in morning"
    ],
    how_often: "Every night before bed",
    precautions: ["Don't lick lips frequently", "Store in small container"],
    benefits: ["Deep moisturizing", "Heals cracks", "Natural and safe"],
    related_diseases: ["chapped-lips", "dry-lips", "cracked-lips"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india"
  },
  {
    id: "kitchen-100",
    problem: "Piles",
    title: "Radish Juice Remedy",
    ingredients: [
      { name: "White radish", quantity: "1 medium" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grate radish and extract juice",
      "Add honey to taste",
      "Drink on empty stomach"
    ],
    how_often: "Twice daily - morning and evening",
    precautions: ["May cause gas initially", "Start with small amount"],
    benefits: ["Reduces pile inflammation", "Natural cooling", "Aids digestion"],
    related_diseases: ["piles", "hemorrhoids", "constipation"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  // ============= DISEASE-SPECIFIC REMEDIES BATCH =============
  {
    id: "disease-101",
    problem: "High Cholesterol",
    title: "Garlic Lemon Cholesterol Fighter",
    ingredients: [
      { name: "Raw garlic cloves", quantity: "3-4" },
      { name: "Lemon juice", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: [
      "Crush garlic and let sit 10 minutes for allicin activation",
      "Mix with lemon juice and honey",
      "Add to warm water",
      "Drink on empty stomach"
    ],
    how_often: "Daily in morning",
    precautions: ["May cause bad breath", "Avoid if on blood thinners", "Take with food if stomach sensitive"],
    benefits: ["Lowers LDL cholesterol", "Raises HDL", "Clears arterial plaque"],
    related_diseases: ["high-cholesterol", "heart-disease", "atherosclerosis"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-102",
    problem: "Fatty Liver",
    title: "Lemon Ginger Liver Detox",
    ingredients: [
      { name: "Fresh lemon", quantity: "1" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Turmeric", quantity: "¼ teaspoon" }
    ],
    method: [
      "Juice the lemon",
      "Grate ginger and extract juice",
      "Mix both with warm water",
      "Add turmeric and drink before breakfast"
    ],
    how_often: "Daily first thing in morning",
    precautions: ["Avoid if you have gallstones", "May cause acidity in some"],
    benefits: ["Stimulates bile production", "Reduces fat in liver", "Detoxifies naturally"],
    related_diseases: ["fatty-liver", "liver-congestion", "sluggish-digestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-103",
    problem: "Gout",
    title: "Cherry Ginger Anti-Gout Drink",
    ingredients: [
      { name: "Tart cherry juice", quantity: "1 cup" },
      { name: "Fresh ginger", quantity: "½ inch" },
      { name: "Water", quantity: "½ cup" }
    ],
    method: [
      "Blend cherry juice with grated ginger",
      "Add water and mix well",
      "Drink fresh"
    ],
    how_often: "Twice daily during flare-ups",
    precautions: ["High in natural sugars", "Monitor uric acid levels"],
    benefits: ["Reduces uric acid", "Anti-inflammatory", "Relieves joint pain"],
    related_diseases: ["gout", "high-uric-acid", "joint-pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "disease-104",
    problem: "Osteoporosis",
    title: "Sesame Seeds Calcium Boost",
    ingredients: [
      { name: "White sesame seeds", quantity: "2 tablespoons" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Lightly roast sesame seeds",
      "Grind to powder",
      "Mix with warm milk",
      "Add honey and drink"
    ],
    how_often: "Daily, preferably at night",
    precautions: ["May cause weight gain if excessive", "Avoid if allergic to sesame"],
    benefits: ["Rich calcium source", "Strengthens bones", "Contains magnesium"],
    related_diseases: ["osteoporosis", "weak-bones", "bone-density"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-105",
    problem: "Sciatica",
    title: "Mustard Oil Garlic Massage",
    ingredients: [
      { name: "Mustard oil", quantity: "4 tablespoons" },
      { name: "Garlic cloves", quantity: "5-6" },
      { name: "Fenugreek seeds", quantity: "1 teaspoon" }
    ],
    method: [
      "Heat oil with crushed garlic and fenugreek",
      "Cook until garlic turns golden",
      "Strain and cool to warm temperature",
      "Massage along sciatic nerve path",
      "Cover with warm cloth after massage"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Test temperature carefully", "Avoid on broken skin"],
    benefits: ["Reduces nerve inflammation", "Improves circulation", "Pain relief"],
    related_diseases: ["sciatica", "lower-back-pain", "nerve-pain"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "disease-106",
    problem: "Bronchitis",
    title: "Ginger Tulsi Steam Treatment",
    ingredients: [
      { name: "Fresh ginger", quantity: "2 inches" },
      { name: "Tulsi leaves", quantity: "15-20" },
      { name: "Eucalyptus oil", quantity: "3 drops" },
      { name: "Hot water", quantity: "1 bowl" }
    ],
    method: [
      "Crush ginger and tulsi",
      "Add to hot water",
      "Add eucalyptus oil",
      "Inhale steam with towel over head",
      "Do for 10-15 minutes"
    ],
    how_often: "2-3 times daily during infection",
    precautions: ["Keep eyes closed", "Don't get too close to hot water"],
    benefits: ["Clears bronchial tubes", "Reduces inflammation", "Expectorant action"],
    related_diseases: ["bronchitis", "chest-congestion", "respiratory-infection"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-107",
    problem: "Eczema",
    title: "Coconut Oil Neem Skin Healer",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "3 tablespoons" },
      { name: "Neem oil", quantity: "1 teaspoon" },
      { name: "Vitamin E capsule", quantity: "1" }
    ],
    method: [
      "Mix coconut oil with neem oil",
      "Pierce vitamin E capsule and add oil",
      "Blend well",
      "Apply on affected areas after bath",
      "Store remainder in glass jar"
    ],
    how_often: "Twice daily",
    precautions: ["Patch test first", "Neem oil has strong smell"],
    benefits: ["Anti-inflammatory", "Moisturizes deeply", "Reduces itching"],
    related_diseases: ["eczema", "dermatitis", "dry-itchy-skin"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-108",
    problem: "Psoriasis",
    title: "Turmeric Aloe Vera Skin Paste",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "3 tablespoons" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Coconut oil", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh aloe gel",
      "Mix with turmeric and coconut oil",
      "Apply on psoriasis patches",
      "Leave for 30 minutes",
      "Wash with lukewarm water"
    ],
    how_often: "Once or twice daily",
    precautions: ["Turmeric stains skin temporarily", "Do patch test"],
    benefits: ["Reduces scaling", "Soothes inflammation", "Promotes healing"],
    related_diseases: ["psoriasis", "skin-plaques", "autoimmune-skin"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-109",
    problem: "IBS (Irritable Bowel)",
    title: "Fennel Peppermint Digestive Tea",
    ingredients: [
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Dried peppermint", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "½ teaspoon" }
    ],
    method: [
      "Crush fennel seeds lightly",
      "Steep with peppermint in hot water",
      "Cover and let sit 5-7 minutes",
      "Strain and add honey",
      "Sip slowly after meals"
    ],
    how_often: "After each meal or when symptoms occur",
    precautions: ["Peppermint may worsen GERD", "Start with small amounts"],
    benefits: ["Relaxes gut muscles", "Reduces bloating", "Eases cramping"],
    related_diseases: ["ibs", "bloating", "abdominal-cramps"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-110",
    problem: "Depression Support",
    title: "Saffron Warm Milk Mood Enhancer",
    ingredients: [
      { name: "Saffron strands", quantity: "5-6" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Cardamom", quantity: "A pinch" }
    ],
    method: [
      "Soak saffron in 1 tablespoon warm milk",
      "Let sit for 10 minutes",
      "Add to rest of warm milk",
      "Mix in honey and cardamom",
      "Drink before bed"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Not a replacement for medication", "Expensive - use authentic saffron"],
    benefits: ["Natural mood enhancer", "Improves sleep", "Reduces anxiety"],
    related_diseases: ["depression", "low-mood", "sadness"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "disease-111",
    problem: "Panic Attacks",
    title: "Chamomile Lavender Calming Blend",
    ingredients: [
      { name: "Chamomile tea", quantity: "1 bag or 1 tbsp dried" },
      { name: "Dried lavender", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: [
      "Steep chamomile and lavender in hot water",
      "Cover and let sit 5 minutes",
      "Strain and add honey",
      "Sip slowly while breathing deeply"
    ],
    how_often: "When feeling anxious or as prevention",
    precautions: ["May cause drowsiness", "Not a replacement for therapy"],
    benefits: ["Calms nervous system", "Reduces heart rate", "Promotes relaxation"],
    related_diseases: ["panic-attacks", "anxiety", "nervousness"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-112",
    problem: "Hypothyroidism Support",
    title: "Ashwagandha Thyroid Tonic",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add ashwagandha to warm milk",
      "Add black pepper for absorption",
      "Mix well and add honey",
      "Drink at night"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Consult doctor if on thyroid meds", "May take weeks to show effect"],
    benefits: ["Supports thyroid function", "Reduces stress hormones", "Balances T3/T4"],
    related_diseases: ["hypothyroidism", "low-thyroid", "fatigue"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-113",
    problem: "Premature Greying",
    title: "Amla Bhringraj Hair Oil",
    ingredients: [
      { name: "Coconut oil", quantity: "1 cup" },
      { name: "Amla powder", quantity: "2 tablespoons" },
      { name: "Bhringraj powder", quantity: "2 tablespoons" },
      { name: "Curry leaves", quantity: "20" }
    ],
    method: [
      "Heat oil on low flame",
      "Add all powders and curry leaves",
      "Cook on low for 15-20 minutes",
      "Let cool and strain",
      "Massage into scalp and hair"
    ],
    how_often: "3 times weekly, leave overnight",
    precautions: ["Strong herbal smell", "May stain pillow"],
    benefits: ["Prevents further greying", "Strengthens hair", "Nourishes roots"],
    related_diseases: ["premature-greying", "grey-hair", "weak-hair"],
    difficulty: "Medium",
    preparation_time: "30 minutes",
    region: "india"
  },
  {
    id: "disease-114",
    problem: "Gum Disease",
    title: "Salt Turmeric Gum Massage",
    ingredients: [
      { name: "Sea salt", quantity: "½ teaspoon" },
      { name: "Turmeric powder", quantity: "¼ teaspoon" },
      { name: "Mustard oil", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix all ingredients to form paste",
      "Massage gently on gums with finger",
      "Leave for 5 minutes",
      "Rinse with warm water",
      "Don't eat for 30 minutes"
    ],
    how_often: "Twice daily",
    precautions: ["May cause temporary staining", "Gentle pressure only"],
    benefits: ["Reduces gum inflammation", "Kills bacteria", "Strengthens gums"],
    related_diseases: ["gum-disease", "gingivitis", "bleeding-gums"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-115",
    problem: "Night Blindness",
    title: "Carrot Ghee Eye Nourisher",
    ingredients: [
      { name: "Fresh carrot juice", quantity: "1 cup" },
      { name: "Ghee", quantity: "1 teaspoon" },
      { name: "Black pepper", quantity: "A pinch" }
    ],
    method: [
      "Make fresh carrot juice",
      "Add ghee and black pepper",
      "Mix well and drink immediately"
    ],
    how_often: "Daily in the morning",
    precautions: ["Excess may cause yellow skin temporarily", "Use fresh juice only"],
    benefits: ["Rich in Vitamin A", "Improves night vision", "Nourishes eyes"],
    related_diseases: ["night-blindness", "weak-eyesight", "vitamin-a-deficiency"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-116",
    problem: "Wheezing",
    title: "Black Pepper Honey Respiratory Aid",
    ingredients: [
      { name: "Black pepper", quantity: "5-6 whole" },
      { name: "Honey", quantity: "2 tablespoons" },
      { name: "Ginger juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush black pepper coarsely",
      "Mix with honey and ginger juice",
      "Take small amounts, let it coat throat",
      "Follow with warm water"
    ],
    how_often: "2-3 times daily during wheezing",
    precautions: ["May cause sneezing", "Reduce if too spicy"],
    benefits: ["Opens airways", "Reduces mucus", "Warming effect"],
    related_diseases: ["wheezing", "asthma", "bronchitis"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-117",
    problem: "Nasal Congestion",
    title: "Steam with Ajwain and Tulsi",
    ingredients: [
      { name: "Ajwain (carom seeds)", quantity: "1 tablespoon" },
      { name: "Tulsi leaves", quantity: "10-12" },
      { name: "Hot water", quantity: "1 bowl" }
    ],
    method: [
      "Boil water and pour in bowl",
      "Add ajwain and tulsi",
      "Cover head with towel",
      "Inhale steam for 10 minutes",
      "Keep eyes closed"
    ],
    how_often: "2-3 times daily during congestion",
    precautions: ["Careful with hot water", "Take breaks if dizzy"],
    benefits: ["Clears blocked nose", "Reduces sinus pressure", "Antimicrobial"],
    related_diseases: ["nasal-congestion", "sinusitis", "blocked-nose"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-118",
    problem: "Ulcerative Colitis Support",
    title: "Aloe Vera Gut Healing Juice",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "2 tablespoons" },
      { name: "Pomegranate juice", quantity: "½ cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh aloe gel (avoid yellow latex)",
      "Blend with pomegranate juice",
      "Add honey and mix",
      "Drink on empty stomach"
    ],
    how_often: "Once daily in morning",
    precautions: ["Use only inner gel", "May cause loose stools initially"],
    benefits: ["Heals gut lining", "Reduces inflammation", "Antioxidant support"],
    related_diseases: ["ulcerative-colitis", "gut-inflammation", "ibd"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-119",
    problem: "Fibromyalgia Support",
    title: "Epsom Salt Magnesium Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Lavender essential oil", quantity: "10 drops" },
      { name: "Warm bath water", quantity: "Full tub" }
    ],
    method: [
      "Fill tub with warm (not hot) water",
      "Dissolve Epsom salt completely",
      "Add lavender oil",
      "Soak for 20-30 minutes",
      "Pat dry gently after"
    ],
    how_often: "3-4 times weekly",
    precautions: ["Don't use very hot water", "Stay hydrated"],
    benefits: ["Magnesium absorption", "Muscle relaxation", "Pain reduction"],
    related_diseases: ["fibromyalgia", "chronic-pain", "muscle-aches"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "us"
  },
  {
    id: "disease-120",
    problem: "Pre-Diabetes",
    title: "Cinnamon Fenugreek Blood Sugar Tea",
    ingredients: [
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Fenugreek seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Soak fenugreek overnight in water",
      "In morning, add cinnamon stick",
      "Boil and reduce to 1 cup",
      "Strain and drink warm"
    ],
    how_often: "Daily in morning before food",
    precautions: ["Monitor blood sugar", "May interact with diabetes meds"],
    benefits: ["Improves insulin sensitivity", "Lowers fasting glucose", "Reduces sugar cravings"],
    related_diseases: ["pre-diabetes", "insulin-resistance", "high-blood-sugar"],
    difficulty: "Easy",
    preparation_time: "Overnight + 15 minutes",
    region: "global"
  },
  {
    id: "disease-121",
    problem: "Varicose Veins",
    title: "Apple Cider Vinegar Compress",
    ingredients: [
      { name: "Raw apple cider vinegar", quantity: "½ cup" },
      { name: "Clean cloth", quantity: "1" },
      { name: "Warm water", quantity: "½ cup" }
    ],
    method: [
      "Mix ACV with warm water",
      "Soak cloth in mixture",
      "Wrap around affected area",
      "Leave for 30 minutes",
      "Elevate legs while wrapped"
    ],
    how_often: "Twice daily",
    precautions: ["May cause skin dryness", "Don't use on broken skin"],
    benefits: ["Improves circulation", "Reduces swelling", "Strengthens vein walls"],
    related_diseases: ["varicose-veins", "leg-swelling", "poor-circulation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-122",
    problem: "Tinnitus",
    title: "Ginkgo Ginger Ear Circulation Tea",
    ingredients: [
      { name: "Ginkgo biloba tea", quantity: "1 bag" },
      { name: "Fresh ginger", quantity: "½ inch" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: [
      "Steep ginkgo tea with sliced ginger",
      "Cover and let sit 5-7 minutes",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "Twice daily for several weeks",
    precautions: ["May take time to show effects", "Consult doctor if on blood thinners"],
    benefits: ["Improves ear circulation", "Reduces ringing", "Neuroprotective"],
    related_diseases: ["tinnitus", "ringing-ears", "ear-circulation"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-123",
    problem: "Restless Leg Syndrome",
    title: "Magnesium Oil Leg Spray",
    ingredients: [
      { name: "Magnesium chloride flakes", quantity: "½ cup" },
      { name: "Distilled water", quantity: "½ cup" },
      { name: "Lavender oil (optional)", quantity: "5 drops" }
    ],
    method: [
      "Heat water until warm (not boiling)",
      "Dissolve magnesium flakes",
      "Add lavender oil if using",
      "Pour into spray bottle",
      "Spray on legs before bed"
    ],
    how_often: "Every night before sleep",
    precautions: ["May tingle initially", "Wash off if irritation occurs"],
    benefits: ["Relaxes leg muscles", "Reduces restlessness", "Improves sleep"],
    related_diseases: ["restless-leg", "leg-discomfort", "sleep-disturbance"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-124",
    problem: "Chronic Fatigue",
    title: "Shilajit Energy Tonic",
    ingredients: [
      { name: "Pure shilajit", quantity: "Pea-sized amount" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Dissolve shilajit in warm milk",
      "Stir until fully dissolved",
      "Add honey and mix",
      "Drink in the morning"
    ],
    how_often: "Daily for at least 2-3 months",
    precautions: ["Buy from trusted source", "Not during pregnancy"],
    benefits: ["Increases energy", "Mitochondrial support", "Reduces fatigue"],
    related_diseases: ["chronic-fatigue", "low-energy", "exhaustion"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-125",
    problem: "Acid Reflux",
    title: "Baking Soda Quick Relief",
    ingredients: [
      { name: "Baking soda", quantity: "½ teaspoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: [
      "Dissolve baking soda in water",
      "Stir until dissolved",
      "Drink slowly for relief"
    ],
    how_often: "Only when needed, not regularly",
    precautions: ["High sodium content", "Not for daily use", "Avoid if on low-sodium diet"],
    benefits: ["Neutralizes acid quickly", "Fast relief", "Reduces burning"],
    related_diseases: ["acid-reflux", "gerd", "heartburn"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "disease-126",
    problem: "Frozen Shoulder",
    title: "Hot Castor Oil Pack",
    ingredients: [
      { name: "Castor oil", quantity: "3 tablespoons" },
      { name: "Flannel cloth", quantity: "1" },
      { name: "Hot water bottle or heating pad", quantity: "1" }
    ],
    method: [
      "Soak flannel in castor oil",
      "Apply to shoulder",
      "Place hot water bottle on top",
      "Leave for 45-60 minutes",
      "Wipe clean after"
    ],
    how_often: "Daily for at least 4-6 weeks",
    precautions: ["Castor oil stains fabric", "Don't heat oil directly"],
    benefits: ["Increases circulation", "Reduces adhesions", "Anti-inflammatory"],
    related_diseases: ["frozen-shoulder", "shoulder-stiffness", "adhesive-capsulitis"],
    difficulty: "Medium",
    preparation_time: "5 minutes + application time",
    region: "global"
  },
  {
    id: "disease-127",
    problem: "Sinusitis",
    title: "Neti Pot Saline Rinse",
    ingredients: [
      { name: "Distilled or boiled water", quantity: "1 cup warm" },
      { name: "Non-iodized salt", quantity: "½ teaspoon" },
      { name: "Baking soda", quantity: "¼ teaspoon" }
    ],
    method: [
      "Dissolve salt and baking soda in warm water",
      "Fill neti pot with solution",
      "Tilt head and pour into one nostril",
      "Let drain out other nostril",
      "Repeat on other side"
    ],
    how_often: "1-2 times daily during sinus issues",
    precautions: ["Use only sterile water", "Clean neti pot after each use"],
    benefits: ["Flushes out mucus", "Reduces inflammation", "Clears sinuses"],
    related_diseases: ["sinusitis", "sinus-infection", "nasal-congestion"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-128",
    problem: "Carpal Tunnel",
    title: "Ice and Turmeric Wrist Treatment",
    ingredients: [
      { name: "Ice pack", quantity: "1" },
      { name: "Turmeric paste (turmeric + water)", quantity: "2 tablespoons" }
    ],
    method: [
      "Apply ice pack to wrist for 15 minutes",
      "Remove and let skin warm slightly",
      "Apply turmeric paste",
      "Leave for 20 minutes",
      "Wash off gently"
    ],
    how_often: "Twice daily",
    precautions: ["Don't apply ice directly to skin", "Turmeric stains temporarily"],
    benefits: ["Reduces inflammation", "Numbs nerve pain", "Anti-inflammatory"],
    related_diseases: ["carpal-tunnel", "wrist-pain", "nerve-compression"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-129",
    problem: "Vertigo",
    title: "Ginger Honey Lemon Balance Drink",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Grate ginger and boil in water",
      "Simmer for 5 minutes",
      "Strain and add lemon and honey",
      "Sip slowly while sitting"
    ],
    how_often: "When experiencing vertigo",
    precautions: ["Stay seated while drinking", "Seek medical help if recurring"],
    benefits: ["Improves inner ear function", "Reduces dizziness", "Settles stomach"],
    related_diseases: ["vertigo", "dizziness", "balance-problems"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-130",
    problem: "High Blood Pressure Support",
    title: "Hibiscus Blood Pressure Tea",
    ingredients: [
      { name: "Dried hibiscus flowers", quantity: "2 tablespoons" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil water and add hibiscus",
      "Steep for 10-15 minutes covered",
      "Strain and add honey when cooled slightly",
      "Drink warm or cold"
    ],
    how_often: "2-3 cups daily",
    precautions: ["May interact with BP medications", "Monitor blood pressure regularly"],
    benefits: ["Natural ACE inhibitor", "Lowers systolic pressure", "Antioxidant rich"],
    related_diseases: ["high-blood-pressure", "hypertension", "heart-health"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-131",
    problem: "Kidney Stones",
    title: "Lemon Barley Water Kidney Flush",
    ingredients: [
      { name: "Barley", quantity: "¼ cup" },
      { name: "Water", quantity: "4 cups" },
      { name: "Lemon juice", quantity: "2 lemons" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Boil barley in water for 30 minutes",
      "Strain the water",
      "Add fresh lemon juice",
      "Add honey when cooled",
      "Drink throughout the day"
    ],
    how_often: "2-3 glasses daily",
    precautions: ["Drink plenty of water too", "Consult doctor for large stones"],
    benefits: ["Increases urine output", "Citrate prevents stones", "Flushes kidneys"],
    related_diseases: ["kidney-stones", "urinary-stones", "kidney-health"],
    difficulty: "Medium",
    preparation_time: "40 minutes",
    region: "india"
  },
  {
    id: "disease-132",
    problem: "UTI",
    title: "Cranberry Coriander UTI Fighter",
    ingredients: [
      { name: "Unsweetened cranberry juice", quantity: "1 cup" },
      { name: "Coriander seeds", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Boil coriander seeds in water",
      "Reduce to half and strain",
      "Mix with cranberry juice",
      "Drink fresh"
    ],
    how_often: "3-4 times daily during infection",
    precautions: ["Use unsweetened juice only", "See doctor if symptoms worsen"],
    benefits: ["Prevents bacteria adhesion", "Cooling effect", "Flushes urinary tract"],
    related_diseases: ["uti", "urinary-infection", "bladder-infection"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-133",
    problem: "Anemia",
    title: "Beetroot Pomegranate Iron Booster",
    ingredients: [
      { name: "Fresh beetroot", quantity: "1 medium" },
      { name: "Pomegranate seeds", quantity: "½ cup" },
      { name: "Jaggery", quantity: "1 tablespoon" }
    ],
    method: [
      "Juice beetroot and pomegranate together",
      "Add jaggery for extra iron",
      "Mix well and drink fresh"
    ],
    how_often: "Once daily for 2-3 months",
    precautions: ["May cause pink urine/stool (normal)", "Check hemoglobin regularly"],
    benefits: ["Rich in iron", "Increases hemoglobin", "Builds blood"],
    related_diseases: ["anemia", "low-hemoglobin", "iron-deficiency"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "disease-134",
    problem: "Thyroid",
    title: "Coconut Oil Thyroid Support",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "1 tablespoon" },
      { name: "Warm water or milk", quantity: "1 cup" }
    ],
    method: [
      "Add coconut oil to warm beverage",
      "Stir well until mixed",
      "Drink in the morning"
    ],
    how_often: "Daily, gradually increase to 2 tablespoons",
    precautions: ["Start with small amount", "Monitor thyroid levels"],
    benefits: ["Boosts metabolism", "Supports thyroid function", "Medium-chain fatty acids"],
    related_diseases: ["thyroid", "hypothyroidism", "metabolism"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "disease-135",
    problem: "PCOS",
    title: "Spearmint Cinnamon Hormone Tea",
    ingredients: [
      { name: "Spearmint leaves (dried)", quantity: "1 tablespoon" },
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep spearmint and cinnamon in hot water",
      "Cover and let sit 10 minutes",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "Twice daily",
    precautions: ["May affect testosterone levels", "Consult doctor if trying to conceive"],
    benefits: ["Reduces androgen levels", "Regulates periods", "Improves insulin sensitivity"],
    related_diseases: ["pcos", "hormonal-imbalance", "irregular-periods"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-136",
    problem: "Heavy Periods",
    title: "Nagkesar Ghee Remedy",
    ingredients: [
      { name: "Nagkesar (cobra saffron) powder", quantity: "¼ teaspoon" },
      { name: "Ghee", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 cup" }
    ],
    method: [
      "Mix nagkesar powder with ghee",
      "Add to warm milk",
      "Stir and drink"
    ],
    how_often: "Twice daily during periods",
    precautions: ["Buy from authentic source", "Consult doctor if very heavy"],
    benefits: ["Reduces heavy bleeding", "Traditional uterine tonic", "Cooling effect"],
    related_diseases: ["heavy-periods", "menorrhagia", "excessive-bleeding"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-137",
    problem: "Menopause Hot Flashes",
    title: "Sage Flaxseed Cooling Tea",
    ingredients: [
      { name: "Dried sage leaves", quantity: "1 tablespoon" },
      { name: "Ground flaxseed", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep sage in hot water for 10 minutes",
      "Strain and add flaxseed",
      "Add honey and stir",
      "Drink cool or at room temperature"
    ],
    how_often: "2-3 times daily",
    precautions: ["Don't use if on hormone therapy", "May cause upset stomach in some"],
    benefits: ["Reduces hot flashes", "Phytoestrogens from flax", "Cooling effect"],
    related_diseases: ["menopause", "hot-flashes", "night-sweats"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-138",
    problem: "Lactation Support",
    title: "Fenugreek Fennel Milk Booster",
    ingredients: [
      { name: "Fenugreek seeds", quantity: "1 teaspoon" },
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Warm water or milk", quantity: "1 cup" },
      { name: "Jaggery", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak fenugreek overnight",
      "Crush with fennel seeds",
      "Boil in water or milk",
      "Strain, add jaggery and drink"
    ],
    how_often: "Twice daily",
    precautions: ["May cause maple-syrup odor", "Start gradually"],
    benefits: ["Increases milk supply", "Galactagogue properties", "Nutritious"],
    related_diseases: ["low-milk-supply", "breastfeeding-support", "lactation"],
    difficulty: "Easy",
    preparation_time: "10 minutes + overnight",
    region: "india"
  },
  {
    id: "disease-139",
    problem: "Postpartum Care",
    title: "Panjiri Energy Balls",
    ingredients: [
      { name: "Whole wheat flour", quantity: "1 cup" },
      { name: "Ghee", quantity: "½ cup" },
      { name: "Almonds", quantity: "10" },
      { name: "Gond (edible gum)", quantity: "2 tablespoons" },
      { name: "Jaggery", quantity: "½ cup" }
    ],
    method: [
      "Fry gond in ghee until puffed",
      "Roast flour in remaining ghee until golden",
      "Add crushed almonds",
      "Mix in grated jaggery when cooled",
      "Roll into balls"
    ],
    how_often: "1-2 balls daily for 40 days postpartum",
    precautions: ["High calorie - eat in moderation", "Traditional recipe - adjust to taste"],
    benefits: ["Restores strength", "Boosts milk", "Warming for new mothers"],
    related_diseases: ["postpartum-care", "recovery", "new-mother-support"],
    difficulty: "Medium",
    preparation_time: "45 minutes",
    region: "india"
  },
  {
    id: "disease-140",
    problem: "Obesity",
    title: "Cumin Coriander Fennel Weight Loss Tea",
    ingredients: [
      { name: "Cumin seeds", quantity: "1 teaspoon" },
      { name: "Coriander seeds", quantity: "1 teaspoon" },
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "3 cups" }
    ],
    method: [
      "Boil all seeds in water",
      "Reduce to 2 cups",
      "Strain and store in thermos",
      "Sip throughout the day warm"
    ],
    how_often: "Daily, sip between meals",
    precautions: ["Not a magic solution - combine with diet/exercise", "May increase urination"],
    benefits: ["Boosts metabolism", "Aids digestion", "Reduces water retention"],
    related_diseases: ["obesity", "weight-loss", "slow-metabolism"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "disease-141",
    problem: "Migraine",
    title: "Peppermint Ginger Migraine Relief",
    ingredients: [
      { name: "Peppermint oil", quantity: "2-3 drops" },
      { name: "Ginger tea", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Apply peppermint oil to temples (dilute if sensitive)",
      "Prepare ginger tea",
      "Add honey and sip slowly",
      "Rest in dark room"
    ],
    how_often: "At onset of migraine",
    precautions: ["Don't apply oil near eyes", "Keep peppermint oil away from children"],
    benefits: ["Cooling sensation", "Reduces nausea", "Anti-inflammatory"],
    related_diseases: ["migraine", "headache", "nausea"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-142",
    problem: "Jaundice Support",
    title: "Sugarcane Lemon Liver Cleanser",
    ingredients: [
      { name: "Fresh sugarcane juice", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Get fresh sugarcane juice",
      "Add lemon juice immediately",
      "Drink fresh 2-3 times daily"
    ],
    how_often: "2-3 glasses daily during recovery",
    precautions: ["Use fresh juice only", "Diabetics avoid", "Get medical treatment first"],
    benefits: ["Supports liver recovery", "Natural sugars for energy", "Vitamin C boost"],
    related_diseases: ["jaundice", "liver-recovery", "bilirubin"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-143",
    problem: "Stroke Recovery Support",
    title: "Garlic Turmeric Brain Tonic",
    ingredients: [
      { name: "Raw garlic", quantity: "2 cloves" },
      { name: "Turmeric", quantity: "½ teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Crush garlic and let sit 10 minutes",
      "Mix turmeric, pepper in warm water",
      "Add crushed garlic and honey",
      "Drink slowly"
    ],
    how_often: "Once daily (with doctor's approval)",
    precautions: ["Consult doctor first", "May interact with blood thinners", "Supportive only - not treatment"],
    benefits: ["Anti-inflammatory", "Supports brain health", "Improves circulation"],
    related_diseases: ["stroke-recovery", "brain-health", "circulation"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-144",
    problem: "Cancer Support",
    title: "Turmeric Golden Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "½ cup" },
      { name: "Water", quantity: "1 cup" },
      { name: "Black pepper", quantity: "1 teaspoon" },
      { name: "Coconut oil", quantity: "¼ cup" }
    ],
    method: [
      "Mix turmeric and water in pan",
      "Heat on low, stirring constantly",
      "Cook until thick paste forms (7-10 mins)",
      "Remove from heat, add pepper and oil",
      "Store in glass jar in fridge"
    ],
    how_often: "¼ to ½ teaspoon daily, increase gradually",
    precautions: ["Consult oncologist first", "May interact with treatments", "Supportive care only"],
    benefits: ["Curcumin anti-cancer properties", "Anti-inflammatory", "Antioxidant support"],
    related_diseases: ["cancer-support", "inflammation", "immune-support"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "global"
  },
  {
    id: "disease-145",
    problem: "Autoimmune Support",
    title: "Anti-Inflammatory Golden Milk",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Ginger powder", quantity: "½ teaspoon" },
      { name: "Cinnamon", quantity: "¼ teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk (don't boil)",
      "Add all spices and stir well",
      "Add honey when slightly cooled",
      "Drink warm before bed"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Consult doctor if on immunosuppressants", "May cause temporary yellow staining"],
    benefits: ["Reduces systemic inflammation", "Immune modulation", "Anti-oxidant"],
    related_diseases: ["autoimmune", "inflammation", "immune-balance"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-146",
    problem: "Metabolic Syndrome Support",
    title: "Apple Cider Vinegar Metabolism Drink",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Cinnamon", quantity: "½ teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" }
    ],
    method: [
      "Mix ACV with warm water",
      "Add cinnamon and lemon",
      "Stir well and drink before meals"
    ],
    how_often: "Before main meals",
    precautions: ["May erode enamel - use straw", "Rinse mouth after"],
    benefits: ["Improves insulin sensitivity", "Aids weight management", "Lowers triglycerides"],
    related_diseases: ["metabolic-syndrome", "insulin-resistance", "weight-issues"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "us"
  },
  {
    id: "disease-147",
    problem: "Heart Disease",
    title: "Arjuna Bark Heart Tonic",
    ingredients: [
      { name: "Arjuna bark powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add arjuna powder to warm milk",
      "Mix well",
      "Add honey when slightly cooled",
      "Drink in morning"
    ],
    how_often: "Once daily in morning",
    precautions: ["Consult cardiologist first", "May interact with heart medications"],
    benefits: ["Strengthens heart muscle", "Traditional cardio tonic", "Antioxidant"],
    related_diseases: ["heart-disease", "weak-heart", "cardiac-support"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-148",
    problem: "Poor Circulation",
    title: "Cayenne Ginger Circulation Booster",
    ingredients: [
      { name: "Cayenne pepper", quantity: "⅛ teaspoon" },
      { name: "Ginger powder", quantity: "¼ teaspoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add cayenne and ginger to warm water",
      "Mix well",
      "Add lemon and honey",
      "Drink slowly"
    ],
    how_often: "Once daily",
    precautions: ["Start with less cayenne", "May cause burning if too much", "Avoid if ulcers"],
    benefits: ["Improves blood flow", "Warms extremities", "Stimulates circulation"],
    related_diseases: ["poor-circulation", "cold-hands-feet", "sluggish-blood-flow"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-149",
    problem: "Liver Detox",
    title: "Milk Thistle Dandelion Liver Tea",
    ingredients: [
      { name: "Milk thistle seeds (crushed)", quantity: "1 teaspoon" },
      { name: "Dandelion root", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1.5 cups" },
      { name: "Lemon", quantity: "1 slice" }
    ],
    method: [
      "Steep milk thistle and dandelion in hot water",
      "Cover and let sit 15 minutes",
      "Strain and add lemon",
      "Drink warm"
    ],
    how_often: "1-2 times daily for 2-4 weeks",
    precautions: ["May interact with medications", "Consult doctor if liver condition"],
    benefits: ["Liver cell regeneration", "Bile flow support", "Detoxification"],
    related_diseases: ["liver-detox", "liver-support", "sluggish-liver"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "global"
  },
  {
    id: "disease-150",
    problem: "Rheumatoid Arthritis Support",
    title: "Turmeric Boswellia Anti-RA Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Boswellia powder", quantity: "½ teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Coconut oil", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix turmeric and boswellia powders",
      "Add black pepper and coconut oil",
      "Blend with honey to form paste",
      "Take directly or mix with warm milk"
    ],
    how_often: "Twice daily",
    precautions: ["Consult rheumatologist", "May take weeks to show effect"],
    benefits: ["Reduces joint inflammation", "Boswellic acids support", "Natural COX inhibitor"],
    related_diseases: ["rheumatoid-arthritis", "autoimmune-arthritis", "joint-inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  // NEW DISEASE REMEDIES (disease-151 to disease-200)
  {
    id: "disease-151",
    problem: "Bronchitis",
    title: "Honey Ginger Mullein Tea",
    ingredients: [
      { name: "Mullein leaves", quantity: "1 tablespoon" },
      { name: "Fresh ginger", quantity: "1 inch piece" },
      { name: "Honey", quantity: "2 teaspoons" },
      { name: "Hot water", quantity: "1.5 cups" }
    ],
    method: [
      "Steep mullein leaves and sliced ginger in hot water",
      "Cover and let infuse for 10-15 minutes",
      "Strain and add honey",
      "Drink warm while breathing in the steam"
    ],
    how_often: "3 times daily during bronchitis",
    precautions: ["Not for children under 2", "Consult doctor if symptoms persist"],
    benefits: ["Soothes bronchial passages", "Expectorant action", "Reduces inflammation"],
    related_diseases: ["bronchitis", "respiratory-infection", "chest-congestion"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-152",
    problem: "Gout",
    title: "Cherry Celery Seed Tonic",
    ingredients: [
      { name: "Tart cherry juice", quantity: "1 cup" },
      { name: "Celery seeds", quantity: "½ teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Water", quantity: "½ cup" }
    ],
    method: [
      "Crush celery seeds lightly",
      "Mix cherry juice with water",
      "Add celery seeds and lemon",
      "Drink immediately or refrigerate"
    ],
    how_often: "Twice daily during flare-ups",
    precautions: ["May interact with blood thinners", "Check with doctor if on medication"],
    benefits: ["Reduces uric acid", "Anti-inflammatory", "Pain relief"],
    related_diseases: ["gout", "uric-acid", "joint-inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-153",
    problem: "Sciatica",
    title: "Warm Sesame Oil Massage Blend",
    ingredients: [
      { name: "Sesame oil", quantity: "¼ cup" },
      { name: "Camphor", quantity: "Small piece" },
      { name: "Ajwain (carom seeds)", quantity: "1 teaspoon" },
      { name: "Garlic cloves", quantity: "2" }
    ],
    method: [
      "Heat sesame oil on low flame",
      "Add crushed garlic and ajwain",
      "Cook until garlic turns light brown",
      "Add camphor and let dissolve",
      "Strain and massage on lower back and leg"
    ],
    how_often: "Daily before bed",
    precautions: ["Avoid on broken skin", "Test for allergies first"],
    benefits: ["Reduces nerve pain", "Improves circulation", "Muscle relaxation"],
    related_diseases: ["sciatica", "lower-back-pain", "nerve-pain"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "disease-154",
    problem: "Eczema",
    title: "Oatmeal Coconut Oil Skin Paste",
    ingredients: [
      { name: "Colloidal oatmeal", quantity: "2 tablespoons" },
      { name: "Virgin coconut oil", quantity: "1 tablespoon" },
      { name: "Raw honey", quantity: "1 teaspoon" },
      { name: "Aloe vera gel", quantity: "1 tablespoon" }
    ],
    method: [
      "Mix colloidal oatmeal with coconut oil",
      "Add honey and aloe vera gel",
      "Blend into smooth paste",
      "Apply to affected areas",
      "Leave for 20 minutes and rinse"
    ],
    how_often: "Daily or as needed",
    precautions: ["Patch test first", "Stop if irritation occurs"],
    benefits: ["Soothes itching", "Moisturizes skin", "Reduces inflammation"],
    related_diseases: ["eczema", "dermatitis", "dry-skin-patches"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-155",
    problem: "Psoriasis",
    title: "Neem Turmeric Healing Paste",
    ingredients: [
      { name: "Neem leaves paste", quantity: "2 tablespoons" },
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Coconut oil", quantity: "1 tablespoon" },
      { name: "Tea tree oil", quantity: "3 drops" }
    ],
    method: [
      "Grind fresh neem leaves into paste",
      "Mix with turmeric and coconut oil",
      "Add tea tree oil drops",
      "Apply on patches",
      "Leave for 30 minutes before washing"
    ],
    how_often: "Once daily",
    precautions: ["Turmeric may stain skin temporarily", "Avoid open wounds"],
    benefits: ["Antibacterial", "Reduces scaling", "Calms inflammation"],
    related_diseases: ["psoriasis", "scalp-psoriasis", "skin-plaques"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "disease-156",
    problem: "Osteoporosis",
    title: "Sesame Seed Calcium Ladoo",
    ingredients: [
      { name: "White sesame seeds", quantity: "1 cup" },
      { name: "Jaggery", quantity: "½ cup" },
      { name: "Ghee", quantity: "2 tablespoons" },
      { name: "Cardamom powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Dry roast sesame seeds until golden",
      "Melt jaggery with ghee on low heat",
      "Mix roasted sesame and cardamom",
      "Shape into small balls while warm",
      "Store in airtight container"
    ],
    how_often: "1-2 ladoos daily",
    precautions: ["High in calories", "Diabetics limit jaggery"],
    benefits: ["Rich in calcium", "Strengthens bones", "Iron supplement"],
    related_diseases: ["osteoporosis", "weak-bones", "calcium-deficiency"],
    difficulty: "Medium",
    preparation_time: "25 minutes",
    region: "india"
  },
  {
    id: "disease-157",
    problem: "IBS (Irritable Bowel)",
    title: "Peppermint Fennel Digestive Tea",
    ingredients: [
      { name: "Peppermint leaves", quantity: "1 tablespoon" },
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Ginger slice", quantity: "1 small" },
      { name: "Hot water", quantity: "1.5 cups" }
    ],
    method: [
      "Lightly crush fennel seeds",
      "Add all ingredients to hot water",
      "Steep covered for 10 minutes",
      "Strain and sip slowly",
      "Drink 30 minutes before meals"
    ],
    how_often: "2-3 times daily",
    precautions: ["Avoid if GERD present", "May not suit all IBS types"],
    benefits: ["Reduces bloating", "Calms intestinal spasms", "Aids digestion"],
    related_diseases: ["ibs", "digestive-issues", "intestinal-discomfort"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-158",
    problem: "Depression Support",
    title: "Ashwagandha Brahmi Mood Tonic",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Brahmi powder", quantity: "¼ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk on low heat",
      "Add ashwagandha and brahmi powders",
      "Stir well and simmer 2 minutes",
      "Remove from heat and add honey",
      "Drink before bed"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Consult doctor if on antidepressants", "Not during pregnancy"],
    benefits: ["Adaptogenic support", "Calms mind", "Improves sleep quality"],
    related_diseases: ["depression", "low-mood", "mental-fatigue"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-159",
    problem: "Panic Attacks",
    title: "Lavender Chamomile Calming Blend",
    ingredients: [
      { name: "Dried chamomile", quantity: "1 tablespoon" },
      { name: "Lavender buds", quantity: "1 teaspoon" },
      { name: "Lemon balm", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1.5 cups" }
    ],
    method: [
      "Combine all herbs in a teapot",
      "Pour hot water over herbs",
      "Steep covered for 10 minutes",
      "Strain and inhale aroma while sipping",
      "Drink slowly"
    ],
    how_often: "As needed during anxiety",
    precautions: ["May cause drowsiness", "Avoid driving after"],
    benefits: ["Calms nervous system", "Reduces anxiety", "Promotes relaxation"],
    related_diseases: ["panic-attacks", "anxiety", "nervousness"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-160",
    problem: "Focus & Concentration",
    title: "Brahmi Shankhpushpi Memory Drink",
    ingredients: [
      { name: "Brahmi powder", quantity: "½ teaspoon" },
      { name: "Shankhpushpi powder", quantity: "¼ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix brahmi and shankhpushpi in warm water",
      "Stir well until dissolved",
      "Add honey and mix",
      "Drink in the morning"
    ],
    how_often: "Daily in morning",
    precautions: ["Start with small dose", "Not for children under 5"],
    benefits: ["Enhances memory", "Improves concentration", "Brain tonic"],
    related_diseases: ["poor-focus", "memory-issues", "mental-clarity"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-161",
    problem: "Night Blindness",
    title: "Carrot Ghee Eye Nutrition",
    ingredients: [
      { name: "Fresh carrot juice", quantity: "1 cup" },
      { name: "Pure ghee", quantity: "1 teaspoon" },
      { name: "Black pepper", quantity: "A pinch" }
    ],
    method: [
      "Extract fresh carrot juice",
      "Warm slightly and add ghee",
      "Add a pinch of black pepper",
      "Drink on empty stomach"
    ],
    how_often: "Daily in morning",
    precautions: ["Excess may cause skin yellowing", "Moderate intake"],
    benefits: ["Rich in Vitamin A", "Improves night vision", "Eye nourishment"],
    related_diseases: ["night-blindness", "weak-vision", "eye-health"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-162",
    problem: "Gum Disease",
    title: "Clove Salt Gum Massage",
    ingredients: [
      { name: "Clove oil", quantity: "5 drops" },
      { name: "Rock salt", quantity: "½ teaspoon" },
      { name: "Mustard oil", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix clove oil with mustard oil",
      "Add rock salt and blend",
      "Massage gently on gums with finger",
      "Leave for 5 minutes",
      "Rinse with warm water"
    ],
    how_often: "Twice daily",
    precautions: ["Avoid swallowing", "Stop if burning sensation"],
    benefits: ["Antibacterial", "Strengthens gums", "Reduces bleeding"],
    related_diseases: ["gum-disease", "gingivitis", "bleeding-gums"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-163",
    problem: "Tooth Sensitivity",
    title: "Sesame Oil Pulling Therapy",
    ingredients: [
      { name: "Cold-pressed sesame oil", quantity: "1 tablespoon" },
      { name: "Clove oil", quantity: "1 drop (optional)" }
    ],
    method: [
      "Take oil in mouth on empty stomach",
      "Swish around teeth for 15-20 minutes",
      "Do not swallow",
      "Spit out and rinse with warm salt water",
      "Brush teeth normally"
    ],
    how_often: "Daily in morning",
    precautions: ["Never swallow the oil", "Do not gargle"],
    benefits: ["Reduces sensitivity", "Strengthens enamel", "Detoxifies mouth"],
    related_diseases: ["tooth-sensitivity", "oral-health", "enamel-weakness"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "disease-164",
    problem: "Premature Greying",
    title: "Amla Bhringraj Hair Oil",
    ingredients: [
      { name: "Coconut oil", quantity: "1 cup" },
      { name: "Amla powder", quantity: "2 tablespoons" },
      { name: "Bhringraj powder", quantity: "1 tablespoon" },
      { name: "Curry leaves", quantity: "10-15" }
    ],
    method: [
      "Heat coconut oil on low flame",
      "Add amla and bhringraj powders",
      "Add curry leaves",
      "Simmer for 15 minutes",
      "Cool, strain, and store in dark bottle"
    ],
    how_often: "Apply 2-3 times weekly",
    precautions: ["Patch test first", "May darken hair over time"],
    benefits: ["Prevents greying", "Nourishes roots", "Promotes melanin"],
    related_diseases: ["grey-hair", "premature-greying", "hair-pigment"],
    difficulty: "Medium",
    preparation_time: "30 minutes",
    region: "india"
  },
  {
    id: "disease-165",
    problem: "Dry & Frizzy Hair",
    title: "Banana Avocado Hair Mask",
    ingredients: [
      { name: "Ripe banana", quantity: "1" },
      { name: "Ripe avocado", quantity: "½" },
      { name: "Olive oil", quantity: "2 tablespoons" },
      { name: "Honey", quantity: "1 tablespoon" }
    ],
    method: [
      "Mash banana and avocado together",
      "Add olive oil and honey",
      "Blend until smooth paste",
      "Apply to damp hair",
      "Leave 30 minutes and rinse"
    ],
    how_often: "Once weekly",
    precautions: ["Rinse thoroughly to avoid residue", "Use mild shampoo after"],
    benefits: ["Deep conditioning", "Reduces frizz", "Adds shine"],
    related_diseases: ["dry-hair", "frizzy-hair", "damaged-hair"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-166",
    problem: "Scalp Infection",
    title: "Tea Tree Neem Scalp Treatment",
    ingredients: [
      { name: "Neem oil", quantity: "2 tablespoons" },
      { name: "Tea tree oil", quantity: "10 drops" },
      { name: "Coconut oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Mix all oils together",
      "Part hair and apply directly to scalp",
      "Massage gently for 5 minutes",
      "Leave for 1 hour or overnight",
      "Wash with mild shampoo"
    ],
    how_often: "2-3 times weekly",
    precautions: ["Dilute tea tree properly", "Avoid eyes"],
    benefits: ["Antifungal", "Antibacterial", "Soothes scalp"],
    related_diseases: ["scalp-infection", "fungal-scalp", "itchy-scalp"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-167",
    problem: "Hypothyroidism Support",
    title: "Ashwagandha Thyroid Tonic",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Ghee", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk on low heat",
      "Add ashwagandha powder and ghee",
      "Stir and simmer 2 minutes",
      "Cool slightly and add honey",
      "Drink at night"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Consult doctor if on thyroid medication", "Monitor thyroid levels"],
    benefits: ["Supports thyroid function", "Reduces stress", "Boosts metabolism"],
    related_diseases: ["hypothyroidism", "underactive-thyroid", "low-thyroid"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-168",
    problem: "Hyperthyroidism Support",
    title: "Lemon Balm Bugleweed Tea",
    ingredients: [
      { name: "Lemon balm leaves", quantity: "1 tablespoon" },
      { name: "Bugleweed", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1.5 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep herbs in hot water",
      "Cover and infuse 15 minutes",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "1-2 times daily",
    precautions: ["Consult doctor first", "Not with thyroid medications without guidance"],
    benefits: ["May calm overactive thyroid", "Reduces anxiety", "Heart rate support"],
    related_diseases: ["hyperthyroidism", "overactive-thyroid", "high-thyroid"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "global"
  },
  {
    id: "disease-169",
    problem: "Frequent Infections",
    title: "Giloy Tulsi Immunity Kadha",
    ingredients: [
      { name: "Giloy stem", quantity: "4-5 inches" },
      { name: "Tulsi leaves", quantity: "10-12" },
      { name: "Black pepper", quantity: "5-6" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush giloy and black pepper",
      "Boil with tulsi in water",
      "Reduce to 1 cup",
      "Strain and add honey when warm",
      "Drink fresh"
    ],
    how_often: "Daily in morning",
    precautions: ["Not during pregnancy", "May lower blood sugar"],
    benefits: ["Boosts immunity", "Fights infections", "Detoxifies blood"],
    related_diseases: ["weak-immunity", "frequent-illness", "low-resistance"],
    difficulty: "Medium",
    preparation_time: "25 minutes",
    region: "india"
  },
  {
    id: "disease-170",
    problem: "Chronic Headache",
    title: "Peppermint Lavender Head Massage Oil",
    ingredients: [
      { name: "Coconut oil", quantity: "2 tablespoons" },
      { name: "Peppermint oil", quantity: "5 drops" },
      { name: "Lavender oil", quantity: "5 drops" },
      { name: "Eucalyptus oil", quantity: "3 drops" }
    ],
    method: [
      "Mix all oils together",
      "Warm slightly",
      "Massage on temples and forehead",
      "Apply to back of neck",
      "Rest in dark room for 20 minutes"
    ],
    how_often: "As needed during headache",
    precautions: ["Avoid eyes", "Patch test first"],
    benefits: ["Cooling effect", "Relaxes muscles", "Eases tension"],
    related_diseases: ["chronic-headache", "tension-headache", "migraine"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-171",
    problem: "Fibromyalgia Support",
    title: "Epsom Salt Lavender Bath Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Lavender essential oil", quantity: "10 drops" },
      { name: "Baking soda", quantity: "½ cup" },
      { name: "Warm bath water", quantity: "Full tub" }
    ],
    method: [
      "Fill bathtub with warm water",
      "Add Epsom salt and baking soda",
      "Mix in lavender oil",
      "Soak for 20-30 minutes",
      "Pat dry and rest"
    ],
    how_often: "2-3 times weekly",
    precautions: ["Stay hydrated", "Avoid if heart condition"],
    benefits: ["Muscle relaxation", "Magnesium absorption", "Pain relief"],
    related_diseases: ["fibromyalgia", "muscle-pain", "chronic-pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-172",
    problem: "Pre-Diabetes",
    title: "Cinnamon Fenugreek Blood Sugar Tea",
    ingredients: [
      { name: "Fenugreek seeds", quantity: "1 teaspoon" },
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Water", quantity: "2 cups" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak fenugreek overnight in water",
      "In morning, add cinnamon and boil",
      "Simmer until reduced by half",
      "Strain and add lemon",
      "Drink warm on empty stomach"
    ],
    how_often: "Daily in morning",
    precautions: ["Monitor blood sugar levels", "Inform doctor if on medication"],
    benefits: ["Improves insulin sensitivity", "Lowers fasting glucose", "Metabolism support"],
    related_diseases: ["pre-diabetes", "insulin-resistance", "borderline-diabetes"],
    difficulty: "Easy",
    preparation_time: "Overnight + 15 min",
    region: "india"
  },
  {
    id: "disease-173",
    problem: "Wheezing",
    title: "Honey Pepper Ginger Syrup",
    ingredients: [
      { name: "Raw honey", quantity: "2 tablespoons" },
      { name: "Black pepper powder", quantity: "¼ teaspoon" },
      { name: "Ginger juice", quantity: "1 teaspoon" },
      { name: "Tulsi juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh ginger and tulsi juice",
      "Mix with honey",
      "Add black pepper powder",
      "Take directly or mix with warm water"
    ],
    how_often: "2-3 times daily",
    precautions: ["Not for infants under 1 year", "Seek medical help if severe"],
    benefits: ["Opens airways", "Reduces bronchial spasm", "Soothes throat"],
    related_diseases: ["wheezing", "breathing-difficulty", "bronchospasm"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-174",
    problem: "Nasal Congestion",
    title: "Eucalyptus Steam Inhalation",
    ingredients: [
      { name: "Hot water", quantity: "1 large bowl" },
      { name: "Eucalyptus oil", quantity: "5-7 drops" },
      { name: "Peppermint oil", quantity: "3 drops" }
    ],
    method: [
      "Boil water and pour in bowl",
      "Add essential oils",
      "Cover head with towel",
      "Inhale steam for 10 minutes",
      "Keep eyes closed"
    ],
    how_often: "2-3 times daily when congested",
    precautions: ["Keep safe distance from hot water", "Not for asthmatics without guidance"],
    benefits: ["Clears sinuses", "Opens nasal passages", "Reduces mucus"],
    related_diseases: ["nasal-congestion", "blocked-nose", "sinus-congestion"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-175",
    problem: "Computer Eye Strain",
    title: "Rose Water Cucumber Eye Compress",
    ingredients: [
      { name: "Rose water", quantity: "2 tablespoons" },
      { name: "Cucumber slices", quantity: "4 thin slices" },
      { name: "Cotton pads", quantity: "2" }
    ],
    method: [
      "Refrigerate cucumber slices and rose water",
      "Soak cotton pads in rose water",
      "Lie down and place cucumber on eyes",
      "Put soaked cotton over cucumber",
      "Relax for 15-20 minutes"
    ],
    how_often: "After long screen time",
    precautions: ["Remove contact lenses first", "Use pure rose water only"],
    benefits: ["Cools tired eyes", "Reduces puffiness", "Refreshes vision"],
    related_diseases: ["eye-strain", "computer-vision", "digital-eye-fatigue"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-176",
    problem: "Vitiligo Support",
    title: "Babchi Coconut Oil Treatment",
    ingredients: [
      { name: "Babchi (Bakuchi) seeds", quantity: "2 tablespoons" },
      { name: "Coconut oil", quantity: "1 cup" },
      { name: "Turmeric powder", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak babchi seeds overnight",
      "Grind into paste next morning",
      "Heat coconut oil and add paste",
      "Add turmeric and simmer 10 minutes",
      "Strain and apply to white patches"
    ],
    how_often: "Daily application",
    precautions: ["May cause sun sensitivity", "Apply sunscreen over it", "Consult dermatologist"],
    benefits: ["Traditional vitiligo remedy", "May promote repigmentation", "Skin nourishment"],
    related_diseases: ["vitiligo", "white-patches", "leucoderma"],
    difficulty: "Medium",
    preparation_time: "Overnight + 30 min",
    region: "india"
  },
  {
    id: "disease-177",
    problem: "Ulcerative Colitis Support",
    title: "Slippery Elm Soothing Drink",
    ingredients: [
      { name: "Slippery elm powder", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Cinnamon", quantity: "A pinch" }
    ],
    method: [
      "Mix slippery elm powder with warm water",
      "Stir well to avoid lumps",
      "Add honey and cinnamon",
      "Drink immediately before it thickens"
    ],
    how_often: "1-2 times daily between meals",
    precautions: ["May interfere with medication absorption", "Take 2 hours apart from meds"],
    benefits: ["Coats intestinal lining", "Reduces inflammation", "Soothes gut"],
    related_diseases: ["ulcerative-colitis", "ibd", "gut-inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-178",
    problem: "Poor Circulation",
    title: "Cayenne Ginger Circulation Tonic",
    ingredients: [
      { name: "Cayenne pepper", quantity: "⅛ teaspoon" },
      { name: "Fresh ginger juice", quantity: "1 teaspoon" },
      { name: "Apple cider vinegar", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix cayenne and ginger juice in warm water",
      "Add apple cider vinegar",
      "Stir in honey",
      "Drink slowly"
    ],
    how_often: "Once daily in morning",
    precautions: ["Start with less cayenne", "Avoid if stomach ulcers"],
    benefits: ["Improves blood flow", "Warms extremities", "Cardiovascular support"],
    related_diseases: ["poor-circulation", "cold-hands-feet", "blood-flow"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-179",
    problem: "Heart Disease",
    title: "Arjuna Bark Heart Tonic",
    ingredients: [
      { name: "Arjuna bark powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk on low heat",
      "Add arjuna bark powder",
      "Stir and simmer 3 minutes",
      "Strain if needed",
      "Add honey when cooled slightly"
    ],
    how_often: "Twice daily",
    precautions: ["Consult cardiologist", "Not a substitute for heart medication"],
    benefits: ["Traditional heart tonic", "Supports cardiac function", "Antioxidant"],
    related_diseases: ["heart-disease", "cardiac-weakness", "heart-health"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-180",
    problem: "High Cholesterol",
    title: "Garlic Honey Heart Elixir",
    ingredients: [
      { name: "Garlic cloves", quantity: "2-3" },
      { name: "Raw honey", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "½ cup" }
    ],
    method: [
      "Crush garlic and let sit 10 minutes",
      "Mix with honey and lemon",
      "Add warm water",
      "Drink on empty stomach"
    ],
    how_often: "Daily in morning",
    precautions: ["May interact with blood thinners", "Strong taste"],
    benefits: ["Lowers LDL cholesterol", "Antioxidant", "Heart protective"],
    related_diseases: ["high-cholesterol", "ldl-cholesterol", "lipid-profile"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-181",
    problem: "Jaundice Support",
    title: "Sugarcane Lemon Liver Drink",
    ingredients: [
      { name: "Fresh sugarcane juice", quantity: "1 cup" },
      { name: "Lemon juice", quantity: "2 tablespoons" },
      { name: "Ginger juice", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh sugarcane juice",
      "Add lemon and ginger juice",
      "Mix well",
      "Drink immediately while fresh"
    ],
    how_often: "2-3 times daily",
    precautions: ["Ensure sugarcane is fresh", "Not for diabetics"],
    benefits: ["Supports liver recovery", "Maintains glucose", "Hydration"],
    related_diseases: ["jaundice", "liver-weakness", "bilirubin"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-182",
    problem: "Kidney Health",
    title: "Corn Silk Kidney Tea",
    ingredients: [
      { name: "Fresh corn silk", quantity: "2 tablespoons" },
      { name: "Water", quantity: "2 cups" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Wash corn silk thoroughly",
      "Boil in water for 10 minutes",
      "Strain the liquid",
      "Add lemon and honey",
      "Drink warm"
    ],
    how_often: "2-3 times daily",
    precautions: ["Consult doctor if kidney disease", "May interact with diuretics"],
    benefits: ["Natural diuretic", "Supports kidney function", "Reduces water retention"],
    related_diseases: ["kidney-health", "water-retention", "kidney-support"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-183",
    problem: "Metabolic Syndrome Support",
    title: "ACV Cinnamon Metabolic Drink",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "2 tablespoons" },
      { name: "Cinnamon powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Raw honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix ACV and cinnamon in warm water",
      "Add honey and stir well",
      "Drink before meals"
    ],
    how_often: "Twice daily before meals",
    precautions: ["May affect blood sugar", "Protect tooth enamel"],
    benefits: ["Supports metabolism", "Blood sugar balance", "Weight management"],
    related_diseases: ["metabolic-syndrome", "insulin-resistance", "obesity"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "disease-184",
    problem: "Tonsillitis (Children)",
    title: "Warm Salt Turmeric Gargle",
    ingredients: [
      { name: "Warm water", quantity: "1 cup" },
      { name: "Salt", quantity: "½ teaspoon" },
      { name: "Turmeric powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Dissolve salt and turmeric in warm water",
      "Have child gargle (if old enough)",
      "Spit out after 30 seconds",
      "Repeat 3-4 times"
    ],
    how_often: "3-4 times daily",
    precautions: ["Only for children who can gargle safely", "Not to be swallowed"],
    benefits: ["Reduces tonsil inflammation", "Antibacterial", "Soothing"],
    related_diseases: ["tonsillitis", "sore-throat", "throat-infection"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-185",
    problem: "Height Growth (Children)",
    title: "Ashwagandha Milk for Growth",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "¼ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Almonds (crushed)", quantity: "3-4" }
    ],
    method: [
      "Warm milk on low heat",
      "Add ashwagandha and crushed almonds",
      "Simmer 2 minutes",
      "Cool and add honey",
      "Give to child at bedtime"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Appropriate for children 8+", "Consult pediatrician"],
    benefits: ["Supports growth hormones", "Bone strength", "Overall development"],
    related_diseases: ["height-growth", "child-development", "growth-support"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-186",
    problem: "Hiccups (Children)",
    title: "Sugar Lemon Hiccup Remedy",
    ingredients: [
      { name: "Sugar", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "3-4 drops" }
    ],
    method: [
      "Mix lemon drops with sugar",
      "Let child swallow slowly",
      "Follow with sips of water"
    ],
    how_often: "Once when hiccups occur",
    precautions: ["Not for infants", "Limit sugar intake"],
    benefits: ["Stimulates vagus nerve", "Stops hiccup reflex", "Safe for children"],
    related_diseases: ["hiccups", "persistent-hiccups"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global"
  },
  {
    id: "disease-187",
    problem: "Diarrhea (Children)",
    title: "ORS with Pomegranate",
    ingredients: [
      { name: "Water (boiled & cooled)", quantity: "1 liter" },
      { name: "Salt", quantity: "½ teaspoon" },
      { name: "Sugar", quantity: "6 teaspoons" },
      { name: "Pomegranate juice", quantity: "2 tablespoons" }
    ],
    method: [
      "Dissolve salt and sugar in water",
      "Add fresh pomegranate juice",
      "Mix well",
      "Give small sips frequently"
    ],
    how_often: "Throughout the day in small sips",
    precautions: ["Seek medical help if severe", "Watch for dehydration signs"],
    benefits: ["Prevents dehydration", "Replaces electrolytes", "Gentle on stomach"],
    related_diseases: ["diarrhea", "loose-motions", "dehydration"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-188",
    problem: "Memory Enhancement (Children)",
    title: "Brahmi Almond Brain Milk",
    ingredients: [
      { name: "Brahmi powder", quantity: "¼ teaspoon" },
      { name: "Almonds (soaked & peeled)", quantity: "5" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grind soaked almonds to paste",
      "Add to warm milk with brahmi",
      "Mix well",
      "Add honey when slightly cool",
      "Give in morning"
    ],
    how_often: "Daily in morning",
    precautions: ["Start with less brahmi", "For children 5+"],
    benefits: ["Memory boost", "Concentration", "Brain development"],
    related_diseases: ["memory", "focus", "learning-support"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "disease-189",
    problem: "Eye Infection (Children)",
    title: "Rose Water Eye Wash",
    ingredients: [
      { name: "Pure rose water", quantity: "2 tablespoons" },
      { name: "Distilled water", quantity: "2 tablespoons" },
      { name: "Clean dropper", quantity: "1" }
    ],
    method: [
      "Mix rose water with distilled water",
      "Use clean dropper",
      "Put 1-2 drops in each eye",
      "Let child blink naturally"
    ],
    how_often: "2-3 times daily",
    precautions: ["Use only pure rose water", "See doctor if no improvement"],
    benefits: ["Soothes irritation", "Natural antiseptic", "Cooling effect"],
    related_diseases: ["eye-infection", "pink-eye", "eye-irritation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "disease-190",
    problem: "PCOS",
    title: "Spearmint Cinnamon Hormone Tea",
    ingredients: [
      { name: "Spearmint leaves", quantity: "1 tablespoon" },
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Hot water", quantity: "1.5 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep spearmint and cinnamon in hot water",
      "Cover and infuse 10 minutes",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "Twice daily",
    precautions: ["Not during pregnancy", "Consult gynecologist"],
    benefits: ["May reduce androgens", "Hormone balance", "Blood sugar support"],
    related_diseases: ["pcos", "hormonal-imbalance", "irregular-periods"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-191",
    problem: "Heavy Periods",
    title: "Pomegranate Iron-Rich Smoothie",
    ingredients: [
      { name: "Pomegranate seeds", quantity: "½ cup" },
      { name: "Beetroot (small)", quantity: "½" },
      { name: "Dates", quantity: "2" },
      { name: "Water", quantity: "1 cup" }
    ],
    method: [
      "Blend pomegranate seeds and beetroot",
      "Add pitted dates",
      "Add water and blend smooth",
      "Drink fresh"
    ],
    how_often: "Daily during periods",
    precautions: ["May stain teeth temporarily", "Consult if very heavy bleeding"],
    benefits: ["Iron replenishment", "Blood building", "Energy support"],
    related_diseases: ["heavy-periods", "menorrhagia", "iron-loss"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-192",
    problem: "Pregnancy Nausea",
    title: "Ginger Lemon Morning Sickness Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch piece" },
      { name: "Lemon slice", quantity: "1" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Slice ginger thinly",
      "Steep in warm (not hot) water",
      "Add lemon slice",
      "Stir in honey when cooled slightly",
      "Sip slowly"
    ],
    how_often: "As needed, especially morning",
    precautions: ["Limit ginger to 1g daily during pregnancy", "Consult obstetrician"],
    benefits: ["Reduces nausea", "Settles stomach", "Safe in moderation"],
    related_diseases: ["morning-sickness", "pregnancy-nausea", "first-trimester-nausea"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "disease-193",
    problem: "Lactation Support",
    title: "Fenugreek Fennel Lactation Tea",
    ingredients: [
      { name: "Fenugreek seeds", quantity: "1 teaspoon" },
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" },
      { name: "Jaggery", quantity: "1 teaspoon" }
    ],
    method: [
      "Lightly crush seeds",
      "Boil in water for 10 minutes",
      "Strain and add jaggery",
      "Drink warm"
    ],
    how_often: "2-3 times daily",
    precautions: ["May cause maple syrup smell", "Stop if baby has digestive issues"],
    benefits: ["Increases milk supply", "Galactagogue properties", "Digestive aid"],
    related_diseases: ["low-milk-supply", "breastfeeding-support", "lactation"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "disease-194",
    problem: "Menopause Symptoms",
    title: "Shatavari Ashwagandha Women's Tonic",
    ingredients: [
      { name: "Shatavari powder", quantity: "½ teaspoon" },
      { name: "Ashwagandha powder", quantity: "¼ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk on low heat",
      "Add shatavari and ashwagandha",
      "Stir and simmer 2 minutes",
      "Cool slightly and add honey",
      "Drink at bedtime"
    ],
    how_often: "Daily at bedtime",
    precautions: ["Consult doctor if on HRT", "Not with estrogen-sensitive conditions"],
    benefits: ["Hormone balance", "Reduces hot flashes", "Stress relief"],
    related_diseases: ["menopause", "perimenopause", "hormonal-changes"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "disease-195",
    problem: "Menopause Hot Flashes",
    title: "Sage Flaxseed Cooling Tea",
    ingredients: [
      { name: "Sage leaves (dried)", quantity: "1 teaspoon" },
      { name: "Flaxseed", quantity: "1 teaspoon" },
      { name: "Peppermint", quantity: "½ teaspoon" },
      { name: "Hot water", quantity: "1.5 cups" }
    ],
    method: [
      "Crush flaxseeds lightly",
      "Steep all ingredients in hot water",
      "Cover and infuse 10 minutes",
      "Strain and drink warm or cool"
    ],
    how_often: "1-2 times daily",
    precautions: ["Sage may interact with medications", "Not during pregnancy"],
    benefits: ["Reduces hot flash frequency", "Phytoestrogen support", "Cooling effect"],
    related_diseases: ["hot-flashes", "night-sweats", "vasomotor-symptoms"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },
  {
    id: "disease-196",
    problem: "Leucorrhea",
    title: "Rice Water Vaginal Health Wash",
    ingredients: [
      { name: "Rice", quantity: "½ cup" },
      { name: "Water", quantity: "2 cups" },
      { name: "Neem leaves", quantity: "5-6" }
    ],
    method: [
      "Wash rice and soak in water",
      "Add neem leaves",
      "Let sit for 30 minutes",
      "Strain the water",
      "Use for external washing only"
    ],
    how_often: "Daily external wash",
    precautions: ["External use only", "See gynecologist if persistent"],
    benefits: ["Antibacterial", "pH balance", "Reduces discharge"],
    related_diseases: ["leucorrhea", "white-discharge", "vaginal-health"],
    difficulty: "Easy",
    preparation_time: "35 minutes",
    region: "india"
  },
  {
    id: "disease-197",
    problem: "Iron Deficiency (Women)",
    title: "Jaggery Sesame Iron Balls",
    ingredients: [
      { name: "Black sesame seeds", quantity: "1 cup" },
      { name: "Jaggery", quantity: "½ cup" },
      { name: "Ghee", quantity: "1 tablespoon" },
      { name: "Dry ginger powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Dry roast sesame seeds",
      "Melt jaggery with ghee",
      "Mix sesame and ginger powder",
      "Shape into small balls",
      "Store in airtight container"
    ],
    how_often: "1-2 balls daily",
    precautions: ["High in calories", "Limit if diabetic"],
    benefits: ["Rich in iron", "Calcium boost", "Energy supplement"],
    related_diseases: ["iron-deficiency", "anemia", "low-hemoglobin"],
    difficulty: "Medium",
    preparation_time: "25 minutes",
    region: "india"
  },
  {
    id: "disease-198",
    problem: "Postpartum Care",
    title: "Ajwain Ginger Postpartum Water",
    ingredients: [
      { name: "Ajwain (carom seeds)", quantity: "1 tablespoon" },
      { name: "Dry ginger powder", quantity: "½ teaspoon" },
      { name: "Jaggery", quantity: "1 tablespoon" },
      { name: "Water", quantity: "4 cups" }
    ],
    method: [
      "Boil all ingredients in water",
      "Reduce to half",
      "Strain and store",
      "Drink warm throughout day"
    ],
    how_often: "Sip throughout the day",
    precautions: ["Not during pregnancy", "Only after delivery"],
    benefits: ["Aids digestion", "Reduces bloating", "Traditional postpartum care"],
    related_diseases: ["postpartum-recovery", "after-delivery-care", "new-mother-care"],
    difficulty: "Easy",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "disease-199",
    problem: "UTI (Women)",
    title: "Cranberry Coriander UTI Drink",
    ingredients: [
      { name: "Unsweetened cranberry juice", quantity: "1 cup" },
      { name: "Coriander seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "½ cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak coriander seeds in water overnight",
      "Strain in morning",
      "Mix with cranberry juice",
      "Add honey and drink"
    ],
    how_often: "Twice daily",
    precautions: ["See doctor if fever or blood in urine", "Complete antibiotic course if prescribed"],
    benefits: ["Prevents bacterial adhesion", "Cooling effect", "Urinary tract support"],
    related_diseases: ["uti", "urinary-infection", "bladder-infection"],
    difficulty: "Easy",
    preparation_time: "Overnight + 5 min",
    region: "global"
  },
  {
    id: "disease-200",
    problem: "Autoimmune Support",
    title: "Golden Turmeric Anti-Inflammatory Milk",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Ginger powder", quantity: "¼ teaspoon" },
      { name: "Coconut milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm coconut milk on low heat",
      "Add turmeric, pepper, and ginger",
      "Whisk well and simmer 5 minutes",
      "Cool slightly and add honey",
      "Drink warm"
    ],
    how_often: "Daily, preferably at night",
    precautions: ["Consult doctor if on immunosuppressants", "Turmeric may interact with medications"],
    benefits: ["Powerful anti-inflammatory", "Curcumin absorption", "Immune modulation"],
    related_diseases: ["autoimmune-disease", "chronic-inflammation", "immune-support"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },

  // ===============================
  // ELDERLY HEALTH REMEDIES (50+)
  // ===============================

  // Parkinson's Support
  {
    id: "elderly-201",
    problem: "Parkinson's Support",
    title: "Mucuna Pruriens (Kapikacchu) Powder",
    ingredients: [
      { name: "Mucuna pruriens powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm the milk gently",
      "Add mucuna powder and stir well",
      "Add honey once slightly cooled",
      "Drink slowly"
    ],
    how_often: "Once daily, preferably morning",
    precautions: ["Consult neurologist before use", "May interact with L-Dopa medications", "Start with small dose"],
    benefits: ["Natural source of L-Dopa", "Supports dopamine production", "Neuroprotective properties"],
    related_diseases: ["parkinsons", "tremors", "neurological-disorder"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "elderly-202",
    problem: "Parkinson's Support",
    title: "Brahmi & Ashwagandha Nerve Tonic",
    ingredients: [
      { name: "Brahmi powder", quantity: "¼ teaspoon" },
      { name: "Ashwagandha powder", quantity: "¼ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Ghee", quantity: "½ teaspoon" }
    ],
    method: [
      "Mix both powders in warm water",
      "Add ghee and stir well",
      "Let it cool slightly",
      "Drink on empty stomach"
    ],
    how_often: "Twice daily",
    precautions: ["Consult doctor if on medications", "Not during pregnancy", "Monitor for drowsiness"],
    benefits: ["Nerve cell regeneration", "Reduces tremors", "Improves motor function"],
    related_diseases: ["parkinsons", "nerve-damage", "tremors"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "elderly-203",
    problem: "Parkinson's Support",
    title: "Ginger-Turmeric Anti-Tremor Tea",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch piece" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Black pepper", quantity: "2-3 crushed" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: [
      "Grate ginger and add to water",
      "Boil for 10 minutes",
      "Add turmeric and black pepper",
      "Strain and drink warm"
    ],
    how_often: "2-3 times daily",
    precautions: ["May increase bleeding risk", "Avoid before surgery", "Check with doctor"],
    benefits: ["Anti-inflammatory for brain", "Reduces oxidative stress", "Supports motor control"],
    related_diseases: ["parkinsons", "inflammation", "tremors"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },

  // Alzheimer's Support
  {
    id: "elderly-204",
    problem: "Alzheimer's Support",
    title: "Brahmi Memory Enhancement Tonic",
    ingredients: [
      { name: "Brahmi (Bacopa) powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Almonds (soaked, peeled)", quantity: "5 pieces" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Grind soaked almonds to paste",
      "Warm the milk and add brahmi powder",
      "Mix in almond paste thoroughly",
      "Add honey when lukewarm",
      "Drink slowly"
    ],
    how_often: "Daily in the morning",
    precautions: ["May cause digestive upset initially", "Consult doctor if on memory medications", "Be patient - takes weeks"],
    benefits: ["Enhances cognitive function", "Protects brain cells", "Improves memory retention"],
    related_diseases: ["alzheimers", "dementia", "memory-loss"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "elderly-205",
    problem: "Alzheimer's Support",
    title: "Shankhpushpi Brain Syrup",
    ingredients: [
      { name: "Shankhpushpi powder", quantity: "½ teaspoon" },
      { name: "Brahmi powder", quantity: "¼ teaspoon" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "½ cup" }
    ],
    method: [
      "Mix both powders in warm water",
      "Stir until dissolved",
      "Add honey and mix well",
      "Consume immediately"
    ],
    how_often: "Twice daily after meals",
    precautions: ["Not for children under 12", "Consult neurologist", "Avoid during pregnancy"],
    benefits: ["Boosts brain circulation", "Reduces cognitive decline", "Calms anxiety"],
    related_diseases: ["alzheimers", "anxiety", "memory-loss"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "elderly-206",
    problem: "Alzheimer's Support",
    title: "Coconut Oil Brain Fuel",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "1 tablespoon" },
      { name: "Turmeric powder", quantity: "¼ teaspoon" },
      { name: "Cinnamon powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Gently warm coconut oil",
      "Mix in turmeric and cinnamon",
      "Take directly or add to warm drink",
      "Best taken in morning"
    ],
    how_often: "Once daily with breakfast",
    precautions: ["May cause loose stools initially", "Start with ½ tablespoon", "Monitor cholesterol levels"],
    benefits: ["MCTs provide brain energy", "Anti-inflammatory effect", "Supports neuronal health"],
    related_diseases: ["alzheimers", "brain-fog", "cognitive-decline"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "elderly-207",
    problem: "Alzheimer's Support",
    title: "Walnut & Flaxseed Brain Mix",
    ingredients: [
      { name: "Walnuts", quantity: "5-6 pieces" },
      { name: "Flaxseeds (ground)", quantity: "1 teaspoon" },
      { name: "Pumpkin seeds", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Soak walnuts overnight",
      "Crush walnuts and mix with ground flaxseeds",
      "Add pumpkin seeds",
      "Drizzle honey and consume"
    ],
    how_often: "Daily as morning snack",
    precautions: ["Nut allergies", "Moderate portion for weight management", "Ensure fresh flaxseeds"],
    benefits: ["Omega-3 for brain health", "Vitamin E protection", "Cognitive support"],
    related_diseases: ["alzheimers", "memory-loss", "brain-health"],
    difficulty: "Easy",
    preparation_time: "Overnight + 5 min",
    region: "global"
  },

  // Memory Loss (Age-Related)
  {
    id: "elderly-208",
    problem: "Memory Loss (Elderly)",
    title: "Almond Milk Memory Elixir",
    ingredients: [
      { name: "Almonds (soaked overnight)", quantity: "10 pieces" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Saffron strands", quantity: "3-4" },
      { name: "Cardamom powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Peel soaked almonds and grind with milk",
      "Warm the mixture gently",
      "Add saffron strands and cardamom",
      "Drink warm in the morning"
    ],
    how_often: "Daily on empty stomach",
    precautions: ["Nut allergies", "Expensive saffron - use genuine", "Moderate for diabetics"],
    benefits: ["Sharpens memory", "Brain cell nourishment", "Improves concentration"],
    related_diseases: ["memory-loss", "cognitive-decline", "brain-fog"],
    difficulty: "Medium",
    preparation_time: "Overnight + 10 min",
    region: "india"
  },
  {
    id: "elderly-209",
    problem: "Memory Loss (Elderly)",
    title: "Rosemary Infusion Tea",
    ingredients: [
      { name: "Fresh rosemary", quantity: "2 sprigs" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Lemon juice", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep rosemary in hot water for 10 minutes",
      "Strain and add lemon juice",
      "Add honey to taste",
      "Drink warm"
    ],
    how_often: "1-2 cups daily",
    precautions: ["Avoid large amounts during pregnancy", "May interact with blood thinners", "Seizure history - consult doctor"],
    benefits: ["Improves memory recall", "Antioxidant protection", "Increases alertness"],
    related_diseases: ["memory-loss", "concentration", "brain-fog"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global"
  },

  // Arthritis (Elderly)
  {
    id: "elderly-210",
    problem: "Arthritis (Elderly)",
    title: "Sesame Oil Warm Massage",
    ingredients: [
      { name: "Sesame oil", quantity: "3 tablespoons" },
      { name: "Camphor", quantity: "Small piece" },
      { name: "Eucalyptus oil", quantity: "5 drops" }
    ],
    method: [
      "Warm sesame oil gently",
      "Dissolve camphor in warm oil",
      "Add eucalyptus drops and mix",
      "Massage affected joints for 15 minutes",
      "Leave for 30 minutes before washing"
    ],
    how_often: "Twice daily",
    precautions: ["Test for skin sensitivity", "Not on broken skin", "Wash hands after use"],
    benefits: ["Reduces joint stiffness", "Improves mobility", "Relieves pain naturally"],
    related_diseases: ["arthritis", "joint-pain", "stiffness"],
    difficulty: "Easy",
    preparation_time: "5 minutes + 15 min massage",
    region: "india"
  },
  {
    id: "elderly-211",
    problem: "Arthritis (Elderly)",
    title: "Turmeric-Ginger Joint Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "2 teaspoons" },
      { name: "Ginger powder", quantity: "1 teaspoon" },
      { name: "Mustard oil", quantity: "2 tablespoons" },
      { name: "Rock salt", quantity: "½ teaspoon" }
    ],
    method: [
      "Mix all dry ingredients",
      "Add mustard oil to make paste",
      "Apply on swollen joints",
      "Cover with warm cloth for 20 minutes",
      "Wash with lukewarm water"
    ],
    how_often: "Once daily before bath",
    precautions: ["Mustard oil may cause warmth", "Avoid on open wounds", "Test patch first"],
    benefits: ["Anti-inflammatory action", "Reduces swelling", "Improves joint function"],
    related_diseases: ["arthritis", "swelling", "inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes + 20 min application",
    region: "india"
  },

  // Weak Bones (Osteoporosis - Elderly)
  {
    id: "elderly-212",
    problem: "Weak Bones (Elderly)",
    title: "Sesame Seed Calcium Powder",
    ingredients: [
      { name: "White sesame seeds (roasted)", quantity: "2 tablespoons" },
      { name: "Jaggery", quantity: "1 tablespoon" },
      { name: "Cardamom powder", quantity: "¼ teaspoon" }
    ],
    method: [
      "Dry roast sesame seeds until golden",
      "Grind to coarse powder when cooled",
      "Mix with grated jaggery and cardamom",
      "Consume as a sweet snack"
    ],
    how_often: "Daily after meals",
    precautions: ["Moderate for diabetics due to jaggery", "Sesame allergies", "Count calories"],
    benefits: ["Rich in calcium", "Strengthens bones", "Natural mineral source"],
    related_diseases: ["osteoporosis", "weak-bones", "calcium-deficiency"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "elderly-213",
    problem: "Weak Bones (Elderly)",
    title: "Moringa Bone Builder",
    ingredients: [
      { name: "Moringa leaf powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add moringa powder to warm milk",
      "Stir well to dissolve",
      "Add honey when slightly cooled",
      "Drink daily"
    ],
    how_often: "Once daily",
    precautions: ["May lower blood pressure", "Consult if on thyroid meds", "Start with small dose"],
    benefits: ["High calcium and vitamin K", "Strengthens bone density", "Anti-inflammatory"],
    related_diseases: ["osteoporosis", "bone-health", "calcium-deficiency"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // Prostate Health (Elderly Men)
  {
    id: "elderly-214",
    problem: "Prostate Health (Elderly)",
    title: "Pumpkin Seed Prostate Mix",
    ingredients: [
      { name: "Pumpkin seeds", quantity: "2 tablespoons" },
      { name: "Sunflower seeds", quantity: "1 tablespoon" },
      { name: "Flaxseeds", quantity: "1 teaspoon" }
    ],
    method: [
      "Lightly roast all seeds",
      "Mix together",
      "Chew thoroughly as snack",
      "Can also grind and add to smoothies"
    ],
    how_often: "Daily as snack",
    precautions: ["Seed allergies", "Moderate portion for calories", "Stay hydrated"],
    benefits: ["Zinc for prostate health", "Reduces inflammation", "Supports urinary flow"],
    related_diseases: ["prostate-enlargement", "bph", "urinary-issues"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "elderly-215",
    problem: "Prostate Health (Elderly)",
    title: "Tomato Lycopene Drink",
    ingredients: [
      { name: "Ripe tomatoes", quantity: "2 medium" },
      { name: "Olive oil", quantity: "1 teaspoon" },
      { name: "Black pepper", quantity: "A pinch" },
      { name: "Basil leaves", quantity: "4-5" }
    ],
    method: [
      "Blend tomatoes until smooth",
      "Add olive oil for lycopene absorption",
      "Season with pepper and torn basil",
      "Consume fresh"
    ],
    how_often: "Daily with meals",
    precautions: ["Acidic - avoid if GERD", "Check for nightshade sensitivity", "Fresh is best"],
    benefits: ["Lycopene protects prostate", "Antioxidant rich", "Reduces inflammation"],
    related_diseases: ["prostate-health", "cancer-prevention", "men-health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Heart Health (Elderly)
  {
    id: "elderly-216",
    problem: "Heart Health (Elderly)",
    title: "Arjuna Bark Heart Tonic",
    ingredients: [
      { name: "Arjuna bark powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add arjuna powder to warm water",
      "Stir well and let sit 2 minutes",
      "Add honey and mix",
      "Drink on empty stomach"
    ],
    how_often: "Twice daily",
    precautions: ["Consult cardiologist", "May interact with heart medications", "Monitor blood pressure"],
    benefits: ["Strengthens heart muscles", "Regulates blood pressure", "Improves circulation"],
    related_diseases: ["heart-disease", "hypertension", "weak-heart"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "elderly-217",
    problem: "Heart Health (Elderly)",
    title: "Garlic-Lemon Heart Elixir",
    ingredients: [
      { name: "Garlic cloves", quantity: "2 crushed" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Crush garlic and let sit 10 minutes",
      "Add to warm water with lemon juice",
      "Add honey and stir well",
      "Drink in the morning"
    ],
    how_often: "Once daily morning",
    precautions: ["May interact with blood thinners", "Strong taste", "Avoid before surgery"],
    benefits: ["Lowers cholesterol", "Improves blood flow", "Natural blood thinner"],
    related_diseases: ["heart-disease", "cholesterol", "circulation"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },

  // Digestive Issues (Elderly)
  {
    id: "elderly-218",
    problem: "Digestive Issues (Elderly)",
    title: "Ajwain Digestive Water",
    ingredients: [
      { name: "Ajwain (carom seeds)", quantity: "1 teaspoon" },
      { name: "Black salt", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Dry roast ajwain lightly",
      "Add to warm water",
      "Add black salt and mix",
      "Drink after meals"
    ],
    how_often: "After lunch and dinner",
    precautions: ["Avoid if acid reflux severe", "Moderate salt intake", "Not during pregnancy"],
    benefits: ["Aids digestion", "Reduces bloating", "Relieves gas"],
    related_diseases: ["indigestion", "bloating", "gas"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "elderly-219",
    problem: "Digestive Issues (Elderly)",
    title: "Papaya Enzyme Smoothie",
    ingredients: [
      { name: "Ripe papaya", quantity: "1 cup cubed" },
      { name: "Yogurt", quantity: "½ cup" },
      { name: "Ginger", quantity: "Small piece" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Blend papaya with yogurt",
      "Add grated ginger",
      "Sweeten with honey",
      "Consume fresh"
    ],
    how_often: "Daily, preferably afternoon",
    precautions: ["Avoid unripe papaya", "Latex allergy caution", "Diabetics monitor sugar"],
    benefits: ["Natural digestive enzymes", "Relieves constipation", "Soothes stomach"],
    related_diseases: ["constipation", "indigestion", "stomach-issues"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Constipation (Elderly)
  {
    id: "elderly-220",
    problem: "Constipation (Elderly)",
    title: "Triphala Gentle Laxative",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon (optional)" }
    ],
    method: [
      "Add triphala to warm water",
      "Stir well and let steep 5 minutes",
      "Add honey if taste is too strong",
      "Drink before bedtime"
    ],
    how_often: "Nightly before bed",
    precautions: ["Start with ½ teaspoon", "May cause loose stools initially", "Drink plenty of water"],
    benefits: ["Gentle bowel movement", "Detoxifies system", "Improves gut health"],
    related_diseases: ["constipation", "digestive-health", "detox"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "elderly-221",
    problem: "Constipation (Elderly)",
    title: "Prune and Fig Compote",
    ingredients: [
      { name: "Prunes", quantity: "5-6 pieces" },
      { name: "Dried figs", quantity: "3-4 pieces" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Soak prunes and figs overnight in water",
      "In morning, blend lightly or eat as is",
      "Drink the soaking water too",
      "Consume on empty stomach"
    ],
    how_often: "Daily morning",
    precautions: ["High in sugar - moderate for diabetics", "May cause gas initially", "Increase water intake"],
    benefits: ["Natural fiber boost", "Gentle laxative effect", "Improves regularity"],
    related_diseases: ["constipation", "fiber-deficiency", "gut-health"],
    difficulty: "Easy",
    preparation_time: "Overnight + 5 min",
    region: "global"
  },

  // Sleep Issues (Elderly)
  {
    id: "elderly-222",
    problem: "Sleep Issues (Elderly)",
    title: "Ashwagandha Night Milk",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Nutmeg powder", quantity: "A pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Warm milk on low heat",
      "Add ashwagandha and nutmeg",
      "Stir well and remove from heat",
      "Add honey when slightly cooled",
      "Drink 30 minutes before bed"
    ],
    how_often: "Nightly before sleep",
    precautions: ["May cause drowsiness", "Avoid if thyroid issues without consulting", "Start with small dose"],
    benefits: ["Promotes deep sleep", "Reduces anxiety", "Calms nervous system"],
    related_diseases: ["insomnia", "anxiety", "sleep-disorder"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "elderly-223",
    problem: "Sleep Issues (Elderly)",
    title: "Chamomile-Lavender Sleep Tea",
    ingredients: [
      { name: "Chamomile flowers (dried)", quantity: "1 tablespoon" },
      { name: "Lavender buds", quantity: "½ teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep chamomile and lavender in hot water",
      "Cover and let infuse 10 minutes",
      "Strain and add honey",
      "Sip slowly before bedtime"
    ],
    how_often: "Nightly",
    precautions: ["Ragweed allergy cross-reaction", "May interact with sedatives", "Avoid driving after"],
    benefits: ["Natural sedative effect", "Reduces stress", "Promotes relaxation"],
    related_diseases: ["insomnia", "anxiety", "restlessness"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global"
  },

  // Weak Eyesight (Age-Related)
  {
    id: "elderly-224",
    problem: "Weak Eyesight (Elderly)",
    title: "Triphala Eye Wash",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Rose water", quantity: "1 teaspoon (optional)" }
    ],
    method: [
      "Soak triphala in water overnight",
      "Strain through fine cloth in morning",
      "Add rose water if desired",
      "Use as eye wash with clean dropper or eye cup"
    ],
    how_often: "Once daily in morning",
    precautions: ["Ensure completely strained", "Use fresh daily", "Stop if irritation occurs"],
    benefits: ["Strengthens eye muscles", "Reduces dryness", "Improves vision clarity"],
    related_diseases: ["weak-eyesight", "eye-strain", "dry-eyes"],
    difficulty: "Medium",
    preparation_time: "Overnight + 5 min",
    region: "india"
  },
  {
    id: "elderly-225",
    problem: "Weak Eyesight (Elderly)",
    title: "Carrot-Spinach Vision Juice",
    ingredients: [
      { name: "Carrots", quantity: "2 medium" },
      { name: "Spinach leaves", quantity: "1 cup" },
      { name: "Amla", quantity: "1 piece" },
      { name: "Water", quantity: "½ cup" }
    ],
    method: [
      "Wash all vegetables thoroughly",
      "Juice carrots, spinach, and amla",
      "Add water if too thick",
      "Drink fresh immediately"
    ],
    how_often: "Daily in morning",
    precautions: ["Oxalate content in spinach - kidney stone patients caution", "Wash produce well", "Drink immediately"],
    benefits: ["Rich in beta-carotene", "Vitamin A for eyes", "Antioxidant protection"],
    related_diseases: ["weak-eyesight", "macular-degeneration", "night-blindness"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "india"
  },

  // Weakness & Fatigue (Elderly)
  {
    id: "elderly-226",
    problem: "Weakness (Elderly)",
    title: "Chyawanprash Energy Booster",
    ingredients: [
      { name: "Chyawanprash", quantity: "1 tablespoon" },
      { name: "Warm milk", quantity: "1 cup" }
    ],
    method: [
      "Take chyawanprash in a spoon",
      "Follow with warm milk",
      "Or mix into milk and drink",
      "Best taken in morning"
    ],
    how_often: "Once or twice daily",
    precautions: ["Contains sugar - diabetics use sugar-free version", "Check for specific ingredient allergies", "Consult if on medications"],
    benefits: ["Builds stamina", "Boosts immunity", "Rejuvenates body"],
    related_diseases: ["weakness", "low-immunity", "fatigue"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india"
  },
  {
    id: "elderly-227",
    problem: "Weakness (Elderly)",
    title: "Dates & Milk Vitality Drink",
    ingredients: [
      { name: "Dates (pitted)", quantity: "4-5 pieces" },
      { name: "Warm milk", quantity: "1 cup" },
      { name: "Ghee", quantity: "½ teaspoon" },
      { name: "Cardamom", quantity: "1 pod crushed" }
    ],
    method: [
      "Soak dates in warm milk for 30 minutes",
      "Blend together until smooth",
      "Add ghee and cardamom",
      "Drink warm"
    ],
    how_often: "Daily, preferably morning",
    precautions: ["High in natural sugar", "Diabetics monitor intake", "Calorie-dense"],
    benefits: ["Instant energy", "Iron and minerals", "Strengthens body"],
    related_diseases: ["weakness", "anemia", "low-energy"],
    difficulty: "Easy",
    preparation_time: "35 minutes",
    region: "india"
  },

  // Blood Circulation (Elderly)
  {
    id: "elderly-228",
    problem: "Poor Circulation (Elderly)",
    title: "Cinnamon Circulation Tea",
    ingredients: [
      { name: "Cinnamon stick", quantity: "1 small" },
      { name: "Ginger (fresh)", quantity: "½ inch" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil cinnamon and ginger in water for 10 minutes",
      "Strain into cup",
      "Add honey when slightly cooled",
      "Drink warm"
    ],
    how_often: "1-2 times daily",
    precautions: ["Ceylon cinnamon preferred over cassia", "May lower blood sugar", "Check with doctor if on blood thinners"],
    benefits: ["Improves blood flow", "Warms extremities", "Reduces numbness"],
    related_diseases: ["poor-circulation", "cold-extremities", "numbness"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global"
  },
  {
    id: "elderly-229",
    problem: "Poor Circulation (Elderly)",
    title: "Cayenne Pepper Tonic",
    ingredients: [
      { name: "Cayenne pepper", quantity: "¼ teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Add cayenne to warm water",
      "Mix in lemon juice",
      "Add honey and stir well",
      "Drink slowly"
    ],
    how_often: "Once daily in morning",
    precautions: ["Start with tiny amount", "May cause stomach irritation", "Avoid if ulcers"],
    benefits: ["Stimulates blood flow", "Clears arteries", "Warms body"],
    related_diseases: ["poor-circulation", "cold-hands-feet", "sluggish-blood-flow"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },

  // Muscle Cramps (Elderly)
  {
    id: "elderly-230",
    problem: "Muscle Cramps (Elderly)",
    title: "Banana-Coconut Electrolyte Smoothie",
    ingredients: [
      { name: "Ripe banana", quantity: "1 medium" },
      { name: "Coconut water", quantity: "1 cup" },
      { name: "Dates", quantity: "2 pitted" },
      { name: "Salt", quantity: "A pinch" }
    ],
    method: [
      "Blend banana with coconut water",
      "Add dates and blend until smooth",
      "Add pinch of salt",
      "Consume fresh"
    ],
    how_often: "Daily or when cramping",
    precautions: ["Diabetics monitor sugar content", "Kidney patients check potassium", "Fresh is best"],
    benefits: ["Replenishes potassium", "Natural electrolytes", "Prevents cramping"],
    related_diseases: ["muscle-cramps", "electrolyte-imbalance", "leg-cramps"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "elderly-231",
    problem: "Muscle Cramps (Elderly)",
    title: "Epsom Salt Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Warm water (bath)", quantity: "Full tub" },
      { name: "Lavender essential oil", quantity: "5 drops (optional)" }
    ],
    method: [
      "Fill tub with warm water",
      "Dissolve epsom salt completely",
      "Add lavender oil if desired",
      "Soak for 20-30 minutes"
    ],
    how_often: "2-3 times per week",
    precautions: ["Not too hot water", "Stay hydrated", "Get up slowly after"],
    benefits: ["Magnesium absorption", "Relaxes muscles", "Reduces cramps"],
    related_diseases: ["muscle-cramps", "body-ache", "tension"],
    difficulty: "Easy",
    preparation_time: "5 minutes + 30 min soak",
    region: "global"
  },

  // Joint Stiffness (Elderly)
  {
    id: "elderly-232",
    problem: "Joint Stiffness (Elderly)",
    title: "Castor Oil Hot Pack",
    ingredients: [
      { name: "Castor oil", quantity: "2 tablespoons" },
      { name: "Flannel cloth", quantity: "1 piece" },
      { name: "Hot water bottle", quantity: "1" }
    ],
    method: [
      "Soak flannel in castor oil",
      "Apply to stiff joint",
      "Cover with plastic wrap",
      "Place hot water bottle on top",
      "Leave for 30-45 minutes"
    ],
    how_often: "Daily or as needed",
    precautions: ["Protect bedding from oil", "Not on open wounds", "Moderate heat only"],
    benefits: ["Deep penetrating relief", "Reduces inflammation", "Improves flexibility"],
    related_diseases: ["joint-stiffness", "arthritis", "mobility-issues"],
    difficulty: "Medium",
    preparation_time: "10 min + 45 min application",
    region: "global"
  },
  {
    id: "elderly-233",
    problem: "Joint Stiffness (Elderly)",
    title: "Warm Ginger Compress",
    ingredients: [
      { name: "Fresh ginger (grated)", quantity: "3 tablespoons" },
      { name: "Hot water", quantity: "2 cups" },
      { name: "Clean towel", quantity: "1" }
    ],
    method: [
      "Steep grated ginger in hot water 10 minutes",
      "Strain and soak towel in ginger water",
      "Wring excess and apply to stiff joints",
      "Repeat when towel cools",
      "Continue for 15-20 minutes"
    ],
    how_often: "1-2 times daily",
    precautions: ["Test temperature first", "Not on sensitive skin", "Avoid if skin irritation"],
    benefits: ["Increases blood flow", "Reduces stiffness", "Warming effect"],
    related_diseases: ["joint-stiffness", "morning-stiffness", "arthritis"],
    difficulty: "Medium",
    preparation_time: "15 min + 20 min application",
    region: "global"
  },

  // Tremors (Elderly)
  {
    id: "elderly-234",
    problem: "Tremors (Elderly)",
    title: "Valerian Root Calming Tea",
    ingredients: [
      { name: "Valerian root (dried)", quantity: "1 teaspoon" },
      { name: "Passionflower", quantity: "½ teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep valerian and passionflower in hot water",
      "Cover and let infuse 15 minutes",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "1-2 times daily",
    precautions: ["May cause drowsiness", "Not with sedatives", "Consult neurologist"],
    benefits: ["Calms nervous system", "Reduces trembling", "Promotes relaxation"],
    related_diseases: ["tremors", "anxiety", "nervous-disorders"],
    difficulty: "Easy",
    preparation_time: "18 minutes",
    region: "global"
  },
  {
    id: "elderly-235",
    problem: "Tremors (Elderly)",
    title: "Omega-3 Flax Pudding",
    ingredients: [
      { name: "Flaxseed (ground)", quantity: "2 tablespoons" },
      { name: "Chia seeds", quantity: "1 tablespoon" },
      { name: "Almond milk", quantity: "1 cup" },
      { name: "Berries", quantity: "¼ cup" }
    ],
    method: [
      "Mix flax and chia with almond milk",
      "Refrigerate overnight",
      "Top with berries in morning",
      "Consume as breakfast"
    ],
    how_often: "Daily",
    precautions: ["Increase water intake", "May cause bloating initially", "Fresh ground flax best"],
    benefits: ["Omega-3 for nerve health", "Reduces inflammation", "Supports brain function"],
    related_diseases: ["tremors", "nerve-health", "inflammation"],
    difficulty: "Easy",
    preparation_time: "Overnight + 2 min",
    region: "global"
  },

  // Balance Issues (Elderly)
  {
    id: "elderly-236",
    problem: "Balance Issues (Elderly)",
    title: "Ginkgo Biloba Circulation Tea",
    ingredients: [
      { name: "Ginkgo biloba leaves (dried)", quantity: "1 teaspoon" },
      { name: "Green tea", quantity: "½ teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Steep ginkgo and green tea in hot water",
      "Cover for 10 minutes",
      "Strain and add honey",
      "Drink warm"
    ],
    how_often: "Once daily",
    precautions: ["May interact with blood thinners", "Consult doctor first", "Not before surgery"],
    benefits: ["Improves inner ear circulation", "Enhances balance", "Supports brain blood flow"],
    related_diseases: ["balance-issues", "vertigo", "dizziness"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global"
  },

  // Hearing Loss (Age-Related)
  {
    id: "elderly-237",
    problem: "Hearing Loss (Elderly)",
    title: "Garlic-Olive Oil Ear Drops",
    ingredients: [
      { name: "Garlic clove", quantity: "1 crushed" },
      { name: "Olive oil", quantity: "2 tablespoons" }
    ],
    method: [
      "Warm olive oil gently",
      "Add crushed garlic and infuse 10 minutes",
      "Strain and cool to body temperature",
      "Put 2-3 drops in ear, lie on side 10 minutes"
    ],
    how_often: "Once daily for a week",
    precautions: ["Never use if ear infection or perforated eardrum", "Test temperature", "Consult ENT first"],
    benefits: ["Improves ear circulation", "Natural antimicrobial", "May improve hearing"],
    related_diseases: ["hearing-loss", "ear-health", "ear-circulation"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "global"
  },

  // Dry Mouth (Elderly)
  {
    id: "elderly-238",
    problem: "Dry Mouth (Elderly)",
    title: "Fennel Seed Mouth Rinse",
    ingredients: [
      { name: "Fennel seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Cardamom", quantity: "2 pods" }
    ],
    method: [
      "Boil fennel and cardamom in water",
      "Simmer for 10 minutes",
      "Strain and cool",
      "Use as mouth rinse and swish for 1 minute"
    ],
    how_often: "3-4 times daily",
    precautions: ["Don't swallow large amounts", "Make fresh daily", "Check for allergies"],
    benefits: ["Stimulates saliva", "Freshens breath", "Soothes dry mouth"],
    related_diseases: ["dry-mouth", "oral-health", "medication-side-effects"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },

  // Loss of Appetite (Elderly)
  {
    id: "elderly-239",
    problem: "Loss of Appetite (Elderly)",
    title: "Ginger-Lime Appetite Stimulant",
    ingredients: [
      { name: "Fresh ginger", quantity: "1 inch grated" },
      { name: "Lime juice", quantity: "1 tablespoon" },
      { name: "Rock salt", quantity: "¼ teaspoon" },
      { name: "Jaggery", quantity: "1 teaspoon" }
    ],
    method: [
      "Mix grated ginger with lime juice",
      "Add rock salt and jaggery",
      "Let sit 10 minutes",
      "Chew this mixture before meals"
    ],
    how_often: "15 minutes before meals",
    precautions: ["Avoid if severe acidity", "Diabetics skip jaggery", "Start with small amount"],
    benefits: ["Stimulates digestive fire", "Increases appetite", "Improves taste"],
    related_diseases: ["loss-of-appetite", "digestive-weakness", "elderly-nutrition"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "elderly-240",
    problem: "Loss of Appetite (Elderly)",
    title: "Hing (Asafoetida) Buttermilk",
    ingredients: [
      { name: "Buttermilk", quantity: "1 cup" },
      { name: "Hing (asafoetida)", quantity: "A pinch" },
      { name: "Cumin powder", quantity: "½ teaspoon" },
      { name: "Salt", quantity: "To taste" }
    ],
    method: [
      "Mix buttermilk until smooth",
      "Add hing, cumin, and salt",
      "Stir well",
      "Drink with or after meals"
    ],
    how_often: "Once daily with lunch",
    precautions: ["Lactose intolerance caution", "Use sparingly if hyperacidity", "Fresh buttermilk preferred"],
    benefits: ["Improves digestion", "Stimulates appetite", "Cooling for body"],
    related_diseases: ["loss-of-appetite", "indigestion", "poor-digestion"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // Immune Weakness (Elderly)
  {
    id: "elderly-241",
    problem: "Weak Immunity (Elderly)",
    title: "Tulsi-Giloy Immunity Kadha",
    ingredients: [
      { name: "Tulsi leaves", quantity: "10-12 leaves" },
      { name: "Giloy stem", quantity: "1 inch piece" },
      { name: "Black pepper", quantity: "2-3 crushed" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: [
      "Boil tulsi, giloy, and pepper in water",
      "Reduce to half",
      "Strain and cool slightly",
      "Add honey and drink warm"
    ],
    how_often: "Once daily",
    precautions: ["Not during pregnancy", "May lower blood sugar", "Consult if on immunosuppressants"],
    benefits: ["Boosts immunity", "Antiviral properties", "Detoxifies body"],
    related_diseases: ["weak-immunity", "frequent-infections", "low-resistance"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "india"
  },
  {
    id: "elderly-242",
    problem: "Weak Immunity (Elderly)",
    title: "Elderberry Immune Syrup",
    ingredients: [
      { name: "Dried elderberries", quantity: "½ cup" },
      { name: "Water", quantity: "2 cups" },
      { name: "Cinnamon stick", quantity: "1" },
      { name: "Honey", quantity: "½ cup" }
    ],
    method: [
      "Simmer elderberries and cinnamon in water for 45 minutes",
      "Mash berries and strain",
      "Cool to lukewarm and add honey",
      "Store in refrigerator up to 2 months"
    ],
    how_often: "1 tablespoon daily",
    precautions: ["Never use raw elderberries", "Diabetics moderate honey", "Autoimmune conditions consult first"],
    benefits: ["Rich in antioxidants", "Fights viral infections", "Strengthens immune response"],
    related_diseases: ["weak-immunity", "cold-prevention", "flu-prevention"],
    difficulty: "Medium",
    preparation_time: "1 hour",
    region: "global"
  },

  // Urinary Incontinence (Elderly)
  {
    id: "elderly-243",
    problem: "Urinary Incontinence (Elderly)",
    title: "Pumpkin Seed Extract",
    ingredients: [
      { name: "Pumpkin seeds (raw)", quantity: "3 tablespoons" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: [
      "Grind pumpkin seeds to powder",
      "Mix 1 tablespoon powder in warm water",
      "Drink daily",
      "Store remaining powder in airtight container"
    ],
    how_often: "Once daily",
    precautions: ["May interact with diuretics", "Start slowly", "Monitor effects"],
    benefits: ["Strengthens bladder muscles", "Reduces urgency", "Natural remedy"],
    related_diseases: ["urinary-incontinence", "bladder-weakness", "overactive-bladder"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },

  // Skin Aging (Elderly)
  {
    id: "elderly-244",
    problem: "Skin Aging (Elderly)",
    title: "Aloe-Vitamin E Night Serum",
    ingredients: [
      { name: "Fresh aloe vera gel", quantity: "2 tablespoons" },
      { name: "Vitamin E capsule", quantity: "2 capsules" },
      { name: "Rose water", quantity: "1 teaspoon" }
    ],
    method: [
      "Extract fresh aloe gel",
      "Pierce vitamin E capsules and squeeze out oil",
      "Mix aloe, vitamin E, and rose water",
      "Apply on face and neck before bed"
    ],
    how_often: "Nightly",
    precautions: ["Patch test first", "Use fresh aloe", "Avoid eye area"],
    benefits: ["Reduces wrinkles", "Hydrates deeply", "Promotes cell renewal"],
    related_diseases: ["skin-aging", "wrinkles", "dry-skin"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "elderly-245",
    problem: "Skin Aging (Elderly)",
    title: "Papaya-Honey Face Mask",
    ingredients: [
      { name: "Ripe papaya", quantity: "¼ cup mashed" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Lemon juice", quantity: "½ teaspoon" }
    ],
    method: [
      "Mash papaya to smooth paste",
      "Mix in honey and lemon juice",
      "Apply to clean face",
      "Leave 15-20 minutes and rinse"
    ],
    how_often: "2-3 times per week",
    precautions: ["Latex allergy - test first", "Avoid sun after lemon", "Rinse thoroughly"],
    benefits: ["Natural enzymes exfoliate", "Brightens skin", "Reduces age spots"],
    related_diseases: ["skin-aging", "age-spots", "dull-skin"],
    difficulty: "Easy",
    preparation_time: "5 min + 20 min application",
    region: "global"
  },

  // Neuropathy (Elderly)
  {
    id: "elderly-246",
    problem: "Neuropathy (Elderly)",
    title: "Evening Primrose Oil Supplement",
    ingredients: [
      { name: "Evening primrose oil", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "To wash down" }
    ],
    method: [
      "Take evening primrose oil directly",
      "Or add to food",
      "Follow with warm water",
      "Best taken with meals"
    ],
    how_often: "Once daily",
    precautions: ["May increase bleeding risk", "Consult if on blood thinners", "Not before surgery"],
    benefits: ["GLA supports nerve function", "Reduces nerve pain", "Anti-inflammatory"],
    related_diseases: ["neuropathy", "nerve-pain", "diabetic-neuropathy"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "global"
  },
  {
    id: "elderly-247",
    problem: "Neuropathy (Elderly)",
    title: "Alpha-Lipoic Acid Rich Spinach Juice",
    ingredients: [
      { name: "Fresh spinach", quantity: "2 cups" },
      { name: "Broccoli", quantity: "½ cup" },
      { name: "Apple", quantity: "1 small" },
      { name: "Water", quantity: "½ cup" }
    ],
    method: [
      "Wash all vegetables and fruit",
      "Blend spinach, broccoli, and apple",
      "Add water to thin",
      "Drink fresh immediately"
    ],
    how_often: "Daily",
    precautions: ["Kidney stone history - moderate spinach", "Thyroid issues - cook broccoli", "Fresh only"],
    benefits: ["Natural alpha-lipoic acid", "Antioxidant protection", "Nerve regeneration support"],
    related_diseases: ["neuropathy", "nerve-damage", "oxidative-stress"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },

  // Dementia Support
  {
    id: "elderly-248",
    problem: "Dementia Support",
    title: "Turmeric-Coconut Brain Balls",
    ingredients: [
      { name: "Desiccated coconut", quantity: "1 cup" },
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "3 tablespoons" },
      { name: "Cardamom powder", quantity: "½ teaspoon" }
    ],
    method: [
      "Mix coconut and turmeric well",
      "Add honey gradually and mix",
      "Add cardamom and form small balls",
      "Refrigerate for 30 minutes before eating"
    ],
    how_often: "1-2 balls daily",
    precautions: ["Diabetics moderate intake", "Store in refrigerator", "Consume within a week"],
    benefits: ["MCTs for brain fuel", "Curcumin neuroprotection", "Easy to eat snack"],
    related_diseases: ["dementia", "cognitive-decline", "brain-health"],
    difficulty: "Easy",
    preparation_time: "15 min + 30 min chill",
    region: "global"
  },
  {
    id: "elderly-249",
    problem: "Dementia Support",
    title: "Lion's Mane Mushroom Tea",
    ingredients: [
      { name: "Lion's mane mushroom powder", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Cinnamon", quantity: "A pinch" }
    ],
    method: [
      "Add mushroom powder to hot water",
      "Stir well until dissolved",
      "Add cinnamon and honey",
      "Drink warm"
    ],
    how_often: "Once daily",
    precautions: ["Start with small dose", "May cause digestive upset", "Quality source important"],
    benefits: ["Promotes nerve growth factor", "Supports memory", "Neuroprotective"],
    related_diseases: ["dementia", "memory-loss", "cognitive-support"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // General Aging Support
  {
    id: "elderly-250",
    problem: "Healthy Aging",
    title: "Amla Rasayana (Rejuvenation)",
    ingredients: [
      { name: "Amla (Indian gooseberry) powder", quantity: "1 teaspoon" },
      { name: "Ghee", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "For washing down" }
    ],
    method: [
      "Mix amla powder with ghee to form paste",
      "Add honey and mix well",
      "Consume and follow with warm water",
      "Take in the morning"
    ],
    how_often: "Daily",
    precautions: ["Sour taste - may not suit all", "Avoid combining honey and ghee in equal parts", "Start slowly"],
    benefits: ["Powerful rejuvenator", "Rich in Vitamin C", "Slows aging process"],
    related_diseases: ["aging", "immunity", "vitality"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // ===== MEN'S HEALTH REMEDIES =====
  // Low Testosterone
  {
    id: "mens-251",
    problem: "Low Testosterone (Men)",
    title: "Ashwagandha Testosterone Booster",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix ashwagandha powder in warm milk", "Add honey and stir well", "Drink before bedtime"],
    how_often: "Daily for 2-3 months",
    precautions: ["Avoid if you have hyperthyroidism", "Consult doctor if on medications"],
    benefits: ["Boosts testosterone naturally", "Reduces cortisol", "Improves vitality"],
    related_diseases: ["testosterone", "vitality", "energy"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-252",
    problem: "Low Testosterone (Men)",
    title: "Shilajit & Milk Tonic",
    ingredients: [
      { name: "Shilajit (purified resin)", quantity: "Pea-sized amount" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Saffron strands", quantity: "2-3" }
    ],
    method: ["Dissolve shilajit in warm milk", "Add saffron strands", "Stir and drink in the morning"],
    how_often: "Daily for 2 months",
    precautions: ["Use only purified shilajit", "Avoid if you have gout"],
    benefits: ["Natural testosterone enhancer", "Boosts energy and stamina", "Rich in fulvic acid"],
    related_diseases: ["testosterone", "stamina", "energy"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-253",
    problem: "Low Testosterone (Men)",
    title: "Tribulus & Gokshura Decoction",
    ingredients: [
      { name: "Gokshura powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Boil gokshura powder in water for 5 minutes", "Strain and cool slightly", "Add honey and drink"],
    how_often: "Twice daily",
    precautions: ["May lower blood sugar", "Consult doctor if on hormonal therapy"],
    benefits: ["Supports hormonal balance", "Improves libido", "Strengthens reproductive system"],
    related_diseases: ["testosterone", "libido", "hormones"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },

  // Hair Loss (Men)
  {
    id: "mens-254",
    problem: "Hair Loss (Men)",
    title: "Bhringraj Oil Scalp Massage",
    ingredients: [
      { name: "Bhringraj oil", quantity: "2 tablespoons" },
      { name: "Coconut oil", quantity: "1 tablespoon" },
      { name: "Amla oil", quantity: "1 tablespoon" }
    ],
    method: ["Mix all oils and warm slightly", "Massage into scalp using fingertips for 10 minutes", "Leave overnight and wash next morning"],
    how_often: "3 times per week",
    precautions: ["Use lukewarm oil, not hot", "Patch test if sensitive scalp"],
    benefits: ["Stimulates hair follicles", "Reduces DHT on scalp", "Promotes new hair growth"],
    related_diseases: ["hair loss", "baldness", "scalp health"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "mens-255",
    problem: "Hair Loss (Men)",
    title: "Onion Juice & Fenugreek Hair Mask",
    ingredients: [
      { name: "Onion juice", quantity: "3 tablespoons" },
      { name: "Fenugreek paste (soaked seeds)", quantity: "2 tablespoons" },
      { name: "Coconut oil", quantity: "1 tablespoon" }
    ],
    method: ["Soak fenugreek seeds overnight and grind to paste", "Mix with fresh onion juice and coconut oil", "Apply to scalp, leave 30-45 minutes", "Wash with mild shampoo"],
    how_often: "Twice per week",
    precautions: ["Strong smell - rinse well", "Avoid if scalp has open wounds"],
    benefits: ["Rich in sulfur for hair regrowth", "Strengthens hair roots", "Reduces hair thinning"],
    related_diseases: ["hair loss", "thinning hair", "baldness"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "global"
  },
  {
    id: "mens-256",
    problem: "Hair Loss (Men)",
    title: "Curry Leaf & Coconut Oil Treatment",
    ingredients: [
      { name: "Fresh curry leaves", quantity: "Handful" },
      { name: "Coconut oil", quantity: "3 tablespoons" },
      { name: "Black pepper", quantity: "2-3 crushed" }
    ],
    method: ["Heat coconut oil with curry leaves until leaves turn black", "Strain and cool slightly", "Massage into scalp for 10 minutes", "Leave for 1 hour before washing"],
    how_often: "3 times per week",
    precautions: ["Let oil cool before applying", "Avoid on irritated scalp"],
    benefits: ["Prevents premature graying", "Strengthens hair follicles", "Provides essential nutrients"],
    related_diseases: ["hair loss", "graying", "weak hair"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },

  // Muscle Building (Men)
  {
    id: "mens-257",
    problem: "Muscle Building (Men)",
    title: "Ashwagandha Protein Shake",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1 teaspoon" },
      { name: "Banana", quantity: "1" },
      { name: "Milk", quantity: "1 glass" },
      { name: "Almonds", quantity: "5-6 soaked" }
    ],
    method: ["Blend all ingredients together", "Drink after workout", "Best consumed within 30 minutes of exercise"],
    how_often: "Daily post-workout",
    precautions: ["Adjust portions for body weight", "Skip if lactose intolerant - use plant milk"],
    benefits: ["Supports muscle recovery", "Natural protein boost", "Increases strength"],
    related_diseases: ["muscle growth", "fitness", "strength"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "mens-258",
    problem: "Muscle Building (Men)",
    title: "Shatavari & Dates Energy Balls",
    ingredients: [
      { name: "Shatavari powder", quantity: "1 teaspoon" },
      { name: "Dates (pitted)", quantity: "5-6" },
      { name: "Almonds", quantity: "10" },
      { name: "Ghee", quantity: "1 teaspoon" }
    ],
    method: ["Grind dates and almonds into a paste", "Mix in shatavari powder and ghee", "Roll into small balls", "Refrigerate and eat 2 daily"],
    how_often: "2 balls daily",
    precautions: ["High calorie - adjust diet accordingly", "Store in refrigerator"],
    benefits: ["Natural muscle fuel", "Rich in protein and healthy fats", "Supports testosterone"],
    related_diseases: ["muscle building", "strength", "nutrition"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "india"
  },

  // Stamina & Endurance
  {
    id: "mens-259",
    problem: "Stamina & Endurance (Men)",
    title: "Safed Musli & Milk Tonic",
    ingredients: [
      { name: "Safed Musli powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Mishri (rock sugar)", quantity: "½ teaspoon" }
    ],
    method: ["Add safed musli to warm milk", "Stir in mishri", "Drink at night before bed"],
    how_often: "Daily for 2 months",
    precautions: ["Not for diabetics without monitoring", "Buy from trusted source"],
    benefits: ["Increases physical stamina", "Natural adaptogen", "Boosts vitality"],
    related_diseases: ["stamina", "endurance", "vitality"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-260",
    problem: "Stamina & Endurance (Men)",
    title: "Beetroot & Pomegranate Pre-Workout Juice",
    ingredients: [
      { name: "Beetroot", quantity: "1 medium" },
      { name: "Pomegranate seeds", quantity: "½ cup" },
      { name: "Ginger", quantity: "½ inch" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: ["Juice beetroot and pomegranate together", "Add grated ginger and lemon", "Drink 30 minutes before workout"],
    how_often: "Before workouts",
    precautions: ["May stain teeth temporarily", "High in natural sugars"],
    benefits: ["Boosts nitric oxide for endurance", "Increases blood flow", "Natural energy booster"],
    related_diseases: ["stamina", "blood flow", "exercise"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global"
  },
  {
    id: "mens-261",
    problem: "Stamina & Endurance (Men)",
    title: "Chyawanprash Morning Booster",
    ingredients: [
      { name: "Chyawanprash", quantity: "1 tablespoon" },
      { name: "Warm milk", quantity: "1 glass" }
    ],
    method: ["Take chyawanprash directly or mix with warm milk", "Consume on empty stomach in morning"],
    how_often: "Daily",
    precautions: ["Contains sugar - diabetics use sugar-free version", "May cause heat in pitta body types"],
    benefits: ["Ancient Ayurvedic rejuvenator", "Boosts overall stamina", "Strengthens immunity"],
    related_diseases: ["stamina", "immunity", "energy"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india"
  },

  // Prostate Health (Men)
  {
    id: "mens-262",
    problem: "Prostate Health (Men)",
    title: "Pumpkin Seed & Turmeric Mix",
    ingredients: [
      { name: "Pumpkin seeds", quantity: "2 tablespoons" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Black pepper", quantity: "Pinch" }
    ],
    method: ["Lightly roast pumpkin seeds", "Sprinkle with turmeric and pepper", "Eat as a daily snack"],
    how_often: "Daily",
    precautions: ["Moderate portions to avoid excess zinc", "Chew well"],
    benefits: ["Rich in zinc for prostate", "Anti-inflammatory", "Supports urinary health"],
    related_diseases: ["prostate", "urinary health", "inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "mens-263",
    problem: "Prostate Health (Men)",
    title: "Varuna Bark Decoction",
    ingredients: [
      { name: "Varuna bark powder", quantity: "1 teaspoon" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Boil varuna bark in water until reduced to 1 cup", "Strain and cool slightly", "Add honey and drink"],
    how_often: "Twice daily",
    precautions: ["Consult doctor if on prostate medication", "Buy from Ayurvedic pharmacy"],
    benefits: ["Traditional prostate remedy", "Reduces inflammation", "Supports urinary flow"],
    related_diseases: ["prostate", "urinary", "BPH"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "india"
  },

  // Erectile Dysfunction
  {
    id: "mens-264",
    problem: "Erectile Dysfunction (Men)",
    title: "Ashwagandha & Saffron Milk",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "1 teaspoon" },
      { name: "Saffron strands", quantity: "4-5" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Soak saffron in warm milk for 5 minutes", "Add ashwagandha powder", "Stir in honey and drink at night"],
    how_often: "Daily for 2-3 months",
    precautions: ["Consult doctor if on ED medication", "Results take time - be patient"],
    benefits: ["Improves blood circulation", "Reduces performance anxiety", "Boosts nitric oxide"],
    related_diseases: ["erectile dysfunction", "circulation", "vitality"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "mens-265",
    problem: "Erectile Dysfunction (Men)",
    title: "Garlic & Honey Vitality Remedy",
    ingredients: [
      { name: "Garlic cloves", quantity: "3-4 raw" },
      { name: "Honey", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "½ cup" }
    ],
    method: ["Crush garlic cloves and let sit 10 minutes", "Mix with honey", "Consume on empty stomach with warm water"],
    how_often: "Daily in morning",
    precautions: ["May cause gastric issues initially", "Avoid if on blood thinners"],
    benefits: ["Improves blood vessel health", "Natural vasodilator", "Boosts cardiovascular function"],
    related_diseases: ["ED", "blood flow", "heart health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Low Sperm Count
  {
    id: "mens-266",
    problem: "Low Sperm Count (Men)",
    title: "Maca Root & Walnut Smoothie",
    ingredients: [
      { name: "Maca root powder", quantity: "1 teaspoon" },
      { name: "Walnuts", quantity: "5-6" },
      { name: "Banana", quantity: "1" },
      { name: "Milk", quantity: "1 glass" }
    ],
    method: ["Blend all ingredients together", "Drink in the morning", "Consistency is key for results"],
    how_often: "Daily for 3 months",
    precautions: ["Start with small amount of maca", "May not suit hormone-sensitive conditions"],
    benefits: ["Rich in omega-3 for sperm quality", "Maca improves sperm motility", "Essential nutrients for fertility"],
    related_diseases: ["fertility", "sperm count", "reproductive health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "mens-267",
    problem: "Low Sperm Count (Men)",
    title: "Kaunch Beej (Mucuna) Milk",
    ingredients: [
      { name: "Kaunch beej powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix kaunch beej powder in warm milk", "Add honey and stir", "Drink before bedtime"],
    how_often: "Daily for 3 months",
    precautions: ["Use processed/purified form only", "Consult Ayurvedic doctor for dosage"],
    benefits: ["Increases sperm count", "Improves sperm motility", "Rich in L-DOPA"],
    related_diseases: ["sperm count", "fertility", "reproductive"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // Belly Fat (Men)
  {
    id: "mens-268",
    problem: "Belly Fat (Men)",
    title: "Jeera (Cumin) Fat Burner Water",
    ingredients: [
      { name: "Cumin seeds", quantity: "2 teaspoons" },
      { name: "Water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "½ teaspoon" }
    ],
    method: ["Soak cumin seeds in water overnight", "Strain in morning and add lemon and honey", "Drink on empty stomach"],
    how_often: "Daily morning",
    precautions: ["Combine with exercise for best results", "Not a magic pill - requires lifestyle changes"],
    benefits: ["Boosts metabolism", "Reduces visceral fat", "Improves digestion"],
    related_diseases: ["belly fat", "weight loss", "metabolism"],
    difficulty: "Easy",
    preparation_time: "5 minutes (overnight soak)",
    region: "india"
  },
  {
    id: "mens-269",
    problem: "Belly Fat (Men)",
    title: "Apple Cider Vinegar Belly Tonic",
    ingredients: [
      { name: "Apple cider vinegar (raw)", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Cinnamon powder", quantity: "¼ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix ACV in warm water", "Add cinnamon and honey", "Drink 30 minutes before meals"],
    how_often: "Twice daily before meals",
    precautions: ["Dilute well to protect tooth enamel", "May cause acidity in some"],
    benefits: ["Reduces belly fat accumulation", "Controls appetite", "Balances blood sugar"],
    related_diseases: ["belly fat", "appetite", "metabolism"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },
  {
    id: "mens-270",
    problem: "Belly Fat (Men)",
    title: "Green Tea & Ginger Fat Cutter",
    ingredients: [
      { name: "Green tea leaves", quantity: "1 teaspoon" },
      { name: "Fresh ginger", quantity: "½ inch grated" },
      { name: "Lemon juice", quantity: "1 teaspoon" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: ["Steep green tea and ginger in hot water for 3-5 minutes", "Strain and add lemon juice", "Drink warm"],
    how_often: "2-3 cups daily",
    precautions: ["Avoid on empty stomach if sensitive", "Limit caffeine intake in evening"],
    benefits: ["Boosts fat oxidation", "Thermogenic effect", "Rich in antioxidants"],
    related_diseases: ["belly fat", "weight management", "metabolism"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Beard Growth
  {
    id: "mens-271",
    problem: "Beard Growth (Men)",
    title: "Amla & Mustard Oil Beard Serum",
    ingredients: [
      { name: "Amla oil", quantity: "1 tablespoon" },
      { name: "Mustard oil", quantity: "1 tablespoon" },
      { name: "Fenugreek seeds", quantity: "1 teaspoon (ground)" }
    ],
    method: ["Mix oils together", "Add ground fenugreek", "Massage into beard area for 5 minutes", "Leave for 30 minutes before washing"],
    how_often: "Daily",
    precautions: ["Patch test for skin sensitivity", "Avoid contact with eyes"],
    benefits: ["Stimulates facial hair follicles", "Provides nutrients for growth", "Conditions existing facial hair"],
    related_diseases: ["beard growth", "facial hair", "grooming"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-272",
    problem: "Beard Growth (Men)",
    title: "Eucalyptus & Coconut Oil Beard Mask",
    ingredients: [
      { name: "Coconut oil", quantity: "2 tablespoons" },
      { name: "Eucalyptus oil", quantity: "3-4 drops" },
      { name: "Castor oil", quantity: "1 tablespoon" }
    ],
    method: ["Mix all oils together", "Apply to beard area and massage gently", "Leave for 20-30 minutes", "Wash with mild face wash"],
    how_often: "3-4 times per week",
    precautions: ["Do not apply pure eucalyptus oil directly", "Stop if irritation occurs"],
    benefits: ["Promotes beard thickness", "Moisturizes skin underneath", "Encourages new growth"],
    related_diseases: ["beard growth", "facial hair", "skin health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Premature Graying (Men)
  {
    id: "mens-273",
    problem: "Premature Graying (Men)",
    title: "Black Sesame & Amla Anti-Gray Tonic",
    ingredients: [
      { name: "Black sesame seeds", quantity: "1 tablespoon" },
      { name: "Amla powder", quantity: "1 teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Roast sesame seeds lightly", "Grind to powder and mix with amla powder", "Take with honey and warm water"],
    how_often: "Daily for 3+ months",
    precautions: ["Results are gradual", "Will not reverse existing gray hair immediately"],
    benefits: ["Rich in melanin-boosting minerals", "Nourishes hair follicles", "Slows graying process"],
    related_diseases: ["graying", "hair pigment", "aging"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "mens-274",
    problem: "Premature Graying (Men)",
    title: "Curry Leaves & Buttermilk Remedy",
    ingredients: [
      { name: "Fresh curry leaves", quantity: "10-12" },
      { name: "Buttermilk", quantity: "1 glass" }
    ],
    method: ["Chew curry leaves in the morning", "Follow with buttermilk", "Can also blend curry leaves into buttermilk"],
    how_often: "Daily",
    precautions: ["Bitter taste - follow with buttermilk", "Consistency required for results"],
    benefits: ["Rich in Vitamin B for pigmentation", "Prevents further graying", "Strengthens hair roots"],
    related_diseases: ["premature graying", "hair health", "pigment"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india"
  },

  // Body Odor (Men)
  {
    id: "mens-275",
    problem: "Body Odor (Men)",
    title: "Neem & Tulsi Detox Bath",
    ingredients: [
      { name: "Neem leaves", quantity: "Handful" },
      { name: "Tulsi (basil) leaves", quantity: "10-12" },
      { name: "Water", quantity: "For bathing" }
    ],
    method: ["Boil neem and tulsi leaves in 2 liters water for 10 minutes", "Add strained water to bath", "Bathe with this infused water"],
    how_often: "Daily or alternate days",
    precautions: ["May dry skin slightly", "Follow with moisturizer"],
    benefits: ["Antibacterial - kills odor-causing bacteria", "Detoxifies skin", "Natural deodorant effect"],
    related_diseases: ["body odor", "hygiene", "skin health"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "mens-276",
    problem: "Body Odor (Men)",
    title: "ACV & Baking Soda Natural Deodorant",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 cup" },
      { name: "Baking soda", quantity: "Pinch" }
    ],
    method: ["Dilute ACV in water", "Add baking soda", "Wipe underarms with cotton soaked in solution", "Let dry naturally"],
    how_often: "After shower daily",
    precautions: ["Do not use on broken or freshly shaved skin", "Patch test first"],
    benefits: ["Neutralizes odor-causing bacteria", "Balances skin pH", "Chemical-free deodorant"],
    related_diseases: ["body odor", "sweat", "bacteria"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },

  // Stress & Burnout (Men)
  {
    id: "mens-277",
    problem: "Stress & Burnout (Men)",
    title: "Brahmi & Shankhpushpi Calm Tea",
    ingredients: [
      { name: "Brahmi powder", quantity: "½ teaspoon" },
      { name: "Shankhpushpi powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix both powders in warm water", "Add honey and stir well", "Sip slowly in the evening"],
    how_often: "Daily in evening",
    precautions: ["May cause drowsiness", "Avoid driving after consumption"],
    benefits: ["Calms nervous system", "Reduces cortisol levels", "Prevents mental burnout"],
    related_diseases: ["stress", "burnout", "anxiety"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-278",
    problem: "Stress & Burnout (Men)",
    title: "Chamomile & Lavender Stress Relief Tea",
    ingredients: [
      { name: "Chamomile tea bag", quantity: "1" },
      { name: "Dried lavender", quantity: "½ teaspoon" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Steep chamomile and lavender in hot water for 5 minutes", "Strain and add honey", "Drink while warm, preferably before bed"],
    how_often: "Daily",
    precautions: ["Avoid if allergic to daisy family flowers", "May interact with sedatives"],
    benefits: ["Reduces work stress", "Promotes relaxation", "Improves sleep quality"],
    related_diseases: ["stress", "burnout", "insomnia"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "mens-279",
    problem: "Stress & Burnout (Men)",
    title: "Jatamansi Root Calming Tonic",
    ingredients: [
      { name: "Jatamansi powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix jatamansi powder in warm milk", "Add honey", "Drink 30 minutes before bedtime"],
    how_often: "Daily at night",
    precautions: ["Consult doctor if on anti-anxiety medication", "Start with smaller dose"],
    benefits: ["Powerful Ayurvedic nervine tonic", "Reduces mental fatigue", "Promotes deep sleep"],
    related_diseases: ["stress", "mental fatigue", "burnout"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // Sleep Quality (Men)
  {
    id: "mens-280",
    problem: "Sleep Quality (Men)",
    title: "Nutmeg & Warm Milk Sleep Aid",
    ingredients: [
      { name: "Nutmeg powder", quantity: "¼ teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Add nutmeg to warm milk", "Stir in honey", "Drink 30 minutes before bedtime"],
    how_often: "Daily at bedtime",
    precautions: ["Do not exceed ¼ teaspoon nutmeg", "May cause drowsiness - don't drive after"],
    benefits: ["Natural sleep inducer", "Calms the mind", "Improves sleep duration"],
    related_diseases: ["insomnia", "sleep quality", "rest"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-281",
    problem: "Sleep Quality (Men)",
    title: "Tart Cherry & Magnesium Sleep Drink",
    ingredients: [
      { name: "Tart cherry juice", quantity: "½ cup" },
      { name: "Magnesium powder", quantity: "200mg" },
      { name: "Water", quantity: "½ cup" }
    ],
    method: ["Mix tart cherry juice with water", "Add magnesium powder and stir", "Drink 1 hour before bed"],
    how_often: "Daily",
    precautions: ["Check magnesium dosage with doctor", "May have laxative effect"],
    benefits: ["Natural melatonin source", "Relaxes muscles", "Improves sleep onset"],
    related_diseases: ["sleep", "insomnia", "muscle recovery"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global"
  },

  // Joint Pain (Men)
  {
    id: "mens-282",
    problem: "Joint Pain (Men)",
    title: "Turmeric & Ginger Anti-Inflammatory Paste",
    ingredients: [
      { name: "Turmeric paste", quantity: "1 teaspoon" },
      { name: "Ginger paste", quantity: "½ teaspoon" },
      { name: "Sesame oil", quantity: "1 tablespoon" }
    ],
    method: ["Mix turmeric and ginger pastes", "Warm sesame oil slightly", "Apply mixture to affected joints", "Massage gently for 10 minutes"],
    how_often: "Twice daily",
    precautions: ["Turmeric stains skin and clothes", "Avoid on broken skin"],
    benefits: ["Reduces joint inflammation", "Improves mobility", "Natural pain relief"],
    related_diseases: ["joint pain", "arthritis", "inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-283",
    problem: "Joint Pain (Men)",
    title: "Epsom Salt & Essential Oil Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 cups" },
      { name: "Eucalyptus oil", quantity: "5 drops" },
      { name: "Warm water", quantity: "Bucket or tub" }
    ],
    method: ["Add epsom salt to warm water", "Add eucalyptus oil drops", "Soak affected area for 20-30 minutes", "Pat dry gently"],
    how_often: "3 times per week",
    precautions: ["Not for open wounds", "May lower blood pressure temporarily"],
    benefits: ["Magnesium absorption through skin", "Reduces swelling", "Relieves stiffness"],
    related_diseases: ["joint pain", "stiffness", "muscle soreness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Heart Health (Men)
  {
    id: "mens-284",
    problem: "Heart Health (Men)",
    title: "Arjuna Bark Heart Tonic",
    ingredients: [
      { name: "Arjuna bark powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Jaggery", quantity: "Small piece" }
    ],
    method: ["Boil arjuna powder in milk for 5 minutes", "Add jaggery and stir", "Drink warm in the morning"],
    how_often: "Daily",
    precautions: ["Consult doctor if on heart medication", "Monitor blood pressure"],
    benefits: ["Strengthens heart muscles", "Reduces cholesterol", "Traditional cardio-protective herb"],
    related_diseases: ["heart disease", "cholesterol", "blood pressure"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india"
  },
  {
    id: "mens-285",
    problem: "Heart Health (Men)",
    title: "Garlic & Flaxseed Heart Protector",
    ingredients: [
      { name: "Garlic cloves", quantity: "2 raw" },
      { name: "Flaxseed powder", quantity: "1 tablespoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: ["Crush garlic and let rest 10 minutes", "Swallow garlic with warm water", "Follow with flaxseed powder mixed in water"],
    how_often: "Daily morning",
    precautions: ["Avoid if on blood thinners", "May cause garlic breath"],
    benefits: ["Reduces LDL cholesterol", "Rich in omega-3", "Maintains artery health"],
    related_diseases: ["heart health", "cholesterol", "arteries"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Liver Detox (Men)
  {
    id: "mens-286",
    problem: "Liver Detox (Men)",
    title: "Kutki & Turmeric Liver Cleanse",
    ingredients: [
      { name: "Kutki powder", quantity: "½ teaspoon" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix kutki and turmeric in warm water", "Add honey and stir", "Drink on empty stomach"],
    how_often: "Daily for 1 month",
    precautions: ["Very bitter taste", "Avoid during pregnancy", "Not for long-term use without guidance"],
    benefits: ["Powerful liver detoxifier", "Reduces fatty liver", "Regenerates liver cells"],
    related_diseases: ["liver detox", "fatty liver", "alcohol damage"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-287",
    problem: "Liver Detox (Men)",
    title: "Lemon & Dandelion Root Detox Tea",
    ingredients: [
      { name: "Dandelion root tea bag", quantity: "1" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Hot water", quantity: "1 cup" }
    ],
    method: ["Steep dandelion root in hot water for 5 minutes", "Add fresh lemon juice", "Drink warm, preferably morning"],
    how_often: "Daily for 2-3 weeks",
    precautions: ["May interact with diuretics", "Avoid if allergic to ragweed"],
    benefits: ["Supports bile production", "Flushes liver toxins", "Rich in antioxidants"],
    related_diseases: ["liver health", "detox", "digestion"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Kidney Health (Men)
  {
    id: "mens-288",
    problem: "Kidney Health (Men)",
    title: "Punarnava & Gokshura Kidney Tonic",
    ingredients: [
      { name: "Punarnava powder", quantity: "1 teaspoon" },
      { name: "Gokshura powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: ["Mix both powders in warm water", "Stir well and drink", "Best taken twice daily"],
    how_often: "Twice daily",
    precautions: ["Consult doctor if on kidney medication", "Increases urination"],
    benefits: ["Rejuvenates kidneys", "Reduces water retention", "Supports urinary tract"],
    related_diseases: ["kidney health", "urinary tract", "water retention"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-289",
    problem: "Kidney Health (Men)",
    title: "Parsley & Lemon Kidney Flush",
    ingredients: [
      { name: "Fresh parsley", quantity: "Handful" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: ["Boil parsley in water for 10 minutes", "Strain and add lemon juice", "Drink warm throughout the day"],
    how_often: "2-3 times per week",
    precautions: ["Avoid if you have kidney stones (oxalate type)", "May increase urination"],
    benefits: ["Natural diuretic", "Flushes kidney toxins", "Rich in vitamins"],
    related_diseases: ["kidney health", "detox", "urinary"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "global"
  },

  // Immunity Boost (Men)
  {
    id: "mens-290",
    problem: "Immunity Boost (Men)",
    title: "Tulsi, Giloy & Black Pepper Kadha",
    ingredients: [
      { name: "Tulsi leaves", quantity: "8-10" },
      { name: "Giloy stem", quantity: "1 inch" },
      { name: "Black pepper", quantity: "3-4 crushed" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: ["Boil all ingredients in water until reduced to 1 cup", "Strain and add honey if needed", "Drink warm"],
    how_often: "Daily",
    precautions: ["Giloy may lower blood sugar", "Reduce dosage if auto-immune condition"],
    benefits: ["Triple immunity booster", "Antiviral properties", "Fights seasonal infections"],
    related_diseases: ["immunity", "infections", "seasonal illness"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india"
  },
  {
    id: "mens-291",
    problem: "Immunity Boost (Men)",
    title: "Elderberry & Vitamin C Syrup",
    ingredients: [
      { name: "Dried elderberries", quantity: "½ cup" },
      { name: "Water", quantity: "2 cups" },
      { name: "Honey", quantity: "1 cup" },
      { name: "Cinnamon stick", quantity: "1" }
    ],
    method: ["Simmer elderberries, cinnamon in water for 45 minutes", "Mash berries and strain", "Cool and add honey", "Store in glass jar in refrigerator"],
    how_often: "1 tablespoon daily",
    precautions: ["Never eat raw elderberries", "Store refrigerated, use within 2 months"],
    benefits: ["Powerful antiviral", "Rich in Vitamin C", "Boosts white blood cell production"],
    related_diseases: ["immunity", "cold", "flu prevention"],
    difficulty: "Medium",
    preparation_time: "1 hour",
    region: "global"
  },

  // Post-Workout Recovery (Men)
  {
    id: "mens-292",
    problem: "Post-Workout Recovery (Men)",
    title: "Turmeric Golden Milk Recovery Drink",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Black pepper", quantity: "Pinch" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Heat milk with turmeric and pepper", "Stir well, do not boil", "Add honey and drink warm post-workout"],
    how_often: "After every workout",
    precautions: ["Can stain teeth - rinse after drinking", "Black pepper enhances absorption 2000%"],
    benefits: ["Reduces muscle inflammation", "Speeds recovery", "Anti-oxidant protection"],
    related_diseases: ["muscle recovery", "inflammation", "fitness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },
  {
    id: "mens-293",
    problem: "Post-Workout Recovery (Men)",
    title: "Coconut Water & Banana Recovery Shake",
    ingredients: [
      { name: "Coconut water", quantity: "1 cup" },
      { name: "Banana", quantity: "1" },
      { name: "Dates", quantity: "2-3" },
      { name: "Chia seeds", quantity: "1 teaspoon" }
    ],
    method: ["Blend all ingredients together", "Drink within 30 minutes of workout", "Add ice if preferred"],
    how_often: "After workouts",
    precautions: ["Contains natural sugars", "Best consumed fresh"],
    benefits: ["Replenishes electrolytes", "Natural carbs for glycogen recovery", "Anti-cramp minerals"],
    related_diseases: ["recovery", "electrolytes", "muscle cramps"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  {
    id: "mens-294",
    problem: "Post-Workout Recovery (Men)",
    title: "Tart Cherry & BCAA Natural Recovery",
    ingredients: [
      { name: "Tart cherry juice", quantity: "1 cup" },
      { name: "Pineapple chunks", quantity: "½ cup" },
      { name: "Ginger", quantity: "½ inch" },
      { name: "Water", quantity: "½ cup" }
    ],
    method: ["Blend all ingredients together", "Drink cold post-workout", "Can add ice"],
    how_often: "After intense workouts",
    precautions: ["High in natural sugars", "May stain clothes"],
    benefits: ["Reduces muscle soreness by 50%", "Natural anti-inflammatory", "Speeds muscle repair"],
    related_diseases: ["DOMS", "muscle soreness", "recovery"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },

  // Weight Management (Men)
  {
    id: "mens-295",
    problem: "Weight Management (Men)",
    title: "Triphala Night Metabolism Booster",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "½ teaspoon" }
    ],
    method: ["Mix triphala in warm water", "Add honey and stir", "Drink before bedtime"],
    how_often: "Daily at bedtime",
    precautions: ["May cause loose stools initially", "Start with ½ teaspoon"],
    benefits: ["Boosts overnight metabolism", "Aids fat digestion", "Detoxifies colon"],
    related_diseases: ["weight management", "metabolism", "digestion"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india"
  },
  {
    id: "mens-296",
    problem: "Weight Management (Men)",
    title: "Chia Seed & Lemon Appetite Controller",
    ingredients: [
      { name: "Chia seeds", quantity: "2 tablespoons" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Water", quantity: "1 glass" },
      { name: "Mint leaves", quantity: "4-5" }
    ],
    method: ["Soak chia seeds in water for 15 minutes", "Add lemon juice and crushed mint", "Drink 30 minutes before meals"],
    how_often: "Before lunch and dinner",
    precautions: ["Drink enough water throughout day", "May cause bloating initially"],
    benefits: ["Creates fullness with fewer calories", "Rich in fiber and omega-3", "Controls portion size naturally"],
    related_diseases: ["weight management", "appetite", "fiber"],
    difficulty: "Easy",
    preparation_time: "20 minutes (soak time)",
    region: "global"
  },
  {
    id: "mens-297",
    problem: "Weight Management (Men)",
    title: "Guggul & Trikatu Fat Metabolism Capsule",
    ingredients: [
      { name: "Guggul powder", quantity: "½ teaspoon" },
      { name: "Trikatu powder", quantity: "¼ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix guggul and trikatu powders", "Add to warm water with honey", "Drink after meals"],
    how_often: "Twice daily after meals",
    precautions: ["Avoid if on thyroid medication", "May cause stomach warmth"],
    benefits: ["Enhances thyroid function for metabolism", "Burns stubborn fat", "Balances lipid levels"],
    related_diseases: ["weight management", "thyroid", "metabolism"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india"
  },

  // Additional men's health
  {
    id: "mens-298",
    problem: "Low Testosterone (Men)",
    title: "Fenugreek & Honey Testosterone Support",
    ingredients: [
      { name: "Fenugreek seeds (soaked)", quantity: "1 tablespoon" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: ["Soak fenugreek seeds overnight", "Eat seeds with honey in the morning", "Follow with warm water"],
    how_often: "Daily morning",
    precautions: ["May lower blood sugar", "Strong taste - follow with water"],
    benefits: ["Clinically shown to boost testosterone", "Improves strength", "Enhances libido"],
    related_diseases: ["testosterone", "strength", "libido"],
    difficulty: "Easy",
    preparation_time: "5 minutes (overnight soak)",
    region: "india"
  },
  {
    id: "mens-299",
    problem: "Muscle Building (Men)",
    title: "Sattu Protein Drink",
    ingredients: [
      { name: "Sattu (roasted gram flour)", quantity: "2 tablespoons" },
      { name: "Water or milk", quantity: "1 glass" },
      { name: "Jaggery", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "½ teaspoon" }
    ],
    method: ["Mix sattu in water or milk", "Add jaggery and lemon juice", "Stir vigorously and drink"],
    how_often: "Daily - especially post workout",
    precautions: ["May cause gas initially", "Start with smaller amount"],
    benefits: ["Cheap plant protein source", "Provides sustained energy", "Cools the body"],
    related_diseases: ["muscle building", "protein", "energy"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india"
  },
  {
    id: "mens-300",
    problem: "Hair Loss (Men)",
    title: "Rosemary & Peppermint Scalp Spray",
    ingredients: [
      { name: "Rosemary essential oil", quantity: "5 drops" },
      { name: "Peppermint essential oil", quantity: "3 drops" },
      { name: "Water", quantity: "100ml" },
      { name: "Aloe vera gel", quantity: "1 tablespoon" }
    ],
    method: ["Mix essential oils with water and aloe vera", "Pour into spray bottle", "Spray on scalp daily and massage", "No need to wash out"],
    how_often: "Daily",
    precautions: ["Do not ingest", "Dilute properly - never use undiluted essential oils"],
    benefits: ["Rosemary shown to match minoxidil in studies", "Stimulates blood flow to scalp", "Strengthens hair follicles"],
    related_diseases: ["hair loss", "male pattern baldness", "scalp health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global"
  },
  // ===== NEW: Teeth Pain, PCOD, and More Common Conditions =====
  {
    id: "common-301",
    problem: "Tooth Pain",
    title: "Clove Oil Pain Relief",
    ingredients: [
      { name: "Clove oil", quantity: "2-3 drops" },
      { name: "Cotton ball", quantity: "1 small piece" }
    ],
    method: ["Soak cotton ball in clove oil", "Place on the affected tooth", "Hold for 10-15 minutes", "Repeat as needed"],
    how_often: "3-4 times daily until pain subsides",
    precautions: ["Do not swallow clove oil", "Can cause burning if applied on gums", "Not a substitute for dental treatment"],
    benefits: ["Eugenol in cloves is a natural anesthetic", "Reduces inflammation", "Kills bacteria in the mouth"],
    related_diseases: ["tooth pain", "dental issues", "oral health"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-302",
    problem: "Tooth Pain",
    title: "Salt Water Gargle for Toothache",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Rock salt", quantity: "1 teaspoon" }
    ],
    method: ["Dissolve salt in warm water", "Gargle and swish around the affected area", "Hold for 30 seconds before spitting", "Repeat 3-4 times"],
    how_often: "Every 2-3 hours",
    precautions: ["Do not swallow salt water", "Use warm, not hot water", "See a dentist if pain persists beyond 2 days"],
    benefits: ["Reduces swelling and inflammation", "Draws out infection", "Natural disinfectant"],
    related_diseases: ["tooth pain", "gum disease", "mouth infection"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-303",
    problem: "Tooth Pain",
    title: "Turmeric & Black Pepper Tooth Paste",
    ingredients: [
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Black pepper powder", quantity: "A pinch" },
      { name: "Coconut oil", quantity: "½ teaspoon" }
    ],
    method: ["Mix turmeric and black pepper with coconut oil", "Apply paste directly on the painful tooth", "Leave for 10 minutes", "Rinse with warm water"],
    how_often: "2-3 times daily",
    precautions: ["Turmeric can stain teeth temporarily", "Avoid if allergic to turmeric"],
    benefits: ["Anti-inflammatory and analgesic", "Curcumin fights infection", "Reduces swelling in gums"],
    related_diseases: ["tooth pain", "gum inflammation", "oral health"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-304",
    problem: "PCOD/PCOS",
    title: "Spearmint Tea for Hormonal Balance",
    ingredients: [
      { name: "Spearmint leaves (fresh or dried)", quantity: "1 tablespoon" },
      { name: "Hot water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon (optional)" }
    ],
    method: ["Steep spearmint leaves in hot water for 5-7 minutes", "Strain and add honey if desired", "Drink warm"],
    how_often: "Twice daily for at least 30 days",
    precautions: ["May interact with hormonal medications", "Consult doctor if pregnant", "Avoid excessive consumption"],
    benefits: ["Clinically shown to reduce androgen levels", "Helps with hirsutism (excess hair growth)", "Supports hormonal balance naturally"],
    related_diseases: ["PCOD", "PCOS", "hormonal imbalance", "hirsutism"],
    difficulty: "Easy",
    preparation_time: "7 minutes"
  },
  {
    id: "common-305",
    problem: "PCOD/PCOS",
    title: "Cinnamon & Fenugreek Hormone Drink",
    ingredients: [
      { name: "Cinnamon stick", quantity: "1 inch piece" },
      { name: "Fenugreek seeds (Methi)", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: ["Soak fenugreek seeds overnight in water", "In the morning, boil water with cinnamon stick for 5 minutes", "Add the soaked fenugreek water", "Strain and drink on empty stomach"],
    how_often: "Daily on empty stomach",
    precautions: ["May lower blood sugar - monitor if diabetic", "Avoid during pregnancy", "May cause stomach upset initially"],
    benefits: ["Cinnamon improves insulin sensitivity", "Fenugreek balances hormones", "Helps regulate menstrual cycle"],
    related_diseases: ["PCOD", "PCOS", "insulin resistance", "irregular periods"],
    difficulty: "Easy",
    preparation_time: "Overnight soaking + 10 minutes"
  },
  {
    id: "common-306",
    problem: "PCOD/PCOS",
    title: "Shatavari & Ashwagandha Milk",
    ingredients: [
      { name: "Shatavari powder", quantity: "½ teaspoon" },
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Warm the milk (do not boil)", "Mix in Shatavari and Ashwagandha powders", "Stir well and add honey", "Drink before bedtime"],
    how_often: "Daily at bedtime for 2-3 months",
    precautions: ["Consult doctor before starting", "Not recommended during pregnancy", "May cause drowsiness"],
    benefits: ["Shatavari balances female hormones", "Ashwagandha reduces cortisol and stress", "Improves fertility and ovarian function"],
    related_diseases: ["PCOD", "PCOS", "infertility", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-307",
    problem: "Gum Disease",
    title: "Oil Pulling with Coconut Oil",
    ingredients: [
      { name: "Virgin coconut oil", quantity: "1 tablespoon" }
    ],
    method: ["Take coconut oil in mouth on empty stomach", "Swish gently for 15-20 minutes", "Spit out into trash (not sink)", "Rinse mouth with warm water", "Brush teeth normally"],
    how_often: "Daily in the morning before eating",
    precautions: ["Do not swallow the oil", "Spit in trash to avoid clogging pipes", "Start with 5 minutes and increase gradually"],
    benefits: ["Reduces harmful bacteria in mouth", "Heals bleeding gums", "Whitens teeth naturally"],
    related_diseases: ["gum disease", "bad breath", "oral health"],
    difficulty: "Easy",
    preparation_time: "20 minutes"
  },
  {
    id: "common-308",
    problem: "Varicose Veins",
    title: "Apple Cider Vinegar Compress",
    ingredients: [
      { name: "Apple cider vinegar", quantity: "2 tablespoons" },
      { name: "Clean cloth", quantity: "1 piece" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: ["Mix ACV with warm water", "Soak cloth in the mixture", "Apply as a compress on affected veins", "Keep for 20-30 minutes with legs elevated"],
    how_often: "Twice daily",
    precautions: ["Do not apply on broken skin", "Dilute properly to avoid irritation", "Consult doctor for severe varicose veins"],
    benefits: ["Improves blood circulation", "Reduces swelling and discomfort", "Strengthens vein walls"],
    related_diseases: ["varicose veins", "poor circulation", "leg pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-309",
    problem: "Tinnitus (Ear Ringing)",
    title: "Sesame Oil Ear Drops",
    ingredients: [
      { name: "Sesame oil (warm)", quantity: "2-3 drops" }
    ],
    method: ["Warm sesame oil slightly (lukewarm, not hot)", "Lie on your side", "Put 2-3 drops in the affected ear", "Stay in position for 5 minutes", "Wipe excess with cotton"],
    how_often: "Once daily before bed",
    precautions: ["Ensure oil is lukewarm, not hot", "Do not use if eardrum is perforated", "Consult ENT specialist if persistent"],
    benefits: ["Vata-pacifying in Ayurveda", "Lubricates and nourishes ear canal", "May reduce ringing sensation"],
    related_diseases: ["tinnitus", "ear ringing", "vata imbalance"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-310",
    problem: "Frozen Shoulder",
    title: "Hot Castor Oil Massage",
    ingredients: [
      { name: "Castor oil", quantity: "2 tablespoons" },
      { name: "Camphor (optional)", quantity: "A small piece" }
    ],
    method: ["Warm castor oil gently", "Add crushed camphor and mix", "Massage into the shoulder in circular motions for 15 minutes", "Apply a hot towel or heating pad over the area", "Rest for 30 minutes"],
    how_often: "Daily before bed",
    precautions: ["Do not massage if there is acute injury", "Ensure oil is warm, not hot", "Consult a physiotherapist for exercises"],
    benefits: ["Castor oil penetrates deep tissue", "Reduces inflammation and stiffness", "Camphor provides warming relief"],
    related_diseases: ["frozen shoulder", "joint stiffness", "shoulder pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-311",
    problem: "Heel Pain (Plantar Fasciitis)",
    title: "Epsom Salt Foot Soak",
    ingredients: [
      { name: "Epsom salt", quantity: "2 tablespoons" },
      { name: "Warm water", quantity: "1 bucket (enough to soak feet)" },
      { name: "Mustard oil", quantity: "1 teaspoon (for after)" }
    ],
    method: ["Dissolve Epsom salt in warm water", "Soak feet for 15-20 minutes", "Dry feet and massage with warm mustard oil", "Focus on the heel area with firm pressure"],
    how_often: "Daily before bed",
    precautions: ["Avoid if you have open wounds on feet", "Water should be warm, not scalding", "Diabetics should check water temperature carefully"],
    benefits: ["Magnesium in Epsom salt reduces inflammation", "Relieves heel pain and stiffness", "Improves blood flow to the area"],
    related_diseases: ["heel pain", "plantar fasciitis", "foot pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-312",
    problem: "Carpal Tunnel Syndrome",
    title: "Warm Turmeric Wrist Compress",
    ingredients: [
      { name: "Turmeric powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "½ cup" },
      { name: "Clean cloth", quantity: "1 piece" }
    ],
    method: ["Mix turmeric with warm water to make paste", "Apply paste on the inner wrist", "Wrap with cloth and leave for 20 minutes", "Rinse and do gentle wrist stretches"],
    how_often: "Twice daily - morning and night",
    precautions: ["Turmeric stains skin and fabric", "Not a substitute for ergonomic corrections", "Consult doctor if numbness worsens"],
    benefits: ["Anti-inflammatory curcumin reduces swelling", "Warmth improves circulation to nerves", "Relieves numbness and tingling"],
    related_diseases: ["carpal tunnel", "wrist pain", "nerve compression"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-313",
    problem: "Hemorrhoids (Piles)",
    title: "Triphala & Aloe Vera Sitz Bath",
    ingredients: [
      { name: "Triphala powder", quantity: "1 tablespoon" },
      { name: "Aloe vera gel", quantity: "2 tablespoons" },
      { name: "Warm water", quantity: "Large tub" }
    ],
    method: ["Boil Triphala in water for 10 minutes and let cool to warm", "Add aloe vera gel to the warm water", "Sit in the bath for 15-20 minutes", "Pat dry gently after"],
    how_often: "Twice daily during flare-ups",
    precautions: ["Ensure water is warm, not hot", "Avoid straining during bowel movements", "Increase fiber and water intake"],
    benefits: ["Triphala reduces inflammation", "Aloe vera soothes and heals", "Warm water improves blood circulation"],
    related_diseases: ["hemorrhoids", "piles", "anal fissure"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "common-314",
    problem: "Sciatica",
    title: "Garlic Milk for Nerve Pain",
    ingredients: [
      { name: "Garlic cloves", quantity: "4 crushed" },
      { name: "Milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Crush garlic and add to milk", "Simmer on low heat for 5 minutes", "Strain and add honey", "Drink warm"],
    how_often: "Once daily in the evening",
    precautions: ["May cause bad breath", "Avoid on empty stomach if you have acidity", "Not for those on blood thinners"],
    benefits: ["Garlic has anti-inflammatory compounds", "Warms the body and improves nerve function", "Reduces sciatic nerve inflammation"],
    related_diseases: ["sciatica", "nerve pain", "lower back pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "common-315",
    problem: "Psoriasis",
    title: "Neem & Turmeric Skin Paste",
    ingredients: [
      { name: "Neem leaves (fresh)", quantity: "10-15 leaves" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Coconut oil", quantity: "1 teaspoon" }
    ],
    method: ["Grind neem leaves into a paste", "Mix with turmeric and coconut oil", "Apply on affected patches", "Leave for 30 minutes and wash with lukewarm water"],
    how_often: "Daily for 4-6 weeks",
    precautions: ["Patch test first", "Turmeric stains skin temporarily", "See dermatologist for severe cases"],
    benefits: ["Neem is anti-bacterial and anti-fungal", "Turmeric reduces scaling and redness", "Coconut oil moisturizes dry patches"],
    related_diseases: ["psoriasis", "skin disorders", "auto-immune skin"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "common-316",
    problem: "Eczema",
    title: "Oatmeal & Ghee Soothing Cream",
    ingredients: [
      { name: "Colloidal oatmeal", quantity: "2 tablespoons" },
      { name: "Pure ghee (clarified butter)", quantity: "1 tablespoon" },
      { name: "Sandalwood powder", quantity: "½ teaspoon" }
    ],
    method: ["Mix oatmeal with ghee to form a smooth paste", "Add sandalwood powder", "Apply on eczema patches", "Leave for 20 minutes and rinse gently"],
    how_often: "Twice daily",
    precautions: ["Stop if irritation increases", "Use pure ghee only", "Consult dermatologist for infected eczema"],
    benefits: ["Oatmeal relieves itching and inflammation", "Ghee deeply moisturizes and heals", "Sandalwood has cooling and antimicrobial properties"],
    related_diseases: ["eczema", "dermatitis", "dry skin"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-317",
    problem: "Thyroid (Hypothyroidism)",
    title: "Ashwagandha & Black Seed Drink",
    ingredients: [
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Black seed (Kalonji) oil", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix Ashwagandha powder in warm water", "Add black seed oil and honey", "Stir well and drink on empty stomach"],
    how_often: "Daily for 2-3 months",
    precautions: ["Do not take with thyroid medication simultaneously - gap of 2 hours", "Consult doctor if on medication", "Not for hyperthyroidism"],
    benefits: ["Ashwagandha supports thyroid hormone production", "Black seed oil boosts metabolism", "Helps with fatigue and weight gain"],
    related_diseases: ["hypothyroidism", "thyroid", "fatigue"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-318",
    problem: "Gallstones",
    title: "Apple & Lemon Gallstone Flush Drink",
    ingredients: [
      { name: "Apple juice (fresh)", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Olive oil", quantity: "1 teaspoon" }
    ],
    method: ["Juice fresh apples or use organic apple juice", "Add lemon juice and olive oil", "Mix well and drink on empty stomach", "Wait 30 minutes before eating"],
    how_often: "Daily for 1 week, then thrice weekly",
    precautions: ["Not a substitute for medical treatment for large stones", "Consult doctor before starting", "Avoid if you have diabetes (high sugar content)"],
    benefits: ["Malic acid in apples softens gallstones", "Lemon juice stimulates bile flow", "Olive oil lubricates bile ducts"],
    related_diseases: ["gallstones", "liver health", "bile duct issues"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-319",
    problem: "Cervical Spondylosis",
    title: "Ajwain & Mustard Oil Neck Massage",
    ingredients: [
      { name: "Ajwain (carom seeds)", quantity: "1 teaspoon" },
      { name: "Mustard oil", quantity: "2 tablespoons" }
    ],
    method: ["Heat mustard oil with ajwain until seeds crackle", "Let oil cool to warm temperature", "Gently massage neck and shoulders for 15 minutes", "Apply a warm towel after massage"],
    how_often: "Daily before bed",
    precautions: ["Do not apply hot oil - wait until lukewarm", "Avoid sudden neck movements", "Consult doctor if numbness occurs in arms"],
    benefits: ["Ajwain has anti-inflammatory thymol", "Mustard oil provides deep tissue warmth", "Improves blood flow to cervical spine"],
    related_diseases: ["cervical spondylosis", "neck pain", "stiffness"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "common-320",
    problem: "Acid Reflux (GERD)",
    title: "Fennel & Cold Milk Remedy",
    ingredients: [
      { name: "Cold milk", quantity: "1 glass" },
      { name: "Fennel seeds (saunf)", quantity: "1 teaspoon (crushed)" }
    ],
    method: ["Crush fennel seeds lightly", "Mix into cold milk", "Sip slowly after meals"],
    how_often: "After meals, especially dinner",
    precautions: ["Avoid if lactose intolerant", "Not for those with severe GERD - see doctor", "Do not lie down immediately after drinking"],
    benefits: ["Cold milk neutralizes stomach acid instantly", "Fennel seeds prevent gas and bloating", "Soothes the esophageal lining"],
    related_diseases: ["acid reflux", "GERD", "heartburn", "acidity"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-321",
    problem: "Irregular Periods",
    title: "Jaggery & Ginger Period Regulator",
    ingredients: [
      { name: "Jaggery (Gur)", quantity: "1 tablespoon" },
      { name: "Ginger juice", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: ["Dissolve jaggery in warm water", "Add fresh ginger juice", "Mix well and drink"],
    how_often: "Daily for 2 months, starting 1 week before expected period",
    precautions: ["Diabetics should avoid due to jaggery", "Stop if bleeding becomes excessive", "Consult gynecologist if irregularity persists"],
    benefits: ["Jaggery is rich in iron, supports healthy periods", "Ginger stimulates uterine contractions", "Warms the body and improves blood flow to uterus"],
    related_diseases: ["irregular periods", "amenorrhea", "menstrual disorders"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-322",
    problem: "Snoring",
    title: "Peppermint & Eucalyptus Steam",
    ingredients: [
      { name: "Peppermint oil", quantity: "3 drops" },
      { name: "Eucalyptus oil", quantity: "3 drops" },
      { name: "Hot water", quantity: "1 bowl" }
    ],
    method: ["Boil water and pour into a bowl", "Add peppermint and eucalyptus oil", "Drape towel over head and inhale steam for 10 minutes", "Do this before bedtime"],
    how_often: "Daily before sleeping",
    precautions: ["Keep safe distance from hot water", "Not for children under 5", "Consult doctor if snoring is due to sleep apnea"],
    benefits: ["Clears nasal passages", "Reduces nasal congestion that causes snoring", "Anti-inflammatory for throat tissues"],
    related_diseases: ["snoring", "nasal congestion", "sleep quality"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-323",
    problem: "Dry Eyes",
    title: "Rose Water Eye Wash",
    ingredients: [
      { name: "Pure rose water", quantity: "2-3 drops per eye" },
      { name: "Clean cotton pads", quantity: "2" }
    ],
    method: ["Ensure rose water is pure and preservative-free", "Soak cotton pads in rose water", "Place on closed eyes for 10 minutes", "Alternatively, put 2 drops directly in each eye"],
    how_often: "2-3 times daily",
    precautions: ["Use only pure, food-grade rose water", "Do not use if eyes are infected", "Consult ophthalmologist for persistent dry eyes"],
    benefits: ["Natural moisturizer for dry eyes", "Reduces eye strain and redness", "Cooling and soothing effect"],
    related_diseases: ["dry eyes", "eye strain", "computer vision syndrome"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-324",
    problem: "Low Blood Pressure",
    title: "Salt, Lemon & Sugar Energy Drink",
    ingredients: [
      { name: "Rock salt", quantity: "½ teaspoon" },
      { name: "Lemon juice", quantity: "1 tablespoon" },
      { name: "Sugar or jaggery", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: ["Mix all ingredients in water", "Stir well until dissolved", "Drink immediately when feeling lightheaded"],
    how_often: "Whenever BP drops, 2-3 times daily",
    precautions: ["Avoid if you have high BP", "Do not overdo salt intake", "See doctor for chronic low BP"],
    benefits: ["Salt increases blood volume and pressure", "Lemon provides electrolytes", "Quick energy from sugar"],
    related_diseases: ["low blood pressure", "hypotension", "dizziness"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-325",
    problem: "Urticaria (Hives)",
    title: "Coriander & Neem Cooling Drink",
    ingredients: [
      { name: "Coriander seeds", quantity: "1 tablespoon" },
      { name: "Neem leaves", quantity: "5-6 leaves" },
      { name: "Water", quantity: "2 glasses" }
    ],
    method: ["Soak coriander seeds overnight in water", "In the morning, boil neem leaves in the water for 5 minutes", "Strain and let cool to room temperature", "Drink on empty stomach"],
    how_often: "Daily for 2 weeks",
    precautions: ["Very bitter taste", "May cause stomach upset in some", "Consult doctor if hives persist or cause breathing difficulty"],
    benefits: ["Coriander is a natural antihistamine", "Neem purifies blood", "Reduces allergic reactions"],
    related_diseases: ["urticaria", "hives", "skin allergy", "itching"],
    difficulty: "Easy",
    preparation_time: "Overnight + 10 minutes"
  },
  {
    id: "common-326",
    problem: "Migraine",
    title: "Ginger & Brahmi Brain Tonic",
    ingredients: [
      { name: "Brahmi powder", quantity: "½ teaspoon" },
      { name: "Fresh ginger", quantity: "1 inch piece" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 cup" }
    ],
    method: ["Grate ginger and steep in warm water for 5 minutes", "Add Brahmi powder and stir", "Add honey and drink warm"],
    how_often: "Twice daily during migraine episodes",
    precautions: ["Brahmi may cause drowsiness", "Consult doctor if migraines are frequent", "Avoid during pregnancy"],
    benefits: ["Ginger blocks prostaglandins that cause pain", "Brahmi calms the nervous system", "Reduces frequency and intensity of migraines"],
    related_diseases: ["migraine", "headache", "neurological"],
    difficulty: "Easy",
    preparation_time: "7 minutes"
  },
  {
    id: "common-327",
    problem: "IBS (Irritable Bowel)",
    title: "Cumin, Fennel & Coriander Tea (CCF Tea)",
    ingredients: [
      { name: "Cumin seeds", quantity: "½ teaspoon" },
      { name: "Fennel seeds", quantity: "½ teaspoon" },
      { name: "Coriander seeds", quantity: "½ teaspoon" },
      { name: "Water", quantity: "2 cups" }
    ],
    method: ["Boil all seeds in water for 5 minutes", "Reduce to 1 cup on low heat", "Strain and sip warm throughout the day"],
    how_often: "Daily - prepare fresh each morning",
    precautions: ["Start with smaller quantities", "Avoid if you have very low BP", "Monitor symptoms and adjust"],
    benefits: ["Classic Ayurvedic digestive tea", "Reduces bloating, gas, and cramping", "Regulates bowel movements"],
    related_diseases: ["IBS", "bloating", "digestive issues", "gas"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "common-328",
    problem: "Vitiligo Support",
    title: "Bakuchi Seed & Coconut Oil Application",
    ingredients: [
      { name: "Bakuchi (Psoralea) seeds", quantity: "1 teaspoon (powdered)" },
      { name: "Coconut oil", quantity: "2 tablespoons" }
    ],
    method: ["Soak Bakuchi seed powder in coconut oil overnight", "Apply the infused oil on white patches", "Expose to mild morning sunlight for 10-15 minutes", "Wash off after 30 minutes"],
    how_often: "Daily for 3-6 months",
    precautions: ["Avoid strong sunlight - use only mild morning sun", "May cause skin irritation - patch test first", "Consult dermatologist alongside"],
    benefits: ["Bakuchi is the primary Ayurvedic herb for vitiligo", "Contains psoralen that stimulates melanin production", "Coconut oil nourishes depigmented skin"],
    related_diseases: ["vitiligo", "skin depigmentation", "leucoderma"],
    difficulty: "Medium",
    preparation_time: "Overnight + 15 minutes"
  },
  {
    id: "common-329",
    problem: "Chronic Fatigue",
    title: "Shilajit & Warm Milk Energy Booster",
    ingredients: [
      { name: "Shilajit resin", quantity: "Pea-sized amount" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Dissolve Shilajit in warm milk (not boiling)", "Add honey and stir", "Drink in the morning"],
    how_often: "Daily for 2-3 months",
    precautions: ["Buy authentic, purified Shilajit only", "Not for children", "Avoid with iron supplements"],
    benefits: ["Contains 85+ minerals in ionic form", "Boosts mitochondrial energy production", "Improves stamina and reduces fatigue"],
    related_diseases: ["chronic fatigue", "low energy", "weakness"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-330",
    problem: "Nerve Weakness",
    title: "Almond & Saffron Brain Tonic",
    ingredients: [
      { name: "Almonds (soaked overnight)", quantity: "7-8" },
      { name: "Saffron strands", quantity: "4-5" },
      { name: "Warm milk", quantity: "1 glass" },
      { name: "Mishri (rock sugar)", quantity: "1 teaspoon" }
    ],
    method: ["Peel and grind soaked almonds into paste", "Soak saffron in warm milk for 5 minutes", "Mix almond paste into saffron milk", "Add mishri and drink warm"],
    how_often: "Daily at bedtime",
    precautions: ["Allergic to nuts? Avoid", "Use genuine saffron only", "High calorie - adjust diet accordingly"],
    benefits: ["Almonds strengthen nerve sheaths", "Saffron improves nerve signal transmission", "Excellent brain and nervous system tonic"],
    related_diseases: ["nerve weakness", "neuropathy", "memory loss"],
    difficulty: "Easy",
    preparation_time: "Overnight + 10 minutes"
  },
  {
    id: "common-331",
    problem: "Sinus Infection",
    title: "Nasya with Anu Taila (Nasal Oil)",
    ingredients: [
      { name: "Anu Taila or sesame oil", quantity: "2 drops per nostril" }
    ],
    method: ["Lie down with head slightly tilted back", "Drop 2 drops of warm oil in each nostril", "Sniff gently so oil reaches sinuses", "Stay lying down for 5 minutes", "Spit out any oil that reaches throat"],
    how_often: "Daily in the morning for chronic sinusitis",
    precautions: ["Oil must be only slightly warm", "Do not do if you have active nosebleed", "Avoid immediately after meals"],
    benefits: ["Classic Ayurvedic treatment for sinus", "Lubricates and cleans nasal passages", "Reduces chronic congestion"],
    related_diseases: ["sinusitis", "nasal congestion", "chronic cold"],
    difficulty: "Medium",
    preparation_time: "5 minutes"
  },
  {
    id: "common-332",
    problem: "Water Retention",
    title: "Parsley & Lemon Detox Water",
    ingredients: [
      { name: "Fresh parsley", quantity: "1 bunch" },
      { name: "Lemon", quantity: "1 sliced" },
      { name: "Water", quantity: "1 liter" }
    ],
    method: ["Wash parsley and chop roughly", "Add parsley and lemon slices to water", "Refrigerate overnight", "Drink throughout the day"],
    how_often: "Daily for 1-2 weeks",
    precautions: ["Avoid if you have kidney disease", "May increase urination", "Consult doctor if swelling is severe"],
    benefits: ["Parsley is a natural diuretic", "Lemon aids kidney function", "Reduces puffiness and water retention"],
    related_diseases: ["water retention", "edema", "bloating"],
    difficulty: "Easy",
    preparation_time: "Overnight"
  },
  {
    id: "common-333",
    problem: "Vertigo",
    title: "Amla & Coriander Seed Remedy",
    ingredients: [
      { name: "Amla powder", quantity: "1 teaspoon" },
      { name: "Coriander seeds", quantity: "1 teaspoon" },
      { name: "Water", quantity: "1 glass" }
    ],
    method: ["Soak coriander seeds and amla powder in water overnight", "Strain in the morning", "Add a pinch of sugar if needed", "Drink on empty stomach"],
    how_often: "Daily for 2-3 weeks",
    precautions: ["Consult doctor if vertigo is severe or sudden", "Not a substitute for medical treatment", "Stay hydrated throughout the day"],
    benefits: ["Amla is rich in Vitamin C - strengthens inner ear", "Coriander seeds balance vata dosha", "Reduces dizziness and nausea associated with vertigo"],
    related_diseases: ["vertigo", "dizziness", "balance issues"],
    difficulty: "Easy",
    preparation_time: "Overnight + 5 minutes"
  },
  {
    id: "common-334",
    problem: "Premature Greying",
    title: "Curry Leaves & Coconut Oil Hair Treatment",
    ingredients: [
      { name: "Curry leaves (fresh)", quantity: "15-20 leaves" },
      { name: "Coconut oil", quantity: "3 tablespoons" }
    ],
    method: ["Heat coconut oil on low flame", "Add curry leaves and cook until they turn black", "Let oil cool and strain", "Apply on scalp and hair", "Leave overnight and wash in morning"],
    how_often: "3 times per week",
    precautions: ["May stain pillow - use old towel", "Be consistent for 3-6 months for results", "Fresh curry leaves work best"],
    benefits: ["Curry leaves restore melanin production", "Coconut oil strengthens hair", "Prevents further greying"],
    related_diseases: ["premature greying", "hair health", "aging"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "common-335",
    problem: "Fatty Liver",
    title: "Kutki & Turmeric Liver Detox",
    ingredients: [
      { name: "Kutki powder", quantity: "¼ teaspoon" },
      { name: "Turmeric powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Lemon juice", quantity: "1 teaspoon" }
    ],
    method: ["Mix Kutki and turmeric in warm water", "Add lemon juice", "Drink on empty stomach"],
    how_often: "Daily for 1-2 months",
    precautions: ["Kutki is very bitter - start with small amount", "Not for pregnant women", "Consult doctor if liver enzymes are elevated"],
    benefits: ["Kutki is the top Ayurvedic liver herb", "Protects liver cells from damage", "Reduces fatty deposits in liver"],
    related_diseases: ["fatty liver", "liver health", "liver detox"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-336",
    problem: "Kidney Health",
    title: "Punarnava & Gokshura Kidney Tonic",
    ingredients: [
      { name: "Punarnava powder", quantity: "½ teaspoon" },
      { name: "Gokshura powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: ["Mix both powders in warm water", "Stir well and drink", "Follow with a glass of plain water"],
    how_often: "Twice daily for 1-2 months",
    precautions: ["Consult doctor if you have kidney disease", "May increase urine output", "Not for pregnant women"],
    benefits: ["Punarnava rejuvenates kidneys", "Gokshura supports kidney filtration", "Helps flush toxins and prevent stones"],
    related_diseases: ["kidney health", "kidney stones", "urinary health"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-337",
    problem: "Hormonal Acne",
    title: "Manjistha & Neem Blood Purifier",
    ingredients: [
      { name: "Manjistha powder", quantity: "½ teaspoon" },
      { name: "Neem powder", quantity: "¼ teaspoon" },
      { name: "Warm water or honey", quantity: "1 glass / 1 teaspoon" }
    ],
    method: ["Mix Manjistha and Neem powder", "Take with warm water or mix with honey", "Drink on empty stomach"],
    how_often: "Daily for 2-3 months",
    precautions: ["Very bitter taste", "Not during pregnancy", "May cause detox symptoms initially"],
    benefits: ["Manjistha is the best Ayurvedic blood purifier", "Neem clears skin infections from within", "Addresses root cause of hormonal acne"],
    related_diseases: ["hormonal acne", "acne", "blood impurity"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-338",
    problem: "Frozen Shoulder",
    title: "Ajwain Potli (Herbal Hot Compress)",
    ingredients: [
      { name: "Ajwain seeds", quantity: "3 tablespoons" },
      { name: "Rock salt", quantity: "2 tablespoons" },
      { name: "Clean cotton cloth", quantity: "1 piece" }
    ],
    method: ["Dry roast ajwain and salt together until hot", "Pour into cotton cloth and make a bundle (potli)", "Press gently on shoulder and neck area", "Keep pressing for 10-15 minutes while warm"],
    how_often: "Twice daily",
    precautions: ["Ensure potli is not too hot to avoid burns", "Do gentle exercises alongside", "Consult physiotherapist for severe cases"],
    benefits: ["Dry heat penetrates deep into frozen tissue", "Ajwain's thymol reduces inflammation", "Salt retains heat longer"],
    related_diseases: ["frozen shoulder", "shoulder stiffness", "muscle pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "common-339",
    problem: "Infertility (Female)",
    title: "Shatavari & Ashoka Bark Decoction",
    ingredients: [
      { name: "Shatavari powder", quantity: "1 teaspoon" },
      { name: "Ashoka bark powder", quantity: "½ teaspoon" },
      { name: "Milk", quantity: "1 glass" }
    ],
    method: ["Add both powders to milk", "Simmer on low heat for 5 minutes", "Strain if needed and drink warm"],
    how_often: "Daily after periods end until next cycle, for 3-6 months",
    precautions: ["Consult Ayurvedic doctor for proper dosage", "Not during active menstruation", "Combine with healthy lifestyle"],
    benefits: ["Shatavari nourishes reproductive tissues", "Ashoka bark supports uterine health", "Improves ovulation and egg quality"],
    related_diseases: ["infertility", "reproductive health", "ovulation issues"],
    difficulty: "Medium",
    preparation_time: "10 minutes"
  },
  {
    id: "common-340",
    problem: "Diabetic Neuropathy",
    title: "Giloy & Ashwagandha Nerve Support",
    ingredients: [
      { name: "Giloy (Guduchi) juice or powder", quantity: "1 tablespoon juice or ½ teaspoon powder" },
      { name: "Ashwagandha powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 glass" }
    ],
    method: ["Mix Giloy and Ashwagandha in warm water", "Stir well and drink", "Take after meals"],
    how_often: "Twice daily for 2-3 months",
    precautions: ["Monitor blood sugar regularly", "Consult doctor if on diabetes medication", "Not during pregnancy"],
    benefits: ["Giloy supports nerve regeneration", "Ashwagandha protects nerve cells", "Helps manage tingling and numbness"],
    related_diseases: ["diabetic neuropathy", "nerve damage", "diabetes"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "common-341",
    problem: "Hiatal Hernia",
    title: "Warm Water & Gentle Breathing Routine",
    ingredients: [
      { name: "Warm water", quantity: "1 glass" },
      { name: "Apple cider vinegar (optional)", quantity: "1 teaspoon" }
    ],
    method: ["Drink a full glass of warm water first thing in the morning", "Stand on your toes and drop heels to floor 10 times (gentle jolt)", "Practice diaphragmatic breathing for 5 minutes", "Add ACV to water if acidity is an issue"],
    how_often: "Daily in the morning",
    precautions: ["Do not do vigorous jumping", "Avoid large meals - eat small, frequent meals", "Sleep with head elevated"],
    benefits: ["Warm water relaxes the stomach muscles", "Gravity technique may help stomach settle", "Diaphragmatic breathing strengthens hiatal area"],
    related_diseases: ["hiatal hernia", "acid reflux", "GERD"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-342",
    problem: "Leucorrhea (White Discharge)",
    title: "Lodhra & Ashoka Bark Kashayam",
    ingredients: [
      { name: "Lodhra bark powder", quantity: "½ teaspoon" },
      { name: "Ashoka bark powder", quantity: "½ teaspoon" },
      { name: "Water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Boil both powders in water for 10 minutes", "Reduce to half quantity", "Strain, add honey when lukewarm", "Drink twice daily"],
    how_often: "Twice daily for 1 month",
    precautions: ["Consult gynecologist if discharge has odor or color", "Maintain proper hygiene", "Not during pregnancy"],
    benefits: ["Lodhra is specific for leucorrhea in Ayurveda", "Ashoka bark tones uterine muscles", "Reduces excessive discharge"],
    related_diseases: ["leucorrhea", "white discharge", "vaginal health"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "common-343",
    problem: "Gastric Ulcer",
    title: "Mulethi (Licorice) & Banana Remedy",
    ingredients: [
      { name: "Mulethi powder (Licorice)", quantity: "½ teaspoon" },
      { name: "Ripe banana", quantity: "1" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mash the ripe banana", "Mix in Mulethi powder and honey", "Eat on empty stomach"],
    how_often: "Twice daily - morning and before bed",
    precautions: ["Avoid if you have high blood pressure (licorice can raise BP)", "Not for prolonged use beyond 4 weeks", "Consult doctor for active ulcers"],
    benefits: ["Mulethi coats and protects stomach lining", "Banana neutralizes excess acid", "Promotes healing of ulcer tissue"],
    related_diseases: ["gastric ulcer", "stomach ulcer", "acidity"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-344",
    problem: "Night Blindness",
    title: "Triphala Eye Wash",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Clean water", quantity: "1 cup" }
    ],
    method: ["Soak Triphala powder in water overnight", "Strain through a clean cloth in the morning (ensure no particles remain)", "Use as an eye wash - splash gently on open eyes", "Blink several times during the wash"],
    how_often: "Daily in the morning",
    precautions: ["Strain thoroughly - no particles should enter eyes", "Use clean, filtered water only", "Do not use if eyes are infected"],
    benefits: ["Triphala is the classic Ayurvedic eye tonic", "Rich in Vitamin C and antioxidants", "Strengthens eye muscles and improves night vision"],
    related_diseases: ["night blindness", "weak eyesight", "eye health"],
    difficulty: "Easy",
    preparation_time: "Overnight + 5 minutes"
  },
  {
    id: "common-345",
    problem: "Mouth Ulcers",
    title: "Honey & Turmeric Mouth Ulcer Paste",
    ingredients: [
      { name: "Raw honey", quantity: "1 teaspoon" },
      { name: "Turmeric powder", quantity: "A pinch" },
      { name: "Ghee", quantity: "½ teaspoon" }
    ],
    method: ["Mix honey, turmeric, and ghee", "Apply directly on mouth ulcers", "Leave for 10 minutes (do not eat or drink)", "Repeat 3-4 times daily"],
    how_often: "3-4 times daily until healed",
    precautions: ["Do not swallow immediately - let it work on the ulcer", "Avoid spicy food during healing", "See doctor if ulcers persist beyond 2 weeks"],
    benefits: ["Honey is naturally antibacterial", "Turmeric heals wounds rapidly", "Ghee provides a protective coating"],
    related_diseases: ["mouth ulcers", "canker sores", "oral health"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-346",
    problem: "Bloating",
    title: "Hing (Asafoetida) & Warm Water",
    ingredients: [
      { name: "Hing (asafoetida)", quantity: "A pinch" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Ajwain seeds", quantity: "½ teaspoon" }
    ],
    method: ["Dissolve hing in warm water", "Add lightly crushed ajwain seeds", "Drink immediately after meals"],
    how_often: "After heavy meals or when bloated",
    precautions: ["Very strong flavor and smell", "Use only a tiny pinch", "Avoid during pregnancy in large amounts"],
    benefits: ["Hing is the most powerful carminative in Ayurveda", "Expels gas within minutes", "Ajwain aids rapid digestion"],
    related_diseases: ["bloating", "gas", "indigestion"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-347",
    problem: "Tooth Sensitivity",
    title: "Mustard Oil & Salt Gum Massage",
    ingredients: [
      { name: "Mustard oil", quantity: "½ teaspoon" },
      { name: "Rock salt (finely ground)", quantity: "A pinch" }
    ],
    method: ["Mix mustard oil with fine rock salt", "Massage gently on gums and sensitive teeth with finger", "Leave for 5 minutes", "Rinse with warm water"],
    how_often: "Twice daily - morning and night",
    precautions: ["Be gentle - do not press hard on sensitive areas", "Spit out after massaging", "See dentist for severe sensitivity"],
    benefits: ["Traditional Indian remedy for strong teeth", "Mustard oil strengthens gums", "Salt kills bacteria and reduces inflammation"],
    related_diseases: ["tooth sensitivity", "gum disease", "dental health"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "common-348",
    problem: "Anemia",
    title: "Beetroot, Amla & Jaggery Iron Booster",
    ingredients: [
      { name: "Beetroot", quantity: "1 medium (juiced)" },
      { name: "Amla (Indian gooseberry) juice", quantity: "2 tablespoons" },
      { name: "Jaggery", quantity: "1 teaspoon (grated)" }
    ],
    method: ["Extract fresh beetroot juice", "Mix with amla juice", "Dissolve jaggery in the mixture", "Drink immediately to preserve nutrients"],
    how_often: "Daily on empty stomach for 2-3 months",
    precautions: ["May turn urine/stool reddish - this is normal", "Diabetics should limit jaggery", "Consult doctor for severe anemia"],
    benefits: ["Beetroot is rich in iron and folate", "Amla's Vitamin C enhances iron absorption", "Jaggery adds iron and sweetness"],
    related_diseases: ["anemia", "iron deficiency", "fatigue", "weakness"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "common-349",
    problem: "Anxiety",
    title: "Jatamansi & Brahmi Calming Tea",
    ingredients: [
      { name: "Jatamansi powder", quantity: "¼ teaspoon" },
      { name: "Brahmi powder", quantity: "½ teaspoon" },
      { name: "Warm water", quantity: "1 cup" },
      { name: "Honey", quantity: "1 teaspoon" }
    ],
    method: ["Mix Jatamansi and Brahmi in warm water", "Let steep for 5 minutes", "Add honey when lukewarm", "Drink in the evening"],
    how_often: "Daily in the evening for 1-2 months",
    precautions: ["May cause drowsiness", "Do not drive after taking", "Consult doctor if on anti-anxiety medication"],
    benefits: ["Jatamansi is a powerful Ayurvedic anxiolytic", "Brahmi calms racing thoughts", "Improves sleep quality naturally"],
    related_diseases: ["anxiety", "stress", "insomnia", "panic attacks"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "common-350",
    problem: "Obesity",
    title: "Triphala & Honey Weight Loss Drink",
    ingredients: [
      { name: "Triphala powder", quantity: "1 teaspoon" },
      { name: "Warm water", quantity: "1 glass" },
      { name: "Honey", quantity: "1 teaspoon" },
      { name: "Lemon juice", quantity: "½ teaspoon" }
    ],
    method: ["Mix Triphala powder in warm water", "Add honey and lemon juice", "Stir well and drink before bed"],
    how_often: "Daily before bed for 3 months",
    precautions: ["May cause loose stools initially", "Reduce dose if stomach is upset", "Combine with regular exercise"],
    benefits: ["Triphala boosts metabolism and detoxifies", "Removes ama (toxins) that cause weight gain", "Improves digestion and nutrient absorption"],
    related_diseases: ["obesity", "weight loss", "metabolism"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  // ===== SPORTS & FITNESS REMEDIES (50) =====
  {
    id: "sports-351",
    problem: "Muscle Strain (Sports)",
    title: "Turmeric & Ginger Anti-Inflammatory Paste",
    ingredients: [{ name: "Turmeric powder", quantity: "2 teaspoons" }, { name: "Ginger paste", quantity: "1 teaspoon" }, { name: "Sesame oil", quantity: "1 tablespoon" }],
    method: ["Mix turmeric and ginger paste with warm sesame oil", "Apply on strained muscle area", "Cover with warm cloth for 30 minutes"],
    how_often: "2-3 times daily for 5-7 days",
    precautions: ["Avoid on open wounds", "May stain clothes", "Discontinue if irritation occurs"],
    benefits: ["Turmeric reduces inflammation naturally", "Ginger improves blood flow to injured area", "Sesame oil penetrates deep into tissues"],
    related_diseases: ["muscle strain", "sports injury", "inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-352",
    problem: "Ankle Sprain (Sports)",
    title: "Epsom Salt & Turmeric Soak",
    ingredients: [{ name: "Epsom salt", quantity: "2 tablespoons" }, { name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Warm water", quantity: "1 bucket" }],
    method: ["Dissolve Epsom salt and turmeric in warm water", "Soak affected ankle for 20 minutes", "Gently massage after soaking"],
    how_often: "Twice daily for 1 week",
    precautions: ["Water should be warm not hot", "Avoid if skin is broken", "Elevate foot after soaking"],
    benefits: ["Epsom salt reduces swelling", "Turmeric fights inflammation", "Warm water improves circulation"],
    related_diseases: ["ankle sprain", "swelling", "sports injury"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-353",
    problem: "Knee Injury (Sports)",
    title: "Ashwagandha & Castor Oil Knee Pack",
    ingredients: [{ name: "Ashwagandha powder", quantity: "1 tablespoon" }, { name: "Castor oil", quantity: "2 tablespoons" }, { name: "Camphor", quantity: "Small piece" }],
    method: ["Warm castor oil and dissolve camphor in it", "Mix in ashwagandha powder to form paste", "Apply on knee and wrap with cotton cloth overnight"],
    how_often: "Daily at night for 2 weeks",
    precautions: ["Do patch test first", "Avoid if allergic to camphor", "Consult doctor for severe injuries"],
    benefits: ["Ashwagandha strengthens joint tissues", "Castor oil reduces pain and stiffness", "Camphor provides cooling relief"],
    related_diseases: ["knee injury", "joint pain", "sports injury"],
    difficulty: "Medium",
    preparation_time: "10 minutes"
  },
  {
    id: "sports-354",
    problem: "Shin Splints (Sports)",
    title: "Ice & Eucalyptus Oil Therapy",
    ingredients: [{ name: "Eucalyptus oil", quantity: "5 drops" }, { name: "Coconut oil", quantity: "1 tablespoon" }, { name: "Ice pack", quantity: "1" }],
    method: ["Apply ice pack on shin for 15 minutes", "Mix eucalyptus oil with coconut oil", "Massage the oil blend on shin area after icing"],
    how_often: "After every workout for 1-2 weeks",
    precautions: ["Don't apply ice directly on skin", "Rest from high-impact activities", "See doctor if pain persists"],
    benefits: ["Ice reduces acute inflammation", "Eucalyptus oil relieves pain naturally", "Coconut oil moisturizes and heals"],
    related_diseases: ["shin splints", "leg pain", "running injury"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-355",
    problem: "Tennis Elbow (Sports)",
    title: "Nirgundi & Sesame Oil Elbow Massage",
    ingredients: [{ name: "Nirgundi oil", quantity: "1 tablespoon" }, { name: "Sesame oil", quantity: "1 tablespoon" }, { name: "Ajwain (Carom seeds)", quantity: "1 teaspoon" }],
    method: ["Warm oils together with crushed ajwain", "Strain and apply warm oil on elbow", "Massage gently in circular motion for 10 minutes"],
    how_often: "Twice daily for 2-3 weeks",
    precautions: ["Don't massage too hard", "Avoid strenuous activity during healing", "Use warm oil only"],
    benefits: ["Nirgundi is a potent anti-inflammatory herb", "Sesame oil strengthens tendons", "Ajwain provides pain relief"],
    related_diseases: ["tennis elbow", "elbow pain", "tendinitis"],
    difficulty: "Medium",
    preparation_time: "10 minutes"
  },
  {
    id: "sports-356",
    problem: "Runner's Knee (Sports)",
    title: "Shallaki & Turmeric Joint Support",
    ingredients: [{ name: "Shallaki (Boswellia) powder", quantity: "1 teaspoon" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 glass" }],
    method: ["Add Shallaki and turmeric to warm milk", "Mix well and drink", "Take regularly for joint support"],
    how_often: "Daily before bed for 1 month",
    precautions: ["May take 2-3 weeks to show results", "Not a substitute for medical treatment", "Combine with knee-strengthening exercises"],
    benefits: ["Shallaki reduces joint inflammation", "Turmeric supports cartilage health", "Milk provides calcium for bones"],
    related_diseases: ["runner's knee", "knee pain", "patellofemoral syndrome"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "sports-357",
    problem: "Hamstring Pull (Sports)",
    title: "Mustard Oil & Garlic Warm Compress",
    ingredients: [{ name: "Mustard oil", quantity: "2 tablespoons" }, { name: "Garlic cloves", quantity: "4 crushed" }, { name: "Fenugreek seeds", quantity: "1 teaspoon" }],
    method: ["Heat mustard oil with crushed garlic and fenugreek", "Let cool to warm temperature and strain", "Apply on hamstring and cover with warm cloth"],
    how_often: "Twice daily for 1 week",
    precautions: ["Test temperature before applying", "Avoid deep massage on acute injury", "Rest the leg as much as possible"],
    benefits: ["Mustard oil generates heat and improves blood flow", "Garlic has natural pain-relieving properties", "Fenugreek reduces inflammation"],
    related_diseases: ["hamstring pull", "muscle tear", "leg injury"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "sports-358",
    problem: "Shoulder Injury (Sports)",
    title: "Mahanarayan Oil Shoulder Therapy",
    ingredients: [{ name: "Mahanarayan oil", quantity: "2 tablespoons" }, { name: "Rock salt", quantity: "½ teaspoon" }, { name: "Warm water compress", quantity: "1" }],
    method: ["Warm Mahanarayan oil slightly", "Mix in rock salt and massage on shoulder for 15 minutes", "Apply warm compress afterwards for 10 minutes"],
    how_often: "Daily for 2-3 weeks",
    precautions: ["Avoid heavy lifting during recovery", "Don't overheat the oil", "Consult a doctor for rotator cuff injuries"],
    benefits: ["Mahanarayan oil is a classical Ayurvedic pain remedy", "Rock salt draws out inflammation", "Warm compress relaxes tight muscles"],
    related_diseases: ["shoulder injury", "rotator cuff", "sports injury"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-359",
    problem: "Pre-Workout Energy",
    title: "Ashwagandha & Dates Energy Shake",
    ingredients: [{ name: "Ashwagandha powder", quantity: "1 teaspoon" }, { name: "Dates", quantity: "3 pitted" }, { name: "Banana", quantity: "1" }, { name: "Milk/Almond milk", quantity: "1 glass" }],
    method: ["Blend all ingredients together until smooth", "Drink 30-45 minutes before workout", "Can add honey for extra sweetness"],
    how_often: "Before every workout",
    precautions: ["Don't take on empty stomach if acid-sensitive", "Reduce quantity if bloating occurs", "Avoid late evening if it affects sleep"],
    benefits: ["Ashwagandha boosts stamina and endurance", "Dates provide natural sugars for energy", "Banana provides potassium to prevent cramps"],
    related_diseases: ["low energy", "workout preparation", "stamina"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-360",
    problem: "Pre-Workout Energy",
    title: "Beetroot & Ginger Pre-Workout Juice",
    ingredients: [{ name: "Beetroot", quantity: "1 medium" }, { name: "Ginger", quantity: "1 inch piece" }, { name: "Lemon juice", quantity: "1 tablespoon" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Juice the beetroot and ginger", "Add lemon juice and honey", "Drink 1 hour before exercise"],
    how_often: "Before intense workouts",
    precautions: ["May color urine/stool red (normal)", "Reduce ginger if stomach is sensitive", "Avoid if you have low blood pressure"],
    benefits: ["Beetroot boosts nitric oxide for better blood flow", "Ginger reduces exercise-induced inflammation", "Natural energy without caffeine crash"],
    related_diseases: ["low energy", "pre-workout", "athletic performance"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "sports-361",
    problem: "Post-Workout Recovery",
    title: "Turmeric Golden Milk Recovery Drink",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Black pepper", quantity: "¼ teaspoon" }, { name: "Milk", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Warm milk and add turmeric and black pepper", "Stir well and add honey", "Drink within 30 minutes after workout"],
    how_often: "After every workout",
    precautions: ["Black pepper enhances turmeric absorption", "Use warm not boiling milk", "Can use plant-based milk"],
    benefits: ["Turmeric reduces post-workout inflammation", "Milk provides protein for muscle repair", "Honey replenishes glycogen stores"],
    related_diseases: ["muscle recovery", "inflammation", "post-workout"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-362",
    problem: "Post-Workout Recovery",
    title: "Coconut Water & Chia Seed Recovery",
    ingredients: [{ name: "Coconut water", quantity: "1 glass" }, { name: "Chia seeds", quantity: "1 tablespoon" }, { name: "Lemon juice", quantity: "1 teaspoon" }, { name: "Pink salt", quantity: "1 pinch" }],
    method: ["Soak chia seeds in coconut water for 15 minutes", "Add lemon juice and pink salt", "Drink immediately after workout"],
    how_often: "After every workout",
    precautions: ["Let chia seeds swell properly", "Don't drink too cold", "Increase water intake throughout the day"],
    benefits: ["Coconut water replenishes electrolytes naturally", "Chia seeds provide omega-3 for recovery", "Pink salt restores mineral balance"],
    related_diseases: ["dehydration", "electrolyte imbalance", "recovery"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "sports-363",
    problem: "Muscle Soreness (DOMS)",
    title: "Ajwain & Mustard Oil Pain Relief",
    ingredients: [{ name: "Ajwain (Carom seeds)", quantity: "2 teaspoons" }, { name: "Mustard oil", quantity: "3 tablespoons" }, { name: "Garlic", quantity: "2 cloves" }],
    method: ["Heat mustard oil with ajwain and crushed garlic", "Let cool to warm temperature", "Massage on sore muscles for 15 minutes"],
    how_often: "Twice daily until soreness subsides",
    precautions: ["Test oil temperature before applying", "Avoid on broken skin", "Take a warm shower after massage"],
    benefits: ["Ajwain has analgesic properties", "Mustard oil improves blood circulation", "Garlic reduces muscle inflammation"],
    related_diseases: ["DOMS", "muscle soreness", "workout recovery"],
    difficulty: "Easy",
    preparation_time: "10 minutes"
  },
  {
    id: "sports-364",
    problem: "Muscle Soreness (DOMS)",
    title: "Epsom Salt & Lavender Bath Soak",
    ingredients: [{ name: "Epsom salt", quantity: "2 cups" }, { name: "Baking soda", quantity: "1 tablespoon" }, { name: "Lavender essential oil", quantity: "5 drops" }],
    method: ["Fill bathtub with warm water", "Add Epsom salt, baking soda, and lavender oil", "Soak for 20-30 minutes after intense workout"],
    how_often: "After intense training sessions",
    precautions: ["Don't use extremely hot water", "Hydrate well before and after", "Avoid if you have heart conditions"],
    benefits: ["Magnesium from Epsom salt relaxes muscles", "Baking soda helps flush lactic acid", "Lavender oil calms nervous system"],
    related_diseases: ["muscle soreness", "recovery", "relaxation"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-365",
    problem: "Cramps During Exercise",
    title: "Banana & Black Salt Anti-Cramp Drink",
    ingredients: [{ name: "Banana", quantity: "1 ripe" }, { name: "Black salt", quantity: "¼ teaspoon" }, { name: "Coconut water", quantity: "1 glass" }, { name: "Lemon juice", quantity: "1 teaspoon" }],
    method: ["Blend banana with coconut water", "Add black salt and lemon juice", "Drink 30 minutes before exercise"],
    how_often: "Before workouts prone to cramping",
    precautions: ["Stay hydrated throughout workout", "Avoid overexertion", "Stretch properly before exercise"],
    benefits: ["Banana provides potassium to prevent cramps", "Black salt restores electrolyte balance", "Coconut water hydrates deeply"],
    related_diseases: ["muscle cramps", "electrolyte imbalance", "exercise"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-366",
    problem: "Cramps During Exercise",
    title: "Pickle Juice & Apple Cider Vinegar Shot",
    ingredients: [{ name: "Pickle juice (brine)", quantity: "2 tablespoons" }, { name: "Apple cider vinegar", quantity: "1 tablespoon" }, { name: "Water", quantity: "½ glass" }],
    method: ["Mix pickle juice and ACV in water", "Take as a quick shot during cramps", "Can also sip slowly before workout"],
    how_often: "As needed during cramps",
    precautions: ["High sodium - don't overuse", "Not for those with high blood pressure", "Dilute if taste is too strong"],
    benefits: ["Pickle juice rapidly relieves cramps", "ACV balances pH levels", "Sodium triggers muscle relaxation reflex"],
    related_diseases: ["muscle cramps", "exercise", "electrolytes"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "sports-367",
    problem: "Sports Hydration",
    title: "Homemade Ayurvedic Electrolyte Drink",
    ingredients: [{ name: "Coconut water", quantity: "2 glasses" }, { name: "Lemon juice", quantity: "2 tablespoons" }, { name: "Honey", quantity: "1 tablespoon" }, { name: "Himalayan pink salt", quantity: "¼ teaspoon" }],
    method: ["Mix all ingredients together", "Stir well until salt and honey dissolve", "Sip throughout workout"],
    how_often: "During and after every workout",
    precautions: ["Adjust sweetness to taste", "Don't use cold - use room temperature", "Increase quantity in hot weather"],
    benefits: ["Natural alternative to commercial sports drinks", "Coconut water provides 5 key electrolytes", "No artificial colors or preservatives"],
    related_diseases: ["dehydration", "electrolyte loss", "sports performance"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "sports-368",
    problem: "Sports Hydration",
    title: "Sattu (Roasted Gram) Energy Drink",
    ingredients: [{ name: "Sattu flour", quantity: "2 tablespoons" }, { name: "Lemon juice", quantity: "1 tablespoon" }, { name: "Black salt", quantity: "¼ teaspoon" }, { name: "Water", quantity: "1 glass" }],
    method: ["Mix sattu flour in cold water", "Add lemon juice and black salt", "Stir well and drink before or during workout"],
    how_often: "Before long workouts or matches",
    precautions: ["Use fresh sattu for best nutrition", "May feel heavy if taken immediately before exercise", "Drink 30 minutes before workout"],
    benefits: ["Sattu provides sustained energy release", "High protein content supports muscles", "Traditional Indian athlete's drink"],
    related_diseases: ["energy", "sports nutrition", "hydration"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "sports-369",
    problem: "Ligament Support",
    title: "Collagen-Boosting Bone Broth",
    ingredients: [{ name: "Chicken/Goat bones", quantity: "500g" }, { name: "Turmeric", quantity: "1 teaspoon" }, { name: "Garlic", quantity: "4 cloves" }, { name: "Ginger", quantity: "1 inch" }],
    method: ["Slow cook bones with spices for 6-8 hours", "Strain and collect broth", "Drink 1 cup daily warm"],
    how_often: "Daily for 4-6 weeks",
    precautions: ["Not suitable for vegetarians", "Skim excess fat", "Store in refrigerator for up to 3 days"],
    benefits: ["Bone broth provides natural collagen", "Strengthens ligaments and tendons", "Turmeric adds anti-inflammatory benefits"],
    related_diseases: ["ligament injury", "joint health", "connective tissue"],
    difficulty: "Medium",
    preparation_time: "6-8 hours"
  },
  {
    id: "sports-370",
    problem: "Ligament Support",
    title: "Vitamin C Rich Amla & Flaxseed Smoothie",
    ingredients: [{ name: "Amla (Indian Gooseberry) juice", quantity: "2 tablespoons" }, { name: "Flaxseed powder", quantity: "1 tablespoon" }, { name: "Banana", quantity: "1" }, { name: "Yogurt", quantity: "½ cup" }],
    method: ["Blend all ingredients together", "Drink fresh in the morning", "Can add honey for taste"],
    how_often: "Daily for 6-8 weeks",
    precautions: ["Amla may cause acidity in some", "Use fresh amla juice when possible", "Avoid if lactose intolerant (use plant yogurt)"],
    benefits: ["Amla is richest natural source of Vitamin C", "Vitamin C is essential for collagen synthesis", "Flaxseed provides omega-3 for tissue repair"],
    related_diseases: ["ligament health", "collagen support", "tissue repair"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-371",
    problem: "Joint Flexibility (Sports)",
    title: "Sesame & Ginger Flexibility Oil",
    ingredients: [{ name: "Sesame oil", quantity: "3 tablespoons" }, { name: "Fresh ginger juice", quantity: "1 tablespoon" }, { name: "Eucalyptus oil", quantity: "3 drops" }],
    method: ["Warm sesame oil gently", "Add ginger juice and eucalyptus oil", "Massage joints before stretching or yoga"],
    how_often: "Before every workout/stretch session",
    precautions: ["Don't overheat the oil", "Massage gently on joints", "Wash off after workout"],
    benefits: ["Sesame oil lubricates joints naturally", "Ginger improves flexibility", "Eucalyptus provides cooling relief"],
    related_diseases: ["joint stiffness", "flexibility", "mobility"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-372",
    problem: "Joint Flexibility (Sports)",
    title: "Flaxseed & Turmeric Morning Drink",
    ingredients: [{ name: "Flaxseed powder", quantity: "1 tablespoon" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Mix flaxseed powder and turmeric in warm water", "Add honey and stir well", "Drink every morning on empty stomach"],
    how_often: "Daily for 2-3 months",
    precautions: ["Start with ½ tablespoon flaxseed", "Drink extra water throughout day", "May cause gas initially"],
    benefits: ["Flaxseed provides omega-3 for joint lubrication", "Turmeric reduces joint inflammation", "Improves overall joint mobility"],
    related_diseases: ["joint health", "flexibility", "mobility"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "sports-373",
    problem: "Endurance Building",
    title: "Shatavari & Ashwagandha Endurance Tonic",
    ingredients: [{ name: "Shatavari powder", quantity: "1 teaspoon" }, { name: "Ashwagandha powder", quantity: "1 teaspoon" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Add both herbal powders to warm milk", "Mix well and add honey", "Drink daily in the evening"],
    how_often: "Daily for 2-3 months",
    precautions: ["Start with half dose first week", "Not recommended during fever", "Consult doctor if on medication"],
    benefits: ["Shatavari enhances stamina", "Ashwagandha improves VO2 max", "Together they boost athletic endurance"],
    related_diseases: ["low stamina", "endurance", "athletic performance"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-374",
    problem: "Endurance Building",
    title: "Chyawanprash Energy Balls",
    ingredients: [{ name: "Chyawanprash", quantity: "2 tablespoons" }, { name: "Oats", quantity: "1 cup" }, { name: "Dates paste", quantity: "3 tablespoons" }, { name: "Nuts (mixed)", quantity: "¼ cup chopped" }],
    method: ["Mix all ingredients together", "Roll into small balls", "Refrigerate for 1 hour before eating"],
    how_often: "2-3 balls before workout",
    precautions: ["Store in refrigerator", "Consume within 1 week", "Check for nut allergies"],
    benefits: ["Chyawanprash has 40+ Ayurvedic herbs", "Provides sustained energy release", "Dates and nuts add protein and healthy fats"],
    related_diseases: ["energy", "endurance", "sports nutrition"],
    difficulty: "Easy",
    preparation_time: "15 minutes"
  },
  {
    id: "sports-375",
    problem: "Muscle Fatigue (Sports)",
    title: "Magnesium-Rich Moringa Shake",
    ingredients: [{ name: "Moringa powder", quantity: "1 teaspoon" }, { name: "Banana", quantity: "1" }, { name: "Peanut butter", quantity: "1 tablespoon" }, { name: "Milk", quantity: "1 glass" }],
    method: ["Blend all ingredients until smooth", "Drink after workout", "Can add ice for cold shake"],
    how_often: "After intense workouts",
    precautions: ["Check for peanut allergies", "Don't take on empty stomach", "Use fresh moringa powder"],
    benefits: ["Moringa is rich in magnesium for muscle function", "Banana prevents cramps", "Peanut butter provides protein for repair"],
    related_diseases: ["muscle fatigue", "recovery", "magnesium deficiency"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-376",
    problem: "Muscle Fatigue (Sports)",
    title: "Triphala & Honey Fatigue Recovery",
    ingredients: [{ name: "Triphala powder", quantity: "1 teaspoon" }, { name: "Honey", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Mix Triphala powder in warm water", "Add honey and stir well", "Drink before bed after intense training"],
    how_often: "Daily after heavy training days",
    precautions: ["May cause loose stools initially", "Take at least 1 hour after dinner", "Reduce dose if stomach is upset"],
    benefits: ["Triphala removes metabolic waste from muscles", "Honey restores glycogen", "Promotes deep restorative sleep"],
    related_diseases: ["fatigue", "recovery", "muscle repair"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "sports-377",
    problem: "Sports Nutrition",
    title: "Protein-Rich Sprouted Moong Salad",
    ingredients: [{ name: "Sprouted moong (green gram)", quantity: "1 cup" }, { name: "Cucumber", quantity: "½ chopped" }, { name: "Tomato", quantity: "1 chopped" }, { name: "Lemon juice & chaat masala", quantity: "To taste" }],
    method: ["Mix sprouted moong with chopped vegetables", "Add lemon juice and chaat masala", "Eat as a pre or post-workout snack"],
    how_often: "3-4 times per week",
    precautions: ["Sprout moong properly (24-48 hours)", "Wash sprouts thoroughly", "Eat fresh"],
    benefits: ["Sprouts are protein powerhouses", "Easy to digest plant protein", "Rich in enzymes for better absorption"],
    related_diseases: ["nutrition", "protein", "sports diet"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "sports-378",
    problem: "Sports Nutrition",
    title: "Ragi (Finger Millet) Energy Porridge",
    ingredients: [{ name: "Ragi flour", quantity: "3 tablespoons" }, { name: "Milk", quantity: "1 glass" }, { name: "Jaggery", quantity: "1 tablespoon" }, { name: "Cardamom powder", quantity: "¼ teaspoon" }],
    method: ["Mix ragi flour with cold milk to avoid lumps", "Cook on medium heat while stirring", "Add jaggery and cardamom, cook until thick"],
    how_often: "As a pre-workout breakfast 3-4 times/week",
    precautions: ["Stir continuously to prevent lumps", "Adjust consistency with milk", "Can add nuts for extra protein"],
    benefits: ["Ragi is rich in calcium for strong bones", "Provides complex carbs for sustained energy", "High iron content prevents fatigue"],
    related_diseases: ["sports nutrition", "energy", "bone health"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "sports-379",
    problem: "Muscle Strain (Sports)",
    title: "Arnica & Aloe Vera Gel Pack",
    ingredients: [{ name: "Aloe vera gel", quantity: "2 tablespoons" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Peppermint oil", quantity: "3 drops" }],
    method: ["Mix aloe vera gel with turmeric", "Add peppermint oil drops", "Apply on strained area and leave for 30 minutes"],
    how_often: "3 times daily for 5 days",
    precautions: ["Keep away from eyes", "Wash off if burning sensation occurs", "Not for deep muscle tears"],
    benefits: ["Aloe vera cools and soothes inflammation", "Peppermint provides natural pain relief", "Non-greasy and absorbs quickly"],
    related_diseases: ["muscle strain", "sports injury", "pain relief"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "sports-380",
    problem: "Ankle Sprain (Sports)",
    title: "Haldi Doodh (Turmeric Milk) Internal Healing",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Ghee", quantity: "½ teaspoon" }, { name: "Black pepper", quantity: "A pinch" }],
    method: ["Heat milk with turmeric and black pepper", "Add ghee and stir well", "Drink warm before bed"],
    how_often: "Daily for 2 weeks after injury",
    precautions: ["Use whole turmeric if possible", "Ghee enhances absorption", "Not a substitute for RICE protocol"],
    benefits: ["Turmeric accelerates internal healing", "Ghee lubricates joints", "Promotes restful sleep for recovery"],
    related_diseases: ["sprain recovery", "internal healing", "anti-inflammatory"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-381",
    problem: "Pre-Workout Energy",
    title: "Coffee & Coconut Oil Bulletproof Drink",
    ingredients: [{ name: "Black coffee", quantity: "1 cup" }, { name: "Coconut oil", quantity: "1 tablespoon" }, { name: "Cinnamon powder", quantity: "¼ teaspoon" }],
    method: ["Brew strong black coffee", "Blend with coconut oil and cinnamon", "Drink 30 minutes before workout"],
    how_often: "Before morning workouts",
    precautions: ["Avoid if caffeine-sensitive", "Don't take in the evening", "Limit to 1 cup per day"],
    benefits: ["Caffeine boosts alertness and performance", "Coconut oil provides sustained energy from MCTs", "Cinnamon stabilizes blood sugar"],
    related_diseases: ["energy", "pre-workout", "focus"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-382",
    problem: "Post-Workout Recovery",
    title: "Cherry & Ginger Anti-Inflammatory Smoothie",
    ingredients: [{ name: "Tart cherries (or juice)", quantity: "½ cup" }, { name: "Ginger", quantity: "½ inch" }, { name: "Yogurt", quantity: "½ cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Blend cherries, ginger, and yogurt", "Add honey and blend again", "Drink within 30 minutes of workout"],
    how_often: "After intense workouts",
    precautions: ["Use tart cherries not sweet", "Can substitute with cherry juice", "Avoid if dairy-sensitive"],
    benefits: ["Tart cherries reduce muscle inflammation", "Ginger speeds up recovery", "Yogurt provides protein and probiotics"],
    related_diseases: ["recovery", "inflammation", "muscle repair"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-383",
    problem: "Muscle Soreness (DOMS)",
    title: "Ginger & Cinnamon Anti-Soreness Tea",
    ingredients: [{ name: "Fresh ginger", quantity: "1 inch grated" }, { name: "Cinnamon stick", quantity: "1" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Water", quantity: "1 cup" }],
    method: ["Boil water with ginger and cinnamon for 5 minutes", "Strain and add honey", "Drink warm after workout"],
    how_often: "2-3 times daily when sore",
    precautions: ["Don't boil honey directly", "Reduce ginger if acidic", "Can drink cold as well"],
    benefits: ["Ginger reduces exercise-induced soreness by 25%", "Cinnamon fights inflammation", "Honey provides quick energy replenishment"],
    related_diseases: ["DOMS", "soreness", "recovery"],
    difficulty: "Easy",
    preparation_time: "8 minutes"
  },
  {
    id: "sports-384",
    problem: "Sports Hydration",
    title: "Watermelon & Mint Hydration Juice",
    ingredients: [{ name: "Watermelon", quantity: "2 cups cubed" }, { name: "Fresh mint leaves", quantity: "8-10" }, { name: "Lemon juice", quantity: "1 tablespoon" }, { name: "Salt", quantity: "A pinch" }],
    method: ["Blend watermelon with mint leaves", "Add lemon juice and salt", "Serve chilled during or after workout"],
    how_often: "During summer workouts",
    precautions: ["Best consumed fresh", "Don't add too much salt", "May need bathroom breaks more often"],
    benefits: ["Watermelon is 92% water - perfect hydration", "Contains L-citrulline for blood flow", "Mint cools body temperature naturally"],
    related_diseases: ["hydration", "heat management", "sports performance"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-385",
    problem: "Knee Injury (Sports)",
    title: "Haridra Khand (Turmeric Sugar) Knee Tonic",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Ghee", quantity: "1 teaspoon" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Mishri (Rock sugar)", quantity: "1 teaspoon" }],
    method: ["Fry turmeric lightly in ghee for 1 minute", "Add warm milk and mishri", "Mix well and drink warm"],
    how_often: "Twice daily for 3 weeks",
    precautions: ["Don't overheat turmeric", "Can stain teeth temporarily", "Continue knee exercises as advised"],
    benefits: ["Haridra Khand is a classical Ayurvedic formula", "Ghee enhances turmeric bioavailability", "Supports cartilage regeneration"],
    related_diseases: ["knee injury", "joint repair", "cartilage health"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-386",
    problem: "Endurance Building",
    title: "Shilajit & Honey Stamina Booster",
    ingredients: [{ name: "Shilajit resin", quantity: "Pea-sized" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Dissolve shilajit in warm milk", "Add honey and mix well", "Drink in the morning on empty stomach"],
    how_often: "Daily for 2-3 months",
    precautions: ["Buy from trusted source only", "Not for pregnant/nursing women", "Start with small dose"],
    benefits: ["Shilajit boosts cellular energy (ATP production)", "Rich in fulvic acid and 80+ minerals", "Used by athletes for centuries in Ayurveda"],
    related_diseases: ["stamina", "endurance", "energy production"],
    difficulty: "Easy",
    preparation_time: "3 minutes"
  },
  {
    id: "sports-387",
    problem: "Runner's Knee (Sports)",
    title: "Dashmool & Til Oil Knee Massage",
    ingredients: [{ name: "Dashmool oil", quantity: "2 tablespoons" }, { name: "Til (Sesame) oil", quantity: "1 tablespoon" }, { name: "Rock salt", quantity: "½ teaspoon" }],
    method: ["Warm the oils together", "Add rock salt and mix", "Massage around kneecap in circular motions for 10 minutes"],
    how_often: "Daily before bed for 3 weeks",
    precautions: ["Don't massage directly on kneecap", "Use gentle pressure", "Apply warm compress after massage"],
    benefits: ["Dashmool (10 roots) is a classical anti-inflammatory", "Sesame oil nourishes joint tissue", "Rock salt reduces fluid retention"],
    related_diseases: ["runner's knee", "patellar pain", "knee support"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-388",
    problem: "Hamstring Pull (Sports)",
    title: "Warm Ginger & Turmeric Compress",
    ingredients: [{ name: "Ginger paste", quantity: "2 tablespoons" }, { name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Hot water", quantity: "For compress cloth" }],
    method: ["Mix ginger paste with turmeric", "Apply on hamstring area", "Place hot wet cloth over it for 20 minutes"],
    how_often: "3 times daily for first 3 days (after initial 48hr ice phase)",
    precautions: ["Only use heat after 48 hours post-injury", "Don't use on acute fresh injuries", "Test heat level on wrist first"],
    benefits: ["Ginger increases blood flow for healing", "Turmeric reduces inflammation", "Heat therapy relaxes tight muscles"],
    related_diseases: ["hamstring injury", "muscle pull", "rehabilitation"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-389",
    problem: "Shoulder Injury (Sports)",
    title: "Nirgundi Leaf Poultice",
    ingredients: [{ name: "Nirgundi leaves (fresh or dried)", quantity: "Handful" }, { name: "Sesame oil", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "For steaming" }],
    method: ["Steam nirgundi leaves briefly to soften", "Mix with warm sesame oil", "Apply as poultice on shoulder for 30 minutes"],
    how_often: "Twice daily for 2 weeks",
    precautions: ["Use fresh leaves when available", "Don't apply on broken skin", "Combine with gentle shoulder mobility exercises"],
    benefits: ["Nirgundi (Vitex negundo) is a powerful pain reliever", "Traditionally used for musculoskeletal issues", "Sesame oil helps absorb the herb's benefits"],
    related_diseases: ["shoulder pain", "rotator cuff", "sports rehab"],
    difficulty: "Medium",
    preparation_time: "15 minutes"
  },
  {
    id: "sports-390",
    problem: "Muscle Fatigue (Sports)",
    title: "Amla & Jaggery Energy Bites",
    ingredients: [{ name: "Amla powder", quantity: "1 tablespoon" }, { name: "Jaggery", quantity: "2 tablespoons" }, { name: "Sesame seeds", quantity: "2 tablespoons" }, { name: "Ghee", quantity: "1 teaspoon" }],
    method: ["Warm jaggery with ghee until soft", "Mix in amla powder and sesame seeds", "Form small balls and let cool"],
    how_often: "2-3 balls after workout",
    precautions: ["Store in airtight container", "Consume within a week", "Don't overheat jaggery"],
    benefits: ["Amla fights oxidative stress from exercise", "Jaggery provides iron and quick energy", "Sesame seeds add calcium and protein"],
    related_diseases: ["fatigue", "energy", "muscle recovery"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "sports-391",
    problem: "Tennis Elbow (Sports)",
    title: "Warm Fenugreek Seed Paste",
    ingredients: [{ name: "Fenugreek seeds", quantity: "2 tablespoons" }, { name: "Water", quantity: "For soaking" }, { name: "Turmeric powder", quantity: "½ teaspoon" }],
    method: ["Soak fenugreek seeds overnight", "Grind into paste and mix with turmeric", "Apply warm paste on elbow and wrap for 30 minutes"],
    how_often: "Twice daily for 2 weeks",
    precautions: ["Make fresh paste each time", "Don't apply too hot", "Rest the arm between applications"],
    benefits: ["Fenugreek has anti-inflammatory diosgenin", "Reduces tendon swelling", "Turmeric accelerates healing"],
    related_diseases: ["tennis elbow", "tendinitis", "arm pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes (plus overnight soak)"
  },
  {
    id: "sports-392",
    problem: "Shin Splints (Sports)",
    title: "Camphor & Coconut Oil Shin Relief",
    ingredients: [{ name: "Camphor tablets", quantity: "2 small" }, { name: "Coconut oil", quantity: "3 tablespoons" }, { name: "Clove oil", quantity: "2 drops" }],
    method: ["Dissolve camphor in warm coconut oil", "Add clove oil drops", "Massage on shins after running"],
    how_often: "After every run for 2 weeks",
    precautions: ["Don't ingest", "Avoid on broken skin", "Wash hands after application"],
    benefits: ["Camphor provides immediate cooling relief", "Coconut oil reduces tissue inflammation", "Clove oil is a natural analgesic"],
    related_diseases: ["shin splints", "running pain", "leg relief"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-393",
    problem: "Joint Flexibility (Sports)",
    title: "Giloy & Turmeric Flexibility Tonic",
    ingredients: [{ name: "Giloy stem juice", quantity: "2 tablespoons" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Warm water", quantity: "½ glass" }],
    method: ["Mix giloy juice with warm water", "Add turmeric and honey", "Drink on empty stomach"],
    how_often: "Daily for 2 months",
    precautions: ["Use fresh giloy stem when possible", "May lower blood sugar", "Avoid during pregnancy"],
    benefits: ["Giloy strengthens connective tissues", "Improves joint lubrication", "Boosts immunity alongside flexibility"],
    related_diseases: ["joint health", "flexibility", "connective tissue"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-394",
    problem: "Ligament Support",
    title: "Laksha Guggulu Tablet Support",
    ingredients: [{ name: "Laksha Guggulu tablets", quantity: "2 tablets" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Ghee", quantity: "½ teaspoon" }],
    method: ["Take Laksha Guggulu tablets with warm milk", "Add ghee to enhance absorption", "Take after meals"],
    how_often: "Twice daily for 6-8 weeks",
    precautions: ["Buy from reputed Ayurvedic brand", "Consult Ayurvedic practitioner for dosage", "Not during pregnancy"],
    benefits: ["Classical Ayurvedic formula for bone & ligament healing", "Laksha (lac) strengthens bones", "Guggulu reduces inflammation"],
    related_diseases: ["ligament repair", "bone health", "fracture recovery"],
    difficulty: "Easy",
    preparation_time: "2 minutes"
  },
  {
    id: "sports-395",
    problem: "Cramps During Exercise",
    title: "Ajwain & Jeera Anti-Cramp Water",
    ingredients: [{ name: "Ajwain (Carom seeds)", quantity: "1 teaspoon" }, { name: "Jeera (Cumin seeds)", quantity: "1 teaspoon" }, { name: "Water", quantity: "2 glasses" }, { name: "Black salt", quantity: "¼ teaspoon" }],
    method: ["Boil ajwain and jeera in water for 5 minutes", "Strain and add black salt", "Sip throughout the day and before workouts"],
    how_often: "Daily on workout days",
    precautions: ["Don't drink too hot", "Reduce ajwain if acidity occurs", "Carry in bottle during exercise"],
    benefits: ["Ajwain prevents muscle spasms", "Cumin aids mineral absorption", "Black salt restores electrolytes"],
    related_diseases: ["cramps", "muscle spasms", "exercise"],
    difficulty: "Easy",
    preparation_time: "8 minutes"
  },
  {
    id: "sports-396",
    problem: "Sports Nutrition",
    title: "Makhana (Fox Nuts) Protein Snack",
    ingredients: [{ name: "Makhana (Fox nuts)", quantity: "2 cups" }, { name: "Ghee", quantity: "1 teaspoon" }, { name: "Turmeric powder", quantity: "¼ teaspoon" }, { name: "Rock salt & pepper", quantity: "To taste" }],
    method: ["Roast makhana in ghee until crispy", "Sprinkle turmeric, salt, and pepper", "Cool and eat as a protein-rich snack"],
    how_often: "As a daily snack or pre-workout",
    precautions: ["Store in airtight container", "Don't over-roast", "Good low-calorie high-protein option"],
    benefits: ["Makhana is high in protein and low in fat", "Rich in calcium and magnesium", "Low glycemic index for sustained energy"],
    related_diseases: ["sports nutrition", "protein", "healthy snacking"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "sports-397",
    problem: "Post-Workout Recovery",
    title: "Paneer & Spinach Recovery Bowl",
    ingredients: [{ name: "Paneer (cottage cheese)", quantity: "100g cubed" }, { name: "Spinach", quantity: "1 cup chopped" }, { name: "Turmeric & cumin", quantity: "½ teaspoon each" }, { name: "Ghee", quantity: "1 teaspoon" }],
    method: ["Sauté spinach in ghee with spices", "Add paneer cubes and cook for 3 minutes", "Eat with roti or rice within 1 hour of workout"],
    how_often: "After strength training sessions",
    precautions: ["Use fresh paneer", "Can substitute tofu for vegans", "Add salt to taste"],
    benefits: ["Paneer provides 18g protein per 100g", "Spinach adds iron and magnesium", "Turmeric reduces post-workout inflammation"],
    related_diseases: ["muscle recovery", "protein intake", "sports nutrition"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "sports-398",
    problem: "Endurance Building",
    title: "Tulsi & Mulethi Stamina Tea",
    ingredients: [{ name: "Tulsi (Holy Basil) leaves", quantity: "8-10" }, { name: "Mulethi (Licorice) root", quantity: "1 small piece" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Water", quantity: "1 cup" }],
    method: ["Boil tulsi and mulethi in water for 5 minutes", "Strain and add honey when lukewarm", "Drink 30 minutes before workout"],
    how_often: "Before endurance workouts",
    precautions: ["Mulethi may raise blood pressure", "Avoid if hypertensive", "Use in moderation"],
    benefits: ["Tulsi is an adaptogen that fights exercise stress", "Mulethi supports adrenal function", "Together they improve oxygen utilization"],
    related_diseases: ["stamina", "endurance", "oxygen capacity"],
    difficulty: "Easy",
    preparation_time: "8 minutes"
  },
  {
    id: "sports-399",
    problem: "Muscle Strain (Sports)",
    title: "Neem & Turmeric Healing Paste",
    ingredients: [{ name: "Neem leaves paste", quantity: "1 tablespoon" }, { name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Aloe vera gel", quantity: "1 tablespoon" }],
    method: ["Mix neem paste, turmeric, and aloe vera", "Apply on strained area", "Leave for 30 minutes then wash off"],
    how_often: "Twice daily for 1 week",
    precautions: ["Do skin patch test first", "Not for deep muscle tears", "Combine with rest"],
    benefits: ["Neem has antiseptic and anti-inflammatory properties", "Turmeric reduces swelling", "Aloe vera soothes and cools the area"],
    related_diseases: ["muscle strain", "inflammation", "healing"],
    difficulty: "Easy",
    preparation_time: "5 minutes"
  },
  {
    id: "sports-400",
    problem: "Sports Nutrition",
    title: "Dal & Vegetable High-Protein Soup",
    ingredients: [{ name: "Moong dal", quantity: "½ cup" }, { name: "Mixed vegetables", quantity: "1 cup" }, { name: "Turmeric & cumin", quantity: "½ teaspoon each" }, { name: "Ghee", quantity: "1 teaspoon" }],
    method: ["Cook moong dal with vegetables and spices", "Add ghee tempering with cumin", "Eat warm as a post-workout meal"],
    how_often: "3-4 times per week after workouts",
    precautions: ["Cook dal well for easy digestion", "Add salt to taste", "Can add lemon for vitamin C"],
    benefits: ["Moong dal provides easily digestible protein", "Vegetables add vitamins and minerals", "Turmeric fights exercise-induced inflammation"],
    related_diseases: ["sports nutrition", "recovery meal", "protein"],
    difficulty: "Easy",
    preparation_time: "25 minutes",
    region: "india" as RemedyRegion
  },
  // ===== 100 NEW REMEDIES: Teeth Pain, Post-Surgery, and More =====
  {
    id: "new-401",
    problem: "Tooth Pain",
    title: "Clove Oil Direct Application",
    ingredients: [{ name: "Clove oil", quantity: "2-3 drops" }, { name: "Cotton ball", quantity: "1" }],
    method: ["Soak cotton ball in clove oil", "Apply directly on the aching tooth", "Hold for 10-15 minutes", "Spit out and rinse"],
    how_often: "Every 3-4 hours as needed",
    precautions: ["Do not swallow clove oil", "Avoid on open wounds", "Not for children under 2"],
    benefits: ["Eugenol provides natural anesthesia", "Antibacterial properties", "Reduces inflammation"],
    related_diseases: ["tooth pain", "dental care"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-402",
    problem: "Tooth Pain",
    title: "Salt Water Warm Gargle",
    ingredients: [{ name: "Warm water", quantity: "1 glass" }, { name: "Rock salt", quantity: "1 teaspoon" }],
    method: ["Dissolve rock salt in warm water", "Gargle for 30 seconds", "Swish around the painful area", "Spit out and repeat 3 times"],
    how_often: "Every 2-3 hours for pain relief",
    precautions: ["Do not swallow", "Use lukewarm water only", "See dentist if pain persists"],
    benefits: ["Reduces bacterial growth", "Draws out infection", "Soothes inflamed gums"],
    related_diseases: ["tooth pain", "gum disease"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-403",
    problem: "Tooth Pain",
    title: "Garlic Paste for Toothache",
    ingredients: [{ name: "Garlic clove", quantity: "1" }, { name: "Rock salt", quantity: "pinch" }],
    method: ["Crush garlic clove into paste", "Mix with a pinch of rock salt", "Apply on affected tooth and gum", "Leave for 5-10 minutes then rinse"],
    how_often: "2-3 times daily",
    precautions: ["May cause burning sensation", "Rinse mouth after", "Avoid on sensitive gums"],
    benefits: ["Allicin has antibacterial properties", "Numbs pain naturally", "Fights oral infections"],
    related_diseases: ["tooth pain", "oral health"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-404",
    problem: "Post-Surgery Recovery",
    title: "Turmeric Golden Milk for Healing",
    ingredients: [{ name: "Milk", quantity: "1 glass" }, { name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Black pepper", quantity: "pinch" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Warm the milk gently", "Add turmeric and black pepper", "Stir well and add honey", "Drink warm before bed"],
    how_often: "Daily for 2-4 weeks post-surgery",
    precautions: ["Consult doctor if on blood thinners", "Avoid if lactose intolerant", "Stop if stomach upset occurs"],
    benefits: ["Curcumin accelerates wound healing", "Reduces post-operative inflammation", "Boosts immune recovery"],
    related_diseases: ["post-surgery", "wound healing", "inflammation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-405",
    problem: "Post-Surgery Recovery",
    title: "Aloe Vera Wound Healing Gel",
    ingredients: [{ name: "Fresh aloe vera leaf", quantity: "1" }],
    method: ["Extract fresh gel from aloe leaf", "Apply gently around (not on) surgical wound", "Let it dry naturally", "Reapply after cleaning"],
    how_often: "Twice daily after wound is closed",
    precautions: ["Never apply on open wound", "Get doctor approval first", "Use only pure aloe vera"],
    benefits: ["Promotes collagen formation", "Reduces scar tissue", "Natural moisturizer for healing skin"],
    related_diseases: ["wound healing", "scar prevention"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-406",
    problem: "Post-Surgery Recovery",
    title: "Ashwagandha Recovery Tonic",
    ingredients: [{ name: "Ashwagandha powder", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Add ashwagandha powder to warm milk", "Mix well and add honey", "Drink before bedtime"],
    how_often: "Daily for 4-6 weeks post-surgery",
    precautions: ["Consult doctor before starting", "Avoid during pregnancy", "May interact with sedatives"],
    benefits: ["Reduces stress and cortisol", "Improves strength recovery", "Supports immune function"],
    related_diseases: ["recovery", "weakness", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-407",
    problem: "Gum Disease",
    title: "Neem Twig Gum Massage",
    ingredients: [{ name: "Neem twig (Datun)", quantity: "1" }, { name: "Rock salt", quantity: "pinch" }],
    method: ["Chew one end of neem twig to make bristles", "Gently brush teeth and massage gums", "Sprinkle rock salt for extra cleaning", "Rinse mouth after 5 minutes"],
    how_often: "Daily morning routine",
    precautions: ["Use fresh twig only", "Be gentle on sensitive gums", "Discard after single use"],
    benefits: ["Natural antibacterial", "Strengthens gums", "Prevents cavities naturally"],
    related_diseases: ["gum disease", "oral health", "tooth pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-408",
    problem: "Mouth Ulcers",
    title: "Honey & Coconut Oil Mouth Ulcer Paste",
    ingredients: [{ name: "Raw honey", quantity: "1 teaspoon" }, { name: "Coconut oil", quantity: "½ teaspoon" }],
    method: ["Mix honey and coconut oil", "Apply directly on ulcers using clean finger", "Leave for 10 minutes", "Avoid eating or drinking for 15 minutes"],
    how_often: "3-4 times daily until healed",
    precautions: ["Use raw organic honey", "Keep hands clean", "See doctor if ulcers persist over 2 weeks"],
    benefits: ["Honey has antibacterial properties", "Coconut oil forms protective layer", "Speeds up healing process"],
    related_diseases: ["mouth ulcers", "oral health"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-409",
    problem: "Wisdom Tooth Pain",
    title: "Peppermint Tea Mouth Rinse",
    ingredients: [{ name: "Peppermint tea bag", quantity: "1" }, { name: "Warm water", quantity: "1 cup" }],
    method: ["Steep peppermint tea bag in warm water for 5 minutes", "Let it cool to lukewarm", "Swish around the painful area for 30 seconds", "Spit and repeat"],
    how_often: "3-4 times daily",
    precautions: ["Ensure tea is not too hot", "Not a substitute for dental visit", "Avoid if allergic to menthol"],
    benefits: ["Menthol numbs pain", "Reduces swelling", "Freshens breath"],
    related_diseases: ["wisdom tooth", "tooth pain"],
    difficulty: "Easy",
    preparation_time: "7 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-410",
    problem: "Appendix Pain Support",
    title: "Ginger Mint Digestive Drink",
    ingredients: [{ name: "Fresh ginger", quantity: "1 inch" }, { name: "Fresh mint leaves", quantity: "8-10" }, { name: "Warm water", quantity: "1 glass" }, { name: "Lemon juice", quantity: "½ teaspoon" }],
    method: ["Grate ginger and crush mint leaves", "Add to warm water", "Steep for 5 minutes", "Strain and add lemon juice"],
    how_often: "2-3 times daily",
    precautions: ["Appendicitis needs medical attention", "Use only as supportive care", "Stop if pain worsens"],
    benefits: ["Reduces bloating and gas", "Anti-inflammatory", "Aids digestive comfort"],
    related_diseases: ["appendix pain", "digestive health"],
    difficulty: "Easy",
    preparation_time: "7 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-411",
    problem: "Hernia Support",
    title: "Castor Oil Abdominal Compress",
    ingredients: [{ name: "Castor oil", quantity: "2 tablespoons" }, { name: "Clean cloth", quantity: "1" }, { name: "Hot water bottle", quantity: "1" }],
    method: ["Soak cloth in warm castor oil", "Place over the hernia area", "Cover with hot water bottle", "Rest for 30 minutes"],
    how_often: "Once daily before bed",
    precautions: ["Not a substitute for surgery", "Avoid on broken skin", "Consult doctor first"],
    benefits: ["Reduces inflammation", "Relieves discomfort", "Improves circulation to area"],
    related_diseases: ["hernia", "abdominal pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-412",
    problem: "Tonsillitis",
    title: "Turmeric Honey Warm Drink",
    ingredients: [{ name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Honey", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Mix turmeric in warm water", "Add honey and stir well", "Drink slowly, letting it coat the throat"],
    how_often: "3 times daily during tonsillitis",
    precautions: ["Avoid cold drinks", "See doctor if fever develops", "Not for children under 1 year"],
    benefits: ["Anti-inflammatory for swollen tonsils", "Honey soothes throat", "Boosts local immunity"],
    related_diseases: ["tonsillitis", "sore throat"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-413",
    problem: "Plantar Warts",
    title: "Apple Cider Vinegar Wart Treatment",
    ingredients: [{ name: "Apple cider vinegar", quantity: "2 tablespoons" }, { name: "Cotton ball", quantity: "1" }, { name: "Bandage", quantity: "1" }],
    method: ["Soak cotton ball in apple cider vinegar", "Apply directly on the wart", "Secure with bandage", "Leave overnight and remove in morning"],
    how_often: "Nightly for 2-3 weeks",
    precautions: ["May sting initially", "Protect surrounding skin with petroleum jelly", "Stop if skin becomes too irritated"],
    benefits: ["Acetic acid destroys wart tissue", "Natural antiviral", "Cost-effective treatment"],
    related_diseases: ["warts", "skin conditions"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-414",
    problem: "Pneumonia Support",
    title: "Tulsi Ginger Steam Inhalation",
    ingredients: [{ name: "Fresh tulsi leaves", quantity: "10-12" }, { name: "Fresh ginger", quantity: "1 inch" }, { name: "Eucalyptus oil", quantity: "3 drops" }, { name: "Hot water", quantity: "1 bowl" }],
    method: ["Boil water and add crushed tulsi leaves and ginger", "Add eucalyptus oil drops", "Cover head with towel and inhale steam", "Continue for 10-15 minutes"],
    how_often: "Twice daily as supportive care",
    precautions: ["Pneumonia needs medical treatment", "Keep safe distance from hot water", "Not for small children unsupervised"],
    benefits: ["Opens congested airways", "Tulsi has antimicrobial properties", "Steam loosens mucus"],
    related_diseases: ["pneumonia", "chest congestion", "respiratory"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-415",
    problem: "Bronchitis Support",
    title: "Honey Ginger Lemon Syrup",
    ingredients: [{ name: "Fresh ginger juice", quantity: "1 tablespoon" }, { name: "Honey", quantity: "2 tablespoons" }, { name: "Lemon juice", quantity: "1 tablespoon" }],
    method: ["Mix ginger juice with honey", "Add lemon juice", "Take 1 teaspoon of the mixture", "Let it coat the throat slowly"],
    how_often: "3-4 times daily",
    precautions: ["Not for infants under 1 year", "See doctor for chronic bronchitis", "May cause acidity in some"],
    benefits: ["Ginger is a natural bronchodilator", "Honey soothes irritated airways", "Lemon provides vitamin C"],
    related_diseases: ["bronchitis", "cough", "respiratory"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-416",
    problem: "Nerve Pain (Neuralgia)",
    title: "Warm Sesame Oil Massage",
    ingredients: [{ name: "Sesame oil", quantity: "3 tablespoons" }, { name: "Camphor", quantity: "small piece" }],
    method: ["Warm sesame oil gently", "Dissolve camphor in the oil", "Massage along the nerve path", "Leave for 30 minutes then wipe off"],
    how_often: "Daily before bath",
    precautions: ["Test on small area first", "Avoid near eyes", "Do not use on broken skin"],
    benefits: ["Sesame oil penetrates deep tissues", "Camphor provides cooling relief", "Improves nerve circulation"],
    related_diseases: ["neuralgia", "nerve pain", "neuropathy"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-417",
    problem: "Fibromyalgia Support",
    title: "Epsom Salt Warm Bath",
    ingredients: [{ name: "Epsom salt", quantity: "2 cups" }, { name: "Lavender oil", quantity: "5 drops" }, { name: "Warm bath water", quantity: "full tub" }],
    method: ["Fill bathtub with warm water", "Dissolve Epsom salt completely", "Add lavender oil drops", "Soak for 20-30 minutes"],
    how_often: "3-4 times per week",
    precautions: ["Avoid if you have kidney problems", "Water should be warm not hot", "Stay hydrated during bath"],
    benefits: ["Magnesium absorbs through skin", "Relieves widespread muscle pain", "Lavender reduces stress and anxiety"],
    related_diseases: ["fibromyalgia", "chronic pain", "muscle pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-418",
    problem: "Cellulitis Support",
    title: "Turmeric Neem Paste Application",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Neem leaves paste", quantity: "2 tablespoons" }, { name: "Coconut oil", quantity: "1 teaspoon" }],
    method: ["Grind neem leaves into paste", "Mix with turmeric and coconut oil", "Apply on affected skin area", "Leave for 20 minutes then wash"],
    how_often: "Twice daily alongside antibiotics",
    precautions: ["Cellulitis needs antibiotics", "Use as supportive care only", "See doctor immediately for spreading redness"],
    benefits: ["Neem is a powerful antibacterial", "Turmeric reduces swelling", "Coconut oil moisturizes damaged skin"],
    related_diseases: ["cellulitis", "skin infection"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-419",
    problem: "Abscess (Boil)",
    title: "Warm Turmeric Poultice",
    ingredients: [{ name: "Turmeric powder", quantity: "2 teaspoons" }, { name: "Warm water", quantity: "enough to make paste" }, { name: "Clean cloth", quantity: "1" }],
    method: ["Make a thick paste with turmeric and warm water", "Apply the paste on the boil", "Cover with clean cloth", "Leave for 30 minutes then wash"],
    how_often: "3 times daily until boil drains",
    precautions: ["Turmeric will stain clothes", "Do not squeeze the boil", "See doctor if fever develops"],
    benefits: ["Draws out infection", "Reduces pain and swelling", "Speeds natural draining"],
    related_diseases: ["abscess", "boil", "skin infection"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-420",
    problem: "Ringworm",
    title: "Tea Tree Oil & Coconut Oil Treatment",
    ingredients: [{ name: "Tea tree oil", quantity: "3-4 drops" }, { name: "Coconut oil", quantity: "1 tablespoon" }],
    method: ["Mix tea tree oil with coconut oil", "Clean affected area thoroughly", "Apply the mixture with cotton", "Repeat after every wash"],
    how_often: "3 times daily for 2-4 weeks",
    precautions: ["Never apply tea tree oil undiluted", "Patch test first", "Keep area dry between applications"],
    benefits: ["Tea tree oil is antifungal", "Coconut oil has lauric acid", "Prevents spreading of infection"],
    related_diseases: ["ringworm", "fungal infection", "skin"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-421",
    problem: "Eczema Support",
    title: "Oatmeal Soothing Bath",
    ingredients: [{ name: "Colloidal oatmeal", quantity: "1 cup" }, { name: "Lukewarm water", quantity: "bathtub" }, { name: "Coconut oil", quantity: "1 tablespoon" }],
    method: ["Add colloidal oatmeal to lukewarm bath", "Soak for 15-20 minutes", "Pat skin dry gently", "Apply coconut oil immediately while damp"],
    how_often: "3-4 times per week",
    precautions: ["Water must be lukewarm not hot", "Pat dry, never rub", "Avoid fragranced products"],
    benefits: ["Oatmeal reduces itching", "Restores skin barrier", "Coconut oil locks in moisture"],
    related_diseases: ["eczema", "dry skin", "dermatitis"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-422",
    problem: "Psoriasis Support",
    title: "Neem Oil & Aloe Vera Skin Treatment",
    ingredients: [{ name: "Neem oil", quantity: "1 teaspoon" }, { name: "Aloe vera gel", quantity: "2 tablespoons" }, { name: "Vitamin E oil", quantity: "2-3 drops" }],
    method: ["Mix neem oil with aloe vera gel", "Add vitamin E oil", "Apply on psoriasis patches", "Leave overnight and wash in morning"],
    how_often: "Daily before bedtime",
    precautions: ["Patch test first", "Avoid on broken or bleeding patches", "Consult dermatologist for severe cases"],
    benefits: ["Neem reduces scaling and redness", "Aloe soothes irritation", "Vitamin E promotes skin healing"],
    related_diseases: ["psoriasis", "skin disorders"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-423",
    problem: "Carpal Tunnel Syndrome",
    title: "Warm Mustard Oil Wrist Massage",
    ingredients: [{ name: "Mustard oil", quantity: "2 tablespoons" }, { name: "Ajwain (carom seeds)", quantity: "1 teaspoon" }],
    method: ["Heat mustard oil with ajwain seeds until warm", "Strain the oil", "Massage wrists and forearms in circular motions", "Wrap with warm cloth for 15 minutes"],
    how_often: "Twice daily, morning and night",
    precautions: ["Oil should be warm not hot", "Avoid if skin is broken", "Consult doctor for severe numbness"],
    benefits: ["Improves blood circulation to wrist", "Reduces nerve compression pain", "Ajwain has anti-inflammatory properties"],
    related_diseases: ["carpal tunnel", "wrist pain", "nerve compression"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-424",
    problem: "Frozen Shoulder",
    title: "Hot Castor Oil Pack for Shoulder",
    ingredients: [{ name: "Castor oil", quantity: "3 tablespoons" }, { name: "Flannel cloth", quantity: "1" }, { name: "Hot water bottle", quantity: "1" }],
    method: ["Warm castor oil slightly", "Soak flannel cloth in warm oil", "Apply to frozen shoulder area", "Place hot water bottle on top for 30-45 minutes"],
    how_often: "Daily before gentle stretching",
    precautions: ["Oil should be comfortably warm", "Combine with physiotherapy", "Avoid jerky movements after"],
    benefits: ["Castor oil penetrates deep into joint", "Heat increases mobility", "Reduces adhesion formation"],
    related_diseases: ["frozen shoulder", "shoulder pain", "joint stiffness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-425",
    problem: "Gallstones Support",
    title: "Apple Cider Vinegar Lemon Drink",
    ingredients: [{ name: "Apple cider vinegar", quantity: "1 tablespoon" }, { name: "Lemon juice", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Mix apple cider vinegar in warm water", "Add fresh lemon juice", "Drink on empty stomach", "Wait 30 minutes before eating"],
    how_often: "Once daily in the morning",
    precautions: ["Dilute properly to protect teeth", "Avoid if you have ulcers", "Consult doctor for large stones"],
    benefits: ["Malic acid may soften gallstones", "Lemon stimulates bile flow", "Supports liver function"],
    related_diseases: ["gallstones", "liver health", "digestion"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-426",
    problem: "Hemorrhoids (Piles)",
    title: "Triphala Warm Sitz Bath",
    ingredients: [{ name: "Triphala powder", quantity: "2 tablespoons" }, { name: "Warm water", quantity: "1 basin" }, { name: "Neem leaves", quantity: "handful" }],
    method: ["Boil neem leaves in water for 10 minutes", "Add triphala powder and stir", "Let it cool to comfortably warm", "Sit in the basin for 15-20 minutes"],
    how_often: "Twice daily, morning and evening",
    precautions: ["Water should be warm not hot", "Dry area thoroughly after", "See doctor for bleeding piles"],
    benefits: ["Triphala reduces inflammation", "Neem prevents infection", "Sitz bath relieves pain"],
    related_diseases: ["piles", "hemorrhoids", "constipation"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-427",
    problem: "Peptic Ulcer Support",
    title: "Cabbage Juice Healing Drink",
    ingredients: [{ name: "Fresh cabbage leaves", quantity: "4-5 leaves" }, { name: "Water", quantity: "½ cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Blend cabbage leaves with water", "Strain the juice", "Add honey for taste", "Drink fresh on empty stomach"],
    how_often: "Twice daily for 2-3 weeks",
    precautions: ["Drink immediately after juicing", "May cause gas initially", "Consult doctor for severe ulcers"],
    benefits: ["Contains vitamin U (S-methylmethionine)", "Promotes stomach lining repair", "Natural anti-inflammatory"],
    related_diseases: ["peptic ulcer", "gastric ulcer", "stomach pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-428",
    problem: "Cervical Spondylosis",
    title: "Sesame Oil Warm Neck Massage",
    ingredients: [{ name: "Sesame oil", quantity: "3 tablespoons" }, { name: "Eucalyptus oil", quantity: "3 drops" }],
    method: ["Warm sesame oil gently", "Add eucalyptus oil drops", "Massage neck and upper back in upward strokes", "Apply warm towel compress for 10 minutes after"],
    how_often: "Daily before bath",
    precautions: ["Avoid sudden neck movements after", "Oil should be warm not hot", "Combine with gentle neck exercises"],
    benefits: ["Sesame oil nourishes cervical bones", "Reduces stiffness and pain", "Eucalyptus improves circulation"],
    related_diseases: ["cervical spondylosis", "neck pain", "spine"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-429",
    problem: "Slip Disc Support",
    title: "Ajwain & Rock Salt Hot Compress",
    ingredients: [{ name: "Ajwain (carom seeds)", quantity: "3 tablespoons" }, { name: "Rock salt", quantity: "2 tablespoons" }, { name: "Cotton cloth", quantity: "1" }],
    method: ["Dry roast ajwain and rock salt together", "Wrap in cotton cloth while still hot", "Apply as hot compress on the affected area", "Keep for 15-20 minutes"],
    how_often: "2-3 times daily",
    precautions: ["Test temperature before applying", "Not a substitute for medical treatment", "Avoid pressing directly on spine"],
    benefits: ["Ajwain has anti-inflammatory compounds", "Heat relaxes tight muscles", "Reduces nerve pressure pain"],
    related_diseases: ["slip disc", "back pain", "sciatica"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-430",
    problem: "Sciatica",
    title: "Garlic Milk for Sciatica Pain",
    ingredients: [{ name: "Garlic cloves", quantity: "3-4" }, { name: "Milk", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Crush garlic cloves", "Simmer in milk for 5-7 minutes", "Strain and add honey", "Drink warm"],
    how_often: "Twice daily for 3-4 weeks",
    precautions: ["Avoid on empty stomach if acidity prone", "May cause garlic breath", "Not for breastfeeding mothers in excess"],
    benefits: ["Allicin reduces nerve inflammation", "Milk provides calcium for spine", "Reduces sciatic nerve pain"],
    related_diseases: ["sciatica", "nerve pain", "back pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-431",
    problem: "Vertigo",
    title: "Ginger Honey Vertigo Remedy",
    ingredients: [{ name: "Fresh ginger", quantity: "1 inch" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Lemon juice", quantity: "½ teaspoon" }],
    method: ["Grate ginger and extract juice", "Mix with honey and lemon", "Take this mixture slowly", "Rest for 10 minutes after"],
    how_often: "Twice daily during vertigo episodes",
    precautions: ["Sit or lie down during episodes", "Avoid sudden head movements", "See ENT specialist for recurring vertigo"],
    benefits: ["Ginger improves blood flow to brain", "Reduces nausea from vertigo", "Honey stabilizes blood sugar"],
    related_diseases: ["vertigo", "dizziness", "balance"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-432",
    problem: "Tinnitus (Ear Ringing)",
    title: "Warm Sesame Oil Ear Drops",
    ingredients: [{ name: "Sesame oil", quantity: "2-3 drops" }, { name: "Garlic", quantity: "1 small clove" }],
    method: ["Warm sesame oil with crushed garlic for 2 minutes", "Strain and let it cool to lukewarm", "Put 2 drops in affected ear", "Rest on opposite side for 10 minutes"],
    how_often: "Once daily at bedtime",
    precautions: ["Oil must be lukewarm not hot", "Stop if ear pain increases", "Never use if eardrum is perforated"],
    benefits: ["Sesame oil nourishes ear canal", "Garlic has antimicrobial properties", "May reduce ringing over time"],
    related_diseases: ["tinnitus", "ear problems"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-433",
    problem: "Bell's Palsy Support",
    title: "Mustard Oil Facial Massage",
    ingredients: [{ name: "Mustard oil", quantity: "2 tablespoons" }, { name: "Camphor", quantity: "tiny piece" }],
    method: ["Dissolve camphor in warm mustard oil", "Massage the affected side of face gently", "Use upward circular strokes", "Leave oil for 20 minutes then wipe"],
    how_often: "Twice daily",
    precautions: ["Be very gentle on affected side", "Avoid area near eyes", "Combine with facial exercises prescribed by doctor"],
    benefits: ["Improves blood circulation to facial muscles", "Camphor stimulates nerve response", "Mustard oil provides warmth"],
    related_diseases: ["bell's palsy", "facial paralysis", "nerve"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-434",
    problem: "Tooth Sensitivity",
    title: "Sesame Oil Pulling for Sensitive Teeth",
    ingredients: [{ name: "Cold-pressed sesame oil", quantity: "1 tablespoon" }],
    method: ["Take sesame oil in mouth on empty stomach", "Swish gently for 15-20 minutes", "Do not swallow the oil", "Spit out and rinse with warm salt water"],
    how_often: "Daily morning before brushing",
    precautions: ["Never swallow the oil", "Start with 5 minutes and increase", "Not recommended during mouth infections"],
    benefits: ["Strengthens tooth enamel", "Reduces sensitivity over time", "Removes harmful bacteria"],
    related_diseases: ["tooth sensitivity", "dental health", "gum disease"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-435",
    problem: "Jaw Pain (TMJ)",
    title: "Warm Clove Oil Jaw Massage",
    ingredients: [{ name: "Clove oil", quantity: "3-4 drops" }, { name: "Coconut oil", quantity: "1 tablespoon" }],
    method: ["Mix clove oil with coconut oil", "Apply on jaw joints on both sides", "Massage in small circular motions for 5 minutes", "Apply warm compress afterward"],
    how_often: "2-3 times daily during flare-ups",
    precautions: ["Don't press too hard", "Avoid opening mouth wide", "See dentist for chronic TMJ"],
    benefits: ["Clove oil numbs jaw pain", "Massage relaxes tight muscles", "Warm compress reduces tension"],
    related_diseases: ["TMJ", "jaw pain", "teeth grinding"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-436",
    problem: "Dry Socket (Post Extraction)",
    title: "Clove & Turmeric Socket Paste",
    ingredients: [{ name: "Clove powder", quantity: "½ teaspoon" }, { name: "Turmeric powder", quantity: "¼ teaspoon" }, { name: "Coconut oil", quantity: "few drops" }],
    method: ["Mix clove and turmeric powder", "Add coconut oil to form a soft paste", "Apply gently in the socket area using clean cotton", "Leave for 15-20 minutes then gently rinse"],
    how_often: "2-3 times daily until pain subsides",
    precautions: ["Be very gentle with the socket", "See dentist if severe pain continues", "Don't use straw or spit forcefully"],
    benefits: ["Clove is a natural analgesic", "Turmeric prevents infection", "Promotes healing of the socket"],
    related_diseases: ["dry socket", "tooth extraction", "dental"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-437",
    problem: "Laryngitis (Voice Loss)",
    title: "Mulethi (Licorice) Warm Gargle",
    ingredients: [{ name: "Mulethi (licorice root)", quantity: "1 small piece" }, { name: "Water", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Boil mulethi in water for 10 minutes", "Strain and let it cool to lukewarm", "Add honey and use as gargle", "Gargle for 30 seconds, repeat 3 times"],
    how_often: "3-4 times daily until voice returns",
    precautions: ["Avoid if you have high blood pressure", "Don't use long-term", "Rest your voice completely"],
    benefits: ["Mulethi coats and soothes vocal cords", "Reduces throat inflammation", "Honey moisturizes irritated tissue"],
    related_diseases: ["laryngitis", "voice loss", "sore throat"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-438",
    problem: "Chalazion (Eye Lump)",
    title: "Warm Tea Bag Compress for Eye",
    ingredients: [{ name: "Green tea bag", quantity: "1" }, { name: "Warm water", quantity: "1 cup" }],
    method: ["Steep tea bag in warm water for 3 minutes", "Remove and let it cool slightly", "Place warm tea bag on closed eye over the lump", "Hold for 10-15 minutes"],
    how_often: "3-4 times daily for 2 weeks",
    precautions: ["Tea bag should be warm not hot", "Use clean tea bag each time", "See ophthalmologist if no improvement"],
    benefits: ["Warmth opens blocked gland", "Green tea has anti-inflammatory tannins", "Promotes natural draining"],
    related_diseases: ["chalazion", "eye lump", "eye health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-439",
    problem: "Pilonidal Cyst Support",
    title: "Turmeric & Neem Hot Compress",
    ingredients: [{ name: "Turmeric paste", quantity: "1 tablespoon" }, { name: "Neem leaves", quantity: "handful" }, { name: "Hot water", quantity: "1 bowl" }, { name: "Clean cloth", quantity: "1" }],
    method: ["Boil neem leaves in water for 10 minutes", "Soak cloth in neem water", "Apply turmeric paste on cyst area", "Place warm neem cloth on top for 20 minutes"],
    how_often: "2-3 times daily",
    precautions: ["Keep area clean and dry", "May need surgical drainage", "Don't pop or squeeze the cyst"],
    benefits: ["Turmeric reduces inflammation", "Neem fights infection", "Heat promotes draining"],
    related_diseases: ["pilonidal cyst", "abscess", "skin"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-440",
    problem: "Ganglion Cyst Support",
    title: "Warm Epsom Salt Soak for Cyst",
    ingredients: [{ name: "Epsom salt", quantity: "2 tablespoons" }, { name: "Warm water", quantity: "1 bowl" }],
    method: ["Dissolve Epsom salt in warm water", "Soak the affected wrist or area for 20 minutes", "Gently move the joint while soaking", "Pat dry afterward"],
    how_often: "Twice daily",
    precautions: ["Don't hit or press the cyst hard", "May resolve on its own", "See doctor if it affects movement"],
    benefits: ["Magnesium reduces inflammation", "Warm soak improves circulation", "May reduce cyst size over time"],
    related_diseases: ["ganglion cyst", "wrist lump", "joint"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-441",
    problem: "Lipoma Support",
    title: "Turmeric & Flaxseed Oil Application",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Flaxseed oil", quantity: "1 tablespoon" }],
    method: ["Mix turmeric powder with flaxseed oil", "Apply on the lipoma lump", "Massage gently for 5 minutes", "Leave overnight and wash in morning"],
    how_often: "Daily at bedtime",
    precautions: ["Lipomas are usually harmless", "See doctor if size increases rapidly", "Turmeric may stain bedding"],
    benefits: ["Turmeric may reduce fatty tissue growth", "Flaxseed oil has omega-3 fatty acids", "Gentle massage improves lymphatic flow"],
    related_diseases: ["lipoma", "fatty lump", "skin"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-442",
    problem: "Costochondritis (Chest Wall Pain)",
    title: "Hot Ajwain Compress for Chest",
    ingredients: [{ name: "Ajwain seeds", quantity: "3 tablespoons" }, { name: "Rock salt", quantity: "1 tablespoon" }, { name: "Cotton cloth", quantity: "1" }],
    method: ["Dry roast ajwain and rock salt together", "Wrap in cotton cloth", "Apply warm compress on the painful chest area", "Hold for 15-20 minutes"],
    how_often: "2-3 times daily during pain",
    precautions: ["Rule out heart problems first", "Don't apply directly on skin", "See doctor if pain radiates to arm"],
    benefits: ["Ajwain reduces inflammation", "Heat relaxes chest wall muscles", "Provides quick pain relief"],
    related_diseases: ["costochondritis", "chest pain", "rib pain"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-443",
    problem: "Plantar Fasciitis (Heel Pain)",
    title: "Rock Salt Warm Foot Soak",
    ingredients: [{ name: "Rock salt", quantity: "3 tablespoons" }, { name: "Warm water", quantity: "1 basin" }, { name: "Apple cider vinegar", quantity: "2 tablespoons" }],
    method: ["Dissolve rock salt in warm water", "Add apple cider vinegar", "Soak feet for 20-30 minutes", "Massage heel with thumb after soaking"],
    how_often: "Daily before bed",
    precautions: ["Water should be warm not scalding", "Wear supportive footwear", "Do heel stretches after"],
    benefits: ["Salt reduces inflammation", "Warm soak relaxes plantar fascia", "ACV helps reduce pain"],
    related_diseases: ["plantar fasciitis", "heel pain", "foot pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-444",
    problem: "Tennis Elbow",
    title: "Warm Mustard Oil Elbow Wrap",
    ingredients: [{ name: "Mustard oil", quantity: "2 tablespoons" }, { name: "Fenugreek powder", quantity: "1 teaspoon" }, { name: "Cotton bandage", quantity: "1" }],
    method: ["Warm mustard oil and mix in fenugreek powder", "Massage the elbow area for 5-7 minutes", "Wrap with cotton bandage", "Leave for 1-2 hours or overnight"],
    how_often: "Daily for 3-4 weeks",
    precautions: ["Don't lift heavy objects during recovery", "Combine with rest", "See doctor if pain persists beyond 6 weeks"],
    benefits: ["Mustard oil improves circulation", "Fenugreek reduces tendon inflammation", "Wrapping provides support"],
    related_diseases: ["tennis elbow", "elbow pain", "tendonitis"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-445",
    problem: "Trigger Finger",
    title: "Warm Water & Epsom Salt Finger Soak",
    ingredients: [{ name: "Epsom salt", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "1 bowl" }, { name: "Olive oil", quantity: "1 teaspoon" }],
    method: ["Dissolve Epsom salt in warm water", "Soak affected finger for 15 minutes", "Gently bend and straighten the finger while soaking", "Pat dry and massage with olive oil"],
    how_often: "2-3 times daily",
    precautions: ["Don't force the finger straight", "Avoid gripping activities", "See doctor if locking worsens"],
    benefits: ["Magnesium reduces tendon inflammation", "Warm soak increases flexibility", "Olive oil lubricates joint"],
    related_diseases: ["trigger finger", "finger stiffness", "tendon"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-446",
    problem: "Rotator Cuff Pain",
    title: "Turmeric Ginger Anti-Inflammatory Paste",
    ingredients: [{ name: "Turmeric powder", quantity: "2 teaspoons" }, { name: "Ginger paste", quantity: "1 teaspoon" }, { name: "Sesame oil", quantity: "1 tablespoon" }],
    method: ["Mix turmeric, ginger paste and sesame oil", "Apply on the shoulder joint area", "Massage gently in circular motions", "Cover with warm towel for 20 minutes"],
    how_often: "Twice daily",
    precautions: ["Avoid overhead activities", "Don't massage too deep", "See orthopedic for complete tears"],
    benefits: ["Turmeric and ginger reduce inflammation", "Sesame oil penetrates deep tissues", "Warm towel enhances absorption"],
    related_diseases: ["rotator cuff", "shoulder pain", "tendon injury"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-447",
    problem: "Bursitis",
    title: "Cold-Hot Alternating Compress",
    ingredients: [{ name: "Ice pack", quantity: "1" }, { name: "Hot water bottle", quantity: "1" }, { name: "Towels", quantity: "2" }],
    method: ["Apply cold pack wrapped in towel for 10 minutes", "Remove and wait 2 minutes", "Apply hot compress for 10 minutes", "Repeat the cycle once more"],
    how_often: "2-3 times daily during flare-up",
    precautions: ["Never apply ice directly on skin", "Don't use heat during acute inflammation", "Rest the joint between sessions"],
    benefits: ["Cold reduces acute swelling", "Heat improves circulation and healing", "Alternating helps flush inflammatory fluids"],
    related_diseases: ["bursitis", "joint inflammation", "shoulder pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-448",
    problem: "Gout",
    title: "Cherry & Apple Cider Vinegar Drink",
    ingredients: [{ name: "Tart cherry juice", quantity: "½ cup" }, { name: "Apple cider vinegar", quantity: "1 tablespoon" }, { name: "Water", quantity: "½ cup" }],
    method: ["Mix cherry juice with water", "Add apple cider vinegar", "Stir well and drink", "Best taken in the morning"],
    how_often: "Twice daily during gout attacks",
    precautions: ["Avoid alcohol and red meat", "Stay hydrated throughout the day", "See doctor for severe attacks"],
    benefits: ["Cherries lower uric acid levels", "ACV alkalizes the body", "Reduces gout inflammation"],
    related_diseases: ["gout", "uric acid", "joint pain"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-449",
    problem: "Tendonitis",
    title: "Turmeric Milk & Warm Compress Combo",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Warm towel compress", quantity: "1" }],
    method: ["Drink turmeric milk for internal anti-inflammatory effect", "Apply warm towel compress on tendon area", "Hold for 15-20 minutes", "Do gentle stretches after"],
    how_often: "Daily for 2-3 weeks",
    precautions: ["Rest the affected tendon", "Avoid repetitive movements", "See doctor if pain continues"],
    benefits: ["Curcumin reduces tendon inflammation", "Warm compress increases blood flow", "Internal + external approach"],
    related_diseases: ["tendonitis", "tendon pain", "overuse injury"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-450",
    problem: "Post-Surgery Constipation",
    title: "Isabgol (Psyllium) & Warm Milk",
    ingredients: [{ name: "Isabgol (psyllium husk)", quantity: "2 teaspoons" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Ghee", quantity: "½ teaspoon" }],
    method: ["Add isabgol to warm milk", "Add ghee and stir well", "Drink immediately before it thickens", "Follow with a glass of water"],
    how_often: "Once daily at bedtime",
    precautions: ["Drink plenty of water throughout day", "Start with 1 teaspoon and increase", "Consult doctor if on post-surgery medications"],
    benefits: ["Gentle fiber adds bulk to stool", "Ghee lubricates intestines", "No straining needed"],
    related_diseases: ["post-surgery constipation", "constipation", "digestion"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-451",
    problem: "Post-Surgery Swelling",
    title: "Arnica & Turmeric Anti-Swelling Paste",
    ingredients: [{ name: "Arnica gel", quantity: "1 teaspoon" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Aloe vera gel", quantity: "1 tablespoon" }],
    method: ["Mix arnica gel with turmeric and aloe vera", "Apply gently around (not on) the surgical site", "Leave for 20 minutes", "Wipe off with damp cloth"],
    how_often: "Twice daily after wound closure",
    precautions: ["Never apply on open wound", "Get doctor approval first", "Stop if irritation occurs"],
    benefits: ["Arnica reduces bruising and swelling", "Turmeric is anti-inflammatory", "Aloe soothes surrounding skin"],
    related_diseases: ["post-surgery swelling", "bruising", "recovery"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-452",
    problem: "Post-Surgery Weakness",
    title: "Dates & Almond Energy Shake",
    ingredients: [{ name: "Dates", quantity: "4-5" }, { name: "Almonds (soaked)", quantity: "8-10" }, { name: "Milk", quantity: "1 glass" }, { name: "Saffron strands", quantity: "2-3" }],
    method: ["Soak almonds overnight and peel", "Blend dates, almonds and milk until smooth", "Add saffron strands", "Drink fresh"],
    how_often: "Once daily for 4-6 weeks",
    precautions: ["Check for nut allergies", "Adjust sweetness as needed", "Avoid if lactose intolerant"],
    benefits: ["Dates provide instant energy and iron", "Almonds give protein for tissue repair", "Saffron improves mood and appetite"],
    related_diseases: ["post-surgery weakness", "anemia", "fatigue"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-453",
    problem: "Post-Surgery Scar Reduction",
    title: "Rosehip & Vitamin E Oil Treatment",
    ingredients: [{ name: "Rosehip oil", quantity: "1 teaspoon" }, { name: "Vitamin E capsule", quantity: "1" }],
    method: ["Pierce vitamin E capsule and squeeze oil out", "Mix with rosehip oil", "Massage gently on healed scar for 5 minutes", "Leave overnight"],
    how_often: "Daily at bedtime for 2-3 months",
    precautions: ["Only use on fully healed wounds", "Stop if skin becomes irritated", "Results take time - be patient"],
    benefits: ["Rosehip oil promotes collagen synthesis", "Vitamin E fades scar pigmentation", "Keeps scar tissue soft"],
    related_diseases: ["scar reduction", "wound healing", "post-surgery"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-454",
    problem: "Bed Sores (Pressure Ulcer)",
    title: "Turmeric Coconut Oil Healing Balm",
    ingredients: [{ name: "Coconut oil", quantity: "2 tablespoons" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Neem oil", quantity: "5 drops" }],
    method: ["Melt coconut oil gently", "Mix in turmeric powder and neem oil", "Let it cool to form a balm", "Apply on cleaned pressure sore areas"],
    how_often: "2-3 times daily after cleaning the area",
    precautions: ["Clean wound before each application", "Change position every 2 hours", "Seek medical care for deep sores"],
    benefits: ["Coconut oil moisturizes and protects", "Turmeric fights infection", "Neem prevents bacterial growth"],
    related_diseases: ["bed sores", "pressure ulcer", "wound care"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-455",
    problem: "Varicose Veins",
    title: "Apple Cider Vinegar Leg Wrap",
    ingredients: [{ name: "Apple cider vinegar", quantity: "½ cup" }, { name: "Water", quantity: "½ cup" }, { name: "Cotton cloth strips", quantity: "2-3" }],
    method: ["Dilute ACV with equal parts water", "Soak cloth strips in the mixture", "Wrap around legs with varicose veins", "Elevate legs and leave for 30 minutes"],
    how_often: "Once daily, preferably in evening",
    precautions: ["Do not apply on broken skin", "Keep legs elevated during treatment", "See vascular doctor for severe cases"],
    benefits: ["ACV improves blood circulation", "Reduces swelling and heaviness", "Natural anti-inflammatory"],
    related_diseases: ["varicose veins", "leg pain", "circulation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-456",
    problem: "Snoring",
    title: "Brahmi Ghee Nasal Drops",
    ingredients: [{ name: "Brahmi ghee", quantity: "2 drops per nostril" }],
    method: ["Lie down with head tilted back", "Put 2 drops of brahmi ghee in each nostril", "Inhale gently to draw it up", "Rest for 5 minutes"],
    how_often: "Daily at bedtime",
    precautions: ["Use pharmaceutical grade brahmi ghee", "Don't use if nasal infection present", "See ENT for sleep apnea"],
    benefits: ["Lubricates nasal passages", "Reduces nasal congestion", "Traditional Nasya therapy for snoring"],
    related_diseases: ["snoring", "nasal congestion", "sleep"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-457",
    problem: "Sleep Apnea Support",
    title: "Honey & Cinnamon Sleep Drink",
    ingredients: [{ name: "Honey", quantity: "1 tablespoon" }, { name: "Cinnamon powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Mix honey and cinnamon in warm water", "Stir well and drink 30 minutes before bed", "Sleep on your side, not back"],
    how_often: "Nightly",
    precautions: ["Not a substitute for CPAP if prescribed", "See sleep specialist for diagnosis", "Lose excess weight alongside"],
    benefits: ["Honey reduces throat inflammation", "Cinnamon helps open airways", "Promotes deeper sleep"],
    related_diseases: ["sleep apnea", "snoring", "sleep quality"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-458",
    problem: "Restless Leg Syndrome",
    title: "Lavender & Magnesium Leg Massage",
    ingredients: [{ name: "Magnesium oil spray", quantity: "5-6 sprays" }, { name: "Lavender essential oil", quantity: "3 drops" }, { name: "Coconut oil", quantity: "1 teaspoon" }],
    method: ["Spray magnesium oil on legs", "Mix lavender oil with coconut oil", "Massage legs with upward strokes for 10 minutes", "Wear loose pants and go to bed"],
    how_often: "Nightly before bed",
    precautions: ["Magnesium oil may tingle initially", "Avoid on cuts or rashes", "See neurologist for severe cases"],
    benefits: ["Magnesium relaxes muscles", "Lavender calms nervous system", "Massage improves circulation"],
    related_diseases: ["restless leg syndrome", "leg cramps", "sleep"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-459",
    problem: "Night Sweats",
    title: "Sage Tea Cooling Drink",
    ingredients: [{ name: "Dried sage leaves", quantity: "1 tablespoon" }, { name: "Hot water", quantity: "1 cup" }, { name: "Honey", quantity: "optional" }],
    method: ["Steep sage leaves in hot water for 10 minutes", "Strain and let cool", "Add honey if desired", "Drink 1-2 hours before bed"],
    how_often: "Nightly for 2-3 weeks",
    precautions: ["Avoid during pregnancy", "Not for epilepsy patients", "Reduce dose if dry mouth occurs"],
    benefits: ["Sage reduces excessive sweating", "Cools the body naturally", "Balances hormones"],
    related_diseases: ["night sweats", "menopause", "hormonal imbalance"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-460",
    problem: "Chronic Sinusitis",
    title: "Jal Neti (Nasal Irrigation) with Salt Water",
    ingredients: [{ name: "Neti pot", quantity: "1" }, { name: "Warm distilled water", quantity: "2 cups" }, { name: "Non-iodized salt", quantity: "1 teaspoon" }],
    method: ["Dissolve salt in warm distilled water", "Fill the neti pot", "Tilt head sideways over sink", "Pour water through one nostril, let it flow out the other", "Repeat on other side"],
    how_often: "Once or twice daily during sinusitis",
    precautions: ["Use only distilled or boiled water", "Clean neti pot after each use", "Stop if ear pain occurs"],
    benefits: ["Flushes out allergens and mucus", "Reduces sinus pressure", "Traditional Ayurvedic practice"],
    related_diseases: ["sinusitis", "nasal congestion", "allergies"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-461",
    problem: "Dry Mouth",
    title: "Fennel Seed Mouth Refresher",
    ingredients: [{ name: "Fennel seeds (saunf)", quantity: "1 teaspoon" }, { name: "Cardamom", quantity: "1 pod" }],
    method: ["Chew fennel seeds and cardamom slowly", "Let saliva flow naturally", "Continue chewing for 2-3 minutes", "Can swallow or spit"],
    how_often: "After meals and whenever dry mouth occurs",
    precautions: ["Avoid if allergic to fennel", "Don't chew too aggressively", "Stay hydrated alongside"],
    benefits: ["Stimulates saliva production", "Freshens breath naturally", "Cardamom has antimicrobial properties"],
    related_diseases: ["dry mouth", "bad breath", "oral health"],
    difficulty: "Easy",
    preparation_time: "1 minute",
    region: "india" as RemedyRegion
  },
  {
    id: "new-462",
    problem: "Canker Sores",
    title: "Turmeric Honey Paste for Canker Sores",
    ingredients: [{ name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Mix turmeric with honey to form paste", "Apply directly on canker sore", "Leave for 5-10 minutes", "Avoid eating for 15 minutes after"],
    how_often: "3-4 times daily until healed",
    precautions: ["Will stain temporarily", "Use raw honey for best effect", "See doctor for recurring sores"],
    benefits: ["Turmeric is antibacterial and anti-inflammatory", "Honey speeds healing", "Provides pain relief"],
    related_diseases: ["canker sores", "mouth ulcers", "oral health"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-463",
    problem: "Burning Feet Syndrome",
    title: "Cold Milk & Rose Water Foot Soak",
    ingredients: [{ name: "Cold milk", quantity: "2 cups" }, { name: "Rose water", quantity: "2 tablespoons" }, { name: "Cold water", quantity: "1 basin" }],
    method: ["Add cold milk and rose water to water basin", "Soak feet for 20 minutes", "Pat dry gently", "Apply coconut oil on soles after"],
    how_often: "Daily before bed",
    precautions: ["Rule out diabetes and vitamin B deficiency", "Keep feet clean and dry", "See doctor for persistent burning"],
    benefits: ["Cold milk cools burning sensation", "Rose water soothes nerve endings", "Provides instant relief"],
    related_diseases: ["burning feet", "neuropathy", "diabetes"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-464",
    problem: "Chilblains (Winter Toe Pain)",
    title: "Mustard Oil & Camphor Toe Massage",
    ingredients: [{ name: "Mustard oil", quantity: "2 tablespoons" }, { name: "Camphor", quantity: "small piece" }],
    method: ["Dissolve camphor in warm mustard oil", "Gently massage toes and affected areas", "Wrap feet in warm socks after", "Do before bedtime"],
    how_often: "Daily during winter",
    precautions: ["Don't apply on broken skin", "Keep feet warm throughout day", "See doctor if skin turns dark"],
    benefits: ["Mustard oil generates warmth", "Camphor improves circulation", "Reduces pain and swelling"],
    related_diseases: ["chilblains", "cold feet", "poor circulation"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-465",
    problem: "Ingrown Toenail",
    title: "Warm Salt Water & Neem Toe Soak",
    ingredients: [{ name: "Warm water", quantity: "1 basin" }, { name: "Rock salt", quantity: "2 tablespoons" }, { name: "Neem leaves", quantity: "handful" }],
    method: ["Boil neem leaves in water for 5 minutes", "Add rock salt and let cool to warm", "Soak affected toe for 15-20 minutes", "Gently lift nail edge with cotton after softening"],
    how_often: "Twice daily",
    precautions: ["Don't cut nail too short", "Wear open-toed shoes", "See podiatrist if infected"],
    benefits: ["Salt water reduces swelling", "Neem prevents infection", "Softens nail for easier management"],
    related_diseases: ["ingrown toenail", "toe pain", "nail care"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-466",
    problem: "Anal Fissure",
    title: "Ghee & Aloe Vera Soothing Application",
    ingredients: [{ name: "Pure ghee", quantity: "1 teaspoon" }, { name: "Aloe vera gel", quantity: "1 teaspoon" }],
    method: ["Mix ghee with fresh aloe vera gel", "Apply gently on the fissure area", "Best applied after warm sitz bath", "Leave as long as comfortable"],
    how_often: "2-3 times daily after each bowel movement",
    precautions: ["Keep area clean", "Eat high-fiber diet", "See doctor if bleeding doesn't stop"],
    benefits: ["Ghee lubricates and heals tissue", "Aloe vera reduces pain and inflammation", "Promotes faster healing"],
    related_diseases: ["anal fissure", "piles", "constipation"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-467",
    problem: "Fistula Support",
    title: "Triphala & Neem Sitz Bath",
    ingredients: [{ name: "Triphala powder", quantity: "2 tablespoons" }, { name: "Neem leaves", quantity: "handful" }, { name: "Warm water", quantity: "1 basin" }],
    method: ["Boil neem leaves in water for 10 minutes", "Add triphala powder and stir", "Let cool to warm temperature", "Sit in the basin for 20 minutes"],
    how_often: "Twice daily",
    precautions: ["Fistula often needs medical intervention", "Keep the area clean and dry", "See surgeon for persistent cases"],
    benefits: ["Triphala has wound-healing properties", "Neem prevents infection", "Warm sitz bath reduces pain"],
    related_diseases: ["fistula", "abscess", "rectal health"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-468",
    problem: "Coccyx Pain (Tailbone)",
    title: "Warm Castor Oil Tailbone Compress",
    ingredients: [{ name: "Castor oil", quantity: "2 tablespoons" }, { name: "Warm cloth", quantity: "1" }, { name: "Hot water bottle", quantity: "1" }],
    method: ["Soak cloth in warm castor oil", "Place over the coccyx/tailbone area", "Put hot water bottle on top", "Rest for 30 minutes lying on side"],
    how_often: "Daily, especially after prolonged sitting",
    precautions: ["Use cushion while sitting", "Avoid hard surfaces", "See orthopedic if injury-related"],
    benefits: ["Castor oil reduces deep inflammation", "Heat improves circulation to area", "Relieves chronic tailbone pain"],
    related_diseases: ["coccyx pain", "tailbone injury", "sitting pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-469",
    problem: "Keloid Scar",
    title: "Lemon Juice & Aloe Vera Keloid Treatment",
    ingredients: [{ name: "Fresh lemon juice", quantity: "1 teaspoon" }, { name: "Aloe vera gel", quantity: "2 tablespoons" }],
    method: ["Mix lemon juice with aloe vera gel", "Apply on keloid scar", "Massage gently for 3-5 minutes", "Leave for 30 minutes then wash"],
    how_often: "Twice daily for 2-3 months",
    precautions: ["Avoid sun exposure after applying", "Stop if irritation occurs", "Results are gradual"],
    benefits: ["Lemon acid helps flatten keloid", "Aloe softens scar tissue", "Regular use reduces scar size"],
    related_diseases: ["keloid", "scar", "skin healing"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-470",
    problem: "Stretch Marks",
    title: "Coconut Oil & Vitamin E Belly Massage",
    ingredients: [{ name: "Virgin coconut oil", quantity: "2 tablespoons" }, { name: "Vitamin E capsule", quantity: "1" }, { name: "Aloe vera gel", quantity: "1 tablespoon" }],
    method: ["Mix coconut oil with vitamin E and aloe vera", "Massage on stretch marks in circular motions", "Continue for 10 minutes", "Leave overnight"],
    how_often: "Daily for 3-6 months",
    precautions: ["Best when marks are still red/new", "Be consistent for results", "Safe during pregnancy"],
    benefits: ["Coconut oil boosts collagen production", "Vitamin E repairs skin cells", "Aloe improves skin elasticity"],
    related_diseases: ["stretch marks", "pregnancy skin care", "weight changes"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-471",
    problem: "Corns & Calluses",
    title: "Lemon & Castor Oil Corn Softener",
    ingredients: [{ name: "Lemon slice", quantity: "1" }, { name: "Castor oil", quantity: "1 teaspoon" }, { name: "Bandage", quantity: "1" }],
    method: ["Apply castor oil on the corn", "Place lemon slice directly on top", "Secure with bandage", "Leave overnight and remove in morning"],
    how_often: "Nightly for 1-2 weeks",
    precautions: ["Avoid if diabetic without doctor approval", "Don't cut corns yourself", "Wear proper fitting shoes"],
    benefits: ["Lemon acid softens dead skin", "Castor oil moisturizes and heals", "Corn naturally peels away"],
    related_diseases: ["corns", "calluses", "foot care"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-472",
    problem: "Rosacea Support",
    title: "Green Tea & Aloe Vera Cooling Mask",
    ingredients: [{ name: "Cooled green tea", quantity: "2 tablespoons" }, { name: "Aloe vera gel", quantity: "2 tablespoons" }, { name: "Cucumber juice", quantity: "1 tablespoon" }],
    method: ["Mix green tea, aloe vera and cucumber juice", "Apply on affected facial areas", "Leave for 15-20 minutes", "Rinse with cool water"],
    how_often: "Daily in the evening",
    precautions: ["Patch test first", "Avoid hot water on face", "Use mineral sunscreen daily"],
    benefits: ["Green tea reduces redness", "Aloe soothes inflamed skin", "Cucumber cools and hydrates"],
    related_diseases: ["rosacea", "facial redness", "skin sensitivity"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-473",
    problem: "Melasma (Pigmentation)",
    title: "Turmeric Lemon Yogurt Brightening Pack",
    ingredients: [{ name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Lemon juice", quantity: "1 teaspoon" }, { name: "Plain yogurt", quantity: "2 tablespoons" }],
    method: ["Mix all ingredients into smooth paste", "Apply evenly on pigmented areas", "Leave for 15 minutes", "Wash off with lukewarm water and apply sunscreen"],
    how_often: "3 times per week",
    precautions: ["Always apply sunscreen after", "Lemon can cause sensitivity in sun", "Takes 4-6 weeks for visible results"],
    benefits: ["Turmeric inhibits melanin production", "Lactic acid in yogurt gently exfoliates", "Lemon brightens dark patches"],
    related_diseases: ["melasma", "pigmentation", "dark spots"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-474",
    problem: "Interstitial Cystitis Support",
    title: "Coconut Water & Coriander Soothing Drink",
    ingredients: [{ name: "Fresh coconut water", quantity: "1 glass" }, { name: "Coriander seeds", quantity: "1 teaspoon" }, { name: "Cumin powder", quantity: "¼ teaspoon" }],
    method: ["Soak coriander seeds in coconut water for 2 hours", "Strain and add cumin powder", "Drink at room temperature"],
    how_often: "Twice daily",
    precautions: ["Avoid acidic foods and caffeine", "Stay well hydrated", "See urologist for diagnosis"],
    benefits: ["Coconut water is naturally alkaline", "Coriander reduces bladder inflammation", "Cumin is cooling for urinary tract"],
    related_diseases: ["interstitial cystitis", "bladder pain", "UTI"],
    difficulty: "Easy",
    preparation_time: "5 minutes (plus 2 hours soaking)",
    region: "india" as RemedyRegion
  },
  {
    id: "new-475",
    problem: "Prostatitis Support",
    title: "Pumpkin Seed & Turmeric Remedy",
    ingredients: [{ name: "Raw pumpkin seeds", quantity: "2 tablespoons" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Eat a handful of raw pumpkin seeds", "Drink warm turmeric water after", "Chew seeds thoroughly"],
    how_often: "Daily",
    precautions: ["See urologist for proper diagnosis", "Not a replacement for antibiotics", "Stay hydrated"],
    benefits: ["Pumpkin seeds contain zinc for prostate", "Turmeric reduces prostate inflammation", "Natural urinary flow support"],
    related_diseases: ["prostatitis", "prostate health", "urinary"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-476",
    problem: "Endometriosis Support",
    title: "Ginger Turmeric Anti-Inflammatory Tea",
    ingredients: [{ name: "Fresh ginger", quantity: "1 inch" }, { name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Cinnamon stick", quantity: "1 small" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Boil ginger and cinnamon in water for 10 minutes", "Add turmeric powder and stir", "Strain and add honey", "Drink warm"],
    how_often: "2-3 times daily, especially during periods",
    precautions: ["Consult gynecologist for treatment plan", "Avoid excess ginger during heavy bleeding", "Not a substitute for medical care"],
    benefits: ["Ginger reduces prostaglandins (pain chemicals)", "Turmeric inhibits endometrial tissue growth", "Cinnamon improves blood flow"],
    related_diseases: ["endometriosis", "period pain", "women's health"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-477",
    problem: "Polycystic Ovary (PCOS)",
    title: "Spearmint Tea for PCOS",
    ingredients: [{ name: "Dried spearmint leaves", quantity: "1 tablespoon" }, { name: "Hot water", quantity: "1 cup" }, { name: "Honey", quantity: "optional" }],
    method: ["Steep spearmint leaves in hot water for 10 minutes", "Strain and add honey if desired", "Drink warm"],
    how_often: "Twice daily for at least 30 days",
    precautions: ["May interact with hormone medications", "Not during pregnancy", "Consult gynecologist"],
    benefits: ["Spearmint reduces androgens (male hormones)", "Helps with hirsutism (excess hair)", "Antioxidant properties"],
    related_diseases: ["PCOS", "hormonal imbalance", "irregular periods"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-478",
    problem: "Ovarian Cyst Support",
    title: "Castor Oil Abdominal Pack",
    ingredients: [{ name: "Castor oil", quantity: "3 tablespoons" }, { name: "Flannel cloth", quantity: "1" }, { name: "Hot water bottle", quantity: "1" }, { name: "Plastic wrap", quantity: "1 piece" }],
    method: ["Soak flannel cloth in castor oil", "Place on lower abdomen over ovary area", "Cover with plastic wrap", "Place hot water bottle on top for 45-60 minutes"],
    how_often: "3-4 times per week (not during periods)",
    precautions: ["Not during menstruation", "Not during pregnancy", "See doctor for cysts larger than 5cm"],
    benefits: ["Castor oil promotes lymphatic drainage", "Heat increases blood flow", "May reduce cyst size naturally"],
    related_diseases: ["ovarian cyst", "PCOS", "pelvic pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-479",
    problem: "Menstrual Migraine",
    title: "Feverfew & Ginger Pre-Period Tea",
    ingredients: [{ name: "Dried feverfew leaves", quantity: "1 teaspoon" }, { name: "Fresh ginger", quantity: "½ inch" }, { name: "Peppermint leaves", quantity: "4-5" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Boil ginger in water for 5 minutes", "Add feverfew and peppermint leaves", "Steep for 5 more minutes", "Strain and add honey"],
    how_often: "Start 3 days before expected period, twice daily",
    precautions: ["Feverfew may cause mouth ulcers in some", "Avoid during pregnancy", "Stop if allergic reaction occurs"],
    benefits: ["Feverfew prevents migraine onset", "Ginger reduces nausea", "Peppermint relieves headache tension"],
    related_diseases: ["menstrual migraine", "period headache", "PMS"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-480",
    problem: "Hot Flashes (Menopause)",
    title: "Shatavari Cooling Drink",
    ingredients: [{ name: "Shatavari powder", quantity: "½ teaspoon" }, { name: "Cool milk or coconut milk", quantity: "1 glass" }, { name: "Mishri (rock sugar)", quantity: "1 teaspoon" }],
    method: ["Mix shatavari powder in cool milk", "Add mishri and stir well", "Drink at room temperature or slightly cool"],
    how_often: "Once or twice daily",
    precautions: ["Consult doctor if on hormone therapy", "Avoid if estrogen-sensitive conditions", "Start with smaller dose"],
    benefits: ["Shatavari is a natural phytoestrogen", "Cools the body", "Reduces hot flash frequency"],
    related_diseases: ["hot flashes", "menopause", "hormonal balance"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-481",
    problem: "Iron Deficiency Anemia",
    title: "Jaggery & Black Sesame Iron Balls",
    ingredients: [{ name: "Black sesame seeds (til)", quantity: "2 tablespoons" }, { name: "Jaggery (gur)", quantity: "2 tablespoons" }, { name: "Ghee", quantity: "1 teaspoon" }],
    method: ["Lightly roast sesame seeds", "Warm jaggery with ghee until soft", "Mix sesame seeds into jaggery", "Roll into small balls when cool enough"],
    how_often: "1-2 balls daily",
    precautions: ["Diabetics should limit jaggery", "Excessive sesame may cause loose stools", "Continue iron supplements as prescribed"],
    benefits: ["Black sesame is rich in iron", "Jaggery enhances iron absorption", "Ghee aids nutrient assimilation"],
    related_diseases: ["anemia", "iron deficiency", "weakness"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-482",
    problem: "Vitamin D Deficiency Support",
    title: "Sesame Seed & Jaggery Ladoo",
    ingredients: [{ name: "White sesame seeds", quantity: "1 cup" }, { name: "Jaggery", quantity: "½ cup" }, { name: "Cardamom powder", quantity: "¼ teaspoon" }, { name: "Ghee", quantity: "1 tablespoon" }],
    method: ["Dry roast sesame seeds until golden", "Melt jaggery with ghee on low heat", "Mix in sesame seeds and cardamom", "Shape into ladoos while warm"],
    how_often: "1-2 ladoos daily",
    precautions: ["Also get morning sunlight exposure", "Not a substitute for supplements", "Diabetics should limit intake"],
    benefits: ["Sesame provides calcium and vitamin D", "Jaggery is iron-rich", "Traditional winter energy food"],
    related_diseases: ["vitamin D deficiency", "weak bones", "calcium"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-483",
    problem: "B12 Deficiency Support",
    title: "Moringa & Amla Vitamin Drink",
    ingredients: [{ name: "Moringa powder", quantity: "1 teaspoon" }, { name: "Amla juice", quantity: "2 tablespoons" }, { name: "Warm water", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Mix moringa powder in warm water", "Add amla juice and honey", "Stir well and drink on empty stomach"],
    how_often: "Daily in the morning",
    precautions: ["Vegetarian B12 sources are limited", "May need B12 supplements alongside", "Consult doctor for severe deficiency"],
    benefits: ["Moringa is nutrient-dense superfood", "Amla provides vitamin C for absorption", "Supports nervous system health"],
    related_diseases: ["B12 deficiency", "fatigue", "nerve health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-484",
    problem: "Gastritis",
    title: "Amla Juice & Honey Stomach Healer",
    ingredients: [{ name: "Fresh amla juice", quantity: "2 tablespoons" }, { name: "Honey", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "½ glass" }],
    method: ["Mix amla juice in warm water", "Add honey and stir", "Drink on empty stomach", "Wait 30 minutes before eating"],
    how_often: "Twice daily for 2-3 weeks",
    precautions: ["Avoid spicy and fried foods", "Don't drink on very empty stomach if severe", "See gastroenterologist for chronic cases"],
    benefits: ["Amla heals stomach lining", "Honey has antibacterial action", "Reduces stomach acid naturally"],
    related_diseases: ["gastritis", "acidity", "stomach inflammation"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-485",
    problem: "Fatty Liver",
    title: "Turmeric Lemon Liver Detox Water",
    ingredients: [{ name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Lemon juice", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "1 glass" }, { name: "Black pepper", quantity: "pinch" }],
    method: ["Add turmeric to warm water", "Squeeze fresh lemon juice", "Add black pepper for better absorption", "Drink on empty stomach"],
    how_often: "Daily morning for 4-6 weeks",
    precautions: ["Avoid alcohol completely", "Reduce sugar and processed foods", "Get liver tests done regularly"],
    benefits: ["Curcumin protects liver cells", "Lemon aids fat metabolism", "Black pepper enhances curcumin absorption 2000%"],
    related_diseases: ["fatty liver", "liver health", "detox"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-486",
    problem: "IBS (Irritable Bowel)",
    title: "Fennel & Peppermint Digestive Tea",
    ingredients: [{ name: "Fennel seeds", quantity: "1 teaspoon" }, { name: "Peppermint leaves", quantity: "5-6" }, { name: "Hot water", quantity: "1 cup" }, { name: "Honey", quantity: "optional" }],
    method: ["Lightly crush fennel seeds", "Add fennel and peppermint to hot water", "Steep for 8-10 minutes", "Strain and add honey if desired"],
    how_often: "After meals, 2-3 times daily",
    precautions: ["Peppermint may worsen GERD", "Identify and avoid trigger foods", "Keep a food diary"],
    benefits: ["Fennel reduces bloating and gas", "Peppermint relaxes intestinal muscles", "Reduces IBS cramps naturally"],
    related_diseases: ["IBS", "bloating", "gas", "digestion"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-487",
    problem: "Hemorrhagic Cough Support",
    title: "Pomegranate Juice & Honey Remedy",
    ingredients: [{ name: "Fresh pomegranate juice", quantity: "½ cup" }, { name: "Honey", quantity: "1 tablespoon" }],
    method: ["Extract fresh pomegranate juice", "Mix with honey", "Take 2 tablespoons at a time", "Let it coat the throat"],
    how_often: "3-4 times daily",
    precautions: ["See doctor immediately for blood in cough", "This is supportive care only", "TB must be ruled out"],
    benefits: ["Pomegranate has hemostatic properties", "Rich in antioxidants", "Honey soothes irritated airways"],
    related_diseases: ["cough with blood", "respiratory", "throat"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-488",
    problem: "Thyroid Nodules Support",
    title: "Ashwagandha & Selenium-Rich Brazil Nut Remedy",
    ingredients: [{ name: "Ashwagandha powder", quantity: "½ teaspoon" }, { name: "Brazil nuts", quantity: "2" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Eat 2 Brazil nuts (chew well)", "Mix ashwagandha in warm water", "Drink the mixture after eating nuts"],
    how_often: "Daily in the morning",
    precautions: ["Don't exceed 3 Brazil nuts daily (excess selenium)", "Consult endocrinologist", "Monitor thyroid levels regularly"],
    benefits: ["Brazil nuts provide selenium for thyroid", "Ashwagandha supports thyroid hormone production", "May help regulate thyroid function"],
    related_diseases: ["thyroid nodules", "thyroid", "hypothyroidism"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-489",
    problem: "Acid Reflux (GERD)",
    title: "Alkaline Cumin Coriander Fennel Water",
    ingredients: [{ name: "Cumin seeds", quantity: "1 teaspoon" }, { name: "Coriander seeds", quantity: "1 teaspoon" }, { name: "Fennel seeds", quantity: "1 teaspoon" }, { name: "Water", quantity: "2 glasses" }],
    method: ["Boil all seeds together in water for 10 minutes", "Let it cool and strain", "Drink throughout the day at room temperature"],
    how_often: "Daily, sip throughout the day",
    precautions: ["Avoid eating 3 hours before bed", "Elevate head while sleeping", "Avoid trigger foods"],
    benefits: ["Alkalizes stomach acid", "Traditional Ayurvedic CCF tea", "Improves overall digestion"],
    related_diseases: ["GERD", "acid reflux", "heartburn"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-490",
    problem: "Food Allergy Support",
    title: "Triphala & Turmeric Gut Healing Drink",
    ingredients: [{ name: "Triphala powder", quantity: "½ teaspoon" }, { name: "Turmeric powder", quantity: "¼ teaspoon" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Mix triphala and turmeric in warm water", "Stir well", "Drink before bedtime"],
    how_often: "Daily at bedtime for 4-6 weeks",
    precautions: ["Identify and avoid allergen foods", "May cause loose stools initially", "See allergist for anaphylaxis-prone allergies"],
    benefits: ["Triphala heals gut lining", "Turmeric reduces intestinal inflammation", "Stronger gut barrier reduces allergic reactions"],
    related_diseases: ["food allergy", "gut health", "immune system"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-491",
    problem: "Lupus Support",
    title: "Turmeric & Omega-3 Anti-Inflammatory Protocol",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Flaxseed oil", quantity: "1 tablespoon" }, { name: "Black pepper", quantity: "pinch" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Take flaxseed oil directly (1 tablespoon)", "Follow with warm turmeric water with black pepper", "Take with breakfast"],
    how_often: "Daily as supportive care",
    precautions: ["Must continue prescribed lupus medications", "Avoid sun exposure", "Monitor symptoms closely"],
    benefits: ["Turmeric is a powerful anti-inflammatory", "Omega-3 from flaxseed reduces flares", "Supports immune modulation"],
    related_diseases: ["lupus", "autoimmune", "inflammation"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-492",
    problem: "Chronic Kidney Disease Support",
    title: "Punarnava & Gokshura Kidney Tea",
    ingredients: [{ name: "Punarnava powder", quantity: "½ teaspoon" }, { name: "Gokshura powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 glass" }],
    method: ["Mix both powders in warm water", "Stir well and let steep for 5 minutes", "Drink on empty stomach"],
    how_often: "Once daily in the morning",
    precautions: ["Must consult nephrologist first", "Monitor creatinine levels", "Not for dialysis patients without approval"],
    benefits: ["Punarnava supports kidney regeneration", "Gokshura is a natural diuretic", "Traditional Ayurvedic kidney support"],
    related_diseases: ["kidney disease", "kidney health", "urinary"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-493",
    problem: "Pancreatitis Support",
    title: "Aloe Vera & Turmeric Soothing Drink",
    ingredients: [{ name: "Aloe vera juice", quantity: "2 tablespoons" }, { name: "Turmeric powder", quantity: "¼ teaspoon" }, { name: "Cool water", quantity: "1 glass" }],
    method: ["Mix aloe vera juice in cool water", "Add turmeric powder", "Stir well and drink slowly"],
    how_often: "Once daily on empty stomach",
    precautions: ["Pancreatitis needs medical care", "Avoid alcohol and fatty foods completely", "Eat small frequent meals"],
    benefits: ["Aloe vera soothes digestive tract", "Turmeric reduces pancreatic inflammation", "Gentle on the digestive system"],
    related_diseases: ["pancreatitis", "digestive health", "pain"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-494",
    problem: "Raynaud's Disease Support",
    title: "Ginger & Cinnamon Warming Tea",
    ingredients: [{ name: "Fresh ginger", quantity: "1 inch" }, { name: "Cinnamon stick", quantity: "1" }, { name: "Cayenne pepper", quantity: "tiny pinch" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Boil ginger and cinnamon in water for 10 minutes", "Add tiny pinch of cayenne pepper", "Strain and add honey", "Drink warm"],
    how_often: "2-3 times daily, especially in cold weather",
    precautions: ["Start with very little cayenne", "Avoid if you have ulcers", "Keep extremities warm"],
    benefits: ["Ginger and cinnamon improve circulation", "Cayenne opens blood vessels", "Warms the body from inside"],
    related_diseases: ["Raynaud's disease", "poor circulation", "cold extremities"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-495",
    problem: "Edema (Water Retention)",
    title: "Dandelion & Parsley Detox Tea",
    ingredients: [{ name: "Dried dandelion root", quantity: "1 teaspoon" }, { name: "Fresh parsley", quantity: "1 tablespoon" }, { name: "Hot water", quantity: "1 cup" }, { name: "Lemon juice", quantity: "squeeze" }],
    method: ["Steep dandelion root and parsley in hot water for 10 minutes", "Strain and add lemon juice", "Drink warm"],
    how_often: "2-3 times daily",
    precautions: ["Consult doctor if on diuretic medications", "Rule out heart or kidney causes", "Reduce salt intake"],
    benefits: ["Natural mild diuretic", "Parsley supports kidney function", "Reduces bloating and puffiness"],
    related_diseases: ["edema", "water retention", "swelling"],
    difficulty: "Easy",
    preparation_time: "12 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "new-496",
    problem: "Peripheral Neuropathy",
    title: "Sesame Oil & Ashwagandha Foot Massage",
    ingredients: [{ name: "Sesame oil", quantity: "3 tablespoons" }, { name: "Ashwagandha powder", quantity: "½ teaspoon" }],
    method: ["Warm sesame oil gently", "Mix in ashwagandha powder", "Massage feet and legs for 15 minutes", "Wear warm socks after"],
    how_often: "Daily before bed",
    precautions: ["Check for wounds before massaging (diabetic feet)", "Oil should be warm not hot", "Consult neurologist for treatment"],
    benefits: ["Sesame oil nourishes nerves", "Ashwagandha supports nerve regeneration", "Massage improves blood flow to extremities"],
    related_diseases: ["neuropathy", "nerve damage", "diabetes"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-497",
    problem: "Chronic Fatigue Syndrome",
    title: "Ashwagandha Shatavari Energy Tonic",
    ingredients: [{ name: "Ashwagandha powder", quantity: "½ teaspoon" }, { name: "Shatavari powder", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Mix both powders in warm milk", "Add honey and stir well", "Drink in the morning after breakfast"],
    how_often: "Daily for 2-3 months",
    precautions: ["Consult doctor to rule out other conditions", "Takes 2-4 weeks to show effects", "Not during pregnancy"],
    benefits: ["Ashwagandha is a proven adaptogen", "Shatavari supports hormonal balance", "Gradually restores energy levels"],
    related_diseases: ["chronic fatigue", "exhaustion", "weakness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-498",
    problem: "Anxiety Disorder Support",
    title: "Brahmi & Shankhpushpi Calming Tea",
    ingredients: [{ name: "Brahmi powder", quantity: "½ teaspoon" }, { name: "Shankhpushpi powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Mix both powders in warm water", "Add honey and stir well", "Drink slowly, practicing deep breathing"],
    how_often: "Twice daily, morning and evening",
    precautions: ["Not a replacement for therapy or medication", "May cause drowsiness", "Consult psychiatrist for severe anxiety"],
    benefits: ["Brahmi calms the nervous system", "Shankhpushpi reduces mental agitation", "Traditional medhya rasayana (brain tonic)"],
    related_diseases: ["anxiety", "stress", "mental health"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-499",
    problem: "Depression Support",
    title: "Saffron Milk (Kesar Doodh) Mood Booster",
    ingredients: [{ name: "Saffron strands", quantity: "4-5" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Cardamom powder", quantity: "pinch" }],
    method: ["Soak saffron strands in warm milk for 5 minutes", "Add honey and cardamom", "Stir gently and drink warm", "Best taken at bedtime"],
    how_often: "Daily at bedtime",
    precautions: ["Use authentic saffron only", "Not a substitute for therapy/medication", "Excessive saffron is harmful during pregnancy"],
    benefits: ["Saffron increases serotonin levels", "Clinically proven mood enhancer", "Improves sleep quality"],
    related_diseases: ["depression", "mood disorders", "mental health"],
    difficulty: "Easy",
    preparation_time: "7 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "new-500",
    problem: "Insomnia (Chronic)",
    title: "Jatamansi & Nutmeg Sleep Remedy",
    ingredients: [{ name: "Jatamansi powder", quantity: "¼ teaspoon" }, { name: "Nutmeg (grated)", quantity: "pinch" }, { name: "Warm milk", quantity: "1 glass" }, { name: "Ghee", quantity: "½ teaspoon" }],
    method: ["Add jatamansi powder and nutmeg to warm milk", "Add ghee and stir well", "Drink 30 minutes before bed", "Avoid screens after drinking"],
    how_often: "Daily at bedtime for 3-4 weeks",
    precautions: ["Start with smaller dose of jatamansi", "Nutmeg in excess is toxic - use only a pinch", "Consult doctor if insomnia persists"],
    benefits: ["Jatamansi is Ayurveda's premier sleep herb", "Nutmeg has natural sedative properties", "Ghee helps herbs absorb better"],
    related_diseases: ["insomnia", "sleep disorders", "anxiety"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  // ===== 50 NEW REMEDIES: Eye Health, ENT, Neurological =====
  {
    id: "eye-501",
    problem: "Eye Strain (Digital)",
    title: "Rose Water Eye Compress",
    ingredients: [{ name: "Rose water", quantity: "2 tablespoons" }, { name: "Cotton pads", quantity: "2" }],
    method: ["Soak cotton pads in chilled rose water", "Lie down and place on closed eyes", "Relax for 15-20 minutes", "Remove and gently pat dry"],
    how_often: "2-3 times daily during heavy screen use",
    precautions: ["Use pure rose water only", "Avoid if allergic to roses", "Keep eyes closed during application"],
    benefits: ["Reduces eye fatigue and redness", "Cools and soothes tired eyes", "Anti-inflammatory properties"],
    related_diseases: ["eye strain", "digital fatigue"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-502",
    problem: "Dry Eyes",
    title: "Ghee Eye Drops (Netra Tarpana)",
    ingredients: [{ name: "Pure cow ghee", quantity: "1 drop per eye" }, { name: "Triphala water", quantity: "for washing" }],
    method: ["Warm ghee slightly to body temperature", "Lie down and place 1 drop in each eye", "Blink gently several times", "Rest with eyes closed for 5 minutes"],
    how_often: "Once daily at bedtime",
    precautions: ["Use only pure A2 cow ghee", "Ensure ghee is at body temperature", "Discontinue if irritation occurs"],
    benefits: ["Lubricates dry eyes naturally", "Nourishes eye tissues", "Ancient Ayurvedic practice"],
    related_diseases: ["dry eyes", "eye fatigue"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-503",
    problem: "Conjunctivitis (Pink Eye)",
    title: "Triphala Eye Wash",
    ingredients: [{ name: "Triphala powder", quantity: "1 teaspoon" }, { name: "Water", quantity: "1 cup" }, { name: "Clean cloth", quantity: "for straining" }],
    method: ["Soak triphala powder in water overnight", "Strain thoroughly through clean cloth", "Wash eyes with the clear liquid", "Pat dry with clean towel"],
    how_often: "2-3 times daily until infection clears",
    precautions: ["Strain very well to remove particles", "Use fresh preparation daily", "See doctor if no improvement in 3 days"],
    benefits: ["Natural antimicrobial properties", "Reduces eye inflammation", "Cleanses and soothes"],
    related_diseases: ["conjunctivitis", "eye infection"],
    difficulty: "Easy",
    preparation_time: "8 hours (soaking)",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-504",
    problem: "Weak Eyesight",
    title: "Amla & Honey Vision Tonic",
    ingredients: [{ name: "Fresh amla juice", quantity: "2 tablespoons" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Water", quantity: "½ cup" }],
    method: ["Mix amla juice with honey", "Add water and stir well", "Drink on empty stomach", "Follow with a glass of water"],
    how_often: "Daily in the morning for 3 months",
    precautions: ["Avoid during cough or cold", "Use raw honey only", "Not for diabetics without consultation"],
    benefits: ["Rich in Vitamin C for eye health", "Strengthens eye muscles", "Improves night vision"],
    related_diseases: ["weak eyesight", "myopia support"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-505",
    problem: "Eye Floaters",
    title: "Fennel Seed Eye Tonic",
    ingredients: [{ name: "Fennel seeds", quantity: "1 teaspoon" }, { name: "Almonds", quantity: "5" }, { name: "Mishri (rock sugar)", quantity: "1 teaspoon" }],
    method: ["Grind fennel seeds and almonds together", "Mix with mishri to make a powder", "Take 1 teaspoon with warm milk at bedtime", "Continue for 40 days"],
    how_often: "Daily at bedtime",
    precautions: ["Diabetics should skip mishri", "Store powder in airtight container", "Results take time - be patient"],
    benefits: ["Fennel is traditionally used for eye clarity", "Almonds nourish nerves", "Gradually reduces floater perception"],
    related_diseases: ["eye floaters", "eye health"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-506",
    problem: "Glaucoma Support",
    title: "Triphala & Punarnava Eye Support",
    ingredients: [{ name: "Triphala powder", quantity: "½ teaspoon" }, { name: "Punarnava powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 cup" }],
    method: ["Mix both powders in warm water", "Drink on empty stomach", "Also wash eyes with strained triphala water", "Continue as daily practice"],
    how_often: "Daily morning routine",
    precautions: ["This is supportive care only - continue medical treatment", "Monitor eye pressure regularly", "Consult Ayurvedic doctor for dosage"],
    benefits: ["Punarnava reduces fluid retention", "Triphala strengthens eye tissues", "Supports overall eye health"],
    related_diseases: ["glaucoma", "eye pressure"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-507",
    problem: "Cataract Support",
    title: "Honey & Onion Juice Eye Drops",
    ingredients: [{ name: "Fresh onion juice", quantity: "5 drops" }, { name: "Pure honey", quantity: "5 drops" }],
    method: ["Extract fresh onion juice", "Mix equal parts with pure honey", "Let settle for 2 hours", "Apply 1 drop per eye (if tolerated)"],
    how_often: "Once daily - under practitioner guidance only",
    precautions: ["ONLY under Ayurvedic practitioner supervision", "May cause stinging", "Not a replacement for surgery if needed", "Test tolerance first"],
    benefits: ["Traditional remedy for early-stage cataract", "Honey has clarifying properties", "Onion juice is rich in quercetin"],
    related_diseases: ["cataract", "eye cloudiness"],
    difficulty: "Advanced",
    preparation_time: "2 hours",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-508",
    problem: "Night Blindness",
    title: "Carrot & Ghee Night Vision Remedy",
    ingredients: [{ name: "Fresh carrot juice", quantity: "1 cup" }, { name: "Ghee", quantity: "1 teaspoon" }, { name: "Black pepper", quantity: "1 pinch" }],
    method: ["Warm carrot juice slightly", "Add ghee and black pepper", "Mix well and drink", "Take regularly in the evening"],
    how_often: "Daily in the evening for 2 months",
    precautions: ["Use organic carrots if possible", "Avoid excess - can cause skin yellowing", "Consult doctor for persistent night blindness"],
    benefits: ["Carrots rich in beta-carotene for night vision", "Ghee helps absorb fat-soluble vitamins", "Black pepper enhances absorption"],
    related_diseases: ["night blindness", "vitamin A deficiency"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "eye-509",
    problem: "Macular Degeneration Support",
    title: "Saffron Milk for Retinal Health",
    ingredients: [{ name: "Saffron strands", quantity: "4-5" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Soak saffron strands in warm milk for 5 minutes", "Add honey and stir", "Drink warm before bedtime", "Continue for at least 3 months"],
    how_often: "Daily at bedtime",
    precautions: ["Use genuine saffron only", "Expensive but worth it for eye health", "Continue medical monitoring"],
    benefits: ["Saffron contains crocin which protects retinal cells", "Research shows saffron may slow macular degeneration", "Also improves sleep quality"],
    related_diseases: ["macular degeneration", "retinal health"],
    difficulty: "Easy",
    preparation_time: "7 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "eye-510",
    problem: "Stye (Eye Lump)",
    title: "Warm Turmeric Compress",
    ingredients: [{ name: "Turmeric powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 cup" }, { name: "Clean cloth", quantity: "1" }],
    method: ["Mix turmeric in warm water", "Soak cloth in the solution", "Apply warm compress on closed eye with stye", "Hold for 10-15 minutes"],
    how_often: "3-4 times daily until stye resolves",
    precautions: ["Keep eyes closed during compress", "Turmeric may stain skin temporarily", "See doctor if stye doesn't resolve in a week"],
    benefits: ["Turmeric is antibacterial and anti-inflammatory", "Warm compress promotes drainage", "Reduces pain and swelling"],
    related_diseases: ["stye", "eye infection"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  // ENT Remedies
  {
    id: "ent-511",
    problem: "Ear Infection",
    title: "Garlic Oil Ear Drops",
    ingredients: [{ name: "Garlic cloves", quantity: "2" }, { name: "Sesame oil", quantity: "2 tablespoons" }],
    method: ["Crush garlic and heat gently in sesame oil", "Cool to lukewarm temperature", "Strain and put 2-3 drops in affected ear", "Lie on opposite side for 10 minutes"],
    how_often: "2-3 times daily for 5 days",
    precautions: ["Never put drops in ear with perforated eardrum", "Test temperature on wrist first", "See ENT doctor if pain worsens"],
    benefits: ["Garlic has strong antimicrobial properties", "Sesame oil soothes inflamed tissue", "Reduces ear pain naturally"],
    related_diseases: ["ear infection", "otitis"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-512",
    problem: "Tinnitus (Ear Ringing)",
    title: "Sesame Oil Ear Massage",
    ingredients: [{ name: "Warm sesame oil", quantity: "1 tablespoon" }, { name: "Camphor", quantity: "tiny pinch (optional)" }],
    method: ["Warm sesame oil slightly", "Massage around the ear and behind the ear lobe", "Gently insert 1-2 drops into ear canal", "Massage the tragus (ear flap) gently for 5 minutes"],
    how_often: "Daily before bedtime",
    precautions: ["Oil must be lukewarm, not hot", "Avoid if ear drum is perforated", "See ENT specialist for persistent tinnitus"],
    benefits: ["Sesame oil nourishes Vata-affected nerves", "Massage improves blood circulation to ear", "Traditional Ayurvedic Karna Purana technique"],
    related_diseases: ["tinnitus", "hearing issues"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-513",
    problem: "Sinusitis",
    title: "Nasya with Anu Taila",
    ingredients: [{ name: "Anu taila (or sesame oil)", quantity: "2-3 drops per nostril" }, { name: "Warm water", quantity: "for steam" }],
    method: ["Take steam for 5 minutes to open nasal passages", "Lie down with head tilted back", "Put 2-3 drops of oil in each nostril", "Sniff gently and rest for 5 minutes"],
    how_often: "Daily morning on empty stomach",
    precautions: ["Avoid immediately after meals", "Not recommended during acute cold", "Learn proper technique from practitioner first"],
    benefits: ["Lubricates and clears nasal passages", "Reduces sinus inflammation", "Prevents recurrent sinusitis"],
    related_diseases: ["sinusitis", "nasal congestion"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-514",
    problem: "Sore Throat",
    title: "Licorice & Ginger Throat Soother",
    ingredients: [{ name: "Licorice root (mulethi)", quantity: "1 small piece" }, { name: "Fresh ginger", quantity: "½ inch" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Water", quantity: "1 cup" }],
    method: ["Boil licorice root and ginger in water for 10 minutes", "Strain and cool slightly", "Add honey when lukewarm", "Sip slowly, gargling with each sip"],
    how_often: "3-4 times daily",
    precautions: ["Avoid licorice if you have high blood pressure", "Not for prolonged use (max 2 weeks)", "See doctor if throat pain persists"],
    benefits: ["Licorice soothes irritated throat lining", "Ginger fights infection", "Honey coats and protects throat"],
    related_diseases: ["sore throat", "pharyngitis"],
    difficulty: "Easy",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-515",
    problem: "Laryngitis (Voice Loss)",
    title: "Turmeric Milk Voice Recovery",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Ghee", quantity: "½ teaspoon" }, { name: "Black pepper", quantity: "1 pinch" }],
    method: ["Heat milk and add turmeric", "Add ghee and black pepper", "Stir well and drink warm", "Rest your voice completely after drinking"],
    how_often: "Twice daily - morning and bedtime",
    precautions: ["Complete voice rest is essential", "Avoid cold drinks and foods", "See ENT if voice doesn't return in a week"],
    benefits: ["Turmeric reduces vocal cord inflammation", "Ghee lubricates throat tissues", "Black pepper enhances turmeric absorption"],
    related_diseases: ["laryngitis", "voice loss", "hoarseness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-516",
    problem: "Nasal Polyps Support",
    title: "Turmeric & Black Pepper Nasal Rinse",
    ingredients: [{ name: "Turmeric powder", quantity: "¼ teaspoon" }, { name: "Warm saline water", quantity: "1 cup" }, { name: "Neti pot", quantity: "1" }],
    method: ["Dissolve turmeric in warm saline water", "Use neti pot for nasal irrigation", "Tilt head and pour through one nostril", "Let drain from other nostril"],
    how_often: "Once daily",
    precautions: ["Use distilled or boiled-cooled water only", "Do not use tap water", "Consult ENT for large polyps"],
    benefits: ["Turmeric shrinks inflamed tissue", "Saline clears mucus and allergens", "Regular practice prevents recurrence"],
    related_diseases: ["nasal polyps", "sinusitis"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-517",
    problem: "Hearing Loss Support",
    title: "Bilva Oil Ear Treatment",
    ingredients: [{ name: "Bilva (bael) leaf juice", quantity: "5 drops" }, { name: "Sesame oil", quantity: "1 tablespoon" }],
    method: ["Warm bilva juice mixed with sesame oil", "Cool to body temperature", "Put 2-3 drops in each ear", "Lie still for 10 minutes each side"],
    how_often: "Once daily for 21 days",
    precautions: ["Only for age-related mild hearing loss", "Not for sudden hearing loss (emergency)", "Consult audiologist regularly"],
    benefits: ["Traditional Ayurvedic ear nourishment", "Sesame oil rejuvenates nerve tissue", "May slow age-related decline"],
    related_diseases: ["hearing loss", "ear health"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-518",
    problem: "Vertigo",
    title: "Ginger & Lemon Vertigo Relief",
    ingredients: [{ name: "Fresh ginger juice", quantity: "1 teaspoon" }, { name: "Lemon juice", quantity: "1 teaspoon" }, { name: "Rock salt", quantity: "1 pinch" }, { name: "Water", quantity: "½ cup" }],
    method: ["Mix ginger juice and lemon juice in water", "Add rock salt", "Sip slowly when vertigo strikes", "Sit in a stable position while drinking"],
    how_often: "As needed during episodes, or daily for prevention",
    precautions: ["Sit or lie down during vertigo attacks", "Avoid sudden head movements", "Seek medical evaluation for recurrent vertigo"],
    benefits: ["Ginger settles inner ear disturbance", "Lemon refreshes and balances", "Quick relief from dizziness"],
    related_diseases: ["vertigo", "dizziness", "balance issues"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "ent-519",
    problem: "Nosebleed (Epistaxis)",
    title: "Durva Grass Juice Nasal Drops",
    ingredients: [{ name: "Fresh durva grass (doob)", quantity: "handful" }, { name: "Cold water", quantity: "for rinsing" }],
    method: ["Wash durva grass thoroughly", "Extract fresh juice by grinding", "Put 2-3 drops in nostrils", "Tilt head back and rest"],
    how_often: "During active nosebleed or daily for prevention",
    precautions: ["Use only fresh, clean grass", "See doctor for frequent nosebleeds", "Do not blow nose after application"],
    benefits: ["Durva grass has hemostatic properties", "Cools Pitta dosha", "Traditional remedy for recurrent nosebleeds"],
    related_diseases: ["nosebleed", "pitta imbalance"],
    difficulty: "Medium",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-520",
    problem: "Adenoid Swelling (Children)",
    title: "Turmeric Milk with Tulsi",
    ingredients: [{ name: "Turmeric", quantity: "½ teaspoon" }, { name: "Tulsi leaves", quantity: "5-6" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Boil tulsi leaves in milk for 5 minutes", "Add turmeric and stir", "Strain and cool slightly", "Add honey and give to child"],
    how_often: "Twice daily for 30 days",
    precautions: ["Not for children under 1 year (honey)", "Ensure child can tolerate milk", "Consult pediatric ENT if breathing difficulty"],
    benefits: ["Turmeric reduces adenoid swelling", "Tulsi boosts immunity", "Gentle enough for children"],
    related_diseases: ["adenoids", "snoring in children"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-521",
    problem: "Allergic Rhinitis",
    title: "Haridra Khand Anti-Allergy Mix",
    ingredients: [{ name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Black pepper", quantity: "2 pinches" }, { name: "Ghee", quantity: "½ teaspoon" }],
    method: ["Mix turmeric with black pepper and ghee", "Add honey to make a paste", "Take this paste on empty stomach", "Follow with warm water"],
    how_often: "Daily morning for allergy season (2-3 months)",
    precautions: ["Start 2 weeks before allergy season for best results", "May stain teeth temporarily", "Avoid if on blood thinners"],
    benefits: ["Curcumin is a natural antihistamine", "Black pepper boosts absorption 2000%", "Reduces sneezing, runny nose, and itching"],
    related_diseases: ["allergic rhinitis", "hay fever", "seasonal allergies"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "ent-522",
    problem: "Ear Wax Removal",
    title: "Warm Mustard Oil Ear Cleaning",
    ingredients: [{ name: "Mustard oil", quantity: "3-4 drops" }, { name: "Cotton ball", quantity: "1" }],
    method: ["Warm mustard oil to body temperature", "Lie on your side", "Put 3-4 drops in the upper ear", "Place cotton ball loosely and wait 15 minutes", "Turn over and let oil drain out"],
    how_often: "Once a week for maintenance",
    precautions: ["Never use hot oil", "Do not use if eardrum is perforated", "Avoid cotton swabs inside ear canal"],
    benefits: ["Softens hardened ear wax naturally", "Mustard oil has antimicrobial properties", "Prevents ear infections"],
    related_diseases: ["ear wax", "hearing blockage"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  // Neurological Remedies
  {
    id: "neuro-523",
    problem: "Migraine",
    title: "Brahmi & Shankhpushpi Brain Tonic",
    ingredients: [{ name: "Brahmi powder", quantity: "½ teaspoon" }, { name: "Shankhpushpi powder", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Mix both powders in warm milk", "Add honey when lukewarm", "Drink in the morning on empty stomach", "Continue for 2-3 months"],
    how_often: "Daily in the morning",
    precautions: ["Start with smaller doses", "May cause drowsiness initially", "Consult doctor if on neurological medications"],
    benefits: ["Brahmi calms overactive neural pathways", "Shankhpushpi reduces stress-triggered migraines", "Long-term use prevents recurrence"],
    related_diseases: ["migraine", "headache", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-524",
    problem: "Epilepsy Support",
    title: "Jyotishmati (Malkangani) Oil Therapy",
    ingredients: [{ name: "Jyotishmati oil", quantity: "3-5 drops" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Add jyotishmati oil drops to warm milk", "Mix in honey", "Drink before bedtime", "Continue under practitioner guidance"],
    how_often: "Daily at bedtime - under Ayurvedic doctor supervision",
    precautions: ["MUST be under qualified practitioner guidance", "Do not stop anti-epileptic medication", "Start with very small dose", "Not for pregnant women"],
    benefits: ["Jyotishmati is a traditional brain nerve tonic", "May help reduce seizure frequency", "Supports neural stability"],
    related_diseases: ["epilepsy", "seizures"],
    difficulty: "Advanced",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-525",
    problem: "Parkinson's Support",
    title: "Mucuna Pruriens (Kapikacchu) Milk",
    ingredients: [{ name: "Mucuna pruriens powder", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Ghee", quantity: "1 teaspoon" }],
    method: ["Add mucuna powder to warm milk", "Add ghee and stir well", "Drink twice daily", "Continue as long-term supportive therapy"],
    how_often: "Twice daily - morning and evening",
    precautions: ["Mucuna contains natural L-DOPA", "MUST inform neurologist about this supplement", "May interact with Parkinson's medications", "Start with ¼ teaspoon"],
    benefits: ["Natural source of L-DOPA (dopamine precursor)", "Traditional tremor-reducing herb", "Ghee enhances brain absorption"],
    related_diseases: ["parkinson's disease", "tremors"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-526",
    problem: "Memory Loss",
    title: "Brahmi Ghee (Brahmi Ghrita)",
    ingredients: [{ name: "Brahmi leaves or powder", quantity: "1 teaspoon" }, { name: "Cow ghee", quantity: "1 tablespoon" }, { name: "Warm water", quantity: "½ cup" }],
    method: ["Take brahmi ghee (1 teaspoon) on empty stomach", "Follow with warm water", "If making fresh: cook brahmi in ghee on low heat for 10 minutes, strain", "Take consistently for 3 months"],
    how_often: "Daily on empty stomach",
    precautions: ["May cause initial drowsiness", "Avoid heavy meals immediately after", "Consult doctor if on memory medications"],
    benefits: ["Brahmi is Ayurveda's #1 memory herb", "Ghee helps cross blood-brain barrier", "Improves concentration and recall"],
    related_diseases: ["memory loss", "cognitive decline", "dementia support"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-527",
    problem: "Peripheral Neuropathy",
    title: "Ashwagandha & Turmeric Nerve Tonic",
    ingredients: [{ name: "Ashwagandha powder", quantity: "1 teaspoon" }, { name: "Turmeric", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Black pepper", quantity: "1 pinch" }],
    method: ["Add ashwagandha and turmeric to warm milk", "Add black pepper for absorption", "Stir well and drink warm", "Take daily for at least 2-3 months"],
    how_often: "Daily at bedtime",
    precautions: ["Start with half dose for first week", "Inform doctor if on diabetic medications", "Avoid during pregnancy"],
    benefits: ["Ashwagandha regenerates nerve tissue", "Turmeric reduces nerve inflammation", "Reduces numbness and tingling over time"],
    related_diseases: ["neuropathy", "nerve damage", "diabetic neuropathy"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-528",
    problem: "Sciatica",
    title: "Rasna & Dashmoola Decoction",
    ingredients: [{ name: "Rasna powder", quantity: "1 teaspoon" }, { name: "Dashmoola powder", quantity: "1 teaspoon" }, { name: "Water", quantity: "2 cups" }, { name: "Ginger", quantity: "½ inch" }],
    method: ["Boil all herbs in 2 cups water", "Reduce to 1 cup on low heat", "Strain and drink warm", "Also apply warm sesame oil on affected leg"],
    how_often: "Twice daily for 30-45 days",
    precautions: ["Avoid cold exposure during treatment", "Do gentle stretches alongside", "Seek medical help if leg weakness occurs"],
    benefits: ["Rasna is the premier Vata-calming herb", "Dashmoola addresses root nerve inflammation", "Combined approach for faster relief"],
    related_diseases: ["sciatica", "nerve pain", "lower back pain"],
    difficulty: "Medium",
    preparation_time: "20 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-529",
    problem: "Bell's Palsy Support",
    title: "Warm Oil Facial Massage (Abhyanga)",
    ingredients: [{ name: "Sesame oil", quantity: "2 tablespoons" }, { name: "Bala (Sida cordifolia) oil", quantity: "1 tablespoon" }],
    method: ["Mix sesame and bala oil", "Warm to comfortable temperature", "Gently massage the affected side of face", "Use upward strokes for 15-20 minutes", "Apply warm compress after massage"],
    how_often: "Twice daily for 2-3 months",
    precautions: ["Be very gentle - facial nerves are delicate", "Continue physiotherapy exercises", "This is supportive, not a replacement for medical care"],
    benefits: ["Bala oil strengthens nerve function", "Massage stimulates blood flow to nerves", "Sesame oil is deeply nourishing for Vata"],
    related_diseases: ["bell's palsy", "facial paralysis"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-530",
    problem: "Alzheimer's Support",
    title: "Shankhpushpi & Brahmi Memory Elixir",
    ingredients: [{ name: "Shankhpushpi syrup", quantity: "2 teaspoons" }, { name: "Brahmi powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "1 cup" }],
    method: ["Mix shankhpushpi syrup and brahmi powder in warm water", "Stir well until dissolved", "Give to patient twice daily", "Combine with mental stimulation activities"],
    how_often: "Twice daily - morning and evening",
    precautions: ["Supportive therapy only - continue medical treatment", "Monitor patient response", "Consult Ayurvedic neurologist for dosing"],
    benefits: ["Both herbs are classified as Medhya Rasayana (brain tonics)", "May slow cognitive decline", "Improves alertness and responsiveness"],
    related_diseases: ["alzheimer's", "dementia", "cognitive decline"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-531",
    problem: "Trigeminal Neuralgia",
    title: "Nirgundi Oil Face Application",
    ingredients: [{ name: "Nirgundi oil", quantity: "1 tablespoon" }, { name: "Camphor", quantity: "tiny pinch" }],
    method: ["Mix nirgundi oil with camphor", "Warm slightly", "Apply gently on the painful side of face", "Cover with warm cloth for 15 minutes"],
    how_often: "2-3 times daily during pain episodes",
    precautions: ["Avoid near eyes", "Do not use excessive camphor", "Seek pain specialist for severe cases"],
    benefits: ["Nirgundi is a powerful anti-inflammatory", "Camphor provides cooling-then-warming relief", "Reduces nerve pain intensity"],
    related_diseases: ["trigeminal neuralgia", "facial nerve pain"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-532",
    problem: "Multiple Sclerosis Support",
    title: "Ashwagandha & Bala Nerve Support",
    ingredients: [{ name: "Ashwagandha powder", quantity: "1 teaspoon" }, { name: "Bala powder", quantity: "½ teaspoon" }, { name: "Warm milk with ghee", quantity: "1 cup" }],
    method: ["Mix both powders in warm milk with ghee", "Drink on empty stomach", "Also massage body with bala oil weekly", "Continue as ongoing support"],
    how_often: "Daily as long-term supportive therapy",
    precautions: ["Inform neurologist about supplements", "Do not replace prescribed medication", "Monitor for any interactions"],
    benefits: ["Ashwagandha has neuroprotective properties", "Bala strengthens nerve myelin sheath", "Supports overall nerve health"],
    related_diseases: ["multiple sclerosis", "nerve disorders"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-533",
    problem: "Stroke Recovery Support",
    title: "Brahmi & Vacha Brain Recovery Tonic",
    ingredients: [{ name: "Brahmi powder", quantity: "½ teaspoon" }, { name: "Vacha (calamus) powder", quantity: "¼ teaspoon" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Warm water", quantity: "½ cup" }],
    method: ["Mix brahmi and vacha powders with honey", "Take with warm water", "Follow with physiotherapy exercises", "Continue for 3-6 months minimum"],
    how_often: "Twice daily under practitioner guidance",
    precautions: ["Vacha should be used in small quantities only", "Continue all stroke rehabilitation therapies", "Not for acute stroke - only recovery phase"],
    benefits: ["Brahmi improves brain circulation", "Vacha stimulates speech and cognition", "Supports motor function recovery"],
    related_diseases: ["stroke recovery", "brain injury"],
    difficulty: "Medium",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-534",
    problem: "Insomnia (Neurological)",
    title: "Jatamansi & Tagara Sleep Formula",
    ingredients: [{ name: "Jatamansi powder", quantity: "¼ teaspoon" }, { name: "Tagara (valerian) powder", quantity: "¼ teaspoon" }, { name: "Warm milk", quantity: "1 cup" }],
    method: ["Mix both powders in warm milk", "Drink 30 minutes before bed", "Dim lights and avoid screens", "Practice deep breathing after drinking"],
    how_often: "Daily at bedtime for 2-4 weeks",
    precautions: ["Do not combine with sleeping pills", "May cause vivid dreams initially", "Reduce dose gradually when stopping"],
    benefits: ["Jatamansi is Ayurveda's finest sedative herb", "Tagara (Indian valerian) promotes deep sleep", "Non-addictive natural sleep support"],
    related_diseases: ["insomnia", "sleep disorder", "anxiety"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-535",
    problem: "Anxiety & Panic Attacks",
    title: "Ashwagandha & Brahmi Calming Drink",
    ingredients: [{ name: "Ashwagandha powder", quantity: "1 teaspoon" }, { name: "Brahmi powder", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Cardamom", quantity: "1 pinch" }],
    method: ["Add both powders and cardamom to warm milk", "Stir well and drink slowly", "Practice slow deep breathing alongside", "Take regularly, not just during attacks"],
    how_often: "Twice daily - morning and evening",
    precautions: ["Do not replace anxiety medication suddenly", "Start with lower dose", "Seek professional help for severe panic attacks"],
    benefits: ["Ashwagandha lowers cortisol by 30%", "Brahmi calms the nervous system", "Cardamom has anxiolytic properties"],
    related_diseases: ["anxiety", "panic attacks", "stress"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-536",
    problem: "Cervical Spondylosis",
    title: "Dashamoola & Nirgundi Neck Therapy",
    ingredients: [{ name: "Nirgundi leaves", quantity: "handful" }, { name: "Sesame oil", quantity: "3 tablespoons" }, { name: "Rock salt", quantity: "1 pinch" }],
    method: ["Heat sesame oil and add nirgundi leaves", "Cook until leaves become crispy", "Strain and cool to warm temperature", "Massage neck and shoulders with this oil for 20 minutes"],
    how_often: "Daily for 30-45 days",
    precautions: ["Avoid heavy neck movements during treatment", "Use a proper pillow for neck support", "See orthopedic doctor for severe cases"],
    benefits: ["Nirgundi is a powerful Vata-pacifying herb", "Oil massage improves cervical blood flow", "Reduces stiffness and pain"],
    related_diseases: ["cervical spondylosis", "neck pain", "cervical disc"],
    difficulty: "Medium",
    preparation_time: "15 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-537",
    problem: "Restless Leg Syndrome",
    title: "Bala & Ashwagandha Leg Oil Massage",
    ingredients: [{ name: "Bala oil", quantity: "2 tablespoons" }, { name: "Ashwagandha oil", quantity: "1 tablespoon" }],
    method: ["Mix both oils and warm slightly", "Massage both legs from hip to toe", "Focus on calves and thighs", "Do this 30 minutes before bed", "Wear warm socks after massage"],
    how_often: "Daily at bedtime for 30 days",
    precautions: ["Ensure room is warm during massage", "Avoid cold water exposure after", "Consult doctor if symptoms are severe"],
    benefits: ["Bala oil strengthens nerve function in legs", "Ashwagandha calms Vata-driven restlessness", "Regular massage retrains nerve patterns"],
    related_diseases: ["restless leg syndrome", "leg discomfort", "sleep disruption"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-538",
    problem: "Carpal Tunnel Syndrome",
    title: "Warm Castor Oil Wrist Wrap",
    ingredients: [{ name: "Castor oil", quantity: "2 tablespoons" }, { name: "Cotton cloth", quantity: "1 strip" }, { name: "Hot water bottle", quantity: "1" }],
    method: ["Warm castor oil and massage into wrists and forearms", "Wrap wrist with cotton cloth soaked in warm castor oil", "Place hot water bottle over the wrap", "Rest for 30 minutes"],
    how_often: "Daily at bedtime for 30 days",
    precautions: ["Remove wrap before sleeping", "Avoid tight wrapping", "See orthopedic if numbness worsens"],
    benefits: ["Castor oil reduces nerve swelling", "Heat therapy relaxes compressed tissues", "Anti-inflammatory action on carpal tunnel"],
    related_diseases: ["carpal tunnel", "wrist pain", "nerve compression"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "neuro-539",
    problem: "Facial Tic (Nervous Twitch)",
    title: "Magnesium-Rich Almond Milk Tonic",
    ingredients: [{ name: "Almonds (soaked & peeled)", quantity: "7-8" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Saffron", quantity: "2 strands" }, { name: "Cardamom", quantity: "1 pinch" }],
    method: ["Grind soaked almonds into paste", "Add to warm milk with saffron and cardamom", "Stir well and drink warm", "Take daily for at least 2 months"],
    how_often: "Daily in the morning",
    precautions: ["Soak almonds overnight for better digestion", "Avoid if allergic to nuts", "See neurologist for persistent tics"],
    benefits: ["Almonds are rich in magnesium - a nerve relaxant", "Saffron calms neural excitability", "Nourishes and stabilizes nervous system"],
    related_diseases: ["facial tics", "nervous twitching", "muscle spasms"],
    difficulty: "Easy",
    preparation_time: "10 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-540",
    problem: "Diabetic Neuropathy",
    title: "Guduchi & Ashwagandha Nerve Repair",
    ingredients: [{ name: "Guduchi (giloy) juice", quantity: "2 tablespoons" }, { name: "Ashwagandha powder", quantity: "½ teaspoon" }, { name: "Warm water", quantity: "½ cup" }],
    method: ["Mix guduchi juice and ashwagandha in warm water", "Drink on empty stomach", "Also soak feet in warm water with turmeric daily", "Continue for 3 months"],
    how_often: "Daily morning on empty stomach",
    precautions: ["Monitor blood sugar closely", "Inform diabetologist about supplements", "Check feet daily for any wounds"],
    benefits: ["Guduchi has nerve-protective properties", "Ashwagandha helps nerve regeneration", "Combined approach manages neuropathic symptoms"],
    related_diseases: ["diabetic neuropathy", "nerve damage", "diabetes"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-541",
    problem: "Tension Headache",
    title: "Peppermint Oil Temple Massage",
    ingredients: [{ name: "Peppermint essential oil", quantity: "3-4 drops" }, { name: "Coconut oil", quantity: "1 teaspoon" }],
    method: ["Mix peppermint oil with coconut oil", "Massage temples and forehead gently", "Also apply on back of neck", "Rest in a dark, quiet room for 20 minutes"],
    how_often: "As needed during headache",
    precautions: ["Avoid near eyes", "Dilute properly - do not use undiluted", "Not for children under 6"],
    benefits: ["Menthol in peppermint relaxes tense muscles", "Improves blood circulation to head", "Provides cooling sensation that blocks pain signals"],
    related_diseases: ["tension headache", "stress headache"],
    difficulty: "Easy",
    preparation_time: "2 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "neuro-542",
    problem: "Sleep Walking Support",
    title: "Jatamansi & Warm Milk Sedative",
    ingredients: [{ name: "Jatamansi powder", quantity: "¼ teaspoon" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Nutmeg", quantity: "tiny pinch" }],
    method: ["Mix jatamansi and nutmeg in warm milk", "Drink 45 minutes before bed", "Ensure bedroom is safe (lock windows, doors)", "Practice calming bedtime routine"],
    how_often: "Daily at bedtime",
    precautions: ["Use very small amount of nutmeg", "Ensure environment safety for sleepwalker", "Consult sleep specialist for severe cases"],
    benefits: ["Jatamansi promotes deep, stable sleep", "Nutmeg prevents light sleep phases", "Reduces sleepwalking episodes over time"],
    related_diseases: ["sleepwalking", "sleep disorder", "parasomnia"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-543",
    problem: "Attention Deficit Support",
    title: "Brahmi & Mandukparni Focus Tonic",
    ingredients: [{ name: "Brahmi powder", quantity: "½ teaspoon" }, { name: "Mandukparni (gotu kola) powder", quantity: "½ teaspoon" }, { name: "Honey", quantity: "1 teaspoon" }, { name: "Warm water", quantity: "½ cup" }],
    method: ["Mix both powders with honey", "Take with warm water", "Give to children in smaller doses (¼ teaspoon each)", "Continue for 3-6 months"],
    how_often: "Daily in the morning",
    precautions: ["Adjust dose for children based on age", "Not a replacement for ADHD medication", "Monitor progress and adjust"],
    benefits: ["Both herbs classified as Medhya (brain tonics)", "Improves concentration and attention span", "Safe for long-term use"],
    related_diseases: ["attention deficit", "focus issues", "ADHD support"],
    difficulty: "Easy",
    preparation_time: "3 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-544",
    problem: "Cluster Headache Support",
    title: "Capsaicin Nasal Application",
    ingredients: [{ name: "Cayenne pepper powder", quantity: "tiny pinch" }, { name: "Coconut oil", quantity: "½ teaspoon" }],
    method: ["Mix a very tiny amount of cayenne in coconut oil", "Using a cotton swab, apply just inside the nostril on the headache side", "Expect a burning sensation for 30-60 seconds", "The burning will subside and headache should reduce"],
    how_often: "During cluster headache attacks only",
    precautions: ["Use extremely small amount", "Will burn initially - this is expected", "Not for children", "Consult neurologist for cluster headache management"],
    benefits: ["Capsaicin desensitizes trigeminal nerve", "Research supports capsaicin for cluster headaches", "Provides rapid pain relief"],
    related_diseases: ["cluster headache", "severe headache"],
    difficulty: "Advanced",
    preparation_time: "2 minutes",
    region: "global" as RemedyRegion
  },
  {
    id: "neuro-545",
    problem: "Tremors (Essential)",
    title: "Mucuna & Ashwagandha Stabilizer",
    ingredients: [{ name: "Mucuna pruriens powder", quantity: "½ teaspoon" }, { name: "Ashwagandha powder", quantity: "½ teaspoon" }, { name: "Warm milk", quantity: "1 cup" }],
    method: ["Mix both powders in warm milk", "Drink twice daily", "Also practice hand strengthening exercises", "Continue for 2-3 months minimum"],
    how_often: "Twice daily",
    precautions: ["Inform neurologist about supplements", "Do not combine with dopamine medications without doctor guidance", "Monitor tremor changes"],
    benefits: ["Mucuna provides natural dopamine support", "Ashwagandha calms nervous system", "May reduce tremor intensity"],
    related_diseases: ["essential tremor", "hand tremor"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-546",
    problem: "Chronic Dizziness",
    title: "Amla & Coriander Seed Water",
    ingredients: [{ name: "Coriander seeds", quantity: "1 tablespoon" }, { name: "Amla powder", quantity: "½ teaspoon" }, { name: "Water", quantity: "1 glass" }],
    method: ["Soak coriander seeds in water overnight", "Add amla powder in the morning", "Strain and drink on empty stomach", "Continue for 2 weeks"],
    how_often: "Daily morning on empty stomach",
    precautions: ["Check blood pressure - dizziness may be BP related", "Stay hydrated throughout the day", "See doctor for persistent dizziness"],
    benefits: ["Coriander seeds stabilize inner ear function", "Amla provides vitamin C for nerve health", "Simple and effective anti-vertigo remedy"],
    related_diseases: ["dizziness", "vertigo", "balance issues"],
    difficulty: "Easy",
    preparation_time: "8 hours (soaking)",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-547",
    problem: "Nerve Weakness",
    title: "Bala & Shatavari Nerve Strengthener",
    ingredients: [{ name: "Bala powder", quantity: "½ teaspoon" }, { name: "Shatavari powder", quantity: "½ teaspoon" }, { name: "Ghee", quantity: "1 teaspoon" }, { name: "Warm milk", quantity: "1 cup" }],
    method: ["Mix both powders with ghee", "Add to warm milk and stir well", "Drink on empty stomach", "Continue for 3 months"],
    how_often: "Daily in the morning",
    precautions: ["Avoid during active infections", "Consult doctor if on neurological medications", "Be patient - nerve healing takes time"],
    benefits: ["Bala (strength) herb builds nerve power", "Shatavari nourishes nerve tissue", "Ghee helps herbs cross blood-brain barrier"],
    related_diseases: ["nerve weakness", "neurological weakness"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-548",
    problem: "Post-Concussion Support",
    title: "Brahmi & Saffron Recovery Drink",
    ingredients: [{ name: "Brahmi powder", quantity: "½ teaspoon" }, { name: "Saffron strands", quantity: "3-4" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Soak saffron in warm milk for 5 minutes", "Add brahmi powder and honey", "Stir and drink warm", "Rest and avoid mental exertion"],
    how_often: "Twice daily during recovery phase",
    precautions: ["Follow doctor's concussion protocol completely", "Avoid screens and mental strain", "This is supportive only"],
    benefits: ["Brahmi supports brain healing", "Saffron has neuroprotective properties", "Gentle enough for recovery phase"],
    related_diseases: ["concussion", "head injury", "brain recovery"],
    difficulty: "Easy",
    preparation_time: "7 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-549",
    problem: "Fibromyalgia Support",
    title: "Guggulu & Turmeric Pain Relief",
    ingredients: [{ name: "Guggulu extract", quantity: "500mg tablet" }, { name: "Turmeric powder", quantity: "1 teaspoon" }, { name: "Warm water", quantity: "1 cup" }],
    method: ["Take guggulu tablet with warm water", "Mix turmeric in warm water and drink separately", "Also do daily warm oil self-massage", "Practice gentle yoga stretches"],
    how_often: "Twice daily for 2-3 months",
    precautions: ["Guggulu may interact with thyroid medications", "Start slowly and increase gradually", "Continue pain management plan with doctor"],
    benefits: ["Guggulu reduces widespread inflammation", "Turmeric manages chronic pain signals", "Combined with lifestyle changes for best results"],
    related_diseases: ["fibromyalgia", "chronic pain", "widespread pain"],
    difficulty: "Medium",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  },
  {
    id: "neuro-550",
    problem: "Chronic Fatigue Syndrome",
    title: "Ashwagandha & Shilajit Energy Restorer",
    ingredients: [{ name: "Ashwagandha powder", quantity: "1 teaspoon" }, { name: "Shilajit resin", quantity: "pea-sized" }, { name: "Warm milk", quantity: "1 cup" }, { name: "Honey", quantity: "1 teaspoon" }],
    method: ["Dissolve shilajit in warm milk", "Add ashwagandha powder and honey", "Stir well and drink in the morning", "Continue for 3 months consistently"],
    how_often: "Daily in the morning",
    precautions: ["Buy authentic shilajit from trusted source", "Start with half dose for first week", "Avoid if you have gout or high uric acid"],
    benefits: ["Ashwagandha restores adrenal function", "Shilajit boosts mitochondrial energy", "Both herbs classified as Rasayana (rejuvenators)"],
    related_diseases: ["chronic fatigue", "exhaustion", "low energy"],
    difficulty: "Easy",
    preparation_time: "5 minutes",
    region: "india" as RemedyRegion
  }
];

export const remedyCategories = [
  "Diabetes",
  "Hypertension",
  "Arthritis",
  "Acidity",
  "Constipation",
  "Asthma",
  "Migraine",
  "Anxiety",
  "Skin Disorders",
  "Hair Fall",
  "Insomnia",
  "Cold & Cough",
  "Thyroid",
  "Piles",
  "Kidney Stones",
  "Anemia",
  "Joint Pain",
  "UTI",
  "Sinusitis",
  "Weight Loss",
  "Immunity",
  "Menstrual Cramps",
  "Back Pain",
  "Eye Strain",
  "Memory",
  "Liver Health",
  "Tooth Pain",
  "Sore Throat",
  "Fever",
  "Nausea",
  "Fatigue",
  "Stress",
  "Allergies",
  "Bloating",
  "Headache",
  "Acne",
  "Dark Circles",
  "Dry Skin",
  "Cough",
  "Bad Breath",
  "Muscle Cramps",
  "Ear Infection",
  "Hiccups",
  "Mouth Ulcers",
  "Sunburn",
  "Dandruff",
  "Heartburn",
  "Chapped Lips",
  "Leg Cramps",
  "Motion Sickness",
  "Food Poisoning",
  "Vertigo",
  "Weak Eyesight",
  "Cracked Heels",
  "Stomach Ache",
  "Diarrhea",
  "Dehydration",
  "Gas",
  "Intestinal Worms",
  "Body Odor",
  "Common Cold",
  "Chest Congestion",
  "Runny Nose",
  "Low Energy",
  "Hangover",
  "Bruises",
  "Bee Sting",
  "Minor Burns",
  // Seasonal Categories
  "Monsoon Infections",
  "Fungal Infections",
  "Waterborne Diseases",
  "Winter Cold",
  "Winter Immunity",
  "Winter Joint Pain",
  "Dry Skin (Winter)",
  "Summer Heat",
  "Heat Stroke",
  "Prickly Heat",
  "Summer Dehydration",
  "Summer Fatigue",
  // Children's Health
  "Teething Pain (Children)",
  "Colic (Infants)",
  "Bed Wetting",
  "Loss of Appetite (Children)",
  "Common Cold (Children)",
  "Stomach Worms (Children)",
  "Diaper Rash",
  "Weak Immunity (Children)",
  "Fever (Children)",
  "Ear Infection (Children)",
  "Brain Development (Children)",
  "Growth Support (Children)",
  "Cough (Children)",
  "Constipation (Children)",
  "Hyperactivity (Children)",
  "Skin Rashes (Children)",
  "Night Terrors (Children)",
  "Vomiting (Children)",
  "Eye Infection (Children)",
  "Diarrhea (Children)",
  "Memory Enhancement (Children)",
  "Tonsillitis (Children)",
  "Height Growth (Children)",
  "Hiccups (Children)",
  // Women's Health
  "PCOS",
  "Heavy Periods",
  "Pregnancy Nausea",
  "Lactation Support",
  "Menopause Symptoms",
  "Menopause Hot Flashes",
  "Leucorrhea",
  "Iron Deficiency (Women)",
  "Postpartum Care",
  "UTI (Women)",
  // Heart Health
  "High Cholesterol",
  "Poor Circulation",
  "Heart Disease",
  // Liver Health
  "Fatty Liver",
  "Liver Detox",
  "Jaundice Support",
  // Kidney Health
  "Kidney Health",
  // Respiratory
  "Bronchitis",
  "Wheezing",
  "Nasal Congestion",
  // Digestive
  "IBS (Irritable Bowel)",
  "Ulcerative Colitis Support",
  // Bone & Joint
  "Osteoporosis",
  "Gout",
  "Sciatica",
  // Skin Health
  "Eczema",
  "Psoriasis",
  "Vitiligo Support",
  // Mental Health
  "Depression Support",
  "Panic Attacks",
  "Focus & Concentration",
  // Eye Health
  "Computer Eye Strain",
  "Night Blindness",
  // Oral Health
  "Gum Disease",
  "Tooth Sensitivity",
  // Hair Health
  "Premature Greying",
  "Dry & Frizzy Hair",
  "Scalp Infection",
  // Hormonal
  "Hypothyroidism Support",
  "Hyperthyroidism Support",
  // Immunity
  "Frequent Infections",
  // Pain Relief
  "Chronic Headache",
  "Fibromyalgia Support",
  // Blood Sugar
  "Pre-Diabetes",
  "Type 2 Diabetes Support",
  // NEW: Serious Conditions (Supportive Care)
  "Cancer Support",
  "Stroke Recovery Support",
  "Autoimmune Support",
  "Thyroid Autoimmune Support",
  "High Blood Pressure Support",
  "High Cholesterol Support",
  "Fatty Liver Support",
  "IBD Gut Support",
  "Rheumatoid Arthritis Support",
  "Metabolic Syndrome Support",
  // Elderly Health
  "Parkinson's Support",
  "Alzheimer's Support",
  "Memory Loss (Elderly)",
  "Arthritis (Elderly)",
  "Weak Bones (Elderly)",
  "Prostate Health (Elderly)",
  "Heart Health (Elderly)",
  "Digestive Issues (Elderly)",
  "Constipation (Elderly)",
  "Sleep Issues (Elderly)",
  "Weak Eyesight (Elderly)",
  "Weakness (Elderly)",
  "Poor Circulation (Elderly)",
  "Muscle Cramps (Elderly)",
  "Joint Stiffness (Elderly)",
  "Tremors (Elderly)",
  "Balance Issues (Elderly)",
  "Hearing Loss (Elderly)",
  "Dry Mouth (Elderly)",
  "Loss of Appetite (Elderly)",
  "Weak Immunity (Elderly)",
  "Urinary Incontinence (Elderly)",
  "Skin Aging (Elderly)",
  "Neuropathy (Elderly)",
  "Dementia Support",
  "Healthy Aging",
  // Men's Health
  "Low Testosterone (Men)",
  "Hair Loss (Men)",
  "Muscle Building (Men)",
  "Stamina & Endurance (Men)",
  "Prostate Health (Men)",
  "Erectile Dysfunction (Men)",
  "Low Sperm Count (Men)",
  "Belly Fat (Men)",
  "Beard Growth (Men)",
  "Premature Graying (Men)",
  "Body Odor (Men)",
  "Stress & Burnout (Men)",
  "Sleep Quality (Men)",
  "Joint Pain (Men)",
  "Heart Health (Men)",
  "Liver Detox (Men)",
  "Kidney Health (Men)",
  "Immunity Boost (Men)",
  "Post-Workout Recovery (Men)",
  "Weight Management (Men)",
  // New Common Conditions
  "PCOD/PCOS",
  "Varicose Veins",
  "Tinnitus (Ear Ringing)",
  "Frozen Shoulder",
  "Heel Pain (Plantar Fasciitis)",
  "Carpal Tunnel Syndrome",
  "Hemorrhoids (Piles)",
  "Cervical Spondylosis",
  "Acid Reflux (GERD)",
  "Irregular Periods",
  "Snoring",
  "Dry Eyes",
  "Low Blood Pressure",
  "Urticaria (Hives)",
  "IBS (Irritable Bowel)",
  "Vitiligo Support",
  "Chronic Fatigue",
  "Nerve Weakness",
  "Sinus Infection",
  "Water Retention",
  "Hormonal Acne",
  "Infertility (Female)",
  "Diabetic Neuropathy",
  "Hiatal Hernia",
  "Leucorrhea (White Discharge)",
  "Gastric Ulcer",
  "Gallstones",
  // Sports & Fitness
  "Muscle Strain (Sports)",
  "Ankle Sprain (Sports)",
  "Knee Injury (Sports)",
  "Shin Splints (Sports)",
  "Tennis Elbow (Sports)",
  "Runner's Knee (Sports)",
  "Hamstring Pull (Sports)",
  "Shoulder Injury (Sports)",
  "Pre-Workout Energy",
  "Post-Workout Recovery",
  "Muscle Soreness (DOMS)",
  "Cramps During Exercise",
  "Sports Hydration",
  "Ligament Support",
  "Joint Flexibility (Sports)",
  "Endurance Building",
  "Muscle Fatigue (Sports)",
  "Sports Nutrition",
  // New 100 Remedies Categories
  "Post-Surgery Recovery",
  "Post-Surgery Constipation",
  "Post-Surgery Swelling",
  "Post-Surgery Weakness",
  "Post-Surgery Scar Reduction",
  "Gum Disease",
  "Wisdom Tooth Pain",
  "Tooth Sensitivity",
  "Jaw Pain (TMJ)",
  "Dry Socket (Post Extraction)",
  "Appendix Pain Support",
  "Hernia Support",
  "Tonsillitis",
  "Plantar Warts",
  "Pneumonia Support",
  "Bronchitis Support",
  "Nerve Pain (Neuralgia)",
  "Fibromyalgia Support",
  "Cellulitis Support",
  "Abscess (Boil)",
  "Ringworm",
  "Eczema Support",
  "Psoriasis Support",
  "Slip Disc Support",
  "Bell's Palsy Support",
  "Peptic Ulcer Support",
  "Costochondritis (Chest Wall Pain)",
  "Tennis Elbow",
  "Trigger Finger",
  "Rotator Cuff Pain",
  "Bursitis",
  "Gout",
  "Tendonitis",
  "Pilonidal Cyst Support",
  "Ganglion Cyst Support",
  "Lipoma Support",
  "Laryngitis (Voice Loss)",
  "Chalazion (Eye Lump)",
  "Anal Fissure",
  "Fistula Support",
  "Coccyx Pain (Tailbone)",
  "Keloid Scar",
  "Stretch Marks",
  "Corns & Calluses",
  "Rosacea Support",
  "Melasma (Pigmentation)",
  "Interstitial Cystitis Support",
  "Prostatitis Support",
  "Endometriosis Support",
  "Polycystic Ovary (PCOS)",
  "Ovarian Cyst Support",
  "Menstrual Migraine",
  "Hot Flashes (Menopause)",
  "Iron Deficiency Anemia",
  "Vitamin D Deficiency Support",
  "B12 Deficiency Support",
  "Gastritis",
  "IBS (Irritable Bowel)",
  "Hemorrhagic Cough Support",
  "Thyroid Nodules Support",
  "Food Allergy Support",
  "Lupus Support",
  "Chronic Kidney Disease Support",
  "Pancreatitis Support",
  "Raynaud's Disease Support",
  "Edema (Water Retention)",
  "Peripheral Neuropathy",
  "Chronic Fatigue Syndrome",
  "Anxiety Disorder Support",
  "Depression Support",
  "Insomnia (Chronic)",
  "Ingrown Toenail",
  "Burning Feet Syndrome",
  "Chilblains (Winter Toe Pain)",
  "Bed Sores (Pressure Ulcer)",
  "Night Sweats",
  "Dry Mouth",
  "Canker Sores",
  "Chronic Sinusitis",
  "Sleep Apnea Support",
  "Restless Leg Syndrome",
  "Plantar Fasciitis (Heel Pain)",
  // Eye Health
  "Eye Strain (Digital)",
  "Dry Eyes",
  "Conjunctivitis (Pink Eye)",
  "Weak Eyesight",
  "Eye Floaters",
  "Glaucoma Support",
  "Cataract Support",
  "Night Blindness",
  "Macular Degeneration Support",
  "Stye (Eye Lump)",
  // ENT
  "Ear Infection",
  "Tinnitus (Ear Ringing)",
  "Sinusitis",
  "Sore Throat",
  "Laryngitis (Voice Loss)",
  "Nasal Polyps Support",
  "Hearing Loss Support",
  "Vertigo",
  "Nosebleed (Epistaxis)",
  "Adenoid Swelling (Children)",
  "Allergic Rhinitis",
  "Ear Wax Removal",
  // Neurological
  "Epilepsy Support",
  "Parkinson's Support",
  "Memory Loss",
  "Peripheral Neuropathy",
  "Sciatica",
  "Bell's Palsy Support",
  "Alzheimer's Support",
  "Trigeminal Neuralgia",
  "Multiple Sclerosis Support",
  "Stroke Recovery Support",
  "Insomnia (Neurological)",
  "Anxiety & Panic Attacks",
  "Cervical Spondylosis",
  "Restless Leg Syndrome",
  "Carpal Tunnel Syndrome",
  "Facial Tic (Nervous Twitch)",
  "Diabetic Neuropathy",
  "Tension Headache",
  "Sleep Walking Support",
  "Attention Deficit Support",
  "Cluster Headache Support",
  "Tremors (Essential)",
  "Chronic Dizziness",
  "Nerve Weakness",
  "Post-Concussion Support",
  "Fibromyalgia Support",
  "Chronic Fatigue Syndrome"
];
