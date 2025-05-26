
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pixelify-blue to-pixelify-purple bg-clip-text text-transparent">
              À propos de nous
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pixelify est une agence web créative basée à Paris, dédiée à créer des expériences digitales 
            exceptionnelles qui allient design innovant et performance technique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Notre Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nous croyons que chaque entreprise mérite une présence digitale qui reflète son caractère unique. 
              Notre mission est de transformer vos idées en solutions web innovantes qui captent l'attention 
              et génèrent des résultats concrets.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pixelify-blue rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Design centré utilisateur</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pixelify-purple rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Technologies de pointe</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">Support continu</span>
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

        {/* Team Section */}
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Notre Équipe</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 relative">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-pixelify-blue/20 to-pixelify-purple/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-pixelify-blue font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
