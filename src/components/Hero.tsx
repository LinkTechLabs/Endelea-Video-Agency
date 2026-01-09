import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-8xl font-bold text-text-primary leading-tight mb-8"
        >
          Your secret weapon
          <br />
          for standing out
          <br />
          and selling more.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans mb-12"
        >
          Conversion-driven websites and impactful branding that cut through the noise.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/audit" className="px-8 py-4 bg-accent text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 inline-block">
            Get Started
          </a>
          <a href="#work" className="px-8 py-4 bg-transparent text-text-primary font-medium rounded-lg border-2 border-text-primary hover:bg-text-primary hover:text-white transition-colors duration-200 inline-block">
            View Our Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
