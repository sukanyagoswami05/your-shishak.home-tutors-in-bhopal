
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
        <div className="max-w-3xl mx-auto text-center">
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animated-element" data-delay="800">
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
              className="text-white border-white hover:bg-white/20"
              size="lg"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
