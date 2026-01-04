import React from 'react';

export const TechMarquee = () => {
  const tech = [
    "AWS", "HIGGSFIELD", "KLING", "PYTHON", 
    "SENTINEL", "RUNWAY", "CLAUDE", "TAILWIND", 
    "AGI", "REACT", "ASTRO", "FRAMER", 
    "LUCIDE", "SERVERLESS"
  ];

  return (
    <section className="py-16 overflow-hidden bg-slate-900/20">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...tech, ...tech].map((item, index) => (
            <span 
              key={index}
              className="font-mono text-sm text-slate-600 whitespace-nowrap select-none mx-8"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
