import { useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageRouter = () => {
  const { lang } = useParams<{ lang: string }>();
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isInitialMount = useRef(true);

  // On initial mount or URL change, sync language from URL to context
  useEffect(() => {
    if (lang === "en" || lang === "hi") {
      if (lang !== language) {
        // Directly set the state without transition animation for URL-driven changes
        setLanguage(lang as Language);
      }
    }
  }, [lang]);

  // When language changes in context (via toggle button), update URL
  useEffect(() => {
    // Skip on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (lang && (lang === "en" || lang === "hi") && lang !== language) {
      // Replace current language prefix with new one
      const newPath = location.pathname.replace(`/${lang}`, `/${language}`) + location.search;
      navigate(newPath, { replace: true });
    }
  }, [language]);

  return <Outlet />;
};

export default LanguageRouter;
