
import React, {useState, useCallback} from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useToast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ReCAPTCHA from "react-google-recaptcha";

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {toast} = useToast();

    const executeRecaptcha = useCallback(async () => {
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
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation simple
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
            // Exécuter reCAPTCHA v3
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
                description: "Nous vous répondrons dans les plus brefs délais. Vous recevrez également un email de confirmation.",
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                budget: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending contact form:', error);
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
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

    return (
        <>
            {/* Charger reCAPTCHA v3 */}
            <script src="https://www.google.com/recaptcha/api.js?render=6Le4u34rAAAAAA5y0wn761SIAqainfLhoshPeD-S"></script>
            
            <section id="contact" className="py-20 bg-gradient-to-br from-pixelify-blue-light/5 via-white to-pixelify-purple-light/5 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-pixelify-green-light/20 blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-pixelify-purple-light/20 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pixelify-blue-light/20 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-pixelify-charcoal title">
                            Contactez-
                        </span>
                        <span className="text-pixelify-orange title">nous</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Vous avez un projet en tête ? Parlons-en ! Nous sommes là pour vous accompagner
                            et transformer vos idées en réalité digitale.
                        </p>
                    </div>

                    <div className="mx-auto">
                        {/* Contact Form */}
                        <Card className="shadow-xl border-0 animate-fade-in mx-auto w-full max-w-2xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">Parlez-nous de votre projet</h3>
                                <div className="flex justify-center px-4">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Nom complet *
                                                </label>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Votre nom"
                                                    className="border-gray-300 focus:border-pixelify-blue focus:ring-pixelify-blue"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email *
                                                </label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="votre@email.com"
                                                    className="border-gray-300 focus:border-pixelify-blue focus:ring-pixelify-blue"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Entreprise
                                                </label>
                                                <Input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Nom de votre entreprise"
                                                    className="border-gray-300 focus:border-pixelify-blue focus:ring-pixelify-blue"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Téléphone
                                                </label>
                                                <Input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+41 79 123 45 67"
                                                    className="border-gray-300 focus:border-pixelify-blue focus:ring-pixelify-blue"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Type de service
                                                </label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pixelify-blue focus:border-pixelify-blue"
                                                >
                                                    <option value="">Sélectionnez un service</option>
                                                    <option value="design">Site internet</option>
                                                    <option value="ecommerce">Site E-commerce</option>
                                                    <option value="development">Application Web</option>
                                                    <option value="consulting">Consultation Stratégie Digitale</option>
                                                </select>
                                            </div>
                                        </div>

                                         <div>
                                             <label className="block text-sm font-medium text-gray-700 mb-2">
                                                 Décrivez votre projet *
                                             </label>
                                             <Textarea
                                                 name="message"
                                                 value={formData.message}
                                                 onChange={handleChange}
                                                 placeholder="Parlez-nous de votre projet, vos objectifs, vos besoins..."
                                                 rows={5}
                                                 className="border-gray-300 focus:border-pixelify-blue focus:ring-pixelify-blue"
                                                 required
                                             />
                                         </div>

                                         <div className="text-center text-sm text-gray-500">
                                             Ce site est protégé par reCAPTCHA et les{' '}
                                             <a href="https://policies.google.com/privacy" className="text-pixelify-blue hover:underline">
                                                 Règles de confidentialité
                                             </a>{' '}
                                             et{' '}
                                             <a href="https://policies.google.com/terms" className="text-pixelify-blue hover:underline">
                                                 Conditions d'utilisation
                                             </a>{' '}
                                             de Google s'appliquent.
                                         </div>

                                         <Button
                                             type="submit"
                                             size="lg"
                                             disabled={isSubmitting}
                                             className="bg-pixelify-orange hover:bg-pixelify-orange-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                         >
                                             {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                                         </Button>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
