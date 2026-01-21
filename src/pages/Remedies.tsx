import { useState, useMemo, useEffect } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { remedies, remedyCategories } from "@/data/remedies";
import { Search, Filter, Clock, Leaf, X, Baby, Heart, Sun, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

// SEO JSON-LD structured data hook
const useRemediesSEO = (language: string) => {
  useEffect(() => {
    document.title = language === "hi" 
      ? "घरेलू उपचार - आयुर्वेदिक प्राकृतिक उपचार | AyurVeda"
      : "Home Remedies - Ayurvedic Natural Remedies | AyurVeda";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', language === "hi"
      ? "200+ आयुर्वेदिक घरेलू उपचार खोजें। मधुमेह, उच्च रक्तचाप, गठिया और अधिक के लिए प्राकृतिक समाधान।"
      : "Discover 200+ Ayurvedic home remedies. Natural solutions for diabetes, hypertension, arthritis, and more using kitchen ingredients."
    );

    const existingScript = document.querySelector('script[type="application/ld+json"][data-page="remedies"]');
    if (existingScript) existingScript.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": language === "hi" ? "आयुर्वेदिक घरेलू उपचार" : "Ayurvedic Home Remedies",
      "description": language === "hi" 
        ? "रसोई की सामग्री से प्राकृतिक स्वास्थ्य समाधान"
        : "Natural health solutions using kitchen ingredients",
      "url": window.location.href,
      "numberOfItems": remedies.length,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": remedies.slice(0, 20).map((remedy, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "HowTo",
            "name": remedy.title,
            "description": `${remedy.problem} remedy using ${remedy.ingredients.map(i => i.name).join(", ")}`,
            "totalTime": remedy.preparation_time,
            "supply": remedy.ingredients.map(i => ({
              "@type": "HowToSupply",
              "name": i.name,
              "requiredQuantity": i.quantity
            })),
            "step": remedy.method.map((step, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "text": step
            }))
          }
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
          { "@type": "ListItem", "position": 2, "name": language === "hi" ? "उपचार" : "Remedies", "item": "/remedies" }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page', 'remedies');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptEl = document.querySelector('script[type="application/ld+json"][data-page="remedies"]');
      if (scriptEl) scriptEl.remove();
    };
  }, [language]);
};

// Get all unique ingredients from remedies
const allIngredients = [...new Set(
  remedies.flatMap(r => r.ingredients.map(i => i.name))
)].sort();

// Define category groups
const categoryGroups = {
  all: {
    label: { en: "All", hi: "सभी" },
    icon: Sparkles,
    categories: remedyCategories
  },
  general: {
    label: { en: "General", hi: "सामान्य" },
    icon: Leaf,
    categories: [
      "Diabetes", "Hypertension", "Arthritis", "Acidity", "Constipation", "Asthma",
      "Migraine", "Anxiety", "Skin Disorders", "Hair Fall", "Insomnia", "Cold & Cough",
      "Thyroid", "Piles", "Kidney Stones", "Anemia", "Joint Pain", "UTI", "Sinusitis",
      "Weight Loss", "Immunity", "Menstrual Cramps", "Back Pain", "Eye Strain", "Memory",
      "Liver Health", "Tooth Pain", "Sore Throat", "Fever", "Nausea", "Fatigue", "Stress",
      "Allergies", "Bloating", "Headache", "Acne", "Dark Circles", "Dry Skin", "Cough",
      "Bad Breath", "Muscle Cramps", "Ear Infection", "Hiccups", "Mouth Ulcers", "Sunburn",
      "Dandruff", "Heartburn", "Chapped Lips", "Leg Cramps", "Motion Sickness", "Food Poisoning",
      "Vertigo", "Weak Eyesight", "Cracked Heels", "Stomach Ache", "Diarrhea", "Dehydration",
      "Gas", "Intestinal Worms", "Body Odor", "Common Cold", "Chest Congestion", "Runny Nose",
      "Low Energy", "Hangover", "Bruises", "Bee Sting", "Minor Burns"
    ]
  },
  seasonal: {
    label: { en: "Seasonal", hi: "मौसमी" },
    icon: Sun,
    categories: [
      "Monsoon Infections", "Fungal Infections", "Waterborne Diseases",
      "Winter Cold", "Winter Immunity", "Winter Joint Pain", "Dry Skin (Winter)",
      "Summer Heat", "Heat Stroke", "Prickly Heat", "Summer Dehydration", "Summer Fatigue"
    ]
  },
  children: {
    label: { en: "Children", hi: "बच्चे" },
    icon: Baby,
    categories: [
      "Teething Pain (Children)", "Colic (Infants)", "Bed Wetting",
      "Loss of Appetite (Children)", "Common Cold (Children)", "Stomach Worms (Children)",
      "Diaper Rash", "Weak Immunity (Children)"
    ]
  },
  women: {
    label: { en: "Women", hi: "महिला" },
    icon: Heart,
    categories: [
      "PCOS", "Heavy Periods", "Pregnancy Nausea", "Lactation Support",
      "Menopause Symptoms", "Menopause Hot Flashes", "Leucorrhea",
      "Iron Deficiency (Women)", "Postpartum Care", "UTI (Women)"
    ]
  }
};

const Remedies = () => {
  const { language } = useLanguage();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedIngredient, setSelectedIngredient] = useState("all");
  const [activeGroup, setActiveGroup] = useState<keyof typeof categoryGroups>("all");

  // Apply SEO structured data
  useRemediesSEO(language);

  // Get categories for the active group
  const activeCategories = useMemo(() => {
    return categoryGroups[activeGroup].categories;
  }, [activeGroup]);

  const filtered = useMemo(() => {
    return remedies.filter((r) => {
      const searchLower = search.toLowerCase();
      const matchesSearch = !search || 
        r.title.toLowerCase().includes(searchLower) || 
        r.problem.toLowerCase().includes(searchLower) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(searchLower));
      
      // Filter by category group first
      const matchesGroup = activeGroup === "all" || 
        categoryGroups[activeGroup].categories.includes(r.problem);
      
      const matchesCategory = category === "all" || r.problem === category;
      
      const matchesIngredient = selectedIngredient === "all" || 
        r.ingredients.some(i => i.name === selectedIngredient);
      
      return matchesSearch && matchesGroup && matchesCategory && matchesIngredient;
    });
  }, [search, category, selectedIngredient, activeGroup]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSelectedIngredient("all");
  };

  const hasActiveFilters = search || category !== "all" || selectedIngredient !== "all";

  // Get count per group for display
  const groupCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.entries(categoryGroups).forEach(([key, group]) => {
      if (key === "all") {
        counts[key] = remedies.length;
      } else {
        counts[key] = remedies.filter(r => group.categories.includes(r.problem)).length;
      }
    });
    return counts;
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          {language === "hi" ? "घरेलू उपचार" : "Home Remedies"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {language === "hi" ? "रसोई की सामग्री से प्राकृतिक समाधान" : "Natural solutions using kitchen ingredients"}
        </p>

        {/* Category Group Tabs */}
        <Tabs 
          value={activeGroup} 
          onValueChange={(val) => {
            setActiveGroup(val as keyof typeof categoryGroups);
            setCategory("all"); // Reset category when changing group
          }}
          className="mb-6"
        >
          <TabsList className="h-auto flex-wrap gap-2 bg-transparent p-0">
            {Object.entries(categoryGroups).map(([key, group]) => {
              const Icon = group.icon;
              return (
                <TabsTrigger 
                  key={key}
                  value={key}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                  <span>{group.label[language]}</span>
                  <Badge 
                    variant="secondary" 
                    className="ml-1 h-5 px-1.5 text-xs data-[state=active]:bg-primary-foreground/20 data-[state=active]:text-primary-foreground"
                  >
                    {groupCounts[key]}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
        
        {/* Search and Filters */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === "hi" ? "उपचार, लक्षण या सामग्री खोजें..." : "Search by remedy name, symptom, or ingredient..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 pl-12 pr-4 rounded-xl"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[200px] h-10 rounded-lg">
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder={language === "hi" ? "सभी लक्षण" : "All Symptoms"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "hi" ? "सभी लक्षण" : "All Symptoms"}</SelectItem>
                {activeCategories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
              <SelectTrigger className="w-[200px] h-10 rounded-lg">
                <Leaf className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder={language === "hi" ? "सभी सामग्री" : "All Ingredients"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "hi" ? "सभी सामग्री" : "All Ingredients"}</SelectItem>
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
                {language === "hi" ? "फ़िल्टर साफ करें" : "Clear filters"}
              </button>
            )}
          </div>
        </div>

        {/* Active filters display */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-sm text-muted-foreground">
              {language === "hi" ? `${filtered.length} उपचार दिखा रहे हैं` : `Showing ${filtered.length} remedies`}
            </span>
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
            <h3 className="text-lg font-medium mb-2">
              {language === "hi" ? "कोई उपचार नहीं मिला" : "No remedies found"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === "hi" ? "अपनी खोज या फ़िल्टर समायोजित करें" : "Try adjusting your search or filters"}
            </p>
            <button
              onClick={clearFilters}
              className="text-primary hover:underline"
            >
              {language === "hi" ? "सभी फ़िल्टर साफ करें" : "Clear all filters"}
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
