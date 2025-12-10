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

// Find "Did you mean?" suggestions
export const findDidYouMean = <T extends { name?: string; title?: string }>(
  query: string,
  items: T[],
  threshold = 0.4,
  maxSuggestions = 3
): string[] => {
  if (!query || query.length < 2) return [];
  
  const normalizedQuery = query.toLowerCase();
  const suggestions: { name: string; similarity: number }[] = [];
  
  items.forEach((item) => {
    const name = (item.name || item.title || '').toLowerCase();
    const words = name.split(/[\s\-()]+/).filter(Boolean);
    
    // Check full name similarity
    let similarity = getSimilarity(normalizedQuery, name);
    
    // Check individual word similarity
    words.forEach((word) => {
      const wordSim = getSimilarity(normalizedQuery, word);
      if (wordSim > similarity) similarity = wordSim;
    });
    
    // Check if query starts like the name
    if (name.startsWith(normalizedQuery) || words.some(w => w.startsWith(normalizedQuery))) {
      similarity = Math.max(similarity, 0.7);
    }
    
    if (similarity >= threshold && similarity < 1) {
      suggestions.push({ name: item.name || item.title || '', similarity });
    }
  });
  
  // Sort by similarity and remove duplicates
  return [...new Set(
    suggestions
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, maxSuggestions)
      .map(s => s.name)
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

// Normalize string for search
export const normalize = (str: string) => str.toLowerCase().replace(/[\s\-_]/g, "");
