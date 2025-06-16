
import { PageLayout } from "@/components/PageLayout";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const BlogHome = () => {
  const posts = [
    {
      title: "Complete Guide to Renovation Costs in Costa del Sol 2024",
      href: "/blog/renovation-cost-guide",
      excerpt: "Everything you need to know about renovation costs, from kitchen remodeling to whole house renovations in Costa del Sol.",
      author: "ZemRenova Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Cost Guide",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop"
    },
    {
      title: "How Long Does a Home Renovation Take? Timeline Guide",
      href: "/blog/renovation-timeline", 
      excerpt: "Detailed breakdown of renovation timelines for different types of projects, from planning to completion.",
      author: "Carlos Martinez",
      date: "December 10, 2024", 
      readTime: "6 min read",
      category: "Planning",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop"
    },
    {
      title: "Do I Need Permits for My Renovation in Spain?",
      href: "/blog/permits-required",
      excerpt: "Understanding Spanish building permits, when you need them, and how to obtain them for your renovation project.",
      author: "Legal Team",
      date: "December 5, 2024",
      readTime: "10 min read", 
      category: "Legal",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop"
    },
    {
      title: "How to Choose the Right Materials for Your Renovation",
      href: "/blog/material-selection",
      excerpt: "Expert guide to selecting the best materials for your renovation project, considering climate, durability, and style.",
      author: "Design Team", 
      date: "November 30, 2024",
      readTime: "7 min read",
      category: "Materials",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop"
    },
    {
      title: "How to Choose the Right Renovation Contractor",
      href: "/blog/contractor-selection",
      excerpt: "Essential tips for selecting a reliable renovation contractor in Costa del Sol. What to look for and questions to ask.",
      author: "ZemRenova Team",
      date: "November 25, 2024",
      readTime: "9 min read",
      category: "Contractor Guide", 
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "ZemRenova Renovation Blog",
    "description": "Expert renovation advice, guides, and tips for Costa del Sol homeowners",
    "url": "https://zemrenova.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "ZemRenova"
    }
  };

  return (
    <>
      <SEOHead
        title="Renovation Blog - Expert Guides & Tips Costa del Sol"
        description="Expert renovation advice for Costa del Sol homeowners. Guides on costs, timelines, permits, materials, and contractor selection. Professional insights from ZemRenova."
        keywords="renovation blog, home renovation tips, renovation costs Costa del Sol, renovation permits Spain, renovation timeline, contractor selection"
        canonicalUrl="https://zemrenova.com/blog"
        structuredData={structuredData}
      />
      
      <PageLayout breadcrumbItems={[{ name: "Blog" }]}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Renovation Blog & Guides
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Expert renovation advice, comprehensive guides, and insider tips for Costa del Sol homeowners. 
                Get professional insights from our 15+ years of renovation experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link 
                        to={post.href}
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <section className="mt-20 bg-gray-50 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Renovation Tips
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest renovation guides, cost updates, and expert tips delivered to your inbox. 
                No spam, just valuable insights for your next renovation project.
              </p>
              
              <div className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </section>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default BlogHome;
