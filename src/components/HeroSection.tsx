
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-20"
      style={{
        backgroundImage: 'linear-gradient(to right, #001F54, #295DDE)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-white heading-xl mb-6 animated-element" data-delay="200">
              Top-Rated Home Tutors in Bhopal for Classes 1–12 & Entrance Exams
            </h1>
            
            <p className="text-white text-lg md:text-xl mb-8 animated-element" data-delay="400">
              1-on-1 Personalised Tutoring | Free Demo Class | All Subjects Covered
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 animated-element" data-delay="600">
              <div className="flex items-center gap-2 group bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span className="text-white">Verified Tutors</span>
              </div>
              <div className="flex items-center gap-2 group bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span className="text-white">Monthly Reports</span>
              </div>
              <div className="flex items-center gap-2 group bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span className="text-white">Easy Replacements</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animated-element" data-delay="800">
              <Button 
                className="bg-shikshak-green text-white hover:bg-shikshak-green/90" 
                size="lg"
                onClick={() => {
                  window.open("https://wa.me/9244947668?text=Hi%20Your%20Shikshak!%20I%20am%20interested%20in%20a%20demo%20class.%20Here%20are%20my%20details:%0AName%3A%20%0AClass%3A%20%0ASubject%3A%20%0ACity%3A%20", "_blank");
                }}
              >
                <span>📞</span> Book a Free Demo
              </Button>
              
              <Button 
                variant="outline"
                className="bg-shikshak-yellow text-shikshak-blue hover:bg-shikshak-yellow/90 border-none font-medium"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Our Services <ArrowRight className="ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Adding a visual element on the right side */}
          <div className="hidden lg:block animated-element" data-delay="1000">
            <div className="relative p-4">
              <div className="absolute -z-10 w-72 h-72 bg-shikshak-yellow/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="/hero-tutor.png" 
                alt="Online tutor teaching" 
                className="mx-auto floating-animation rounded-lg shadow-xl border-4 border-white/20 max-w-full"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600";
                  e.currentTarget.alt = "Online learning";
                }}
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg p-3 shadow-lg animated-badge">
                <div className="text-sm font-semibold text-shikshak-blue">Join 500+ families</div>
                <div className="text-xs text-gray-500">who trust Your Shikshak</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Animated dots background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="dots-background"></div>
      </div>
    </section>
  );
};

export default HeroSection;
