import React from 'react';

export const TechMarquee = () => {
  const tech = [
    "AWS", "HIGGSFIELD", "KLING", "PYTHON", 
    "SENTINEL", "RUNWAY", "CLAUDE", "TAILWIND", 
    "AGI", "REACT", "ASTRO", "FRAMER", 
    "LUCIDE", "SERVERLESS"
  ];

  return (
    <section className="py-16 overflow-hidden bg-bg-light-gray">
      <div className="relative">
        <div className="flex animate-marquee">
          {[...tech, ...tech].map((item, index) => (
            <span 
              key={index}
              className="font-mono text-sm text-text-secondary whitespace-nowrap select-none mx-8"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
