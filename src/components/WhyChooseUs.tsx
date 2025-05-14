
import React from 'react';
import { User, Users, Star, Clock, CreditCard, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <User className="h-10 w-10 text-shikshak-yellow" />,
      title: "Experienced Tutors Only",
      description: "Our tutors undergo thorough background checks and have minimum 3+ years of teaching experience."
    },
    {
      icon: <Users className="h-10 w-10 text-shikshak-yellow" />,
      title: "One-on-One Personal Attention",
      description: "Focused learning with customized teaching methods based on individual learning styles."
    },
    {
      icon: <Star className="h-10 w-10 text-shikshak-yellow" />,
      title: "Comprehensive Curriculum",
      description: "Covers School, Entrance Exams & College subjects with specially designed study materials."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-shikshak-yellow" />,
      title: "Affordable Pricing",
      description: "Quality education at reasonable rates with flexible payment options."
    },
    {
      icon: <Clock className="h-10 w-10 text-shikshak-yellow" />,
      title: "Weekly Progress Reports",
      description: "Regular updates on student performance with actionable improvement plans."
    },
    {
      icon: <Award className="h-10 w-10 text-shikshak-yellow" />,
      title: "Female Tutors Available",
      description: "Option to choose preferred tutor gender for comfortable learning environment."
    },
  ];

  return (
    <section id="why-choose-us" className="section bg-shikshak-light">
      <div className="container">
        <h2 className="heading-lg text-center mb-12">Why Choose <span className="text-shikshak-blue">Your Shikshak?</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-start">
              <div className="mb-4 p-3 bg-shikshak-blue/5 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
