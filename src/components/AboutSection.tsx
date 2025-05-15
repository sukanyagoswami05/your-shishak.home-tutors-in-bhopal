
import React, { useEffect, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutSection = () => {
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
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 animated-element">
            <h2 className="heading-lg mb-6">About Your Shikshak</h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="font-display font-semibold text-shikshak-blue">Your Shikshak</span> was founded by <span className="font-semibold">Kamaljeet Singh Dangi</span>, an educationist from Bhopal with a passion for personalized learning and student development.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our mission is <span className="italic font-medium">"Bringing quality education home – one student at a time."</span> We believe that every student has unique learning needs, and personalized one-on-one attention is key to unlocking their full potential.
            </p>
            
            <div className="bg-gradient-to-r from-shikshak-blue/5 to-shikshak-blue/10 p-6 rounded-lg border-l-4 border-shikshak-blue mb-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <div className="bg-shikshak-green text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Personalized learning plans tailored to each student</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-shikshak-green text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Regular assessments and progress tracking</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-shikshak-green text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Focus on conceptual understanding, not just memorization</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="bg-shikshak-green text-white rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Continuous communication with parents</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animated-element" data-delay="300">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <AspectRatio ratio={1/1} className="bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tutor helping student" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
            </div>
            
            <div className="mt-6 bg-shikshak-blue/5 p-4 rounded-lg border border-shikshak-blue/10 text-center">
              <p className="italic text-gray-700">
                "Education is not the filling of a pail, but the lighting of a fire."
              </p>
              <p className="text-shikshak-blue font-medium mt-2">— W.B. Yeats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
