import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Diseases from "./pages/Diseases";
import DiseaseDetail from "./pages/DiseaseDetail";
import Medicines from "./pages/Medicines";
import MedicineDetail from "./pages/MedicineDetail";
import Remedies from "./pages/Remedies";
import RemedyDetail from "./pages/RemedyDetail";
import Search from "./pages/Search";
import DoctorAI from "./pages/DoctorAI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle encoded search URLs
const SearchRedirect = () => {
  const location = useLocation();
  // Decode the pathname to extract query params if they were incorrectly encoded
  const decodedPath = decodeURIComponent(location.pathname);
  
  // Check if the pathname contains encoded query params (e.g., /search?q=test was encoded as /search%3Fq=test)
  if (decodedPath.includes("?")) {
    const [path, queryString] = decodedPath.split("?");
    if (path === "/search" && queryString) {
      return <Navigate to={`/search?${queryString}`} replace />;
    }
  }
  
  return <NotFound />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/diseases/:id" element={<DiseaseDetail />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/medicines/:id" element={<MedicineDetail />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/remedies/:id" element={<RemedyDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/doctor-ai" element={<DoctorAI />} />
          {/* Catch encoded search URLs */}
          <Route path="/search%3F*" element={<SearchRedirect />} />
          <Route path="*" element={<SearchRedirect />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;