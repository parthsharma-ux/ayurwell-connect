import LocalizedLink from "@/components/LocalizedLink";
import { ArrowRight, Pill, Tag, Package } from "lucide-react";
import { medicines } from "@/data/medicines";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedMedicines = () => {
  const featuredMedicines = medicines.slice(0, 8);
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 text-accent mb-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Pill className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium uppercase tracking-widest">
                {t("medicines_label")}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t("medicines_title").split(" ")[0]}{" "}
              <span className="text-gradient-gold">{t("medicines_title").split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-lg">
              {t("medicines_subtitle")}
            </p>
          </div>
          <LocalizedLink
            to="/medicines"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all group animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("medicines_view_all")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </LocalizedLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredMedicines.map((medicine, index) => (
            <LocalizedLink
              key={medicine.id}
              to={`/medicines/${medicine.id}`}
              className="group glass-premium rounded-2xl p-6 border border-border/30 hover:border-accent/40 hover-lift transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/15 px-3 py-1.5 rounded-full border border-accent/20">
                  {medicine.brand}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-lg">
                  <Package className="h-3 w-3" />
                  {medicine.form}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {medicine.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                {medicine.uses.slice(0, 2).join(", ")}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                {medicine.price_range && (
                  <div className="flex items-center gap-1.5 text-sm">
                    <Tag className="h-3.5 w-3.5 text-accent" />
                    <span className="text-foreground font-semibold">
                      {medicine.price_range}
                    </span>
                  </div>
                )}
                <span className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t("medicines_details")}
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

export default FeaturedMedicines;
