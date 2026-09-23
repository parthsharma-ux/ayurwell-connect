import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import TrendingDiseases from "@/components/home/TrendingDiseases";
import PopularRemedies from "@/components/home/PopularRemedies";
import FeaturedMedicines from "@/components/home/FeaturedMedicines";
import AIDoctor from "@/components/home/AIDoctor";
import DoshaSection from "@/components/home/DoshaSection";
import SeasonalRemedies from "@/components/home/SeasonalRemedies";
import SymptomHerbMapping from "@/components/home/SymptomHerbMapping";
import QuickKitchenRemedies from "@/components/home/QuickKitchenRemedies";
import { useLanguage } from "@/contexts/LanguageContext";
import LocalizedLink from "@/components/LocalizedLink";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const { language } = useLanguage();
  const weightLossGuide = blogPosts.find((post) => post.id === "weight-loss-ayurveda");

  return (
    <Layout>
      <SEO
        title={
          language === "hi"
            ? "AyurVeda — आयुर्वेदिक दवाएं, घरेलू उपचार और प्राकृतिक उपचार"
            : "AyurVeda — Ayurvedic Medicines, Home Remedies & Natural Healing"
        }
        description={
          language === "hi"
            ? "1000+ रोगों के लिए आयुर्वेदिक दवाएं, घरेलू उपचार, आहार और योग खोजें। मुफ्त AI वैद्य से सलाह लें।"
            : "Search 1000+ diseases and find Ayurvedic medicines, home remedies, diet tips and yoga. Free AI Vaidya consultation."
        }
      />
      <HeroSection />
      <TrendingDiseases />
      <QuickKitchenRemedies />
      <SeasonalRemedies />
      <SymptomHerbMapping />
      <PopularRemedies />
      {weightLossGuide && (
        <section className="border-y border-border bg-card/60 py-12 md:py-16">
          <div className="container mx-auto flex flex-col gap-5 px-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-2 text-secondary">
                <BookOpen className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {language === "hi" ? "विशेष गाइड" : "Featured guide"}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {language === "hi" ? weightLossGuide.titleHi : weightLossGuide.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {language === "hi" ? weightLossGuide.excerptHi : weightLossGuide.excerpt}
              </p>
            </div>
            <LocalizedLink
              to={`/blog/${weightLossGuide.id}`}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 md:self-center"
            >
              {language === "hi" ? "गाइड पढ़ें" : "Read the guide"}
              <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
          </div>
        </section>
      )}
      <FeaturedMedicines />
      <AIDoctor />
      <DoshaSection />
    </Layout>
  );
};

export default Index;
