import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const VikingPage = () => {
  const sections = [

    {
      title: "Viking Refrigerator Repair",
      description: "Expert repair for Viking refrigeraotrs and freezers. Our technicians service all models with precision and care for optimal performance.",
      image: "/viking2.png",
      link: "/viking/refrigerator",
      appliances: ["Built-in Refrigerators/Freezers", "Freestanding Refrigeration", "Undercounter Refrigeration" ]
    },
    {
      title: "Viking Range Repair",
      description: "Expert repair for all Viking ranges with specialized service for dual-fuel models. Our certified technicians are experts in both gas cooktop and electric oven systems, providing comprehensive repair for temperature controls, convection systems, and electronic components. Same-day emergency service available.",
      image: "/viking3.jpg",
      link: "/viking/range",
      appliances: [
        "Dual-Fuel Range Systems",
        "Electric Oven Controls",
        "Gas Cooktop Components",
        "Convection Technology",
        "Professional Range Series"
      ]
    },
    {
      title: "Viking Oven Repair",
      description: "Comprehensive repair for Viking wall ovens, steam ovens, and convection ovens. Expert service for temperature control, heating elements, and digital systems.",
      image: "/vikingOven.jpg",
      link: "/viking/oven",
      appliances: ["Single Wall Ovens", "Double Wall Ovens", "Steam Ovens", "Speed Ovens", "Convection Ovens"]
    },
    {
      title: "Viking Cooktop Repair",
      description: "Professional repair services for Wolf cooktops. We service gas, electric, and induction cooktops, fixing everything from burner issues to electronic controls.",
      image: "/vikingCooktop.jpg",
      link: "/viking/cooktop",
      appliances: ["Gas Cooktops", "Electric Cooktops", "Induction Cooktops", "Rangetops", "Module Cooktops"]
    },
    {
      title: "Viking Outdoor Grill Repair",
      description: "Specialized repair for Viking outdoor grills and BBQ systems. Our technicians service burners, ignition systems, rotisseries, and temperature controls for optimal grilling performance.",
      image: "/vikingGrill.png",
      link: "/viking/outdoor-grill",
      appliances: ["Built-in Grills", "Cart Grills", "Side Burners", "Warming Drawers", "Access Doors"]
    },
    {
      title: "Viking Microwave & Drawer Repair",
      description: "Professional repair for Viking microwaves and warming drawers. We service all models including built-in microwaves, drawer microwaves, and warming drawers.",
      image: "/vikingMicrowave.png",
      link: "/viking/microwave-drawer",
      appliances: ["Built-in Microwaves", "Drawer Microwaves", "Warming Drawers", "Multi-function Drawers"]
    },
    {
      title: "Viking Dishwasher Repair",
      description: "Expert repair for Viking dishwashers and cleanup appliances. Our technicians service all models with precision and care for optimal performance.",
      image: "/vikingDishwasher.png",
      link: "/viking/cleanup",
      appliances: ["Dishwashers"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Viking Appliance Repair Atlanta | Expert Viking Service</title>
        <meta name="description" content="Atlanta's trusted Viking repair specialists. Factory-certified technicians for Viking ranges, ovens, cooktops, grills & more. Same-day service available. Call (404) 200-7265" />
        <meta name="keywords" content="Viking repair Atlanta, Viking range repair, Viking oven repair, Viking cooktop repair, Viking grill repair, Viking ventilation repair, Viking appliance service" />
        <meta property="og:title" content="Viking Appliance Repair Atlanta | Expert Service" />
        <meta property="og:description" content="Expert Viking appliance repair in Atlanta. Factory-certified technicians, same-day service available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://premiumappliance.co/viking" />
        <meta property="og:image" content="/viking1.jpeg" />
        <link rel="canonical" href="https://premiumappliance.co/viking" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Viking Appliance Repair",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Premium Appliance Repair",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA"
                },
                "telephone": "+14042007265"
              },
              "areaServed": {
                "@type": "City",
                "name": "Atlanta"
              },
              "serviceType": "Viking Appliance Repair",
              "description": "Expert repair services for all Viking appliances including ranges, ovens, cooktops, grills, ventilation systems, and warming drawers"
            }
          `}
        </script>
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/viking1.jpeg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Atlanta's Viking Repair Specialists
                </h1>
                <p className="text-xl text-gray-200">
                  Factory-certified technicians with 15+ years of Viking repair expertise
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Professional Viking Repair Services</h2>
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
                      alt={`${section.title} in Atlanta`}
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
            <h2 className="text-3xl font-bold text-white mb-4">Expert Viking Repair in Atlanta</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With 15+ years of specialized experience, our factory-certified technicians provide professional Viking appliance repair throughout the Atlanta metro area. 
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

export default VikingPage;