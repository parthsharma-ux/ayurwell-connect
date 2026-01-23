import { useMemo } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { remedies } from "@/data/remedies";
import { getLocalizedRemedy } from "@/lib/localizedData";
import { ChefHat, Clock, Flame, ArrowRight, Leaf, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Popular daily-use remedies for common issues
const POPULAR_REMEDY_IDS = [
  "remedy-6",   // Turmeric Golden Milk (Arthritis/Immunity)
  "remedy-9",   // Cold Milk (Acidity)
  "remedy-1",   // Fenugreek Seeds Water (Diabetes)
  "remedy-15",  // Ginger Honey Tea (Asthma/Cold)
  "remedy-4",   // Garlic Honey Mixture (Hypertension)
  "remedy-12",  // Triphala Water (Constipation)
  "remedy-10",  // Fennel Seeds Water (Acidity)
  "remedy-11",  // Banana and Cardamom (Acidity)
  "remedy-14",  // Papaya Honey (Constipation)
  "remedy-17",  // Black Pepper and Honey (Asthma)
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/10 text-green-600 border-green-500/30";
    case "Medium":
      return "bg-amber-500/10 text-amber-600 border-amber-500/30";
    case "Advanced":
      return "bg-red-500/10 text-red-600 border-red-500/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPrepTimeMinutes = (prepTime: string): number => {
  const match = prepTime.match(/(\d+)/);
  return match ? parseInt(match[1]) : 30;
};

const QuickKitchenRemedies = () => {
  const { language } = useLanguage();

  const quickRemedies = useMemo(() => {
    return POPULAR_REMEDY_IDS
      .map(id => remedies.find(r => r.id === id))
      .filter(Boolean)
      .slice(0, 8)
      .map(r => getLocalizedRemedy(r!, language));
  }, [language]);

  if (quickRemedies.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-green-500/20">
              <ChefHat className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-display text-2xl md:text-3xl font-bold">
                  {language === "hi" ? "🍳 त्वरित रसोई उपचार" : "🍳 Quick Kitchen Remedies"}
                </h2>
                <Badge variant="secondary" className="text-xs bg-secondary/20 text-secondary border-secondary/30">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {language === "hi" ? "लोकप्रिय" : "Popular"}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {language === "hi" 
                  ? "रसोई की सामग्री से बने आसान और प्रभावी घरेलू नुस्खे" 
                  : "Simple, effective remedies made with everyday kitchen ingredients"}
              </p>
            </div>
          </div>
          <LocalizedLink
            to="/remedies"
            className="flex items-center gap-2 text-secondary hover:underline font-medium"
          >
            {language === "hi" ? "सभी उपचार देखें" : "View all remedies"}
            <ArrowRight className="h-4 w-4" />
          </LocalizedLink>
        </div>

        {/* Remedies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickRemedies.map((remedy, index) => (
            <LocalizedLink
              key={remedy.id}
              to={`/remedies/${remedy.id}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg hover:border-secondary/40 transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Top color bar based on prep time */}
              <div className={`h-1.5 ${getPrepTimeMinutes(remedy.preparation_time) <= 5 ? "bg-green-500" : getPrepTimeMinutes(remedy.preparation_time) <= 15 ? "bg-amber-500" : "bg-orange-500"}`} />
              
              <div className="p-5">
                {/* Problem badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {remedy.problem}
                  </span>
                  <Badge variant="outline" className={`text-xs ${getDifficultyColor(remedy.difficulty)}`}>
                    {language === "hi" 
                      ? remedy.difficulty === "Easy" ? "आसान" : remedy.difficulty === "Medium" ? "मध्यम" : "कठिन"
                      : remedy.difficulty}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                  {remedy.title}
                </h3>

                {/* Ingredients preview */}
                <div className="flex items-start gap-2 mb-4">
                  <Leaf className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {remedy.ingredients.slice(0, 3).map((i: { name: string }) => i.name).join(", ")}
                    {remedy.ingredients.length > 3 && ` +${remedy.ingredients.length - 3}`}
                  </p>
                </div>

                {/* Footer with prep time */}
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className={`font-medium ${getPrepTimeMinutes(remedy.preparation_time) <= 5 ? "text-green-600" : "text-muted-foreground"}`}>
                      {remedy.preparation_time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Flame className="h-3 w-3" />
                    <span>{language === "hi" ? "रोजाना" : "Daily Use"}</span>
                  </div>
                </div>
              </div>
            </LocalizedLink>
          ))}
        </div>

        {/* Quick tip callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-secondary/10 via-green-500/5 to-transparent border border-secondary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-secondary/20 text-secondary">
              <ChefHat className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {language === "hi" ? "💡 रसोई टिप" : "💡 Kitchen Tip"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === "hi" 
                  ? "ये उपचार सबसे अच्छा काम करते हैं जब ताजी सामग्री का उपयोग किया जाता है। अदरक, हल्दी, शहद, और नींबू हमेशा अपनी रसोई में रखें।"
                  : "These remedies work best with fresh ingredients. Keep ginger, turmeric, honey, and lemon always stocked in your kitchen for quick healing."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickKitchenRemedies;
