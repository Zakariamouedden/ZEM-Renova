
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Clock, Euro, Star, CheckCircle, Users } from "lucide-react";

const WholeHouseRenovation = () => {
  const phases = [
    "Design & Planning",
    "Structural Work", 
    "Electrical & Plumbing",
    "Flooring & Walls",
    "Kitchen & Bathrooms",
    "Final Finishes"
  ];

  const projects = [
    {
      title: "Modern Villa Transformation",
      description: "Complete renovation of 300m² villa with open-concept design",
      size: "300m²",
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      title: "Traditional House Modernization", 
      description: "Full renovation preserving character while adding modern amenities",
      size: "250m²",
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Whole House Renovation Costa del Sol",
    "description": "Complete house renovation services including structural work, open-concept layouts, and full home transformations in Costa del Sol",
    "provider": {
      "@type": "Organization",
      "name": "ZemRenova"
    }
  };

  return (
    <>
      <SEOHead
        title="Whole House Renovation Costa del Sol - Complete Home Transformation"
        description="Transform your entire home with ZemRenova's complete renovation services. Structural work, open-concept layouts, full transformations. Free quotes."
        keywords="whole house renovation, complete home renovation, house transformation, structural renovation, Costa del Sol"
        canonicalUrl="https://zemrenova.com/services/home-renovations/whole-house-renovation"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[
        { name: "Services", href: "/services" },
        { name: "Home Renovations", href: "/services/home-renovations" },
        { name: "Whole House Renovation" }
      ]}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-amber-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Complete House Renovation
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your entire home with ZemRenova's comprehensive renovation services. 
                  From structural changes to open-concept layouts, we handle every aspect of your home transformation.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center">
                    <Home className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Projects Completed</p>
                      <p className="text-gray-600">200+</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-amber-600 mr-3" />
                    <div>
                      <p className="font-semibold">Happy Families</p>
                      <p className="text-gray-600">180+</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-3 text-lg">
                  Get Free House Quote
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
                  alt="Whole house renovation"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Clock className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Average Duration</p>
                      <p className="text-2xl font-bold text-gray-900">8-12 weeks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Renovation Phases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Renovation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {phases.map((phase, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-amber-600">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{phase}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Complete House Transformations
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
        <section className="py-20 bg-amber-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Entire Home?</h2>
            <p className="text-xl text-amber-100 mb-8">
              Get a comprehensive consultation and detailed project plan for your whole house renovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-amber-900 hover:bg-gray-100 px-8 py-3 text-lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default WholeHouseRenovation;
