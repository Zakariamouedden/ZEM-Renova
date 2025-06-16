
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Clock } from "lucide-react";

export const AboutUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award-Winning Design",
      description: "Recognized for excellence in residential renovation and design."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5-Year Warranty",
      description: "Comprehensive warranty on all workmanship and materials."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "98% of projects completed on schedule and within budget."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose ZemRenova?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience transforming homes across New York, 
              we've built a reputation for exceptional quality, innovative design, 
              and unmatched customer service.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-amber-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-amber-500 hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern home renovation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
