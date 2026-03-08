"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";
import { IconCloudDemo } from "@/components/demo/icon-cloud-demo";

export function Skills() {
    return (
        <Section id="skills" className="py-16 bg-black relative overflow-hidden">
            {/* Icon cloud — background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
                <div className="w-full h-full">
                    <IconCloudDemo />
                </div>
            </div>

            {/* Text content */}
            <div className="relative z-10 pointer-events-none">
                <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-12">Technical Proficiency</h2>

                <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                    {portfolioData.skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-5"
                        >
                            <h3 className="text-base font-semibold text-white tracking-widest uppercase">{skillGroup.category}</h3>
                            <div className="mt-3 h-px w-full bg-white/20" />
                            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                                {skillGroup.items.map((skill) => (
                                    <li key={skill} className="text-white text-sm font-light">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
