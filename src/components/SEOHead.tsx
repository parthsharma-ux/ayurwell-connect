import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKeys } from "@/data/translations";

interface SEOHeadProps {
  titleKey: keyof TranslationKeys;
  descriptionKey: keyof TranslationKeys;
}

const SEOHead = ({ titleKey, descriptionKey }: SEOHeadProps) => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = t(titleKey);

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", t(descriptionKey));

    // Update language attribute
    document.documentElement.lang = language;

    // Update og:locale
    let ogLocale = document.querySelector('meta[property="og:locale"]');
    if (!ogLocale) {
      ogLocale = document.createElement("meta");
      ogLocale.setAttribute("property", "og:locale");
      document.head.appendChild(ogLocale);
    }
    ogLocale.setAttribute("content", language === "hi" ? "hi_IN" : "en_US");

  }, [t, titleKey, descriptionKey, language]);

  return null;
};

export default SEOHead;
