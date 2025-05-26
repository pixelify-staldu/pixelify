
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "E-commerce BioMarket",
      category: "e-commerce",
      description: "Boutique en ligne moderne pour produits biologiques avec système de paiement intégré.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Architecte",
      category: "design",
      description: "Site vitrine élégant pour un cabinet d'architecture avec galerie interactive.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Tailwind", "Framer Motion"],
      link: "#"
    },
    {
      title: "App Fitness Tracker",
      category: "mobile",
      description: "Application mobile de suivi sportif avec tableau de bord personnalisé.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Chart.js"],
      link: "#"
    },
    {
      title: "Restaurant Le Gourmet",
      category: "web",
      description: "Site web avec système de réservation en ligne et menu interactif.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      link: "#"
    },
    {
      title: "Startup FinTech",
      category: "web",
      description: "Plateforme web sécurisée pour services financiers innovants.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Django", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Brand Identity Studio",
      category: "design",
      description: "Refonte complète de l'identité visuelle et du site web d'un studio créatif.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      technologies: ["Figma", "Webflow", "GSAP"],
      link: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous' },
    { key: 'web', label: 'Sites Web' },
    { key: 'e-commerce', label: 'E-commerce' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'design', label: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pixelify-blue to-pixelify-purple bg-clip-text text-transparent">
              Notre Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez quelques-unes de nos réalisations récentes. Chaque projet reflète notre engagement 
            envers l'excellence et l'innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              variant={activeFilter === filter.key ? "default" : "outline"}
              className={`
                transition-all duration-300 rounded-full px-6 py-2
                ${activeFilter === filter.key 
                  ? 'bg-gradient-to-r from-pixelify-blue to-pixelify-purple text-white shadow-lg transform scale-105' 
                  : 'border-pixelify-blue text-pixelify-blue hover:bg-pixelify-blue hover:text-white'
                }
              `}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden animate-fade-in">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <Button 
                    size="sm"
                    className="bg-white text-pixelify-blue hover:bg-pixelify-blue hover:text-white transition-all duration-300 rounded-full"
                  >
                    Voir le projet →
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-pixelify-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gradient-to-r from-pixelify-blue/10 to-pixelify-purple/10 text-pixelify-blue px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-600 mb-6">
            Vous souhaitez voir plus de nos réalisations ?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pixelify-blue to-pixelify-purple text-white px-8 py-4 rounded-full font-semibold hover:from-pixelify-blue-dark hover:to-pixelify-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
