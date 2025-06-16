
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Star, Users, Calendar, Euro } from "lucide-react";

const LaCalaDeMijas = () => {
  const services = [
    "Kitchen Remodeling",
    "Bathroom Renovation", 
    "Whole House Renovation",
    "Flooring Installation",
    "Interior Painting",
    "Terrace & Balcony Renovation",
    "Swimming Pool Area Renovation",
    "Garage Conversions"
  ];

  const projects = [
    {
      title: "Modern Villa Renovation",
      type: "Complete Renovation",
      size: "350m²",
      duration: "8 weeks", 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      title: "Beachfront Apartment",
      type: "Kitchen & Bathroom",
      size: "120m²", 
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      title: "Golf Course Townhouse",
      type: "Interior Renovation",
      size: "200m²",
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ZemRenova - La Cala de Mijas Renovations",
    "image": "https://zemrenova.com/images/la-cala-renovations.jpg",
    "url": "https://zemrenova.com/locations/la-cala-de-mijas",
    "description": "Professional renovation services in La Cala de Mijas. Kitchen remodeling, bathroom renovation, and complete house renovations.",
    "areaServed": {
      "@type": "Place",
      "name": "La Cala de Mijas",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "La Cala de Mijas",
        "addressRegion": "Andalusia", 
        "addressCountry": "Spain"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87"
    }
  };

  return (
    <>
      <SEOHead
        title="Renovation Services La Cala de Mijas - Kitchen, Bathroom & Home Renovations"
        description="Professional renovation services in La Cala de Mijas. Expert kitchen remodeling, bathroom renovation, and complete house renovations. 150+ projects completed with 5-year warranty."
        keywords="La Cala de Mijas renovation, kitchen remodeling La Cala, bathroom renovation La Cala de Mijas, house renovation, home improvement La Cala"
        canonicalUrl="https://zemrenova.com/locations/la-cala-de-mijas"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[
        { name: "Locations", href: "/locations" },
        { name: "La Cala de Mijas" }
      ]}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-semibold">La Cala de Mijas</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Renovation Services in La Cala de Mijas
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your La Cala de Mijas property with ZemRenova's expert renovation services. 
                  From coastal apartments to luxury villas, we bring premium craftsmanship to this 
                  beautiful coastal town.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Home className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Projects Completed</p>
                      <p className="text-gray-600">150+</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Client Rating</p>
                      <p className="text-gray-600">4.9/5</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Happy Clients</p>
                      <p className="text-gray-600">120+</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold">Years Experience</p>
                      <p className="text-gray-600">15+</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 text-lg">
                  Get Free La Cala Quote
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop"
                  alt="La Cala de Mijas renovation services"
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

        {/* Services in La Cala */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Renovation Services in La Cala de Mijas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Recent La Cala de Mijas Projects
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
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Type:</span> {project.type}</p>
                        <p><span className="font-medium">Size:</span> {project.size}</p>
                        <p><span className="font-medium">Duration:</span> {project.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About La Cala de Mijas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose ZemRenova for Your La Cala de Mijas Renovation?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  La Cala de Mijas is a unique location that requires specialized knowledge of coastal property renovations. 
                  Our team understands the specific challenges and opportunities of renovating in this beautiful coastal town.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Building Expertise</h4>
                      <p className="text-gray-600">Understanding of local regulations and coastal property requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Coastal Property Specialists</h4>
                      <p className="text-gray-600">Experience with humidity control, salt air protection, and terrace renovations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Materials</h4>
                      <p className="text-gray-600">Marine-grade materials and finishes suitable for coastal environments</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop"
                  alt="La Cala de Mijas coastal properties"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Renovate Your La Cala de Mijas Property?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and detailed quote for your renovation project in La Cala de Mijas.
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

export default LaCalaDeMijas;
