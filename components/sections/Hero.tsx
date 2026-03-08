'use client';

import { motion } from 'framer-motion';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';
import { portfolioData } from '@/data/content';

const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';

export function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      {/* 3D Robot — fills entire viewport */}
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Gradient fade at bottom so next section blends */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Text overlay — top-left */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center pointer-events-none px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="max-w-xl"
        >
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
            {portfolioData.personal.location}
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-6">
            {portfolioData.personal.name.split(' ')[0]}
            <br />
            <span className="text-white/30">{portfolioData.personal.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="text-sm md:text-base text-white/60 tracking-widest uppercase mb-8">
            {portfolioData.personal.tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 pointer-events-auto"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-white/90 transition-colors"
            >
              {portfolioData.hero.cta.primary}
            </a>
            <a
              href="/resume"
              className="px-6 py-3 border border-white/30 text-white text-sm font-semibold tracking-widest uppercase rounded-sm hover:border-white/70 hover:bg-white/5 transition-colors"
            >
              {portfolioData.hero.cta.secondary}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="w-px h-10 bg-white/30 block" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
      </motion.div>
    </section>
  );
}
