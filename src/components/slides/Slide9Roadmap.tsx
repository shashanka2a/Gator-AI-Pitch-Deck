'use client';

import { motion } from 'framer-motion';
import { Rocket, Globe, Network } from 'lucide-react';

export function Slide9Roadmap() {
  const phases = [
    {
      year: 'Q1-Q2 2026',
      title: 'Pilot Projects',
      icon: Rocket,
      items: ['Launch RexAgent beta', 'Deploy Nalanda knowledge base', 'BlueBeetle market testing'],
    },
    {
      year: 'Q2-Q3 2026',
      title: 'Campus AI Portal',
      icon: Globe,
      items: ['Student API access', 'Research integrations', 'Cross-department collaboration'],
    },
    {
      year: 'Q3-Q4 2026',
      title: 'Sovereign Network',
      icon: Network,
      items: ['Multi-campus expansion', 'Industry partnerships', 'Global AI leadership'],
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-glow opacity-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-2">
            The <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-white/60">Building the future, one phase at a time</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute top-6 left-0 h-0.5 gradient-primary"
          />

          {/* Phase Cards */}
          <div className="grid grid-cols-3 gap-8 relative">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full gradient-primary flex items-center justify-center z-10">
                  <phase.icon className="w-6 h-6 text-white" />
                </div>

                {/* Card */}
                <div className="glass-card p-6 rounded-2xl mt-12 h-[260px]">
                  <div className="text-center mb-6">
                    <div className="gradient-text mb-2">{phase.year}</div>
                    <h3 className="text-white">{phase.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full gradient-primary mt-2 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}