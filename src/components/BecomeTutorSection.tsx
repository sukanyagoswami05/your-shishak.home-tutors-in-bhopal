
import React from 'react';
import { GraduationCap, CheckCircle, Users, Award, BadgeCheck } from 'lucide-react';

const BecomeTutorSection = () => {
  return (
    <section id="become-tutor" className="section bg-gradient-to-r from-yellow-50 to-blue-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-lg mb-4">Are You a Passionate Educator?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our growing network of qualified tutors and help students achieve academic excellence while enjoying a rewarding teaching career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="heading-md mb-4 text-center">Why Join Your Shikshak?</h3>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="text-shikshak-blue bg-blue-100 p-2 rounded-full">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Dedicated Students</h4>
                  <p className="text-gray-600 text-sm">Connect with students who are serious about learning and academic growth.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-shikshak-blue bg-blue-100 p-2 rounded-full">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Transparent Monthly Subscriptions</h4>
                  <p className="text-gray-600 text-sm">Enjoy predictable income with our clear payment structure.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-shikshak-blue bg-blue-100 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Professional Development</h4>
                  <p className="text-gray-600 text-sm">Access workshops and training to enhance your teaching skills.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-shikshak-blue bg-blue-100 p-2 rounded-full">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Extra Earning via Referrals</h4>
                  <p className="text-gray-600 text-sm">Boost your income by referring students or other qualified tutors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-shikshak-blue bg-blue-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Everything Under One Trusted Brand</h4>
                  <p className="text-gray-600 text-sm">Benefit from our reputation and marketing as part of the Your Shikshak family.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Tutor teaching student" 
              className="rounded-lg shadow-lg mb-6 object-cover h-64"
            />
            
            <div className="bg-shikshak-blue text-white p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2 text-white">Apply Today</h4>
              <p className="mb-4 text-white/90">
                We're looking for dedicated tutors in all subjects, including special skills like Dance, Music, Abacus, and Yoga.
              </p>
              
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
