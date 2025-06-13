
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Settings, Mail, Phone, MapPin, Globe, Shield, FileText, Users, Award, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
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
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/15 rounded-full"></div>
        <div className="absolute top-20 right-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-bold text-pixelify-orange">
                Pixelify
              </span>
              <div className="w-12 h-1 bg-pixelify-orange bg-clip-text mt-2"></div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Agence web créative spécialisée dans la création d'expériences digitales exceptionnelles. 
              Nous transformons vos idées en réalité avec passion et expertise.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-pixelify-charcoal/20 rounded-lg">
                <div className="text-pixelify-orange font-bold text-lg">150+</div>
                <div className="text-xs text-gray-400">Projets</div>
              </div>
              <div className="text-center p-3 bg-pixelify-gray/20 rounded-lg">
                <div className="text-pixelify-gray font-bold text-lg">5+</div>
                <div className="text-xs text-gray-400">Années</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-pixelify-orange rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pixelify-orange rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pixelify-orange rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pixelify-orange rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center">
              <Globe className="w-5 h-5 mr-2 text-pixelify-orange" />
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Design Web & UX/UI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Développement Frontend
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Développement Backend
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  E-commerce & Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  SEO & Performance
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-pixelify-orange transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Applications Mobiles
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-pixelify-gray" />
              Entreprise
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-pixelify-gray transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  À propos de nous
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-pixelify-gray transition-colors duration-300 flex items-center group"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Nos réalisations
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pixelify-gray transition-colors duration-300 flex items-center group">
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pixelify-gray transition-colors duration-300 flex items-center group">
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog & Actualités
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pixelify-gray transition-colors duration-300 flex items-center group">
                  <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-pixelify-gray transition-colors duration-300 flex items-center group">
                  <Award className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center">
              <Phone className="w-5 h-5 mr-2 text-pixelify-charcoal" />
              Contact & Support
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 text-pixelify-orange mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Siège Social</p>
                  <p className="text-gray-400 text-xs">123 Rue de l'Innovation</p>
                  <p className="text-gray-400 text-xs">75001 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-pixelify-gray flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <a href="mailto:hello@pixelify.fr" className="text-gray-300 text-sm hover:text-pixelify-gray transition-colors duration-300 font-medium">
                    hello@pixelify.fr
                  </a>
                  <p className="text-gray-500 text-xs">Contact général</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-pixelify-charcoal flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <a href="tel:+33123456789" className="text-gray-300 text-sm hover:text-pixelify-charcoal transition-colors duration-300 font-medium">
                    +33 1 23 45 67 89
                  </a>
                  <p className="text-gray-500 text-xs">Lun-Ven 9h-18h</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <Clock className="w-4 h-4 text-pixelify-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Support 24/7</p>
                  <p className="text-gray-500 text-xs">Assistance technique</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-6 w-full bg-pixelify-orange text-white py-2 px-4 rounded-lg font-medium hover:bg-pixelify-orange-dark transition-colors duration-300 transform hover:scale-105"
            >
              Nous contacter
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <p className="text-gray-400 text-sm flex items-center justify-center lg:justify-start">
              © {currentYear} Pixelify - Agence Web Créative. 
              <span className="ml-1 flex items-center">
                Fait avec <span className="text-red-500 mx-1">❤️</span> en France
              </span>
            </p>
            <p className="text-gray-500 text-xs mt-1">
              SIRET: 123 456 789 00012 - APE: 6201Z
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
            <a href="#" className="text-gray-400 hover:text-pixelify-orange transition-colors duration-300 flex items-center">
              <FileText className="w-3 h-3 mr-1" />
              CGU & CGV
            </a>
            <a href="#" className="text-gray-400 hover:text-pixelify-orange transition-colors duration-300 flex items-center">
              Cookies
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

        {/* Technical Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Site développé avec React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
