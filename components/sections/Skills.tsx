"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Skills() {
    return (
        <Section id="skills" className="bg-white/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="md:col-span-2 lg:col-span-4 mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl text-ink">
                        Technical Proficiency
                    </h2>
                </div>

                {portfolioData.skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="font-medium text-lg text-sakura-dark border-b border-gray-200 pb-2">
                            {skillGroup.category}
                        </h3>
                        <ul className="space-y-2">
                            {skillGroup.items.map((skill) => (
                                <li key={skill} className="text-gray-600">
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
