import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const WineStoragePage = () => {
  const features = [
    {
      title: "Temperature Control System",
      description: "Expert repair of SubZero's precise temperature control systems",
      items: [
        "Multi-zone temperature calibration",
        "Temperature sensor repair",
        "Control board diagnostics",
        "Thermostat replacement",
        "Digital display repair"
      ]
    },
    {
      title: "Humidity Management",
      description: "Comprehensive service for humidity control systems",
      items: [
        "Humidity sensor calibration",
        "Moisture control system repair",
        "Condensation management",
        "Evaporator maintenance",
        "Air circulation optimization"
      ]
    },
    {
      title: "UV Protection Systems",
      description: "Service for UV-resistant glass and protection systems",
      items: [
        "UV-resistant glass maintenance",
        "Door seal replacement",
        "Light system repair",
        "Display lighting service",
        "Energy efficiency optimization"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>SubZero Wine Storage Repair Atlanta | Expert Service</title>
        <meta name="description" content="Expert SubZero wine storage repair in Atlanta. Factory-certified service for temperature control, humidity systems & UV protection. Call (404) 200-7265" />
        <meta name="keywords" content="SubZero wine storage repair Atlanta, SubZero wine cooler service, SubZero wine refrigerator maintenance, wine cellar repair" />
        <meta property="og:title" content="SubZero Wine Storage Repair Atlanta | Expert Service" />
        <meta property="og:description" content="Expert SubZero wine storage repair in Atlanta. Factory-certified technicians, same-day service available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://premiumappliance.co/subzero/wine-storage" />
        <meta property="og:image" content="/subzeroWineCooler.jpg" />
        <link rel="canonical" href="https://premiumappliance.co/subzero/wine-storage" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "SubZero Wine Storage Repair",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Premium Appliance Repair",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Atlanta",
                  "addressRegion": "GA",
                  "addressCountry": "US"
                },
                "telephone": "+14042007265"
              },
              "areaServed": {
                "@type": "City",
                "name": "Atlanta"
              },
              "serviceType": "Appliance Repair",
              "description": "Expert repair services for SubZero wine storage systems including temperature control, humidity management, and UV protection systems"
            }
          `}
        </script>
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/subzeroWineCooler.jpg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  SubZero Wine Storage Repair
                </h1>
                <p className="text-xl text-gray-200">
                  Expert repair for all SubZero wine storage systems by factory-certified technicians
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-4">
                  Professional SubZero Wine Storage Services
                </h2>
                <p className="text-gray-600 text-lg">
                  Our factory-certified technicians specialize in all aspects of SubZero wine storage repair,
                  ensuring your collection is preserved at optimal conditions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-gold-500 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gold-500">
                <Shield className="text-gold-500 mb-4" size={36} />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Factory Certified</h3>
                <p className="text-gray-600">Our technicians are factory-trained for all SubZero wine storage systems</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gold-500">
                <Clock className="text-gold-500 mb-4" size={36} />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Emergency repair service available throughout Metro Atlanta</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-gold-500">
                <CheckCircle className="text-gold-500 mb-4" size={36} />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Guaranteed Work</h3>
                <p className="text-gray-600">All repairs backed by our comprehensive warranty</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-navy-900 rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Schedule Your SubZero Wine Storage Repair
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our expert technicians are ready to help protect your wine collection.
                We offer same-day service and guarantee our work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/book" 
                  className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-3 px-8 rounded-md transition-all duration-300"
                >
                  Schedule Service
                  <ArrowRight size={18} className="ml-2 inline-block" />
                </Link>
                <a 
                  href="tel:+14042007265" 
                  className="bg-transparent border-2 border-gold-500 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-gold-500/10"
                >
                  Call (470) 452-1545
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default WineStoragePage;