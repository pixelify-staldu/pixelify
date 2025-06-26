import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PixelGrid, PixelCluster } from './PixelDecoration';

const AboutSection = () => {
  const values = [
    {
      title: "Hébergement Suisse",
      description: "Toutes vos données sont stockées en Suisse chez notre partenaire Infomaniak, garantissant sécurité et conformité RGPD.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "Performance Optimale",
      description: "Nos sites web sont optimisés pour une vitesse de chargement exceptionnelle et une expérience utilisateur fluide.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
    },
    {
      title: "Sécurité Renforcée",
      description: "Protection maximale de vos données avec certificats SSL, sauvegardes automatiques et surveillance 24h/24.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
    },
    {
      title: "Design Sur Mesure",
      description: "Création d'interfaces uniques et responsives, adaptées à votre image de marque et à vos objectifs business.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
    },
    {
      title: "Support Local",
      description: "Une équipe francophone basée en Suisse pour un accompagnement personnalisé et une communication fluide.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-pixelify-slate relative">
      {/* Pixel Decorations */}
      <PixelGrid rows={5} cols={3} className="absolute top-20 left-8 opacity-15" />
      <PixelCluster className="absolute top-32 right-12 opacity-20" />
      <PixelGrid rows={3} cols={4} className="absolute bottom-20 left-16 opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
            <span className="text-pixelify-orange">
              Pourquoi choisir
            </span>
            <span className="text-pixelify-charcoal"> Pixelify ?</span>
            <PixelCluster className="absolute -top-2 left-4 opacity-25" />
          </h2>
          <p className="text-xl text-pixelify-charcoal max-w-4xl mx-auto leading-relaxed">
            Spécialistes de la création de sites web avec hébergement 100% suisse, nous garantissons 
            la sécurité et la confidentialité de vos données grâce à notre partenariat avec Infomaniak, 
            leader de l'hébergement écologique en Suisse.
          </p>
        </div>

        {/* Swiss Advantage Section */}
        <div className="mb-20 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
            <PixelGrid rows={2} cols={3} className="absolute top-4 right-4 opacity-30" />
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-6 bg-red-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-pixelify-charcoal">L'Avantage Suisse</h3>
            </div>
            <p className="text-lg text-pixelify-charcoal leading-relaxed text-center max-w-4xl mx-auto">
              Vos données restent en Suisse, protégées par les lois les plus strictes au monde en matière 
              de protection des données. Avec Infomaniak, bénéficiez d'un hébergement 100% énergies renouvelables, 
              d'une infrastructure de pointe et d'un support technique disponible 24h/24.
            </p>
            <PixelCluster className="absolute bottom-4 left-4 opacity-20" />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-pixelify-charcoal text-center animate-fade-in relative">
            Nos Garanties
            <PixelGrid rows={2} cols={2} className="absolute -top-1 right-0 opacity-30" />
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-pixelify-orange/20 relative">
                <CardContent className="p-6 text-center">
                  {index % 2 === 0 && (
                    <PixelGrid rows={2} cols={2} className="absolute top-2 right-2 opacity-20" />
                  )}
                  <div className="mb-4 text-pixelify-charcoal group-hover:text-pixelify-orange transition-colors duration-300 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-pixelify-charcoal">
                    {value.title}
                  </h4>
                  <p className="text-pixelify-charcoal leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-pixelify-orange/5 rounded-2xl p-8 max-w-4xl mx-auto border border-pixelify-orange/10 relative">
            <PixelCluster className="absolute top-4 left-4 opacity-25" />
            <h3 className="text-3xl font-bold mb-4 text-pixelify-charcoal">
              Prêt pour un site web 100% suisse ?
            </h3>
            <p className="text-lg text-pixelify-charcoal mb-6">
              Contactez-nous pour créer votre site web avec la sécurité et la performance de l'hébergement suisse.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Découvrir nos offres
            </button>
            <PixelGrid rows={2} cols={3} className="absolute bottom-4 right-4 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
