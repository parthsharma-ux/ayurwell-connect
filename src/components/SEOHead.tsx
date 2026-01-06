import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKeys } from "@/data/translations";

interface SEOHeadProps {
  titleKey: keyof TranslationKeys;
  descriptionKey: keyof TranslationKeys;
  image?: string;
  type?: "website" | "article" | "product";
}

const SEOHead = ({ titleKey, descriptionKey, image, type = "website" }: SEOHeadProps) => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const baseUrl = "https://ayurveda.app"; // Update with actual domain

  useEffect(() => {
    const title = t(titleKey);
    const description = t(descriptionKey);
    const currentPath = location.pathname;
    const alternatePath = currentPath.replace(`/${language}`, language === "en" ? "/hi" : "/en");

    // Update document title
    document.title = title;

    // Update language attribute
    document.documentElement.lang = language;

    // Helper to set or create meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrValue] = selector.match(/\[(.+?)="(.+?)"\]/)?.slice(1) || [];
        if (attrName && attrValue) el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Helper to set or create link tag
    const setLink = (rel: string, hreflang: string, href: string) => {
      const selector = `link[rel="${rel}"][hreflang="${hreflang}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        el.setAttribute("hreflang", hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Basic meta tags
    setMeta('meta[name="description"]', "content", description);

    // Open Graph tags
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", `${baseUrl}${currentPath}`);
    setMeta('meta[property="og:locale"]', "content", language === "hi" ? "hi_IN" : "en_US");
    setMeta('meta[property="og:locale:alternate"]', "content", language === "hi" ? "en_US" : "hi_IN");
    setMeta('meta[property="og:site_name"]', "content", "AyurVeda");
    if (image) {
      setMeta('meta[property="og:image"]', "content", image.startsWith("http") ? image : `${baseUrl}${image}`);
    }

    // Twitter Card tags
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    if (image) {
      setMeta('meta[name="twitter:image"]', "content", image.startsWith("http") ? image : `${baseUrl}${image}`);
    }

    // Hreflang alternate links
    setLink("alternate", "en", `${baseUrl}${currentPath.replace(`/${language}`, "/en")}`);
    setLink("alternate", "hi", `${baseUrl}${currentPath.replace(`/${language}`, "/hi")}`);
    setLink("alternate", "x-default", `${baseUrl}${currentPath.replace(`/${language}`, "/en")}`);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${baseUrl}${currentPath}`);

  }, [t, titleKey, descriptionKey, language, location.pathname, image, type]);

  return null;
};

export default SEOHead;
