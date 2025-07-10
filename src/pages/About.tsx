
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar, Users, Target, Heart } from 'lucide-react';
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
                Découvrez l'histoire de <strong className="text-pixelify-orange">Pixelify</strong> et la passion qui nous anime pour créer des expériences digitales exceptionnelles.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={200}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-pixelify-charcoal mb-6 title">Notre Histoire</h2>
                <div className="space-y-6">
                  <p className="text-lg text-pixelify-charcoal leading-relaxed">
                    <strong className="text-pixelify-orange">Pixelify</strong> est née d'une vision simple mais ambitieuse : 
                    démocratiser l'accès à des solutions digitales de qualité professionnelle pour toutes les entreprises, 
                    quelle que soit leur taille.
                  </p>
                  <p className="text-lg text-pixelify-charcoal leading-relaxed">
                    Fondée en Suisse, notre agence s'appuie sur les valeurs helvétiques de 
                    <strong className="text-pixelify-orange"> précision, fiabilité et excellence</strong> pour accompagner 
                    nos clients dans leur transformation digitale.
                  </p>
                  <p className="text-lg text-pixelify-charcoal leading-relaxed">
                    Nous croyons que chaque pixel compte dans la création d'une expérience utilisateur mémorable, 
                    d'où notre nom <strong className="text-pixelify-orange">Pixelify</strong> - transformer chaque idée en réalité digitale parfaite.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 mr-3 text-pixelify-orange" />
                      <h3 className="text-xl font-bold text-pixelify-charcoal">Notre Mission</h3>
                    </div>
                    <p className="text-pixelify-charcoal leading-relaxed">
                      Créer des solutions digitales qui transforment les idées en succès concrets, 
                      en alliant créativité suisse et innovation technologique.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Heart className="w-8 h-8 mr-3 text-pixelify-orange" />
                      <h3 className="text-xl font-bold text-pixelify-charcoal">Nos Valeurs</h3>
                    </div>
                    <p className="text-pixelify-charcoal leading-relaxed">
                      Excellence, transparence, proximité client et respect de l'environnement digital suisse.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-20 bg-gradient-to-br from-pixelify-slate to-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={300}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 title">
                <span className="text-pixelify-charcoal">Le </span>
                <span className="text-pixelify-orange">Fondateur</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100">
                <CardContent className="p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark rounded-full flex items-center justify-center">
                        <span className="text-6xl font-bold text-white title">P</span>
                      </div>
                      <h3 className="text-2xl font-bold text-pixelify-charcoal mb-2 title">Fondateur & CEO</h3>
                      <p className="text-pixelify-orange font-semibold">Pixelify</p>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3">Mon Parcours</h4>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed">
                          Passionné par le digital depuis plus de 10 ans, j'ai fondé <strong className="text-pixelify-orange">Pixelify</strong> 
                          avec la conviction que chaque entreprise mérite une présence digitale à la hauteur de ses ambitions.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3">Ma Vision</h4>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed">
                          Créer un pont entre l'innovation technologique et les besoins concrets des entreprises suisses, 
                          en privilégiant toujours la <strong className="text-pixelify-orange">qualité suisse</strong> et 
                          la <strong className="text-pixelify-orange">proximité client</strong>.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-pixelify-charcoal mb-3">Mon Engagement</h4>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed">
                          Chaque projet est une opportunité de dépasser les attentes, d'innover et de contribuer 
                          au succès digital de nos partenaires avec des solutions 
                          <strong className="text-pixelify-orange"> 100% hébergées en Suisse</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={400}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 title">
                <span className="text-pixelify-charcoal">Nos </span>
                <span className="text-pixelify-orange">Engagements</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-pixelify-orange" />
                  <h3 className="text-xl font-bold text-pixelify-charcoal mb-4">100% Suisse</h3>
                  <p className="text-pixelify-charcoal leading-relaxed">
                    Hébergement, développement et support entièrement basés en Suisse pour garantir 
                    sécurité et conformité.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-pixelify-orange" />
                  <h3 className="text-xl font-bold text-pixelify-charcoal mb-4">Proximité Client</h3>
                  <p className="text-pixelify-charcoal leading-relaxed">
                    Accompagnement personnalisé et relation de confiance à long terme avec 
                    chacun de nos partenaires.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-pixelify-orange" />
                  <h3 className="text-xl font-bold text-pixelify-charcoal mb-4">Innovation Continue</h3>
                  <p className="text-pixelify-charcoal leading-relaxed">
                    Veille technologique constante pour proposer les solutions les plus avancées 
                    et performantes du marché.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-pixelify-orange to-pixelify-orange-dark">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal delay={500}>
            <h2 className="text-4xl font-bold text-white mb-6 title">Prêt à Transformer Votre Vision ?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment Pixelify peut vous accompagner 
              vers le succès digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-pixelify-orange hover:bg-gray-50">
                <Mail className="w-5 h-5 mr-2" />
                Nous Contacter
              </Button>
              <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                Voir Nos Réalisations
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
