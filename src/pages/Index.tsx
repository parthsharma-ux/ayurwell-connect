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

const Index = () => {
  const { language } = useLanguage();
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
      <FeaturedMedicines />
      <AIDoctor />
      <DoshaSection />
    </Layout>
  );
};

export default Index;
