import Layout from "@/components/layout/Layout";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-2">
            Aapki privacy hamari zimmedaari hai
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: December 2024
          </p>

          <div className="space-y-8">
            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold">Introduction</h2>
              </div>
              <p className="text-muted-foreground">
                AyurVeda ("hum", "hamara") aapki privacy ka samman karta hai. Yeh Privacy Policy 
                batati hai ki hum aapki information kaise collect, use aur protect karte hain jab 
                aap hamari website use karte hain.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Database className="h-5 w-5 text-accent" />
                </div>
                <h2 className="font-display text-xl font-semibold">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Automatically Collected</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Browser type aur version</li>
                    <li>Operating system</li>
                    <li>Pages visited aur time spent</li>
                    <li>Search queries on our platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">User Provided</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>AI Doctor chat conversations</li>
                    <li>Contact form submissions</li>
                    <li>Feedback aur reviews</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gold/10">
                  <Eye className="h-5 w-5 text-gold" />
                </div>
                <h2 className="font-display text-xl font-semibold">How We Use Information</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Website experience improve karne ke liye
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  AI Doctor responses ko better banane ke liye
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Analytics aur usage patterns samajhne ke liye
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Technical issues fix karne ke liye
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-green-500/10">
                  <Lock className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="font-display text-xl font-semibold">Data Security</h2>
              </div>
              <p className="text-muted-foreground">
                Hum industry-standard security measures use karte hain aapki information protect 
                karne ke liye. Lekin, koi bhi internet transmission 100% secure nahi hai. Hum 
                apni taraf se puri koshish karte hain aapka data safe rakhne ki.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10">
                  <UserCheck className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="font-display text-xl font-semibold">Your Rights</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Apna data access karne ka right
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Data correction ka right
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Data deletion request karne ka right
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Marketing communications se opt-out
                </li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10">
                  <Mail className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="font-display text-xl font-semibold">Contact Us</h2>
              </div>
              <p className="text-muted-foreground">
                Agar aapke koi privacy related questions hain, toh hum se contact karein:
              </p>
              <p className="text-primary mt-2">parth@ayurwellconnect.com</p>
            </section>

            <section className="bg-muted/30 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground">
                Hum is Privacy Policy ko samay samay par update kar sakte hain. Koi bhi significant 
                changes hone par hum aapko notify karenge. Is page ko regularly check karte rahein.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
