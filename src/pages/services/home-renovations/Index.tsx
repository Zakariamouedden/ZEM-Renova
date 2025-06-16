
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Paintbrush, Wrench, Home } from "lucide-react";

const HomeRenovations = () => {
  const services = [
    {
      name: "Kitchen Remodeling",
      href: "/services/home-renovations/kitchen-remodeling",
      description: "Transform your kitchen with modern designs, premium appliances, and expert craftsmanship.",
      icon: <Hammer className="w-8 h-8" />,
      price: "From €15,000"
    },
    {
      name: "Bathroom Renovation", 
      href: "/services/home-renovations/bathroom-renovation",
      description: "Create your dream bathroom with luxury fixtures, modern layouts, and spa-like features.",
      icon: <Wrench className="w-8 h-8" />,
      price: "From €8,000"
    },
    {
      name: "Flooring Replacement",
      href: "/services/home-renovations/flooring-replacement", 
      description: "Upgrade your floors with hardwood, tile, vinyl, or luxury vinyl plank options.",
      icon: <Home className="w-8 h-8" />,
      price: "From €25/m²"
    },
    {
      name: "Interior Painting",
      href: "/services/home-renovations/interior-painting",
      description: "Fresh paint transforms any space. Professional painting with premium materials.",
      icon: <Paintbrush className="w-8 h-8" />,
      price: "From €12/m²"
    },
    {
      name: "Window & Door Replacement",
      href: "/services/home-renovations/window-door-replacement",
      description: "Energy-efficient windows and doors that enhance security and reduce energy costs.",
      icon: <Home className="w-8 h-8" />,
      price: "From €400/unit"
    },
    {
      name: "Basement Finishing",
      href: "/services/home-renovations/basement-finishing",
      description: "Convert your basement into usable living space - home office, gym, or entertainment room.",
      icon: <Hammer className="w-8 h-8" />,
      price: "From €200/m²"
    },
    {
      name: "Attic Conversions",
      href: "/services/home-renovations/attic-conversions",
      description: "Transform your attic into a bedroom, office, or studio space with proper insulation.",
      icon: <Wrench className="w-8 h-8" />,
      price: "From €300/m²"
    },
    {
      name: "Whole House Renovation",
      href: "/services/home-renovations/whole-house-renovation",
      description: "Complete home transformation including layout changes, systems updates, and finishes.",
      icon: <Home className="w-8 h-8" />,
      price: "From €800/m²"
    },
    {
      name: "Wall Removal for Open Concept",
      href: "/services/home-renovations/wall-removal",
      description: "Create open-concept living spaces by safely removing non-structural walls.",
      icon: <Hammer className="w-8 h-8" />,
      price: "From €500/wall"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Renovation Services Costa del Sol",
    "provider": {
      "@type": "Organization",
      "name": "ZemRenova"
    },
    "description": "Professional home renovation services including kitchen remodeling, bathroom renovation, and whole house renovations in Costa del Sol",
    "areaServed": "Costa del Sol, Spain",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Renovation Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": service.name,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Home Renovation Services Costa del Sol - Kitchen, Bathroom & More"
        description="Professional home renovation services in Costa del Sol. Kitchen remodeling, bathroom renovation, flooring, painting, and whole house renovations. Licensed contractors with 15+ years experience."
        keywords="home renovation, kitchen remodeling, bathroom renovation, flooring replacement, interior painting, whole house renovation, Costa del Sol, Marbella, home improvement"
        canonicalUrl="https://zemrenova.com/services/home-renovations"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[
        { name: "Services", href: "/services" },
        { name: "Home Renovations" }
      ]}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Home Renovation Services
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Transform your home with ZemRenova's comprehensive renovation services across Costa del Sol. 
                From kitchen remodeling to whole-house renovations, we bring your vision to life with 
                exceptional craftsmanship and attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 ml-4">{service.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-amber-600 font-semibold text-lg">{service.price}</span>
                      <Link 
                        to={service.href}
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Process Section */}
            <section className="mt-20 bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Our Home Renovation Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Consultation</h3>
                  <p className="text-gray-600">Free in-home consultation to discuss your vision and requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Design & Quote</h3>
                  <p className="text-gray-600">Detailed design plans and transparent fixed-price quotation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Construction</h3>
                  <p className="text-gray-600">Professional execution with regular updates and quality control</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Final Walkthrough</h3>
                  <p className="text-gray-600">Complete inspection and 5-year warranty on all work</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default HomeRenovations;
