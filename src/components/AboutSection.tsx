
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Sophie Martin",
      role: "Directrice Créative",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b040?w=400&h=400&fit=crop&crop=face",
      bio: "10 ans d'expérience en design UX/UI, passionnée par l'innovation digitale."
    },
    {
      name: "Thomas Dubois",
      role: "Développeur Full-Stack",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Expert en technologies web modernes, spécialisé en React et Node.js."
    },
    {
      name: "Marie Leroy",
      role: "Experte SEO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Spécialiste en référencement naturel et stratégies de contenu digital."
    },
    {
      name: "Alex Moreau",
      role: "Chef de Projet",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Coordination de projets web complexes avec une approche agile et collaborative."
    }
  ];

  return (
    <section id="about" className="py-20 bg-pixelify-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pixelify-orange">
              À propos de nous
            </span>
          </h2>
          <p className="text-xl text-pixelify-gray max-w-3xl mx-auto leading-relaxed">
            Pixelify est une agence web créative basée à Paris, dédiée à créer des expériences digitales 
            exceptionnelles qui allient design innovant et performance technique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-pixelify-black">Notre Mission</h3>
            <p className="text-lg text-pixelify-gray mb-6 leading-relaxed">
              Nous croyons que chaque entreprise mérite une présence digitale qui reflète son caractère unique. 
              Notre mission est de transformer vos idées en solutions web innovantes qui captent l'attention 
              et génèrent des résultats concrets.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-4"></div>
                <span className="text-pixelify-black font-medium">Design centré utilisateur</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-4"></div>
                <span className="text-pixelify-black font-medium">Technologies de pointe</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-4"></div>
                <span className="text-pixelify-black font-medium">Support continu</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
              alt="Notre équipe au travail"
              className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default AboutSection;
