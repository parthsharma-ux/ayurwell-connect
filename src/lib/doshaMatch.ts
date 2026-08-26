export type Dosha = "vata" | "pitta" | "kapha";

export const DOSHA_LABELS: Record<Dosha, { en: string; hi: string }> = {
  vata: { en: "Vata (dry, anxious)", hi: "वात (सूखा, चिंता)" },
  pitta: { en: "Pitta (heat, acidity)", hi: "पित्त (गर्मी, अम्लता)" },
  kapha: { en: "Kapha (heavy, sluggish)", hi: "कफ (भारी, सुस्त)" },
};

// Keywords that indicate a remedy pacifies (is good for) a dosha.
const PACIFIES: Record<Dosha, string[]> = {
  vata: [
    "ghee", "sesame", "til", "ashwagandha", "warm milk", "milk", "almond", "badam",
    "dates", "jaggery", "nutmeg", "jaiphal", "castor", "brahmi", "bala", "shatavari",
    "insomnia", "anxiety", "stress", "joint", "cramp", "constipation", "nerve",
    "dry skin", "vata", "tremor", "back pain", "sciatica", "fatigue", "memory",
  ],
  pitta: [
    "coriander", "dhania", "fennel", "saunf", "amla", "aloe", "coconut", "rose",
    "mint", "pudina", "cumin", "jeera", "sandalwood", "chandan", "shatavari",
    "buttermilk", "sugar candy", "mishri", "acidity", "heartburn", "ulcer", "burn",
    "acne", "rash", "pitta", "heat", "liver", "bleeding", "inflammation", "gastritis",
  ],
  kapha: [
    "ginger", "adrak", "sonth", "black pepper", "kali mirch", "pippali", "long pepper",
    "honey", "shahad", "turmeric", "haldi", "trikatu", "cinnamon", "dalchini", "clove",
    "laung", "tulsi", "guggulu", "mustard", "cough", "cold", "congestion", "mucus",
    "asthma", "sinus", "obesity", "weight loss", "cholesterol", "kapha", "phlegm",
    "diabetes", "sluggish", "thyroid",
  ],
};

// Keywords that suggest a remedy can aggravate a dosha (used to down-rank).
const AGGRAVATES: Record<Dosha, string[]> = {
  vata: ["bitter gourd", "karela", "neem", "cold water", "raw salad", "fasting"],
  pitta: ["black pepper", "kali mirch", "mustard", "chilli", "garlic", "sonth", "trikatu"],
  kapha: ["ghee", "milk", "banana", "jaggery", "sugar", "curd", "dahi", "sweet"],
};

export type DoshaScorable = {
  title: string;
  problem: string;
  ingredients: { name: string }[];
  benefits?: string[];
  related_diseases?: string[];
};

const haystack = (r: DoshaScorable) =>
  [
    r.title,
    r.problem,
    ...r.ingredients.map((i) => i.name),
    ...(r.benefits ?? []),
    ...(r.related_diseases ?? []),
  ]
    .join(" ")
    .toLowerCase();

/** Returns a -1..+1-ish compatibility score for the given dosha. */
export const doshaScore = (r: DoshaScorable, dosha: Dosha): number => {
  const text = haystack(r);
  let score = 0;
  for (const kw of PACIFIES[dosha]) if (text.includes(kw)) score += 1;
  for (const kw of AGGRAVATES[dosha]) if (text.includes(kw)) score -= 1;
  return score;
};

/** Doshas this remedy is broadly suitable for (used for badges/filters). */
export const remedyDoshas = (r: DoshaScorable): Dosha[] => {
  const doshas: Dosha[] = ["vata", "pitta", "kapha"];
  const scored = doshas.map((d) => ({ d, s: doshaScore(r, d) }));
  const best = Math.max(...scored.map((s) => s.s));
  if (best <= 0) return [];
  return scored.filter((s) => s.s >= Math.max(1, best - 1)).map((s) => s.d);
};
