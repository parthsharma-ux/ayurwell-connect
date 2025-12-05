import { Link } from "react-router-dom";
import { ArrowRight, Pill, Tag, Package } from "lucide-react";
import { medicines } from "@/data/medicines";

const FeaturedMedicines = () => {
  const featuredMedicines = medicines.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-accent mb-2">
              <Pill className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Ayurvedic Formulations
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Popular Medicines
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Classical and proprietary Ayurvedic medicines for various health conditions
            </p>
          </div>
          <Link
            to="/medicines"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all medicines
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMedicines.map((medicine, index) => (
            <Link
              key={medicine.id}
              to={`/medicines/${medicine.id}`}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Brand & Form */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {medicine.brand}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Package className="h-3 w-3" />
                  {medicine.form}
                </span>
              </div>
              
              {/* Medicine Name */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {medicine.name}
              </h3>
              
              {/* Uses */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {medicine.uses.slice(0, 2).join(", ")}
              </p>
              
              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {medicine.price_range && (
                  <div className="flex items-center gap-1 text-sm">
                    <Tag className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-foreground font-medium">
                      {medicine.price_range}
                    </span>
                  </div>
                )}
                <span className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedicines;
