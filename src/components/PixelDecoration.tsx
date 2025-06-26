
import React from 'react';

interface PixelDecorationProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'orange' | 'gray' | 'charcoal';
  className?: string;
}

const PixelDecoration = ({ size = 'md', color = 'orange', className = '' }: PixelDecorationProps) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  const colorClasses = {
    orange: 'bg-pixelify-orange',
    gray: 'bg-pixelify-gray',
    charcoal: 'bg-pixelify-charcoal'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`} />
  );
};

// Composant pour coin supérieur droit uniquement
export const TopRightPixels = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute top-2 right-2 flex gap-1 ${className}`}>
      <PixelDecoration size="sm" color="orange" />
      <PixelDecoration size="sm" color="gray" />
      <PixelDecoration size="sm" color="charcoal" />
    </div>
  );
};

export default PixelDecoration;
