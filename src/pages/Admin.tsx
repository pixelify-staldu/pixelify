import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const { user, isAdmin, signOut, loading } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('sections');

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-pixelify-black">Administration</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{user.email}</span>
              <Button 
                onClick={signOut}
                variant="outline"
              >
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-4 mb-6">
          <Button
            onClick={() => setActiveTab('sections')}
            variant={activeTab === 'sections' ? 'default' : 'outline'}
          >
            Gestion des sections
          </Button>
          <Button
            onClick={() => setActiveTab('info')}
            variant={activeTab === 'info' ? 'default' : 'outline'}
          >
            Infos du site
          </Button>
          <Button
            onClick={() => setActiveTab('portfolio')}
            variant={activeTab === 'portfolio' ? 'default' : 'outline'}
          >
            Portfolio
          </Button>
        </div>

        {/* Content */}
        {activeTab === 'sections' && <SectionsManager />}
        {activeTab === 'info' && <SiteInfoManager />}
        {activeTab === 'portfolio' && <PortfolioManager />}
      </div>
    </div>
  );
};

// Sections Manager Component
const SectionsManager = () => {
  const [sections, setSections] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    const { data, error } = await supabase
      .from('site_sections')
      .select('*')
      .order('display_order');
    
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      setSections(data || []);
    }
  };

  const updateSection = async (id: string, updates: any) => {
    const { error } = await supabase
      .from('site_sections')
      .update(updates)
      .eq('id', id);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Section mise à jour' });
      fetchSections();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestion des sections</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="flex items-center justify-between p-4 border rounded">
              <div>
                <h3 className="font-medium capitalize">{section.section_type}</h3>
                <p className="text-sm text-gray-500">Ordre: {section.display_order}</p>
              </div>
              <Switch
                checked={section.is_visible}
                onCheckedChange={(checked) => updateSection(section.id, { is_visible: checked })}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Site Info Manager Component
const SiteInfoManager = () => {
  const [siteInfo, setSiteInfo] = useState<any>({});
  const { toast } = useToast();

  useEffect(() => {
    fetchSiteInfo();
  }, []);

  const fetchSiteInfo = async () => {
    const { data, error } = await supabase
      .from('site_info')
      .select('*')
      .single();
    
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      setSiteInfo(data || {});
    }
  };

  const updateSiteInfo = async () => {
    const { error } = await supabase
      .from('site_info')
      .update(siteInfo)
      .eq('id', siteInfo.id);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Informations mises à jour' });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations du site</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nom de l'entreprise</label>
            <Input
              value={siteInfo.company_name || ''}
              onChange={(e) => setSiteInfo({ ...siteInfo, company_name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              value={siteInfo.email || ''}
              onChange={(e) => setSiteInfo({ ...siteInfo, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Téléphone</label>
            <Input
              value={siteInfo.phone || ''}
              onChange={(e) => setSiteInfo({ ...siteInfo, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Adresse</label>
            <Input
              value={siteInfo.address || ''}
              onChange={(e) => setSiteInfo({ ...siteInfo, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <Textarea
              value={siteInfo.description || ''}
              onChange={(e) => setSiteInfo({ ...siteInfo, description: e.target.value })}
              rows={4}
            />
          </div>
          <Button onClick={updateSiteInfo} className="bg-pixelify-orange hover:bg-pixelify-orange-dark">
            Sauvegarder
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Portfolio Manager Component
const PortfolioManager = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: '',
    image_url: '',
    technologies: '',
    project_url: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .order('display_order');
    
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      setProjects(data || []);
    }
  };

  const addProject = async () => {
    const { error } = await supabase
      .from('portfolio_projects')
      .insert([{
        ...newProject,
        technologies: newProject.technologies.split(',').map(t => t.trim())
      }]);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Projet ajouté' });
      setNewProject({
        title: '',
        description: '',
        category: '',
        image_url: '',
        technologies: '',
        project_url: ''
      });
      fetchProjects();
    }
  };

  const deleteProject = async (id: string) => {
    const { error } = await supabase
      .from('portfolio_projects')
      .delete()
      .eq('id', id);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Projet supprimé' });
      fetchProjects();
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Project */}
      <Card>
        <CardHeader>
          <CardTitle>Ajouter un nouveau projet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Titre"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
            <Input
              placeholder="Catégorie"
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
            />
            <Input
              placeholder="URL de l'image"
              value={newProject.image_url}
              onChange={(e) => setNewProject({ ...newProject, image_url: e.target.value })}
            />
            <Input
              placeholder="URL du projet"
              value={newProject.project_url}
              onChange={(e) => setNewProject({ ...newProject, project_url: e.target.value })}
            />
            <Input
              placeholder="Technologies (séparées par des virgules)"
              value={newProject.technologies}
              onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
              className="col-span-2"
            />
            <Textarea
              placeholder="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="col-span-2"
              rows={3}
            />
          </div>
          <Button onClick={addProject} className="mt-4 bg-pixelify-orange hover:bg-pixelify-orange-dark">
            Ajouter le projet
          </Button>
        </CardContent>
      </Card>

      {/* Existing Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Projets existants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
                <Button
                  onClick={() => deleteProject(project.id)}
                  variant="destructive"
                  size="sm"
                >
                  Supprimer
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
