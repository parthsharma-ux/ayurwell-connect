import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationKeys } from "@/data/translations";

export type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "ayurveda-language";

// Detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("hi")) {
    return "hi";
  }
  return "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language from localStorage or browser detection
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === "en" || stored === "hi")) {
      setLanguageState(stored);
    } else {
      const detected = detectBrowserLanguage();
      setLanguageState(detected);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when language changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, language);
      // Update document lang attribute for SEO
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguageState(lang);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      <div className={`transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
