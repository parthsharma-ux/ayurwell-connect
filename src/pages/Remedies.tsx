import { useState } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { remedies, remedyCategories } from "@/data/remedies";
import { Search, Filter, Clock, Leaf } from "lucide-react";

const Remedies = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = remedies.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.problem.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || r.problem === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Home Remedies</h1>
        <p className="text-muted-foreground mb-8">Natural solutions using kitchen ingredients</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search remedies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 pl-12 pr-8 rounded-xl border border-border bg-card appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">All Problems</option>
              {remedyCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

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
      </div>
    </Layout>
  );
};

export default Remedies;
