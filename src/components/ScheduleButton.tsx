import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

const ScheduleButton = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">
            Schedule Your Repair Service
          </h2>
          <p className="text-gray-600 mb-8">
            Our expert technicians are ready to help with any luxury appliance repair needs. 
            We offer same-day service and guarantee our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/book" 
              className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <Calendar size={18} className="mr-2" />
              Schedule Service
            </Link>
            <a 
              href="tel:+14042007265" 
              className="bg-transparent border-2 border-gold-500 text-navy-900 font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-gold-500/10 flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" />
              Call (470) 452-1545
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleButton;