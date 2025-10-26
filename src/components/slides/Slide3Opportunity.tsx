'use client';
interface SlideProps {
  onNavigateToSlide?: (slideIndex: number) => void;
}


import { motion } from 'framer-motion';
import { Cpu, Users, Database } from 'lucide-react';

export function Slide3Opportunity() {
  const cards = [
    {
      icon: Cpu,
      title: 'Sovereign Compute',
      description: 'Full control over AI infrastructure with HiPerGator supercomputing',
    },
    {
      icon: Users,
      title: 'Student-Led Innovation',
      description: 'Empowering the next generation to build breakthrough AI systems',
    },
    {
      icon: Database,
      title: 'Research-Ready Infrastructure',
      description: 'Enterprise-grade tools designed for academic excellence',
    },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-glow opacity-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white mb-2">
              Why rely on Silicon Valley when we can build the{' '}
              <span className="gradient-text">Valley of Intelligence</span>
              {' '}in Gainesville?
            </h2>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-card p-8 rounded-2xl h-[280px] flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white mb-3">{card.title}</h3>
              <p className="text-white/60">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
