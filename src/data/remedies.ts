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
    id: "remedy-liver-2",
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
    id: "remedy-liver-3",
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
  "Metabolic Syndrome Support"
];
