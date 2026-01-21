import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { diseases, diseaseCategories } from "@/data/diseases";
import { Search, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// SEO JSON-LD structured data hook
const useDiseasesSEO = (language: string) => {
  useEffect(() => {
    document.title = language === "hi" 
      ? "रोग और स्थितियां - आयुर्वेदिक उपचार | AyurVeda"
      : "Diseases & Conditions - Ayurvedic Treatment | AyurVeda";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', language === "hi"
      ? "विभिन्न स्वास्थ्य स्थितियों के लिए आयुर्वेदिक उपचार खोजें। लक्षण, आहार युक्तियां और प्राकृतिक उपचार।"
      : "Find Ayurvedic treatments for various health conditions. Symptoms, diet tips, yoga, and natural remedies for holistic healing."
    );

    const existingScript = document.querySelector('script[type="application/ld+json"][data-page="diseases"]');
    if (existingScript) existingScript.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": language === "hi" ? "रोग और स्थितियां" : "Diseases & Conditions",
      "description": language === "hi" 
        ? "स्वास्थ्य स्थितियों के लिए आयुर्वेदिक समाधान खोजें"
        : "Find Ayurvedic solutions for health conditions",
      "url": window.location.href,
      "specialty": "Ayurveda",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": diseases.length,
        "itemListElement": diseases.slice(0, 20).map((disease, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "MedicalCondition",
            "name": disease.name,
            "description": disease.description,
            "signOrSymptom": disease.symptoms.map(s => ({
              "@type": "MedicalSignOrSymptom",
              "name": s
            })),
            "possibleTreatment": {
              "@type": "MedicalTherapy",
              "name": "Ayurvedic Treatment",
              "medicineSystem": "Ayurveda"
            }
          }
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
          { "@type": "ListItem", "position": 2, "name": language === "hi" ? "रोग" : "Diseases", "item": "/diseases" }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page', 'diseases');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptEl = document.querySelector('script[type="application/ld+json"][data-page="diseases"]');
      if (scriptEl) scriptEl.remove();
    };
  }, [language]);
};

const Diseases = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "");

  // Apply SEO structured data
  useDiseasesSEO(language);

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
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          {language === "hi" ? "रोग और स्थितियां" : "Diseases & Conditions"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {language === "hi" ? "स्वास्थ्य स्थितियों के लिए आयुर्वेदिक समाधान खोजें" : "Find Ayurvedic solutions for health conditions"}
        </p>
        
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
