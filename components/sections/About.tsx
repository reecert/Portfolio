"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/content";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

export function About() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative w-full h-screen overflow-hidden bg-black">
            <div className="absolute inset-0">
                <SpiralAnimation />
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-full max-w-3xl px-8 text-center space-y-6">
                    {portfolioData.about.description.map((paragraph, index) => (
                        <p
                            key={index}
                            className={`
                                transition-all ease-out duration-[1500ms]
                                text-white leading-relaxed tracking-wide
                                ${index === 0 ? "text-2xl md:text-3xl font-semibold" : "text-base md:text-lg font-normal text-white/80"}
                                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                            `}
                            style={{ transitionDelay: visible ? `${index * 300}ms` : "0ms" }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
