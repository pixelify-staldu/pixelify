import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Eye, Star, Filter, Grid, List, Search } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [siteInfo, setSiteInfo] = useState<any>({});

  useEffect(() => {
    fetchProjects();
    fetchSiteInfo();
  }, []);

  const fetchSiteInfo = async () => {
    const { data } = await supabase
      .from('site_info')
      .select('*')
      .single();
    
    if (data) {
      setSiteInfo(data);
    }
  };

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
    { key: 'all', label: 'Tous les projets', count: projects.length },
    ...categories.map(cat => ({
      key: cat,
      label: cat,
      count: projects.filter(p => p.category === cat).length
    }))
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = !searchTerm || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.technologies && project.technologies.some((tech: string) => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    return matchesFilter && matchesSearch;
  });

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <ScrollReveal delay={index * 100}>
      <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={project.image_url || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop";
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
            <div className="flex gap-3">
              {project.project_url && (
                <Button
                  size="sm"
                  onClick={() => window.open(project.project_url, '_blank')}
                  className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-pixelify-orange transition-all duration-300"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Voir le projet
                </Button>
              )}
            </div>
          </div>

          {/* Status badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {project.is_featured && (
              <Badge className="bg-gradient-to-r from-pixelify-orange to-pixelify-orange-dark text-white shadow-lg">
                <Star size={12} className="mr-1" />
                Vedette
              </Badge>
            )}
            <Badge variant="secondary" className="bg-white/90 text-pixelify-charcoal">
              {project.category}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-pixelify-charcoal mb-3 group-hover:text-pixelify-orange transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-pixelify-charcoal-light mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-pixelify-charcoal-light">
              <Calendar size={12} />
              <span>{new Date(project.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })}</span>
            </div>
            {project.project_url && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.project_url, '_blank')}
                className="h-auto p-2 text-pixelify-orange hover:text-pixelify-orange-dark hover:bg-pixelify-orange/10"
              >
                <ExternalLink size={16} />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );

  const ProjectListItem = ({ project, index }: { project: any; index: number }) => (
    <ScrollReveal delay={index * 50}>
      <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex gap-6">
            <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={project.image_url || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop";
                }}
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-pixelify-charcoal group-hover:text-pixelify-orange transition-colors">
                    {project.title}
                  </h3>
                  {project.is_featured && (
                    <Badge className="bg-pixelify-orange text-white">
                      <Star size={12} className="mr-1" />
                      Vedette
                    </Badge>
                  )}
                </div>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              
              <p className="text-pixelify-charcoal-light mb-3 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-pixelify-charcoal-light">
                    <Calendar size={12} />
                    <span>{new Date(project.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })}</span>
                  </div>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex gap-1">
                      {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                
                {project.project_url && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.project_url, '_blank')}
                    className="ml-4"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Voir
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation siteInfo={siteInfo} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white relative">
        
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pixelify-orange/20 rounded-full mb-8 backdrop-blur-sm">
                <Eye className="w-10 h-10 text-pixelify-orange" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pixelify-charcoal title">
                Notre 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pixelify-orange to-pixelify-orange-dark"> Portfolio</span>
              </h1>
              
              <p className="text-xl text-pixelify-charcoal-light leading-relaxed mb-8 max-w-3xl mx-auto">
                Découvrez notre expertise à travers une sélection de projets qui reflètent 
                notre passion pour l'innovation et l'excellence technique.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-pixelify-charcoal-light">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pixelify-orange rounded-full"></div>
                  <span>{projects.length} projets réalisés</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>{categories.length} catégories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Solutions sur mesure</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher un projet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-pixelify-orange focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm border">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-full"
                >
                  <Grid size={16} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-full"
                >
                  <List size={16} />
                </Button>
              </div>

              {/* Results count */}
              <div className="text-sm text-pixelify-charcoal-light">
                {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} trouvé{filteredProjects.length !== 1 ? 's' : ''}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  className={`transition-all duration-300 ${
                    activeFilter === filter.key 
                      ? 'bg-pixelify-orange hover:bg-pixelify-orange-dark text-white shadow-lg scale-105' 
                      : 'hover:border-pixelify-orange hover:text-pixelify-orange'
                  }`}
                >
                  <Filter size={14} className="mr-2" />
                  {filter.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className={viewMode === 'grid' ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className={viewMode === 'grid' ? "h-56 bg-gray-200 rounded-t-lg" : "h-24 bg-gray-200 rounded-lg"}></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="space-y-6 max-w-4xl mx-auto">
                {filteredProjects.map((project, index) => (
                  <ProjectListItem key={project.id} project={project} index={index} />
                ))}
              </div>
            )
          ) : (
            <ScrollReveal>
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-pixelify-charcoal mb-4">
                  Aucun projet trouvé
                </h3>
                <p className="text-pixelify-charcoal-light mb-6">
                  Essayez de modifier vos critères de recherche ou filtres.
                </p>
                <Button 
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchTerm('');
                  }}
                  className="bg-pixelify-orange hover:bg-pixelify-orange-dark"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            <Card className="max-w-4xl mx-auto bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pixelify-orange/10 rounded-full mb-8">
                  <Star className="w-8 h-8 text-pixelify-orange" />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal mb-6 title">
                  Prêt à créer votre 
                  <span className="text-pixelify-orange"> projet ?</span>
                </h3>
                
                <p className="text-xl text-pixelify-charcoal-light mb-12 max-w-3xl mx-auto leading-relaxed">
                  Chaque projet est unique. Parlons de vos besoins et créons ensemble quelque chose d'extraordinaire 
                  qui marquera votre présence digitale.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <ExternalLink className="w-5 h-5 mr-3" />
                      Démarrer un projet
                    </Button>
                  </Link>
                  <Link to="/#services">
                    <Button size="lg" variant="outline" className="border-2 border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white px-8 py-4 text-lg transition-all duration-300">
                      Voir nos services
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <Footer siteInfo={siteInfo} />
    </div>
  );
};

export default Portfolio;