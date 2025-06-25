
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
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
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 112.5 37.5" className="h-10 w-auto">
                <defs>
                  <clipPath id="4443e77936">
                    <path d="M 11.28125 5.625 L 19.851562 5.625 L 19.851562 14.195312 L 11.28125 14.195312 Z M 11.28125 5.625" clipRule="nonzero"/>
                  </clipPath>
                  <clipPath id="337334a5dd">
                    <path d="M 11.28125 22.8125 L 19.851562 22.8125 L 19.851562 31.382812 L 11.28125 31.382812 Z M 11.28125 22.8125" clipRule="nonzero"/>
                  </clipPath>
                  <clipPath id="c59becb84d">
                    <path d="M 2.714844 14.195312 L 11.28125 14.195312 L 11.28125 22.761719 L 2.714844 22.761719 Z M 2.714844 14.195312" clipRule="nonzero"/>
                  </clipPath>
                </defs>
                <g clipPath="url(#4443e77936)">
                  <path fill="#ff6100" d="M 11.28125 5.625 L 19.851562 5.625 L 19.851562 14.195312 L 11.28125 14.195312 Z M 11.28125 5.625" fillOpacity="1" fillRule="nonzero"/>
                </g>
                <g clipPath="url(#337334a5dd)">
                  <path fill="#ff6100" d="M 11.28125 22.8125 L 19.851562 22.8125 L 19.851562 31.382812 L 11.28125 31.382812 Z M 11.28125 22.8125" fillOpacity="1" fillRule="nonzero"/>
                </g>
                <g clipPath="url(#c59becb84d)">
                  <path fill="#ff6100" d="M 2.714844 14.195312 L 11.28125 14.195312 L 11.28125 22.761719 L 2.714844 22.761719 Z M 2.714844 14.195312" fillOpacity="1" fillRule="nonzero"/>
                </g>
                <g fill="#1b1a1e" fillOpacity="1">
                  <g transform="translate(23.784188, 25.90154)">
                    <path d="M 6.46875 -12.890625 C 7.164062 -12.890625 7.796875 -12.71875 8.359375 -12.375 C 8.921875 -12.039062 9.363281 -11.59375 9.6875 -11.03125 C 10.019531 -10.46875 10.1875 -9.84375 10.1875 -9.15625 C 10.1875 -8.46875 10.019531 -7.84375 9.6875 -7.28125 C 9.363281 -6.726562 8.921875 -6.289062 8.359375 -5.96875 C 7.796875 -5.644531 7.164062 -5.484375 6.46875 -5.484375 L 3.53125 -5.484375 L 3.53125 0 L 1.421875 0 L 1.421875 -12.890625 Z M 6.171875 -7.3125 C 6.722656 -7.3125 7.1875 -7.46875 7.5625 -7.78125 C 7.9375 -8.101562 8.125 -8.550781 8.125 -9.125 C 8.125 -9.6875 7.9375 -10.132812 7.5625 -10.46875 C 7.1875 -10.8125 6.722656 -10.984375 6.171875 -10.984375 L 3.53125 -10.984375 L 3.53125 -7.3125 Z M 6.171875 -7.3125"/>
                  </g>
                  <g transform="translate(34.183389, 25.90154)">
                    <path d="M 2.53125 -10.125 C 2.207031 -10.125 1.921875 -10.242188 1.671875 -10.484375 C 1.429688 -10.722656 1.3125 -11.003906 1.3125 -11.328125 C 1.3125 -11.671875 1.429688 -11.957031 1.671875 -12.1875 C 1.921875 -12.425781 2.207031 -12.546875 2.53125 -12.546875 C 2.863281 -12.546875 3.148438 -12.425781 3.390625 -12.1875 C 3.640625 -11.957031 3.765625 -11.671875 3.765625 -11.328125 C 3.765625 -11.003906 3.640625 -10.722656 3.390625 -10.484375 C 3.148438 -10.242188 2.863281 -10.125 2.53125 -10.125 Z M 1.53125 0 L 1.53125 -8.59375 L 3.546875 -8.59375 L 3.546875 0 Z M 1.53125 0"/>
                  </g>
                  <g transform="translate(39.254074, 25.90154)">
                    <path d="M 9.6875 -8.59375 L 6.078125 -4.296875 L 9.6875 0 L 7.234375 0 L 4.875 -2.84375 L 2.5 0 L 0.046875 0 L 3.65625 -4.296875 L 0.046875 -8.59375 L 2.46875 -8.59375 L 4.875 -5.734375 L 7.265625 -8.59375 Z M 9.6875 -8.59375"/>
                  </g>
                  <g transform="translate(48.987211, 25.90154)">
                    <path d="M 9.953125 -4.34375 L 9.921875 -3.96875 L 2.875 -3.96875 C 2.9375 -3.257812 3.195312 -2.675781 3.65625 -2.21875 C 4.125 -1.757812 4.71875 -1.53125 5.4375 -1.53125 C 5.976562 -1.53125 6.453125 -1.664062 6.859375 -1.9375 C 7.273438 -2.207031 7.570312 -2.566406 7.75 -3.015625 L 9.796875 -3.015625 C 9.554688 -2.078125 9.046875 -1.3125 8.265625 -0.71875 C 7.484375 -0.125 6.539062 0.171875 5.4375 0.171875 C 4.550781 0.171875 3.757812 -0.0195312 3.0625 -0.40625 C 2.363281 -0.789062 1.8125 -1.320312 1.40625 -2 C 1.007812 -2.675781 0.8125 -3.441406 0.8125 -4.296875 C 0.8125 -5.160156 1.007812 -5.925781 1.40625 -6.59375 C 1.8125 -7.269531 2.363281 -7.800781 3.0625 -8.1875 C 3.757812 -8.570312 4.546875 -8.765625 5.421875 -8.765625 C 6.285156 -8.765625 7.054688 -8.570312 7.734375 -8.1875 C 8.410156 -7.8125 8.941406 -7.289062 9.328125 -6.625 C 9.722656 -5.957031 9.929688 -5.195312 9.953125 -4.34375 Z M 5.4375 -7.046875 C 4.863281 -7.046875 4.375 -6.898438 3.96875 -6.609375 C 3.5625 -6.316406 3.253906 -5.925781 3.046875 -5.4375 L 7.71875 -5.4375 C 7.53125 -5.9375 7.242188 -6.328125 6.859375 -6.609375 C 6.472656 -6.898438 6 -7.046875 5.4375 -7.046875 Z M 5.4375 -7.046875"/>
                  </g>
                  <g transform="translate(59.687216, 25.90154)">
                    <path d="M 1.421875 0 L 1.421875 -15.296875 L 3.453125 -15.296875 L 3.453125 0 Z M 1.421875 0"/>
                  </g>
                  <g transform="translate(64.564531, 25.90154)">
                    <path d="M 2.53125 -10.125 C 2.207031 -10.125 1.921875 -10.242188 1.671875 -10.484375 C 1.429688 -10.722656 1.3125 -11.003906 1.3125 -11.328125 C 1.3125 -11.671875 1.429688 -11.957031 1.671875 -12.1875 C 1.921875 -12.425781 2.207031 -12.546875 2.53125 -12.546875 C 2.863281 -12.546875 3.148438 -12.425781 3.390625 -12.1875 C 3.640625 -11.957031 3.765625 -11.671875 3.765625 -11.328125 C 3.765625 -11.003906 3.640625 -10.722656 3.390625 -10.484375 C 3.148438 -10.242188 2.863281 -10.125 2.53125 -10.125 Z M 1.53125 0 L 1.53125 -8.59375 L 3.546875 -8.59375 L 3.546875 0 Z M 1.53125 0"/>
                  </g>
                  <g transform="translate(69.635216, 25.90154)">
                    <path d="M 6.078125 -8.59375 L 6.078125 -6.875 L 3.90625 -6.875 L 3.90625 0 L 1.875 0 L 1.875 -6.875 L 0.4375 -6.875 L 0.4375 -8.59375 L 1.875 -8.59375 L 1.875 -12.484375 C 1.875 -13.015625 2.003906 -13.488281 2.265625 -13.90625 C 2.535156 -14.332031 2.890625 -14.671875 3.328125 -14.921875 C 3.773438 -15.171875 4.265625 -15.296875 4.796875 -15.296875 C 5.035156 -15.296875 5.273438 -15.269531 5.515625 -15.21875 C 5.765625 -15.164062 5.9375 -15.109375 6.03125 -15.046875 L 6.03125 -13.453125 L 5.03125 -13.453125 C 4.71875 -13.453125 4.453125 -13.335938 4.234375 -13.109375 C 4.015625 -12.890625 3.90625 -12.59375 3.90625 -12.21875 L 3.90625 -8.59375 Z M 6.078125 -8.59375"/>
                  </g>
                  <g transform="translate(75.801684, 25.90154)">
                    <path d="M 7.03125 -8.59375 L 9.21875 -8.59375 L 3.703125 5.15625 L 1.546875 5.15625 L 3.59375 0.15625 L 0.046875 -8.59375 L 2.21875 -8.59375 L 4.65625 -2.234375 Z M 7.03125 -8.59375"/>
                  </g>
                </g>
              </svg>
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
