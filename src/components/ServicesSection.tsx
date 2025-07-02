
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Globe, Target } from "lucide-react";
import { useSiteConfig } from '@/context/SiteConfigContext';

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-pixelify-orange" />,
    title: "Conception de sites internet",
    description: "Des sites web conçus sur mesure qui reflètent l'identité de votre marque et attirent vos visiteurs grâce à une expérience utilisateur transparente."
  },
  {
    icon: <Smartphone className="w-10 h-10 text-pixelify-orange" />,
    title: "Développement d'application",
    description: "Développement d'applications mobiles et web innovantes. Nous transformons vos idées en applications performantes et conviviales, adaptées à tous les appareils."
  },
  {
    icon: <Globe className="w-10 h-10 text-pixelify-orange" />,
    title: "E-commerce",
    description: "Mise en place de boutiques en ligne complètes avec intégration de paiements sécurisés, gestion des produits et interfaces conviviales pour les clients."
  },
  {
    icon: <Target className="w-10 h-10 text-pixelify-orange" />,
    title: "Conseil & Stratégie",
    description: "Accélérez votre site web grâce à nos techniques d'optimisation qui améliorent les temps de chargement et les performances globales."
  }
];

const ServicesSection = () => {
  const { config } = useSiteConfig();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  if (!config.visibleSections.services) return null;

  return (
    <section className="bg-gray-50 section-padding" id="services">
      <div className="container mx-auto">
        <div 
          ref={sectionRef} 
          className="transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="section-title text-center mb-16 mx-auto">
            Nos <span className="text-pixelify-orange">Services</span>
            <span className="block w-20 h-1 bg-pixelify-orange mx-auto mt-4"></span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Nous fournissons des solutions web complètes adaptées à vos besoins uniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="transition-all duration-700 delay-200 opacity-0 translate-y-10 hover:shadow-lg hover:border-pixelify-orange hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
