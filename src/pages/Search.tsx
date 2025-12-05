import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { diseases } from "@/data/diseases";
import { medicines } from "@/data/medicines";
import { remedies } from "@/data/remedies";
import { Search as SearchIcon, Pill, Leaf, Activity, Filter, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Normalize string for better search matching
const normalize = (str: string) => str.toLowerCase().replace(/[\s-_]/g, "");

type FilterCategory = "all" | "diseases" | "medicines" | "remedies";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.trim()) {
      setSearchParams({ q: newQuery.trim() });
    }
  };

  const q = query.toLowerCase();
  const normalizedQ = normalize(query);
  
  const filteredDiseases = diseases.filter((d) => 
    d.name.toLowerCase().includes(q) || 
    normalize(d.name).includes(normalizedQ) ||
    d.symptoms.some((s) => s.toLowerCase().includes(q) || normalize(s).includes(normalizedQ))
  );
  
  const filteredMedicines = medicines.filter((m) => 
    m.name.toLowerCase().includes(q) || 
    normalize(m.name).includes(normalizedQ) ||
    m.uses.some((u) => u.toLowerCase().includes(q) || normalize(u).includes(normalizedQ))
  );
  
  const filteredRemedies = remedies.filter((r) => 
    r.title.toLowerCase().includes(q) || 
    normalize(r.title).includes(normalizedQ) ||
    r.problem.toLowerCase().includes(q) || 
    normalize(r.problem).includes(normalizedQ)
  );

  const totalResults = filteredDiseases.length + filteredMedicines.length + filteredRemedies.length;

  const filters: { id: FilterCategory; label: string; count: number; icon: React.ReactNode; color: string }[] = [
    { id: "all", label: "All Results", count: totalResults, icon: <Sparkles className="h-4 w-4" />, color: "text-accent" },
    { id: "diseases", label: "Diseases", count: filteredDiseases.length, icon: <Activity className="h-4 w-4" />, color: "text-primary" },
    { id: "medicines", label: "Medicines", count: filteredMedicines.length, icon: <Pill className="h-4 w-4" />, color: "text-accent" },
    { id: "remedies", label: "Remedies", count: filteredRemedies.length, icon: <Leaf className="h-4 w-4" />, color: "text-secondary" },
  ];

  const showDiseases = activeFilter === "all" || activeFilter === "diseases";
  const showMedicines = activeFilter === "all" || activeFilter === "medicines";
  const showRemedies = activeFilter === "all" || activeFilter === "remedies";

  return (
    <Layout>
      <div className="min-h-screen bg-glow">
        {/* Hero Search Section */}
        <div className="relative py-12 md:py-16 border-b border-border/50">
          <div className="absolute inset-0 bg-gradient-premium opacity-50" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Search <span className="text-gradient-terracotta">Results</span>
              </h1>
              {query && (
                <p className="text-muted-foreground">
                  Found <span className="text-accent font-semibold">{totalResults}</span> results for "{query}"
                </p>
              )}
            </div>

            {/* Search Input */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search diseases, medicines, remedies..."
                  className="w-full h-14 pl-14 pr-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 text-lg transition-all shadow-card"
                />
                {query && (
                  <button
                    onClick={() => handleSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filter Tabs */}
          {query && (
            <div className="mb-8 animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by category</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "gold" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`gap-2 transition-all ${
                      activeFilter === filter.id 
                        ? "shadow-glow-gold" 
                        : "hover:border-primary/50 bg-card/50"
                    }`}
                  >
                    <span className={activeFilter === filter.id ? "" : filter.color}>
                      {filter.icon}
                    </span>
                    {filter.label}
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeFilter === filter.id 
                        ? "bg-background/20" 
                        : "bg-muted"
                    }`}>
                      {filter.count}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {query && (
            <div className="space-y-12">
              {/* Diseases Section */}
              {showDiseases && filteredDiseases.length > 0 && (
                <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Activity className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Diseases</h2>
                      <p className="text-sm text-muted-foreground">{filteredDiseases.length} results found</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredDiseases.slice(0, activeFilter === "diseases" ? 12 : 6).map((d) => (
                      <Link 
                        key={d.id} 
                        to={`/diseases/${d.id}`} 
                        className="group p-5 bg-card/50 glass-premium rounded-xl border border-border/50 hover:border-primary/50 hover-lift transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Activity className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                              {d.name.split("(")[0].trim()}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{d.category}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {d.symptoms.slice(0, 2).map((s, i) => (
                                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {activeFilter === "all" && filteredDiseases.length > 6 && (
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setActiveFilter("diseases")}
                    >
                      View all {filteredDiseases.length} diseases
                    </Button>
                  )}
                </section>
              )}

              {/* Medicines Section */}
              {showMedicines && filteredMedicines.length > 0 && (
                <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-accent/10">
                      <Pill className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Medicines</h2>
                      <p className="text-sm text-muted-foreground">{filteredMedicines.length} results found</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredMedicines.slice(0, activeFilter === "medicines" ? 16 : 8).map((m) => (
                      <Link 
                        key={m.id} 
                        to={`/medicines/${m.id}`} 
                        className="group p-5 bg-card/50 glass-premium rounded-xl border border-border/50 hover:border-accent/50 hover-lift transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                            <Pill className="h-4 w-4 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                              {m.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 truncate">{m.brand}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {activeFilter === "all" && filteredMedicines.length > 8 && (
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setActiveFilter("medicines")}
                    >
                      View all {filteredMedicines.length} medicines
                    </Button>
                  )}
                </section>
              )}

              {/* Remedies Section */}
              {showRemedies && filteredRemedies.length > 0 && (
                <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-secondary/10">
                      <Leaf className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold">Home Remedies</h2>
                      <p className="text-sm text-muted-foreground">{filteredRemedies.length} results found</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredRemedies.slice(0, activeFilter === "remedies" ? 12 : 6).map((r) => (
                      <Link 
                        key={r.id} 
                        to={`/remedies/${r.id}`} 
                        className="group p-5 bg-card/50 glass-premium rounded-xl border border-border/50 hover:border-secondary/50 hover-lift transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                            <Leaf className="h-4 w-4 text-secondary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                              {r.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{r.problem}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {activeFilter === "all" && filteredRemedies.length > 6 && (
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setActiveFilter("remedies")}
                    >
                      View all {filteredRemedies.length} remedies
                    </Button>
                  )}
                </section>
              )}

              {/* No Results */}
              {!filteredDiseases.length && !filteredMedicines.length && !filteredRemedies.length && (
                <div className="text-center py-20 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                    <SearchIcon className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">No results found</h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    We couldn't find anything for "{query}"
                  </p>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Try searching with different keywords or browse our categories
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {!query && (
            <div className="text-center py-20 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-premium mb-6">
                <SearchIcon className="h-10 w-10 text-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Start Searching</h3>
              <p className="text-muted-foreground text-lg">
                Type a disease, symptom, or remedy to find Ayurvedic solutions
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;