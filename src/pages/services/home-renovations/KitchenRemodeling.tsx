
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Euro, Users } from "lucide-react";

const KitchenRemodeling = () => {
  const features = [
    "Custom cabinet design and installation",
    "Premium countertop materials (quartz, granite, marble)",
    "Modern appliance integration",
    "Kitchen island design and installation", 
    "Backsplash tile installation",
    "Under-cabinet lighting",
    "Plumbing and electrical updates",
    "Flooring installation"
  ];

  const projects = [
    {
      title: "Modern Marbella Kitchen",
      description: "Complete kitchen transformation with white quartz countertops and custom cabinetry",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      price: "€28,000"
    },
    {
      title: "Luxury Puerto Banús Kitchen",
      description: "High-end kitchen with marble island and premium German appliances",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      price: "€45,000"
    },
    {
      title: "Contemporary Calahonda Kitchen", 
      description: "Open-concept kitchen with modern finishes and smart storage solutions",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      price: "€22,000"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Remodeling Costa del Sol",
    "provider": {
      "@type": "Organization",
      "name": "ZemRenova",
      "url": "https://zemrenova.com"
    },
    "description": "Professional kitchen remodeling services in Costa del Sol. Custom cabinets, countertops, appliances, and complete kitchen renovations.",
    "areaServed": "Costa del Sol, Spain",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "15000",
      "description": "Complete kitchen remodeling starting from €15,000"
    }
  };

  return (
    <>
      <SEOHead
        title="Kitchen Remodeling Costa del Sol - Custom Kitchen Renovation"
        description="Professional kitchen remodeling services in Costa del Sol. Custom cabinets, premium countertops, modern appliances. Transform your kitchen with ZemRenova. Free quotes available."
        keywords="kitchen remodeling, kitchen renovation, custom cabinets, quartz countertops, kitchen design, Costa del Sol, Marbella, kitchen contractors"
        canonicalUrl="https://zemrenova.com/services/home-renovations/kitchen-remodeling"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[
        { name: "Services", href: "/services" },
        { name: "Home Renovations", href: "/services/home-renovations" },
        { name: "Kitchen Remodeling" }
      ]}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Kitchen Remodeling Costa del Sol
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your kitchen into the heart of your home with ZemRenova's expert kitchen remodeling services. 
                  From custom cabinets to premium countertops, we create kitchens that combine beauty with functionality.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Timeline</p>
                      <p className="text-gray-600">4-8 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Euro className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Starting Price</p>
                      <p className="text-gray-600">From €15,000</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Team Size</p>
                      <p className="text-gray-600">3-5 specialists</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Warranty</p>
                      <p className="text-gray-600">5 years</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-3 text-lg">
                  Get Free Kitchen Quote
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                  alt="Modern kitchen remodeling in Costa del Sol"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Complete Kitchen Remodeling Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Recent Kitchen Remodeling Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-600 font-semibold text-lg">{project.price}</span>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free consultation and detailed quote for your kitchen remodeling project in Costa del Sol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default KitchenRemodeling;
