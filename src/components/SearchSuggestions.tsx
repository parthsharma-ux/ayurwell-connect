import { Lightbulb, Search as SearchIcon, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { findDidYouMean, getSimilarity, normalize } from "@/lib/fuzzySearch";

interface SuggestionItem {
  name?: string;
  title?: string;
}

interface SearchSuggestionsProps {
  query: string;
  items: SuggestionItem[];
  categories: string[];
  activeCategory?: string;
  language?: "en" | "hi";
  onPickQuery: (q: string) => void;
  onPickCategory: (c: string) => void;
  onClear: () => void;
  popular?: string[];
  emptyTitle?: string;
  emptyDescription?: string;
}

const SearchSuggestions = ({
  query,
  items,
  categories,
  activeCategory,
  language = "en",
  onPickQuery,
  onPickCategory,
  onClear,
  popular = [],
  emptyTitle,
  emptyDescription,
}: SearchSuggestionsProps) => {
  const t = (en: string, hi: string) => (language === "hi" ? hi : en);

  // Closest matches (Did you mean?)
  const didYouMean = query.trim().length >= 2 ? findDidYouMean(query, items, 0.4, 5) : [];

  // Related categories: fuzzy match on the query
  const q = normalize(query);
  const relatedCategories = q.length >= 2
    ? categories
        .filter((c) => c && c !== activeCategory)
        .map((c) => ({ c, score: Math.max(getSimilarity(q, normalize(c)), normalize(c).includes(q) ? 0.9 : 0) }))
        .filter((x) => x.score >= 0.45)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map((x) => x.c)
    : [];

  return (
    <Card className="border-dashed">
      <CardContent className="py-10 px-6">
        <div className="text-center mb-6">
          <SearchIcon className="h-10 w-10 mx-auto text-muted-foreground/40 mb-3" />
          <h3 className="text-lg font-semibold mb-1">
            {emptyTitle || t("No results found", "कोई परिणाम नहीं मिला")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {emptyDescription ||
              t(
                "Try one of these suggestions instead.",
                "इनमें से कोई एक सुझाव आज़माएँ।"
              )}
          </p>
        </div>

        {didYouMean.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
              <Lightbulb className="h-4 w-4 text-primary" />
              {t("Did you mean?", "क्या आपका मतलब था?")}
            </div>
            <div className="flex flex-wrap gap-2">
              {didYouMean.map((s) => (
                <button
                  key={s}
                  onClick={() => onPickQuery(s)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {relatedCategories.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
              <Tag className="h-4 w-4 text-accent" />
              {t("Related categories", "संबंधित श्रेणियाँ")}
            </div>
            <div className="flex flex-wrap gap-2">
              {relatedCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => onPickCategory(c)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground hover:bg-accent/20 border border-accent/20 transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {didYouMean.length === 0 && relatedCategories.length === 0 && popular.length > 0 && (
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
              <Lightbulb className="h-4 w-4 text-primary" />
              {t("Popular searches", "लोकप्रिय खोजें")}
            </div>
            <div className="flex flex-wrap gap-2">
              {popular.slice(0, 8).map((p) => (
                <button
                  key={p}
                  onClick={() => onPickQuery(p)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-foreground hover:bg-muted/70 border border-border transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="text-center pt-2">
          <button
            onClick={onClear}
            className="text-primary hover:underline text-sm font-medium"
          >
            {t("Clear all filters", "सभी फ़िल्टर साफ करें")}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchSuggestions;
