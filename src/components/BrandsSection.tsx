import React from 'react';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
  const brands = [
    {
      logo: "/subzeroLogo.png",
      description: "Luxury refrigeration and freezer solutions known for their innovative food preservation technology and iconic built-in units.",
      image: "/subzero1.jpg",
      link: "/subzero"
    },
    {
      logo: "/wolfLogo.png",
      description: "Premium cooking appliances with professional-grade performance, precision temperature control, and distinctive design.",
      image: "/wolf1.jpg",
      link: "/wolf"
    },
    {
      logo: "/vikingLogo.png",
      description: "Commercial-grade kitchen appliances bringing professional performance and elegant style to home kitchens.",
      image: "/viking3.jpg",
      link: "/viking"
    }
  ];

  return (
    <section id="brands" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Brands We Service</h2>
          <p className="text-gray-600 text-lg">
            We specialize in high-end appliance repair for the most prestigious brands in the industry.
            Our technicians are extensively trained and certified in premium appliance repair and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Link 
              key={index} 
              to={brand.link}
              className="block bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={brand.image} 
                  alt="Luxury Appliance Brand" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt="Brand Logo" 
                    className="h-full object-contain"
                  />
                </div>
                <p className="text-gray-600">{brand.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            We also service other premium appliance brands including Miele, Thermador, Gaggenau, and more.
          </p>
          <Link 
            to="/book" 
            className="inline-block bg-navy-800 hover:bg-navy-900 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg"
          >
            Schedule Your Repair
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;