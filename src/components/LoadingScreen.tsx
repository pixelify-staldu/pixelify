import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      {/* Animated squares background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-4 h-4 bg-pixelify-orange rounded-sm animate-pulse opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-24 w-3 h-3 bg-pixelify-orange rounded-sm animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-32 w-5 h-5 bg-pixelify-orange rounded-sm animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-64 left-1/4 w-2 h-2 bg-pixelify-orange rounded-sm animate-pulse opacity-80" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 right-16 w-4 h-4 bg-pixelify-orange rounded-sm animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-16 right-1/3 w-3 h-3 bg-pixelify-orange rounded-sm animate-ping opacity-75" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-64 left-20 w-6 h-6 bg-pixelify-orange rounded-sm animate-pulse opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-48 right-32 w-2 h-2 bg-pixelify-orange rounded-sm animate-bounce opacity-90" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-pixelify-orange rounded-sm animate-ping opacity-55" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-80 left-1/3 w-3 h-3 bg-pixelify-orange rounded-sm animate-pulse opacity-65" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-52 right-40 w-4 h-4 bg-pixelify-orange rounded-sm animate-bounce opacity-70" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute top-36 left-40 w-2 h-2 bg-pixelify-orange rounded-sm animate-ping opacity-85" style={{ animationDelay: '1.8s' }}></div>
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