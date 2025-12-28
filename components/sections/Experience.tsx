"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Experience() {
    return (
        <Section id="experience" className="bg-gray-50/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-ink">
                    Journey & Experience
                </h2>

                <div className="relative border-l border-gray-200 ml-3 md:ml-0 md:pl-0 space-y-16">
                    {portfolioData.experience.map((role, index) => (
                        <motion.div
                            key={role.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] top-2 w-3 h-3 bg-sakura rounded-full border-2 border-paper md:left-1/2 md:-translate-x-[6px]" />

                            <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Date Side */}
                                <div className={`md:w-1/2 mb-2 md:mb-0 ${index % 2 === 0 ? "md:text-left pl-8" : "md:text-right pr-8"}`}>
                                    <span className="font-mono text-sm text-gray-500 uppercase tracking-widest">
                                        {role.period}
                                    </span>
                                </div>

                                {/* Content Side */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right pr-8" : "md:text-left pl-8"}`}>
                                    <h3 className="text-xl font-bold text-ink">{role.company}</h3>
                                    <p className="text-sakura-dark font-medium mb-3">{role.role}</p>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                                        {role.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                        {role.technologies.map(tech => (
                                            <span key={tech} className="text-[10px] uppercase border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-sm text-gray-500">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
