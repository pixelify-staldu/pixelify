import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { useToast } from "@/components/ui/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const captchaApiKey = import.meta.env.VITE_CAPTCHA_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Only check captcha if the API key is available
    if (captchaApiKey && !captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
    )
        .then((result) => {
          toast({
            title: "Message envoyé!",
            description: "Nous revenons vers vous au plus vite",
          });

          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
          
          // Reset captcha if it exists
          if (captchaApiKey) {
            setCaptchaValue(null);
          }
        }, (error) => {
          toast({
            title: "Error",
            description: "Erreur lors de l'envoie du mail. Veuillez réessayer plus tard",
            variant: "destructive",
          });
        });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="container">
        <div 
          ref={sectionRef}
          className="transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="section-title text-center mb-16 mx-auto">
            Nous <span className="text-pixelify-orange">Contacter</span>
            <span className="block w-20 h-1 bg-pixelify-orange mx-auto mt-4"></span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Vous êtes prêt à démarrer votre projet ? Envoyez-nous un message et nous vous contacterons.
          </p>
        </div>

        <div className="flex justify-center items-center mx-auto">
          <form 
            className="lg:col-span-3 bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 "
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Numéro de téléphone
              </label>
              <Input 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+41 79 295 89 07"
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Description de votre projet
              </label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Parlez-nous de votre projet"
                required
                className="w-full min-h-[150px]"
              />
            </div>
            {captchaApiKey && (
              <div className="mb-6">
                <ReCAPTCHA
                    sitekey={captchaApiKey}
                    onChange={handleCaptchaChange}
                />
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-pixelify-orange hover:bg-pixelify-orange-dark text-white py-6"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;