import { Button } from "@/components/ui/button";
import { MessageCircle, Brain, Shield, Clock, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedNavigate } from "@/hooks/useLocalizedNavigate";

const AIDoctor = () => {
  const navigate = useLocalizedNavigate();
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("ai_doctor_smart_diagnosis"),
      description: t("ai_doctor_smart_diagnosis_desc"),
    },
    {
      icon: Shield,
      title: t("ai_doctor_safe_recommendations"),
      description: t("ai_doctor_safe_recommendations_desc"),
    },
    {
      icon: Clock,
      title: t("ai_doctor_available_24_7"),
      description: t("ai_doctor_available_24_7_desc"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              {t("ai_doctor_label")}
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("ai_doctor_title_1")}{" "}
              <span className="text-gradient-terracotta">{t("ai_doctor_title_2")}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {t("ai_doctor_description")}
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate("/doctor-ai")}
              className="group"
            >
              <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              {t("ai_doctor_start_consultation")}
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border shadow-elevated p-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      {t("ai_doctor_chat_welcome")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary/10 rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      {t("ai_doctor_chat_user")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      {t("ai_doctor_chat_response")}
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• {t("ai_doctor_chat_rec_1")}</li>
                      <li>• {t("ai_doctor_chat_rec_2")}</li>
                      <li>• {t("ai_doctor_chat_rec_3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-muted-foreground">
                  {t("ai_doctor_chat_placeholder")}
                </div>
                <Button variant="gold" size="icon" className="rounded-xl h-11 w-11">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDoctor;
