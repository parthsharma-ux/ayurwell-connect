import { useState, useMemo } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { remedies, remedyCategories } from "@/data/remedies";
import { Search, Filter, Clock, Leaf, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Get all unique ingredients from remedies
const allIngredients = [...new Set(
  remedies.flatMap(r => r.ingredients.map(i => i.name))
)].sort();

const Remedies = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedIngredient, setSelectedIngredient] = useState("all");

  const filtered = useMemo(() => {
    return remedies.filter((r) => {
      const searchLower = search.toLowerCase();
      const matchesSearch = !search || 
        r.title.toLowerCase().includes(searchLower) || 
        r.problem.toLowerCase().includes(searchLower) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(searchLower));
      
      const matchesCategory = category === "all" || r.problem === category;
      
      const matchesIngredient = selectedIngredient === "all" || 
        r.ingredients.some(i => i.name === selectedIngredient);
      
      return matchesSearch && matchesCategory && matchesIngredient;
    });
  }, [search, category, selectedIngredient]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSelectedIngredient("all");
  };

  const hasActiveFilters = search || category !== "all" || selectedIngredient !== "all";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Home Remedies</h1>
        <p className="text-muted-foreground mb-8">Natural solutions using kitchen ingredients</p>
        
        {/* Search and Filters */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by remedy name, symptom, or ingredient..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 pl-12 pr-4 rounded-xl"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px] h-10 rounded-lg">
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="All Symptoms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Symptoms</SelectItem>
                {remedyCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
              <SelectTrigger className="w-[180px] h-10 rounded-lg">
                <Leaf className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="All Ingredients" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ingredients</SelectItem>
                {allIngredients.map((ing) => (
                  <SelectItem key={ing} value={ing}>{ing}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-3 h-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Active filters display */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-sm text-muted-foreground">Showing {filtered.length} remedies</span>
            {category !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {category}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setCategory("all")} />
              </Badge>
            )}
            {selectedIngredient !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {selectedIngredient}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedIngredient("all")} />
              </Badge>
            )}
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <Leaf className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium mb-2">No remedies found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((remedy) => (
              <LocalizedLink
                key={remedy.id}
                to={`/remedies/${remedy.id}`}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-card transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{remedy.problem}</span>
                    <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">{remedy.difficulty}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{remedy.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Leaf className="h-4 w-4 text-secondary" />
                    <span>{remedy.ingredients.slice(0, 2).map((i) => i.name).join(", ")}</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-muted/50 border-t border-border flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{remedy.preparation_time}</span>
                </div>
              </LocalizedLink>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Remedies;
