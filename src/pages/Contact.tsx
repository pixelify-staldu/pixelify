import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from "@/hooks/use-toast";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [siteInfo, setSiteInfo] = useState<any>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Nouvelle demande de contact',
          message: formData.message,
          recaptcha_token: 'demo-token' // You can implement reCAPTCHA later
        }
      });

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation siteInfo={siteInfo} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white relative">
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pixelify-orange/10 rounded-full mb-8">
                <Mail className="w-10 h-10 text-pixelify-orange" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pixelify-charcoal title">
                Contactez-
                <span className="text-pixelify-orange"> nous</span>
              </h1>
              
              <p className="text-xl text-pixelify-charcoal-light leading-relaxed mb-8 max-w-3xl mx-auto">
                Vous avez un projet en tête ? Nous sommes là pour vous accompagner 
                et donner vie à vos idées les plus ambitieuses.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Contact Information */}
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-pixelify-charcoal mb-6">
                    Parlons de votre projet
                  </h2>
                  <p className="text-pixelify-charcoal-light text-lg leading-relaxed">
                    Notre équipe d'experts est prête à vous accompagner dans la réalisation 
                    de vos projets digitaux. Contactez-nous pour une consultation gratuite.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gray-50 border-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pixelify-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-pixelify-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pixelify-charcoal mb-2">Email</h3>
                        <p className="text-pixelify-charcoal-light">contact@pixelify.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gray-50 border-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pixelify-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-pixelify-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pixelify-charcoal mb-2">Téléphone</h3>
                        <p className="text-pixelify-charcoal-light">+33 1 23 45 67 89</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gray-50 border-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pixelify-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-pixelify-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pixelify-charcoal mb-2">Adresse</h3>
                        <p className="text-pixelify-charcoal-light">Paris, France</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gray-50 border-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pixelify-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-pixelify-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pixelify-charcoal mb-2">Horaires</h3>
                        <p className="text-pixelify-charcoal-light">Lun - Ven: 9h - 18h</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-8 bg-pixelify-orange/5 border border-pixelify-orange/20">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-8 h-8 text-pixelify-orange flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-pixelify-charcoal mb-3 text-lg">
                        Réponse garantie sous 24h
                      </h3>
                      <p className="text-pixelify-charcoal-light leading-relaxed">
                        Nous nous engageons à répondre à votre demande dans les plus brefs délais. 
                        Votre projet mérite toute notre attention.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={400}>
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-pixelify-charcoal mb-3">
                      Envoyez-nous un message
                    </h3>
                    <p className="text-pixelify-charcoal-light">
                      Décrivez-nous votre projet et nous vous répondrons rapidement.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom"
                          className="w-full h-12 border-gray-200 focus:border-pixelify-orange focus:ring-pixelify-orange"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="votre@email.com"
                          className="w-full h-12 border-gray-200 focus:border-pixelify-orange focus:ring-pixelify-orange"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                        Sujet
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Objet de votre message"
                        className="w-full h-12 border-gray-200 focus:border-pixelify-orange focus:ring-pixelify-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                        rows={6}
                        className="w-full border-gray-200 focus:border-pixelify-orange focus:ring-pixelify-orange resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-pixelify-orange hover:bg-pixelify-orange-dark text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Envoyer le message</span>
                        </div>
                      )}
                    </Button>

                    <p className="text-sm text-pixelify-charcoal-light text-center">
                      * Champs obligatoires
                    </p>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer siteInfo={siteInfo} />
    </div>
  );
};

export default Contact;