
import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Anjali Gulbake ",
      role: "Parent of Nivransh Gulbake Class 10 Student",
      image: "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      text: "The tutor from Your Shikshaks was very dedicated and punctual. He made sure Nivransh understood every concept clearly. We saw a big improvement in his confidence and marks."
             
,
      stars: 5
    },
    {
      name: " Moksh Jain",
      role:" Class 7th Student",
      image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740",
      text: "I like how my Shikshaks tutor explains everything so patiently. Learning at home feels easy and fun now. I scored full marks in my last math test!",
      stars: 5
    },
    {
      name: "Suresh Mahajan",
      role: "Parent of Revati Mahajan – NEET Aspirant",
      image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4861.jpg",
      text: "Our tutor from Your Shikshaks planned Revati’s entire NEET prep schedule. The one-on-oneteaching at home made a big difference. We’re truly thankful.",
      stars: 4
    },
    {
      name: "Varad Singh",
      role: "JEE Student",
      image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740",
      text: "Thanks to the personal attention I got from Your Shikshaks tutor, my concepts became very clear. The focused JEE preparation at home helped me boost my score.",
      stars: 5
    },
    {
      name: "Ananya Gupta",
      role: "Parent of Class 8 Student",
      image: "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
      text: "My son was struggling with mathematics, but after just three months with his Your Shikshak tutor, he's gained so much confidence. The weekly progress reports help us stay informed about his improvement.",
      stars: 5
    },
    {
      name: "Rajesh Kumar",
      role: "B.Com Student",
      image: "https://t3.ftcdn.net/jpg/07/51/96/72/360_F_751967271_lZbu30yvEUYMDzcN9QrbBiSyW3p4SZHU.jpg",
      text: "Finding good commerce tutors is difficult, but Your Shikshak connected me with an excellent accountancy tutor who simplified complex topics. My grades have improved dramatically this semester.",
      stars: 4
    }
  ];

  return (
    <section id="testimonials" className="section bg-shikshak-light">
      <div className="container">
        <h2 className="heading-lg text-center mb-4">What Parents & Students Say</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          Don't just take our word for it. Hear from families who've experienced the Your Shikshak difference.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-shikshak-blue">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-shikshak-yellow text-shikshak-yellow" />
                ))}
                {Array.from({ length: 5 - testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gray-300" />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-2/5 relative">
              <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-shikshak-blue/80">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-shikshak-yellow flex items-center justify-center cursor-pointer">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <h3 className="heading-md mb-2">Watch Student Success Stories</h3>
              <p className="text-gray-600 mb-4">See how Your Shikshak has transformed academic performance for students across Bhopal.</p>
              <a 
                href="#contact"
                className="text-shikshak-blue font-medium hover:underline inline-flex items-center gap-1"
              >
                Contact us to learn more <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials
