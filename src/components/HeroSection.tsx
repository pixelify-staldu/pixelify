
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';

const HeroSection = () => {
  const [siteInfo, setSiteInfo] = useState<any>({});

  useEffect(() => {
    fetchSiteInfo();
  }, []);

  const fetchSiteInfo = async () => {
    const { data } = await supabase
      .from('site_info')
      .select('*')
      .single();
    
    if (data) {
      console.log('Site info data:', data);
      console.log('Logo URL:', data.logo_url);
      setSiteInfo(data);
    }
  };

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
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pixelify-orange/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pixelify-orange/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            {/* Logo Integration */}
            {siteInfo.logo_url && (
              <div className="mb-8 flex justify-center">
                <img 
                  src={siteInfo.logo_url} 
                  alt={siteInfo.company_name || "Logo"} 
                  className="h-20 w-auto"
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
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-pixelify-orange">
                Créons votre
              </span>
              <br />
              <span className="text-pixelify-black">
                présence digitale
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-pixelify-gray mb-8 leading-relaxed">
              {siteInfo.description || "Agence web créative spécialisée dans le design moderne et le développement sur mesure. Nous transformons vos idées en expériences digitales exceptionnelles."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Démarrer votre projet
              </Button>
              <Button 
                onClick={scrollToPortfolio}
                variant="outline"
                size="lg"
                className="border-2 border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pixelify-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pixelify-gray rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
