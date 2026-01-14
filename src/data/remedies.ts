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
}

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
  "UTI (Women)"
];
