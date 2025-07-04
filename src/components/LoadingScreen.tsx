import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      {/* Animated squares background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-pixelify-orange animate-pulse opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-pixelify-orange animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-pixelify-orange animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-4 h-4 bg-pixelify-orange animate-pulse opacity-80" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-6 h-6 bg-pixelify-orange animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-5 h-5 bg-pixelify-orange animate-ping opacity-75" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-1/6 left-1/2 w-7 h-7 bg-pixelify-orange animate-pulse opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/5 w-4 h-4 bg-pixelify-orange animate-bounce opacity-90" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-1/2 right-2/5 w-6 h-6 bg-pixelify-orange animate-ping opacity-55" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 left-2/5 w-5 h-5 bg-pixelify-orange animate-pulse opacity-65" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-2/3 right-1/2 w-7 h-7 bg-pixelify-orange animate-bounce opacity-70" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-1/5 left-3/4 w-4 h-4 bg-pixelify-orange animate-ping opacity-85" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-4/5 right-3/4 w-6 h-6 bg-pixelify-orange animate-pulse opacity-50" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute bottom-1/5 left-4/5 w-5 h-5 bg-pixelify-orange animate-bounce opacity-75" style={{ animationDelay: '2.8s' }}></div>
      </div>

      <div className="text-center relative z-10">
        <div className="mb-8 animate-pulse">
          <img 
            src="/images/logo-big-transparent.svg"
            alt="Logo"
            className="h-24 md:h-32 w-auto mx-auto animate-float"
          />
        </div>
        
        {/* Loading dots animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-pixelify-orange rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pixelify-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-pixelify-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="mt-6 text-pixelify-gray text-lg font-medium">
          Chargement en cours...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;