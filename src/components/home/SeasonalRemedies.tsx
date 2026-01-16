import { useMemo } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { remedies } from "@/data/remedies";
import { getLocalizedRemedy } from "@/lib/localizedData";
import { Sun, Cloud, Snowflake, Leaf, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Determine current season based on month (India-centric)
const getCurrentSeason = (): "monsoon" | "winter" | "summer" => {
  const month = new Date().getMonth(); // 0-11
  // Monsoon: June-September (5-8)
  // Winter: October-February (9-11, 0-1)
  // Summer: March-May (2-4)
  if (month >= 5 && month <= 8) return "monsoon";
  if (month >= 9 || month <= 1) return "winter";
  return "summer";
};

const seasonConfig = {
  monsoon: {
    label: { en: "Monsoon", hi: "मानसून" },
    description: { 
      en: "Stay healthy during the rainy season with these traditional remedies", 
      hi: "इन पारंपरिक उपचारों से बारिश के मौसम में स्वस्थ रहें" 
    },
    icon: Cloud,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    categories: ["Monsoon Infections", "Fungal Infections", "Waterborne Diseases"]
  },
  winter: {
    label: { en: "Winter", hi: "सर्दी" },
    description: { 
      en: "Traditional warming remedies to keep you healthy this winter", 
      hi: "इस सर्दी में स्वस्थ रहने के लिए पारंपरिक गर्म उपचार" 
    },
    icon: Snowflake,
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconColor: "text-indigo-500",
    categories: ["Winter Cold", "Winter Immunity", "Winter Joint Pain", "Dry Skin (Winter)", "Sore Throat (Winter)"]
  },
  summer: {
    label: { en: "Summer", hi: "गर्मी" },
    description: { 
      en: "Beat the heat with these cooling Ayurvedic remedies", 
      hi: "इन शीतल आयुर्वेदिक उपचारों से गर्मी को मात दें" 
    },
    icon: Sun,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
    categories: ["Heat Stroke", "Summer Heat", "Prickly Heat", "Sunburn", "Summer Dehydration", "Summer Fatigue"]
  }
};

const SeasonalRemedies = () => {
  const { language } = useLanguage();
  const currentSeason = getCurrentSeason();
  const config = seasonConfig[currentSeason];
  const SeasonIcon = config.icon;

  const seasonalRemedies = useMemo(() => {
    return remedies
      .filter(r => config.categories.includes(r.problem))
      .slice(0, 4)
      .map(r => getLocalizedRemedy(r, language));
  }, [language, config.categories]);

  if (seasonalRemedies.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${config.gradient}`}>
              <SeasonIcon className={`h-8 w-8 ${config.iconColor}`} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-display text-2xl md:text-3xl font-bold">
                  {language === "hi" ? `${config.label.hi} के लिए उपचार` : `${config.label.en} Remedies`}
                </h2>
                <Badge variant="secondary" className="text-xs">
                  {language === "hi" ? "इस मौसम" : "This Season"}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {config.description[language]}
              </p>
            </div>
          </div>
          <LocalizedLink
            to="/remedies"
            className="flex items-center gap-2 text-primary hover:underline font-medium"
          >
            {language === "hi" ? "सभी उपचार देखें" : "View all remedies"}
            <ArrowRight className="h-4 w-4" />
          </LocalizedLink>
        </div>

        {/* Season Indicator Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(seasonConfig).map(([key, season]) => {
            const Icon = season.icon;
            const isActive = key === currentSeason;
            return (
              <div
                key={key}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  isActive 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{season.label[language]}</span>
                {isActive && (
                  <span className="text-xs opacity-80">
                    ({language === "hi" ? "वर्तमान" : "Current"})
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Remedy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasonalRemedies.map((remedy) => (
            <LocalizedLink
              key={remedy.id}
              to={`/remedies/${remedy.id}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${config.gradient}`} />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <SeasonIcon className={`h-4 w-4 ${config.iconColor}`} />
                  <span className="text-xs font-medium text-muted-foreground">{remedy.problem}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {remedy.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Leaf className="h-4 w-4 text-secondary" />
                  <span className="truncate">
                    {remedy.ingredients.slice(0, 2).map((i: { name: string }) => i.name).join(", ")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{remedy.preparation_time}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {remedy.difficulty}
                  </Badge>
                </div>
              </div>
            </LocalizedLink>
          ))}
        </div>

        {/* Season Tips */}
        <div className={`mt-10 p-6 rounded-2xl bg-gradient-to-br ${config.gradient} border border-border`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-background/80 ${config.iconColor}`}>
              <SeasonIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {language === "hi" 
                  ? `${config.label.hi} के मौसम के लिए सुझाव` 
                  : `${config.label.en} Season Tips`}
              </h3>
              {currentSeason === "monsoon" && (
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {language === "hi" ? "उबला हुआ पानी पिएं" : "Drink boiled or filtered water"}</li>
                  <li>• {language === "hi" ? "हल्का और ताजा खाना खाएं" : "Eat light and freshly cooked food"}</li>
                  <li>• {language === "hi" ? "बारिश में भीगने से बचें" : "Avoid getting drenched in rain"}</li>
                  <li>• {language === "hi" ? "तुलसी और अदरक का काढ़ा पिएं" : "Drink tulsi and ginger kadha daily"}</li>
                </ul>
              )}
              {currentSeason === "winter" && (
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {language === "hi" ? "गर्म तेल से मालिश करें" : "Massage with warm sesame oil"}</li>
                  <li>• {language === "hi" ? "च्यवनप्राश रोजाना लें" : "Take Chyawanprash daily for immunity"}</li>
                  <li>• {language === "hi" ? "गर्म पानी पिएं" : "Drink warm water throughout the day"}</li>
                  <li>• {language === "hi" ? "सूप और काढ़ा लें" : "Include soups and warm kadhas"}</li>
                </ul>
              )}
              {currentSeason === "summer" && (
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {language === "hi" ? "छाछ और नारियल पानी पिएं" : "Drink buttermilk and coconut water"}</li>
                  <li>• {language === "hi" ? "धूप में जाने से बचें" : "Avoid going out in peak sun"}</li>
                  <li>• {language === "hi" ? "खीरा और तरबूज खाएं" : "Eat cooling foods like cucumber and watermelon"}</li>
                  <li>• {language === "hi" ? "आम पन्ना पिएं" : "Drink Aam Panna to prevent heat stroke"}</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalRemedies;
