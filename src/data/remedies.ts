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
  "Joint Pain"
];
