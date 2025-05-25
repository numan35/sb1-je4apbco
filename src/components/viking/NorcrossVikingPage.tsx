import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NorcrossVikingPage = () => {
  const sections = [
    {
      title: "Viking Refrigerator Repair in Norcross",
      description: "Expert Viking refrigerator repair in Norcross. Our certified technicians specialize in all Viking refrigeration systems, providing comprehensive repair services throughout Gwinnett County.",
      image: "/viking2.png",
      link: "/viking/refrigerator",
      appliances: ["Built-in Refrigerators/Freezers", "Freestanding Refrigeration", "Undercounter Refrigeration"]
    },
    {
      title: "Viking Range Repair in Norcross",
      description: "Expert Viking range repair in Norcross, including dual-fuel models. Our certified technicians are experts in both gas cooktop and electric oven systems, providing comprehensive repair throughout Historic Norcross and Spalding Woods areas.",
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
      title: "Viking Dishwasher Repair in Norcross",
      description: "Expert Viking dishwasher repair in Norcross. Our technicians service all models with precision and care for optimal performance throughout Norcross's luxury homes.",
      image: "/vikingDishwasher.png",
      link: "/viking/dishwasher",
      appliances: ["Built-in Dishwashers", "Panel-Ready Models", "Professional Series"]
    },
    {
      title: "Viking Outdoor Grill Repair in Norcross",
      description: "Specialized Viking outdoor grill repair in Norcross. Our technicians service burners, ignition systems, rotisseries, and temperature controls for optimal grilling performance in Norcross's outdoor kitchens.",
      image: "/vikingGrill.png",
      link: "/viking/outdoor-grill",
      appliances: ["Built-in Grills", "Cart Grills", "Side Burners", "Warming Drawers", "Access Doors"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Viking Appliance Repair Norcross | Expert Viking Service</title>
        <meta name="description" content="Norcross's trusted Viking repair specialists. Factory-certified technicians for Viking ranges, refrigerators, dishwashers & more. Same-day service in Historic Norcross, Spalding Woods & surrounding areas. Call (404) 200-7265" />
        <meta name="keywords" content="Viking repair Norcross, Viking range repair Norcross, Viking refrigerator repair Norcross, Viking dishwasher repair Norcross, Viking grill repair Norcross" />
        <link rel="canonical" href="https://premiumappliance.co/norcross/viking-repair" />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/norcross.jpeg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Norcross's Viking Repair Specialists
                </h1>
                <p className="text-xl text-gray-200">
                  Factory-certified technicians with 15+ years of Viking repair expertise serving Norcross and Gwinnett County
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Professional Viking Repair Services in Norcross</h2>
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
                      alt={`${section.title} in Norcross`}
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
            <h2 className="text-3xl font-bold text-white mb-4">Expert Viking Repair in Norcross</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With 15+ years of specialized experience, our factory-certified technicians provide professional Viking appliance repair throughout Norcross and surrounding areas. 
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

export default NorcrossVikingPage;