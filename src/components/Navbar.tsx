
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

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'sticky-navbar py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 animate-fade-in">
          <div className="rounded-full overflow-hidden h-16 w-16 border-4 border-white shadow-lg flex items-center justify-center bg-white hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/d2454dc3-c95f-4244-be44-1b8d7a389c0a.png" 
              alt="Your Shikshak Logo" 
              className="h-14 w-14 object-cover transform scale-110"
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 animate-fade-in">
          <a 
            href="#home" 
            onClick={() => handleNavLinkClick('home')}
            className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-shikshak-yellow after:h-0.5 after:w-0 hover:after:w-full after:transition-all`}
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={() => handleNavLinkClick('services')}
            className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-shikshak-yellow after:h-0.5 after:w-0 hover:after:w-full after:transition-all`}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            onClick={() => handleNavLinkClick('testimonials')}
            className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-shikshak-yellow after:h-0.5 after:w-0 hover:after:w-full after:transition-all`}
          >
            Testimonials
          </a>
          <a 
            href="#about" 
            onClick={() => handleNavLinkClick('about')}
            className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-shikshak-yellow after:h-0.5 after:w-0 hover:after:w-full after:transition-all`}
          >
            About
          </a>
          <a 
            href="#become-tutor" 
            onClick={() => handleNavLinkClick('become-tutor')}
            className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-green transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-shikshak-green after:h-0.5 after:w-0 hover:after:w-full after:transition-all`}
          >
            Join as a Tutor
          </a>
          <a 
            href="#contact" 
            onClick={() => handleNavLinkClick('contact')}
            className="btn-primary"
          >
            Book a Free Demo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X className={`h-6 w-6 ${isScrolled ? 'text-shikshak-blue' : 'text-white'}`} /> : 
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-shikshak-blue' : 'text-white'}`} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 animate-fade-in">
          <nav className="container flex flex-col gap-4">
            <a 
              href="#home" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleNavLinkClick('home')}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleNavLinkClick('services')}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleNavLinkClick('testimonials')}
            >
              Testimonials
            </a>
            <a 
              href="#about" 
              className="font-medium text-shikshak-blue hover:text-shikshak-yellow transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleNavLinkClick('about')}
            >
              About
            </a>
            <a 
              href="#become-tutor" 
              className="font-medium text-shikshak-blue hover:text-shikshak-green transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
              onClick={() => handleNavLinkClick('become-tutor')}
            >
              Join as a Tutor
            </a>
            <a 
              href="#contact" 
              className="btn-primary w-full mt-2"
              onClick={() => handleNavLinkClick('contact')}
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
