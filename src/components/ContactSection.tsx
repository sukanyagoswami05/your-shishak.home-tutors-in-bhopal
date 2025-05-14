
import React from 'react';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-shikshak-blue text-white">
      <div className="container">
        <h2 className="heading-lg text-white text-center mb-4">Get In Touch</h2>
        <p className="text-center text-white/80 max-w-xl mx-auto mb-12">
          Ready to experience personalized home tutoring? Book a free demo class or reach out for more information.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col items-center text-center hover:bg-white/20 transition-colors">
            <div className="bg-shikshak-yellow p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-shikshak-blue" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <a 
              href="tel:+919244947668" 
              className="text-white/90 hover:text-white transition-colors hover:underline"
            >
              +91 9244947668
            </a>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col items-center text-center hover:bg-white/20 transition-colors">
            <div className="bg-shikshak-yellow p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-shikshak-blue" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <a 
              href="mailto:yourshikshaktutoringservice@gmail.com" 
              className="text-white/90 hover:text-white transition-colors hover:underline break-all"
            >
              yourshikshaktutoringservice@gmail.com
            </a>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col items-center text-center hover:bg-white/20 transition-colors">
            <div className="bg-shikshak-yellow p-4 rounded-full mb-4">
              <Instagram className="h-6 w-6 text-shikshak-blue" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
            <a 
              href="https://www.instagram.com/yourshikshak.inn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white transition-colors hover:underline"
            >
              @yourshikshak.inn
            </a>
          </div>
        </div>
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="heading-md text-shikshak-blue mb-4">Book a Free Demo Class</h3>
                <p className="text-gray-600 mb-6">
                  Experience the Your Shikshak difference with a no-obligation demo session. Our expert tutors will assess your child's needs and demonstrate our teaching approach.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/9244947668?text=Hi%20Your%20Shikshak!%20I%20am%20interested%20in%20a%20demo%20class.%20Here%20are%20my%20details:%0AName%3A%20%0AClass%3A%20%0ASubject%3A%20%0ACity%3A%20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                    </svg>
                    Chat on WhatsApp
                  </a>
                  
                  <a 
                    href="tel:+919244947668" 
                    className="flex items-center gap-2 text-shikshak-blue hover:underline"
                  >
                    <Phone className="h-5 w-5" />
                    Call Us Directly
                  </a>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55142071496!2d77.34992254030058!3d23.199639376447533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1652323457818!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    title="Your Shikshak Location"
                  ></iframe>
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-shikshak-blue flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm">
                    Based in Bhopal, Madhya Pradesh. Our tutors travel to your home for personalized sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
