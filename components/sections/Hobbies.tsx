"use client";

import { Section } from "@/components/ui/Section";
import { HobbiesDemo } from "@/components/demo/hobbies-demo";

export function Hobbies() {
    return (
        <Section id="hobbies" className="bg-black py-24">
            <div className="mb-12">
                <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-6">
                    Interests & Hobbies
                </h2>
                <div className="w-16 h-1 bg-white/20 rounded-full" />
                <p className="mt-6 text-white/40 max-w-2xl font-light">
                    Beyond engineering, I find inspiration in exploration, physical activity, and creative storytelling.
                </p>
            </div>

            <HobbiesDemo />
        </Section>
    );
}
