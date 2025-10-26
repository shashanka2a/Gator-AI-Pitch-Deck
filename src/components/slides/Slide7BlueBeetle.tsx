'use client';

import { motion } from 'framer-motion';
import { Activity, TrendingUp, BarChart3, Target } from 'lucide-react';

export function Slide7BlueBeetle() {
  const features = [
    {
      icon: TrendingUp,
      label: 'Market Analysis',
      description: 'Real-time sentiment tracking across multiple data streams',
    },
    {
      icon: BarChart3,
      label: 'Predictive Models',
      description: 'Neural networks trained on historical market patterns',
    },
    {
      icon: Target,
      label: 'Automated Insights',
      description: 'AI-driven signals for informed decision making',
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
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white">BlueBeetle</h2>
            </div>
          </div>
          <p className="text-white/60 ml-16">Agentic Intelligence for the Markets</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-card p-8 rounded-2xl h-[280px] flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white mb-3">{feature.label}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
