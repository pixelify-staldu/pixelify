import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .order('display_order');

    if (data && !error) {
      setProjects(data);
      const uniqueCategories = [...new Set(data.map(project => project.category))];
      setCategories(uniqueCategories);
    }
    setLoading(false);
  };

  const filters = [
    { key: 'all', label: 'Tous les projets' },
    ...categories.map(cat => ({ key: cat, label: cat }))
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-pixelify-charcoal hover:text-pixelify-orange transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <h1 className="text-2xl font-bold text-pixelify-charcoal">Portfolio</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-pixelify-navy to-pixelify-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre expertise à travers une sélection de projets qui reflètent 
            notre passion pour l'innovation et l'excellence technique.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                size="sm"
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image_url || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Quick Actions */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        {project.project_url && (
                          <Button
                            size="sm"
                            onClick={() => window.open(project.project_url, '_blank')}
                            className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-pixelify-navy flex-1"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Voir
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.is_featured && (
                      <Badge className="absolute top-4 left-4 bg-pixelify-orange text-white">
                        Projet vedette
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-pixelify-charcoal group-hover:text-pixelify-navy transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="ml-2 shrink-0 text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-pixelify-charcoal-light mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary" 
                              className="text-xs bg-gradient-to-r from-pixelify-navy/10 to-pixelify-teal/10 text-pixelify-navy"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-pixelify-charcoal-light pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} />
                        <span>{new Date(project.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })}</span>
                      </div>
                      {project.project_url && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(project.project_url, '_blank')}
                          className="h-auto p-1 text-pixelify-orange hover:text-pixelify-orange-dark"
                        >
                          <ExternalLink size={14} />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-pixelify-charcoal mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-pixelify-charcoal-light">
                Aucun projet ne correspond à cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pixelify-navy to-pixelify-teal py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Parlons de vos besoins et créons ensemble quelque chose d'extraordinaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-white text-pixelify-navy hover:bg-gray-100">
                Voir nos services
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pixelify-navy">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;