import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, Leaf, Heart, Brain, Pill, Home, ArrowRight, Loader2, AlertCircle, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { diseases } from "@/data/diseases";
import { medicines } from "@/data/medicines";
import { remedies } from "@/data/remedies";
import { normalize, findDidYouMean, popularDiseases } from "@/lib/fuzzySearch";
import { useVoiceSearch } from "@/hooks/useVoiceSearch";
import VoiceSearchButton from "@/components/VoiceSearchButton";
import { useToast } from "@/hooks/use-toast";

type SuggestionItem = {
  id: string;
  name: string;
  category: string;
  type: "disease" | "medicine" | "remedy";
};

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [didYouMean, setDidYouMean] = useState<string[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Voice Search
  const handleVoiceResult = useCallback((transcript: string) => {
    setSearchQuery(transcript);
    handleInputChange(transcript);
    toast({
      title: "🎤 Voice captured",
      description: `Searching for "${transcript}"`,
    });
  }, []);

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

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      setSuggestions([]);
      setDidYouMean([]);
      setShowNoResults(false);
      navigate({
        pathname: "/search",
        search: `q=${encodeURIComponent(trimmedQuery)}`
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSuggestionClick = (item: SuggestionItem) => {
    setSuggestions([]);
    setDidYouMean([]);
    setShowNoResults(false);
    setSearchQuery("");
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
    handleInputChange(term);
  };

  const handleInputChange = useCallback((value: string) => {
    setSearchQuery(value);
    setDidYouMean([]);
    setShowNoResults(false);
    
    if (value.length > 1) {
      setIsSearching(true);
      
      // Debounce the search
      const timeoutId = setTimeout(() => {
        const normalizedValue = normalize(value);
        const lowerValue = value.toLowerCase();
        
        const filteredDiseases: SuggestionItem[] = diseases
          .filter((d) =>
            d.name.toLowerCase().includes(lowerValue) ||
            normalize(d.name).includes(normalizedValue) ||
            d.symptoms.some((s) => 
              s.toLowerCase().includes(lowerValue) || 
              normalize(s).includes(normalizedValue)
            )
          )
          .slice(0, 3)
          .map((d) => ({
            id: d.id,
            name: d.name,
            category: d.category,
            type: "disease" as const
          }));

        const filteredMedicines: SuggestionItem[] = medicines
          .filter((m) =>
            m.name.toLowerCase().includes(lowerValue) ||
            normalize(m.name).includes(normalizedValue) ||
            m.uses.some((u) => 
              u.toLowerCase().includes(lowerValue) || 
              normalize(u).includes(normalizedValue)
            )
          )
          .slice(0, 3)
          .map((m) => ({
            id: m.id,
            name: m.name,
            category: m.brand,
            type: "medicine" as const
          }));

        const filteredRemedies: SuggestionItem[] = remedies
          .filter((r) =>
            r.title.toLowerCase().includes(lowerValue) ||
            normalize(r.title).includes(normalizedValue) ||
            r.problem.toLowerCase().includes(lowerValue) ||
            normalize(r.problem).includes(normalizedValue)
          )
          .slice(0, 2)
          .map((r) => ({
            id: r.id,
            name: r.title,
            category: r.problem,
            type: "remedy" as const
          }));

        const allSuggestions = [...filteredDiseases, ...filteredMedicines, ...filteredRemedies];
        setSuggestions(allSuggestions);
        
        // If no results, find "Did you mean?" suggestions
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
        return "Disease";
      case "medicine":
        return "Medicine";
      case "remedy":
        return "Remedy";
    }
  };

  const popularSearches = [
    "Diabetes",
    "Joint Pain",
    "Acidity",
    "Hair Fall",
    "Anxiety",
    "Cold & Cough",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-sm font-medium mb-8 animate-fade-in-up shadow-glow-gold">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-gradient-premium">India's #1 Ayurvedic Health Platform</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
            Discover the Power of{" "}
            <span className="text-gradient-terracotta relative">
              Ayurveda
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-50" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Search any disease or symptom to unlock{" "}
            <span className="text-primary font-medium">ancient remedies</span>,{" "}
            <span className="text-accent font-medium">natural medicines</span>, and{" "}
            <span className="text-secondary font-medium">holistic wellness</span> tips.
          </p>

          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="relative flex items-center">
                <Search className="absolute left-5 h-5 w-5 text-muted-foreground z-10" />
                <input
                  type="text"
                  value={isListening ? interimTranscript || searchQuery : searchQuery}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={isListening ? "Listening... speak now" : "Search diseases, medicines, or remedies..."}
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
                    <span className="hidden sm:inline">Search</span>
                    <ArrowRight className="h-5 w-5 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Voice Listening Indicator */}
            {isListening && (
              <div className="absolute top-full left-0 right-0 mt-3 glass-premium rounded-2xl border border-primary/50 shadow-glow-terracotta z-50 p-6 animate-scale-in">
                <div className="flex items-center justify-center gap-3">
                  <div className="relative">
                    <Mic className="h-6 w-6 text-primary animate-pulse" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full animate-ping" />
                  </div>
                  <span className="text-foreground font-medium">
                    {interimTranscript || "Listening... speak your symptom or disease"}
                  </span>
                </div>
              </div>
            )}

            {/* Loading Indicator */}
            {isSearching && searchQuery.length > 1 && (
              <div className="absolute top-full left-0 right-0 mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated z-50 p-6 animate-scale-in">
                <div className="flex items-center justify-center gap-3">
                  <Loader2 className="h-5 w-5 text-primary animate-spin" />
                  <span className="text-muted-foreground">Searching...</span>
                </div>
              </div>
            )}

            {/* Suggestions Dropdown */}
            {!isSearching && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated z-50 overflow-hidden animate-scale-in">
                {suggestions.map((item) => (
                  <button
                    key={`${item.type}-${item.id}`}
                    onClick={() => handleSuggestionClick(item)}
                    className="w-full px-5 py-4 text-left hover:bg-muted/50 transition-colors flex items-center gap-4 border-b border-border/20 last:border-0"
                  >
                    <div className="p-2 rounded-lg bg-muted/50">
                      {getIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{item.category}</p>
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium">
                      {getTypeLabel(item.type)}
                    </span>
                  </button>
                ))}
                <button
                  onClick={handleSearch}
                  className="w-full px-5 py-4 text-left hover:bg-primary/10 transition-colors flex items-center gap-4 bg-muted/30"
                >
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Search className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    Search all results for "<span className="text-primary font-semibold">{searchQuery}</span>"
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary ml-auto" />
                </button>
              </div>
            )}

            {/* Did You Mean? Suggestions */}
            {!isSearching && didYouMean.length > 0 && suggestions.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated z-50 p-5 animate-scale-in">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Did you mean?</span>
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
                    Search anyway for "<span className="text-foreground font-medium">{searchQuery}</span>"
                  </span>
                </button>
              </div>
            )}

            {/* No Results - Try Common Diseases */}
            {!isSearching && showNoResults && searchQuery.length >= 3 && (
              <div className="absolute top-full left-0 right-0 mt-3 glass-premium rounded-2xl border border-border/30 shadow-elevated z-50 p-5 animate-scale-in">
                <div className="text-center mb-4">
                  <p className="text-muted-foreground text-sm">
                    No matches for "<span className="text-foreground font-medium">{searchQuery}</span>"
                  </p>
                </div>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Try these common diseases:
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
                    Search anyway for "<span className="text-foreground font-medium">{searchQuery}</span>"
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Popular Searches */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground py-2">Popular:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => handleInputChange(term)}
                className="px-4 py-2 text-sm rounded-full glass hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all hover:shadow-soft"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors group-hover:shadow-glow-terracotta">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                1000<span className="text-primary">+</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Diseases</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors group-hover:shadow-glow-gold">
                <Leaf className="h-7 w-7 text-accent" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                10K<span className="text-accent">+</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Medicines</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-4 group-hover:bg-secondary/20 transition-colors group-hover:shadow-glow-sage">
                <Brain className="h-7 w-7 text-secondary" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                1000<span className="text-secondary">+</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Remedies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;