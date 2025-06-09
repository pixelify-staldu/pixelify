
-- Créer les politiques pour le bucket (assumant que votre bucket s'appelle 'images')
-- Politique pour permettre la lecture publique des images
CREATE POLICY "Public read access for images" ON storage.objects
FOR SELECT USING (bucket_id = 'images');

-- Politique pour permettre aux admins d'uploader dans projects_images
CREATE POLICY "Admin upload to projects_images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'images' 
  AND (storage.foldername(name))[1] = 'projects_images'
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);

-- Politique pour permettre aux admins d'uploader dans main_images
CREATE POLICY "Admin upload to main_images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'images'
  AND (storage.foldername(name))[1] = 'main_images' 
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);

-- Politique pour permettre aux admins de supprimer des images
CREATE POLICY "Admin delete images" ON storage.objects
FOR DELETE USING (
  bucket_id = 'images'
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);

-- Politique pour permettre aux admins de mettre à jour des images
CREATE POLICY "Admin update images" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'images'
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);
