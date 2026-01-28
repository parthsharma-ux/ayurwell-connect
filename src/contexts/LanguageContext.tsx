import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationKeys } from "@/data/translations";

export type Language = "en" | "hi";
export type Region = "india" | "us" | "uk" | "global";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
  isTransitioning: boolean;
  preferredRegion: Region;
  setPreferredRegion: (region: Region) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "ayurveda-language";
const REGION_STORAGE_KEY = "ayurveda-region";

// Map language to default region
const languageToRegion: Record<Language, Region> = {
  hi: "india",
  en: "global", // Will be overridden by geo-detection for English
};

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
  const [preferredRegion, setPreferredRegionState] = useState<Region>("global");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [geoRegion, setGeoRegion] = useState<Region>("global");

  // Detect geo region on mount
  useEffect(() => {
    const detectGeoRegion = async () => {
      // Check cached geo
      const cached = localStorage.getItem('user_geo');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
            setGeoRegion(parsed.data.region || 'global');
            return;
          }
        } catch (e) {
          localStorage.removeItem('user_geo');
        }
      }

      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000),
        });
        if (response.ok) {
          const data = await response.json();
          const countryToRegion: Record<string, Region> = {
            'IN': 'india', 'US': 'us', 'CA': 'us', 'MX': 'us',
            'GB': 'uk', 'IE': 'uk', 'AU': 'uk', 'NZ': 'uk',
          };
          const region = countryToRegion[data.country_code] || 'global';
          setGeoRegion(region);
        }
      } catch {
        // Fallback to browser language hint
        const langRegion = navigator.language.split('-')[1]?.toUpperCase();
        if (langRegion === 'IN') setGeoRegion('india');
        else if (langRegion === 'US') setGeoRegion('us');
        else if (langRegion === 'GB') setGeoRegion('uk');
      }
    };
    detectGeoRegion();
  }, []);

  // Initialize language and region from localStorage or browser detection
  useEffect(() => {
    const storedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
    const storedRegion = localStorage.getItem(REGION_STORAGE_KEY) as Region | null;
    
    if (storedLang && (storedLang === "en" || storedLang === "hi")) {
      setLanguageState(storedLang);
      // If Hindi, always use India; if English, use stored region or geo
      if (storedLang === "hi") {
        setPreferredRegionState("india");
      } else if (storedRegion) {
        setPreferredRegionState(storedRegion);
      }
    } else {
      const detected = detectBrowserLanguage();
      setLanguageState(detected);
      if (detected === "hi") {
        setPreferredRegionState("india");
      }
    }
    setIsInitialized(true);
  }, []);

  // Update region when geo detection completes (only for English)
  useEffect(() => {
    if (isInitialized && language === "en" && !localStorage.getItem(REGION_STORAGE_KEY)) {
      setPreferredRegionState(geoRegion);
    }
  }, [geoRegion, isInitialized, language]);

  // Save to localStorage when language/region changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, language);
      localStorage.setItem(REGION_STORAGE_KEY, preferredRegion);
      document.documentElement.lang = language;
    }
  }, [language, preferredRegion, isInitialized]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguageState(lang);
      // Auto-set region based on language
      if (lang === "hi") {
        setPreferredRegionState("india");
      } else {
        // For English, use geo-detected region
        setPreferredRegionState(geoRegion);
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 150);
  };

  const setPreferredRegion = (region: Region) => {
    setPreferredRegionState(region);
  };

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      isTransitioning,
      preferredRegion,
      setPreferredRegion
    }}>
      {children}
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
