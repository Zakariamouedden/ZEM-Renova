
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Shield, Clock, Euro, Star, CheckCircle } from "lucide-react";

const BathroomRenovation = () => {
  const features = [
    "Walk-in Showers & Wet Rooms",
    "Freestanding & Built-in Bathtubs", 
    "Heated Flooring Systems",
    "Luxury Vanities & Storage",
    "High-End Fixtures & Fittings",
    "Waterproof Lighting Solutions"
  ];

  const projects = [
    {
      title: "Modern Spa Bathroom",
      description: "Complete renovation with rainfall shower and heated floors",
      size: "12m²",
      duration: "3 weeks",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7d0b5f?w=400&h=300&fit=crop"
    },
    {
      title: "Luxury Master Ensuite", 
      description: "Premium finishes with freestanding tub and walk-in shower",
      size: "18m²",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7d0b5f?w=400&h=300&fit=crop"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Renovation Services Costa del Sol",
    "description": "Professional bathroom renovation services including walk-in showers, luxury vanities, and heated flooring in Costa del Sol",
    "provider": {
      "@type": "Organization",
      "name": "ZemRenova"
    },
    "offers": {
      "@type": "Offer",
      "price": "8000",
      "priceCurrency": "EUR"
    }
  };

  return (
    <>
      <SEOHead
        title="Bathroom Renovation Costa del Sol - Luxury Bathroom Remodeling"
        description="Transform your bathroom with ZemRenova's expert renovation services. Walk-in showers, heated floors, luxury vanities. Free quotes in Costa del Sol."
        keywords="bathroom renovation, bathroom remodeling, walk-in shower, heated floors, luxury bathroom, Costa del Sol"
        canonicalUrl="https://zemrenova.com/services/home-renovations/bathroom-renovation"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[
        { name: "Services", href: "/services" },
        { name: "Home Renovations", href: "/services/home-renovations" },
        { name: "Bathroom Renovation" }
      ]}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Luxury Bathroom Renovation
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your bathroom into a spa-like retreat with ZemRenova's expert renovation services. 
                  From walk-in showers to heated floors, we create bathrooms that combine luxury with functionality.
                </p>
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-amber-500 mr-2" />
                    <span className="text-gray-600">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-600">5-Year Warranty</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 text-lg">
                  Get Free Bathroom Quote
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1584622781564-1d987f7d0b5f?w=800&h=600&fit=crop"
                  alt="Luxury bathroom renovation"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Euro className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-gray-900">€8,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Bathroom Renovation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Recent Bathroom Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-0">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Size: {project.size}</span>
                        <span>Duration: {project.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and detailed quote for your bathroom renovation project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default BathroomRenovation;
