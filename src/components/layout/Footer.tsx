import LocalizedLink from "@/components/LocalizedLink";
import { Leaf, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    explore: [
      { name: t("nav_diseases"), href: "/diseases" },
      { name: t("nav_medicines"), href: "/medicines" },
      { name: t("nav_remedies"), href: "/remedies" },
      { name: t("nav_ai_doctor"), href: "/doctor-ai" },
    ],
    categories: [
      { name: t("footer_digestive"), href: "/diseases?category=Digestive" },
      { name: t("footer_skin"), href: "/diseases?category=Dermatological" },
      { name: t("footer_mental"), href: "/diseases?category=Mental Health" },
      { name: t("footer_joint"), href: "/diseases?category=Musculoskeletal" },
    ],
    about: [
      { name: t("nav_about_ayurveda"), href: "/about-ayurveda" },
      { name: t("footer_dosha_types"), href: "/dosha-types" },
      { name: t("footer_tagline"), href: "/privacy-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <LocalizedLink to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-foreground">
                  AyurVeda
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1">
                  {t("footer_brand_tagline")}
                </span>
              </div>
            </LocalizedLink>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer_brand_description")}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              {t("footer_explore_title")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <LocalizedLink
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              {t("footer_categories_title")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <LocalizedLink
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              {t("footer_info_title")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <LocalizedLink
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center mb-4">
            <strong>Disclaimer:</strong> {t("footer_disclaimer_text")}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              {t("footer_copyright")}. {t("footer_all_rights")}.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Founded by <span className="font-medium text-foreground">Pradhuman Sharma</span> • 
              <a href="mailto:parth@ayurwellconnect.com" className="hover:text-primary transition-colors ml-1">
                parth@ayurwellconnect.com
              </a>
            </p>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t("footer_made_with")} <Heart className="h-4 w-4 text-primary fill-primary" /> {t("footer_in_india")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
