"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Education() {
    return (
        <Section id="education" className="bg-paper">
            <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-5xl text-ink mb-6">
                    Education
                </h2>
                <div className="w-16 h-1 bg-sakura rounded-full" />
            </div>

            <div className="relative border-l border-ink/10 ml-3 md:ml-4 space-y-12">
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
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-sakura border-2 border-paper ring-4 ring-paper" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-ink">{edu.school}</h3>
                            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-1 sm:mt-0">
                                {edu.period}
                            </span>
                        </div>

                        <div className="text-lg text-ink/80 font-serif italic mb-2">
                            {edu.degree}
                        </div>

                        {edu.gpa && (
                            <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-sm">
                                GPA: {edu.gpa}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
