import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const VikingOven = () => {
  const ovenTypes = [
    {
      title: "Viking Wall Ovens",
      description: "Expert repair for Viking built-in wall ovens featuring advanced convection technology and precise temperature control.",
      features: [
        "Heating element repair",
        "Temperature control calibration",
        "Convection system service",
        "Door seal replacement",
        "Control panel repair"
      ],
      image: "/vikingOven.jpg"
    },
    {
      title: "Viking Double Ovens",
      description: "Professional repair services for Viking double oven units, ensuring perfect performance in both cavities.",
      features: [
        "Dual temperature control repair",
        "Convection system maintenance",
        "Digital control service",
        "Door mechanism repair",
        "Self-cleaning system service"
      ],
      image: "/viking3.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Viking Ovens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ovenTypes.map((oven, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={oven.image} 
                alt={oven.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{oven.title}</h2>
              <p className="text-gray-600 mb-4">{oven.description}</p>
              <ul className="space-y-2">
                {oven.features.map((feature, idx) => (
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

export default VikingOven;