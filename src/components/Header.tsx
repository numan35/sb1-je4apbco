import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBrandPage = ['/subzero', '/wolf', '/viking'].includes(location.pathname) || 
                     location.pathname.includes('/service-area/') && 
                     (location.pathname.includes('/wolf') || 
                      location.pathname.includes('/subzero') || 
                      location.pathname.includes('/viking'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 shadow-md py-2' : 'bg-navy-900/90 py-3'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" onClick={handleLinkClick}>
              <img 
                src="/logoTransparent.png" 
                alt="Premium Appliance Repair" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-24' : 'h-28'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-sm font-medium text-white hover:text-metallic-300 transition"
            >
              Home
            </Link>
            <Link 
              to="/subzero"
              className="text-sm font-medium text-white hover:text-metallic-300 transition"
            >
              SubZero Repair
            </Link>
            <Link 
              to="/wolf"
              className="text-sm font-medium text-white hover:text-metallic-300 transition"
            >
              Wolf Repair
            </Link>
            <Link 
              to="/viking"
              className="text-sm font-medium text-white hover:text-metallic-300 transition"
            >
              Viking Repair
            </Link>
            <Link 
              to="/service-area" 
              className="text-sm font-medium text-white hover:text-metallic-300 transition"
            >
              Service Area
            </Link>
            <Link 
              to="/blog" 
              className="text-sm font-medium text-white hover:text-metallic-300 transition"
            >
              Blog
            </Link>
            <Link to="/blog" onClick={handleLinkClick} className="block py-2 text-white font-medium">
              Blog
            </Link>
            {isHomePage && (
              <a 
                href="#services" 
                className="text-sm font-medium text-white hover:text-metallic-300 transition"
              >
                Services
              </a>
            )}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/book" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg flex items-center"
            >
              <Calendar size={16} className="mr-2" />
              <span className="font-medium">Schedule Now</span>
            </Link>
            <a 
              href="tel:+14704521545" 
              className="bg-metallic-600 hover:bg-metallic-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg flex items-center"
            >
              <Phone size={16} className="mr-2" />
              <span className="font-medium">(470) 452-1545</span>
            </a>
          </div>

          {/* Mobile menu button and Schedule Now button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/book"
              onClick={handleLinkClick}
              className={`${!isBrandPage ? 'fixed bottom-4 right-4 z-50 shadow-lg' : ''} bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg flex items-center`}
            >
              <Calendar size={16} className="mr-2" />
              <span className="font-medium">Schedule</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 bg-metallic-600 text-white hover:bg-metallic-700 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100 visible bg-navy-900 shadow-lg'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-2">
          <Link to="/" onClick={handleLinkClick} className="block py-2 text-white font-medium">
            Home
          </Link>
          <Link to="/subzero" onClick={handleLinkClick} className="block py-2 text-white font-medium">
            SubZero Repair
          </Link>
          <Link to="/wolf" onClick={handleLinkClick} className="block py-2 text-white font-medium">
            Wolf Repair
          </Link>
          <Link to="/viking" onClick={handleLinkClick} className="block py-2 text-white font-medium">
            Viking Repair
          </Link>
          <Link to="/service-area" onClick={handleLinkClick} className="block py-2 text-white font-medium">
            Service Area
          </Link>
          {isHomePage && (
            <a href="#services" onClick={handleLinkClick} className="block py-2 text-white font-medium">
              Services
            </a>
          )}
          <a
            href="tel:+14042007265"
            onClick={handleLinkClick}
            className="flex items-center justify-center bg-metallic-600 text-white px-4 py-2 rounded-md mt-2"
          >
            <Phone size={16} className="mr-2" />
            <span className="font-medium">(470) 452-1545</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;