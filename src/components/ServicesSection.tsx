
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Sites Web Hébergés en Suisse",
      description: "Création de sites web professionnels avec hébergement 100% suisse chez Infomaniak. Données sécurisées, performance optimale et conformité RGPD garantie.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: "E-commerce Sécurisé",
      description: "Boutiques en ligne avec paiements sécurisés hébergées en Suisse. Gestion des stocks, commandes et clients avec la plus haute protection des données.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
      ),
    },
    {
      title: "Applications Web Sur Mesure",
      description: "Développement d'applications web personnalisées avec backend hébergé en Suisse. Solutions métier adaptées à vos besoins spécifiques.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
    },
    {
      title: "Design UI/UX Responsive",
      description: "Création d'interfaces utilisateur modernes et intuitives, optimisées pour tous les appareils avec une attention particulière à l'expérience utilisateur.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      ),
    },
    {
      title: "Optimisation SEO Locale",
      description: "Référencement naturel optimisé pour le marché suisse et francophone. Amélioration de votre visibilité sur Google.ch et moteurs de recherche locaux.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
    },
    {
      title: "Maintenance & Support Suisse",
      description: "Support technique francophone basé en Suisse. Mises à jour régulières, sauvegardes automatiques et monitoring 24h/24 de votre site web.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
    },
    {
      title: "Migration vers la Suisse",
      description: "Migration sécurisée de votre site existant vers l'hébergement suisse. Transfert de données, configuration et optimisation sans interruption de service.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16,6 12,2 8,6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      ),
    },
    {
      title: "Conformité RGPD & LPD",
      description: "Mise en conformité complète avec le RGPD européen et la LPD suisse. Politique de confidentialité, gestion des cookies et protection des données.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
    },
    {
      title: "Consultation Stratégie Digitale",
      description: "Accompagnement personnalisé pour définir votre stratégie digitale. Audit, recommandations et plan d'action adapté au marché suisse.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pixelify-black">
            Nos <span className="text-pixelify-orange">Services Web Suisses</span>
          </h2>
          <p className="text-xl text-pixelify-gray max-w-3xl mx-auto leading-relaxed">
            Solutions web complètes avec hébergement sécurisé en Suisse. 
            Bénéficiez de l'excellence technologique et de la protection des données helvétiques.
          </p>
        </div>

        {/* Infomaniak Partnership Banner */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gradient-to-r from-pixelify-orange/5 to-red-50 rounded-2xl p-8 border border-pixelify-orange/10">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-6 bg-red-600 relative rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <span className="text-lg font-semibold text-pixelify-charcoal">Partenaire Infomaniak</span>
              </div>
            </div>
            <p className="text-center text-pixelify-charcoal max-w-2xl mx-auto">
              Hébergement 100% suisse, énergies renouvelables, infrastructure redondante 
              et support technique 24h/24. Vos données ne quittent jamais la Suisse.
            </p>
          </div>
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
              Prêt à héberger votre site en Suisse ?
            </h3>
            <p className="text-lg text-pixelify-gray mb-6">
              Contactez-nous pour un devis personnalisé et découvrez les avantages de l'hébergement suisse.
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
