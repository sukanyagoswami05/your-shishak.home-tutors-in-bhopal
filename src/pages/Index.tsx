
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';
import BecomeTutorSection from '../components/BecomeTutorSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileWhatsAppCTA from '../components/MobileWhatsAppCTA';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Your Shikshak - Top-Rated Home Tutors in Bhopal";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Your Shikshak provides personalized home tutoring services in Bhopal for Classes 1-12, JEE, NEET, and graduation subjects. Book a free demo class today!");
    }

    // Setup intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Cleanup
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <Testimonials />
        <AboutSection />
        <BecomeTutorSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileWhatsAppCTA />
    </div>
  );
};

export default Index;
