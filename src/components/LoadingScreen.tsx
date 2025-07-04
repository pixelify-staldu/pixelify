import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          <img 
            src="/images/logo-big-transparent.svg"
            alt="Logo"
            className="h-24 md:h-32 w-auto mx-auto animate-float"
          />
        </div>
        
        {/* Loading dots animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-pixelify-orange animate-bounce"></div>
          <div className="w-3 h-3 bg-pixelify-orange animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-pixelify-orange animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="mt-6 text-pixelify-gray text-lg font-medium">
          Chargement en cours...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;