import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const VikingRange = () => {
  const rangeTypes = [
    {
      title: "Viking Dual Fuel Range Repair",
      description: "Expert repair services for Viking dual fuel ranges, including:",
      features: [
        "Electric oven control system repair",
        "Gas cooktop burner maintenance",
        "Digital display and control panel service",
        "Dual fuel system diagnostics",
        "Temperature probe calibration"
      ],
      image: "/viking3.jpg",
      link: "/viking/dual-fuel-range"
    },
    {
      title: "Viking Gas Range Repair",
      description: "Professional repair services for Viking gas ranges, including:",
      features: [
        "Professional-grade burner system repairs",
        "Gas valve and ignition system service",
        "Thermostat and temperature calibration",
        "Safety system diagnostics and repair",
        "Convection system maintenance"
      ],
      image: "/viking1.jpeg",
      link: "/viking/gas-range"
    },
    {
      title: "Viking Professional Range Repair",
      description: "Comprehensive repair services for Viking professional ranges, including:",
      features: [
        "Commercial-grade component repair",
        "High-output burner service",
        "Professional control system repair",
        "Heavy-duty door mechanism service",
        "Custom configuration maintenance"
      ],
      image: "/viking2.png",
      link: "/viking/professional-range"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Viking Range Repair</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rangeTypes.map((range, index) => (
          <Link 
            key={index}
            to={range.link}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={range.image} 
                alt={range.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{range.title}</h2>
              <p className="text-gray-600 mb-4">{range.description}</p>
              <ul className="space-y-2">
                {range.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-gold-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VikingRange;