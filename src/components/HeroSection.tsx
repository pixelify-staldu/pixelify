
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-white pt-16" id="hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div 
            ref={heroRef}
            className="w-full md:w-1/2 pt-10 md:pt-0 transition-all duration-1000 opacity-0 translate-y-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transformons <span className="text-pixelify-orange">chaque idée</span> en succès
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Nous concevons des sites web à votre image et vous suivons dans la digitalisation de votre activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button
                  className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-6 py-6 text-lg"
                >
                  Votre projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#portfolio">
                <Button
                  variant="outline"
                  className="border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange/5 px-6 py-6 text-lg"
                >
                  Notre Portfolio
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pixelify-orange-light rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pixelify-orange rounded-full opacity-20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Web design and development" 
                className="w-full max-w-lg rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
