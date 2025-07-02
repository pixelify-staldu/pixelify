import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from '@/integrations/supabase/client';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    checkSectionVisibility();
  }, []);

  const checkSectionVisibility = async () => {
    const { data } = await supabase
      .from('site_sections')
      .select('is_visible')
      .eq('section_type', 'testimonials')
      .single();
    
    if (data) {
      setIsVisible(data.is_visible);
    }
  };

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b040?w=100&h=100&fit=crop&crop=face",
      content: "Pixelify a transformé notre vision en une réalité digitale extraordinaire. Leur expertise technique et leur créativité ont dépassé toutes nos attentes.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      company: "Directeur, BioMarket",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Notre site e-commerce a vu ses ventes augmenter de 300% après la refonte par l'équipe Pixelify. Un travail professionnel et des résultats concrets.",
      rating: 5
    },
    {
      name: "Sophie Leroy",
      company: "Architecte, Studio SL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Un accompagnement exceptionnel du début à la fin. Pixelify a su capter l'essence de notre travail et la traduire en un site web élégant et fonctionnel.",
      rating: 5
    },
    {
      name: "Thomas Chen",
      company: "Fondateur, FitTracker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "L'application mobile développée par Pixelify a révolutionné notre approche du fitness. Interface intuitive et performances excellentes.",
      rating: 5
    },
    {
      name: "Claire Moreau",
      company: "Restauratrice, Le Gourmet",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "Grâce au système de réservation en ligne créé par Pixelify, nous avons optimisé notre service et amélioré l'expérience de nos clients.",
      rating: 5
    },
    {
      name: "Nicolas Dupont",
      company: "CTO, FinanceInno",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "Sécurité, performance et design moderne : Pixelify a livré exactement ce dont nous avions besoin pour notre plateforme fintech.",
      rating: 5
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-pixelify-orange' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-pixelify-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pixelify-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pixelify-orange">
              Ce que disent nos clients
            </span>
          </h2>
          <p className="text-xl text-pixelify-gray max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages sur leur expérience 
            de collaboration avec Pixelify.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg animate-fade-in bg-white">
              <CardContent className="p-8">
                <StarRating rating={testimonial.rating} />
                
                <blockquote className="text-pixelify-gray leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-pixelify-orange/20"
                  />
                  <div>
                    <div className="font-bold text-pixelify-black">{testimonial.name}</div>
                    <div className="text-pixelify-orange text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="bg-pixelify-orange/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-pixelify-orange mb-2">98%</div>
            <div className="text-pixelify-gray font-medium">Clients satisfaits</div>
          </div>
          <div className="bg-pixelify-orange/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-pixelify-orange mb-2">4.9/5</div>
            <div className="text-pixelify-gray font-medium">Note moyenne</div>
          </div>
          <div className="bg-pixelify-orange/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-pixelify-orange mb-2">100+</div>
            <div className="text-pixelify-gray font-medium">Projets livrés</div>
          </div>
          <div className="bg-pixelify-orange/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-pixelify-orange mb-2">24h</div>
            <div className="text-pixelify-gray font-medium">Temps de réponse</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
