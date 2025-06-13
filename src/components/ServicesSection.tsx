
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Design Web & UX/UI",
      description: "Création d'interfaces utilisateur modernes et intuitives.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      ),
    },
    {
      title: "Développement Web",
      description: "Sites web performants avec les dernières technologies.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
    },
    {
      title: "E-commerce",
      description: "Solutions de commerce électronique complètes et sécurisées.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
    },
  ];

  const detailedServices = [
    {
      title: "Création de Sites Web",
      description: "Conception et développement de sites web sur mesure, adaptés à vos besoins spécifiques. Que ce soit pour un site vitrine, un blog ou une boutique en ligne, nous créons des interfaces intuitives et esthétiques."
    },
    {
      title: "Développement d'Applications",
      description: "Développement d'applications mobiles et web innovantes. Nous transformons vos idées en applications performantes et conviviales, adaptées à tous les appareils."
    },
    {
      title: "Design UI/UX",
      description: "Création d'interfaces utilisateur intuitives et d'expériences utilisateur fluides. Nous nous concentrons sur l'ergonomie et l'esthétique pour offrir une navigation agréable."
    },
    {
      title: "Optimisation SEO",
      description: "Amélioration de la visibilité de votre site web sur les moteurs de recherche. Nous optimisons votre contenu et votre structure pour attirer plus de visiteurs qualifiés."
    },
    {
      title: "Maintenance et Support",
      description: "Assistance continue pour assurer le bon fonctionnement de votre site ou application. Nous offrons des mises à jour régulières, des correctifs et un support technique réactif."
    },
    {
      title: "Conseil en Stratégie Digitale",
      description: "Accompagnement dans la définition et la mise en œuvre de votre stratégie numérique. Nous vous aidons à atteindre vos objectifs en ligne grâce à des conseils personnalisés."
    },
    {
      title: "E-commerce Solutions",
      description: "Développement de boutiques en ligne sécurisées et performantes. Nous intégrons des solutions de paiement, de gestion des stocks et de marketing pour booster vos ventes."
    },
    {
      title: "Intégration de Systèmes",
      description: "Connexion de vos outils et plateformes pour une gestion fluide de vos opérations. Nous assurons l'interopérabilité entre vos différents systèmes."
    },
    {
      title: "Formation et Ateliers",
      description: "Sessions de formation pour vous et votre équipe sur l'utilisation des outils numériques et les meilleures pratiques en ligne."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pixelify-black">
            Nos <span className="text-pixelify-orange">Services</span>
          </h2>
          <p className="text-xl text-pixelify-gray max-w-3xl mx-auto leading-relaxed">
            Une gamme complète de services web pour répondre à tous vos besoins digitaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-pixelify-orange/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 text-pixelify-gray group-hover:text-pixelify-orange transition-colors duration-300 flex justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-pixelify-black">
                  {service.title}
                </h3>
                
                <p className="text-pixelify-gray leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="animate-fade-in mb-20">
          <h3 className="text-3xl font-bold mb-12 text-pixelify-black text-center">
            Ce que nous faisons
          </h3>
          <div className="bg-pixelify-slate rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailedServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-50 hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-lg font-semibold mb-3 text-pixelify-black flex items-center">
                    <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-3 flex-shrink-0"></div>
                    {service.title}
                  </h4>
                  <p className="text-pixelify-gray text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-pixelify-orange/5 rounded-2xl p-8 max-w-4xl mx-auto border border-pixelify-orange/10">
            <h3 className="text-3xl font-bold mb-4 text-pixelify-black">
              Prêt à transformer votre présence digitale ?
            </h3>
            <p className="text-lg text-pixelify-gray mb-6">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
