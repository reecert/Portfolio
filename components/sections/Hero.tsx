"use client";

import { motion } from "framer-motion";
import { PetalField } from "@/components/ui/PetalField";
import { portfolioData } from "@/data/content";

export function Hero() {
    return (
        <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden pt-20">
            <PetalField />

            {/* Mobile Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-sakura/10 rounded-full blur-3xl -z-10 lg:hidden pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl -z-10 lg:hidden pointer-events-none" />

            <div className="container-custom relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Content (Text) */}
                <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 bg-sakura/10 text-sakura-dark font-sans text-sm tracking-widest uppercase rounded-full mb-4 border border-sakura/20">
                            {portfolioData.personal.tagline}
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-ink tracking-tight text-balance">
                            {portfolioData.hero.headline}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed text-balance"
                    >
                        {portfolioData.hero.subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 sm:py-3 bg-ink text-white font-medium rounded-sm border border-transparent shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-300 text-center"
                        >
                            {portfolioData.hero.cta.primary}
                        </a>
                        <a
                            href="/resume"
                            className="px-8 py-4 sm:py-3 bg-transparent text-ink font-medium rounded-sm border border-gray-300 hover:border-gray-800 transition-all duration-300 text-center"
                        >
                            {portfolioData.hero.cta.secondary}
                        </a>
                    </motion.div>
                </div>

                {/* Right Content (Visual/Empty space for balance) */}
                <div className="lg:col-span-5 hidden lg:flex justify-end items-center relative h-full min-h-[400px]">
                    {/* Abstract minimalist decorative element - keeping it clean as per "airy" requirement */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="relative w-full aspect-square max-w-[400px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-sakura/10 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-slow" />
                        <div className="absolute right-0 top-1/4 w-px h-32 bg-gold/50" />
                        <div className="absolute right-8 top-1/4 w-[1px] h-48 bg-ink/10" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="w-[1px] h-12 bg-gray-300 block" />
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
            </motion.div>
        </section>
    );
}
