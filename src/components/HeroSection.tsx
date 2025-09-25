
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
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pixelify-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pixelify-gray/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pixelify-charcoal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <div className="mb-6 flex justify-center lg:justify-start relative">
                <img 
                  src="/images/logo-big-transparent.svg"
                  alt={siteInfo.company_name || "Logo"}
                  className="h-12 md:h-20 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight relative">
              <span className="text-pixelify-charcoal title">
                Vos projets{' '}
              </span>
              <span className="text-pixelify-orange  title">
                 pixelisés{' '}
              </span>
              <span className="text-pixelify-charcoal  title">
                vers le succès
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-pixelify-charcoal mb-10 leading-relaxed max-w-3xl mx-auto">
              Nous concevons des sites web à votre image et vous suivons dans la digitalisation de votre activité.
            </p>

            {/* Swiss Trust Badge */}
            {/*<div className="flex justify-center items-center gap-6 mb-8">*/}
            {/*  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pixelify-orange/20 relative">*/}
            {/*    <div className="w-6 h-4 bg-red-600 relative">*/}
            {/*      <div className="absolute inset-0 flex items-center justify-center">*/}
            {/*        <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">*/}
            {/*          <div className="w-1 h-1 bg-red-600 rounded-full"></div>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <span className="text-sm font-medium text-pixelify-charcoal">100% Hébergé en Suisse</span>*/}
            {/*  </div>*/}
            {/*  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pixelify-orange/20 relative">*/}
            {/*    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">*/}
            {/*      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />*/}
            {/*    </svg>*/}
            {/*    <span className="text-sm font-medium text-pixelify-charcoal">Données Sécurisées</span>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative"
              >
                Votre projet
              </Button>
            </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="/images/hero-illustration.jpg"
                alt="Illustration pixelisée d'un projet web en développement"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pixelify-charcoal rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pixelify-charcoal rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
