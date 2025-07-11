
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

      {/* Vision & Mission - Format Bannière */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="max-w-6xl mx-auto">
              {/* Vision - Format quote large */}
              <div className="text-center mb-20">
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

              {/* Mission - Format éditorial */}
              <div className="bg-pixelify-slate/30 rounded-3xl p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <Compass className="w-8 h-8 mr-4 text-pixelify-orange" />
                  <h2 className="text-2xl font-bold text-pixelify-charcoal title">Notre Mission</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-pixelify-charcoal leading-relaxed mb-6">
                    Nous accompagnons les entreprises dans leur digitalisation grâce à une approche qui mêle 
                    <strong className="text-pixelify-orange"> créativité, stratégie et savoir-faire suisse</strong>.
                  </p>
                  <p className="text-lg text-pixelify-charcoal-light leading-relaxed">
                    Notre objectif : développer des <strong className="text-pixelify-orange">solutions digitales performantes</strong>, 
                    sur mesure, et alignées avec les enjeux réels de nos clients.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs - Format Timeline coloré */}
      <section className="py-20 bg-gradient-to-br from-pixelify-orange/5 to-pixelify-slate/50">
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
              
              {/* Timeline des valeurs */}
              <div className="relative">
                {/* Ligne centrale */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pixelify-orange to-pixelify-orange/30 rounded-full hidden md:block"></div>
                
                <div className="space-y-12">
                  {/* Simplicité */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                      <div className="bg-gradient-to-r from-pixelify-orange to-pixelify-orange-light text-white p-8 rounded-2xl shadow-xl">
                        <div className="flex items-center justify-center md:justify-end mb-4">
                          <Zap className="w-8 h-8 mr-3" />
                          <h3 className="text-2xl font-bold font-display">Simplicité</h3>
                        </div>
                        <p className="text-lg opacity-95">
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
                      <div className="bg-gradient-to-l from-pixelify-charcoal to-pixelify-charcoal-light text-white p-8 rounded-2xl shadow-xl">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          <Shield className="w-8 h-8 mr-3" />
                          <h3 className="text-2xl font-bold font-display">Fiabilité</h3>
                        </div>
                        <p className="text-lg opacity-95">
                          Être un partenaire de confiance sur le long terme
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Transparence */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                      <div className="bg-gradient-to-r from-pixelify-slate to-pixelify-slate-dark text-pixelify-charcoal p-8 rounded-2xl shadow-xl border-2 border-pixelify-orange/20">
                        <div className="flex items-center justify-center md:justify-end mb-4">
                          <Eye className="w-8 h-8 mr-3 text-pixelify-orange" />
                          <h3 className="text-2xl font-bold font-display">Transparence</h3>
                        </div>
                        <p className="text-lg">
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
                      <div className="bg-gradient-to-l from-green-500 to-green-600 text-white p-8 rounded-2xl shadow-xl">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          <CheckCircle className="w-8 h-8 mr-3" />
                          <h3 className="text-2xl font-bold font-display">Exigence</h3>
                        </div>
                        <p className="text-lg opacity-95">
                          Proposer des solutions robustes, utiles et bien pensées
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Agilité */}
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-center md:text-right">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
                        <div className="flex items-center justify-center md:justify-end mb-4">
                          <Settings className="w-8 h-8 mr-3" />
                          <h3 className="text-2xl font-bold font-display">Agilité</h3>
                        </div>
                        <p className="text-lg opacity-95">
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

      {/* Fondateur - Format Magazine/Interview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  <span className="text-pixelify-charcoal">Rencontrez le </span>
                  <span className="text-pixelify-orange">fondateur</span>
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                {/* Colonne gauche - Identité et citation */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <div className="sticky top-8">
                    <div className="w-32 h-32 mx-auto lg:mx-0 mb-8 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark rounded-full flex items-center justify-center shadow-2xl">
                      <Anchor className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-pixelify-charcoal mb-3 font-display">Mathieu Stalder</h3>
                    <p className="text-pixelify-orange font-semibold text-xl mb-8">Fondateur & CEO</p>
                    
                    {/* Citation mise en avant */}
                    <div className="bg-gradient-to-br from-pixelify-slate to-pixelify-slate-dark p-8 rounded-2xl relative">
                      <Quote className="w-12 h-12 text-pixelify-orange/30 absolute top-4 left-4" />
                      <blockquote className="text-xl text-pixelify-charcoal italic font-medium leading-relaxed pt-6">
                        "Comme en navigation, les grands caps se tracent d'abord avec des lignes simples."
                      </blockquote>
                    </div>
                  </div>
                </div>
                
                {/* Colonne droite - Contenu interview */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Introduction */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-pixelify-charcoal leading-relaxed">
                      Navigateur dans l'âme, curieux de ce qui m'entoure et passionné par les systèmes bien pensés, 
                      j'évolue dans le domaine de l'informatique depuis plus de <strong className="text-pixelify-orange">13 ans</strong>, 
                      avec une spécialisation progressive dans le <strong className="text-pixelify-orange">développement web</strong> et 
                      la <strong className="text-pixelify-orange">digitalisation des processus métiers</strong>.
                    </p>
                  </div>
                  
                  {/* Parcours - Format timeline mini */}
                  <div className="bg-pixelify-slate/20 p-8 rounded-2xl">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-6 font-display flex items-center">
                      <div className="w-8 h-8 bg-pixelify-orange rounded-full mr-3"></div>
                      Mon parcours
                    </h4>
                    <div className="space-y-4">
                      {[
                        "CFC en informatique, suivi d'une maturité professionnelle",
                        "Puis un Bachelor en informatique de gestion", 
                        "Deux expériences marquantes : Abacus (ERP) et Schwab System (poste actuel)"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-pixelify-charcoal">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Motivation */}
                  <div className="bg-gradient-to-r from-pixelify-orange/10 to-transparent p-8 rounded-2xl border-l-4 border-pixelify-orange">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-4 font-display">Pourquoi cette activité ?</h4>
                    <p className="text-lg text-pixelify-charcoal leading-relaxed">
                      J'ai lancé mon activité car j'ai constaté un besoin fort : celui d'avoir un 
                      <strong className="text-pixelify-orange"> interlocuteur simple, humain et compétent</strong>, 
                      capable de faire le lien entre les idées des entreprises et leur mise en œuvre digitale.
                    </p>
                  </div>

                  {/* Ce qui l'anime */}
                  <div>
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-6 font-display">Ce qui m'anime</h4>
                    <div className="grid md:grid-cols-1 gap-4">
                      {[
                        "Créer des ponts entre les outils (et entre les gens)",
                        "Penser les choses dans leur globalité avant de les construire",
                        "Aider des projets à voir le jour grâce à une approche accessible, pragmatique, mais exigeante"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-pixelify-slate">
                          <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-pixelify-charcoal"><strong className="text-pixelify-orange">{item.split(' ')[0]} {item.split(' ')[1]} {item.split(' ')[2]}</strong> {item.split(' ').slice(3).join(' ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expertises - Format badges */}
                  <div className="bg-pixelify-charcoal/5 p-8 rounded-2xl">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-6 font-display">🧩 Mes expertises clés</h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Développement web fullstack",
                        "Automatisation de processus",
                        "Stratégie digitale",
                        "Conseil orienté efficacité"
                      ].map((expertise, index) => (
                        <span key={index} className="bg-pixelify-orange text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action - Format moderne */}
      <section className="py-20 bg-gradient-to-br from-pixelify-charcoal via-pixelify-charcoal-light to-pixelify-orange/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pixelify-orange/10 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={500}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pixelify-orange rounded-full mb-8 shadow-2xl">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display">
                Prêt à Transformer Votre Vision ?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discutons de votre projet et découvrons ensemble comment Pixelify peut vous accompagner 
                vers le succès digital.
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-white text-pixelify-charcoal hover:bg-pixelify-slate text-lg px-12 py-6 h-auto rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
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
