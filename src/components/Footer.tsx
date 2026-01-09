import React from 'react';
import { Linkedin, X } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border-light bg-bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-text-secondary font-mono">
            © 2026 ENDELEA SYSTEMS. OPERATING FROM CHICAGO / BANGKOK.
          </p>
          
          <p className="text-xs text-text-secondary font-mono">
            SYSTEM VERSION 1.0.4 // SECURE CONNECTION.
          </p>
          
          <div className="flex items-center gap-4 mt-2">
            <a 
              href="#" 
              className="p-2 rounded-lg bg-bg-light-gray hover:bg-gray-100 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-text-primary" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-lg bg-bg-light-gray hover:bg-gray-100 transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <X className="w-4 h-4 text-text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
