import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Target, Compass, Heart, Anchor, Zap, Shield, Eye, CheckCircle, Settings, Quote, Users, Calendar, MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import aboutHeroImage from '@/assets/about-hero-digital.jpg';

const About = () => {
  const [siteInfo, setSiteInfo] = useState<any>({});
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [timeline, setTimeline] = useState<any[]>([]);

  useEffect(() => {
    fetchSiteInfo();
    fetchTeamMembers();
    fetchTimeline();
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

  const fetchTeamMembers = async () => {
    const { data } = await supabase
      .from('team_members')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (data) {
      setTeamMembers(data);
    }
  };

  const fetchTimeline = async () => {
    const { data } = await supabase
      .from('company_timeline')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (data) {
      setTimeline(data);
    }
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen">
      <Navigation siteInfo={siteInfo} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pixelify-slate to-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={aboutHeroImage} 
            alt="Digital innovation background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pixelify-slate/80 to-gray-50/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 title">
                <span className="text-pixelify-charcoal">À </span>
                <span className="text-pixelify-orange">propos</span>
              </h1>
              <p className="text-xl text-pixelify-charcoal leading-relaxed">
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

      {/* Fondateur - Design moderne et épuré */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            {/* Header de section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pixelify-orange/10 rounded-full mb-6">
                <Anchor className="w-8 h-8 text-pixelify-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal mb-4 title">Le Fondateur</h2>
              <p className="text-xl text-pixelify-charcoal-light">Passionné par la navigation et le digital</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Colonne gauche - Profil */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block">
                    <div className="w-48 h-48 mx-auto lg:mx-0 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <Anchor className="w-24 h-24 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-pixelify-orange/20">
                      <Quote className="w-8 h-8 text-pixelify-orange" />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-4xl font-bold text-pixelify-charcoal mb-2 title">Mathieu Stalder</h3>
                    <p className="text-pixelify-orange font-semibold text-xl mb-6">Fondateur & CEO de Pixelify</p>
                    
                    {/* Citation redesignée */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pixelify-orange max-w-md mx-auto lg:mx-0">
                      <blockquote className="text-lg text-pixelify-charcoal italic leading-relaxed">
                        "Comme en navigation, les grands caps se tracent d'abord avec des lignes simples."
                      </blockquote>
                    </div>

                    {/* Badges d'expertise */}
                    <div className="mt-8">
                      <h4 className="text-lg font-bold text-pixelify-charcoal mb-4 title">Expertises</h4>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {[
                          "13+ ans d'expérience",
                          "Développement web",
                          "Automatisation",
                          "Stratégie digitale"
                        ].map((expertise, index) => (
                          <span key={index} className="bg-gradient-to-r from-pixelify-orange to-pixelify-orange-dark text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
                            {expertise}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Colonne droite - Contenu */}
                <div className="space-y-8">
                  {/* Présentation principale */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-pixelify-orange/10">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-4 title flex items-center">
                      <Settings className="w-6 h-6 mr-3 text-pixelify-orange" />
                      Mon parcours
                    </h4>
                    <p className="text-lg text-pixelify-charcoal leading-relaxed">
                      Navigateur dans l'âme et passionné par les systèmes bien pensés, j'évolue dans le domaine de l'informatique depuis plus de <strong className="text-pixelify-orange">13 ans</strong>, avec une spécialisation dans le <strong className="text-pixelify-orange">développement web</strong> et la <strong className="text-pixelify-orange">digitalisation des processus métiers</strong>.
                    </p>
                  </div>

                  {/* Motivation */}
                  <div className="bg-gradient-to-br from-pixelify-orange/5 to-pixelify-orange/10 p-8 rounded-2xl border border-pixelify-orange/20">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-4 title flex items-center">
                      <Target className="w-6 h-6 mr-3 text-pixelify-orange" />
                      Ma mission
                    </h4>
                    <p className="text-lg text-pixelify-charcoal leading-relaxed">
                      J'ai constaté un besoin fort : avoir un <strong className="text-pixelify-orange">interlocuteur simple, humain et compétent</strong>, capable de faire le lien entre les idées des entreprises et leur mise en œuvre digitale.
                    </p>
                  </div>

                  {/* Valeurs personnelles */}
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-pixelify-orange/10">
                    <h4 className="text-2xl font-bold text-pixelify-charcoal mb-6 title flex items-center">
                      <Heart className="w-6 h-6 mr-3 text-pixelify-orange" />
                      Ce qui me guide
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-3"></div>
                        <span className="text-pixelify-charcoal">Simplicité</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-3"></div>
                        <span className="text-pixelify-charcoal">Transparence</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-3"></div>
                        <span className="text-pixelify-charcoal">Efficacité</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pixelify-orange rounded-full mr-3"></div>
                        <span className="text-pixelify-charcoal">Proximité</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={500}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pixelify-orange/10 rounded-full mb-6">
                <Users className="w-8 h-8 text-pixelify-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal mb-4 title">Notre Équipe</h2>
              <p className="text-xl text-pixelify-charcoal-light">Les talents qui donnent vie à vos projets</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {teamMembers.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <ScrollReveal key={member.id} delay={600 + index * 100}>
                      <Card className="group hover:shadow-xl transition-all duration-300 border-pixelify-orange/20 hover:border-pixelify-orange/40">
                        <CardContent className="p-6 text-center">
                          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {member.image_url ? (
                              <img src={member.image_url} alt={member.name} className="w-full h-full rounded-full object-cover" />
                            ) : (
                              <Users className="w-12 h-12 text-white" />
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-pixelify-charcoal mb-2 title">{member.name}</h3>
                          <p className="text-pixelify-orange font-semibold mb-3">{member.position}</p>
                          {member.bio && (
                            <p className="text-sm text-pixelify-charcoal-light leading-relaxed">{member.bio}</p>
                          )}
                          {member.email && (
                            <div className="mt-4">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="border-pixelify-orange text-pixelify-orange hover:bg-pixelify-orange hover:text-white"
                                onClick={() => window.location.href = `mailto:${member.email}`}
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Contacter
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-32 h-32 mx-auto mb-6 bg-pixelify-orange/10 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-pixelify-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-pixelify-charcoal mb-4 title">Équipe en croissance</h3>
                  <p className="text-pixelify-charcoal-light max-w-2xl mx-auto">
                    Pixelify grandit ! Nous recherchons des talents passionnés pour rejoindre notre équipe. 
                    Vous partagez notre vision du digital accessible et de qualité ? Contactez-nous !
                  </p>
                  <Button 
                    className="mt-6 bg-pixelify-orange hover:bg-pixelify-orange-dark text-white"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Nous rejoindre
                  </Button>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={600}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pixelify-orange/10 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-pixelify-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-pixelify-charcoal mb-4 title">Notre Histoire</h2>
              <p className="text-xl text-pixelify-charcoal-light">Les étapes clés de notre parcours</p>
            </div>

            {timeline.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Ligne centrale pour desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pixelify-orange to-pixelify-orange/30 rounded-full hidden lg:block"></div>
                  
                  <div className="space-y-12">
                    {timeline.map((item, index) => (
                      <ScrollReveal key={item.id} delay={700 + index * 100}>
                        <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                          {/* Contenu */}
                          <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-6 lg:mb-0`}>
                            <Card className={`p-6 shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                              item.is_milestone 
                                ? 'border-pixelify-orange bg-gradient-to-br from-pixelify-orange/5 to-pixelify-orange/10' 
                                : 'border-pixelify-orange/20 bg-white'
                            }`}>
                              <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-pixelify-orange rounded-full text-white font-bold mr-4">
                                  {item.year}
                                </div>
                                {item.is_milestone && (
                                  <div className="px-3 py-1 bg-pixelify-orange text-white text-xs font-semibold rounded-full">
                                    Milestone
                                  </div>
                                )}
                              </div>
                              <h3 className="text-xl font-bold text-pixelify-charcoal mb-3 title">{item.title}</h3>
                              <p className="text-pixelify-charcoal leading-relaxed">{item.description}</p>
                            </Card>
                          </div>

                          {/* Point central pour desktop */}
                          <div className="hidden lg:block w-6 h-6 bg-pixelify-orange rounded-full border-4 border-white shadow-lg z-10"></div>
                          
                          {/* Espace vide pour l'autre côté */}
                          <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}></div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
