
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service pages
import ServicesHome from "./pages/services/Index";
import HomeRenovations from "./pages/services/home-renovations/Index";
import KitchenRemodeling from "./pages/services/home-renovations/KitchenRemodeling";

// Location pages
import LocationsHome from "./pages/locations/Index";
import LaCalaDeMijas from "./pages/locations/LaCalaDeMijas";

// Blog pages
import BlogHome from "./pages/blog/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesHome />} />
            <Route path="/services/home-renovations" element={<HomeRenovations />} />
            <Route path="/services/home-renovations/kitchen-remodeling" element={<KitchenRemodeling />} />
            
            {/* Location Routes */}
            <Route path="/locations" element={<LocationsHome />} />
            <Route path="/locations/la-cala-de-mijas" element={<LaCalaDeMijas />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogHome />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
