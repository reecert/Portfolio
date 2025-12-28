"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Contact() {
    return (
        <Section id="contact" className="bg-paper pb-32">
            <div className="max-w-xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 inline-block">
                        {/* Small decorative stamp */}
                        <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center mx-auto text-gold/80 font-serif italic text-sm">
                            結
                        </div>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Always open to discussing new opportunities,<br />
                        immersive ideas, or just sharing a virtual tea.
                    </p>

                    <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="inline-block px-8 py-4 bg-ink text-white font-medium tracking-wide rounded-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    >
                        Say Hello
                    </a>
                </motion.div>

                {/* Haiku-ish Closing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 pt-12 border-t border-gray-100"
                >
                    <p className="font-serif italic text-gray-400 text-sm leading-loose">
                        Code flows like water,<br />
                        Digital blossoms unfold,<br />
                        Silence in the noise.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
