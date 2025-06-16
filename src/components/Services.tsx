
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Palette, 
  Wrench, 
  Leaf, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Whole-Home Renovations",
      description: "Complete home transformations with open-concept designs and structural upgrades.",
      features: ["Floor plan redesign", "Structural changes", "Premium finishes"],
      badge: "Most Popular",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Kitchen & Bath Remodeling", 
      description: "Luxury kitchen and bathroom renovations with custom cabinetry and premium fixtures.",
      features: ["Custom cabinetry", "Quartz countertops", "Smart appliances"],
      badge: "",
      gradient: "from-amber-600 to-amber-700"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Upgrades",
      description: "Eco-friendly renovations with energy-efficient systems and sustainable materials.",
      features: ["Solar integration", "Smart systems", "Green materials"],
      badge: "Eco-Friendly",
      gradient: "from-green-600 to-green-700"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interior Design",
      description: "Complete interior makeovers with custom finishes and designer touches.",
      features: ["Custom lighting", "Premium flooring", "Designer finishes"],
      badge: "",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Additions",
      description: "Home extensions and luxury additions that seamlessly blend with existing architecture.",
      features: ["Second stories", "Home offices", "Entertainment spaces"],
      badge: "Premium",
      gradient: "from-rose-600 to-rose-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From single rooms to complete home transformations, we deliver exceptional 
            craftsmanship with attention to every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 bg-amber-100 text-amber-800 border-amber-200">
                    {service.badge}
                  </Badge>
                )}
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-amber-600 hover:text-amber-700 font-semibold group-hover:translate-x-2 transition-all duration-200">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};
