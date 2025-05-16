
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  User, 
  Users, 
  Star, 
  Clock, 
  CreditCard, 
  Award,
  BookUser,
  GraduationCap,
  Layers
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const FeaturesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

    const animatedElements = document.querySelectorAll('.feature-animated-element');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Features for students/parents
  const studentFeatures = [
    {
      icon: <User className="h-10 w-10 text-shikshak-yellow" />,
      title: "Experienced Tutors Only",
      description: "Our tutors undergo thorough background checks and have minimum 3+ years of teaching experience."
    },
    {
      icon: <Users className="h-10 w-10 text-shikshak-yellow" />,
      title: "One-on-One Attention",
      description: "Focused learning with customized teaching methods based on individual learning styles."
    },
    {
      icon: <Star className="h-10 w-10 text-shikshak-yellow" />,
      title: "Comprehensive Curriculum",
      description: "Covers School, Entrance Exams & College subjects with specially designed study materials."
    }
  ];

  // Additional features for students/parents
  const additionalStudentFeatures = [
    {
      icon: <CreditCard className="h-10 w-10 text-white" />,
      title: "Affordable Pricing",
      description: "Quality education at reasonable rates with flexible payment options."
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Weekly Progress Reports",
      description: "Regular updates on student performance with actionable improvement plans."
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: "Female Tutors Available",
      description: "Option to choose preferred tutor gender for comfortable learning environment."
    }
  ];

  return (
    <section id="features" className="section py-20 overflow-hidden">
      <div className="container relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-shikshak-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-shikshak-yellow/10 rounded-full blur-3xl"></div>
        </div>

        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-2 text-sm font-medium bg-shikshak-blue/5 text-shikshak-blue">
            Why Choose Us
          </Badge>
          <h2 className="heading-lg">Why Students & Parents <span className="text-shikshak-blue">Love Your Shikshak?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We transform educational experiences through personalized tutoring backed by a rigorous system of verification, monitoring and reporting.
          </p>
        </div>

        {/* Main features grid with animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {studentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card relative group"
            >
              <Card className="h-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col items-start overflow-hidden z-10">
                <div className="mb-6 p-4 bg-shikshak-blue/5 rounded-full group-hover:bg-shikshak-yellow/20 transition-colors">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-shikshak-blue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-shikshak-blue to-shikshak-yellow w-0 group-hover:w-full transition-all duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional features with different styling */}
        <div className="bg-gradient-to-r from-shikshak-blue to-blue-700 rounded-2xl p-8 md:p-12 mb-20 feature-animated-element">
          <h3 className="text-2xl font-bold text-white text-center mb-10">More Reasons to Choose Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalStudentFeatures.map((feature, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 h-full hover:bg-white/20 transition-colors flex flex-col">
                  <div className="bg-white/10 p-3 rounded-full inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual learning journey */}
        <div className="feature-animated-element mb-20">
          <h3 className="heading-md text-center mb-12">Your Child's Learning Journey With Us</h3>
          
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            {/* Vertical line for mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-4 w-1 bg-gray-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-6">
              {[
                { icon: <BookUser className="h-6 w-6" />, title: "Book a Demo", text: "Experience our teaching approach with a free demo class" },
                { icon: <User className="h-6 w-6" />, title: "Meet Your Tutor", text: "Get matched with a skilled tutor based on your requirements" },
                { icon: <Layers className="h-6 w-6" />, title: "Personalized Learning", text: "Receive customized lessons and teaching methods" },
                { icon: <GraduationCap className="h-6 w-6" />, title: "Track Progress", text: "Monitor improvements with regular assessments" }
              ].map((step, index) => (
                <div key={index} className="relative flex md:flex-col items-start md:items-center">
                  {/* Mobile timeline node */}
                  <div className="md:hidden absolute left-4 top-0 w-8 h-8 bg-shikshak-blue rounded-full flex items-center justify-center text-white transform -translate-x-4">{index + 1}</div>
                  
                  {/* Desktop timeline node */}
                  <div className="hidden md:flex bg-white items-center justify-center w-14 h-14 rounded-full border-4 border-shikshak-blue shadow-lg z-10 mb-4">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="pl-8 md:pl-0 md:text-center">
                    <h4 className="text-lg font-semibold text-shikshak-blue mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center feature-animated-element">
          <a 
            href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak!%20I%20am%20interested%20in%20a%20demo%20class.%20Here%20are%20my%20details:%0AName%3A%20%0AClass%3A%20%0ASubject%3A%20%0ACity%3A%20"
            className="btn-primary inline-flex mx-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Demo Class Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
