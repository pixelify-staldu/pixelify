
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Globe, Monitor, ShoppingCart, Smartphone, Target} from "lucide-react";

const ServicesSection = () => {
  const services = [
    // {
    //   title: "Sites Web Hébergés en Suisse",
    //   description: "Création de sites web professionnels avec hébergement 100% suisse. Données sécurisées, performance optimale et conformité aux lois helvétiques garantie.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
    //       <path d="M9 12l2 2 4-4"/>
    //     </svg>
    //   ),
    // },
    {
      title: "Conception de sites internet",
      description: "Des sites web conçus sur mesure qui reflètent l'identité de votre marque et attirent vos visiteurs grâce à une expérience utilisateur transparente.",
      icon: (
          <Monitor className="w-10 h-10 text-pixelify-orange" />
      ),
    },
    {
      title: "Site e-commerce",
      description: "Boutiques en ligne avec paiements sécurisés hébergées exclusivement en Suisse. Gestion des stocks, commandes et clients avec la plus haute protection des données.",
      icon: (
          <ShoppingCart className="w-10 h-10 text-pixelify-orange" />
      ),
    },
    {
      title: "Applications Web Sur Mesure",
      description: "Développement d'applications web personnalisées avec backend hébergé en territoire suisse. Solutions métier adaptées à vos besoins spécifiques.",
      icon: (
          <Smartphone className="w-10 h-10 text-pixelify-orange" />
      ),
    },
    // {
    //   title: "Design UI/UX Responsive",
    //   description: "Création d'interfaces utilisateur modernes et intuitives, optimisées pour tous les appareils avec une attention particulière à l'expérience utilisateur.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    //       <circle cx="9" cy="9" r="2"/>
    //       <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Optimisation SEO Locale",
    //   description: "Référencement naturel optimisé pour le marché suisse et francophone. Amélioration de votre visibilité sur Google.ch et moteurs de recherche locaux.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <circle cx="11" cy="11" r="8"/>
    //       <path d="m21 21-4.35-4.35"/>
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Maintenance & Support Suisse",
    //   description: "Support technique francophone basé en Suisse. Mises à jour régulières, sauvegardes automatiques et monitoring 24h/24 de votre site web.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Migration vers la Suisse",
    //   description: "Migration sécurisée de votre site existant vers l'hébergement suisse. Transfert de données, configuration et optimisation sans interruption de service.",
    //   icon: (
    //     <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    //       <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    //       <polyline points="16,6 12,2 8,6"/>
    //       <line x1="12" y1="2" x2="12" y2="15"/>
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Conformité RGPD & LPD",
    //   description: "Mise en conformité complète avec le RGPD européen et la LPD suisse. Politique de confidentialité, gestion des cookies et protection des données.",
    //   icon: (
    //       <Globe className="w-10 h-10 text-pixelify-orange" />
    //   ),
    // },
    {
      title: "Consulting Stratégie Digitale",
      description: "Accompagnement personnalisé pour définir votre stratégie digitale. Audit, recommandations et plan d'action adapté",
      icon: (
          <Target className="w-10 h-10 text-pixelify-orange" />
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pixelify-black relative">
            <span className="text-pixelify-charcoal title">
                Nos{' '}
              </span> <span className="text-pixelify-orange title">services</span>
          </h2>
          <p className="text-xl text-pixelify-gray max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales sur-mesure, de la création de site web à l’hébergement local en Suisse,
            pour accompagner durablement votre croissance.
          </p>
        </div>

        {/* Swiss Hosting Banner */}
        {/*<div className="mb-16 animate-fade-in">*/}
        {/*  <div className="bg-gradient-to-r from-pixelify-orange/5 to-red-50 rounded-2xl p-8 border border-pixelify-orange/10 relative">*/}
        {/*    <div className="flex items-center justify-center gap-6 mb-4">*/}
        {/*      <div className="flex items-center gap-2">*/}
        {/*        <div className="w-8 h-6 bg-red-600 relative rounded-sm">*/}
        {/*          <div className="absolute inset-0 flex items-center justify-center">*/}
        {/*            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">*/}
        {/*              <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <span className="text-lg font-semibold text-pixelify-charcoal">Hébergement 100% Suisse</span>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <p className="text-center text-pixelify-charcoal max-w-2xl mx-auto">*/}
        {/*      Datacenters suisses exclusivement, énergies renouvelables, infrastructure redondante */}
        {/*      et support technique 24h/24. Vos données ne quittent jamais le territoire helvétique.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 justify-center">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-pixelify-orange/20 relative">
              <CardContent className="p-8 text-center">
                <div className="mb-6 text-pixelify-gray group-hover:text-pixelify-orange transition-colors duration-300 flex justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-xl mb-4 text-pixelify-black">
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
          <div className="bg-pixelify-orange/5 rounded-2xl p-8 max-w-4xl mx-auto border border-pixelify-orange/10 relative">
            <h3 className="text-3xl font-bold mb-4 text-pixelify-black">
              Boostez votre présence en ligne avec notre expertise digitale
            </h3>
            <p className="text-lg text-pixelify-gray mb-6">
              Sites web sur mesure, UX optimisée, hébergement local et support de proximité :
              découvrez nos solutions clé en main pour développer votre activité en toute sérénité.
            </p>
            <Button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
            >
              Discuter de votre projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
