import LocalizedLink from "@/components/LocalizedLink";
import { ArrowRight, Clock, Leaf, ChefHat } from "lucide-react";
import { remedies } from "@/data/remedies";
import { useLanguage } from "@/contexts/LanguageContext";

const PopularRemedies = () => {
  const popularRemedies = remedies.slice(0, 6);
  const { t } = useLanguage();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-50";
      case "Medium":
        return "text-amber-600 bg-amber-50";
      case "Advanced":
        return "text-red-600 bg-red-50";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-secondary mb-2">
              <ChefHat className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                {t("remedies_label")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t("remedies_title")}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              {t("remedies_subtitle")}
            </p>
          </div>
          <LocalizedLink
            to="/remedies"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            {t("remedies_view_all")}
            <ArrowRight className="h-4 w-4" />
          </LocalizedLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRemedies.map((remedy, index) => (
            <LocalizedLink
              key={remedy.id}
              to={`/remedies/${remedy.id}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/30 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {remedy.problem}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getDifficultyColor(remedy.difficulty)}`}>
                    {remedy.difficulty}
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {remedy.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Leaf className="h-4 w-4 text-secondary" />
                  <span>
                    {remedy.ingredients.slice(0, 2).map((i) => i.name).join(", ")}
                    {remedy.ingredients.length > 2 && ` +${remedy.ingredients.length - 2} more`}
                  </span>
                </div>
              </div>

              <div className="px-6 py-4 bg-muted/50 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{remedy.preparation_time}</span>
                </div>
                <span className="text-secondary font-medium text-sm group-hover:translate-x-1 transition-transform">
                  {t("remedies_see_recipe")}
                </span>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRemedies;
