// Levenshtein distance for fuzzy matching
export const levenshteinDistance = (a: string, b: string): number => {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

// Calculate similarity percentage
export const getSimilarity = (str1: string, str2: string): number => {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;

  if (longer.length === 0) return 1.0;

  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
};

// ---------------------------------------------------------------------------
// Hindi (Devanagari) ↔ Latin transliteration
// Lightweight ITRANS-style mapping. Covers common letters/matras used in
// remedy, medicine, and disease names so users can type either script.
// ---------------------------------------------------------------------------
const DEVANAGARI_MAP: Record<string, string> = {
  // vowels
  "अ": "a", "आ": "aa", "इ": "i", "ई": "ii", "उ": "u", "ऊ": "uu",
  "ऋ": "ri", "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au", "ऍ": "e", "ऑ": "o",
  // vowel signs (matras)
  "ा": "aa", "ि": "i", "ी": "ii", "ु": "u", "ू": "uu", "ृ": "ri",
  "े": "e", "ै": "ai", "ो": "o", "ौ": "au", "ं": "n", "ः": "h", "ँ": "n",
  // consonants
  "क": "k", "ख": "kh", "ग": "g", "घ": "gh", "ङ": "n",
  "च": "ch", "छ": "chh", "ज": "j", "झ": "jh", "ञ": "n",
  "ट": "t", "ठ": "th", "ड": "d", "ढ": "dh", "ण": "n",
  "त": "t", "थ": "th", "द": "d", "ध": "dh", "न": "n",
  "प": "p", "फ": "ph", "ब": "b", "भ": "bh", "म": "m",
  "य": "y", "र": "r", "ल": "l", "व": "v",
  "श": "sh", "ष": "sh", "स": "s", "ह": "h",
  "क़": "q", "ख़": "kh", "ग़": "gh", "ज़": "z", "ड़": "r", "ढ़": "rh", "फ़": "f",
  "्": "", // halant — suppresses the implicit 'a'
  "ऽ": "",
  "०": "0", "१": "1", "२": "2", "३": "3", "४": "4",
  "५": "5", "६": "6", "७": "7", "८": "8", "९": "9",
};

export const transliterateHiToEn = (str: string): string => {
  if (!str) return "";
  let out = "";
  for (const ch of str) {
    if (DEVANAGARI_MAP[ch] !== undefined) out += DEVANAGARI_MAP[ch];
    else out += ch;
  }
  return out;
};

// ---------------------------------------------------------------------------
// Phonetic key — collapses common English/Hindi spelling variants so that
// misspellings like "ashwaganda" / "aswagandha" / "ashvagandha" all match.
// Inspired by Soundex/Metaphone but tuned for Indic loanwords.
// ---------------------------------------------------------------------------
const applyPhoneticRules = (s: string): string => {
  let x = s.toLowerCase();

  // Strip diacritics
  x = x.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Common Indic ↔ English variant collapses (order matters)
  const rules: Array<[RegExp, string]> = [
    [/[^a-z0-9]+/g, ""],     // strip spaces, punctuation
    [/ph/g, "f"],
    [/wh/g, "v"],
    [/kh/g, "k"],
    [/gh/g, "g"],
    [/th/g, "t"],
    [/dh/g, "d"],
    [/bh/g, "b"],
    [/jh/g, "j"],
    [/chh/g, "c"],
    [/ch/g, "c"],
    [/sh/g, "s"],
    [/zh/g, "j"],
    [/q/g, "k"],
    [/x/g, "ks"],
    [/w/g, "v"],
    [/z/g, "j"],
    [/y/g, "i"],
    [/ck/g, "k"],
    [/c/g, "k"],         // after ch/chh handled
    [/(.)\1+/g, "$1"],   // collapse doubles
    [/[aeiou]+/g, "a"],  // vowel folding
  ];
  for (const [re, rep] of rules) x = x.replace(re, rep);
  return x;
};

export const phoneticKey = (str: string): string => {
  if (!str) return "";
  // Transliterate Devanagari first so Hindi spellings collapse to the same key.
  const latin = transliterateHiToEn(str);
  return applyPhoneticRules(latin);
};

// Normalize string for search (loose, case/space-insensitive)
export const normalize = (str: string) =>
  (str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\s\-_]/g, "");

