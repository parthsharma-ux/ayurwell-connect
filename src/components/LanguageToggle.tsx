import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage, isTransitioning } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === "en" ? "hi" : "en";
    setLanguage(newLang);
    // LanguageRouter will handle URL update
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`relative flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 transition-all duration-200 ${
        isTransitioning ? "scale-95 opacity-50" : ""
      }`}
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium text-sm">
        {language === "en" ? (
          <>
            <span className="text-foreground">EN</span>
            <span className="mx-1 text-muted-foreground/50">|</span>
            <span className="text-muted-foreground hover:text-foreground">हिंदी</span>
          </>
        ) : (
          <>
            <span className="text-muted-foreground hover:text-foreground">EN</span>
            <span className="mx-1 text-muted-foreground/50">|</span>
            <span className="text-foreground">हिंदी</span>
          </>
        )}
      </span>
    </Button>
  );
};

export default LanguageToggle;
