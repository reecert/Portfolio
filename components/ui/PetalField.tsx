"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Particle = {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    type: "petal" | "mote";
    depth: number; // 0 (back) to 1 (front)
};

export function PetalField() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const { scrollY } = useScroll();

    // Parallax effect based on scroll - front moves faster than back
    const yFront = useTransform(scrollY, [0, 1000], [0, 200]);
    const yBack = useTransform(scrollY, [0, 1000], [0, 50]);

    useEffect(() => {
        const petalCount = 15;
        const moteCount = 20;

        const newParticles: Particle[] = [];

        // Create Petals
        for (let i = 0; i < petalCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 5,
                duration: 12 + Math.random() * 10,
                size: 10 + Math.random() * 8,
                type: "petal",
                depth: Math.random(),
            });
        }

        // Create Golden Motes
        for (let i = 0; i < moteCount; i++) {
            newParticles.push({
                id: petalCount + i,
                x: Math.random() * 100,
                delay: Math.random() * 10,
                duration: 25 + Math.random() * 20, // Much slower
                size: 2 + Math.random() * 3, // Tiny
                type: "mote",
                depth: Math.random() * 0.5, // Mostly background
            });
        }

        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-x-0 top-0 h-[100vh] pointer-events-none overflow-hidden z-0" aria-hidden="true">
            {particles.map((p) => {
                // Determine style based on type
                const isPetal = p.type === "petal";
                const colorClass = isPetal ? "bg-sakura" : "bg-gold";
                const shapeClass = isPetal ? "rounded-tl-2xl rounded-br-2xl" : "rounded-full";
                const basicOpacity = isPetal ? 0.6 : 0.4;

                // Depth blur
                const blurAmount = p.depth < 0.3 ? "2px" : "0px";

                // Movement range varies by depth (simulating 3D)
                const xMovement = (Math.random() - 0.5) * (isPetal ? 150 : 50);

                return (
                    <motion.div
                        key={p.id}
                        className={`absolute top-[-20px] ${colorClass} ${shapeClass}`}
                        style={{
                            left: `${p.x}%`,
                            width: p.size,
                            height: p.size,
                            filter: `blur(${blurAmount})`,
                            opacity: basicOpacity,
                            y: p.depth > 0.5 ? yFront : yBack,
                            zIndex: p.depth > 0.8 ? 10 : 0, // Some in front of content?? No, kept safely behind for now, z-0 is container
                        }}
                        animate={{
                            top: ["-5vh", "105vh"],
                            x: [`0px`, `${xMovement}px`],
                            rotate: isPetal ? [0, 360] : [0, 100],
                            opacity: [0, basicOpacity, 0], // Fade in/out at edges
                            scale: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "linear",
                        }}
                    />
                );
            })}
        </div>
    );
}
