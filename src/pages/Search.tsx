import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { diseases } from "@/data/diseases";
import { medicines } from "@/data/medicines";
import { remedies } from "@/data/remedies";
import { Search as SearchIcon, Pill, Leaf, Activity } from "lucide-react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const q = query.toLowerCase();
  const filteredDiseases = diseases.filter((d) => d.name.toLowerCase().includes(q) || d.symptoms.some((s) => s.toLowerCase().includes(q)));
  const filteredMedicines = medicines.filter((m) => m.name.toLowerCase().includes(q) || m.uses.some((u) => u.toLowerCase().includes(q)));
  const filteredRemedies = remedies.filter((r) => r.title.toLowerCase().includes(q) || r.problem.toLowerCase().includes(q));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search diseases, medicines, remedies..."
              className="w-full h-14 pl-14 pr-6 rounded-2xl border-2 border-border bg-card text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-lg"
            />
          </div>
        </div>

        {query && (
          <div className="space-y-12">
            {filteredDiseases.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary" /> Diseases ({filteredDiseases.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredDiseases.slice(0, 6).map((d) => (
                    <Link key={d.id} to={`/diseases/${d.id}`} className="p-4 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                      <h3 className="font-semibold">{d.name.split("(")[0]}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{d.category}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {filteredMedicines.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                  <Pill className="h-6 w-6 text-accent" /> Medicines ({filteredMedicines.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredMedicines.slice(0, 8).map((m) => (
                    <Link key={m.id} to={`/medicines/${m.id}`} className="p-4 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                      <h3 className="font-semibold">{m.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{m.brand}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {filteredRemedies.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-secondary" /> Remedies ({filteredRemedies.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredRemedies.slice(0, 6).map((r) => (
                    <Link key={r.id} to={`/remedies/${r.id}`} className="p-4 bg-card rounded-xl border border-border hover:shadow-card transition-all">
                      <h3 className="font-semibold">{r.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{r.problem}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {!filteredDiseases.length && !filteredMedicines.length && !filteredRemedies.length && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No results found for "{query}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Search;
