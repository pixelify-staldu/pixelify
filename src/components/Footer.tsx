import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Settings, Mail, FileText, Shield } from 'lucide-react';
import { TopRightPixels } from './PixelDecoration';

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="mt-24 mb-8 flex justify-center relative">
                <img 
                  src={siteInfo.logo_url} 
                  alt={siteInfo.company_name || "Logo"}
                  className="h-24 w-auto"
                  onError={(e) => {
                    console.error('Image failed to load:', siteInfo.logo_url);
                    console.error('Error event:', e);
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', siteInfo.logo_url);
                  }}
                />
                <TopRightPixels className="-top-2 -right-8 opacity-40" />
              </div>
              <div className="w-12 h-1 bg-pixelify-orange mt-2"></div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Création de sites web avec hébergement 100% suisse chez Infomaniak.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300"
                >
                  Sites web sécurisés
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300"
                >
                  Hébergement Suisse
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300"
                >
                  E-commerce
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact</h4>
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-4 h-4 text-pixelify-orange flex-shrink-0" />
              <a href="mailto:info@pixelify.ch" className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300">
                info@pixelify.ch
              </a>
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-pixelify-orange text-white py-2 px-4 rounded-lg font-medium hover:bg-pixelify-orange-dark transition-colors duration-300"
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
            <a href="#" className="text-gray-400 hover:text-pixelify-orange transition-colors duration-300 flex items-center">
              <FileText className="w-3 h-3 mr-1" />
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-pixelify-orange transition-colors duration-300 flex items-center">
              <Shield className="w-3 h-3 mr-1" />
              Confidentialité
            </a>
            
            {/* Admin & Auth Links */}
            {isAdmin && (
              <Link 
                to="/admin"
                className="text-gray-400 hover:text-pixelify-orange transition-colors duration-300 flex items-center"
              >
                <Settings className="w-3 h-3 mr-1" />
                <span>Admin</span>
              </Link>
            )}
            
            {!user && (
              <Link 
                to="/auth"
                className="text-gray-400 hover:text-pixelify-orange transition-colors duration-300 flex items-center"
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
