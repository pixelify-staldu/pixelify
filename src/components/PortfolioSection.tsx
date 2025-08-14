import React, {useState, useEffect} from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {supabase} from '@/integrations/supabase/client';

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
        const {data} = await supabase
            .from('site_sections')
            .select('is_visible')
            .eq('section_type', 'portfolio')
            .single();

        if (data) {
            setIsVisible(data.is_visible);
        }
    };

    const fetchProjects = async () => {
        const {data, error} = await supabase
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
        {key: 'all', label: 'Tous'},
        ...categories.map(cat => ({key: cat, label: cat}))
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    if (!isVisible) {
        return null;
    }

    return (
        <section id="portfolio" className="py-20 bg-pixelify-gray-100 pixel-overlay">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-pixelify-charcoal title">
                            Notre{' '}
                        </span>
                        <span className="text-pixelify-orange title">portfolio</span>
                    </h2>
                    <p className="text-xl text-pixelify-charcoal max-w-3xl mx-auto leading-relaxed">
                        Découvrez quelques-unes de nos réalisations récentes. Chaque projet reflète notre engagement
                        envers l'excellence et l'innovation.
                    </p>
                </div>

                {/* Filter Buttons */}
                {filters.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
                        {filters.map((filter) => (
                            <Button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                variant={activeFilter === filter.key ? "default" : "outline"}
                            >
                                {filter.label}
                            </Button>
                        ))}
                    </div>
                )}

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Card key={project.id}
                              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-pixelify-gray-200 shadow-modern-lg overflow-hidden animate-fade-in bg-gradient-to-br from-white to-white/90 backdrop-blur-sm">
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
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {project.project_url && (
                                    <div
                                        className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                        <Button
                                            size="sm"
                                            onClick={() => window.open(project.project_url, '_blank')}
                                            className="bg-white text-pixelify-blue-light hover:bg-pixelify-blue-light hover:text-white border border-pixelify-blue-light"
                                        >
                                            Voir le projet →
                                        </Button>
                                    </div>
                                )}
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-pixelify-charcoal group-hover:text-pixelify-navy transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-pixelify-charcoal-light mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {project.technologies && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech: string, techIndex: number) => (
                                            <span
                                                key={techIndex}
                                                className="bg-gradient-to-r from-pixelify-purple-light/10 to-pixelify-green-light/10 text-pixelify-charcoal px-3 py-1 text-xs font-medium border border-pixelify-purple-light/20"
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
                        <p className="text-pixelify-charcoal-light text-lg">Aucun projet trouvé pour cette
                            catégorie.</p>
                    </div>
                )}

                {/* CTA */}
                <div className="text-center mt-16 animate-fade-in">
                    <p className="text-lg text-pixelify-charcoal mb-6">
                        Vous souhaitez voir plus de nos réalisations ?
                    </p>
                    <Button
                        size="lg"
                        variant="outline"
                    >
                        Voir tous nos projets
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
