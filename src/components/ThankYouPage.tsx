import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fire conversion tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {'send_to': 'AW-16536309035/OlBuCKOx094ZEKuakM09'});
    }

    // Redirect to home after 5 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-navy-900 mb-4">
              Thank You for Your Submission!
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              We've received your request and will contact you shortly to confirm your appointment.
            </p>
            <p className="text-gray-500">
              You'll be redirected to the homepage in a few seconds...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;