import LocalizedLink from "@/components/LocalizedLink";
import { ArrowRight, Activity, Sparkles } from "lucide-react";
import { diseases } from "@/data/diseases";
import { useLanguage } from "@/contexts/LanguageContext";

const TrendingDiseases = () => {
  const trendingDiseases = diseases.slice(0, 8);
  const { t } = useLanguage();

  const getDoshaColor = (dosha: string) => {
    if (dosha.includes("Vata")) return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    if (dosha.includes("Pitta")) return "bg-primary/20 text-primary border-primary/30";
    if (dosha.includes("Kapha")) return "bg-secondary/20 text-secondary border-secondary/30";
    return "bg-muted text-muted-foreground border-border";
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 text-primary mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium uppercase tracking-widest">
                {t("trending_label")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("trending_title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-terracotta">{t("trending_title").split(" ").slice(-1)}</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-lg">
              {t("trending_subtitle")}
            </p>
          </div>
          <LocalizedLink
            to="/diseases"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("trending_view_all")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </LocalizedLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trendingDiseases.map((disease, index) => (
            <LocalizedLink
              key={disease.id}
              to={`/diseases/${disease.id}`}
              className="group glass-premium rounded-2xl p-6 border border-border/30 hover:border-primary/40 hover-lift transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1.5 rounded-full text-xs font-medium border ${getDoshaColor(disease.dosha_involved)}`}>
                  {disease.dosha_involved}
                </div>
                <Sparkles className="h-4 w-4 text-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {disease.name.split("(")[0].trim()}
              </h3>
              
              {disease.hindi_name && (
                <p className="text-sm text-muted-foreground mb-3 italic">
                  {disease.hindi_name}
                </p>
              )}
              
              <div className="flex flex-wrap gap-1.5">
                {disease.symptoms.slice(0, 3).map((symptom, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-muted/50 text-muted-foreground rounded-lg"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
              
              <div className="mt-5 pt-4 border-t border-border/30 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{disease.category}</span>
                <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t("trending_explore")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDiseases;
