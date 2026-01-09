import React from 'react';
import { motion } from 'framer-motion';
import { Video, MapPin, Shield, Bot } from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCard> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-bg-light border border-border-light p-8 rounded-xl group cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-bg-light-gray group-hover:bg-gray-100 transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed font-sans">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const BentoGrid = () => {
  const services: ServiceCard[] = [
    {
      icon: <Video className="w-6 h-6 text-accent" />,
      title: "Generative Ads",
      description: "High-volume asset generation using Kling & Hailuo models.",
      delay: 0
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Local Domination",
      description: "Google Maps optimization via cinematic walkthroughs.",
      delay: 0.1
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Secured Ops",
      description: "SOC2 compliant workflows. AWS Serverless architecture.",
      delay: 0.2
    },
    {
      icon: <Bot className="w-6 h-6 text-accent" />,
      title: "Agentic Workflows",
      description: "24/7 automated lead nurturing.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-text-primary text-center mb-16"
        >
          CAPABILITIES
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-16"
        >
          We help businesses grow with cutting-edge AI solutions and automation strategies.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
