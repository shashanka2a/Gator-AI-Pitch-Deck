'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Users } from 'lucide-react';

export function Slide10Closing() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-glow opacity-10" />

      {/* Gradient Accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-primary opacity-15 blur-[150px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white mb-12">
            From Gainesville to{' '}
            <span className="gradient-text">Global AI</span>
            <br />
            Let's Build the Infrastructure of Intelligence.
          </h1>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://gatorai.academy"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary px-8 py-3 rounded-full text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-5 h-5" />
            Visit Website
          </a>

          <button className="glass-card px-8 py-3 rounded-full text-white flex items-center gap-2 border border-white/20 hover:border-white/40 transition-colors">
            <Users className="w-5 h-5" />
            Join Gator AI Labs
          </button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="flex items-center justify-center gap-8">
            {['Gator AI', 'HiPerGator', 'UF Research'].map((org, index) => (
              <div key={index} className="text-white/50 text-sm">
                {org}
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm">
            gatorai@ufl.edu • Gainesville, Florida
          </p>
        </motion.div>
      </div>
    </div>
  );
}