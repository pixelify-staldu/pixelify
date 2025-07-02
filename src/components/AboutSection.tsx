import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {TopRightPixels} from './PixelDecoration';

const AboutSection = () => {
    const values = [
        {
            title: "Hébergement 100% Suisse",
            description: "Toutes vos données sont stockées exclusivement en Suisse, garantissant sécurité maximale et conformité aux lois helvétiques strictes.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4"/>
                </svg>
            ),
        },
        {
            title: "Performance Optimale",
            description: "Nos sites web sont optimisés pour une vitesse de chargement exceptionnelle et une expérience utilisateur fluide.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                </svg>
            ),
        },
        {
            title: "Sécurité Renforcée",
            description: "Protection maximale de vos données avec certificats SSL, sauvegardes automatiques et surveillance 24h/24.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
            ),
        },
        {
            title: "Design Sur Mesure",
            description: "Création d'interfaces uniques et responsives, adaptées à votre image de marque et à vos objectifs business.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path
                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
            ),
        },
        {
            title: "Support Local",
            description: "Une équipe francophone basée en Suisse pour un accompagnement personnalisé et une communication fluide.",
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ),
        },
    ];

    return (
        <section id="about" className="py-20 bg-pixelify-slate relative">

            <div className="container mx-auto px-4">


                {/* Swiss Advantage Section */}
                <div className="mb-8 animate-fade-in">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative">
                        <div className="flex items-center justify-center gap-4">
                            <div className="text-center mb-8 animate-fade-in relative">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                                    <span className="text-pixelify-charcoal">
                                        A{' '}
                                    </span>
                                    <span className="text-pixelify-orange">propos</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed text-center max-w-4xl mx-auto">
                            Chez <strong>Pixelify</strong>, nous sommes convaincus qu’un site web ne se limite pas à un
                            simple design séduisant.
                            Il doit offrir une <strong>expérience utilisateur intuitive et efficace</strong>, capable de
                            générer des résultats concrets.
                        </p>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed text-center max-w-4xl mx-auto mt-4">
                            Notre approche combine <strong>créativité</strong>, <strong>stratégie</strong> et <strong>savoir-faire
                            suisse</strong>,
                            afin de développer des solutions digitales <strong>performantes et distinctives</strong>,
                            parfaitement adaptées aux besoins
                            d’un marché numérique toujours plus concurrentiel.
                        </p>
                        <p className="text-lg text-pixelify-charcoal leading-relaxed text-center max-w-4xl mx-auto mt-4">
                            Engagés pour la qualité et la proximité, nous mettons un point d’honneur à collaborer avec
                            des <strong>partenaires suisses</strong> et à privilégier des <strong>hébergements localisés
                            en Suisse</strong>,
                            garantissant ainsi un haut niveau de fiabilité et de sécurité.
                        </p>
                    </div>
                </div>

                {/* Values Section */}
                {/*  <div className="mb-20">*/}
                {/*    <h3 className="text-3xl font-bold mb-12 text-pixelify-charcoal text-center animate-fade-in relative">*/}
                {/*      Nos Garanties*/}
                {/*    </h3>*/}
                {/*    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                {/*      {values.map((value, index) => (*/}
                {/*        <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-pixelify-orange/20 relative">*/}
                {/*          <CardContent className="p-6 text-center">*/}
                {/*            <div className="mb-4 text-pixelify-charcoal group-hover:text-pixelify-orange transition-colors duration-300 flex justify-center">*/}
                {/*              {value.icon}*/}
                {/*            </div>*/}
                {/*            <h4 className="text-xl font-bold mb-3 text-pixelify-charcoal">*/}
                {/*              {value.title}*/}
                {/*            </h4>*/}
                {/*            <p className="text-pixelify-charcoal leading-relaxed text-sm">*/}
                {/*              {value.description}*/}
                {/*            </p>*/}
                {/*          </CardContent>*/}
                {/*        </Card>*/}
                {/*      ))}*/}
                {/*    </div>*/}
                {/*  </div>*/}

                {/*  /!* CTA Section *!/*/}
                {/*  <div className="text-center mt-16 animate-fade-in">*/}
                {/*    <div className="bg-pixelify-orange/5 rounded-2xl p-8 max-w-4xl mx-auto border border-pixelify-orange/10 relative">*/}
                {/*      <h3 className="text-3xl font-bold mb-4 text-pixelify-charcoal">*/}
                {/*        Prêt pour un site web 100% suisse ?*/}
                {/*      </h3>*/}
                {/*      <p className="text-lg text-pixelify-charcoal mb-6">*/}
                {/*        Contactez-nous pour créer votre site web avec la sécurité et la performance de l'hébergement suisse exclusif.*/}
                {/*      </p>*/}
                {/*      <button */}
                {/*        onClick={() => {*/}
                {/*          const element = document.getElementById('contact');*/}
                {/*          if (element) element.scrollIntoView({ behavior: 'smooth' });*/}
                {/*        }}*/}
                {/*        className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"*/}
                {/*      >*/}
                {/*        Découvrir nos offres*/}
                {/*      </button>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default AboutSection;
