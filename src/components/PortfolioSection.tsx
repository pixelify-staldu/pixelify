
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useSiteConfig } from '@/context/SiteConfigContext';

const PortfolioSection = () => {
  const { config } = useSiteConfig();
  const { portfolio } = config;
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    projectRefs.current.forEach((project) => {
      if (project) {
        observer.observe(project);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((project) => {
        if (project) {
          observer.unobserve(project);
        }
      });
    };
  }, []);

  // Reset projectRefs when portfolio items change
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, portfolio.length);
  }, [portfolio.length]);

  if (!config.visibleSections.portfolio) return null;

  return (
    <section className="section-padding bg-white" id="portfolio">
      <div className="container mx-auto">
        <div 
          ref={sectionRef}
          className="transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="section-title text-center mb-16 mx-auto">
            Notre <span className="text-pixelify-orange">Portfolio</span>
            <span className="block w-20 h-1 bg-pixelify-orange mx-auto mt-4"></span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Découvrez nos dernières réalisations qui illustrent notre expertise en matière de conception et de développement de sites web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolio.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-700 opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-pixelify-orange text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4 text-sm">{project.description}</p>
                <a href={project.link} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit text-black hover:bg-gray-300 hover:text-black"
                  >
                    Voir le projet <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
