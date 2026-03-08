"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Education() {
    return (
        <Section id="education" className="bg-black">
            <div className="mb-12">
                <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-6">
                    Education
                </h2>
                <div className="w-16 h-1 bg-white/30 rounded-full" />
            </div>

            <div className="relative border-l border-white/10 ml-3 md:ml-4 space-y-12">
                {portfolioData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white/60 border-2 border-black ring-4 ring-black" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                            <span className="font-mono text-xs text-white/40 uppercase tracking-widest mt-1 sm:mt-0">
                                {edu.period}
                            </span>
                        </div>

                        <div className="text-lg text-white/60 font-sans italic mb-2">
                            {edu.degree}
                        </div>

                        {edu.gpa && (
                            <div className="inline-block px-3 py-1 bg-white/10 text-xs font-medium text-white/60 rounded-sm">
                                GPA: {edu.gpa}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
