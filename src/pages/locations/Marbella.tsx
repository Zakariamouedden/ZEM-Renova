
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Star, Users, Calendar, Euro } from "lucide-react";

const Marbella = () => {
  const services = [
    "Luxury Villa Renovations",
    "Apartment Modernization",
    "Kitchen & Bathroom Remodeling", 
    "Terrace & Pool Area Renovation",
    "Commercial Space Renovation",
    "Historic Property Restoration"
  ];

  const projects = [
    {
      title: "Luxury Penthouse Renovation",
      type: "Complete Renovation",
      size: "450m²",
      duration: "14 weeks", 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      title: "Historic Villa Restoration",
      type: "Heritage Renovation",
      size: "600m²", 
      duration: "20 weeks",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      title: "Modern Apartment Makeover",
      type: "Interior Renovation",
      size: "180m²",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ZemRenova - Marbella Renovations",
    "image": "https://zemrenova.com/images/marbella-renovations.jpg",
    "url": "https://zemrenova.com/locations/marbella",
    "description": "Premium renovation services in Marbella. Luxury villa renovations, apartment remodeling, and commercial space transformations.",
    "areaServed": {
      "@type": "Place",
      "name": "Marbella",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marbella",
        "addressRegion": "Andalusia", 
        "addressCountry": "Spain"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEOHead
        title="Renovation Services Marbella - Luxury Villa & Apartment Renovations"
        description="Premium renovation services in Marbella. Expert villa renovations, apartment remodeling, kitchen & bathroom upgrades. 300+ projects completed with 5-year warranty."
        keywords="Marbella renovation, villa renovation Marbella, apartment renovation Marbella, luxury renovation, house renovation Marbella"
        canonicalUrl="https://zemrenova.com/locations/marbella"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[
        { name: "Locations", href: "/locations" },
        { name: "Marbella" }
      ]}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                  <span className="text-amber-600 font-semibold">Marbella</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Premium Renovation Services in Marbella
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your Marbella property with ZemRenova's luxury renovation services. 
                  From prestigious villas to modern apartments, we deliver exceptional craftsmanship 
                  in Spain's most exclusive coastal destination.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Home className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Projects Completed</p>
                      <p className="text-gray-600">300+</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Client Rating</p>
                      <p className="text-gray-600">4.9/5</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Happy Clients</p>
                      <p className="text-gray-600">250+</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Years Experience</p>
                      <p className="text-gray-600">15+</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-3 text-lg">
                  Get Free Marbella Quote
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop"
                  alt="Marbella renovation services"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Euro className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-gray-900">€15,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Marbella */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Renovation Services in Marbella
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Home className="w-6 h-6 text-amber-600" />
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
              Recent Marbella Projects
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

        {/* About Marbella */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose ZemRenova for Your Marbella Renovation?
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Marbella represents the pinnacle of luxury living on the Costa del Sol. Our team understands 
                  the unique requirements of this prestigious location, from heritage preservation to modern luxury standards.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Luxury Property Expertise</h4>
                      <p className="text-gray-600">Specialized experience with high-end villas and exclusive properties</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Heritage Preservation</h4>
                      <p className="text-gray-600">Careful restoration of historic properties while adding modern amenities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1 mr-4">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Premium Materials</h4>
                      <p className="text-gray-600">Access to the finest materials and finishes suitable for luxury properties</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop"
                  alt="Marbella luxury properties"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-amber-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Renovate Your Marbella Property?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Get a free consultation and detailed quote for your luxury renovation project in Marbella.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-amber-900 hover:bg-gray-100 px-8 py-3 text-lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Marbella;
