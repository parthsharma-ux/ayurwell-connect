import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages: { code: Language; name: string; flag: string; nativeName: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "hi", name: "Hindi", flag: "🇮🇳", nativeName: "हिंदी" },
];

const LanguageToggle = () => {
  const { language, setLanguage, isTransitioning } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  const currentLang = languages.find((l) => l.code === language);

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className={`w-auto gap-2 border-none bg-transparent hover:bg-muted/50 focus:ring-0 focus:ring-offset-0 px-3 transition-all duration-200 ${
          isTransitioning ? "scale-95 opacity-50" : ""
        }`}
        aria-label="Select language"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <SelectValue>
          <span className="font-medium text-sm">{currentLang?.nativeName}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="min-w-[140px] bg-background border shadow-lg z-50">
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="cursor-pointer hover:bg-muted"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.nativeName}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageToggle;
