import React from 'react';
import {Card, CardContent} from "@/components/ui/card";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-br from-pixelify-slate to-gray-50 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 title">
                        <span className="text-pixelify-charcoal title">À </span>
                        <span className="text-pixelify-orange title">propos</span>
                    </h2>
                    {/*<div className="w-24 h-1 bg-pixelify-orange mx-auto rounded-full"></div>*/}
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Content */}
                    <div className="space-y-6 animate-fade-in">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-pixelify-charcoal mb-4">Notre Vision</h3>
                            <p className="text-lg text-pixelify-charcoal leading-relaxed">
                                Chez <strong>Pixelify</strong>, nous sommes convaincus qu'un site web ne se limite pas à un simple design séduisant. 
                                Il doit offrir une <strong className="text-pixelify-orange">expérience utilisateur intuitive</strong> capable de générer des résultats concrets.
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold text-pixelify-charcoal mb-4">Notre Approche</h3>
                            <p className="text-lg text-pixelify-charcoal leading-relaxed">
                                Notre méthode combine <strong className="text-pixelify-orange">créativité, stratégie et savoir-faire suisse</strong> 
                                pour développer des solutions digitales performantes, parfaitement adaptées aux besoins d'un marché numérique concurrentiel.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Values Cards */}
                    <div className="grid gap-6 animate-fade-in">
                        {/*<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">*/}
                        {/*    <div className="flex items-center mb-4">*/}
                        {/*        <h4 className="text-xl font-bold">100% Hébergement Suisse</h4>*/}
                        {/*    </div>*/}
                        {/*    <p className="leading-relaxed">*/}
                        {/*        Toutes vos données stockées exclusivement en Suisse, garantissant sécurité maximale et conformité légale.*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-100 shadow-lg">
                            <h3 className="text-2xl font-bold text-pixelify-charcoal mb-4">Notre Engagement</h3>
                            <p className="text-lg text-pixelify-charcoal leading-relaxed">
                                Engagés pour la qualité et la proximité, nous collaborons avec des
                                <strong className="text-pixelify-orange"> partenaires suisses</strong> et privilégions des
                                <strong className="text-pixelify-orange"> hébergements localisés en Suisse</strong>,
                                garantissant un haut niveau de fiabilité et de sécurité.
                            </p>
                        </div>

                        {/*<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">*/}
                        {/*    <div className="flex items-center mb-4">*/}
                        {/*        <svg className="w-8 h-8 mr-3 text-pixelify-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">*/}
                        {/*            <circle cx="12" cy="12" r="10"/>*/}
                        {/*            <polyline points="12,6 12,12 16,14"/>*/}
                        {/*        </svg>*/}
                        {/*        <h4 className="text-xl font-bold text-pixelify-charcoal">Performance Optimale</h4>*/}
                        {/*    </div>*/}
                        {/*    <p className="text-pixelify-charcoal leading-relaxed">*/}
                        {/*        Sites web optimisés pour une vitesse de chargement exceptionnelle et une expérience utilisateur fluide.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/* Bottom Commitment */}
                <div className="text-center animate-fade-in">

                </div>
            </div>
        </section>
    );
};

export default AboutSection;