"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Skills() {
    return (
        <Section id="skills" className="py-16 bg-white/50">
            <h2 className="font-serif text-3xl md:text-5xl text-ink">Technical Proficiency</h2>

            {/* categories side-by-side */}
            <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {portfolioData.skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-ink">{skillGroup.category}</h3>
                        <div className="mt-4 h-px w-full bg-gray-200" />

                        {/* list: 2 columns on mobile, 1 on desktop */}
                        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-1">
                            {skillGroup.items.map((skill) => (
                                <li key={skill} className="text-gray-600 text-sm">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
