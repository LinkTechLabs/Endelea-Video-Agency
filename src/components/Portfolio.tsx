import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
}

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'AUTOMATED VIDEO PIPELINE',
      description: 'High-volume asset generation using Kling AI models. 1000+ unique creatives deployed.',
      videoUrl: '/videos/watch-portfolio1.mp4',
      tags: ['AI VIDEO', 'AUTOMATION', 'SCALABLE']
    },
    {
      id: '2',
      title: 'DYNAMIC ASSET GENERATION',
      description: 'Real-time video synthesis with Higgsfield AI. 500+ variations deployed in production.',
      videoUrl: '/videos/portfolio2.mp4',
      tags: ['REAL-TIME', 'AI SYNTHESIS', 'PRODUCTION']
    },
    {
      id: '3',
      title: 'NEURAL RETENTION SYSTEM',
      description: 'Sentinel AI-powered visual optimization. 400% increase in viewer engagement metrics.',
      videoUrl: '/videos/portfolio3.mp4',
      tags: ['NEURAL AI', 'OPTIMIZATION', 'ANALYTICS']
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-slate-200 text-center mb-16"
        >
          DEPLOYED SYSTEMS
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(item.videoUrl)}
            >
              <div className="glass glass-hover p-6 rounded-xl h-full">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden mb-4">
                  <video
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <Play className="w-12 h-12 text-brand-green" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-slate-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 font-sans">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-brand-green/10 border border-brand-green/20 rounded text-xs font-mono text-brand-green"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors"
            >
              ✕ CLOSE
            </button>
            <video
              className="w-full rounded-lg shadow-2xl"
              controls
              autoPlay
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
