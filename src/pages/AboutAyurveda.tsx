import Layout from "@/components/layout/Layout";
import { Leaf, Heart, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";

const AboutAyurveda = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEOHead titleKey="meta_about_title" descriptionKey="meta_about_description" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            {t("about_title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t("about_subtitle")}
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold m-0">{t("about_what_is_title")}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about_what_is_content")}
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-semibold m-0">{t("about_principles_title")}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">{t("about_panch_mahabhoot")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about_panch_mahabhoot_desc")}</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">{t("about_tridosha")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about_tridosha_desc")}</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">{t("about_agni")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about_agni_desc")}</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">{t("about_ama")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about_ama_desc")}</p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gold/10">
                  <Sun className="h-6 w-6 text-gold" />
                </div>
                <h2 className="font-display text-2xl font-semibold m-0">{t("about_benefits_title")}</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[t("about_benefit_1"), t("about_benefit_2"), t("about_benefit_3"), t("about_benefit_4"), t("about_benefit_5")].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">
                {t("about_start_today")}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t("about_start_today_desc")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("about_start_today_cta")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutAyurveda;
