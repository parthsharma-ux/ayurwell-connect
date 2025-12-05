import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { medicines } from "@/data/medicines";
import { ArrowLeft, Package, Tag, AlertTriangle, Pill } from "lucide-react";

const MedicineDetail = () => {
  const { id } = useParams();
  const medicine = medicines.find((m) => m.id === id);

  if (!medicine) {
    return <Layout><div className="container py-20 text-center">Medicine not found</div></Layout>;
  }

  const alternatives = medicines.filter((m) => medicine.alternatives.includes(m.name) || medicine.alternatives.some((a) => m.name.includes(a))).slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Link to="/medicines" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Medicines
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{medicine.brand}</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Package className="h-4 w-4" />{medicine.form}</span>
                {medicine.price_range && <span className="text-sm flex items-center gap-1"><Tag className="h-4 w-4" />{medicine.price_range}</span>}
              </div>
              <h1 className="font-display text-3xl font-bold mb-4">{medicine.name}</h1>
              <p className="text-muted-foreground">{medicine.description}</p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4">Uses & Benefits</h2>
              <ul className="grid gap-2">
                {medicine.uses.map((use) => (
                  <li key={use} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-secondary" /> {use}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4">Ingredients</h2>
              <div className="flex flex-wrap gap-2">
                {medicine.ingredients.map((ing) => (
                  <span key={ing} className="px-3 py-1.5 bg-muted rounded-lg text-sm">{ing}</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5" /> Side Effects & Precautions
              </h2>
              <ul className="space-y-2">
                {medicine.side_effects.map((effect) => (
                  <li key={effect} className="text-sm text-amber-700">• {effect}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Pill className="h-5 w-5 text-primary" /> Dosage
              </h2>
              <p className="text-muted-foreground">{medicine.dosage}</p>
            </div>

            {alternatives.length > 0 && (
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="font-display text-lg font-semibold mb-4">Alternatives</h2>
                <div className="space-y-3">
                  {alternatives.map((alt) => (
                    <Link key={alt.id} to={`/medicines/${alt.id}`} className="block p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <h3 className="font-medium text-sm">{alt.name}</h3>
                      <p className="text-xs text-muted-foreground">{alt.brand}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MedicineDetail;
