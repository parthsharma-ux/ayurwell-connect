import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrendingDiseases from "@/components/home/TrendingDiseases";
import PopularRemedies from "@/components/home/PopularRemedies";
import FeaturedMedicines from "@/components/home/FeaturedMedicines";
import AIDoctor from "@/components/home/AIDoctor";
import DoshaSection from "@/components/home/DoshaSection";
import SeasonalRemedies from "@/components/home/SeasonalRemedies";
import SymptomHerbMapping from "@/components/home/SymptomHerbMapping";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrendingDiseases />
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
