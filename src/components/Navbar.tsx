
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden h-12 w-12 border-2 border-white shadow-md flex items-center justify-center bg-white">
            <img 
              src="/lovable-uploads/d2454dc3-c95f-4244-be44-1b8d7a389c0a.png" 
              alt="Your Shikshak Logo" 
              className="h-10 w-10 object-contain"
            />
          </div>
          <span className={`font-display text-xl font-bold ${isScrolled ? 'text-shikshak-blue' : 'text-white'}`}>YOUR SHIKSHAK</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors`}>Home</a>
          <a href="#services" className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors`}>Services</a>
          <a href="#testimonials" className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors`}>Testimonials</a>
          <a href="#about" className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors`}>About</a>
          <a href="#contact" className="btn-primary">Book a Free Demo</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 
            <X className={`h-6 w-6 ${isScrolled ? 'text-shikshak-blue' : 'text-white'}`} /> : 
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-shikshak-blue' : 'text-white'}`} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <nav className="container flex flex-col gap-4">
            <a 
              href="#home" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="btn-primary w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Free Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
