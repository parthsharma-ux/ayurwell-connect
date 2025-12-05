import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, Leaf, Heart, Brain, Pill, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { diseases } from "@/data/diseases";
import { medicines } from "@/data/medicines";
import { remedies } from "@/data/remedies";

// Normalize string for better search matching
const normalize = (str: string) => str.toLowerCase().replace(/[\s-_]/g, "");

type SuggestionItem = {
  id: string;
  name: string;
  category: string;
  type: "disease" | "medicine" | "remedy";
};

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      // Use object format to ensure proper URL construction
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
    setSearchQuery("");
    if (item.type === "disease") {
      navigate(`/diseases/${item.id}`);
    } else if (item.type === "medicine") {
      navigate(`/medicines/${item.id}`);
    } else {
      navigate(`/remedies/${item.id}`);
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    if (value.length > 1) {
      const normalizedValue = normalize(value);
      const lowerValue = value.toLowerCase();
      
      // Filter diseases
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

      // Filter medicines
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

      // Filter remedies
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

      setSuggestions([...filteredDiseases, ...filteredMedicines, ...filteredRemedies]);
    } else {
      setSuggestions([]);
    }
  };

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
    <section className="relative overflow-hidden bg-hero-pattern">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="h-4 w-4" />
            India's Largest Ayurvedic Health Platform
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Discover Natural Healing with{" "}
            <span className="text-gradient-terracotta">Ayurveda</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Search any disease or symptom to find Ayurvedic medicines, home remedies, 
            diet tips, and lifestyle guidance backed by ancient wisdom.
          </p>

          {/* Search Box */}
          <div className="relative max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-5 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search diseases, symptoms, or remedies..."
                  className="w-full h-14 md:h-16 pl-14 pr-36 rounded-2xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-card text-base"
                />
                <Button
                  type="button"
                  onClick={handleSearch}
                  variant="gold"
                  size="lg"
                  className="absolute right-2 h-10 md:h-12"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl border border-border shadow-elevated z-50 overflow-hidden animate-scale-in">
                {suggestions.map((item) => (
                  <button
                    key={`${item.type}-${item.id}`}
                    onClick={() => handleSuggestionClick(item)}
                    className="w-full px-5 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3"
                  >
                    {getIcon(item.type)}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.category}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {getTypeLabel(item.type)}
                    </span>
                  </button>
                ))}
                <button
                  onClick={handleSearch}
                  className="w-full px-5 py-3 text-left hover:bg-muted transition-colors flex items-center gap-3 border-t border-border"
                >
                  <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Search all results for "<span className="text-foreground font-medium">{searchQuery}</span>"
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => handleInputChange(term)}
                className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-display font-bold text-foreground">
                <Heart className="h-5 w-5 text-primary" />
                1000+
              </div>
              <p className="text-sm text-muted-foreground mt-1">Diseases</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-display font-bold text-foreground">
                <Leaf className="h-5 w-5 text-secondary" />
                10K+
              </div>
              <p className="text-sm text-muted-foreground mt-1">Medicines</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl md:text-3xl font-display font-bold text-foreground">
                <Brain className="h-5 w-5 text-accent" />
                1000+
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