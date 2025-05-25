import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceAreaPage = () => {
  const cities = [
     { name: 'Atlanta', link: '/atlanta' },
    { name: 'Alpharetta', link: '/alpharetta' },
    { name: 'Avondale Estates', link: '/avondale-estates' },
  ];

  return (
    <>
      <Helmet>
        <title>Service Area | Premium Appliance Repair Atlanta & Metro Area</title>
        <meta name="description" content="Premium Appliance Repair serves Atlanta, Sandy Springs, Marietta, Roswell, Alpharetta and surrounding communities. Expert luxury appliance repair for SubZero, Wolf, and Viking appliances." />
        <meta name="keywords" content="appliance repair Atlanta, SubZero repair Sandy Springs, Wolf repair Marietta, Viking repair Buckhead, luxury appliance service metro Atlanta" />
        <link rel="canonical" href="https://premiumappliance.co/service-area" />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/heroImage2.jpg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Service Area Coverage
                </h1>
                <p className="text-xl text-gray-200">
                  Expert luxury appliance repair throughout Metro Atlanta
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Areas We Serve
              </h2>
              <p className="text-gray-600 mb-8">
                Premium Appliance Repair provides expert service for SubZero, Wolf, Viking, and other luxury appliances 
                throughout the greater Atlanta metropolitan area. Our factory-certified technicians are 
                available for both scheduled maintenance and emergency repairs in all the 
                following locations:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cities.map((city, index) => {
                  if (typeof city === 'object' && city.link) {
                    return (
                      <Link
                        key={index}
                        to={city.link}
                        className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gold-50 transition-colors duration-200 w-full"
                      >
                        <MapPin size={16} className="text-gold-500 mr-2 flex-shrink-0" />
                        <span className="text-navy-900 font-medium truncate">{city.name}</span>
                      </Link>
                    );
                  }
                  return (
                    <div 
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full"
                    >
                      <MapPin size={16} className="text-gold-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 truncate">{city}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-navy-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Same-Day Service Available</h3>
                <p className="text-gray-300">
                  We understand that appliance issues can't wait. Our technicians are strategically 
                  located throughout Metro Atlanta to provide prompt service when you need it most.
                </p>
              </div>
              <div className="bg-navy-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Factory Certified Technicians</h3>
                <p className="text-gray-300">
                  Our team is certified to repair SubZero, Wolf, and Viking appliances, ensuring your 
                  luxury appliances receive the expert care they deserve.
                </p>
              </div>
            </div>

            <div className="bg-navy-900 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Schedule Your Appliance Repair
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're in Buckhead, Sandy Springs, or anywhere in between, our expert 
                technicians are ready to help with any luxury appliance repair needs.
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
                  href="tel:14042007265" 
                  className="bg-transparent border-2 border-gold-500 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-gold-500/10 flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Call (470) 452-1545
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaPage;