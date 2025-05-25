import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AvondaleEstatesWolfPage = () => {
  const sections = [
    {
      title: "Wolf Range Repair in Avondale Estates",
      description: "Expert Wolf range repair service in Avondale Estates, including dual-fuel, gas, and induction models. Our certified technicians specialize in burner systems, temperature controls, and oven repairs for Avondale Estates' luxury homes. Same-day emergency service available throughout DeKalb County.",
      image: "/wolf1.jpg",
      link: "/wolf/range",
      appliances: ["Dual-Fuel Ranges", "Gas Ranges", "Induction Ranges", "Professional Ranges", "Range Top Units"]
    },
    {
      title: "Wolf Cooktop Repair in Avondale Estates",
      description: "Professional Wolf cooktop repair services in Avondale Estates. We service gas, electric, and induction cooktops throughout Avondale Estates Historic District and Berkeley Village areas, fixing everything from burner issues to electronic controls.",
      image: "/wolf2.jpg",
      link: "/wolf/cooktop",
      appliances: ["Gas Cooktops", "Electric Cooktops", "Induction Cooktops", "Rangetops", "Module Cooktops"]
    },
    {
      title: "Wolf Oven Repair in Avondale Estates",
      description: "Comprehensive Wolf oven repair in Avondale Estates for wall ovens, steam ovens, and convection ovens. Expert service for temperature control, heating elements, and digital systems throughout Avondale Estates' finest neighborhoods.",
      image: "/wolfOven.jpg",
      link: "/wolf/oven",
      appliances: ["Single Wall Ovens", "Double Wall Ovens", "Steam Ovens", "Speed Ovens", "Convection Ovens"]
    },
    {
      title: "Wolf Outdoor Grill Repair in Avondale Estates",
      description: "Specialized Wolf outdoor grill repair in Avondale Estates and surrounding areas. Our technicians service burners, ignition systems, rotisseries, and temperature controls for optimal grilling performance in Avondale Estates' outdoor kitchens.",
      image: "/wolfGrill.jpg",
      link: "/wolf/outdoor-grill",
      appliances: ["Built-in Grills", "Cart Grills", "Side Burners", "Warming Drawers", "Access Doors"]
    },
    {
      title: "Wolf Ventilation Repair in Avondale Estates",
      description: "Expert Wolf ventilation repair in Avondale Estates including hood fans, downdraft systems, and blowers. We ensure proper ventilation and optimal kitchen air quality for Avondale Estates' luxury homes.",
      image: "/wolfHood.jpg",
      link: "/wolf/ventilation",
      appliances: ["Wall Hood Systems", "Island Hoods", "Downdraft Systems", "Insert Hoods", "Custom Ventilation"]
    },
    {
      title: "Wolf Microwave & Drawer Repair in Avondale Estates",
      description: "Professional Wolf microwave and warming drawer repair in Avondale Estates. We service all models including built-in microwaves, drawer microwaves, and warming drawers throughout DeKalb County.",
      image: "/wolfMicrowave.avif",
      link: "/wolf/microwave-drawer",
      appliances: ["Built-in Microwaves", "Drawer Microwaves", "Warming Drawers", "Multi-function Drawers"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wolf Appliance Repair Avondale Estates | Expert Wolf Service</title>
        <meta name="description" content="Avondale Estates' trusted Wolf repair specialists. Factory-certified technicians for Wolf ranges, ovens, cooktops, grills & more. Same-day service in Avondale Estates Historic District, Berkeley Village & surrounding areas. Call (404) 200-7265" />
        <meta name="keywords" content="Wolf repair Avondale Estates, Wolf range repair Avondale Estates, Wolf oven repair Avondale Estates, Wolf cooktop repair Avondale Estates, Wolf grill repair Avondale Estates, Wolf ventilation repair Avondale Estates" />
        <link rel="canonical" href="https://premiumappliance.co/avondale-estates/wolf-repair" />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/atlantaSkyline.jpg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Avondale Estates' Wolf Repair Specialists
                </h1>
                <p className="text-xl text-gray-200">
                  Factory-certified technicians with 15+ years of Wolf repair expertise serving Avondale Estates and DeKalb County
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Professional Wolf Repair Services in Avondale Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <Link 
                  key={index} 
                  to={section.link}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={section.image} 
                      alt={`${section.title} in Avondale Estates`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{section.title}</h3>
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-navy-900 mb-2">Services Include:</h4>
                      <ul className="text-sm text-gray-600">
                        {section.appliances.map((appliance, idx) => (
                          <li key={idx} className="mb-1">• {appliance}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-navy-900 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Expert Wolf Repair in Avondale Estates</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With 15+ years of specialized experience, our factory-certified technicians provide professional Wolf appliance repair throughout Avondale Estates and surrounding areas. 
              We offer same-day service and back all repairs with our satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book" 
                className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
              >
                Schedule Service
              </Link>
              <a 
                href="tel:+14042007265" 
                className="bg-transparent border-2 border-gold-500 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-gold-500/10"
              >
                Call (470) 452-1545
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvondaleEstatesWolfPage;