import { useState, useMemo, useEffect } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { remedies, remedyCategories, getRemedyRegion } from "@/data/remedies";
import { Search, Filter, Clock, Leaf, X, Baby, Heart, Sun, Sparkles, Brain, Eye, Bone, Activity, Droplets, Wind, Zap, MapPin, ChefHat } from "lucide-react";
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
import { useLanguage, Region } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

// Kitchen remedies - quick access items with simple ingredients
const kitchenRemedyIds = [
  "kitchen-51", "kitchen-52", "kitchen-53", "kitchen-55", "kitchen-56",
  "kitchen-57", "kitchen-58", "kitchen-74", "kitchen-75", "kitchen-76",
  "kitchen-83", "kitchen-84", "kitchen-85", "kitchen-90", "kitchen-91"
];
import { getRegionName } from "@/hooks/useGeoLocation";

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

// Body system categories with their associated conditions
const bodySystems = {
  all: {
    label: { en: "All", hi: "सभी" },
    icon: Sparkles,
    conditions: [] as string[]
  },
  heart: {
    label: { en: "Heart", hi: "हृदय" },
    icon: Heart,
    conditions: ["Hypertension", "High Cholesterol", "Anemia", "Iron Deficiency (Women)", "Heart Health"]
  },
  brain: {
    label: { en: "Brain", hi: "मस्तिष्क" },
    icon: Brain,
    conditions: ["Migraine", "Anxiety", "Insomnia", "Memory", "Stress", "Headache", "Vertigo", "Neuropathy", "Stroke Recovery"]
  },
  digestive: {
    label: { en: "Digestive", hi: "पाचन" },
    icon: Activity,
    conditions: ["Acidity", "Constipation", "Piles", "Bloating", "Gas", "Heartburn", "Nausea", "Diarrhea", "Stomach Ache", "Food Poisoning", "Intestinal Worms", "Liver Health", "Fatty Liver"]
  },
  respiratory: {
    label: { en: "Respiratory", hi: "श्वसन" },
    icon: Wind,
    conditions: ["Asthma", "Cold & Cough", "Sinusitis", "Cough", "Sore Throat", "Common Cold", "Chest Congestion", "Runny Nose", "Allergies", "Seasonal Allergies"]
  },
  kidney: {
    label: { en: "Kidney", hi: "गुर्दा" },
    icon: Droplets,
    conditions: ["Kidney Stones", "UTI", "UTI (Women)", "Dehydration"]
  },
  bones: {
    label: { en: "Bones", hi: "हड्डी" },
    icon: Bone,
    conditions: ["Arthritis", "Joint Pain", "Back Pain", "Muscle Cramps", "Leg Cramps", "Winter Joint Pain", "Autoimmune Support"]
  },
  skin: {
    label: { en: "Skin", hi: "त्वचा" },
    icon: Zap,
    conditions: ["Skin Disorders", "Hair Fall", "Acne", "Dark Circles", "Dry Skin", "Dandruff", "Chapped Lips", "Cracked Heels", "Sunburn", "Dry Skin (Winter)", "Prickly Heat", "Fungal Infections"]
  },
  eyes: {
    label: { en: "Eyes", hi: "आँख" },
    icon: Eye,
    conditions: ["Eye Strain", "Weak Eyesight", "Ear Infection"]
  },
  metabolic: {
    label: { en: "Metabolic", hi: "चयापचय" },
    icon: Activity,
    conditions: ["Diabetes", "Thyroid", "Weight Loss", "Obesity", "Type 2 Diabetes Support", "Fatigue", "Low Energy"]
  },
  immunity: {
    label: { en: "Immunity", hi: "प्रतिरक्षा" },
    icon: Sparkles,
    conditions: ["Immunity", "Winter Immunity", "Weak Immunity (Children)", "Flu & Viral Fever", "Fever", "Cancer Support", "Monsoon Infections", "Waterborne Diseases"]
  }
};

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
  const { language, preferredRegion } = useLanguage();
  const region = preferredRegion;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedIngredient, setSelectedIngredient] = useState("all");
  const [activeGroup, setActiveGroup] = useState<keyof typeof categoryGroups>("all");
  const [activeBodySystem, setActiveBodySystem] = useState<keyof typeof bodySystems>("all");
  const [prioritizeLocal, setPrioritizeLocal] = useState(true);

  // Apply SEO structured data
  useRemediesSEO(language);

  // Get categories for the active group
  const activeCategories = useMemo(() => {
    return categoryGroups[activeGroup].categories;
  }, [activeGroup]);

  const filtered = useMemo(() => {
    let results = remedies.filter((r) => {
      const searchLower = search.toLowerCase();
      const matchesSearch = !search || 
        r.title.toLowerCase().includes(searchLower) || 
        r.problem.toLowerCase().includes(searchLower) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(searchLower));
      
      const matchesGroup = activeGroup === "all" || 
        categoryGroups[activeGroup].categories.includes(r.problem);
      
      const matchesCategory = category === "all" || r.problem === category;
      
      const matchesIngredient = selectedIngredient === "all" || 
        r.ingredients.some(i => i.name === selectedIngredient);
      
      const matchesBodySystem = activeBodySystem === "all" || 
        bodySystems[activeBodySystem].conditions.includes(r.problem);
      
      return matchesSearch && matchesGroup && matchesCategory && matchesIngredient && matchesBodySystem;
    });

    // Sort to prioritize user's region if enabled
    if (prioritizeLocal && region !== 'global') {
      results = results.sort((a, b) => {
        const aRegion = getRemedyRegion(a);
        const bRegion = getRemedyRegion(b);
        const aMatch = aRegion === region || aRegion === 'global' ? 0 : 1;
        const bMatch = bRegion === region || bRegion === 'global' ? 0 : 1;
        return aMatch - bMatch;
      });
    }

    return results;
  }, [search, category, selectedIngredient, activeGroup, activeBodySystem, prioritizeLocal, region]);

  const clearFilters = () => {
    setSearch("");
    setCategory("all");
    setSelectedIngredient("all");
    setActiveBodySystem("all");
  };

  const hasActiveFilters = search || category !== "all" || selectedIngredient !== "all" || activeBodySystem !== "all";

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

  // Get count per body system for display
  const bodySystemCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.entries(bodySystems).forEach(([key, system]) => {
      if (key === "all") {
        counts[key] = remedies.length;
      } else {
        counts[key] = remedies.filter(r => system.conditions.includes(r.problem)).length;
      }
    });
    return counts;
  }, []);

  // Get kitchen remedies for quick access section
  const kitchenRemedies = useMemo(() => {
    return remedies.filter(r => kitchenRemedyIds.includes(r.id) || r.id.startsWith('kitchen-')).slice(0, 8);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Medium":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Advanced":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-background to-background border-b border-border">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-3xl">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                {language === "hi" ? "घरेलू उपचार" : "Home Remedies"}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mb-4">
                {language === "hi" 
                  ? "रसोई की सामग्री से प्राकृतिक समाधान - 200+ आयुर्वेदिक उपचार" 
                  : "Natural solutions using kitchen ingredients - 200+ Ayurvedic treatments"}
              </p>
              
              {/* Region Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="outline" className="gap-1.5 py-1.5 px-3 bg-card">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{getRegionName(region, language)}</span>
                </Badge>
                <button
                  onClick={() => setPrioritizeLocal(!prioritizeLocal)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                    prioritizeLocal 
                      ? 'bg-primary/10 border-primary/50 text-primary' 
                      : 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                  }`}
                >
                  {prioritizeLocal 
                    ? (language === "hi" ? "✓ स्थानीय उपचार" : "✓ Local first")
                    : (language === "hi" ? "सभी दिखाएं" : "Show all")}
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-6 md:py-8">
          {/* Quick Kitchen Remedies Section */}
          <section className="mb-8">
            <Card className="bg-gradient-to-br from-secondary/5 via-card to-primary/5 border-secondary/20 overflow-hidden">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/15 rounded-lg">
                    <ChefHat className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg md:text-xl font-semibold text-foreground">
                      {language === "hi" ? "झटपट रसोई उपचार" : "Quick Kitchen Remedies"}
                    </h2>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {language === "hi" ? "घर में उपलब्ध सामग्री से तुरंत राहत" : "Instant relief with common ingredients"}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                  {kitchenRemedies.map((remedy) => (
                    <LocalizedLink
                      key={remedy.id}
                      to={`/remedies/${remedy.id}`}
                      className="group bg-card/80 hover:bg-card rounded-lg p-3 border border-border/50 hover:border-secondary/40 hover:shadow-md transition-all"
                    >
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 mb-2 font-normal">
                        {remedy.problem}
                      </Badge>
                      <h3 className="font-medium text-xs md:text-sm mb-1.5 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                        {remedy.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 flex-shrink-0" />
                        <span>{remedy.preparation_time}</span>
                      </div>
                    </LocalizedLink>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Filters Section */}
          <section className="mb-6">
            <Card className="border-border/50">
              <CardContent className="p-4 md:p-5 space-y-4">
                {/* Category Group Tabs */}
                <div>
                  <Tabs 
                    value={activeGroup} 
                    onValueChange={(val) => {
                      setActiveGroup(val as keyof typeof categoryGroups);
                      setCategory("all");
                    }}
                  >
                    <TabsList className="h-auto flex flex-wrap gap-1.5 bg-transparent p-0 w-full justify-start">
                      {Object.entries(categoryGroups).map(([key, group]) => {
                        const Icon = group.icon;
                        return (
                          <TabsTrigger 
                            key={key}
                            value={key}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs md:text-sm border border-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary bg-muted/50 hover:bg-muted transition-all"
                          >
                            <Icon className="h-3.5 w-3.5" />
                            <span>{group.label[language]}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-background/50 data-[state=active]:bg-primary-foreground/20 min-w-[20px] text-center">
                              {groupCounts[key]}
                            </span>
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                  </Tabs>
                </div>

                {/* Body System Filter */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      {language === "hi" ? "शरीर के अंग" : "Body System"}
                    </span>
                  </div>
                  <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex gap-1.5 pb-1">
                      {Object.entries(bodySystems).map(([key, system]) => {
                        const Icon = system.icon;
                        const count = bodySystemCounts[key] || 0;
                        const isActive = activeBodySystem === key;
                        return (
                          <button
                            key={key}
                            onClick={() => setActiveBodySystem(key as keyof typeof bodySystems)}
                            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                              isActive 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-3 w-3" />
                            <span>{system.label[language]}</span>
                            <span className={`text-[10px] px-1 rounded ${isActive ? "bg-primary-foreground/20" : "bg-background/80"}`}>
                              {count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Search and Dropdowns */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder={language === "hi" ? "खोजें..." : "Search remedies..."}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="h-10 pl-9 pr-4 rounded-lg text-sm"
                    />
                  </div>
                  
                  <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="w-full sm:w-[160px] h-10 rounded-lg text-sm">
                        <Filter className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                        <SelectValue placeholder={language === "hi" ? "लक्षण" : "Symptom"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{language === "hi" ? "सभी लक्षण" : "All Symptoms"}</SelectItem>
                        {activeCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={selectedIngredient} onValueChange={setSelectedIngredient}>
                      <SelectTrigger className="w-full sm:w-[160px] h-10 rounded-lg text-sm">
                        <Leaf className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                        <SelectValue placeholder={language === "hi" ? "सामग्री" : "Ingredient"} />
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
                        className="flex items-center gap-1 px-3 h-10 text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                      >
                        <X className="h-3.5 w-3.5" />
                        {language === "hi" ? "साफ करें" : "Clear"}
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Active filters display */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-sm text-muted-foreground">
                {language === "hi" ? `${filtered.length} उपचार` : `${filtered.length} remedies`}
              </span>
              {activeBodySystem !== "all" && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  {bodySystems[activeBodySystem].label[language]}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setActiveBodySystem("all")} />
                </Badge>
              )}
              {category !== "all" && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  {category}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setCategory("all")} />
                </Badge>
              )}
              {selectedIngredient !== "all" && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  {selectedIngredient}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedIngredient("all")} />
                </Badge>
              )}
            </div>
          )}

          {/* Results Grid */}
          <section>
            {filtered.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="py-12 text-center">
                  <Leaf className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    {language === "hi" ? "कोई उपचार नहीं मिला" : "No remedies found"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === "hi" ? "अपनी खोज या फ़िल्टर समायोजित करें" : "Try adjusting your search or filters"}
                  </p>
                  <button
                    onClick={clearFilters}
                    className="text-primary hover:underline text-sm"
                  >
                    {language === "hi" ? "सभी फ़िल्टर साफ करें" : "Clear all filters"}
                  </button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {filtered.map((remedy) => (
                  <LocalizedLink
                    key={remedy.id}
                    to={`/remedies/${remedy.id}`}
                    className="group bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] font-medium px-2 py-0.5">
                          {remedy.problem}
                        </Badge>
                        <Badge className={`text-[10px] font-medium px-2 py-0.5 border ${getDifficultyColor(remedy.difficulty)}`}>
                          {remedy.difficulty}
                        </Badge>
                      </div>
                      <h3 className="font-display text-sm md:text-base font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {remedy.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Leaf className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                        <span className="truncate">{remedy.ingredients.slice(0, 2).map((i) => i.name).join(", ")}</span>
                      </div>
                    </div>
                    <div className="px-4 py-2.5 bg-muted/30 border-t border-border/50 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{remedy.preparation_time}</span>
                    </div>
                  </LocalizedLink>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Remedies;
