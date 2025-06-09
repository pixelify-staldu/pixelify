
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  folder: 'projects_images' | 'main_images';
  onUploadComplete: (url: string) => void;
  currentImageUrl?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ folder, onUploadComplete, currentImageUrl }) => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('Vous devez sélectionner une image à uploader');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${folder}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('pixelify')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('pixelify')
        .getPublicUrl(filePath);

      onUploadComplete(publicUrl);
      toast({ title: 'Succès', description: 'Image uploadée avec succès' });
    } catch (error: any) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {currentImageUrl && (
        <div className="relative">
          <img 
            src={currentImageUrl} 
            alt="Image actuelle" 
            className="w-32 h-32 object-cover rounded border"
          />
        </div>
      )}
      <div>
        <Input
          type="file"
          accept="image/*"
          onChange={uploadImage}
          disabled={uploading}
        />
        {uploading && (
          <p className="text-sm text-gray-500 mt-1">Upload en cours...</p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
