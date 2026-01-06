import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const BASE_URL = "https://ayurveda.app";
const LANGUAGES = ["en", "hi"];

// Static pages with their change frequency and priority
const staticPages = [
  { path: "", changefreq: "daily", priority: "1.0" },
  { path: "/diseases", changefreq: "weekly", priority: "0.9" },
  { path: "/medicines", changefreq: "weekly", priority: "0.9" },
  { path: "/remedies", changefreq: "weekly", priority: "0.9" },
  { path: "/kits", changefreq: "weekly", priority: "0.9" },
  { path: "/doctor-ai", changefreq: "weekly", priority: "0.8" },
  { path: "/about-ayurveda", changefreq: "monthly", priority: "0.7" },
  { path: "/dosha-types", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
];

// Disease IDs
const diseases = [
  "diabetes", "hypertension", "arthritis", "acidity", "constipation",
  "asthma", "migraine", "obesity", "anxiety", "skin-disorders",
  "hair-fall", "insomnia", "cold-cough", "thyroid", "piles",
  "kidney-stones", "liver-disorders", "pcod-pcos", "anemia", "fever",
  "uti", "gas-bloating", "back-pain", "sinus", "jaundice"
];

// Kit slugs
const kits = [
  "immunity-booster", "digestion-care", "stress-relief", "women-wellness",
  "hair-skin-glow", "detox-rejuvenate", "joint-mobility", "sleep-support",
  "energy-vitality", "classic-daily-wellness", "pitta-balance", "customized-starter"
];

// Generate hreflang links for a URL
const generateHreflangLinks = (path: string): string => {
  return LANGUAGES.map(lang => 
    `    <xhtml:link rel="alternate" hreflang="${lang}" href="${BASE_URL}/${lang}${path}"/>`
  ).join("\n") + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${path}"/>`;
};

// Generate URL entry
const generateUrl = (path: string, changefreq: string, priority: string): string => {
  return LANGUAGES.map(lang => `
  <url>
    <loc>${BASE_URL}/${lang}${path}</loc>
${generateHreflangLinks(path)}
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("");
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Generating dynamic sitemap...");

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

    // Add static pages
    for (const page of staticPages) {
      xml += generateUrl(page.path, page.changefreq, page.priority);
    }

    // Add disease pages
    for (const disease of diseases) {
      xml += generateUrl(`/diseases/${disease}`, "monthly", "0.8");
    }

    // Add kit pages
    for (const kit of kits) {
      xml += generateUrl(`/kits/${kit}`, "monthly", "0.8");
    }

    // Note: Medicine and remedy pages could be added here if their IDs were available
    // For now, they can be accessed through the listing pages

    xml += `
</urlset>`;

    console.log("Sitemap generated successfully");

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error: unknown) {
    console.error("Error generating sitemap:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
