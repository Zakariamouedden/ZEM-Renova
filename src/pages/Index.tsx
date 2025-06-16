
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { AboutUs } from "../components/AboutUs";
import { Portfolio } from "../components/Portfolio";
import { Testimonials } from "../components/Testimonials";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
