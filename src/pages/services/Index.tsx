
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Building2, ArrowRight } from "lucide-react";

const ServicesHome = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZemRenova",
    "url": "https://zemrenova.com/services",
    "description": "Professional renovation services in Costa del Sol - Home and Commercial renovations",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Renovation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Renovations"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Renovations"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Renovation Services Costa del Sol"
        description="Professional home and commercial renovation services in Costa del Sol. Kitchen remodeling, bathroom renovation, office remodeling, and more. Licensed and insured."
        keywords="renovation services, home renovation, commercial renovation, kitchen remodeling, bathroom renovation, Costa del Sol, Marbella, renovation company"
        canonicalUrl="https://zemrenova.com/services"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[{ name: "Services" }]}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional Renovation Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your space with ZemRenova's expert renovation services across Costa del Sol. 
                From luxury home renovations to commercial space transformations, we deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Home Renovations */}
              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 ml-4">Home Renovations</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Transform your home with our comprehensive residential renovation services. 
                    From kitchen remodeling to whole-house renovations, we bring your vision to life.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-3" />
                      <span>Kitchen & Bathroom Remodeling</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-3" />
                      <span>Flooring & Interior Painting</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-3" />
                      <span>Whole House Renovations</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-3" />
                      <span>Basement & Attic Conversions</span>
                    </div>
                  </div>

                  <Link 
                    to="/services/home-renovations"
                    className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform group-hover:scale-105"
                  >
                    Explore Home Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>

              {/* Commercial Renovations */}
              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 ml-4">Commercial Renovations</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Enhance your business space with our professional commercial renovation services. 
                    We create functional, attractive environments that boost productivity and customer experience.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Office & Retail Space Renovation</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-500 mr-3" />
                      <span>Restaurant & Hospitality</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-500 mr-3" />
                      <span>ADA Compliance & Accessibility</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-500 mr-3" />
                      <span>HVAC & Electrical Updates</span>
                    </div>
                  </div>

                  <Link 
                    to="/services/commercial-renovations"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform group-hover:scale-105"
                  >
                    Explore Commercial Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us Section */}
            <section className="mt-20 bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose ZemRenova for Your Renovation?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">15+ Years Experience</h3>
                  <p className="text-gray-600">Proven track record of successful renovations across Costa del Sol</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fixed-Price Contracts</h3>
                  <p className="text-gray-600">No surprises - transparent pricing from start to finish</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">5-Year Warranty</h3>
                  <p className="text-gray-600">Complete peace of mind with our comprehensive warranty</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default ServicesHome;
