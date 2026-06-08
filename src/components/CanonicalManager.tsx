import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://ancient-healer-ai.lovable.app";

/**
 * Ensures every route has a self-referencing canonical link so search engines
 * don't see the homepage canonical on every page. Per-page SEO components
 * (react-helmet-async) override this when present.
 */
const CanonicalManager = () => {
  const location = useLocation();

  useEffect(() => {
    const href = `${SITE_URL}${location.pathname}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, [location.pathname]);

  return null;
};

export default CanonicalManager;
