
import React from 'react';
import { CheckCircle, User, CalendarCheck, BadgeCheck } from 'lucide-react';

const EnhancedHeroSection = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="heading-xl mb-6">
              Need a Home Tutor? Get a Free Demo Today!
            </h1>
            
            <p className="text-white/90 text-lg mb-8">
              Your Shikshak provides personalized home tutoring in Bhopal for students of all ages. Our expert tutors cover all subjects including Dance, Music, Abacus, and Yoga.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span>Verified Tutors</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span>Monthly Reports</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span>Easy Replacements</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span>1-on-1 Classes</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span>Syllabus Tracking</span>
              </div>
              
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-shikshak-yellow" />
                <span>All Subjects Covered</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak%20Team%20%F0%9F%91%8B%2C%20I%27m%20looking%20for%20a%20tutor.%20Details%3A%0AStudent%20Name%3A%20%0AClass%3A%20%0ASubjects%3A%20%0AMale%2FFemale%20Preference%3A%20%0ALocation%3A%20%0AGoogle%20Maps%20Link%3A%20%0AContact%20Number%3A%20"
                className="btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>📞</span> Book via WhatsApp
              </a>
              
              <a href="#services" className="btn-secondary">
                Explore Our Services
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Why Parents Trust Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white">
                <div className="bg-shikshak-yellow p-2 rounded-full">
                  <User className="h-5 w-5 text-shikshak-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Personalized Learning</h4>
                  <p className="text-white/80 text-sm">Our tutors adapt to each student's learning style and pace.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-white">
                <div className="bg-shikshak-yellow p-2 rounded-full">
                  <BadgeCheck className="h-5 w-5 text-shikshak-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Transparent Monthly Subscriptions</h4>
                  <p className="text-white/80 text-sm">Simple pricing with no hidden fees or long-term commitments.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-white">
                <div className="bg-shikshak-yellow p-2 rounded-full">
                  <CalendarCheck className="h-5 w-5 text-shikshak-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Regular Progress Updates</h4>
                  <p className="text-white/80 text-sm">Stay informed with detailed monthly reports on your child's progress.</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white/10 p-4 rounded-lg">
                <p className="text-white text-center font-medium">
                  "Your Shikshak has transformed my child's approach to studies. The personalized attention has made all the difference!"
                </p>
                <p className="text-white/80 text-center text-sm mt-2">
                  - Parent of Class 10 Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default EnhancedHeroSection;
