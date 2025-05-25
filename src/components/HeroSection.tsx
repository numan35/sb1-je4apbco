import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/viking1.jpeg")',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20 md:py-0">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Sub-Zero, Wolf, Viking Repair in Atlanta
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 md:pr-12">
            Specialized service for SubZero, Wolf, Viking, and other high-end appliances. 
            Expert technicians, same-day service, and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="/book" 
              className="bg-metallic-600 hover:bg-metallic-700 text-white font-medium py-4 sm:py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center hover:shadow-lg text-lg sm:text-base"
            >
              Schedule Service
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="tel:+14042007265" 
              className="bg-transparent border-2 border-metallic-300 text-white font-medium py-4 sm:py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center hover:bg-metallic-600/20 text-lg sm:text-base"
            >
              Call Now: (470) 452-1545
            </a>
          </div>
          <div className="pt-8">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.pexels.com/photos/4172877/pexels-photo-4172877.jpeg?auto=compress&cs=tinysrgb&w=128" 
                  className="w-10 h-10 rounded-full border-2 border-metallic-300" 
                  alt="Customer" 
                />
                <img 
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=128" 
                  className="w-10 h-10 rounded-full border-2 border-metallic-300" 
                  alt="Customer" 
                />
                <img 
                  src="https://images.pexels.com/photos/4173208/pexels-photo-4173208.jpeg?auto=compress&cs=tinysrgb&w=128" 
                  className="w-10 h-10 rounded-full border-2 border-metallic-300" 
                  alt="Customer" 
                />
              </div>
              <div className="ml-4">
                <p className="text-white text-sm">
                  <span className="text-metallic-300 font-bold">4.9/5</span> from over 500+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;