
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="heading-lg mb-6">About Your Shikshak</h2>
            
            <p className="text-gray-700 mb-4">
              <span className="font-display font-semibold text-shikshak-blue">Your Shikshak</span> was founded by <span className="font-semibold">Kamaljeet Singh Dangi</span>, an educationist from Bhopal with a passion for personalized learning and student development.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our mission is <span className="italic">"Bringing quality education home – one student at a time."</span> We believe that every student has unique learning needs, and personalized one-on-one attention is key to unlocking their full potential.
            </p>
            
            <div className="bg-shikshak-blue/5 p-5 rounded-lg border-l-4 border-shikshak-blue mb-6">
              <h3 className="text-lg font-semibold mb-2">Our Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-shikshak-green font-bold">✓</span>
                  <span>Personalized learning plans tailored to each student</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-shikshak-green font-bold">✓</span>
                  <span>Regular assessments and progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-shikshak-green font-bold">✓</span>
                  <span>Focus on conceptual understanding, not just memorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-shikshak-green font-bold">✓</span>
                  <span>Continuous communication with parents</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="Tutor helping student" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
