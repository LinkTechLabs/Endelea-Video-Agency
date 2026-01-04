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
          className="font-heading text-5xl md:text-7xl font-bold text-slate-200 leading-tight mb-6"
        >
          AUTOMATED GROWTH
          <br />
          <span className="neon-glow">INFRASTRUCTURE</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          Static is dead. We engineer high-retention visual assets optimized for algorithmic capture.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-slate-400">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
            SYSTEMS OPERATIONAL
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-green/10 via-transparent to-transparent blur-3xl"></div>
      </div>
    </section>
  );
};
