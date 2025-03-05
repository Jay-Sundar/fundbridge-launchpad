
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Founders from "./pages/Founders";
import Investors from "./pages/Investors";
import FounderSignup from "./pages/FounderSignup";
import FounderOnboarding from "./pages/FounderOnboarding";
import FounderApplicationStatus from "./pages/FounderApplicationStatus";
import FounderOnboardingStage2 from "./pages/FounderOnboardingStage2";
import FounderDashboard from "./pages/FounderDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/founder-signup" element={<FounderSignup />} />
          <Route path="/founder-onboarding" element={<FounderOnboarding />} />
          <Route path="/founder-application-status" element={<FounderApplicationStatus />} />
          <Route path="/founder-onboarding-stage2" element={<FounderOnboardingStage2 />} />
          <Route path="/founder-dashboard" element={<FounderDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
