import React from 'react';
import { Linkedin, X } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-slate-500 font-mono">
            © 2026 ENDELEA SYSTEMS. OPERATING FROM CHICAGO / BANGKOK.
          </p>
          
          <p className="text-xs text-slate-600 font-mono">
            SYSTEM VERSION 1.0.4 // SECURE CONNECTION.
          </p>
          
          <div className="flex items-center gap-4 mt-2">
            <a 
              href="#" 
              className="p-2 rounded-lg glass hover:bg-slate-800/50 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-lg glass hover:bg-slate-800/50 transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <X className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
