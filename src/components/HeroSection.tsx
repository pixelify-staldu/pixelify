
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';

type HeroSectionProps = {
  siteInfo: any;
}

const HeroSection = ({ siteInfo }: HeroSectionProps) => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Background Elements with enhanced animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pixelify-orange/10 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pixelify-gray/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pixelify-charcoal/10 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Logo Integration with hover animation */}
            {siteInfo.logo_url && (
              <div className="mt-24 mb-8 flex justify-center relative">
                <img 
                  src={siteInfo.logo_url} 
                  alt={siteInfo.company_name || "Logo"}
                  className="h-24 w-auto transform transition-transform duration-500 hover:scale-110"
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
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight relative transform transition-all duration-700 hover:scale-105">
              <span className="text-pixelify-orange animate-pulse">
                Votre site web
              </span>
              <br />
              <span className="text-pixelify-charcoal">
                100% hébergé en Suisse
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-pixelify-charcoal mb-8 leading-relaxed transform transition-all duration-500 hover:text-pixelify-orange/80">
              Création de sites internet professionnels avec hébergement exclusivement en territoire suisse. 
              Vos données restent en Suisse, protégées par les lois helvétiques les plus strictes au monde.
            </p>

            {/* Swiss Trust Badge with enhanced animations */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pixelify-orange/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-6 h-4 bg-red-600 relative animate-pulse">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <span className="text-sm font-medium text-pixelify-charcoal">100% Hébergé en Suisse</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pixelify-orange/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <svg className="w-4 h-4 text-green-600 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-pixelify-charcoal">Données Sécurisées</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl"
              >
                Créer mon site suisse
              </Button>
              <Button 
                onClick={scrollToPortfolio}
                variant="outline"
                size="lg"
                className="border-2 border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              >
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pixelify-charcoal rounded-full flex justify-center transition-all duration-300 hover:border-pixelify-orange">
          <div className="w-1 h-3 bg-pixelify-charcoal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
