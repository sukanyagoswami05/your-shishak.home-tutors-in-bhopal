
import React, { useEffect, useRef } from 'react';
import { Book, GraduationCap, Music, User, Calculator } from 'lucide-react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: <Book className="h-10 w-10 text-shikshak-blue" />,
      title: "Class 1–10 Tutoring",
      description: "Comprehensive tutoring for all subjects including Mathematics, Science, English, Hindi, Social Studies and more.",
      subjects: ["Mathematics", "Science", "English", "Hindi", "Social Studies"]
    },
    {
      icon: <Book className="h-10 w-10 text-shikshak-blue" />,
      title: "Class 11–12",
      description: "Specialized tutoring for Science, Commerce and Humanities streams.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics", "Business Studies", "Political Science", "History"]
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-shikshak-blue" />,
      title: "JEE / NEET / CUET Coaching",
      description: "Expert guidance for competitive exams with focus on conceptual clarity and problem-solving techniques.",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Aptitude", "English"]
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-shikshak-blue" />,
      title: "Graduation Subjects",
      description: "Subject-specific tutoring for undergraduate courses.",
      subjects: ["B.Com", "BBA", "B.Tech", "BCA", "Programming Languages", "Management Subjects"]
    }
  ];

  const extracurricular = [
    {
      icon: "🎶",
      title: "Music",
      description: "Vocal and instrumental lessons for all age groups"
    },
    {
      icon: "💃",
      title: "Dance",
      description: "Classical and contemporary dance forms"
    },
    {
      icon: "🔢",
      title: "Abacus",
      description: "Mental math and calculation techniques"
    },
    {
      icon: "🧘",
      title: "Yoga",
      description: "Mind-body wellness and flexibility training"
    }
  ];

  return (
    <section id="services" className="section bg-shikshak-light" ref={sectionRef}>
      <div className="container">
        <h2 className="heading-lg text-center mb-4 animated-element">Our Services</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12 animated-element">
          We provide customized tutoring services for all educational levels with experienced subject matter experts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animated-element" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-shikshak-yellow/20 rounded-full">
                {service.icon}
              </div>
              <h3 className="heading-md mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mt-auto w-full">
                <p className="font-medium text-shikshak-blue mb-2">Subjects Covered:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.subjects.map((subject, idx) => (
                    <span 
                      key={idx}
                      className="bg-shikshak-blue/10 text-shikshak-blue px-3 py-1 rounded-full text-sm hover:bg-shikshak-blue hover:text-white transition-colors duration-300"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fancy-divider animated-element"></div>
        
        <h3 className="heading-md text-center mb-8 animated-element">Extracurricular Activities</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {extracurricular.map((activity, index) => (
            <div key={index} className="activity-card group animated-element" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="activity-icon text-4xl mb-2">{activity.icon}</div>
              <h4 className="text-lg font-semibold text-shikshak-blue mb-1">{activity.title}</h4>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animated-element">
          <a 
            href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak!%20I%20am%20interested%20in%20a%20demo%20class.%20Here%20are%20my%20details:%0AName%3A%20%0AClass%3A%20%0ASubject%3A%20%0ACity%3A%20"
            className="btn-primary inline-flex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Your Free Demo Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
