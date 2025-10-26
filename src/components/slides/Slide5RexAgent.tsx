'use client';

import { motion } from 'framer-motion';
import { Terminal, GitBranch, Zap, CheckCircle } from 'lucide-react';

export function Slide5RexAgent() {
  const codeLines = [
    { text: '$ rexagent init --project="research-pipeline"', type: 'command' },
    { text: '> Analyzing repository structure...', type: 'output' },
    { text: '> Generating test suite...', type: 'output' },
    { text: '> Optimizing performance bottlenecks...', type: 'output' },
    { text: '✓ Pipeline deployed successfully', type: 'success' },
  ];

  const steps = [
    { icon: GitBranch, label: 'Code Analysis', active: true },
    { icon: Zap, label: 'Auto-optimization', active: true },
    { icon: Terminal, label: 'Test Generation', active: true },
    { icon: CheckCircle, label: 'Deployment', active: false },
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
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white">RexAgent</h2>
            </div>
          </div>
          <p className="text-white/60 ml-16">The AI That Codes While You Sleep</p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl h-[340px]"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-white/40 text-sm font-mono">terminal</span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className={
                    line.type === 'command'
                      ? 'text-purple-400'
                      : line.type === 'success'
                      ? 'text-green-400'
                      : 'text-white/60'
                  }
                >
                  {line.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 rounded-2xl h-[340px] flex flex-col justify-center"
          >
            <h3 className="text-white mb-6">Autonomous Pipeline</h3>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      step.active
                        ? 'gradient-primary'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <step.icon
                      className={`w-5 h-5 ${step.active ? 'text-white' : 'text-white/30'}`}
                    />
                  </div>
                  <span className={step.active ? 'text-white' : 'text-white/40'}>
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
