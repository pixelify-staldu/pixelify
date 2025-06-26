
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

export const PixelGrid = ({ rows = 3, cols = 3, className = '' }: { rows?: number; cols?: number; className?: string }) => {
  const pixels = Array.from({ length: rows * cols }, (_, i) => i);
  
  return (
    <div 
      className={`grid gap-1 ${className}`}
      style={{ 
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
    >
      {pixels.map((index) => (
        <PixelDecoration 
          key={index}
          size="sm"
          color={index % 3 === 0 ? 'orange' : index % 2 === 0 ? 'gray' : 'charcoal'}
        />
      ))}
    </div>
  );
};

export const PixelCluster = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <PixelDecoration size="lg" color="orange" className="absolute top-0 left-0" />
      <PixelDecoration size="md" color="gray" className="absolute top-1 left-4" />
      <PixelDecoration size="sm" color="charcoal" className="absolute top-3 left-2" />
      <PixelDecoration size="md" color="orange" className="absolute top-4 left-5" />
      <PixelDecoration size="sm" color="gray" className="absolute top-2 left-6" />
    </div>
  );
};

export default PixelDecoration;
