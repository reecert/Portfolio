"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

function RevealWord({ word, progress, start, end }: {
    word: string;
    progress: MotionValue<number>;
    start: number;
    end: number;
}) {
    const opacity = useTransform(progress, [start, end], [0.12, 1]);
    return (
        <motion.span style={{ opacity }} className="text-white inline-block mr-1.5">
            {word}
        </motion.span>
    );
}

// Parse "- bullet\n- bullet" into clean sentences
function parseDescription(text: string): string[] {
    return text
        .split("\n")
        .map(line => line.replace(/^-\s*/, "").trim())
        .filter(Boolean);
}

function ExperienceEntry({ role, index }: {
    role: typeof portfolioData.experience[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.75", "start 0.1"],
    });

    const bullets = parseDescription(role.description);
    // Flatten all bullets into one word array for the reveal
    const allWords = bullets.join(" · ").split(" ");

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0 md:border-l-0 border-l border-white/10"
        >
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-2 w-3 h-3 bg-white/60 rounded-full border-2 border-black md:left-1/2 md:-translate-x-1/2" />

            <div className={`md:flex items-start justify-between gap-20 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Date side */}
                <div className={`md:w-1/2 mb-3 md:mb-0 ${index % 2 === 0 ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`}>
                    <span className="font-mono text-xs text-white/30 uppercase tracking-[0.2em]">
                        {role.period}
                    </span>
                </div>

                {/* Content side */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{role.company}</h3>
                    <p className="text-white/40 text-sm font-medium uppercase tracking-widest mt-1 mb-4">
                        {role.role}
                    </p>

                    {/* Word-by-word reveal */}
                    <p className="flex flex-wrap leading-relaxed text-sm md:text-base">
                        {allWords.map((word, i) => (
                            <RevealWord
                                key={i}
                                word={word}
                                progress={scrollYProgress}
                                start={i / allWords.length}
                                end={Math.min((i + 2) / allWords.length, 1)}
                            />
                        ))}
                    </p>

                    {/* Tech tags */}
                    <div className={`flex flex-wrap gap-2 mt-6 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {role.technologies.map(tech => (
                            <span
                                key={tech}
                                className="text-[10px] uppercase border border-white/15 px-2.5 py-1 text-white/35 tracking-widest"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Experience() {
    return (
        <Section id="experience" className="bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-center mb-16 text-white">
                    Journey & Experience
                </h2>

                <div className="relative space-y-20">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    {portfolioData.experience.map((role, index) => (
                        <ExperienceEntry key={role.company} role={role} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
