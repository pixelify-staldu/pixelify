
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Target, Compass, Heart, Building, Users, Globe, ShoppingCart, Puzzle, BarChart3, MessageSquare, Anchor } from 'lucide-react';
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
      <section className="pt-24 pb-12 bg-gradient-to-br from-pixelify-slate to-gray-50 relative overflow-hidden">
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

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 mr-3 text-pixelify-orange" />
                <h2 className="text-4xl font-bold text-pixelify-charcoal title">Vision – Raison d'être</h2>
              </div>
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100">
                <CardContent className="p-12">
                  <blockquote className="text-xl text-pixelify-charcoal leading-relaxed italic">
                    "Nous sommes convaincus qu'un site web ne se limite pas à un design séduisant. 
                    Il doit offrir une <strong className="text-pixelify-orange">expérience utilisateur intuitive</strong> capable 
                    de générer des résultats concrets."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-pixelify-slate to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={300}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 mr-3 text-pixelify-orange" />
                <h2 className="text-4xl font-bold text-pixelify-charcoal title">Mission</h2>
              </div>
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100">
                <CardContent className="p-12">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 mr-3 text-pixelify-orange" />
                <h2 className="text-4xl font-bold text-pixelify-charcoal title">Valeurs</h2>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Simplicité", desc: "Rendre le digital compréhensible et accessible" },
                { title: "Transparence", desc: "Être clair dans les offres, les délais, les limites" },
                { title: "Fiabilité", desc: "Être un partenaire de confiance sur le long terme" },
                { title: "Exigence", desc: "Proposer des solutions robustes, utiles et bien pensées" },
                { title: "Agilité", desc: "S'adapter aux besoins concrets des clients" }
              ].map((valeur, index) => (
                <Card key={index} className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-pixelify-charcoal mb-4">{valeur.title}</h3>
                    <p className="text-pixelify-charcoal leading-relaxed">{valeur.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Positionnement Section */}
      <section className="py-20 bg-gradient-to-br from-pixelify-slate to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={500}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Building className="w-8 h-8 mr-3 text-pixelify-orange" />
                <h2 className="text-4xl font-bold text-pixelify-charcoal title">Positionnement</h2>
              </div>
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100">
                <CardContent className="p-12">
                  <blockquote className="text-xl text-pixelify-charcoal leading-relaxed mb-6 italic">
                    "Un partenaire digital suisse indépendant, spécialisé dans la création de solutions web sur mesure 
                    — du site vitrine à l'application métier complexe."
                  </blockquote>
                  <p className="text-lg text-pixelify-charcoal leading-relaxed">
                    Notre approche repose sur la <strong className="text-pixelify-orange">qualité</strong>, 
                    la <strong className="text-pixelify-orange">confidentialité</strong> et 
                    la <strong className="text-pixelify-orange">proximité</strong>, avec un 
                    <strong className="text-pixelify-orange"> hébergement exclusivement en Suisse</strong>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cible idéale Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={600}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-12">
                <Users className="w-8 h-8 mr-3 text-pixelify-orange" />
                <h2 className="text-4xl font-bold text-pixelify-charcoal title">Cible idéale</h2>
              </div>
              
              <Card className="bg-white shadow-xl border border-gray-100">
                <CardContent className="p-12">
                  <p className="text-xl text-pixelify-charcoal leading-relaxed mb-8 italic">
                    "Associations, artisans, PME – tous secteurs confondus – avec un besoin de :"
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "(Re)concevoir un site internet professionnel",
                      "Automatiser certaines tâches de leur quotidien",
                      "Gagner en visibilité et en efficacité digitale",
                      "Structurer leurs outils ou leur organisation"
                    ].map((besoin, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-lg text-pixelify-charcoal">{besoin}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Offres & Services Section */}
      <section className="py-20 bg-gradient-to-br from-pixelify-slate to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={700}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-pixelify-charcoal title mb-6">🧰 Offres & Services</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Globe className="w-8 h-8 mr-3 text-pixelify-orange" />
                    <h3 className="text-2xl font-bold text-pixelify-charcoal">Conception de sites internet</h3>
                  </div>
                  <p className="text-pixelify-charcoal leading-relaxed">
                    Sites vitrines modernes, rapides et sur mesure, pensés pour refléter l'identité de votre marque 
                    et offrir une UX fluide et professionnelle.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="w-8 h-8 mr-3 text-pixelify-orange" />
                    <h3 className="text-2xl font-bold text-pixelify-charcoal">Site e-commerce</h3>
                  </div>
                  <p className="text-pixelify-charcoal leading-relaxed">
                    Boutiques en ligne sécurisées avec hébergement suisse. Gestion intuitive des produits, stocks, 
                    paiements et clients, avec une forte exigence en protection des données.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Puzzle className="w-8 h-8 mr-3 text-pixelify-orange" />
                    <h3 className="text-2xl font-bold text-pixelify-charcoal">Applications Web Sur Mesure</h3>
                  </div>
                  <p className="text-pixelify-charcoal leading-relaxed">
                    Développement de portails métiers, plateformes spécifiques et outils internes. 
                    Backend hébergé en Suisse, orienté performance et confidentialité.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-8 h-8 mr-3 text-pixelify-orange" />
                    <h3 className="text-2xl font-bold text-pixelify-charcoal">Consulting & Stratégie Digitale</h3>
                  </div>
                  <p className="text-pixelify-charcoal leading-relaxed">
                    Audit, recommandations et accompagnement stratégique pour construire une présence 
                    numérique cohérente et efficace.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Style de communication Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={800}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 mr-3 text-pixelify-orange" />
                <h2 className="text-4xl font-bold text-pixelify-charcoal title">Style de communication</h2>
              </div>
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100">
                <CardContent className="p-12">
                  <blockquote className="text-xl text-pixelify-charcoal leading-relaxed mb-6 italic">
                    "Professionnel, accessible et direct."
                  </blockquote>
                  <p className="text-lg text-pixelify-charcoal leading-relaxed mb-6">
                    On vulgarise quand c'est utile, on évite le jargon inutile.
                  </p>
                  <p className="text-lg text-pixelify-charcoal leading-relaxed">
                    L'objectif est d'être un <strong className="text-pixelify-orange">partenaire pédagogue</strong>, 
                    pas juste un prestataire technique.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fondateur Section */}
      <section className="py-20 bg-gradient-to-br from-pixelify-slate to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={900}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 title">
                <span className="text-pixelify-charcoal">À propos du </span>
                <span className="text-pixelify-orange">fondateur</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100">
                <CardContent className="p-12">
                  <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1 text-center">
                      <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark rounded-full flex items-center justify-center">
                        <Anchor className="w-24 h-24 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-pixelify-charcoal mb-2 title">Mathieu Stalder</h3>
                      <p className="text-pixelify-orange font-semibold mb-4">Fondateur & CEO</p>
                      <blockquote className="text-sm text-pixelify-charcoal italic">
                        "Comme en navigation, les grands caps se tracent d'abord avec des lignes simples."
                      </blockquote>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed mb-4">
                          Navigateur dans l'âme, curieux de ce qui m'entoure et passionné par les systèmes bien pensés, 
                          j'évolue dans le domaine de l'informatique depuis plus de <strong className="text-pixelify-orange">13 ans</strong>, 
                          avec une spécialisation progressive dans le <strong className="text-pixelify-orange">développement web</strong> et 
                          la <strong className="text-pixelify-orange">digitalisation des processus métiers</strong>.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3">Mon parcours</h4>
                        <ul className="space-y-2 text-pixelify-charcoal">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span><strong>CFC en informatique</strong>, suivi d'une <strong>maturité professionnelle</strong></span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Puis un <strong>Bachelor en informatique de gestion</strong></span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Deux expériences marquantes : <strong>Abacus</strong> (ERP) et <strong>Schwab System</strong> (poste actuel)</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3">Pourquoi cette activité ?</h4>
                        <p className="text-pixelify-charcoal leading-relaxed mb-4">
                          J'ai lancé mon activité car j'ai constaté un besoin fort : celui d'avoir un 
                          <strong className="text-pixelify-orange"> interlocuteur simple, humain et compétent</strong>, 
                          capable de faire le lien entre les idées des entreprises et leur mise en œuvre digitale.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3">Ce qui m'anime</h4>
                        <ul className="space-y-2 text-pixelify-charcoal">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Créer des <strong className="text-pixelify-orange">ponts entre les outils</strong> (et entre les gens)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span><strong className="text-pixelify-orange">Penser les choses dans leur globalité</strong> avant de les construire</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Aider des projets à voir le jour grâce à une <strong className="text-pixelify-orange">approche accessible</strong>, pragmatique, mais exigeante</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3">🧩 Mes expertises clés</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {[
                            "Développement web (fullstack, sur mesure)",
                            "Automatisation de processus internes",
                            "Compréhension stratégique des besoins métiers",
                            "Conseil digital orienté efficacité"
                          ].map((expertise, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-pixelify-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-pixelify-charcoal font-medium">{expertise}</span>
                            </div>
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal delay={1000}>
            <h2 className="text-4xl font-bold text-white mb-6 title">Prêt à Transformer Votre Vision ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment Pixelify peut vous accompagner 
              vers le succès digital.
            </p>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="bg-white text-pixelify-orange hover:bg-gray-50"
            >
              <Mail className="w-5 h-5 mr-2" />
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
