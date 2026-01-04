import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { diseases, diseaseCategories } from "@/data/diseases";
import { Search, Filter } from "lucide-react";

const Diseases = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) setCategory(urlCategory);
  }, [searchParams]);

  const filtered = diseases.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.symptoms.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = !category || d.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Diseases & Conditions</h1>
        <p className="text-muted-foreground mb-8">Find Ayurvedic solutions for health conditions</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search diseases..."
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
              <option value="">All Categories</option>
              {diseaseCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((disease) => (
            <LocalizedLink
              key={disease.id}
              to={`/diseases/${disease.id}`}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-all"
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                {disease.dosha_involved}
              </span>
              <h3 className="font-display text-xl font-semibold mt-3 mb-2">{disease.name.split("(")[0]}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{disease.description}</p>
              <div className="flex flex-wrap gap-1">
                {disease.symptoms.slice(0, 3).map((s) => (
                  <span key={s} className="text-xs bg-muted px-2 py-1 rounded">{s}</span>
                ))}
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Diseases;
