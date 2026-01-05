import { useParams } from "react-router-dom";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { remedies } from "@/data/remedies";
import { ArrowLeft, Clock, AlertTriangle, CheckCircle, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRemedy, useDataTranslations } from "@/lib/localizedData";

const RemedyDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const labels = useDataTranslations(language);
  
  const rawRemedy = remedies.find((r) => r.id === id);

  if (!rawRemedy) {
    return <Layout><div className="container py-20 text-center">{language === "hi" ? "उपचार नहीं मिला" : "Remedy not found"}</div></Layout>;
  }

  const remedy = getLocalizedRemedy(rawRemedy, language);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <LocalizedLink to="/remedies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> {t("backToRemedies")}
        </LocalizedLink>

        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{remedy.problem}</span>
              <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">{rawRemedy.difficulty}</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-4 w-4" />{rawRemedy.preparation_time}</span>
            </div>
            <h1 className="font-display text-3xl font-bold mb-4">{remedy.title}</h1>
            <p className="text-muted-foreground"><strong>{labels.howOften}:</strong> {remedy.how_often}</p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-secondary" /> {labels.ingredients}
            </h2>
            <div className="grid gap-3">
              {rawRemedy.ingredients.map((ing) => (
                <div key={ing.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">{ing.name}</span>
                  <span className="text-muted-foreground">{ing.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border">
            <h2 className="font-display text-xl font-semibold mb-4">{labels.method}</h2>
            <ol className="space-y-4">
              {remedy.method.map((step: string, i: number) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">{i + 1}</span>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-950/30 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2 text-green-800 dark:text-green-200">
                <CheckCircle className="h-5 w-5" /> {labels.benefits}
              </h2>
              <ul className="space-y-2">
                {remedy.benefits.map((b: string) => (
                  <li key={b} className="text-sm text-green-700 dark:text-green-300">✓ {b}</li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2 text-amber-800 dark:text-amber-200">
                <AlertTriangle className="h-5 w-5" /> {labels.precautions}
              </h2>
              <ul className="space-y-2">
                {remedy.precautions.map((p: string) => (
                  <li key={p} className="text-sm text-amber-700 dark:text-amber-300">• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RemedyDetail;