
import React from 'react';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 pb-20"
      style={{
        backgroundImage: 'linear-gradient(to right, #0638B5, #295DDE)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white heading-xl mb-6">
            Top-Rated Home Tutors in Bhopal for Classes 1–12 & Entrance Exams
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8">
            1-on-1 Personalised Tutoring | Free Demo Class | All Subjects Covered
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak!%20I%20am%20interested%20in%20a%20demo%20class.%20Here%20are%20my%20details:%0AName%3A%20%0AClass%3A%20%0ASubject%3A%20%0ACity%3A%20"
              className="btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Phone size={18} />
              Book a Free Demo
            </a>
            
            <a href="#services" className="btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
