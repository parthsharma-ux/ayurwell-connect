import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const useLocalizedNavigate = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const localizedNavigate = (path: string, options?: { replace?: boolean }) => {
    // If path already starts with /en or /hi, use it as is
    if (path.startsWith("/en") || path.startsWith("/hi")) {
      navigate(path, options);
      return;
    }
    
    // Add language prefix
    const localizedPath = `/${language}${path === "/" ? "" : path}`;
    navigate(localizedPath, options);
  };

  return localizedNavigate;
};

// Helper to get localized path without navigation
export const getLocalizedPath = (path: string, language: string): string => {
  if (path.startsWith("/en") || path.startsWith("/hi")) {
    return path;
  }
  return `/${language}${path === "/" ? "" : path}`;
};
