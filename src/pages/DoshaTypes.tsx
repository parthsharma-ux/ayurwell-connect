import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Wind, Flame, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import DoshaQuizModal from "@/components/dosha/DoshaQuizModal";

const DoshaTypes = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  const doshas = [
    {
      name: "Vata Dosha",
      hindi: "वात दोष",
      elements: "Vayu + Akash (Air + Space)",
      icon: Wind,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      characteristics: [
        "Patla shareer, halka weight",
        "Sukhi twacha aur baal",
        "Creative aur quick thinking",
        "Thanda pasand nahi",
        "Jaldi bhoolne wale",
        "Light sleeper"
      ],
      imbalance: [
        "Anxiety aur nervousness",
        "Dry skin aur constipation",
        "Joint pain aur body ache",
        "Insomnia aur fatigue",
        "Gas aur bloating"
      ],
      balance: [
        "Warm aur oily foods khayein",
        "Regular routine follow karein",
        "Adequate rest lein",
        "Oil massage karein",
        "Garam pani piyein"
      ]
    },
    {
      name: "Pitta Dosha",
      hindi: "पित्त दोष",
      elements: "Agni + Jal (Fire + Water)",
      icon: Flame,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      characteristics: [
        "Medium body frame",
        "Strong appetite",
        "Sharp intellect",
        "Natural leaders",
        "Garmi zyada lagti hai",
        "Competitive nature"
      ],
      imbalance: [
        "Acidity aur heartburn",
        "Skin rashes aur inflammation",
        "Gussa aur irritability",
        "Excessive sweating",
        "Hair fall aur premature greying"
      ],
      balance: [
        "Cooling foods khayein",
        "Spicy aur oily avoid karein",
        "Meditation karein",
        "Cool environment mein rahein",
        "Nariyal pani piyein"
      ]
    },
    {
      name: "Kapha Dosha",
      hindi: "कफ दोष",
      elements: "Prithvi + Jal (Earth + Water)",
      icon: Droplets,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      characteristics: [
        "Heavy body structure",
        "Smooth, oily skin",
        "Calm aur patient",
        "Strong memory",
        "Deep sleeper",
        "Slow but steady"
      ],
      imbalance: [
        "Weight gain aur obesity",
        "Lethargy aur laziness",
        "Sinus aur congestion",
        "Water retention",
        "Depression"
      ],
      balance: [
        "Light aur warm foods khayein",
        "Regular exercise karein",
        "Heavy foods avoid karein",
        "Subah jaldi uthein",
        "Honey use karein"
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Dosha Types
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Teen doshe jo aapke shareer aur swasthya ko control karte hain
          </p>

          <div className="bg-card rounded-2xl p-6 border border-border mb-10">
            <h2 className="font-display text-xl font-semibold mb-3">Dosha Kya Hai?</h2>
            <p className="text-muted-foreground">
              Dosha aapke shareer ki prakritik constitution hai. Har insaan mein teeno doshe hote hain, 
              lekin ek ya do dominant hote hain. Jab doshe balanced hote hain, aap healthy rehte hain. 
              Imbalance hone par bimariyan aati hain. Apna dominant dosha jaankar aap apni diet aur 
              lifestyle ko optimize kar sakte hain.
            </p>
          </div>

          <div className="space-y-8">
            {doshas.map((dosha) => (
              <div key={dosha.name} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className={`p-6 ${dosha.bgColor} border-b border-border`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-background/50`}>
                      <dosha.icon className={`h-8 w-8 ${dosha.color}`} />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-foreground">{dosha.name}</h2>
                      <p className="text-muted-foreground">{dosha.hindi} • {dosha.elements}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${dosha.color.replace('text-', 'bg-')}`}></span>
                      Characteristics
                    </h3>
                    <ul className="space-y-2">
                      {dosha.characteristics.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive"></span>
                      Imbalance Signs
                    </h3>
                    <ul className="space-y-2">
                      {dosha.imbalance.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Balance Tips
                    </h3>
                    <ul className="space-y-2">
                      {dosha.balance.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
            <h2 className="font-display text-2xl font-semibold mb-3">Apna Dosha Jaanein</h2>
            <p className="text-muted-foreground mb-4">
              Hamare Dosha Quiz lein aur apne dominant dosha ke baare mein jaanein. 
              Personalized diet aur lifestyle tips paayein!
            </p>
            <Button onClick={() => setQuizOpen(true)} size="lg" className="gap-2">
              Take Dosha Quiz
            </Button>
          </div>
        </div>
      </div>

      <DoshaQuizModal open={quizOpen} onOpenChange={setQuizOpen} />
    </Layout>
  );
};

export default DoshaTypes;
