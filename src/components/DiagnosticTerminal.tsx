import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, AlertTriangle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  role: string;
}

export const DiagnosticTerminal = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: ''
  });

  const handleAnalyze = async () => {
    if (!url) return;
    
    setIsScanning(true);
    setScanProgress(0);
    
    // Simulate scanning progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowForm(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { url, ...formData });
    // You can integrate with your backend here
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1440 800" className="w-full h-full">
          {/* Connection Lines */}
          <g className="animate-pulse">
            <line x1="720" y1="400" x2="200" y2="200" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
            <line x1="720" y1="400" x2="1240" y2="200" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
            <line x1="720" y1="400" x2="200" y2="600" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
            <line x1="720" y1="400" x2="1240" y2="600" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
          </g>
          
          {/* World Dots */}
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1440}
              cy={Math.random() * 800}
              r="1"
              fill="#22c55e"
              opacity="0.5"
              className="animate-pulse"
            />
          ))}
          
          {/* Major Hubs */}
          <circle cx="720" cy="400" r="3" fill="#22c55e" className="animate-pulse" />
          <circle cx="200" cy="200" r="2" fill="#22c55e" className="animate-pulse" />
          <circle cx="1240" cy="200" r="2" fill="#22c55e" className="animate-pulse" />
          <circle cx="200" cy="600" r="2" fill="#22c55e" className="animate-pulse" />
          <circle cx="1240" cy="600" r="2" fill="#22c55e" className="animate-pulse" />
        </svg>
      </div>

      {/* Glass Terminal Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass max-w-2xl w-full p-8 rounded-xl border border-slate-800"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Globe className="w-6 h-6 text-brand-green" />
              <h1 className="font-heading text-3xl font-bold text-slate-200">
                GLOBAL SIGNAL DIAGNOSTIC
              </h1>
            </motion.div>
            <p className="text-slate-400 font-sans">
              Enter your domain. Our systems will analyze your current visual infrastructure 
              for algorithmic weight.
            </p>
          </div>

          {/* Input Section */}
          <AnimatePresence mode="wait">
            {!showForm && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Command Line Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <span className="text-brand-green font-mono">&gt;</span>
                  </div>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="enter_target_url_"
                    className="w-full pl-10 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-md text-brand-green font-mono placeholder-slate-600 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                    disabled={isScanning}
                  />
                </div>

                {/* Analyze Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAnalyze}
                  disabled={!url || isScanning}
                  className="w-full py-4 bg-slate-800 border border-slate-700 rounded-md text-brand-green font-mono font-semibold hover:bg-slate-700 hover:border-brand-green disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isScanning ? 'SCANNING...' : 'RUN DIAGNOSTIC'}
                </motion.button>

                {/* Progress Bar */}
                <AnimatePresence>
                  {isScanning && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-xs font-mono text-slate-500">
                        <span>ANALYZING INFRASTRUCTURE...</span>
                        <span>{Math.round(scanProgress)}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-green to-brand-green/50"
                          initial={{ width: 0 }}
                          animate={{ width: `${scanProgress}%` }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Section */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Vulnerability Alert */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="flex items-start gap-3 p-4 bg-slate-900/30 border border-brand-green/20 rounded-md"
                >
                  <AlertTriangle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-brand-green font-semibold mb-1">
                      Vulnerability Detected: Static Saturation
                    </h3>
                    <p className="text-slate-400 text-sm font-sans">
                      Your visual infrastructure requires immediate optimization for algorithmic dominance.
                    </p>
                  </div>
                </motion.div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-slate-400 mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-md text-slate-200 font-sans focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-slate-400 mb-2">
                      WORK EMAIL (BUSINESS DOMAINS ONLY)
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-md text-slate-200 font-sans focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-mono text-slate-400 mb-2">
                      ROLE
                    </label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-md text-slate-200 font-sans focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                    >
                      <option value="">SELECT ROLE</option>
                      <option value="founder">FOUNDER</option>
                      <option value="cmo">CMO</option>
                      <option value="marketing-director">MARKETING DIRECTOR</option>
                      <option value="growth-lead">GROWTH LEAD</option>
                      <option value="other">OTHER</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-brand-green/10 border border-brand-green text-brand-green font-mono font-semibold hover:bg-brand-green/20 transition-all"
                  >
                    RECEIVE REMEDIATION ASSET
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