// Unified matcher: returns true if `text` contains `query` after any of:
//  - direct substring (case-insensitive)
//  - normalized substring (whitespace/diacritic-insensitive)
//  - transliterated substring (Hindi → Latin on either side)
//  - phonetic-key substring (handles spelling variants)
//  - high similarity on tokens (handles small typos)
export const phoneticMatch = (query: string, text: string): boolean => {
  if (!query) return true;
  if (!text) return false;

  const q = query.trim();
  if (!q) return true;

  const ql = q.toLowerCase();
  const tl = text.toLowerCase();
  if (tl.includes(ql)) return true;

  const qn = normalize(q);
  const tn = normalize(text);
  if (qn && tn.includes(qn)) return true;

  // Transliterate both directions so a Hindi query hits an English text and vice-versa
  const qLatin = normalize(transliterateHiToEn(q));
  const tLatin = normalize(transliterateHiToEn(text));
  if (qLatin && tLatin.includes(qLatin)) return true;

  // Phonetic
  const qp = phoneticKey(q);
  const tp = phoneticKey(text);
  if (qp.length >= 2 && tp.includes(qp)) return true;

  // Token-level typo tolerance (only for queries ≥ 3 chars to avoid noise)
  if (qLatin.length >= 3) {
    const tokens = text.split(/[\s\-_,()/]+/).filter(Boolean);
    for (const tok of tokens) {
      const tokLatin = normalize(transliterateHiToEn(tok));
      if (!tokLatin) continue;
      if (getSimilarity(qLatin, tokLatin) >= 0.78) return true;
      if (getSimilarity(qp, phoneticKey(tok)) >= 0.85) return true;
    }
  }

  return false;
};

// Find "Did you mean?" suggestions
export const findDidYouMean = <T extends { name?: string; title?: string }>(
  query: string,
  items: T[],
  threshold = 0.4,
  maxSuggestions = 3
): string[] => {
  if (!query || query.length < 2) return [];

  const normalizedQuery = query.toLowerCase();
  const qLatin = normalize(transliterateHiToEn(query));
  const qPhon = phoneticKey(query);
  const suggestions: { name: string; similarity: number }[] = [];

  items.forEach((item) => {
    const display = item.name || item.title || "";
    const name = display.toLowerCase();
    const nameLatin = normalize(transliterateHiToEn(display));
    const namePhon = phoneticKey(display);
    const words = name.split(/[\s\-()]+/).filter(Boolean);

    let similarity = getSimilarity(normalizedQuery, name);
    if (qLatin && nameLatin) {
      similarity = Math.max(similarity, getSimilarity(qLatin, nameLatin));
    }
    if (qPhon && namePhon) {
      // Phonetic similarity is a strong signal — weight slightly higher.
      similarity = Math.max(similarity, getSimilarity(qPhon, namePhon) * 0.95);
    }

    words.forEach((word) => {
      const wordSim = getSimilarity(normalizedQuery, word);
      if (wordSim > similarity) similarity = wordSim;
      const wp = phoneticKey(word);
      if (qPhon && wp && qPhon === wp) similarity = Math.max(similarity, 0.92);
    });

    if (name.startsWith(normalizedQuery) || words.some((w) => w.startsWith(normalizedQuery))) {
      similarity = Math.max(similarity, 0.7);
    }

    if (similarity >= threshold && similarity < 1) {
      suggestions.push({ name: display, similarity });
    }
  });

  return [...new Set(
    suggestions
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, maxSuggestions)
      .map((s) => s.name)
  )];
};

// Common/popular diseases for fallback
export const popularDiseases = [
  "Diabetes (Madhumeha)",
  "Hypertension (Raktachap)",
  "Arthritis (Sandhivata)",
  "Migraine (Ardhavabhedaka)",
  "Acidity (Amlapitta)",
  "Constipation (Vibandha)",
  "Common Cold (Pratishyaya)",
  "Insomnia (Anidra)",
  "Anxiety (Chinta)",
  "Back Pain (Katigraha)",
];
