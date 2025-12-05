import { Link } from "react-router-dom";
import { ArrowRight, Activity } from "lucide-react";
import { diseases } from "@/data/diseases";

const TrendingDiseases = () => {
  const trendingDiseases = diseases.slice(0, 8);

  const getDoshaColor = (dosha: string) => {
    if (dosha.includes("Vata")) return "bg-blue-100 text-blue-700";
    if (dosha.includes("Pitta")) return "bg-red-100 text-red-700";
    if (dosha.includes("Kapha")) return "bg-green-100 text-green-700";
    return "bg-muted text-muted-foreground";
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <Activity className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Common Ailments
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Trending Health Concerns
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Explore Ayurvedic solutions for the most searched health conditions
            </p>
          </div>
          <Link
            to="/diseases"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all diseases
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Disease Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingDiseases.map((disease, index) => (
            <Link
              key={disease.id}
              to={`/diseases/${disease.id}`}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDoshaColor(disease.dosha_involved)}`}>
                  {disease.dosha_involved}
                </div>
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {disease.name.split("(")[0].trim()}
              </h3>
              
              {disease.hindi_name && (
                <p className="text-sm text-muted-foreground mb-3">
                  {disease.hindi_name}
                </p>
              )}
              
              <div className="flex flex-wrap gap-1.5">
                {disease.symptoms.slice(0, 3).map((symptom, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{disease.category}</span>
                <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDiseases;
