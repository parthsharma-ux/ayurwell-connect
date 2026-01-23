import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { diseases } from "@/data/diseases";
import { medicines } from "@/data/medicines";
import { remedies } from "@/data/remedies";
import { ArrowLeft, Pill, Leaf, Utensils, Activity, Clock, ChefHat, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedDisease, getLocalizedMedicine, getLocalizedRemedy, useDataTranslations } from "@/lib/localizedData";
import { Badge } from "@/components/ui/badge";

const DiseaseDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const labels = useDataTranslations(language);
  
  const rawDisease = diseases.find((d) => d.id === id);

  // SEO JSON-LD for individual disease
  useEffect(() => {
    if (!rawDisease) return;

    document.title = `${rawDisease.name} - ${language === "hi" ? "आयुर्वेदिक उपचार" : "Ayurvedic Treatment"} | AyurVeda`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 
      `${rawDisease.name} के लक्षण और आयुर्वेदिक उपचार। ${rawDisease.dosha_involved} दोष। लक्षण: ${rawDisease.symptoms.slice(0, 3).join(", ")}।`
    );

    const existingScript = document.querySelector('script[type="application/ld+json"][data-page="disease-detail"]');
    if (existingScript) existingScript.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      "name": rawDisease.name,
      "alternateName": rawDisease.hindi_name,
      "description": rawDisease.description,
      "signOrSymptom": rawDisease.symptoms.map(symptom => ({
        "@type": "MedicalSignOrSymptom",
        "name": symptom
      })),
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Ayurvedic Treatment",
        "description": `${rawDisease.dosha_involved} dosha balancing treatment`,
        "medicineSystem": "Ayurveda"
      },
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": rawDisease.category
      },
      "riskFactor": rawDisease.dosha_involved,
      "preventionInfo": {
        "@type": "WebContent",
        "text": `Foods to eat: ${rawDisease.diet_tips.foods_to_eat.join(", ")}. Foods to avoid: ${rawDisease.diet_tips.foods_to_avoid.join(", ")}.`
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
          { "@type": "ListItem", "position": 2, "name": "Diseases", "item": "/diseases" },
          { "@type": "ListItem", "position": 3, "name": rawDisease.name, "item": `/diseases/${rawDisease.id}` }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page', 'disease-detail');
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const scriptEl = document.querySelector('script[type="application/ld+json"][data-page="disease-detail"]');
      if (scriptEl) scriptEl.remove();
    };
  }, [rawDisease, language]);

  if (!rawDisease) {
    return <Layout><div className="container py-20 text-center">{language === "hi" ? "रोग नहीं मिला" : "Disease not found"}</div></Layout>;
  }

  const disease = getLocalizedDisease(rawDisease, language);
  const relatedMedicines = medicines.filter((m) => m.related_diseases.includes(id || "")).map(m => getLocalizedMedicine(m, language));
  const relatedRemedies = remedies.filter((r) => r.related_diseases.includes(id || "")).map(r => getLocalizedRemedy(r, language));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <LocalizedLink to="/diseases" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> {t("backToDiseases")}
        </LocalizedLink>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Disease Header */}
            <div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{disease.dosha_involved}</span>
              <h1 className="font-display text-4xl font-bold mt-4 mb-2">{disease.name}</h1>
              {rawDisease.hindi_name && language === "en" && <p className="text-xl text-muted-foreground">{rawDisease.hindi_name}</p>}
              <p className="mt-4 text-muted-foreground">{disease.description}</p>
            </div>

            {/* Symptoms */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" /> {labels.symptoms}
              </h2>
              <div className="flex flex-wrap gap-2">
                {disease.symptoms.map((s: string) => (
                  <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm">{s}</span>
                ))}
              </div>
            </div>

            {/* HOME REMEDIES - FEATURED PROMINENTLY */}
            <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-2xl p-6 border-2 border-secondary/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold flex items-center gap-3 text-secondary-foreground">
                  <div className="p-2 bg-secondary/20 rounded-xl">
                    <ChefHat className="h-6 w-6 text-secondary" />
                  </div>
                  {language === "hi" ? "🌿 घरेलू उपचार (प्राकृतिक समाधान)" : "🌿 Home Remedies (Natural Solutions)"}
                </h2>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {language === "hi" ? "अनुशंसित" : "Recommended"}
                </Badge>
              </div>
              
              {relatedRemedies.length > 0 ? (
                <div className="grid gap-4">
                  {relatedRemedies.slice(0, 6).map((rem, index) => (
                    <LocalizedLink 
                      key={rem.id} 
                      to={`/remedies/${rem.id}`} 
                      className="group p-5 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/20 text-secondary text-xs font-bold">
                              {index + 1}
                            </span>
                            <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">{rem.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            <span className="font-medium text-foreground">{language === "hi" ? "सामग्री:" : "Ingredients:"}</span>{" "}
                            {rem.ingredients.map((i: any) => i.name).join(", ")}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-xs">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3 w-3" /> {rem.preparation_time}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full ${
                              rem.difficulty === "Easy" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                              rem.difficulty === "Medium" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                              "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            }`}>
                              {rem.difficulty}
                            </span>
                            {rem.benefits && rem.benefits.length > 0 && (
                              <span className="flex items-center gap-1 text-secondary">
                                <Heart className="h-3 w-3" /> {rem.benefits.length} {language === "hi" ? "लाभ" : "benefits"}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                            →
                          </span>
                        </div>
                      </div>
                    </LocalizedLink>
                  ))}
                  
                  {relatedRemedies.length > 6 && (
                    <LocalizedLink 
                      to="/remedies" 
                      className="text-center py-3 text-secondary hover:text-secondary/80 font-medium transition-colors"
                    >
                      {language === "hi" 
                        ? `+ ${relatedRemedies.length - 6} और उपचार देखें` 
                        : `+ View ${relatedRemedies.length - 6} more remedies`}
                    </LocalizedLink>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Leaf className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>{language === "hi" ? "इस रोग के लिए घरेलू उपचार जल्द जोड़े जाएंगे" : "Home remedies for this condition will be added soon"}</p>
                  <LocalizedLink to="/remedies" className="text-secondary hover:underline mt-2 inline-block">
                    {language === "hi" ? "सभी उपचार देखें" : "Browse all remedies"}
                  </LocalizedLink>
                </div>
              )}
            </div>

            {/* Ayurvedic Medicines - Secondary Section */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <Pill className="h-5 w-5 text-accent" /> {labels.recommendedMedicines}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {language === "hi" 
                  ? "यदि घरेलू उपचार से राहत न मिले, तो इन आयुर्वेदिक दवाओं पर विचार करें:" 
                  : "If home remedies don't provide relief, consider these Ayurvedic medicines:"}
              </p>
              {relatedMedicines.length > 0 ? (
                <div className="grid gap-3">
                  {relatedMedicines.slice(0, 4).map((med) => (
                    <LocalizedLink 
                      key={med.id} 
                      to={`/medicines/${med.id}`} 
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold">{med.name}</h3>
                        <p className="text-sm text-muted-foreground">{med.brand} • {med.form}</p>
                      </div>
                      <span className="text-primary">→</span>
                    </LocalizedLink>
                  ))}
                  {relatedMedicines.length > 4 && (
                    <LocalizedLink 
                      to="/medicines" 
                      className="text-center py-2 text-primary hover:text-primary/80 font-medium transition-colors text-sm"
                    >
                      {language === "hi" 
                        ? `+ ${relatedMedicines.length - 4} और दवाएं देखें` 
                        : `+ View ${relatedMedicines.length - 4} more medicines`}
                    </LocalizedLink>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  {language === "hi" ? "कोई संबंधित दवा नहीं मिली" : "No related medicines found"}
                </p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Remedy Highlight */}
            {relatedRemedies.length > 0 && (
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl p-5 border border-secondary/30">
                <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-secondary" />
                  {language === "hi" ? "सबसे आसान उपाय" : "Easiest Remedy"}
                </h3>
                <LocalizedLink to={`/remedies/${relatedRemedies[0].id}`} className="block">
                  <p className="font-medium text-foreground">{relatedRemedies[0].title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <Clock className="h-3 w-3 inline mr-1" />
                    {relatedRemedies[0].preparation_time}
                  </p>
                  <span className="text-secondary text-sm mt-2 inline-block hover:underline">
                    {language === "hi" ? "अभी आजमाएं →" : "Try now →"}
                  </span>
                </LocalizedLink>
              </div>
            )}

            {/* Diet Tips */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Utensils className="h-5 w-5 text-secondary" /> {labels.dietTips}
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-secondary mb-2">{labels.foodsToEat}</h4>
                  <ul className="space-y-1">
                    {rawDisease.diet_tips.foods_to_eat.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground">✓ {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-destructive mb-2">{labels.foodsToAvoid}</h4>
                  <ul className="space-y-1">
                    {rawDisease.diet_tips.foods_to_avoid.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground">✗ {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Yoga Postures */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-lg font-semibold mb-4">{labels.yogaPostures}</h2>
              <ul className="space-y-2">
                {rawDisease.yoga_postures.map((y) => (
                  <li key={y} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" /> {y}
                  </li>
                ))}
              </ul>
            </div>

            {/* Natural First Message */}
            <div className="bg-green-50 dark:bg-green-950/30 rounded-2xl p-5 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">
                    {language === "hi" ? "प्राकृतिक उपचार पहले" : "Try Natural First"}
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    {language === "hi" 
                      ? "घरेलू उपचार सुरक्षित हैं और बिना दुष्प्रभाव के राहत दे सकते हैं। दवाओं से पहले इन्हें आजमाएं।"
                      : "Home remedies are safe and can provide relief without side effects. Try these before turning to medicines."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiseaseDetail;