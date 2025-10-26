'use client';
interface SlideProps {
  onNavigateToSlide?: (slideIndex: number) => void;
}


import { motion } from 'framer-motion';
import { Server, Database, Brain, Shield, Layers, Zap } from 'lucide-react';

export function Slide8Infrastructure() {
  const infrastructure = [
    {
      icon: Server,
      layer: 'Compute',
      description: 'HiPerGator GPU acceleration for training sovereign models',
    },
    {
      icon: Database,
      layer: 'Data',
      description: 'Secure data lakes with research-grade datasets',
    },
    {
      icon: Brain,
      layer: 'Neural Architecture',
      description: 'Custom transformer models and fine-tuning pipelines',
    },
    {
      icon: Shield,
      layer: 'Security',
      description: 'End-to-end encryption and compliance frameworks',
    },
    {
      icon: Layers,
      layer: 'Orchestration',
      description: 'Kubernetes deployment and resource management',
    },
    {
      icon: Zap,
      layer: 'API Gateway',
      description: 'RESTful APIs and student developer portal',
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-glow opacity-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-white mb-2">
            Campus <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-white/60">Complete stack for AI development</p>
        </motion.div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-2 gap-4">
          {infrastructure.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="glass-card p-6 rounded-xl flex items-start gap-4 h-[120px]"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-white mb-2">{item.layer}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
