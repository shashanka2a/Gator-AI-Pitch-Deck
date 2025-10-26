'use client';

import { motion } from 'framer-motion';

interface Slide1CoverProps {
  onNavigateToSlide?: (slideIndex: number) => void;
}

export function Slide1Cover({ onNavigateToSlide }: Slide1CoverProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Simple Grid Background */}
      <div className="absolute inset-0 grid-glow opacity-10" />

      {/* Single Gradient Accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] gradient-primary opacity-10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm tracking-wide text-white/70">
            INTELLIGENCE BUILT AT UF
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white mb-6"
        >
          The Future of{' '}
          <span className="gradient-text">AI Engineering</span>
          <br />
          Built at UF.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto mb-10"
        >
          Harnessing HiPerGator's supercomputing power to train sovereign AI agents and build the next generation of intelligence on campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button 
            onClick={() => onNavigateToSlide?.(4)}
            className="gradient-primary px-8 py-3 rounded-full text-white hover:opacity-90 transition-opacity"
          >
            Explore Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
}
