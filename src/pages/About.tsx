import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Target, Compass, Heart, Anchor, Zap, Shield, Eye, CheckCircle, Settings, Quote } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const About = () => {
  const [siteInfo, setSiteInfo] = useState<any>({});

  useEffect(() => {
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

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation siteInfo={siteInfo} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pixelify-slate to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 title">
                <span className="text-pixelify-charcoal">À </span>
                <span className="text-pixelify-orange">propos</span>
              </h1>
              <p className="text-xl text-pixelify-charcoal-light leading-relaxed">
                Découvrez <strong className="text-pixelify-orange">Pixelify</strong>, votre partenaire digital suisse pour des solutions web sur mesure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission - Format Bannière uniforme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="max-w-6xl mx-auto space-y-20">
              {/* Vision - Format quote large */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pixelify-orange/10 rounded-full mb-8">
                  <Target className="w-8 h-8 text-pixelify-orange" />
                </div>
                <h2 className="text-2xl font-bold text-pixelify-charcoal mb-8 title">Notre Vision</h2>
                <blockquote className="text-2xl md:text-3xl text-pixelify-charcoal leading-relaxed font-light italic max-w-4xl mx-auto">
                  "Un site web ne se limite pas à un design séduisant. Il doit offrir une 
                  <span className="text-pixelify-orange font-medium"> expérience utilisateur intuitive</span> capable 
                  de générer des résultats concrets."
                </blockquote>
              </div>

              {/* Mission - Format identique à la vision */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pixelify-orange/10 rounded-full mb-8">
                  <Compass className="w-8 h-8 text-pixelify-orange" />
                </div>
                <h2 className="text-2xl font-bold text-pixelify-charcoal mb-8 title">Notre Mission</h2>
                <blockquote className="text-2xl md:text-3xl text-pixelify-charcoal leading-relaxed font-light italic max-w-4xl mx-auto">
                  "Accompagner les entreprises dans leur digitalisation grâce à une approche qui mêle 
                  <span className="text-pixelify-orange font-medium"> créativité, stratégie et savoir-faire suisse</span>."
                </blockquote>
                <p className="text-lg text-pixelify-charcoal-light mt-6 max-w-3xl mx-auto">
                  Notre objectif : développer des <strong className="text-pixelify-orange">solutions digitales performantes</strong>, 
                  sur mesure, et alignées avec les enjeux réels de nos clients.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs - Format Timeline avec fond blanc */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={300}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-pixelify-orange rounded-full mb-8 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal font-display">Nos Valeurs</h2>
                <p className="text-xl text-pixelify-charcoal-light mt-4">Les principes qui guident notre travail</p>
              </div>
              
              {/* Timeline des valeurs avec fond blanc */}
              <div className="relative">
                {/* Ligne centrale */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pixelify-orange to-pixelify-orange/30 rounded-full hidden md:block"></div>
                
                <div className="space-y-12">
                  {/* Simplicité */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                      <div className="bg-white border-2 border-pixelify-orange/20 p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center md:justify-end mb-4">
                          <Zap className="w-8 h-8 mr-3 text-pixelify-orange" />
                          <h3 className="text-2xl font-bold text-pixelify-charcoal font-display">Simplicité</h3>
                        </div>
                        <p className="text-lg text-pixelify-charcoal">
                          Rendre le digital compréhensible et accessible
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-6 h-6 bg-pixelify-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>

                  {/* Fiabilité */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="hidden md:block w-6 h-6 bg-pixelify-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
                      <div className="bg-white border-2 border-pixelify-orange/20 p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          <Shield className="w-8 h-8 mr-3 text-pixelify-orange" />
                          <h3 className="text-2xl font-bold text-pixelify-charcoal font-display">Fiabilité</h3>
                        </div>
                        <p className="text-lg text-pixelify-charcoal">
                          Être un partenaire de confiance sur le long terme
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Transparence */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                      <div className="bg-white border-2 border-pixelify-orange/20 p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center md:justify-end mb-4">
                          <Eye className="w-8 h-8 mr-3 text-pixelify-orange" />
                          <h3 className="text-2xl font-bold text-pixelify-charcoal font-display">Transparence</h3>
                        </div>
                        <p className="text-lg text-pixelify-charcoal">
                          Être clair dans nos offres, délais et limites
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-6 h-6 bg-pixelify-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>

                  {/* Exigence */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12"></div>
                    <div className="hidden md:block w-6 h-6 bg-pixelify-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-center md:text-left">
                      <div className="bg-white border-2 border-pixelify-orange/20 p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          <CheckCircle className="w-8 h-8 mr-3 text-pixelify-orange" />
                          <h3 className="text-2xl font-bold text-pixelify-charcoal font-display">Exigence</h3>
                        </div>
                        <p className="text-lg text-pixelify-charcoal">
                          Proposer des solutions robustes, utiles et bien pensées
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Agilité */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                      <div className="bg-white border-2 border-pixelify-orange/20 p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center md:justify-end mb-4">
                          <Settings className="w-8 h-8 mr-3 text-pixelify-orange" />
                          <h3 className="text-2xl font-bold text-pixelify-charcoal font-display">Agilité</h3>
                        </div>
                        <p className="text-lg text-pixelify-charcoal">
                          S'adapter aux besoins concrets des clients
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-6 h-6 bg-pixelify-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="md:w-1/2 md:pl-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fondateur - Format Card compacte */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-pixelify-slate to-white shadow-2xl border-pixelify-orange/20 border-2">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Colonne gauche - Identité centrée */}
                    <div className="lg:w-1/3 text-center">
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark rounded-full flex items-center justify-center shadow-xl">
                        <Anchor className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-pixelify-charcoal mb-2 title">Mathieu Stalder</h3>
                      <p className="text-pixelify-orange font-semibold text-lg mb-6">Fondateur & CEO</p>
                      
                      {/* Citation plus discrète */}
                      <div className="bg-pixelify-orange/5 p-3 rounded-lg relative">
                        <Quote className="w-5 h-5 text-pixelify-orange/40 absolute top-1 left-1" />
                        <blockquote className="text-sm text-pixelify-charcoal italic leading-relaxed pt-2">
                          "Comme en navigation, les grands caps se tracent d'abord avec des lignes simples."
                        </blockquote>
                      </div>
                    </div>
                    
                    {/* Colonne droite - Contenu condensé */}
                    <div className="lg:w-2/3 space-y-6">
                      <div>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed mb-4">
                          Navigateur dans l'âme et passionné par les systèmes bien pensés, j'évolue dans le domaine de l'informatique depuis plus de <strong className="text-pixelify-orange">13 ans</strong>, avec une spécialisation dans le <strong className="text-pixelify-orange">développement web</strong> et la <strong className="text-pixelify-orange">digitalisation des processus métiers</strong>.
                        </p>
                      </div>
                      
                      {/* Motivation condensée */}
                      <div className="bg-pixelify-orange/5 p-6 rounded-xl border-l-4 border-pixelify-orange">
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3 title">Pourquoi cette activité ?</h4>
                        <p className="text-pixelify-charcoal leading-relaxed">
                          J'ai constaté un besoin fort : avoir un <strong className="text-pixelify-orange">interlocuteur simple, humain et compétent</strong>, 
                          capable de faire le lien entre les idées des entreprises et leur mise en œuvre digitale.
                        </p>
                      </div>

                      {/* Expertises - Format badges */}
                      <div>
                        <h4 className="text-lg font-bold text-pixelify-charcoal mb-4 title">🧩 Mes expertises</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Développement web",
                            "Automatisation",
                            "Stratégie digitale",
                            "Conseil efficacité"
                          ].map((expertise, index) => (
                            <span key={index} className="bg-pixelify-orange text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                              {expertise}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action - Format sobre */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={500}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pixelify-orange rounded-full mb-8 shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal mb-8 font-display">
                Prêt à Transformer Votre Vision ?
              </h2>
              <p className="text-xl text-pixelify-charcoal-light mb-12 max-w-3xl mx-auto leading-relaxed">
                Discutons de votre projet et découvrons ensemble comment Pixelify peut vous accompagner 
                vers le succès digital.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-pixelify-orange text-white hover:bg-pixelify-orange-dark text-lg px-12 py-6 h-auto rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Mail className="w-6 h-6 mr-3" />
                Commencer un projet
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer siteInfo={siteInfo} />
    </div>
  );
};

export default About;
