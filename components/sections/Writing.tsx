"use client";

import { WavePath } from "@/components/ui/wave-path";
import { portfolioData } from "@/data/content";

export function Writing() {
    return (
        <section id="writing" className="relative w-full flex flex-col items-center justify-center py-32 bg-black overflow-hidden">
            {/* Radial glow behind the wave */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full blur-[30px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.06),transparent_50%)]"
            />

            <div className="flex w-[70vw] flex-col items-end">
                {/* Wave separator — one per writing item */}
                {portfolioData.writing.map((item, index) => (
                    <div key={item.title} className="w-full">
                        <WavePath className="mb-10 text-white/30" />

                        <div className="flex w-full flex-col items-end">
                            <div className="flex justify-end w-full gap-8">
                                <div className="flex flex-col items-end shrink-0">
                                    <p className="text-white/40 text-sm uppercase tracking-widest">
                                        Writing & Research
                                    </p>
                                    <p className="text-white/40 text-xs mt-1 font-mono">
                                        {item.publisher} · {item.date}
                                    </p>
                                </div>

                                <a
                                    href={item.link}
                                    className="w-3/4 group"
                                >
                                    <p className="text-white/80 text-2xl md:text-4xl leading-snug group-hover:text-white transition-colors duration-300">
                                        {item.title}
                                    </p>
                                    <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300">
                                        Read →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {index < portfolioData.writing.length - 1 && (
                            <div className="mt-16" />
                        )}
                    </div>
                ))}

                {/* Closing wave */}
                <WavePath className="mt-16 text-white/20" />
            </div>
        </section>
    );
}
