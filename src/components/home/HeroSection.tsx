import { useState, useCallback } from "react";
import { Search, Sparkles, Leaf, Heart, Brain, Pill, Home, ArrowRight, Loader2, AlertCircle, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { diseases } from "@/data/diseases";
import { medicines } from "@/data/medicines";
import { remedies } from "@/data/remedies";
import { normalize, findDidYouMean, popularDiseases } from "@/lib/fuzzySearch";
import { useVoiceSearch } from "@/hooks/useVoiceSearch";
import VoiceSearchButton from "@/components/VoiceSearchButton";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedNavigate } from "@/hooks/useLocalizedNavigate";

type SuggestionItem = {
  id: string;
  name: string;
  category: string;
  type: "disease" | "medicine" | "remedy";
  preview?: string; // Symptoms/uses snippet
};

const MAX_DROPDOWN_RESULTS = 6;

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [didYouMean, setDidYouMean] = useState<string[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [activeSuggestionFilter, setActiveSuggestionFilter] = useState<
    "all" | SuggestionItem["type"]
  >("all");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useLocalizedNavigate();
  const { toast } = useToast();
  const { t, language } = useLanguage();

  // Voice Search
  const handleVoiceResult = useCallback((transcript: string) => {
    setSearchQuery(transcript);
    handleInputChange(transcript);
    toast({
      title: t("hero_voice_captured"),
      description: `${t("hero_searching_for")} "${transcript}"`,
    });
  }, [t]);

  const handleVoiceError = useCallback((error: string) => {
    toast({
      variant: "destructive",
      title: "Voice Search Error",
      description: error,
    });
  }, []);

  const { isListening, isSupported, interimTranscript, toggleListening } = useVoiceSearch({
    onResult: handleVoiceResult,
    onError: handleVoiceError,
  });

  const isDropdownOpen =
    isListening ||
    (isSearching && searchQuery.length > 1) ||
    suggestions.length > 0 ||
    didYouMean.length > 0 ||
    (showNoResults && searchQuery.length >= 3);

  const suggestionCounts = {
    disease: suggestions.filter((s) => s.type === "disease").length,
    medicine: suggestions.filter((s) => s.type === "medicine").length,
    remedy: suggestions.filter((s) => s.type === "remedy").length,
  };

  const visibleSuggestions =
    activeSuggestionFilter === "all"
      ? suggestions.slice(0, MAX_DROPDOWN_RESULTS)
      : suggestions.filter((s) => s.type === activeSuggestionFilter).slice(0, MAX_DROPDOWN_RESULTS);

  // Reset selected index when suggestions change
  const resetSelection = () => setSelectedIndex(-1);

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      setSuggestions([]);
      setDidYouMean([]);
      setShowNoResults(false);
      setActiveSuggestionFilter("all");
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < visibleSuggestions.length) {
        handleSuggestionClick(visibleSuggestions[selectedIndex]);
      } else {
        handleSearch();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => 
        prev < visibleSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Escape") {
      setSuggestions([]);
      setDidYouMean([]);
      setShowNoResults(false);
      resetSelection();
    }
  };

  const handleSuggestionClick = (item: SuggestionItem) => {
    setSuggestions([]);
    setDidYouMean([]);
    setShowNoResults(false);
    setActiveSuggestionFilter("all");
    setSearchQuery("");
    resetSelection();
    if (item.type === "disease") {
      navigate(`/diseases/${item.id}`);
    } else if (item.type === "medicine") {
      navigate(`/medicines/${item.id}`);
    } else {
      navigate(`/remedies/${item.id}`);
    }
  };

  const handleDidYouMeanClick = (term: string) => {
    setSearchQuery(term);
    setActiveSuggestionFilter("all");
    resetSelection();
    handleInputChange(term);
  };

  const handleViewAllCategory = (type: SuggestionItem["type"]) => {
    setSuggestions([]);
    navigate(`/search?q=${encodeURIComponent(searchQuery)}&filter=${type === "disease" ? "diseases" : type === "medicine" ? "medicines" : "remedies"}`);
  };

  const handleInputChange = useCallback((value: string) => {
    setSearchQuery(value);
    setDidYouMean([]);
    setShowNoResults(false);
    setActiveSuggestionFilter("all");
    setSelectedIndex(-1);
    
    if (value.length > 1) {
      setIsSearching(true);
      
      const timeoutId = setTimeout(() => {
        const normalizedValue = normalize(value);
        const lowerValue = value.toLowerCase();
        
        // Score function: higher score = better match
        const getMatchScore = (text: string, query: string, normalizedQuery: string): number => {
          const lowerText = text.toLowerCase();
          const normalizedText = normalize(text);
          
          // Exact match gets highest priority
          if (lowerText === query) return 100;
          // Starts with query
          if (lowerText.startsWith(query)) return 90;
          // Word starts with query (e.g., "Type 2 Diabetes" when searching "Diabetes")
          if (lowerText.split(/[\s\-()]+/).some(w => w.startsWith(query))) return 80;
          // Contains query as substring in name
          if (lowerText.includes(query)) return 70;
          // Normalized match
          if (normalizedText.includes(normalizedQuery)) return 60;
          return 0;
        };
        
        // Filter and score diseases - prioritize name matches over symptom matches
        const scoredDiseases = diseases
          .map((d) => {
            const nameScore = getMatchScore(d.name, lowerValue, normalizedValue);
            const symptomScore = d.symptoms.some((s) => 
              s.toLowerCase().includes(lowerValue) || 
              normalize(s).includes(normalizedValue)
            ) ? 30 : 0;
            const score = Math.max(nameScore, symptomScore);
            return { disease: d, score };
          })
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 6)
          .map(({ disease: d }) => ({
            id: d.id,
            name: d.name,
            category: d.category,
            type: "disease" as const,
            preview: d.symptoms.slice(0, 2).join(", ")
          }));

        // Filter and score medicines - prioritize name matches over uses
        const scoredMedicines = medicines
          .map((m) => {
            const nameScore = getMatchScore(m.name, lowerValue, normalizedValue);
            const usesScore = m.uses.some((u) => 
              u.toLowerCase().includes(lowerValue) || 
              normalize(u).includes(normalizedValue)
            ) ? 20 : 0;
            const score = Math.max(nameScore, usesScore);
            return { medicine: m, score };
          })
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 4)
          .map(({ medicine: m }) => ({
            id: m.id,
            name: m.name,
            category: m.brand,
            type: "medicine" as const,
            preview: m.uses.slice(0, 2).join(", ")
          }));

        // Filter and score remedies
        const scoredRemedies = remedies
          .map((r) => {
            const titleScore = getMatchScore(r.title, lowerValue, normalizedValue);
            const problemScore = getMatchScore(r.problem, lowerValue, normalizedValue);
            const score = Math.max(titleScore, problemScore);
            return { remedy: r, score };
          })
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 4)
          .map(({ remedy: r }) => ({
            id: r.id,
            name: r.title,
            category: r.problem,
            type: "remedy" as const,
            preview: r.ingredients?.slice(0, 3).join(", ") || r.problem
          }));

        // Combine all suggestions (we'll limit per filter in visibleSuggestions)
        const allSuggestions = [...scoredDiseases, ...scoredMedicines, ...scoredRemedies];
        setSuggestions(allSuggestions);
        
        if (allSuggestions.length === 0 && value.length >= 3) {
          const allItems = [
            ...diseases.map(d => ({ name: d.name })),
            ...medicines.map(m => ({ name: m.name })),
            ...remedies.map(r => ({ name: r.title, title: r.title }))
          ];
          const fuzzyMatches = findDidYouMean(value, allItems, 0.35, 3);
          setDidYouMean(fuzzyMatches);
          setShowNoResults(fuzzyMatches.length === 0);
        }
        
        setIsSearching(false);
      }, 150);
      
      return () => clearTimeout(timeoutId);
    } else {
      setSuggestions([]);
      setIsSearching(false);
    }
  }, []);

  const getIcon = (type: SuggestionItem["type"]) => {
    switch (type) {
      case "disease":
        return <Heart className="h-4 w-4 text-primary flex-shrink-0" />;
      case "medicine":
        return <Pill className="h-4 w-4 text-accent flex-shrink-0" />;
      case "remedy":
        return <Home className="h-4 w-4 text-secondary flex-shrink-0" />;
    }
  };

  const getTypeLabel = (type: SuggestionItem["type"]) => {
    switch (type) {
      case "disease":
        return t("nav_diseases");
      case "medicine":
        return t("nav_medicines");
      case "remedy":
        return t("nav_remedies");
    }
  };

  const popularSearches = language === "hi" 
    ? [t("popular_diabetes"), t("popular_joint_pain"), t("popular_acidity"), t("popular_hair_fall"), t("popular_anxiety"), t("popular_cold_cough")]
    : ["Diabetes", "Joint Pain", "Acidity", "Hair Fall", "Anxiety", "Cold & Cough"];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-sm font-medium mb-8 animate-fade-in-up shadow-glow-gold">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-gradient-premium">{t("hero_badge")}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
            {t("hero_title_1")}{" "}
            <span className="text-gradient-terracotta relative">
              {t("hero_title_2")}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-50" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            {t("hero_subtitle_1")}{" "}
            <span className="text-primary font-medium">{t("hero_subtitle_2")}</span>,{" "}
            <span className="text-accent font-medium">{t("hero_subtitle_3")}</span>, and{" "}
            <span className="text-secondary font-medium">{t("hero_subtitle_4")}</span>.
          </p>

           <div className="relative max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="relative flex items-center">
                <Search className="absolute left-5 h-5 w-5 text-muted-foreground z-10" />
                <input
                  type="text"
                  value={isListening ? interimTranscript || searchQuery : searchQuery}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isListening ? t("hero_search_listening") : t("hero_search_placeholder")}
                  className="w-full h-16 md:h-18 pl-14 pr-52 rounded-2xl border border-border/50 bg-card/90 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/20 transition-all text-lg shadow-elevated"
                  disabled={isListening}
                />
                <div className="absolute right-2 flex items-center gap-2">
                  <VoiceSearchButton
                    isListening={isListening}
                    isSupported={isSupported}
                    onClick={toggleListening}
                    size="md"
                  />
                  <Button
                    type="button"
                    onClick={handleSearch}
                    variant="gold"
                    size="lg"
                    className="h-12 shadow-glow-gold group/btn"
                    disabled={isListening}
                  >
                    <span className="hidden sm:inline">{t("hero_search_button")}</span>
                    <ArrowRight className="h-5 w-5 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {isListening && (
              <div className="mt-3 glass-premium rounded-2xl border border-primary/50 shadow-glow-terracotta p-6 animate-scale-in">
                <div className="flex items-center justify-center gap-3">
                  <div className="relative">
                    <Mic className="h-6 w-6 text-primary animate-pulse" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full animate-ping" />
                  </div>
                  <span className="text-foreground font-medium">
                    {interimTranscript || t("hero_search_listening")}
                  </span>
                </div>
              </div>
            )}

            {isSearching && searchQuery.length > 1 && (
              <div className="mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated p-6 animate-scale-in">
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  <span className="text-muted-foreground">{t("common_loading")}</span>
                </div>
              </div>
            )}

             {!isSearching && suggestions.length > 0 && (
               <div className="mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated overflow-hidden animate-scale-in max-h-[60vh] overflow-y-auto">
                 <div className="px-4 pt-4 pb-3 border-b border-border/20">
                   <div className="flex flex-wrap gap-2">
                     <button
                       type="button"
                       onClick={() => { setActiveSuggestionFilter("all"); resetSelection(); }}
                       className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                         activeSuggestionFilter === "all"
                           ? "bg-primary/15 text-primary border-primary/30"
                           : "bg-muted/40 text-muted-foreground border-border/30 hover:bg-muted/60"
                       }`}
                     >
                       All ({suggestions.length > MAX_DROPDOWN_RESULTS ? `${MAX_DROPDOWN_RESULTS}+` : suggestions.length})
                     </button>
                     <button
                       type="button"
                       onClick={() => { setActiveSuggestionFilter("disease"); resetSelection(); }}
                       className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                         activeSuggestionFilter === "disease"
                           ? "bg-primary/15 text-primary border-primary/30"
                           : "bg-muted/40 text-muted-foreground border-border/30 hover:bg-muted/60"
                       }`}
                       disabled={suggestionCounts.disease === 0}
                     >
                       {t("nav_diseases")} ({suggestionCounts.disease})
                     </button>
                     <button
                       type="button"
                       onClick={() => { setActiveSuggestionFilter("medicine"); resetSelection(); }}
                       className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                         activeSuggestionFilter === "medicine"
                           ? "bg-primary/15 text-primary border-primary/30"
                           : "bg-muted/40 text-muted-foreground border-border/30 hover:bg-muted/60"
                       }`}
                       disabled={suggestionCounts.medicine === 0}
                     >
                       {t("nav_medicines")} ({suggestionCounts.medicine})
                     </button>
                     <button
                       type="button"
                       onClick={() => { setActiveSuggestionFilter("remedy"); resetSelection(); }}
                       className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                         activeSuggestionFilter === "remedy"
                           ? "bg-primary/15 text-primary border-primary/30"
                           : "bg-muted/40 text-muted-foreground border-border/30 hover:bg-muted/60"
                       }`}
                       disabled={suggestionCounts.remedy === 0}
                     >
                       {t("nav_remedies")} ({suggestionCounts.remedy})
                     </button>
                   </div>
                 </div>

                 {visibleSuggestions.map((item, index) => (
                  <button
                    key={`${item.type}-${item.id}`}
                    onClick={() => handleSuggestionClick(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full px-5 py-3 text-left transition-colors flex items-center gap-4 border-b border-border/20 last:border-0 ${
                      selectedIndex === index ? "bg-primary/10" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${selectedIndex === index ? "bg-primary/20" : "bg-muted/50"}`}>
                      {getIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{item.name}</p>
                      {item.preview && (
                        <p className="text-xs text-muted-foreground truncate mt-0.5">
                          {item.type === "disease" ? "Symptoms: " : item.type === "medicine" ? "Uses: " : "Ingredients: "}
                          {item.preview}
                        </p>
                      )}
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium hidden sm:inline">
                      {getTypeLabel(item.type)}
                    </span>
                  </button>
                ))}

                {/* View All buttons per category */}
                {activeSuggestionFilter === "all" && suggestions.length > MAX_DROPDOWN_RESULTS && (
                  <button
                    onClick={handleSearch}
                    className="w-full px-5 py-3 text-left hover:bg-primary/10 transition-colors flex items-center gap-4 bg-muted/30 border-t border-border/20"
                  >
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Search className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {t("common_search_anyway")} "<span className="text-primary font-semibold">{searchQuery}</span>" — {language === "hi" ? "सभी परिणाम देखें" : "View all results"}
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary ml-auto" />
                  </button>
                )}

                {activeSuggestionFilter !== "all" && (
                  <button
                    onClick={() => handleViewAllCategory(activeSuggestionFilter)}
                    className="w-full px-5 py-3 text-left hover:bg-primary/10 transition-colors flex items-center gap-4 bg-muted/30 border-t border-border/20"
                  >
                    <div className="p-2 rounded-lg bg-primary/20">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {language === "hi" ? `सभी ${getTypeLabel(activeSuggestionFilter)} देखें` : `View all ${getTypeLabel(activeSuggestionFilter)}`} ({suggestionCounts[activeSuggestionFilter]}+)
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary ml-auto" />
                  </button>
                )}
              </div>
            )}

            {!isSearching && didYouMean.length > 0 && suggestions.length === 0 && (
              <div className="mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated p-5 animate-scale-in">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{t("common_did_you_mean")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {didYouMean.map((term, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDidYouMeanClick(term)}
                      className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
                    >
                      {term}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleSearch}
                  className="w-full mt-4 px-4 py-3 text-left hover:bg-muted/50 transition-colors flex items-center gap-3 rounded-xl border border-border/30"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {t("common_search_anyway")} "<span className="text-foreground font-medium">{searchQuery}</span>"
                  </span>
                </button>
              </div>
            )}

            {!isSearching && showNoResults && searchQuery.length >= 3 && (
              <div className="mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated p-5 animate-scale-in">
                <div className="text-center mb-4">
                  <p className="text-muted-foreground text-sm">
                    {t("common_no_results")} "<span className="text-foreground font-medium">{searchQuery}</span>"
                  </p>
                </div>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    {t("common_try_common")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularDiseases.slice(0, 6).map((disease, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDidYouMeanClick(disease.split("(")[0].trim())}
                        className="px-3 py-1.5 text-xs rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {disease.split("(")[0].trim()}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleSearch}
                  className="w-full mt-4 px-4 py-3 text-left hover:bg-muted/50 transition-colors flex items-center gap-3 rounded-xl border border-border/30"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {t("common_search_anyway")} "<span className="text-foreground font-medium">{searchQuery}</span>"
                  </span>
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up relative z-0" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground">{t("hero_popular_searches")}</span>
            {popularSearches.map((search) => (
              <button
                key={search}
                onClick={() => {
                  setSearchQuery(search);
                  handleInputChange(search);
                }}
                className="text-sm px-4 py-1.5 rounded-full glass-premium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                {search}
              </button>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up relative z-0" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-terracotta">{t("stat_diseases")}</p>
              <p className="text-sm text-muted-foreground mt-1">{t("stat_documented_diseases")}</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{t("stat_medicines")}</p>
              <p className="text-sm text-muted-foreground mt-1">{t("stat_herbal_medicines")}</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-premium">{t("stat_remedies")}</p>
              <p className="text-sm text-muted-foreground mt-1">{t("stat_home_remedies")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
