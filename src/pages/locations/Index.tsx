
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Star } from "lucide-react";

const LocationsHome = () => {
  const locations = [
    {
      name: "La Cala de Mijas",
      href: "/locations/la-cala-de-mijas",
      description: "Charming coastal town known for its beautiful beaches and golf courses. Popular area for luxury home renovations.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "150+ projects completed"
    },
    {
      name: "Riviera del Sol",
      href: "/locations/riviera-del-sol", 
      description: "Exclusive residential area between Mijas and Fuengirola, featuring luxury villas and stunning sea views.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "200+ projects completed"
    },
    {
      name: "Calahonda",
      href: "/locations/calahonda",
      description: "Popular residential area known for its mix of apartments and villas, close to beaches and amenities.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop", 
      projects: "180+ projects completed"
    },
    {
      name: "Cabopino",
      href: "/locations/cabopino",
      description: "Upmarket area near Marbella known for luxury developments and the famous Cabopino Golf course.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "120+ projects completed"
    },
    {
      name: "Las Chapas", 
      href: "/locations/las-chapas",
      description: "Quiet residential area east of Marbella, popular with families and featuring beautiful pine forests.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "90+ projects completed"
    },
    {
      name: "Elviria",
      href: "/locations/elviria",
      description: "Established residential area known for its shopping center, restaurants, and proximity to beaches.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "160+ projects completed"
    },
    {
      name: "El Rosario",
      href: "/locations/el-rosario", 
      description: "Exclusive area known for luxury villas and its proximity to some of the best beaches on the Costa del Sol.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "110+ projects completed"
    },
    {
      name: "Los Monteros",
      href: "/locations/los-monteros",
      description: "Prestigious area known for luxury hotels, golf courses, and high-end residential developments.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "140+ projects completed"
    },
    {
      name: "Marbella Este",
      href: "/locations/marbella-este",
      description: "Eastern Marbella featuring luxury developments, beautiful beaches, and upscale amenities.", 
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "250+ projects completed"
    },
    {
      name: "Marbella Centro",
      href: "/locations/marbella-centro",
      description: "Historic center of Marbella with charming old town, luxury shopping, and vibrant nightlife.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "300+ projects completed"
    },
    {
      name: "La Milla de Oro",
      href: "/locations/la-milla-de-oro",
      description: "The Golden Mile - most exclusive area between Marbella and Puerto Banús, home to luxury villas and hotels.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "180+ projects completed"
    },
    {
      name: "Puerto Banús",
      href: "/locations/puerto-banus",
      description: "World-famous marina and luxury destination known for high-end shopping, restaurants, and nightlife.",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop",
      projects: "220+ projects completed"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ZemRenova",
    "url": "https://zemrenova.com/locations",
    "description": "Professional renovation services across Costa del Sol locations including Marbella, Puerto Banús, and surrounding areas",
    "areaServed": locations.map(location => ({
      "@type": "Place",
      "name": location.name,
      "address": {
        "@type": "PostalAddress", 
        "addressRegion": "Andalusia",
        "addressCountry": "Spain"
      }
    }))
  };

  return (
    <>
      <SEOHead
        title="Renovation Services Across Costa del Sol Locations"
        description="Professional renovation services across Costa del Sol including Marbella, Puerto Banús, La Cala de Mijas, Calahonda, and more. Local expertise with premium results."
        keywords="Costa del Sol renovation, Marbella renovation, Puerto Banús renovation, La Cala de Mijas renovation, renovation services Costa del Sol"
        canonicalUrl="https://zemrenova.com/locations"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[{ name: "Locations" }]}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Renovation Services Across Costa del Sol
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                ZemRenova provides expert renovation services throughout the Costa del Sol region. 
                From luxury villas in Puerto Banús to charming homes in La Cala de Mijas, 
                we bring premium craftsmanship to every location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={location.image}
                        alt={`Renovation services in ${location.name}`}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {location.projects}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {location.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                        </div>
                        
                        <Link 
                          to={location.href}
                          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                        >
                          View Projects
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Areas Map */}
            <section className="mt-20 bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose ZemRenova for Your Costa del Sol Renovation?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                  <p className="text-gray-600">Deep knowledge of local building codes, suppliers, and architectural styles across Costa del Sol</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                  <p className="text-gray-600">Over 2,000 successful renovations completed across all major Costa del Sol locations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                  <p className="text-gray-600">Luxury renovations that match the high standards expected in Costa del Sol's premium locations</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default LocationsHome;
