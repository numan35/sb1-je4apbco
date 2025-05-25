import React from 'react';
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logoTransparent.png" 
              alt="Premium Appliance Repair" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-6">
              Specialized repair service for luxury appliances. Expert technicians for SubZero, Wolf, Viking and other premium brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#brands" className="text-gray-400 hover:text-gold-400 transition-colors">Brands We Service</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-gold-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Refrigerator Repair</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Range & Oven Repair</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Dishwasher Repair</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Wine Cooler Repair</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">Maintenance Plans</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-400">
                <Phone size={18} className="mr-3 text-gold-400" />
                (470) 452-1545
              </p>
              <p className="text-gray-400">
                Metro Atlanta Area<br />
                Georgia
              </p>
              <a 
                href="mailto:service@premiumappliancerepair.com" 
                className="text-gray-400 hover:text-gold-400 transition-colors"
              >
                service@premiumappliancerepair.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Premium Appliance Repair. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;