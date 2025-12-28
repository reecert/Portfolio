"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
            <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* Title Column */}
                <div className="lg:col-span-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6"
                    >
                        About Me
                    </motion.h2>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-6">
                    {portfolioData.about.description.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-lg md:text-xl leading-relaxed text-gray-600 font-light"
                        >
                            {paragraph}
                        </motion.p>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-8"
                    >
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
