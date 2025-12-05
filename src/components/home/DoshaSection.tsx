import { Wind, Flame, Droplets } from "lucide-react";

const DoshaSection = () => {
  const doshas = [
    {
      name: "Vata",
      hindi: "वात",
      icon: Wind,
      color: "blue",
      description: "Air & Space elements. Governs movement, breathing, and nervous system.",
      characteristics: ["Creative", "Energetic", "Flexible", "Quick-thinking"],
      imbalance: ["Anxiety", "Dry skin", "Joint pain", "Insomnia"],
    },
    {
      name: "Pitta",
      hindi: "पित्त",
      icon: Flame,
      color: "red",
      description: "Fire & Water elements. Governs digestion, metabolism, and transformation.",
      characteristics: ["Intelligent", "Focused", "Ambitious", "Confident"],
      imbalance: ["Acidity", "Inflammation", "Skin rashes", "Anger"],
    },
    {
      name: "Kapha",
      hindi: "कफ",
      icon: Droplets,
      color: "green",
      description: "Water & Earth elements. Governs structure, stability, and immunity.",
      characteristics: ["Calm", "Loving", "Strong", "Steady"],
      imbalance: ["Weight gain", "Congestion", "Lethargy", "Depression"],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          icon: "bg-blue-100 text-blue-600",
          badge: "bg-blue-100 text-blue-700",
          border: "border-blue-200",
        };
      case "red":
        return {
          bg: "bg-red-50",
          icon: "bg-red-100 text-red-600",
          badge: "bg-red-100 text-red-700",
          border: "border-red-200",
        };
      case "green":
        return {
          bg: "bg-green-50",
          icon: "bg-green-100 text-green-600",
          badge: "bg-green-100 text-green-700",
          border: "border-green-200",
        };
      default:
        return {
          bg: "bg-muted",
          icon: "bg-muted text-muted-foreground",
          badge: "bg-muted text-muted-foreground",
          border: "border-border",
        };
    }
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Understanding the Three Doshas
          </h2>
          <p className="text-muted-foreground">
            In Ayurveda, health is achieved by balancing the three fundamental energies 
            or doshas that govern our physical and mental processes.
          </p>
        </div>

        {/* Doshas Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {doshas.map((dosha, index) => {
            const colors = getColorClasses(dosha.color);
            return (
              <div
                key={dosha.name}
                className={`rounded-2xl p-8 ${colors.bg} border ${colors.border} transition-all hover:shadow-card animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center`}>
                    <dosha.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {dosha.name}
                    </h3>
                    <span className="text-muted-foreground">{dosha.hindi}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {dosha.description}
                </p>

                {/* Characteristics */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    When Balanced:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dosha.characteristics.map((char) => (
                      <span
                        key={char}
                        className={`text-xs px-2 py-1 rounded-full ${colors.badge}`}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Imbalance */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    Imbalance Signs:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dosha.imbalance.map((sign) => (
                      <span
                        key={sign}
                        className="text-xs px-2 py-1 rounded-full bg-background text-muted-foreground"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoshaSection;
