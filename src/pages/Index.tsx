
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useSiteConfig } from '@/context/SiteConfigContext';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const { config } = useSiteConfig();
  const { visibleSections } = config;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {visibleSections.hero && <HeroSection />}
      {visibleSections.services && <ServicesSection />}
      {visibleSections.portfolio && <PortfolioSection />}
      {visibleSections.about && <AboutSection />}
      {visibleSections.testimonials && <TestimonialsSection />}
      {visibleSections.contact && <ContactSection />}
      <Footer />
    </div>
  );
};

export default Index;
