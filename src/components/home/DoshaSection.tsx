import { Wind, Flame, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DoshaSection = () => {
  const { t } = useLanguage();

  const doshas = [
    {
      name: t("dosha_vata_full"),
      hindi: t("dosha_vata_hindi"),
      icon: Wind,
      color: "blue",
      description: t("dosha_vata_description"),
      characteristics: [t("dosha_vata_char_1"), t("dosha_vata_char_2"), t("dosha_vata_char_3"), t("dosha_vata_char_4")],
      imbalance: [t("dosha_vata_imb_1"), t("dosha_vata_imb_2"), t("dosha_vata_imb_3"), t("dosha_vata_imb_4")],
    },
    {
      name: t("dosha_pitta_full"),
      hindi: t("dosha_pitta_hindi"),
      icon: Flame,
      color: "red",
      description: t("dosha_pitta_description"),
      characteristics: [t("dosha_pitta_char_1"), t("dosha_pitta_char_2"), t("dosha_pitta_char_3"), t("dosha_pitta_char_4")],
      imbalance: [t("dosha_pitta_imb_1"), t("dosha_pitta_imb_2"), t("dosha_pitta_imb_3"), t("dosha_pitta_imb_4")],
    },
    {
      name: t("dosha_kapha_full"),
      hindi: t("dosha_kapha_hindi"),
      icon: Droplets,
      color: "green",
      description: t("dosha_kapha_description"),
      characteristics: [t("dosha_kapha_char_1"), t("dosha_kapha_char_2"), t("dosha_kapha_char_3"), t("dosha_kapha_char_4")],
      imbalance: [t("dosha_kapha_imb_1"), t("dosha_kapha_imb_2"), t("dosha_kapha_imb_3"), t("dosha_kapha_imb_4")],
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("dosha_title_main")}
          </h2>
          <p className="text-muted-foreground">
            {t("dosha_description_main")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {doshas.map((dosha, index) => {
            const colors = getColorClasses(dosha.color);
            return (
              <div
                key={dosha.name}
                className={`rounded-2xl p-8 ${colors.bg} border ${colors.border} transition-all hover:shadow-card animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

                <p className="text-sm text-muted-foreground mb-6">
                  {dosha.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {t("dosha_when_balanced")}
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

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {t("dosha_imbalance_signs")}
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
