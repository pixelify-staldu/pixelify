
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
type NavigationProps = {
  siteInfo: any;
}

const Navigation = ({siteInfo}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed py-3 top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - only visible when scrolled */}
          {isScrolled && (
            <div className="flex items-center">
              {siteInfo.logo_url && (
              <div className="my-auto flex justify-center">
                <img 
                  src={siteInfo.logo_url} 
                  alt={siteInfo.company_name || "Logo"} 
                  className="h-12 w-auto"
                  onError={(e) => {
                    console.error('Image failed to load:', siteInfo.logo_url);
                    console.error('Error event:', e);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', siteInfo.logo_url);
                  }}
                />
              </div>
            )}
            </div>
          )}

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-8 ${!isScrolled ? 'ml-auto' : ''}`}>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-pixelify-black hover:text-pixelify-orange transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-pixelify-black hover:text-pixelify-orange transition-colors font-medium"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-pixelify-black hover:text-pixelify-orange transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-pixelify-black hover:text-pixelify-orange transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-pixelify-black hover:text-pixelify-orange transition-colors font-medium"
            >
              Contact
            </button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-6 py-2 rounded-full transition-colors duration-300 transform hover:scale-105"
            >
              Commencer un projet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pixelify-black hover:text-pixelify-orange focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-pixelify-black hover:text-pixelify-orange transition-colors font-medium w-full text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-pixelify-black hover:text-pixelify-orange transition-colors font-medium w-full text-left"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-pixelify-black hover:text-pixelify-orange transition-colors font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-pixelify-black hover:text-pixelify-orange transition-colors font-medium w-full text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-pixelify-black hover:text-pixelify-orange transition-colors font-medium w-full text-left"
              >
                Contact
              </button>
              
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-pixelify-orange hover:bg-pixelify-orange-dark text-white"
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
