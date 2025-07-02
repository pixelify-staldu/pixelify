
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useSiteConfig } from '@/context/SiteConfigContext';

const AboutSection = () => {
  const { config } = useSiteConfig();
  const { about } = config;
  
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  if (!config.visibleSections.about) return null;

  return (
    <section className="section-padding bg-gray-50" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={imageRef} 
            className="transition-all duration-700 opacity-0 translate-y-10 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pixelify-orange rounded-full opacity-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pixelify-orange-light rounded-full opacity-20"></div>
              <img 
                src={about.image} 
                alt="The Pixelify team" 
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="transition-all duration-700 opacity-0 translate-y-10 order-1 lg:order-2"
          >
            <h2 className="section-title">
              <span>{about.title}</span>
            </h2>
            <p className="text-gray-600 mb-6">
              {about.subtitle}
            </p>

            {about.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-6">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-pixelify-orange pl-4">
                <h3 className="font-bold text-lg">Notre Mission</h3>
                <p className="text-gray-600">{about.mission}</p>
              </div>
              <div className="border-l-4 border-pixelify-orange pl-4">
                <h3 className="font-bold text-lg">Notre Vision</h3>
                <p className="text-gray-600">{about.vision}</p>
              </div>
            </div>
            
            <Button className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white">
              Rencontrez-nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
