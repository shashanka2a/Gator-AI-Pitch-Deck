'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1Cover } from './slides/Slide1Cover';
import { Slide2Problem } from './slides/Slide2Problem';
import { Slide3Opportunity } from './slides/Slide3Opportunity';
import { Slide4Ecosystem } from './slides/Slide4Ecosystem';
import { Slide5RexAgent } from './slides/Slide5RexAgent';
import { Slide6Nalanda } from './slides/Slide6Nalanda';
import { Slide7BlueBeetle } from './slides/Slide7BlueBeetle';
import { Slide8Infrastructure } from './slides/Slide8Infrastructure';
import { Slide9Roadmap } from './slides/Slide9Roadmap';
import { Slide10Closing } from './slides/Slide10Closing';

const slides = [
  Slide1Cover,
  Slide2Problem,
  Slide3Opportunity,
  Slide4Ecosystem,
  Slide5RexAgent,
  Slide6Nalanda,
  Slide7BlueBeetle,
  Slide8Infrastructure,
  Slide9Roadmap,
  Slide10Closing,
];

export function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const isTransitioning = useRef(false);

  const paginate = (newDirection: number) => {
    if (isTransitioning.current) return;
    
    isTransitioning.current = true;
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });

    // Reset transition lock after animation completes
    setTimeout(() => {
      isTransitioning.current = false;
    }, 800);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-[#0A0A0F] overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="w-full h-full"
        >
          <CurrentSlideComponent onNavigateToSlide={(slideIndex: number) => {
            if (isTransitioning.current) return;
            setDirection(slideIndex > currentSlide ? 1 : -1);
            setCurrentSlide(slideIndex);
            isTransitioning.current = true;
            setTimeout(() => {
              isTransitioning.current = false;
            }, 800);
          }} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={() => paginate(-1)}
          disabled={isTransitioning.current}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning.current) return;
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
                isTransitioning.current = true;
                setTimeout(() => {
                  isTransitioning.current = false;
                }, 800);
              }}
              disabled={isTransitioning.current}
              className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                index === currentSlide
                  ? 'w-8 gradient-primary'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={isTransitioning.current}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-white/50 z-50">
        <span className="text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Keyboard Hint */}
      <div className="absolute bottom-8 left-8 text-white/30 text-sm z-50 flex items-center gap-2">
        <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10">←</kbd>
        <kbd className="px-2 py-1 bg-white/5 rounded border border-white/10">→</kbd>
        <span>to navigate</span>
      </div>
    </div>
  );
}