import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amanda Richardson",
      role: "Homeowner",
      quote: "After my SubZero refrigerator stopped cooling properly, Premium Appliance had a technician at my home within hours. They diagnosed and fixed the issue the same day. Exceptional service!",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=128",
      appliance: "SubZero Refrigerator"
    },
    {
      name: "Michael Townsend",
      role: "Executive Chef",
      quote: "As a professional chef, my Wolf range is essential to my work. When it needed repair, Premium Appliance understood the urgency and provided flawless service. I highly recommend them.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=128",
      appliance: "Wolf Gas Range"
    },
    {
      name: "Jennifer Lawson",
      role: "Interior Designer",
      quote: "I regularly recommend Premium Appliance to my clients with high-end kitchens. Their technicians are knowledgeable, professional, and take great care with expensive appliances.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=128",
      appliance: "Viking Dishwasher"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            We take pride in providing exceptional service for luxury appliances.
            Here's what our clients have to say about their experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover mb-4" 
                  />
                  <div className="flex mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <h4 className="text-lg font-bold text-navy-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                  <p className="text-gold-600 text-sm mt-1">{testimonials[currentIndex].appliance}</p>
                </div>
                <div className="md:w-2/3 flex items-center">
                  <blockquote className="italic text-gray-700 text-lg">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow-md text-navy-800 hover:bg-navy-800 hover:text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md text-navy-800 hover:bg-navy-800 hover:text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-gold-500 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;