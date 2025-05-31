import tutorImage from '../assets/b32c2c78133ac33c0d790cc9ec683e7d.png';

import React, { useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Users, 
  Award, 
  BadgeCheck, 
  Calendar,
  MapPin,
  ChartBar,
  Handshake
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const BecomeTutorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  useEffect(() => {
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

    const animatedElements = document.querySelectorAll('.animated-element');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const tutorFeatures = [
    {
      icon: <MapPin className="h-12 w-12 text-white" />,
      title: "Teach Near You + Bring Your Own Leads",
      description: "Get class opportunities near your home. Already have your own student? Teach them under Your Shikshak with zero or minimal commission."
    },
    {
      icon: <BadgeCheck className="h-12 w-12 text-white" />,
      title: "Build a Verified Teaching Profile",
      description: "Earn verified teaching experience with every class. Track your subject expertise, teaching hours, and performance under our brand."
    },
    {
      icon: <Award className="h-12 w-12 text-white" />,
      title: "Earn More via Referrals & Rewards",
      description: "Refer students or fellow tutors and earn rewards. High-performing tutors receive bonuses and enhanced profile visibility."
    },
    {
      icon: <ChartBar className="h-12 w-12 text-white" />,
      title: "Test & Reporting Support",
      description: "Monthly academic tests designed by our evaluation team. Get assistance in assessment and regular performance reports to build trust."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: "Upskill via Free Workshops",
      description: "Attend teaching skill workshops and learn classroom etiquette, syllabus completion strategies, and parent communication skills."
    },
    {
      icon: <Handshake className="h-12 w-12 text-white" />,
      title: "Be Part of a Professional Network",
      description: "Join 300+ tutors under one trusted platform. Get updates, resources, leads, and performance feedback in one system."
    }
  ];

  // Growth steps for the progress visualization
  const growthSteps = [
    { step: 1, label: "Join Platform" },
    { step: 2, label: "Complete Training" },
    { step: 3, label: "Conduct Demo Classes" },
    { step: 4, label: "Start Teaching" },
    { step: 5, label: "Regular Assessment" },
    { step: 6, label: "Earn Rewards" }
  ];
  
  return (
    <section id="become-tutor" className="section bg-gradient-to-br from-shikshak-blue/5 via-white to-shikshak-blue/10" ref={sectionRef}>
      <div className="container max-w-7xl">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="outline" className="bg-shikshak-blue/5 text-shikshak-blue border-shikshak-blue/20 px-4 py-1 text-sm font-medium">
            For Educators
          </Badge>
          <h2 className="heading-lg text-center animated-element">Why Join as a Tutor with <span className="text-shikshak-blue">Your Shikshak?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto animated-element mb-8">
            Become part of a growing community of 300+ educators and transform your teaching career with better opportunities, support, and rewards.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tutorFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-1 bg-gradient-to-r from-shikshak-blue to-blue-600">
                <div className="bg-white p-6 rounded-t-lg">
                  <div className="bg-gradient-to-br from-shikshak-blue to-blue-600 rounded-full p-3 inline-flex mb-4 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-shikshak-blue mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tutor Growth Journey */}
        <div className="max-w-4xl mx-auto mb-16 animated-element">
          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <CardContent className="p-8">
              <h3 className="heading-md text-center mb-8">Your Growth Journey With Us</h3>
              
              <div className="relative">
                {/* Progress bar */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>
                
                {/* Journey steps */}
                <div className="space-y-12 relative z-10">
                  {growthSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-1/2 pr-8 text-right ${index % 2 === 1 ? 'order-1' : 'order-none'}`}>
                        <h4 className="text-lg font-semibold text-shikshak-blue">{step.label}</h4>
                      </div>
                      
                      <div className="relative flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-shikshak-blue text-white flex items-center justify-center text-sm font-bold z-10">
                          {step.step}
                        </div>
                      </div>
                      
                      <div className={`w-1/2 pl-8 ${index % 2 === 0 ? 'order-1' : 'order-none'}`}>
                        <motion.div 
                          className="h-2 bg-gradient-to-r from-shikshak-blue to-shikshak-yellow rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(step.step / growthSteps.length) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call To Action */}
        <div className="bg-gradient-to-r from-shikshak-blue to-blue-700 rounded-2xl p-1 shadow-xl max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              {
              <img src={tutorImage} alt="Tutor " className="w-60 h-52 mr-2 rounded-full" />

              
              /* <img 
                src="/assets/new.jpg"
                alt="Become a tutor" 
                className="rounded-lg shadow-md w-full object-cover h-64 md:h-auto"
              /> */}
            </div>
            
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h3 className="heading-md text-shikshak-blue">Ready to Transform Your Teaching Career?</h3>
              <p className="text-gray-600">Join our network of professional tutors and access better opportunities, support systems, and rewards.</p>
              
              <a 
                href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak%20Team%20%F0%9F%91%8B%2C%20I%27d%20like%20to%20join%20as%20a%20tutor.%20Here%20are%20my%20details%3A%0AName%3A%20%0ASubjects%20I%20Can%20Teach%3A%20%0AExperience%3A%20%0AClasses%20I%20Can%20Handle%3A%20%0AContact%20Number%3A%20%0A%0APlease%20send%20me%20the%20registration%20form."
                className="btn-secondary w-full md:w-auto flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap className="h-5 w-5" />
                Become a Your Shikshak Tutor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeTutorSection;
