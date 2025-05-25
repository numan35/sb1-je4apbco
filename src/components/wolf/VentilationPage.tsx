import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const VentilationPage = () => {
  const features = [
    {
      title: "Hood System Repair",
      description: "Expert repair of Wolf ventilation hood systems",
      items: [
        "Motor and blower repair",
        "Control panel service",
        "Filter system maintenance",
        "LED lighting repair",
        "Duct connection service"
      ]
    },
    {
      title: "Downdraft System Service",
      description: "Comprehensive repair for Wolf downdraft systems",
      items: [
        "Lift mechanism repair",
        "Ventilation motor service",
        "Control system diagnostics",
        "Air flow optimization",
        "Filter replacement"
      ]
    },
    {
      title: "Insert Hood Repair",
      description: "Complete service for Wolf hood inserts",
      items: [
        "Blower system repair",
        "Control integration service",
        "Lighting system maintenance",
        "Filter system service",
        "Custom installation repair"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wolf Ventilation Repair Atlanta | Expert Service</title>
        <meta name="description" content="Expert Wolf ventilation repair in Atlanta. Factory-certified service for hood systems, downdraft & insert hoods. Same-day service available. Call (404) 200-7265" />
        <meta name="keywords" content="Wolf ventilation repair Atlanta, Wolf hood service, Wolf downdraft repair, Wolf insert hood maintenance" />
        <link rel="canonical" href="https://premiumappliance.co/wolf/ventilation" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Wolf Ventilation Repair",
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
              "serviceType": "Appliance Repair",
              "description": "Expert repair services for Wolf ventilation systems including hood systems, downdraft, and insert hoods"
            }
          `}
        </script>
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="relative h-[400px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("/wolfHood.jpg")',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Wolf Ventilation Repair Services
                </h1>
                <p className="text-xl text-gray-200">
                  Expert repair for all Wolf ventilation systems by factory-certified technicians
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
                  Professional Wolf Ventilation Services
                </h2>
                <p className="text-gray-600 text-lg">
                  Our factory-certified technicians specialize in all aspects of Wolf ventilation repair,
                  ensuring optimal performance and air quality in your kitchen.
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
                <p className="text-gray-600">Our technicians are factory-trained for all Wolf ventilation systems</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Wolf Ventilation Repair</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our expert technicians are ready to help with any Wolf ventilation repair needs.
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

export default VentilationPage;