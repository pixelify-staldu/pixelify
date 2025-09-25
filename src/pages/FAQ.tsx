import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  HelpCircle, 
  Clock, 
  DollarSign, 
  Code, 
  Headphones, 
  Users,
  ArrowRight
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_featured: boolean;
  display_order: number;
}

const FAQ = () => {
  const [siteInfo, setSiteInfo] = useState<any>({});
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Toutes les questions', icon: HelpCircle },
    { id: 'processus', label: 'Processus', icon: Clock },
    { id: 'tarifs', label: 'Tarifs', icon: DollarSign },
    { id: 'technique', label: 'Technique', icon: Code },
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'general', label: 'Général', icon: Users },
  ];

  useEffect(() => {
    fetchSiteInfo();
    fetchFAQItems();
  }, []);

  const fetchSiteInfo = async () => {
    const { data } = await supabase
      .from('site_info')
      .select('*')
      .maybeSingle();
    
    if (data) {
      setSiteInfo(data);
    }
  };

  const fetchFAQItems = async () => {
    const { data } = await supabase
      .from('faq_items')
      .select('*')
      .order('is_featured', { ascending: false })
      .order('display_order', { ascending: true });
    
    if (data) {
      setFaqItems(data);
    }
  };

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'tous' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredFAQs = filteredFAQs.filter(item => item.is_featured);
  const regularFAQs = filteredFAQs.filter(item => !item.is_featured);

  return (
    <div className="min-h-screen">
      <Navigation siteInfo={siteInfo} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pixelify-slate to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pixelify-orange rounded-full mb-8 shadow-lg">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 title">
                <span className="text-pixelify-charcoal">Questions </span>
                <span className="text-pixelify-orange">Fréquentes</span>
              </h1>
              <p className="text-xl text-pixelify-charcoal-light leading-relaxed mb-8">
                Toutes les réponses à vos questions sur nos services, processus et tarifs.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pixelify-charcoal-light w-5 h-5" />
                <Input
                  placeholder="Rechercher une question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white/80 backdrop-blur-sm border-pixelify-orange/30 focus:border-pixelify-orange"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`h-12 px-6 ${
                      selectedCategory === category.id 
                        ? 'bg-pixelify-orange hover:bg-pixelify-orange-dark text-white' 
                        : 'border-pixelify-orange/30 text-pixelify-charcoal hover:border-pixelify-orange hover:bg-pixelify-orange/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured FAQs */}
      {featuredFAQs.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-pixelify-orange/5 to-white">
          <div className="container mx-auto px-4">
            <ScrollReveal delay={300}>
              <div className="text-center mb-12">
                <Badge className="bg-pixelify-orange text-white mb-4">Questions Populaires</Badge>
                <h2 className="text-3xl font-bold text-pixelify-charcoal title">Les Plus Demandées</h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {featuredFAQs.map((faq, index) => (
                    <ScrollReveal key={faq.id} delay={400 + index * 50}>
                      <AccordionItem 
                        value={faq.id} 
                        className="bg-white border-2 border-pixelify-orange/20 rounded-lg px-6 hover:border-pixelify-orange/40 transition-colors"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6">
                          <span className="text-lg font-semibold text-pixelify-charcoal pr-4">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-6">
                          <div className="text-pixelify-charcoal leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </ScrollReveal>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* All FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={500}>
            <div className="max-w-4xl mx-auto">
              {regularFAQs.length > 0 ? (
                <>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-pixelify-charcoal title">
                      {selectedCategory === 'tous' ? 'Toutes les Questions' : 
                       categories.find(c => c.id === selectedCategory)?.label}
                    </h2>
                    {searchTerm && (
                      <p className="text-pixelify-charcoal-light mt-2">
                        {filteredFAQs.length} résultat(s) pour "{searchTerm}"
                      </p>
                    )}
                  </div>

                  <Accordion type="single" collapsible className="space-y-3">
                    {regularFAQs.map((faq, index) => (
                      <ScrollReveal key={faq.id} delay={600 + index * 30}>
                        <AccordionItem 
                          value={faq.id} 
                          className="bg-gray-50 border border-gray-200 rounded-lg px-6 hover:bg-white hover:border-pixelify-orange/30 transition-all"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-5">
                            <span className="text-pixelify-charcoal font-medium pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-5">
                            <div className="text-pixelify-charcoal-light leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </ScrollReveal>
                    ))}
                  </Accordion>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-32 h-32 mx-auto mb-6 bg-pixelify-orange/10 rounded-full flex items-center justify-center">
                    <Search className="w-16 h-16 text-pixelify-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-pixelify-charcoal mb-4 title">Aucun résultat trouvé</h3>
                  <p className="text-pixelify-charcoal-light mb-6">
                    Essayez avec d'autres mots-clés ou consultez toutes les catégories.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('tous');
                    }}
                    className="border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white"
                  >
                    Voir toutes les questions
                  </Button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-pixelify-orange/5 to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal delay={700}>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pixelify-orange rounded-full mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-pixelify-charcoal mb-6 title">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-xl text-pixelify-charcoal-light mb-8">
                Notre équipe est là pour répondre à toutes vos questions spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white h-12 px-8"
                  onClick={() => window.location.href = '/contact'}
                >
                  Nous contacter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white h-12 px-8"
                  onClick={() => window.location.href = '/about'}
                >
                  En savoir plus sur nous
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer siteInfo={siteInfo} />
    </div>
  );
};

export default FAQ;