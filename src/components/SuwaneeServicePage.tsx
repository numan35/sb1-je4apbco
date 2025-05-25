import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Calendar, CheckCircle, Shield, Clock, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const SuwaneeServicePage = () => {
  const services = [
    {
      brand: "SubZero",
      image: "/subzero1.jpg",
      description: "Expert SubZero repair service for Suwanee's luxury homes. From Laurel Springs to Johns Creek, we service all SubZero refrigeration systems with precision.",
      categories: [
        "Built-in SubZero Refrigerator Repair in Suwanee",
        "SubZero Wine Storage Systems Service in Suwanee",
        "SubZero Column Refrigeration Repair in Suwanee",
        "SubZero Under Counter Unit Service in Suwanee",
        "SubZero Ice Maker Repair in Suwanee"
      ],
      link: "/suwanee/subzero-repair"
    },
    {
      brand: "Wolf",
      image: "/wolf1.jpg",
      description: "Premium Wolf appliance repair for Suwanee's discerning home chefs. Whether you're in McGinnis Ferry or Settles Bridge, our experts keep your Wolf appliances performing flawlessly. Click to learn more about our specialized Wolf repair services in Suwanee.",
      categories: [
        "Wolf Range Repair in Suwanee",
        "Wolf Built-in Oven Service in Suwanee",
        "Wolf Cooktop Repair & Maintenance in Suwanee",
        "Wolf Steam Oven Specialists in Suwanee",
        "Wolf Ventilation System Repair in Suwanee"
      ],
      link: "/suwanee/wolf-repair"
    },
    {
      brand: "Viking",
      image: "/viking1.jpeg",
      description: "Expert Viking appliance repair throughout Suwanee's finest neighborhoods. From Shadowbrook to Olde Atlanta Club, we ensure your Viking appliances maintain their professional-grade performance.",
      categories: [
        "Viking Professional Range Repair in Suwanee",
        "Viking Built-in Refrigerator Service in Suwanee",
        "Viking Wall Oven Repair in Suwanee",
        "Viking Cooktop Maintenance in Suwanee",
        "Viking Hood & Ventilation Repair in Suwanee"
      ],
      link: "/suwanee/viking-repair"
    }
  ];

  const features = [
    {
      icon: <Shield className="text-gold-500 mb-4" size={36} />,
      title: "Factory Certified",
      description: "Our Gwinnett County technicians are factory-certified for all luxury brands"
    },
    {
      icon: <Clock className="text-gold-500 mb-4" size={36} />,
      title: "Same-Day Service",
      description: "Emergency repairs available throughout Suwanee"
    },
    {
      icon: <CheckCircle className="text-gold-500 mb-4" size={36} />,
      title: "Satisfaction Guaranteed",
      description: "All repairs backed by our comprehensive warranty"
    }
  ];

  const neighborhoods = [
    "Laurel Springs", "McGinnis Ferry", "Settles Bridge",
    "Shadowbrook", "Olde Atlanta Club", "Moore Road",
    "Suwanee Station", "Suwanee Town Center", "Martin Farm",
    "Peachtree Industrial", "Johns Creek", "Level Creek"
  ];

  return (
    <>
      <Helmet>
        <title>Luxury Appliance Repair Suwanee | SubZero, Wolf & Viking Specialists</title>
        <meta name="description" content="Expert luxury appliance repair in Suwanee, GA. Factory-certified technicians for SubZero, Wolf & Viking appliances. Same-day service available. Call (404) 200-7265" />
        <meta name="keywords" content="SubZero repair Suwanee, Wolf appliance repair Suwanee, Viking repair Suwanee, luxury appliance service Gwinnett County" />
        <link rel="canonical" href="https://premiumappliance.co/suwanee" />
      </Helmet>

      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/suwanee.jpeg")',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20 md:py-0">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Sub-Zero, Wolf, and Viking Appliance Repair in Suwanee
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 md:pr-12">
              Expert repair services for SubZero, Wolf, Viking, and other premium appliances. 
              Same-day service available throughout Suwanee and Gwinnett County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/book" 
                className="bg-metallic-600 hover:bg-metallic-700 text-white font-medium py-4 sm:py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center hover:shadow-lg text-lg sm:text-base"
              >
                Schedule Service
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a 
                href="tel:+14042007265" 
                className="bg-transparent border-2 border-metallic-300 text-white font-medium py-4 sm:py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center hover:bg-metallic-600/20 text-lg sm:text-base"
              >
                Call Now: (470) 452-1545
              </a>
            </div>
            <div className="pt-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.pexels.com/photos/4172877/pexels-photo-4172877.jpeg?auto=compress&cs=tinysrgb&w=128" 
                    className="w-10 h-10 rounded-full border-2 border-metallic-300" 
                    alt="Customer" 
                  />
                  <img 
                    src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=128" 
                    className="w-10 h-10 rounded-full border-2 border-metallic-300" 
                    alt="Customer" 
                  />
                  <img 
                    src="https://images.pexels.com/photos/4173208/pexels-photo-4173208.jpeg?auto=compress&cs=tinysrgb&w=128" 
                    className="w-10 h-10 rounded-full border-2 border-metallic-300" 
                    alt="Customer" 
                  />
                </div>
                <div className="ml-4">
                  <p className="text-white text-sm">
                    <span className="text-metallic-300 font-bold">4.9/5</span> from over 100+ Suwanee customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Suwanee's Luxury Appliance Experts</h2>
              <p className="text-gray-600 text-lg">
                Serving Suwanee's finest homes from Laurel Springs to Town Center, we're the trusted choice for luxury appliance repair. Our factory-certified technicians bring specialized expertise to every service call, ensuring your high-end appliances receive the exceptional care they deserve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <Link to={service.link || "#"} className="block">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={`${service.brand} Repair`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{service.brand} Repair</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.categories.map((category, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle size={16} className="text-gold-500 mr-2" />
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border-t-4 border-metallic-500"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-navy-900 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Suwanee Service Coverage
                </h2>
                <p className="text-gray-300 mb-8 text-center">
                  We provide comprehensive appliance repair services throughout Suwanee's finest neighborhoods
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {neighborhoods.map((area, index) => (
                    <div key={index} className="bg-navy-800 rounded-lg p-3 text-white text-center">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Schedule Your Suwanee Repair Service
              </h2>
              <p className="text-gray-600 mb-8">
                Our expert technicians are ready to help with any luxury appliance repair needs. 
                We offer same-day service and guarantee our work.
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
                  className="bg-transparent border-2 border-gold-500 text-navy-900 font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-gold-500/10"
                >
                  Call (470) 452-1545
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default SuwaneeServicePage;