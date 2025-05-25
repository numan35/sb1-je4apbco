import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const WoodstockSubZeroPage = () => {
  const sections = [
    {
      title: "Built-in Refrigerator Repair in Woodstock",
      description: "Expert SubZero built-in refrigerator repair in Woodstock. Our certified technicians specialize in dual refrigeration systems, temperature controls, and ice maker repairs for Woodstock's luxury homes. Same-day emergency service available throughout Cherokee County.",
      image: "/subzero1.jpg",
      link: "/subzero/built-in-refrigerator",
      appliances: ["Built-in Refrigerators", "Side-by-Side Units", "Column Refrigeration", "PRO 48 Series", "Designer Series"]
    },
    {
      title: "Wine Storage Repair in Woodstock",
      description: "Professional SubZero wine storage repair in Woodstock. We service temperature controls, humidity systems, and UV protection features throughout Towne Lake and Eagle Watch areas.",
      image: "/subzeroWineCooler.jpg",
      link: "/subzero/wine-storage",
      appliances: ["Wine Storage Units", "Wine Columns", "Under Counter Wine", "Dual-Zone Systems", "Integrated Wine Storage"]
    },
    {
      title: "Under Counter Repair in Woodstock",
      description: "Comprehensive SubZero under counter repair in Woodstock. Expert service for beverage centers, refrigerator drawers, and ice makers throughout Woodstock's finest neighborhoods.",
      image: "/subzeroUndercounter.jpg",
      link: "/subzero/under-counter",
      appliances: ["Beverage Centers", "Refrigerator Drawers", "Ice Makers", "Under Counter Wine", "Point-of-Use Units"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>SubZero Appliance Repair Woodstock | Expert SubZero Service</title>
        <meta name="description" content="Woodstock's trusted SubZero repair specialists. Factory-certified technicians for SubZero refrigerators, wine storage & under counter units. Same-day service in Towne Lake, Eagle Watch & surrounding areas. Call (404) 200-7265" />
        <meta name="keywords" content="SubZero repair Woodstock, SubZero refrigerator repair Woodstock, SubZero wine storage repair Woodstock, SubZero under counter repair Woodstock" />
        <link rel="canonical" href="https://premiumappliance.co/woodstock/subzero-repair" />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/woodstock.jpeg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Woodstock's SubZero Repair Specialists
                </h1>
                <p className="text-xl text-gray-200">
                  Factory-certified technicians with 15+ years of SubZero repair expertise serving Woodstock and Cherokee County
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Professional SubZero Repair Services in Woodstock</h2>
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
                      alt={`${section.title} in Woodstock`}
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
            <h2 className="text-3xl font-bold text-white mb-4">Expert SubZero Repair in Woodstock</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With 15+ years of specialized experience, our factory-certified technicians provide professional SubZero appliance repair throughout Woodstock and surrounding areas. 
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

export default WoodstockSubZeroPage;