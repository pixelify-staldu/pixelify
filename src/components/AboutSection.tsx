
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      title: "Hébergement 100% Suisse",
      description: "Toutes vos données sont stockées exclusivement en Suisse, garantissant sécurité maximale et conformité aux lois helvétiques strictes.",
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
    <section id="about" className="py-20 bg-pixelify-slate relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-pixelify-orange rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-pixelify-gray rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105">
            <span className="text-pixelify-orange">
              Pourquoi choisir
            </span>
            <span className="text-pixelify-charcoal"> Pixelify ?</span>
          </h2>
          <p className="text-xl text-pixelify-charcoal max-w-4xl mx-auto leading-relaxed transform transition-all duration-500 hover:text-pixelify-orange/80">
            Spécialistes de la création de sites web avec hébergement 100% suisse, nous garantissons 
            la sécurité et la confidentialité de vos données en gardant tout en territoire helvétique.
          </p>
        </div>

        {/* Swiss Advantage Section with enhanced animations */}
        <div className="mb-20 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-6 bg-red-600 relative animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-pixelify-charcoal">L'Hébergement 100% Suisse</h3>
            </div>
            <p className="text-lg text-pixelify-charcoal leading-relaxed text-center max-w-4xl mx-auto">
              Vos données restent exclusivement en Suisse, protégées par les lois les plus strictes au monde 
              en matière de protection des données. Nous privilégions les datacenters suisses utilisant 
              des énergies renouvelables, avec une infrastructure de pointe et un support technique disponible 24h/24.
            </p>
          </div>
        </div>

        {/* Values Section with staggered animations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-pixelify-charcoal text-center animate-fade-in transform transition-all duration-500 hover:scale-105">
            Nos Garanties
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 border border-gray-100 hover:border-pixelify-orange/20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-pixelify-charcoal group-hover:text-pixelify-orange transition-all duration-300 flex justify-center transform group-hover:scale-110 group-hover:rotate-12">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-pixelify-charcoal group-hover:text-pixelify-orange transition-colors duration-300">
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

        {/* CTA Section with enhanced hover effects */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-pixelify-orange/5 rounded-2xl p-8 max-w-4xl mx-auto border border-pixelify-orange/10 transform transition-all duration-500 hover:bg-pixelify-orange/10 hover:scale-105">
            <h3 className="text-3xl font-bold mb-4 text-pixelify-charcoal transform transition-all duration-300 hover:text-pixelify-orange">
              Prêt pour un site web 100% suisse ?
            </h3>
            <p className="text-lg text-pixelify-charcoal mb-6">
              Contactez-nous pour créer votre site web avec la sécurité et la performance de l'hébergement suisse exclusif.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 hover:rotate-2 shadow-lg hover:shadow-2xl"
            >
              Découvrir nos offres
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
