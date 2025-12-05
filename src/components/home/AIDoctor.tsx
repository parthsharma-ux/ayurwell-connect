import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Brain, Shield, Clock, Sparkles } from "lucide-react";

const AIDoctor = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Smart Diagnosis",
      description: "AI analyzes your symptoms to identify dosha imbalances",
    },
    {
      icon: Shield,
      title: "Safe Recommendations",
      description: "Get personalized remedy suggestions with precautions",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Get instant Ayurvedic guidance anytime, anywhere",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              AI-Powered Consultation
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Your Personal{" "}
              <span className="text-gradient-terracotta">AI Vaidya</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Describe your symptoms and our AI doctor will analyze them according to 
              Ayurvedic principles, identify potential dosha imbalances, and suggest 
              appropriate remedies and lifestyle changes.
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
              Start AI Consultation
            </Button>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border shadow-elevated p-8 relative z-10">
              {/* Chat mockup */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Welcome! I'm your AI Vaidya. Tell me about your symptoms 
                      and I'll help identify the dosha imbalance and suggest Ayurvedic solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary/10 rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      I've been experiencing joint pain, especially in the mornings, 
                      and my joints feel stiff.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
                    <p className="text-sm text-foreground">
                      Based on your symptoms, this appears to be a <strong>Vata imbalance</strong> 
                      affecting your joints (Sandhivata). I recommend:
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Warm sesame oil massage</li>
                      <li>• Yograj Guggulu tablets</li>
                      <li>• Turmeric golden milk at night</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Input mockup */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-muted-foreground">
                  Type your symptoms here...
                </div>
                <Button variant="gold" size="icon" className="rounded-xl h-11 w-11">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDoctor;
