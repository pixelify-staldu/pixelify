
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Création de Sites Web",
      description: "Conception et développement de sites web sur mesure, adaptés à vos besoins spécifiques. Que ce soit pour un site vitrine, un blog ou une boutique en ligne, nous créons des interfaces intuitives et esthétiques.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      ),
    },
    {
      title: "Développement d'Applications",
      description: "Développement d'applications mobiles et web innovantes. Nous transformons vos idées en applications performantes et conviviales, adaptées à tous les appareils.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
    },
    {
      title: "Design UI/UX",
      description: "Création d'interfaces utilisateur intuitives et d'expériences utilisateur fluides. Nous nous concentrons sur l'ergonomie et l'esthétique pour offrir une navigation agréable.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "Optimisation SEO",
      description: "Amélioration de la visibilité de votre site web sur les moteurs de recherche. Nous optimisons votre contenu et votre structure pour attirer plus de visiteurs qualifiés.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
    },
    {
      title: "Maintenance et Support",
      description: "Assistance continue pour assurer le bon fonctionnement de votre site ou application. Nous offrons des mises à jour régulières, des correctifs et un support technique réactif.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      title: "Conseil en Stratégie Digitale",
      description: "Accompagnement dans la définition et la mise en œuvre de votre stratégie numérique. Nous vous aidons à atteindre vos objectifs en ligne grâce à des conseils personnalisés.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
    },
    {
      title: "E-commerce Solutions",
      description: "Développement de boutiques en ligne sécurisées et performantes. Nous intégrons des solutions de paiement, de gestion des stocks et de marketing pour booster vos ventes.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
    },
    {
      title: "Intégration de Systèmes",
      description: "Connexion de vos outils et plateformes pour une gestion fluide de vos opérations. Nous assurons l'interopérabilité entre vos différents systèmes.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16,6 12,2 8,6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      ),
    },
    {
      title: "Formation et Ateliers",
      description: "Sessions de formation pour vous et votre équipe sur l'utilisation des outils numériques et les meilleures pratiques en ligne.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
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
