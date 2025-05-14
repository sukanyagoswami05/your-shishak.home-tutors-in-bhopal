import React from 'react';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-shikshak-blue text-white pt-12 pb-6">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-full overflow-hidden h-12 w-12 border-3 border-white flex items-center justify-center bg-white">
                <img 
                  src="/lovable-uploads/d2454dc3-c95f-4244-be44-1b8d7a389c0a.png" 
                  alt="Your Shikshak Logo" 
                  className="h-10 w-10 object-cover transform scale-110"
                />
              </div>
              <span className="font-display text-xl font-bold text-white">YOUR SHIKSHAK</span>
            </div>
            <p className="text-white/80 mb-4">
              Your Learning Partner in Bhopal, providing personalized home tutoring services for students of all ages and academic levels.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/yourshikshak.inn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/message/G6DL5N2LVSKIM1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
              </a>
              <a 
                href="mailto:yourshikshaktutoringservice@gmail.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/5">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors hover:underline">Home</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors hover:underline">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors hover:underline">Testimonials</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors hover:underline">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/5">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors hover:underline">Class 1-10 Tutoring</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors hover:underline">Class 11-12 Tutoring</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors hover:underline">JEE/NEET/CUET Coaching</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors hover:underline">Graduation Subjects</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+919244947668" className="text-white/80 hover:text-white transition-colors hover:underline">
                  +91 9244947668
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:yourshikshaktutoringservice@gmail.com" className="text-white/80 hover:text-white transition-colors hover:underline break-all">
                  yourshikshaktutoringservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/yourshikshak.inn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors hover:underline"
                >
                  @yourshikshak.inn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-white/80">Bhopal, Madhya Pradesh</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-8">
          <p className="text-center text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Your Shikshak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
