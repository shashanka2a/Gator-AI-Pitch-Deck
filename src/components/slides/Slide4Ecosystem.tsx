'use client';

import { motion } from 'framer-motion';
import { Server, Database, Brain, Rocket } from 'lucide-react';

export function Slide4Ecosystem() {
  const stages = [
    { icon: Server, label: 'Compute', color: '#5A5DFF' },
    { icon: Database, label: 'Data', color: '#7B6EFF' },
    { icon: Brain, label: 'Neural Architecture', color: '#9C7FFF' },
    { icon: Rocket, label: 'Student Projects', color: '#B266FF' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-glow opacity-10" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white">
            The <span className="gradient-text">Gator AI Stack</span>
          </h2>
        </motion.div>

        {/* Horizontal Flow */}
        <div className="flex items-center justify-between gap-0">
          {stages.map((stage, index) => (
            <div key={index} className="flex items-center">
              {/* Stage Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl w-52 h-44 flex flex-col items-center justify-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: stage.color }}
                >
                  <stage.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-white text-center">{stage.label}</p>
              </motion.div>

              {/* Connection Line */}
              {index < stages.length - 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="h-0.5 mx-3"
                  style={{
                    background: `linear-gradient(90deg, ${stage.color}, ${stages[index + 1].color})`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 max-w-2xl mx-auto">
            A complete AI development pipeline built on campus infrastructure
          </p>
        </motion.div>
      </div>
    </div>
  );
}
