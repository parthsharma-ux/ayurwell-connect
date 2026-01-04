import { useParams } from "react-router-dom";
import LocalizedLink from "@/components/LocalizedLink";
import Layout from "@/components/layout/Layout";
import { diseases } from "@/data/diseases";
import { medicines } from "@/data/medicines";
import { remedies } from "@/data/remedies";
import { ArrowLeft, Pill, Leaf, Utensils, Activity } from "lucide-react";

const DiseaseDetail = () => {
  const { id } = useParams();
  const disease = diseases.find((d) => d.id === id);

  if (!disease) {
    return <Layout><div className="container py-20 text-center">Disease not found</div></Layout>;
  }

  const relatedMedicines = medicines.filter((m) => m.related_diseases.includes(id || ""));
  const relatedRemedies = remedies.filter((r) => r.related_diseases.includes(id || ""));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <LocalizedLink to="/diseases" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Diseases
        </LocalizedLink>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{disease.dosha_involved}</span>
              <h1 className="font-display text-4xl font-bold mt-4 mb-2">{disease.name}</h1>
              {disease.hindi_name && <p className="text-xl text-muted-foreground">{disease.hindi_name}</p>}
              <p className="mt-4 text-muted-foreground">{disease.description}</p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" /> Symptoms
              </h2>
              <div className="flex flex-wrap gap-2">
                {disease.symptoms.map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <Pill className="h-5 w-5 text-accent" /> Recommended Medicines
              </h2>
              <div className="grid gap-4">
                {relatedMedicines.slice(0, 4).map((med) => (
                  <LocalizedLink key={med.id} to={`/medicines/${med.id}`} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                    <div>
                      <h3 className="font-semibold">{med.name}</h3>
                      <p className="text-sm text-muted-foreground">{med.brand} • {med.form}</p>
                    </div>
                    <span className="text-primary">→</span>
                  </LocalizedLink>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-secondary" /> Home Remedies
              </h2>
              <div className="grid gap-4">
                {relatedRemedies.slice(0, 3).map((rem) => (
                  <LocalizedLink key={rem.id} to={`/remedies/${rem.id}`} className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                    <h3 className="font-semibold">{rem.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{rem.ingredients.map((i) => i.name).join(", ")}</p>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Utensils className="h-5 w-5 text-secondary" /> Diet Tips
              </h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-secondary mb-2">Foods to Eat</h4>
                  <ul className="space-y-1">
                    {disease.diet_tips.foods_to_eat.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground">✓ {f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-destructive mb-2">Foods to Avoid</h4>
                  <ul className="space-y-1">
                    {disease.diet_tips.foods_to_avoid.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground">✗ {f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-lg font-semibold mb-4">Yoga & Lifestyle</h2>
              <ul className="space-y-2">
                {disease.yoga_postures.map((y) => (
                  <li key={y} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" /> {y}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiseaseDetail;
