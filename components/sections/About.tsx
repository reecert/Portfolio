"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { HankoBadge } from "@/components/ui/HankoBadge";
import { InkSpot } from "@/components/ui/InkSpot";
import { cn } from "@/lib/utils";

export function About() {
    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-paper">
            {/* Background Decoration */}
            <InkSpot variant={1} color="sakura" className="-top-10 -left-10 w-64 h-64 md:w-96 md:h-96" opacity={0.15} />
            <InkSpot variant={2} color="gold" className="top-1/3 right-0 w-48 h-48 md:w-72 md:h-72" opacity={0.1} />

            <div className="container-custom relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* Title Column with Vertical Line */}
                <div className="md:col-span-3 lg:col-span-4 flex flex-col items-center md:items-start relative">
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-ink/10 to-transparent" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 md:mb-12 relative"
                    >
                        <HankoBadge className="w-24 h-24 md:w-32 md:h-32 text-red-700/80 drop-shadow-sm" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6 text-center md:text-left"
                    >
                        About<br />Me.
                    </motion.h2>
                </div>

                {/* Content Column - Magazine Style */}
                <div className="md:col-span-9 lg:col-span-7 space-y-8 md:pl-8">
                    {portfolioData.about.description.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={cn(
                                "leading-relaxed text-gray-600 font-light",
                                index === 0
                                    ? "text-lg md:text-2xl font-serif text-ink first-letter:float-left first-letter:text-5xl first-letter:pr-4 first-letter:font-bold first-letter:text-sakura-dark"
                                    : "text-base md:text-lg"
                            )}
                        >
                            {paragraph}
                        </motion.p>
                    ))}

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-[1px] bg-gold mt-12 bg-opacity-50"
                    />
                </div>
            </div>
        </section>
    );
}
