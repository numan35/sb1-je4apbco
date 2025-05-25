import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const VikingCooktop = () => {
  const cooktopTypes = [
    {
      title: "Viking Gas Cooktops",
      description: "Professional repair services for Viking gas cooktops with precision burner systems and advanced controls.",
      features: [
        "Sealed burner repair",
        "Gas valve service",
        "Ignition system repair",
        "Control knob calibration",
        "Safety system maintenance"
      ],
      image: "/vikingCooktop.jpg"
    },
    {
      title: "Viking Electric Cooktops",
      description: "Expert repair for Viking electric cooktops featuring precise temperature control and rapid heating elements.",
      features: [
        "Heating element repair",
        "Temperature control service",
        "Electronic system diagnostics",
        "Surface element maintenance",
        "Control panel repair"
      ],
      image: "/viking2.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Viking Cooktops</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cooktopTypes.map((cooktop, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={cooktop.image} 
                alt={cooktop.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{cooktop.title}</h2>
              <p className="text-gray-600 mb-4">{cooktop.description}</p>
              <ul className="space-y-2">
                {cooktop.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-gold-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VikingCooktop;