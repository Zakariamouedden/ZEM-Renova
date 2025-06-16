
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building2, ArrowRight, Star, CheckCircle } from "lucide-react";

const CommercialRenovations = () => {
  const services = [
    {
      title: "Office Remodeling",
      description: "Modern office spaces that boost productivity and employee satisfaction",
      href: "/services/commercial-renovations/office-remodeling",
      icon: "🏢"
    },
    {
      title: "Retail Space Renovation", 
      description: "Attractive retail environments that enhance customer experience",
      href: "/services/commercial-renovations/retail-space-renovation",
      icon: "🛍️"
    },
    {
      title: "Restaurant Renovations",
      description: "Complete restaurant makeovers from kitchen to dining areas",
      href: "/services/commercial-renovations/restaurant-renovations", 
      icon: "🍽️"
    },
    {
      title: "Lobby & Reception Upgrades",
      description: "Professional entrance areas that make lasting first impressions",
      href: "/services/commercial-renovations/lobby-reception-upgrades",
      icon: "🚪"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Renovation Services Costa del Sol",
    "description": "Professional commercial renovation services for offices, retail spaces, restaurants, and more in Costa del Sol",
    "provider": {
      "@type": "Organization",
      "name": "ZemRenova"
    }
  };

  return (
    <>
      <SEOHead
        title="Commercial Renovation Services Costa del Sol - Office & Retail Remodeling"
        description="Transform your commercial space with ZemRenova's expert renovation services. Office remodeling, retail renovation, restaurant upgrades. Free quotes."
        keywords="commercial renovation, office remodeling, retail renovation, restaurant renovation, commercial space, Costa del Sol"
        canonicalUrl="https://zemrenova.com/services/commercial-renovations"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[
        { name: "Services", href: "/services" },
        { name: "Commercial Renovations" }
      ]}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Commercial Renovation Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business space with ZemRenova's professional commercial renovation services. 
                From modern offices to stunning retail spaces, we create environments that drive success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    
                    <Link 
                      to={service.href}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us */}
            <section className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose ZemRenova for Commercial Renovations?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Minimal Business Disruption</h3>
                  <p className="text-gray-600">We work around your schedule to minimize downtime and keep your business running</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Commercial Expertise</h3>
                  <p className="text-gray-600">Specialized knowledge of commercial building codes and requirements</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                  <p className="text-gray-600">300+ successful commercial projects across Costa del Sol</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default CommercialRenovations;
