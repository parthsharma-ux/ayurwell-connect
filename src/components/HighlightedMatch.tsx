import { normalize, transliterateHiToEn } from "@/lib/fuzzySearch";

interface HighlightedMatchProps {
  text: string;
  query: string;
  className?: string;
}

// Find the [start, end) range in `text` that best matches `query`.
// Tries: direct substring, normalized substring (mapped back to original
// indices), and transliterated substring. Returns null if no useful match.
const findMatchRange = (text: string, query: string): [number, number] | null => {
  if (!text || !query) return null;
  const q = query.trim();
  if (!q) return null;

  const lower = text.toLowerCase();
  const ql = q.toLowerCase();
  const direct = lower.indexOf(ql);
  if (direct !== -1) return [direct, direct + ql.length];

  // Build a map from normalized-index -> original-index so we can highlight
  // back in the original string even when spaces/diacritics differ.
  const map: number[] = [];
  let normStr = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    if (/[\s\-_]/.test(ch) || ch === "") continue;
    normStr += ch;
    map.push(i);
  }

  const qn = normalize(q);
  if (qn) {
    const idx = normStr.indexOf(qn);
    if (idx !== -1 && map[idx] !== undefined) {
      const start = map[idx];
      const end = (map[idx + qn.length - 1] ?? start) + 1;
      return [start, end];
    }
  }

  // Transliteration fallback (Hindi query against English text or vice-versa)
  const qLatin = normalize(transliterateHiToEn(q));
  const tLatin = normalize(transliterateHiToEn(text));
  if (qLatin && tLatin.includes(qLatin)) {
    // We can't perfectly back-map transliterated indices to the original
    // string when scripts differ, so highlight the whole text in that case.
    return [0, text.length];
  }

  return null;
};

const HighlightedMatch = ({ text, query, className }: HighlightedMatchProps) => {
  const range = findMatchRange(text, query);
  if (!range) return <span className={className}>{text}</span>;

  const [start, end] = range;
  return (
    <span className={className}>
      {text.slice(0, start)}
      <mark className="bg-primary/25 text-primary-foreground/95 rounded px-0.5 py-0 font-semibold">
        {text.slice(start, end)}
      </mark>
      {text.slice(end)}
    </span>
  );
};

export default HighlightedMatch;
