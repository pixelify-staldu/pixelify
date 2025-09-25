
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

import { supabase } from '@/integrations/supabase/client';

const Index = () => {
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
      <Navigation siteInfo={siteInfo}/>
      <HeroSection siteInfo={siteInfo}/>
      <ScrollReveal delay={100}>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <ContactSection />
      </ScrollReveal>
      <Footer siteInfo={siteInfo}/>
    </div>
  );
};

export default Index;
