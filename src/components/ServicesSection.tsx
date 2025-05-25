import React from 'react';
import { Wrench, Clock, Award, ShieldCheck } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Wrench size={36} className="text-metallic-500 mb-4" />,
      title: "Expert Repairs",
      description: "With over 15 years of experience and EPA certification, we provide skilled repairs for all luxury appliance brands. All repairs backed by our 1-year warranty."
    },
    {
      icon: <Clock size={36} className="text-metallic-500 mb-4" />,
      title: "Emergency Service",
      description: "Same-day service available for urgent repairs to minimize disruption to your household."
    },
    {
      icon: <Award size={36} className="text-metallic-500 mb-4" />,
      title: "Preventative Maintenance",
      description: "Regular maintenance programs to ensure optimal performance and longevity of your investments."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Premium Appliance Services</h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive repair and maintenance services for high-end residential appliances,
            ensuring they perform flawlessly for years to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border-t-4 border-metallic-500"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-navy-900 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Emergency Repair Service
                </h3>
                <p className="text-gray-300 mb-6">
                  Don't let appliance failures disrupt your life. Our emergency service
                  team is available for same-day repairs on all luxury appliance brands.
                </p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <span className="text-metallic-300 mr-2">✓</span> Available 7 days a week
                  </li>
                  <li className="flex items-start">
                    <span className="text-metallic-300 mr-2">✓</span> Priority scheduling for emergencies
                  </li>
                  <li className="flex items-start">
                    <span className="text-metallic-300 mr-2">✓</span> Most common parts in-stock
                  </li>
                </ul>
                <a 
                  href="tel:+14042007265" 
                  className="bg-metallic-600 hover:bg-metallic-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 inline-block text-center hover:shadow-lg"
                >
                  Call for Emergency Service
                </a>
              </div>
              <div className="hidden lg:block relative h-full">
                <img 
                  src="/subzero2.jpg"
                  alt="Emergency Repair Service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;