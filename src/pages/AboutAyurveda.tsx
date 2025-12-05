import Layout from "@/components/layout/Layout";
import { Leaf, Heart, Sun, Moon, Droplets, Wind, Flame } from "lucide-react";

const AboutAyurveda = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Ayurveda Ke Baare Mein
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            5000 saal purana Bharat ka prachin chikitsa vigyan
          </p>

          <div className="prose prose-invert max-w-none">
            <section className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold m-0">Ayurveda Kya Hai?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ayurveda Sanskrit ke do shabdon se bana hai - "Ayur" (jeevan) aur "Veda" (gyan). 
                Yeh duniya ki sabse purani holistic healing system hai jo lagbhag 5,000 saal pehle 
                Bharat mein viksit hui thi. Ayurveda sirf bimariyon ka ilaaj nahi karti, balki 
                sampurn swasthya aur jeevan ki gunvatta ko behtar banati hai.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-semibold m-0">Ayurveda Ke Siddhant</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Panch Mahabhoot</h3>
                  <p className="text-sm text-muted-foreground">
                    Ayurveda ke anusaar, sab kuch paanch tattvon se bana hai - Prithvi, Jal, Agni, Vayu aur Akash.
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Tridosha Theory</h3>
                  <p className="text-sm text-muted-foreground">
                    Teen doshe - Vata, Pitta aur Kapha - hamare shareer aur mann ko control karte hain.
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Agni (Digestive Fire)</h3>
                  <p className="text-sm text-muted-foreground">
                    Achhi sehat ke liye strong digestive fire zaroori hai. Kamzor agni kai bimariyon ka kaaran banti hai.
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h3 className="font-semibold text-foreground mb-2">Ama (Toxins)</h3>
                  <p className="text-sm text-muted-foreground">
                    Adhura pacha hua khana ama banata hai jo bimariyon ki jadh hai. Ayurveda ama ko nikalne par focus karti hai.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gold/10">
                  <Sun className="h-6 w-6 text-gold" />
                </div>
                <h2 className="font-display text-2xl font-semibold m-0">Ayurveda Ke Fayde</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Natural aur side-effect free treatment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Bimari ki jadh se ilaaj, sirf lakshano ka nahi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Har vyakti ke liye personalized treatment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Prevention aur immunity building par focus
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Mind, body aur soul ka balance
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">
                Aaj Se Shuru Karein
              </h2>
              <p className="text-muted-foreground mb-4">
                Ayurveda apnana mushkil nahi hai. Chhoti-chhoti aadat badal kar aap bade 
                badlav la sakte hain. Subah jaldi uthna, garam pani peena, seasonal fruits 
                khana - ye sab Ayurveda ka hissa hain.
              </p>
              <p className="text-sm text-muted-foreground">
                Hamare AI Doctor se baat karein aur apne dosha ke baare mein jaanein!
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutAyurveda;
