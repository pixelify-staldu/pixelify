-- Phase 2: Create tables and insert data

-- Insert FAQ section into site_sections
INSERT INTO public.site_sections (section_type, is_visible, display_order) 
VALUES ('faq', true, 6);

-- Create team_members table
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  linkedin_url TEXT,
  email TEXT,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on team_members
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policies for team_members
CREATE POLICY "Anyone can view team members" 
ON public.team_members 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage team members" 
ON public.team_members 
FOR ALL 
USING (is_admin(auth.uid()));

-- Create company_timeline table
CREATE TABLE public.company_timeline (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  year INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  is_milestone BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on company_timeline
ALTER TABLE public.company_timeline ENABLE ROW LEVEL SECURITY;

-- Create policies for company_timeline
CREATE POLICY "Anyone can view timeline" 
ON public.company_timeline 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage timeline" 
ON public.company_timeline 
FOR ALL 
USING (is_admin(auth.uid()));

-- Create faq_items table
CREATE TABLE public.faq_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on faq_items
ALTER TABLE public.faq_items ENABLE ROW LEVEL SECURITY;

-- Create policies for faq_items
CREATE POLICY "Anyone can view FAQ items" 
ON public.faq_items 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage FAQ items" 
ON public.faq_items 
FOR ALL 
USING (is_admin(auth.uid()));

-- Insert example team member (Mathieu)
INSERT INTO public.team_members (name, position, bio, is_featured, display_order, email) VALUES 
('Mathieu Stalder', 'Fondateur & Développeur Full-Stack', 'Passionné de technologie avec plus de 10 ans d''expérience dans le développement web. Expert en React, Node.js et solutions cloud. Mathieu combine expertise technique et vision business pour créer des solutions digitales innovantes.', true, 1, 'mathieu@pixelify.ch');

-- Insert company timeline data
INSERT INTO public.company_timeline (year, title, description, is_milestone, display_order) VALUES 
(2024, 'Fondation de Pixelify', 'Lancement de Pixelify avec la vision de démocratiser le digital pour les PME suisses.', true, 1),
(2024, 'Premiers projets', 'Développement des premières solutions pour nos clients pilotes dans différents secteurs.', false, 2),
(2024, 'Partenariats locaux', 'Établissement de partenariats avec des entreprises suisses pour renforcer notre écosystème.', false, 3);

-- Insert FAQ items
INSERT INTO public.faq_items (question, answer, category, is_featured, display_order) VALUES 
('Quels sont vos délais de réalisation ?', 'Nos délais varient selon la complexité du projet. En général, un site vitrine prend 2-3 semaines, une application web 4-8 semaines. Nous vous donnons toujours un planning détaillé après notre première consultation.', 'processus', true, 1),
('Proposez-vous de la maintenance ?', 'Oui, nous proposons des contrats de maintenance adaptés à vos besoins : mises à jour de sécurité, sauvegarde, monitoring et support technique. Nos forfaits débutent à partir de 150 CHF/mois.', 'support', true, 2),
('Travaillez-vous avec des frameworks spécifiques ?', 'Nous utilisons principalement React, Next.js, Node.js et des solutions cloud modernes. Nos choix technologiques sont toujours adaptés aux besoins spécifiques de votre projet.', 'technique', true, 3),
('Quels sont vos tarifs ?', 'Nos tarifs sont transparents et adaptés à votre budget. Site vitrine dès 2''500 CHF, boutique en ligne dès 5''000 CHF, application web sur mesure dès 8''000 CHF. Contactez-nous pour un devis personnalisé.', 'tarifs', true, 4),
('Où êtes-vous basés ?', 'Nous sommes basés en Suisse et travaillons principalement avec des entreprises suisses. Nous pouvons nous déplacer dans toute la Suisse romande pour nos projets importants.', 'general', false, 5),
('Faites-vous du référencement (SEO) ?', 'Absolument ! Le SEO est intégré dès la conception de votre site. Nous optimisons la structure, la vitesse, le contenu et proposons des audits SEO réguliers pour maintenir votre visibilité.', 'technique', false, 6);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_timeline_updated_at
  BEFORE UPDATE ON public.company_timeline
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_faq_items_updated_at
  BEFORE UPDATE ON public.faq_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();