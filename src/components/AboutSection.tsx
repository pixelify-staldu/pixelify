
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "Nous explorons constamment de nouvelles technologies et approches pour offrir des solutions créatives et avant-gardistes.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "Qualité",
      description: "Nous nous engageons à fournir un travail de haute qualité, en prêtant une attention méticuleuse aux détails et en respectant les normes les plus élevées.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26 12,2"/>
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients, en écoutant leurs besoins et en adaptant nos solutions pour atteindre leurs objectifs.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      title: "Transparence",
      description: "Nous croyons en une communication ouverte et honnête, en gardant nos clients informés à chaque étape du processus.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
    },
    {
      title: "Responsabilité",
      description: "Nous nous engageons à respecter les délais et les budgets, tout en assurant la satisfaction de nos clients.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-pixelify-slate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pixelify-orange">
              À propos de nous
            </span>
          </h2>
          <p className="text-xl text-pixelify-charcoal max-w-4xl mx-auto leading-relaxed">
            Pixelify est une agence web créative dédiée à transformer vos idées en solutions numériques 
            puissantes et efficaces. Nous nous engageons à fournir des services de haute qualité qui 
            répondent à vos besoins spécifiques, tout en vous accompagnant à chaque étape de votre projet.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20 animate-fade-in w-4xl">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold mb-6 text-pixelify-charcoal text-center">Notre Mission</h3>
            <p className="text-lg text-pixelify-charcoal leading-relaxed text-center max-w-4xl mx-auto">
              Transformer vos idées en solutions numériques puissantes et efficaces. Nous nous engageons à 
              fournir des services de haute qualité qui répondent à vos besoins spécifiques, tout en vous 
              accompagnant à chaque étape de votre projet.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-pixelify-charcoal text-center animate-fade-in">
            Nos Valeurs Fondamentales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-pixelify-orange/20">
                <CardContent className="p-6 text-center">
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
          <div className="bg-pixelify-orange/5 rounded-2xl p-8 max-w-4xl mx-auto border border-pixelify-orange/10">
            <h3 className="text-3xl font-bold mb-4 text-pixelify-charcoal">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-lg text-pixelify-charcoal mb-6">
              Contactez-nous pour discuter de votre vision et découvrir comment nous pouvons vous aider à l'atteindre.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Commençons ensemble
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
