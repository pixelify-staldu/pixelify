-- Ajouter l'utilisateur actuel comme admin
-- Remplacez 'votre-email@example.com' par votre vrai email
INSERT INTO public.admin_users (user_id, role)
SELECT id, 'admin'
FROM auth.users 
WHERE email = 'info@pixelify.ch';