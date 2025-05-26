
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Design Web & UX/UI",
      description: "Création d'interfaces utilisateur modernes et intuitives qui captivent vos visiteurs et optimisent l'expérience utilisateur.",
      features: ["Design responsive", "Prototypage interactif", "Tests utilisateurs", "Identité visuelle"],
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Développement Web",
      description: "Développement de sites web performants et évolutifs avec les dernières technologies du marché.",
      features: ["React/Next.js", "Applications sur mesure", "API REST", "Optimisation performance"],
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce",
      description: "Solutions de commerce électronique complètes pour booster vos ventes en ligne avec des plateformes sécurisées.",
      features: ["Boutique en ligne", "Paiement sécurisé", "Gestion inventaire", "Analytics avancées"],
      icon: "🛒",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "SEO & Marketing Digital",
      description: "Optimisation de votre visibilité en ligne et stratégies marketing pour attirer et convertir vos prospects.",
      features: ["Référencement naturel", "Google Ads", "Content marketing", "Analyse de performance"],
      icon: "📈",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Applications Mobiles",
      description: "Développement d'applications mobiles natives et cross-platform pour iOS et Android.",
      features: ["Apps natives", "React Native", "UI/UX mobile", "App Store optimization"],
      icon: "📱",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Maintenance & Support",
      description: "Support technique continu, mises à jour de sécurité et évolutions de votre site web.",
      features: ["Support 24/7", "Mises à jour", "Sauvegardes", "Monitoring performance"],
      icon: "🔧",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pixelify-blue to-pixelify-purple bg-clip-text text-transparent">
              Nos Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous offrons une gamme complète de services web pour répondre à tous vos besoins digitaux, 
            de la conception à la maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8 relative">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.gradient}`}></div>
                
                <div className="text-4xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center group-hover:text-pixelify-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className={`text-transparent bg-gradient-to-r ${service.gradient} bg-clip-text font-semibold hover:underline transition-all duration-300`}>
                    En savoir plus →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-pixelify-blue/10 to-pixelify-purple/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Prêt à transformer votre présence digitale ?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-pixelify-blue to-pixelify-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pixelify-blue-dark hover:to-pixelify-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
