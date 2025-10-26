'use client';

import { motion } from 'framer-motion';
import { Lock, DollarSign, ShieldAlert } from 'lucide-react';

export function Slide2Problem() {
  const problems = [
    { icon: Lock, label: 'Vendor Lock-in', description: 'Dependence on external platforms limits flexibility' },
    { icon: ShieldAlert, label: 'Data Privacy', description: 'Sensitive research data leaves campus boundaries' },
    { icon: DollarSign, label: 'High API Costs', description: 'Expensive per-token pricing drains research budgets' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-glow opacity-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white">
            The Challenge: Dependence on{' '}
            <span className="gradient-text">Proprietary AI</span>
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-card p-8 rounded-2xl h-[280px] flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white mb-3">{problem.label}</h3>
              <p className="text-white/60">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
