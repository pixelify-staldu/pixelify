
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Settings, Mail, FileText, Shield } from 'lucide-react';

type FooterProps = {
  siteInfo: any;
}

const Footer = ({ siteInfo }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const { isAdmin, user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-pixelify-charcoal text-white relative overflow-hidden">
      {/* Enhanced Background Pattern with animations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info with enhanced logo animation */}
          <div className="transform transition-all duration-500 hover:scale-105">
              <div className="mb-8 flex justify-center relative">
                <img 
                  src={siteInfo.logo_url} 
                  alt={siteInfo.company_name || "Logo"}
                  className="h-24 w-auto transform transition-all duration-500 hover:scale-110 hover:rotate-3"
                  onError={(e) => {
                    console.error('Image failed to load:', siteInfo.logo_url);
                    console.error('Error event:', e);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', siteInfo.logo_url);
                  }}
                />
              <div className="w-12 h-1 bg-pixelify-orange mt-2 transform transition-all duration-300 hover:w-16"></div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Création de sites web avec hébergement 100% suisse.
            </p>
          </div>

          {/* Services with hover animations */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-all duration-300 transform hover:translate-x-2"
                >
                  Sites web sécurisés
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-all duration-300 transform hover:translate-x-2"
                >
                  Hébergement Suisse
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-all duration-300 transform hover:translate-x-2"
                >
                  E-commerce
                </button>
              </li>
            </ul>
          </div>

          {/* Contact with enhanced animations */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
            <div className="flex items-center space-x-3 mb-4 transform transition-all duration-300 hover:scale-105">
              <Mail className="w-4 h-4 text-pixelify-orange flex-shrink-0 animate-pulse" />
              <a href="mailto:info@pixelify.ch" className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300">
                info@pixelify.ch
              </a>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-pixelify-orange text-white py-2 px-4 rounded-lg font-medium hover:bg-pixelify-orange-dark transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl"
            >
              Nous contacter
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pixelify - Sites web sécurisés en Suisse
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-pixelify-orange transition-all duration-300 flex items-center transform hover:scale-105">
              <FileText className="w-3 h-3 mr-1" />
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-pixelify-orange transition-all duration-300 flex items-center transform hover:scale-105">
              <Shield className="w-3 h-3 mr-1" />
              Confidentialité
            </a>
            
            {/* Admin & Auth Links */}
            {isAdmin && (
              <Link 
                to="/admin"
                className="text-gray-400 hover:text-pixelify-orange transition-all duration-300 flex items-center transform hover:scale-105"
              >
                <Settings className="w-3 h-3 mr-1" />
                <span>Admin</span>
              </Link>
            )}
            
            {!user && (
              <Link 
                to="/auth"
                className="text-gray-400 hover:text-pixelify-orange transition-all duration-300 flex items-center transform hover:scale-105"
              >
                <Settings className="w-3 h-3 mr-1" />
                <span>Connexion</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
