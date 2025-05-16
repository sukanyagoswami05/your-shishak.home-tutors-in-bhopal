import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, BookOpen, CalendarCheck, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  useEffect(() => {
    // Parallax effect for hero background
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroBackground = document.querySelector('.hero-background');
      if (heroBackground instanceof HTMLElement) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div 
        className="hero-background absolute inset-0 -z-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #001F54, #295DDE)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="dots-background"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30"></div>
        
        {/* Animated shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-40 h-40 bg-shikshak-yellow/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content - Text and CTA */}
          <motion.div 
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-6 px-4 py-1.5 bg-white/10 text-white border-white/20 rounded-full text-sm font-medium inline-flex items-center gap-2">
                <span className="animate-pulse bg-shikshak-green h-2 w-2 rounded-full"></span>
                Now in Bhopal
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
              variants={itemVariants}
            >
              Top-Rated Home Tutors for All Classes & Subjects
            </motion.h1>
            
            <motion.p 
              className="text-white/90 text-lg md:text-xl mb-8"
              variants={itemVariants}
            >
              Personalized 1-on-1 tutoring with free demo classes and monthly progress tracking
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              variants={itemVariants}
            >
              {[
                { icon: <CheckCircle className="h-5 w-5 text-shikshak-yellow" />, label: "Verified Tutors" },
                { icon: <CheckCircle className="h-5 w-5 text-shikshak-yellow" />, label: "Monthly Reports" },
                { icon: <CheckCircle className="h-5 w-5 text-shikshak-yellow" />, label: "Easy Replacements" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 group bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all cursor-pointer"
                >
                  <motion.span 
                    whileHover={{ rotate: 360 }} 
                    transition={{ duration: 0.4 }}
                    className="text-shikshak-yellow"
                  >
                    {item.icon}
                  </motion.span>
                  <span className="text-white">{item.label}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button 
                className="bg-shikshak-green text-white hover:bg-shikshak-green/90 shadow-lg hover:shadow-xl transition-all" 
                size="lg"
                onClick={() => {
                  window.open("https://wa.me/9244947668?text=Hi%20Your%20Shikshak!%20I%20am%20interested%20in%20a%20demo%20class.%20Here%20are%20my%20details:%0AName%3A%20%0AClass%3A%20%0ASubject%3A%20%0ACity%3A%20", "_blank");
                }}
              >
                <span>📞</span> Book a Free Demo
              </Button>
              
              <Button 
                variant="outline"
                className="bg-transparent text-white hover:bg-white/20 border-white/40 hover:border-white transition-all"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right content - Visual elements */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -z-10 w-72 h-72 bg-shikshak-yellow/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Main image */}
              <motion.div 
                className="animated-image-container rounded-xl border-4 border-white/20 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/hero-tutor.png" 
                  alt="Home tutor teaching student" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600";
                  }}
                />
              </motion.div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-shikshak-blue/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-shikshak-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-shikshak-blue">500+ Families Trust Us</div>
                    <div className="text-xs text-gray-500">Across Bhopal</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-shikshak-green/10 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-shikshak-green" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-shikshak-blue">All Subjects</div>
                    <div className="text-xs text-gray-500">Classes 1-12 & Competitive Exams</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                whileHover={{ x: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-shikshak-yellow/10 p-2 rounded-full">
                    <CalendarCheck className="h-5 w-5 text-shikshak-yellow" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-shikshak-blue">Free Demo</div>
                    <div className="text-xs text-gray-500">Book Now!</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-white/70 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => {
          const element = document.getElementById('features');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-sm mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
