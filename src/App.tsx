import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CartDrawer from "@/components/cart/CartDrawer";
import LanguageRouter from "@/components/LanguageRouter";
import LanguageRedirect from "@/components/LanguageRedirect";
import Index from "./pages/Index";
import Diseases from "./pages/Diseases";
import DiseaseDetail from "./pages/DiseaseDetail";
import Medicines from "./pages/Medicines";
import MedicineDetail from "./pages/MedicineDetail";
import Remedies from "./pages/Remedies";
import RemedyDetail from "./pages/RemedyDetail";
import Search from "./pages/Search";
import DoctorAI from "./pages/DoctorAI";
import AboutAyurveda from "./pages/AboutAyurveda";
import DoshaTypes from "./pages/DoshaTypes";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Kits from "./pages/Kits";
import KitDetail from "./pages/KitDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CartDrawer />
          <BrowserRouter>
            <Routes>
              {/* Redirect root to language-prefixed route */}
              <Route path="/" element={<LanguageRedirect />} />
              
              {/* Language-prefixed routes */}
              <Route path="/:lang" element={<LanguageRouter />}>
                <Route index element={<Index />} />
                <Route path="diseases" element={<Diseases />} />
                <Route path="diseases/:id" element={<DiseaseDetail />} />
                <Route path="medicines" element={<Medicines />} />
                <Route path="medicines/:id" element={<MedicineDetail />} />
                <Route path="remedies" element={<Remedies />} />
                <Route path="remedies/:id" element={<RemedyDetail />} />
                <Route path="search" element={<Search />} />
                <Route path="doctor-ai" element={<DoctorAI />} />
                <Route path="about-ayurveda" element={<AboutAyurveda />} />
                <Route path="dosha-types" element={<DoshaTypes />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="disclaimer" element={<Disclaimer />} />
                <Route path="kits" element={<Kits />} />
                <Route path="kits/:slug" element={<KitDetail />} />
              </Route>
              
              {/* Redirect old non-prefixed routes to language-prefixed ones */}
              <Route path="/diseases" element={<Navigate to="/en/diseases" replace />} />
              <Route path="/medicines" element={<Navigate to="/en/medicines" replace />} />
              <Route path="/remedies" element={<Navigate to="/en/remedies" replace />} />
              <Route path="/kits" element={<Navigate to="/en/kits" replace />} />
              <Route path="/search" element={<Navigate to="/en/search" replace />} />
              <Route path="/doctor-ai" element={<Navigate to="/en/doctor-ai" replace />} />
              <Route path="/about-ayurveda" element={<Navigate to="/en/about-ayurveda" replace />} />
              <Route path="/dosha-types" element={<Navigate to="/en/dosha-types" replace />} />
              <Route path="/privacy-policy" element={<Navigate to="/en/privacy-policy" replace />} />
              <Route path="/disclaimer" element={<Navigate to="/en/disclaimer" replace />} />
              
              {/* 404 for everything else */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
