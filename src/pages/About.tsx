
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Target, Compass, Heart, Anchor, Zap, Shield, Eye, CheckCircle, Settings } from 'lucide-react';
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

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Vision */}
                <div>
                  <div className="flex items-center mb-8">
                    <Target className="w-8 h-8 mr-4 text-pixelify-orange" />
                    <h2 className="text-3xl md:text-4xl font-bold text-pixelify-charcoal font-display">Vision</h2>
                  </div>
                  <Card className="bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <blockquote className="text-xl text-pixelify-charcoal leading-relaxed italic">
                        "Nous sommes convaincus qu'un site web ne se limite pas à un design séduisant. 
                        Il doit offrir une <strong className="text-pixelify-orange">expérience utilisateur intuitive</strong> capable 
                        de générer des résultats concrets."
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>

                {/* Mission */}
                <div>
                  <div className="flex items-center mb-8">
                    <Compass className="w-8 h-8 mr-4 text-pixelify-orange" />
                    <h2 className="text-3xl md:text-4xl font-bold text-pixelify-charcoal font-display">Mission</h2>
                  </div>
                  <Card className="bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <blockquote className="text-xl text-pixelify-charcoal leading-relaxed mb-6 italic">
                        "Nous accompagnons les entreprises dans leur digitalisation grâce à une approche qui mêle 
                        créativité, stratégie et savoir-faire suisse."
                      </blockquote>
                      <p className="text-lg text-pixelify-charcoal leading-relaxed">
                        Notre objectif : développer des <strong className="text-pixelify-orange">solutions digitales performantes</strong>, 
                        sur mesure, et alignées avec les enjeux réels de nos clients.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-gradient-to-br from-pixelify-slate to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={300}>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center mb-16">
                <Heart className="w-10 h-10 mr-4 text-pixelify-orange" />
                <h2 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal font-display">Valeurs</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Première colonne */}
                <div className="space-y-8">
                  {/* Simplicité */}
                  <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8 flex items-start space-x-6">
                      <Zap className="w-12 h-12 text-pixelify-orange flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-pixelify-charcoal mb-3 font-display">Simplicité</h3>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed">
                          Rendre le digital compréhensible et accessible
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Fiabilité - avec offset top */}
                  <div className="md:mt-16">
                    <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-8 flex items-start space-x-6">
                        <Shield className="w-12 h-12 text-pixelify-orange flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-2xl font-bold text-pixelify-charcoal mb-3 font-display">Fiabilité</h3>
                          <p className="text-lg text-pixelify-charcoal leading-relaxed">
                            Être un partenaire de confiance sur le long terme
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Agilité */}
                  <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8 flex items-start space-x-6">
                      <Settings className="w-12 h-12 text-pixelify-orange flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-pixelify-charcoal mb-3 font-display">Agilité</h3>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed">
                          S'adapter aux besoins concrets des clients
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Deuxième colonne - avec offset initial */}
                <div className="space-y-8 md:mt-12">
                  {/* Transparence */}
                  <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8 flex items-start space-x-6">
                      <Eye className="w-12 h-12 text-pixelify-orange flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-pixelify-charcoal mb-3 font-display">Transparence</h3>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed">
                          Être clair dans les offres, les délais, les limites
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Exigence */}
                  <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8 flex items-start space-x-6">
                      <CheckCircle className="w-12 h-12 text-pixelify-orange flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-pixelify-charcoal mb-3 font-display">Exigence</h3>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed">
                          Proposer des solutions robustes, utiles et bien pensées
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fondateur Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                  <span className="text-pixelify-charcoal">À propos du </span>
                  <span className="text-pixelify-orange">fondateur</span>
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark rounded-full flex items-center justify-center shadow-2xl">
                    <Anchor className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-pixelify-charcoal mb-3 font-display">Mathieu Stalder</h3>
                  <p className="text-pixelify-orange font-semibold text-lg mb-6">Fondateur & CEO</p>
                  <blockquote className="text-lg text-pixelify-charcoal italic font-medium bg-pixelify-slate/20 p-6 rounded-lg max-w-2xl mx-auto">
                    "Comme en navigation, les grands caps se tracent d'abord avec des lignes simples."
                  </blockquote>
                </div>
                
                <div className="space-y-8 text-lg text-pixelify-charcoal leading-relaxed">
                  <p>
                    Navigateur dans l'âme, curieux de ce qui m'entoure et passionné par les systèmes bien pensés, 
                    j'évolue dans le domaine de l'informatique depuis plus de <strong className="text-pixelify-orange">13 ans</strong>, 
                    avec une spécialisation progressive dans le <strong className="text-pixelify-orange">développement web</strong> et 
                    la <strong className="text-pixelify-orange">digitalisation des processus métiers</strong>.
                  </p>
                  
                  <div className="bg-pixelify-slate/10 p-6 rounded-xl">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-4 font-display">Mon parcours</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span><strong>CFC en informatique</strong>, suivi d'une <strong>maturité professionnelle</strong></span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Puis un <strong>Bachelor en informatique de gestion</strong></span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Deux expériences marquantes : <strong>Abacus</strong> (ERP) et <strong>Schwab System</strong> (poste actuel)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-pixelify-orange/10 p-6 rounded-xl">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-4 font-display">Pourquoi cette activité ?</h4>
                    <p>
                      J'ai lancé mon activité car j'ai constaté un besoin fort : celui d'avoir un 
                      <strong className="text-pixelify-orange"> interlocuteur simple, humain et compétent</strong>, 
                      capable de faire le lien entre les idées des entreprises et leur mise en œuvre digitale.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-4 font-display">Ce qui m'anime</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Créer des <strong className="text-pixelify-orange">ponts entre les outils</strong> (et entre les gens)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span><strong className="text-pixelify-orange">Penser les choses dans leur globalité</strong> avant de les construire</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span>Aider des projets à voir le jour grâce à une <strong className="text-pixelify-orange">approche accessible</strong>, pragmatique, mais exigeante</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-pixelify-orange/10 to-pixelify-slate/10 p-6 rounded-xl">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-4 font-display">🧩 Mes expertises clés</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Développement web (fullstack, sur mesure)",
                        "Automatisation de processus internes",
                        "Compréhension stratégique des besoins métiers",
                        "Conseil digital orienté efficacité"
                      ].map((expertise, index) => (
                        <div key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-pixelify-charcoal font-medium">{expertise}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal delay={500}>
            <h2 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal mb-8 font-display">Prêt à Transformer Votre Vision ?</h2>
            <p className="text-xl text-pixelify-charcoal-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Discutons de votre projet et découvrons ensemble comment Pixelify peut vous accompagner 
              vers le succès digital.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white text-lg px-8 py-4 h-auto"
            >
              <Mail className="w-6 h-6 mr-3" />
              Commencer un projet
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer siteInfo={siteInfo} />
    </div>
  );
};

export default About;
