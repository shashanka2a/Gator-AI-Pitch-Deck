'use client';

import { motion } from 'framer-motion';
import { BookOpen, Link2, Sparkles, ArrowRight } from 'lucide-react';

export function Slide6Nalanda() {
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
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white">Nalanda</h2>
            </div>
          </div>
          <p className="text-white/60 ml-16">Sovereign Chain of Knowledge Engine</p>
        </motion.div>

        {/* Transformation Flow */}
        <div className="flex items-center justify-center gap-12 mb-12">
          {/* Academic Papers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl w-56 flex items-center gap-3"
              >
                <BookOpen className="w-5 h-5 text-purple-400" />
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-white/20 rounded-full w-3/4" />
                  <div className="h-2 bg-white/10 rounded-full w-1/2" />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Transform Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center"
          >
            <ArrowRight className="w-8 h-8 text-white" />
          </motion.div>

          {/* Token Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl w-72"
          >
            <div className="grid grid-cols-8 gap-1.5">
              {[...Array(64)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded gradient-primary"
                  style={{ opacity: 0.3 + Math.random() * 0.4 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-6"
        >
          {[
            { icon: BookOpen, label: 'Research Ingestion', desc: 'Papers → Embeddings' },
            { icon: Link2, label: 'Knowledge Graph', desc: 'Connected reasoning' },
            { icon: Sparkles, label: 'Semantic Search', desc: 'Context-aware retrieval' },
          ].map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center h-[140px]">
              <feature.icon className="w-7 h-7 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white mb-2">{feature.label}</h3>
              <p className="text-white/50 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
