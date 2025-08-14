import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [siteInfo, setSiteInfo] = useState<any>({});
    const { toast } = useToast();

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

    const executeRecaptcha = async () => {
        if (!window.grecaptcha) {
            throw new Error('reCAPTCHA not loaded');
        }
        
        return new Promise((resolve, reject) => {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute('6Le4u34rAAAAAA5y0wn761SIAqainfLhoshPeD-S', {action: 'contact_form'})
                    .then((token: string) => {
                        resolve(token);
                    })
                    .catch((error: any) => {
                        reject(error);
                    });
            });
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
            const captchaToken = await executeRecaptcha();

            const { data, error } = await supabase.functions.invoke('send-contact-email', {
                body: {
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    captchaToken: captchaToken
                }
            });

            if (error) {
                throw error;
            }

            toast({
                title: "Message envoyé !",
                description: "Nous vous répondrons dans les plus brefs délais.",
            });

            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending contact form:', error);
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de l'envoi du message.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: siteInfo.email || "contact@pixelify.ch",
            href: `mailto:${siteInfo.email || "contact@pixelify.ch"}`
        },
        {
            icon: Phone,
            title: "Téléphone",
            value: siteInfo.phone || "+41 79 123 45 67",
            href: `tel:${siteInfo.phone || "+41791234567"}`
        },
        {
            icon: MapPin,
            title: "Adresse",
            value: siteInfo.address || "Suisse",
            href: null
        },
        {
            icon: Clock,
            title: "Horaires",
            value: "Lun-Ven 9h-18h",
            href: null
        }
    ];

    return (
        <>
            <script src="https://www.google.com/recaptcha/api.js?render=6Le4u34rAAAAAA5y0wn761SIAqainfLhoshPeD-S"></script>
            
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                {/* Header */}
                <header className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-50">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="flex items-center gap-3 text-pixelify-charcoal hover:text-pixelify-orange transition-colors">
                                <ArrowLeft size={20} />
                                <span className="font-medium">Retour à l'accueil</span>
                            </Link>
                            <h1 className="text-2xl font-bold text-pixelify-charcoal">Contact</h1>
                            <div className="w-32"></div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-r from-pixelify-navy to-pixelify-teal text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Parlons de votre projet
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Vous avez une idée ? Nous avons les compétences pour la concrétiser. 
                            Contactez-nous pour démarrer votre transformation digitale.
                        </p>
                    </div>
                </section>

                {/* Contact Cards */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {contactInfo.map((item, index) => (
                                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
                                    <CardContent className="p-0">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 bg-gradient-to-r from-pixelify-navy to-pixelify-teal rounded-full flex items-center justify-center mb-4">
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="font-semibold text-pixelify-charcoal mb-2">{item.title}</h3>
                                            {item.href ? (
                                                <a 
                                                    href={item.href} 
                                                    className="text-pixelify-charcoal-light hover:text-pixelify-orange transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-pixelify-charcoal-light">{item.value}</p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <div className="max-w-4xl mx-auto">
                            <Card className="shadow-xl border-0 overflow-hidden">
                                <div className="grid lg:grid-cols-2">
                                    {/* Form */}
                                    <CardContent className="p-8 lg:p-12">
                                        <h3 className="text-3xl font-bold mb-2 text-pixelify-charcoal">
                                            Démarrons ensemble
                                        </h3>
                                        <p className="text-pixelify-charcoal-light mb-8">
                                            Remplissez ce formulaire et nous vous recontacterons rapidement.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-4">
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
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                                                        Entreprise
                                                    </label>
                                                    <Input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        placeholder="Nom de votre entreprise"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                                                        Téléphone
                                                    </label>
                                                    <Input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="+41 79 123 45 67"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                                                    Type de service
                                                </label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    <option value="">Sélectionnez un service</option>
                                                    <option value="design">Site internet</option>
                                                    <option value="ecommerce">Site E-commerce</option>
                                                    <option value="development">Application Web</option>
                                                    <option value="consulting">Consultation Stratégie Digitale</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-pixelify-charcoal mb-2">
                                                    Décrivez votre projet *
                                                </label>
                                                <Textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Parlez-nous de votre projet, vos objectifs, vos besoins..."
                                                    rows={5}
                                                    required
                                                />
                                            </div>

                                            <div className="text-center text-sm text-pixelify-charcoal-light">
                                                Ce site est protégé par reCAPTCHA
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={isSubmitting}
                                                className="w-full bg-pixelify-orange hover:bg-pixelify-orange-dark text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                                            >
                                                <Send className="w-5 h-5 mr-2" />
                                                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                                            </Button>
                                        </form>
                                    </CardContent>

                                    {/* Info Panel */}
                                    <div className="bg-gradient-to-br from-pixelify-navy to-pixelify-teal p-8 lg:p-12 text-white">
                                        <h3 className="text-2xl font-bold mb-6">Pourquoi nous choisir ?</h3>
                                        
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <span className="text-sm font-bold">1</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Expertise technique</h4>
                                                    <p className="text-white/80 text-sm">
                                                        Des solutions sur-mesure avec les dernières technologies
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <span className="text-sm font-bold">2</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Accompagnement personnalisé</h4>
                                                    <p className="text-white/80 text-sm">
                                                        Un suivi attentif tout au long de votre projet
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                    <span className="text-sm font-bold">3</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Résultats garantis</h4>
                                                    <p className="text-white/80 text-sm">
                                                        Performance et qualité au cœur de nos réalisations
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-white/20">
                                            <p className="text-white/80 text-sm">
                                                💬 <strong>Réponse garantie sous 24h</strong><br />
                                                Nous nous engageons à répondre rapidement à votre demande.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;