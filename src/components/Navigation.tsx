
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavigationProps {
  siteInfo?: any;
}

const Navigation = ({ siteInfo }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and then scroll
      window.location.href = '/#contact';
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Accueil', href: '/', isRoute: true },
    { name: 'À propos', href: '/about', isRoute: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {siteInfo?.logo_url ? (
              <img 
                src={siteInfo.logo_url} 
                alt={siteInfo.company_name || 'Pixelify'} 
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-2xl font-bold text-pixelify-orange title">
                {siteInfo?.company_name || 'Pixelify'}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-pixelify-charcoal hover:text-pixelify-orange transition-colors duration-200 font-medium ${
                  location.pathname === item.href ? 'text-pixelify-orange' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={scrollToContact}
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Commencer un projet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-pixelify-charcoal hover:text-pixelify-orange transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-pixelify-charcoal hover:text-pixelify-orange transition-colors duration-200 font-medium ${
                    location.pathname === item.href ? 'text-pixelify-orange' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
                >
                  Commencer un projet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
