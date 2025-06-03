
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
    // {
    //   title: "SEO & Marketing",
    //   description: "Optimisation et stratégies marketing digitales.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <line x1="18" y1="6" x2="6" y2="18"/>
    //       <line x1="6" y1="6" x2="18" y2="18"/>
    //       <circle cx="12" cy="12" r="10"/>
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Applications Mobiles",
    //   description: "Applications natives et cross-platform pour mobile.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    //       <line x1="12" y1="18" x2="12.01" y2="18"/>
    //     </svg>
    //   ),
    // },
    {
    //   title: "Maintenance & Support",
    //   description: "Support technique continu et mises à jour.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    //     </svg>
    //   ),
    // }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
