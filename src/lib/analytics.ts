// Lightweight analytics dispatcher.
// - Calls window.gtag (GA4) if present
// - Calls window.plausible if present
// - Always dispatches a CustomEvent on window so other listeners can hook in
// - Logs in dev for visibility
type EventProps = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (name: string, options?: { props?: EventProps }) => void;
  }
}

export const trackEvent = (name: string, props: EventProps = {}) => {
  try {
    const cleanProps: EventProps = {};
    for (const [k, v] of Object.entries(props)) {
      if (v === undefined || v === null || v === "") continue;
      cleanProps[k] = v;
    }

    if (typeof window === "undefined") return;

    if (typeof window.gtag === "function") {
      window.gtag("event", name, cleanProps);
    }
    if (typeof window.plausible === "function") {
      window.plausible(name, { props: cleanProps });
    }

    window.dispatchEvent(new CustomEvent("app:analytics", { detail: { name, props: cleanProps } }));

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", name, cleanProps);
    }
  } catch {
    // never let analytics break the app
  }
};

// Convenience wrappers for search suggestion quality tuning
export const trackZeroResultSearch = (params: {
  query: string;
  surface: "search" | "medicines" | "remedies";
  activeCategory?: string;
  suggestionCount?: number;
  relatedCategoriesCount?: number;
}) => {
  trackEvent("search_zero_results", {
    query: params.query.slice(0, 120),
    surface: params.surface,
    active_category: params.activeCategory,
    suggestion_count: params.suggestionCount ?? 0,
    related_categories_count: params.relatedCategoriesCount ?? 0,
  });
};

export const trackSuggestionClick = (params: {
  query: string;
  surface: "search" | "medicines" | "remedies";
  suggestionType: "did_you_mean" | "related_category" | "popular";
  value: string;
  position?: number;
}) => {
  trackEvent("search_suggestion_click", {
    query: params.query.slice(0, 120),
    surface: params.surface,
    suggestion_type: params.suggestionType,
    value: params.value,
    position: params.position,
  });
};

export const trackSearchFeedback = (params: {
  query: string;
  surface: "search" | "medicines" | "remedies";
  activeCategory?: string;
  triedSuggestions: boolean;
  hasComment: boolean;
}) => {
  trackEvent("search_feedback_submitted", {
    query: params.query.slice(0, 120),
    surface: params.surface,
    active_category: params.activeCategory,
    tried_suggestions: params.triedSuggestions,
    has_comment: params.hasComment,
  });
};
