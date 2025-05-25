import React from 'react';
import { CheckCircle, Users, Award, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              The Luxury Appliance Repair Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              For over 15 years, Elite Appliance has been the trusted choice for luxury appliance repair in Beverly Hills and surrounding areas. 
              Our experienced technicians are EPA certified and extensively trained in high-end appliance diagnostics and repair.
            </p>
            <p className="text-gray-600 mb-8">
              We understand that your high-end appliances are significant investments that require expert care. 
              That's why we use only genuine parts and follow precise manufacturer specifications for all repairs and maintenance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle size={24} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-navy-900">EPA Certified</h3>
                  <p className="text-gray-600 text-sm">Professional appliance repair</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users size={24} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-navy-900">Experienced Team</h3>
                  <p className="text-gray-600 text-sm">Over 15 years in luxury repairs</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award size={24} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-navy-900">5-Star Service</h3>
                  <p className="text-gray-600 text-sm">Consistently top-rated by clients</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield size={24} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-navy-900">1-Year Warranty</h3>
                  <p className="text-gray-600 text-sm">All repairs fully guaranteed</p>
                </div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-block bg-navy-800 hover:bg-navy-900 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg"
            >
              Contact Our Team
            </a>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/wolf3.jpg" 
                alt="Appliance repair technician" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 w-64">
              <div className="flex items-center mb-2">
                <div className="text-4xl font-bold text-gold-500">15+</div>
                <div className="ml-3 text-navy-900 font-medium">Years of Experience</div>
              </div>
              <p className="text-gray-600 text-sm">
                Specializing in luxury appliance repair since 2008
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;