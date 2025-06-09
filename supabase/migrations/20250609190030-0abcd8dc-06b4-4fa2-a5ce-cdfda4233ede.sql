
-- Supprimer les anciennes politiques pour le bucket 'images'
DROP POLICY IF EXISTS "Public read access for images" ON storage.objects;
DROP POLICY IF EXISTS "Admin upload to projects_images" ON storage.objects;
DROP POLICY IF EXISTS "Admin upload to main_images" ON storage.objects;
DROP POLICY IF EXISTS "Admin delete images" ON storage.objects;
DROP POLICY IF EXISTS "Admin update images" ON storage.objects;

-- Créer les nouvelles politiques pour le bucket 'pixelify'
-- Politique pour permettre la lecture publique des images
CREATE POLICY "Public read access for pixelify" ON storage.objects
FOR SELECT USING (bucket_id = 'pixelify');

-- Politique pour permettre aux admins d'uploader dans projects_images
CREATE POLICY "Admin upload to projects_images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'pixelify' 
  AND (storage.foldername(name))[1] = 'projects_images'
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);

-- Politique pour permettre aux admins d'uploader dans main_images
CREATE POLICY "Admin upload to main_images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'pixelify'
  AND (storage.foldername(name))[1] = 'main_images' 
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);

-- Politique pour permettre aux admins de supprimer des images
CREATE POLICY "Admin delete pixelify images" ON storage.objects
FOR DELETE USING (
  bucket_id = 'pixelify'
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);

-- Politique pour permettre aux admins de mettre à jour des images
CREATE POLICY "Admin update pixelify images" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'pixelify'
  AND auth.uid() IN (SELECT user_id FROM public.admin_users)
);
