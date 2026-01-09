import React from 'react';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-light/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="font-heading text-2xl font-bold text-text-primary tracking-tight hover:text-text-secondary transition-colors">
            ENDELEA
          </a>
          
          <div className="flex items-center gap-8">
            <a 
              href="#services" 
              className="text-text-primary hover:text-text-secondary transition-colors font-medium"
            >
              Services
            </a>
            <a 
              href="#work" 
              className="text-text-primary hover:text-text-secondary transition-colors font-medium"
            >
              Work
            </a>
            <a 
              href="#about" 
              className="text-text-primary hover:text-text-secondary transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="/audit" 
              className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
