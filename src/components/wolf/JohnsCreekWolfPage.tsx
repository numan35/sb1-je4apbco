import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const JohnsCreekWolfPage = () => {
  const sections = [
    {
      title: "Wolf Range Repair in JohnsCreek",
      description: "Expert Wolf range repair service in JohnsCreek, including dual-fuel, gas, and induction models. Our certified technicians specialize in burner systems, temperature controls, and oven repairs for JohnsCreek's luxury homes. Same-day emergency service available throughout Gwinnett County.",
      image: "/wolf1.jpg",
      link: "/wolf/range",
      appliances: ["Dual-Fuel Ranges", "Gas Ranges", "Induction Ranges", "Professional Ranges", "Range Top Units"]
    },
    {
      title: "Wolf Cooktop Repair in JohnsCreek",
      description: "Professional Wolf cooktop repair services in JohnsCreek. We service gas, electric, and induction cooktops throughout McGinnis Ferry and Settles Bridge areas, fixing everything from burner issues to electronic controls.",
      image: "/wolf2.jpg",
      link: "/wolf/cooktop",
      appliances: ["Gas Cooktops", "Electric Cooktops", "Induction Cooktops", "Rangetops", "Module Cooktops"]
    },
    {
      title: "Wolf Oven Repair in JohnsCreek",
      description: "Comprehensive Wolf oven repair in JohnsCreek for wall ovens, steam ovens, and convection ovens. Expert service for temperature control, heating elements, and digital systems throughout JohnsCreek's finest neighborhoods.",
      image: "/wolfOven.jpg",
      link: "/wolf/oven",
      appliances: ["Single Wall Ovens", "Double Wall Ovens", "Steam Ovens", "Speed Ovens", "Convection Ovens"]
    },
    {
      title: "Wolf Outdoor Grill Repair in JohnsCreek",
      description: "Specialized Wolf outdoor grill repair in JohnsCreek and surrounding areas. Our technicians service burners, ignition systems, rotisseries, and temperature controls for optimal grilling performance in JohnsCreek's outdoor kitchens.",
      image: "/wolfGrill.jpg",
      link: "/wolf/outdoor-grill",
      appliances: ["Built-in Grills", "Cart Grills", "Side Burners", "Warming Drawers", "Access Doors"]
    },
    {
      title: "Wolf Ventilation Repair in JohnsCreek",
      description: "Expert Wolf ventilation repair in JohnsCreek including hood fans, downdraft systems, and blowers. We ensure proper ventilation and optimal kitchen air quality for JohnsCreek's luxury homes.",
      image: "/wolfHood.jpg",
      link: "/wolf/ventilation",
      appliances: ["Wall Hood Systems", "Island Hoods", "Downdraft Systems", "Insert Hoods", "Custom Ventilation"]
    },
    {
      title: "Wolf Microwave & Drawer Repair in JohnsCreek",
      description: "Professional Wolf microwave and warming drawer repair in JohnsCreek. We service all models including built-in microwaves, drawer microwaves, and warming drawers throughout Gwinnett County.",
      image: "/wolfMicrowave.avif",
      link: "/wolf/microwave-drawer",
      appliances: ["Built-in Microwaves", "Drawer Microwaves", "Warming Drawers", "Multi-function Drawers"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wolf Appliance Repair JohnsCreek | Expert Wolf Service</title>
        <meta name="description" content="JohnsCreek's trusted Wolf repair specialists. Factory-certified technicians for Wolf ranges, ovens, cooktops, grills & more. Same-day service in McGinnis Ferry, Settles Bridge & surrounding areas. Call (404) 200-7265" />
        <meta name="keywords" content="Wolf repair JohnsCreek, Wolf range repair JohnsCreek, Wolf oven repair JohnsCreek, Wolf cooktop repair JohnsCreek, Wolf grill repair JohnsCreek, Wolf ventilation repair JohnsCreek" />
        <link rel="canonical" href="https://premiumappliance.co/johns-creek/wolf-repair" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Wolf Appliance Repair JohnsCreek",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Premium Appliance Repair",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "JohnsCreek",
                  "addressRegion": "GA"
                },
                "telephone": "+14042007265"
              },
              "areaServed": {
                "@type": "City",
                "name": "JohnsCreek"
              },
              "serviceType": "Wolf Appliance Repair",
              "description": "Expert repair services for all Wolf appliances in JohnsCreek including ranges, ovens, cooktops, grills, ventilation systems, and warming drawers"
            }
          `}
        </script>
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/johnsCreek.jpg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  JohnsCreek's Wolf Repair Specialists
                </h1>
                <p className="text-xl text-gray-200">
                  Factory-certified technicians with 15+ years of Wolf repair expertise serving JohnsCreek and Gwinnett County
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Professional Wolf Repair Services in JohnsCreek</h2>
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
                      alt={`${section.title} in JohnsCreek`}
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
            <h2 className="text-3xl font-bold text-white mb-4">Expert Wolf Repair in JohnsCreek</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With 15+ years of specialized experience, our factory-certified technicians provide professional Wolf appliance repair throughout JohnsCreek and surrounding areas. 
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

export default JohnsCreekWolfPage;