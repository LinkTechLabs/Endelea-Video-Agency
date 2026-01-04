import React from 'react';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="font-heading text-xl font-bold text-slate-200 tracking-wider hover:text-brand-green transition-colors">
            ENDELEA
          </a>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse-slow"></div>
              <span className="text-sm text-slate-400 font-mono">STATUS: ONLINE</span>
            </div>
            
            <a 
              href="/audit" 
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm font-mono text-slate-200 hover:bg-slate-700 hover:border-brand-green transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/20"
            >
              RUN DIAGNOSTIC
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
