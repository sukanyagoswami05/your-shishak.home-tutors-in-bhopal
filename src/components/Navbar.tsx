
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { url } from 'inspector';
import Logo from '../assets/1.jpg'; // adjust the path if needed


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

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Why Choose Us', id: 'features' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'About', id: 'about' },
    { label: 'Become a Tutor', id: 'become-tutor' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'sticky-navbar py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-full overflow-hidden h-14 w-14 border-2 border-white/30 shadow-lg flex items-center justify-center bg-white hover:scale-105 transition-transform duration-300">
            <img
  src={Logo}
  alt="Your Shishak Logo"
  className="h-12 w-12 object-cover transform scale-110"
/>
          </div>
          <div className={`font-display font-bold text-lg ${isScrolled ? 'text-shikshak-blue' : 'text-white'}`}>
            Your Shikshak
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <motion.nav 
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavLinkClick(link.id)}
              className={`font-medium ${isScrolled ? 'text-shikshak-blue' : 'text-white'} hover:text-shikshak-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:bg-shikshak-yellow after:h-0.5 after:w-0 hover:after:w-full after:transition-all`}
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={() => handleNavLinkClick('contact')}
            className="bg-shikshak-green text-white hover:bg-opacity-90 px-5 py-2.5 rounded-md transition-colors font-medium shadow-md hover:shadow-lg"
          >
            Book a Demo
          </a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? 
            <X className={`h-6 w-6 ${isScrolled && !isMenuOpen ? 'text-shikshak-blue' : 'text-white'}`} /> : 
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-shikshak-blue' : 'text-white'}`} />
          }
        </motion.button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-shikshak-blue z-40 pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container flex flex-col gap-4 p-5">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-medium text-white hover:text-shikshak-yellow transition-colors px-4 py-3 rounded-md hover:bg-white/10"
                  onClick={() => handleNavLinkClick(link.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.a 
                href="#contact" 
                className="btn-primary mt-4"
                onClick={() => handleNavLinkClick('contact')}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Book a Free Demo
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
