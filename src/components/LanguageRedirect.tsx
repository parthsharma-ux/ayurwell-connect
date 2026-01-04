import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageRedirect = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect root to language-prefixed route
    const targetPath = `/${language}${location.search}`;
    navigate(targetPath, { replace: true });
  }, [language, location.search, navigate]);

  return null;
};

export default LanguageRedirect;
