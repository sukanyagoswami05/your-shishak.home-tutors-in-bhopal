
import React, { useEffect, useRef } from 'react';
import { GraduationCap, CheckCircle, Users, Award, BadgeCheck, Calendar } from 'lucide-react';

const BecomeTutorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
  
  return (
    <section id="become-tutor" className="section bg-gradient-to-r from-shikshak-blue/5 to-shikshak-blue/10" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4 animated-element">Are You a Passionate Educator?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animated-element">
            Join our growing network of qualified tutors and help students achieve academic excellence while enjoying a rewarding teaching career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animated-element transform hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="heading-md mb-4 text-center">Why Join Your Shikshak?</h3>
            
            <div className="space-y-6 mt-6">
              <div className="flex items-start gap-4 group">
                <div className="feature-icon group-hover:scale-110 transition-transform">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Dedicated Students</h4>
                  <p className="text-gray-600">Connect with students who are serious about learning and academic growth.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="feature-icon group-hover:scale-110 transition-transform">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Transparent Monthly Subscriptions</h4>
                  <p className="text-gray-600">Enjoy predictable income with our clear payment structure.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="feature-icon group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Professional Development</h4>
                  <p className="text-gray-600">Access workshops and training to enhance your teaching skills.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="feature-icon group-hover:scale-110 transition-transform">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Weekly Demo Classes</h4>
                  <p className="text-gray-600">Opportunity to showcase your teaching skills with new students regularly.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="feature-icon group-hover:scale-110 transition-transform">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Extra Earning via Referrals</h4>
                  <p className="text-gray-600">Boost your income by referring students or other qualified tutors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="feature-icon group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">Part of 300+ Tutor Community</h4>
                  <p className="text-gray-600">Join our large network of professionals under the trusted Your Shikshak brand.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center animated-element">
            <div className="relative mb-8 overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Tutor teaching student" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-shikshak-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">Join our community of passionate educators making a difference in students' lives</p>
              </div>
            </div>
            
            <div className="bg-shikshak-blue text-white p-8 rounded-lg shadow-lg transform hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center mb-2 animate-pulse-gentle">
                  <GraduationCap className="h-10 w-10 text-shikshak-blue" />
                </div>
              </div>
              
              <h4 className="text-2xl font-semibold mb-4 text-white text-center">Apply Today</h4>
              <p className="mb-6 text-white/90 text-center">
                We're looking for dedicated tutors in all subjects, including special skills like Dance, Music, Abacus, and Yoga.
              </p>
              
              <div className="bg-white/10 p-4 rounded-lg mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-shikshak-yellow" />
                    <span className="text-white/90">Continuous Skill Workshops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-shikshak-yellow" />
                    <span className="text-white/90">Career Growth Opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-shikshak-yellow" />
                    <span className="text-white/90">Supportive Teaching Community</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak%20Team%20%F0%9F%91%8B%2C%20I%27d%20like%20to%20join%20as%20a%20tutor.%20Here%20are%20my%20details%3A%0AName%3A%20%0ASubjects%20I%20Can%20Teach%3A%20%0AExperience%3A%20%0AClasses%20I%20Can%20Handle%3A%20%0AContact%20Number%3A%20%0A%0APlease%20send%20me%20the%20registration%20form."
                className="btn-secondary w-full flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📩</span> Apply via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeTutorSection;
