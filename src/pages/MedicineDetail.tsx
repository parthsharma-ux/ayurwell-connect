import { useParams } from "react-router-dom";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { medicines } from "@/data/medicines";
import { ArrowLeft, Package, Tag, AlertTriangle, Pill, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedMedicine, useDataTranslations } from "@/lib/localizedData";

const MedicineDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const labels = useDataTranslations(language);
  
  const rawMedicine = medicines.find((m) => m.id === id);

  if (!rawMedicine) {
    return <Layout><div className="container py-20 text-center">{language === "hi" ? "दवाई नहीं मिली" : "Medicine not found"}</div></Layout>;
  }

  const medicine = getLocalizedMedicine(rawMedicine, language);
  const alternatives = medicines.filter((m) => rawMedicine.alternatives.includes(m.name) || rawMedicine.alternatives.some((a) => m.name.includes(a))).slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <LocalizedLink to="/medicines" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> {t("backToMedicines")}
        </LocalizedLink>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{rawMedicine.brand}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Package className="h-4 w-4" />{rawMedicine.form}</span>
                {rawMedicine.price_range && <span className="text-sm flex items-center gap-1"><Tag className="h-4 w-4" />{rawMedicine.price_range}</span>}
              </div>
              <h1 className="font-display text-3xl font-bold mb-4">{rawMedicine.name}</h1>
              <p className="text-muted-foreground">{medicine.description}</p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4">{labels.uses}</h2>
              <ul className="grid gap-2">
                {medicine.uses.map((use: string) => (
                  <li key={use} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> {use}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4">{labels.ingredients}</h2>
              <div className="flex flex-wrap gap-2">
                {rawMedicine.ingredients.map((ing) => (
                  <span key={ing} className="px-3 py-1.5 bg-muted rounded-lg text-sm">{ing}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-amber-800 dark:text-amber-200">
                <AlertTriangle className="h-5 w-5" /> {labels.sideEffects}
              </h2>
              <ul className="space-y-2">
                {medicine.side_effects.map((effect: string) => (
                  <li key={effect} className="text-sm text-amber-700 dark:text-amber-300">• {effect}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" /> {labels.dosage}
              </h2>
              <p className="text-muted-foreground">{medicine.dosage}</p>
            </div>

            {alternatives.length > 0 && (
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="font-display text-lg font-semibold mb-4">{labels.alternatives}</h2>
                <div className="space-y-3">
                  {alternatives.map((alt) => (
                    <LocalizedLink key={alt.id} to={`/medicines/${alt.id}`} className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <h3 className="font-medium text-sm">{alt.name}</h3>
                      <p className="text-xs text-muted-foreground">{alt.brand}</p>
                    </LocalizedLink>
                  ))}
                </div>
              </div>
            )}

            {/* Buy on WhatsApp */}
            <a
              href={`https://wa.me/919079173435?text=Hi%2C%20I%20want%20to%20buy%20${encodeURIComponent(rawMedicine.name)}`}
              target="_blank"
              rel="noreferrer"
              className="block bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl p-4 text-center transition-colors"
            >
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">{language === "hi" ? "WhatsApp पर खरीदें" : "Buy on WhatsApp"}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MedicineDetail;