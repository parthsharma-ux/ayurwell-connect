import { useState, useMemo, useEffect } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { remedies, remedyCategories, getRemedyRegion } from "@/data/remedies";
import { Search, Filter, Clock, Leaf, X, Baby, Heart, Sun, Sparkles, Brain, Eye, Bone, Activity, Droplets, Wind, Zap, MapPin, ChefHat, ArrowRight } from "lucide-react";
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
    label: { en: "All Systems", hi: "सभी अंग" },
    icon: Sparkles,
    conditions: [] as string[]
  },
  heart: {
    label: { en: "Heart & Blood", hi: "हृदय और रक्त" },
    icon: Heart,
    conditions: ["Hypertension", "High Cholesterol", "Anemia", "Iron Deficiency (Women)", "Heart Health"]
  },
  brain: {
    label: { en: "Brain & Mind", hi: "मस्तिष्क और मन" },
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
    label: { en: "Kidney & Urinary", hi: "गुर्दा और मूत्र" },
    icon: Droplets,
    conditions: ["Kidney Stones", "UTI", "UTI (Women)", "Dehydration"]
  },
  bones: {
    label: { en: "Bones & Joints", hi: "हड्डी और जोड़" },
    icon: Bone,
    conditions: ["Arthritis", "Joint Pain", "Back Pain", "Muscle Cramps", "Leg Cramps", "Winter Joint Pain", "Autoimmune Support"]
  },
  skin: {
    label: { en: "Skin & Hair", hi: "त्वचा और बाल" },
    icon: Zap,
    conditions: ["Skin Disorders", "Hair Fall", "Acne", "Dark Circles", "Dry Skin", "Dandruff", "Chapped Lips", "Cracked Heels", "Sunburn", "Dry Skin (Winter)", "Prickly Heat", "Fungal Infections"]
  },
  eyes: {
    label: { en: "Eyes & Ears", hi: "आँख और कान" },
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
    return remedies.filter(r => kitchenRemedyIds.includes(r.id) || r.id.startsWith('kitchen-')).slice(0, 12);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          {language === "hi" ? "घरेलू उपचार" : "Home Remedies"}
        </h1>
        <p className="text-muted-foreground mb-4">
          {language === "hi" ? "रसोई की सामग्री से प्राकृतिक समाधान" : "Natural solutions using kitchen ingredients"}
        </p>
        
        {/* Region Badge */}
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="outline" className="gap-1.5 py-1.5 px-3">
            <MapPin className="h-3.5 w-3.5" />
            <span>{getRegionName(region, language)}</span>
          </Badge>
          <button
            onClick={() => setPrioritizeLocal(!prioritizeLocal)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              prioritizeLocal 
                ? 'bg-primary/10 border-primary text-primary' 
                : 'border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {prioritizeLocal 
              ? (language === "hi" ? "✓ स्थानीय उपचार प्राथमिकता" : "✓ Local remedies first")
              : (language === "hi" ? "सभी उपचार दिखाएं" : "Show all remedies")}
          </button>
        </div>

        {/* Quick Kitchen Remedies Section */}
        <section className="mb-10 bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 rounded-2xl p-6 border border-secondary/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-secondary/20 rounded-xl">
                <ChefHat className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {language === "hi" ? "🍳 झटपट रसोई उपचार" : "🍳 Quick Kitchen Remedies"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {language === "hi" ? "घर में उपलब्ध सामग्री से तुरंत राहत" : "Instant relief with ingredients already in your kitchen"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {kitchenRemedies.map((remedy) => (
              <LocalizedLink
                key={remedy.id}
                to={`/remedies/${remedy.id}`}
                className="group bg-card hover:bg-card/80 rounded-xl p-4 border border-border hover:border-secondary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
                    {remedy.problem}
                  </Badge>
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-sm mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                  {remedy.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Leaf className="h-3 w-3 text-secondary" />
                  <span className="truncate">{remedy.ingredients.slice(0, 2).map(i => i.name).join(", ")}</span>
                </div>
                <div className="mt-2 text-[10px] text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {remedy.preparation_time}
                </div>
              </LocalizedLink>
            ))}
          </div>
        </section>

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

        {/* Body System Filter - Compact Horizontal Bar */}
        <div className="mb-6 -mx-4 px-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-muted-foreground">
              {language === "hi" ? "शरीर के अंग" : "Body System"}
            </h3>
          </div>
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-1.5 pb-2 min-w-max">
              {Object.entries(bodySystems).map(([key, system]) => {
                const Icon = system.icon;
                const count = bodySystemCounts[key] || 0;
                const isActive = activeBodySystem === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveBodySystem(key as keyof typeof bodySystems)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{system.label[language]}</span>
                    <span className="sm:hidden">{key === "all" ? (language === "hi" ? "सभी" : "All") : system.label[language].split(" ")[0]}</span>
                    <span className={`text-[10px] px-1 py-0.5 rounded-full min-w-[18px] text-center ${
                      isActive ? "bg-primary-foreground/20" : "bg-background"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
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
            {activeBodySystem !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {bodySystems[activeBodySystem].label[language]}
                <X className="h-3 w-3 cursor-pointer" onClick={() => setActiveBodySystem("all")} />
              </Badge>
            )}
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
