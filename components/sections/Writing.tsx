"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Writing() {
    return (
        <Section id="writing" className="bg-paper">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4">
                        Writing & Research
                    </h2>
                    <p className="text-gray-500">
                        Thoughts on technology, design, and the spaces in between.
                    </p>
                </div>

                <div className="space-y-8">
                    {portfolioData.writing.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="block group"
                        >
                            <article className="flex items-baseline justify-between border-b border-gray-200 pb-4 group-hover:border-sakura transition-colors">
                                <h3 className="text-lg md:text-xl font-medium text-ink group-hover:text-sakura-dark transition-colors">
                                    {item.title}
                                </h3>
                                <span className="shrink-0 text-sm text-gray-400 font-mono ml-4">
                                    {item.publisher}, {item.date}
                                </span>
                            </article>
                        </motion.a>
                    ))}
                </div>
            </div>
        </Section>
    );
}
