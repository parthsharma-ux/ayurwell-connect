import { useState, useMemo, useEffect } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { medicines, medicineCategories } from "@/data/medicines";
import { Search, Filter, Package, Tag, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 24;

const Medicines = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return medicines.filter((m) => {
      const matchesSearch = !q || m.name.toLowerCase().includes(q) ||
        m.uses.some((u) => u.toLowerCase().includes(q));
      const matchesCategory = !category || m.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  // Reset to first page when filters change
  useEffect(() => { setPage(1); }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Ayurvedic Medicines</h1>
        <p className="text-muted-foreground mb-8">Classical and proprietary Ayurvedic formulations</p>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search medicines..."
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
              {medicineCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <span>
            Showing {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–{Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length}
          </span>
          <span>Page {currentPage} of {totalPages}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginated.map((medicine) => (
            <LocalizedLink
              key={medicine.id}
              to={`/medicines/${medicine.id}`}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">{medicine.brand}</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Package className="h-3 w-3" />{medicine.form}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{medicine.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{medicine.uses.slice(0, 2).join(", ")}</p>
              {medicine.price_range && (
                <div className="flex items-center gap-1 text-sm">
                  <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="font-medium">{medicine.price_range}</span>
                </div>
              )}
            </LocalizedLink>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No medicines match your filters.
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 h-10 px-4 rounded-lg border border-border bg-card hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
              .map((p, idx, arr) => (
                <span key={p} className="flex items-center gap-2">
                  {idx > 0 && arr[idx - 1] !== p - 1 && <span className="text-muted-foreground">…</span>}
                  <button
                    onClick={() => setPage(p)}
                    className={`h-10 min-w-10 px-3 rounded-lg border transition-colors ${
                      p === currentPage
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border hover:bg-muted"
                    }`}
                  >
                    {p}
                  </button>
                </span>
              ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 h-10 px-4 rounded-lg border border-border bg-card hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Sticky WhatsApp CTA */}
        <a
          href="https://wa.me/919079173435?text=Hi%2C%20I%20want%20to%20buy%20Ayurvedic%20medicine"
          target="_blank"
          rel="noreferrer"
          className="fixed right-6 bottom-6 z-50"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
            <MessageCircle className="h-6 w-6" />
          </div>
        </a>
      </div>
    </Layout>
  );
};

export default Medicines;
