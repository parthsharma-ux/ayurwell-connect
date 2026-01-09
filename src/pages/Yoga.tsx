import { useState } from "react";
import { Search, Filter, Clock, Activity, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { yogaAsanas, yogaCategories } from "@/data/yoga";
import SEOHead from "@/components/SEOHead";

const Yoga = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const { language, t } = useLanguage();

  const filteredAsanas = yogaAsanas.filter((asana) => {
    const searchTerm = search.toLowerCase();
    const name = language === "hi" ? asana.name_hi : asana.name;
    const matchesSearch =
      name.toLowerCase().includes(searchTerm) ||
      asana.sanskrit_name.toLowerCase().includes(searchTerm) ||
      asana.benefits.some((b) => b.toLowerCase().includes(searchTerm)) ||
      asana.diseases_helped.some((d) => d.toLowerCase().includes(searchTerm));
    
    const matchesCategory = category === "all" || asana.category === category;
    const matchesDifficulty = difficulty === "all" || asana.difficulty === difficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "Intermediate":
        return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "Advanced":
        return "bg-rose-500/10 text-rose-600 border-rose-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <SEOHead
        titleKey="meta_yoga_title"
        descriptionKey="meta_yoga_description"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {language === "hi" ? "प्राचीन भारतीय विज्ञान" : "Ancient Indian Science"}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-terracotta">
              {language === "hi" ? "योग आसन" : "Yoga Asanas"}
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "hi"
              ? "रोग निवारण, प्रतिरक्षा बढ़ाने और समग्र स्वास्थ्य के लिए पारंपरिक योग आसन"
              : "Traditional yoga postures for disease prevention, immunity boosting, and holistic wellness"}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={
                language === "hi"
                  ? "आसन, लाभ या रोग खोजें..."
                  : "Search asana, benefit, or disease..."
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder={language === "hi" ? "श्रेणी" : "Category"} />
            </SelectTrigger>
            <SelectContent>
              {yogaCategories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {language === "hi" ? cat.name_hi : cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Activity className="h-4 w-4 mr-2" />
              <SelectValue placeholder={language === "hi" ? "कठिनाई" : "Difficulty"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {language === "hi" ? "सभी स्तर" : "All Levels"}
              </SelectItem>
              <SelectItem value="Beginner">
                {language === "hi" ? "आसान" : "Beginner"}
              </SelectItem>
              <SelectItem value="Intermediate">
                {language === "hi" ? "मध्यम" : "Intermediate"}
              </SelectItem>
              <SelectItem value="Advanced">
                {language === "hi" ? "कठिन" : "Advanced"}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          {language === "hi"
            ? `${filteredAsanas.length} आसन मिले`
            : `${filteredAsanas.length} asanas found`}
        </p>

        {/* Yoga Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAsanas.map((asana) => (
            <LocalizedLink
              key={asana.id}
              to={`/yoga/${asana.id}`}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {asana.image ? (
                    <img 
                      src={asana.image} 
                      alt={language === "hi" ? asana.name_hi : asana.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-6xl opacity-50">🧘</div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge className={getDifficultyColor(asana.difficulty)}>
                      {language === "hi" ? asana.difficulty_hi : asana.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="p-5">
                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {language === "hi" ? asana.name_hi : asana.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {asana.sanskrit_name}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {language === "hi" ? asana.description_hi : asana.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {language === "hi" ? asana.duration_hi : asana.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Activity className="h-4 w-4" />
                      {language === "hi" ? asana.category_hi : asana.category}
                    </span>
                  </div>

                  {/* Dosha Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {asana.dosha_balance.map((dosha) => (
                      <Badge
                        key={dosha}
                        variant="outline"
                        className="text-xs bg-primary/5"
                      >
                        {dosha}
                      </Badge>
                    ))}
                  </div>

                  {/* Benefits Preview */}
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Heart className="h-4 w-4" />
                    <span>
                      {language === "hi"
                        ? `${asana.benefits_hi.length} लाभ`
                        : `${asana.benefits.length} benefits`}
                    </span>
                  </div>
                </div>
              </div>
            </LocalizedLink>
          ))}
        </div>

        {/* Empty State */}
        {filteredAsanas.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">
              {language === "hi" ? "कोई आसन नहीं मिला" : "No asanas found"}
            </h3>
            <p className="text-muted-foreground">
              {language === "hi"
                ? "अपनी खोज या फ़िल्टर बदलने का प्रयास करें"
                : "Try changing your search or filters"}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Yoga;
