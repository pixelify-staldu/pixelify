
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    fetchProjects();
    checkSectionVisibility();
  }, []);

  const checkSectionVisibility = async () => {
    const { data } = await supabase
      .from('site_sections')
      .select('is_visible')
      .eq('section_type', 'portfolio')
      .single();
    
    if (data) {
      setIsVisible(data.is_visible);
    }
  };

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .order('display_order');
    
    if (data && !error) {
      console.log('Portfolio projects:', data);
      setProjects(data);
      
      // Extract unique categories
      const uniqueCategories = [...new Set(data.map(project => project.category))];
      setCategories(uniqueCategories);
    }
  };

  const filters = [
    { key: 'all', label: 'Tous' },
    ...categories.map(cat => ({ key: cat, label: cat }))
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  if (!isVisible) {
    return null;
  }

  return (
    <section id="portfolio" className="py-20 bg-pixelify-slate relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-pixelify-orange rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 border border-pixelify-gray rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-700 hover:scale-105">
            <span className="bg-gradient-to-r from-pixelify-orange to-pixelify-charcoal bg-clip-text text-transparent">
              Notre Portfolio
            </span>
          </h2>
          <p className="text-xl text-pixelify-charcoal max-w-3xl mx-auto leading-relaxed transform transition-all duration-500 hover:text-pixelify-orange/80">
            Découvrez quelques-unes de nos réalisations récentes. Chaque projet reflète notre engagement 
            envers l'excellence et l'innovation.
          </p>
        </div>

        {/* Filter Buttons with enhanced animations */}
        {filters.length > 1 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {filters.map((filter, index) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={`
                  transition-all duration-300 rounded-full px-6 py-2 animate-fade-in transform hover:rotate-1
                  ${activeFilter === filter.key 
                    ? 'bg-gradient-to-r from-pixelify-orange to-pixelify-charcoal text-white shadow-lg scale-105' 
                    : 'border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white hover:scale-105 shadow-lg hover:shadow-xl'
                  }
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        )}

        {/* Projects Grid with staggered animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border-0 shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image_url || "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Project image failed to load:', project.image_url);
                    console.error('Error event:', e);
                    // Fallback to placeholder image
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop";
                  }}
                  onLoad={() => {
                    console.log('Project image loaded successfully:', project.image_url);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.project_url && (
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.project_url, '_blank')}
                      className="bg-white text-pixelify-orange hover:bg-pixelify-orange hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Voir le projet →
                    </Button>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-pixelify-charcoal group-hover:text-pixelify-orange transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-pixelify-charcoal mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-pixelify-orange/10 to-pixelify-charcoal/10 text-pixelify-orange px-3 py-1 rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-pixelify-charcoal text-lg">Aucun projet trouvé pour cette catégorie.</p>
          </div>
        )}

        {/* CTA with enhanced animation */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-pixelify-charcoal mb-6">
            Vous souhaitez voir plus de nos réalisations ?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-pixelify-orange to-pixelify-charcoal text-white px-8 py-4 rounded-full font-semibold hover:from-pixelify-orange-dark hover:to-pixelify-charcoal transition-all duration-300 transform hover:scale-110 hover:rotate-2 shadow-lg hover:shadow-2xl"
          >
            Voir tous nos projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
