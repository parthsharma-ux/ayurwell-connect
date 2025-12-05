import Layout from "@/components/layout/Layout";
import { AlertTriangle, Info, Stethoscope, FileWarning, Scale } from "lucide-react";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Disclaimer
          </h1>
          <p className="text-muted-foreground mb-8">
            Kripya dhyan se padhein - Yeh important information hai
          </p>

          <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-semibold text-foreground mb-2">Important Notice</h2>
                <p className="text-muted-foreground">
                  Is website par di gayi information sirf educational purpose ke liye hai. 
                  Yeh professional medical advice, diagnosis ya treatment ka substitute NAHI hai.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold">General Information</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  AyurVeda website par available content, including but not limited to text, 
                  graphics, images, aur information sirf general informational purposes ke liye hai.
                </p>
                <p>
                  Content authors aur publishers ne accuracy ensure karne ki koshish ki hai, 
                  lekin information ki completeness, accuracy, reliability, suitability ya 
                  availability ki koi guarantee nahi di jaati.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Stethoscope className="h-5 w-5 text-accent" />
                </div>
                <h2 className="font-display text-xl font-semibold">Medical Disclaimer</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Is website ki information kisi bhi medical condition ke treatment, cure ya prevention ke liye nahi hai.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Koi bhi Ayurvedic medicine ya remedy start karne se pehle qualified healthcare provider se consult karein.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  AI Doctor feature sirf educational guidance provide karta hai, professional medical consultation nahi.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Emergency situations mein turant nearest hospital jayein ya emergency services contact karein.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Pregnant women, nursing mothers aur children ko special caution rakhni chahiye.
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gold/10">
                  <FileWarning className="h-5 w-5 text-gold" />
                </div>
                <h2 className="font-display text-xl font-semibold">No Warranties</h2>
              </div>
              <p className="text-muted-foreground">
                Is website aur uski content ko "as is" basis par provide kiya jaata hai bina 
                kisi bhi warranty ke, express ya implied. Hum kisi bhi loss ya damage ke liye 
                responsible nahi hain jo is website ke use se ho sakta hai.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <Scale className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="font-display text-xl font-semibold">Limitation of Liability</h2>
              </div>
              <p className="text-muted-foreground">
                AyurVeda, uske owners, employees, ya affiliates kisi bhi direct, indirect, 
                incidental, consequential ya punitive damages ke liye liable nahi honge jo 
                is website ke use ya inability to use se arise ho sakte hain.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-4">Third-Party Content</h2>
              <p className="text-muted-foreground">
                Is website mein third-party websites ke links ho sakte hain. In external sites 
                ke content ya privacy practices ke liye hum responsible nahi hain. In links 
                ka inclusion endorsement imply nahi karta.
              </p>
            </section>

            <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h2 className="font-display text-xl font-semibold mb-3 text-foreground">
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                Is website ko use karke, aap is disclaimer ke terms se agree karte hain. 
                Agar aap in terms se agree nahi karte, toh please is website ka use na karein.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Questions ke liye contact karein: legal@ayurveda.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
