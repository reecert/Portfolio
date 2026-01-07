"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { portfolioData } from "@/data/content";

export function Projects() {
    return (
        <Section id="projects" className="bg-paper">
            <div className="mb-16 md:mb-24">
                <h2 className="font-serif text-3xl md:text-5xl text-ink mb-6">
                    Selected Works
                </h2>
                <div className="w-16 h-1 bg-sakura rounded-full" />
            </div>

            <div className="flex flex-col gap-20">
                {portfolioData.projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                    >
                        {/* Project Image (Ink Wash Effect Wrapper) */}
                        <div className={`lg:col-span-7 relative ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                            <div className="relative overflow-hidden rounded-sm shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:shadow-sakura/10">
                                {/* Placeholder for project image since we don't have real files */}
                                <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400">
                                    <span className="font-serif italic opacity-50 text-xl">{project.title} Preview</span>
                                </div>

                                {/* Ink Wash Overlay */}
                                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500 pointer-events-none" />

                                {/* Subtle Sakura Petal Drift on Hover could go here if using CSS only, but keeping it clean */}
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="lg:col-span-5 flex flex-col items-start">
                            <h3 className="font-serif text-3xl md:text-4xl text-ink mb-4 group-hover:text-sakura-dark transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                {project.description}
                            </p>

                            <div className="mb-8">
                                <p className="font-medium text-ink mb-2 border-l-2 border-gold pl-3">
                                    Impact: {project.impact}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 text-xs md:text-sm text-gray-700 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                className="inline-flex items-center gap-2 text-ink font-medium hover:text-sakura transition-all group-hover:translate-x-1"
                            >
                                Link
                                <span className="text-xl leading-none">→</span>
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}
