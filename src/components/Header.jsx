import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  MapPin,
  Car,
  Wrench
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>020 314 4536</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp: 024 956 7725</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span>Location: Highgate</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-orange-100 text-xs">Quality Service • Professional Care</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
            : 'bg-white'
        }`}
        style={{ marginTop: isScrolled ? '0' : '40px' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
<div className="relative w-14 h-14">
  <img 
    src="/images/autoshop-logo.jpeg" 
    alt="Regas Autoshop Logo" 
    className="w-full h-full object-contain"
  />
</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 font-['Outfit']">Regas Autoshop</h1>
                <p className="text-xs text-red-600 font-medium font-['Outfit']">Service and Maintenace Masters</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 relative group font-['Outfit']"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all duration-200 font-medium font-['Outfit'] flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-gray-200`}>
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 py-2 font-['Outfit']"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-orange-600 transition-all duration-200 font-medium mt-4 font-['Outfit'] flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}