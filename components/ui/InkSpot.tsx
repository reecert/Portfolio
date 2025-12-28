"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InkSpotProps {
    className?: string;
    variant?: 1 | 2 | 3;
    color?: "sakura" | "ink" | "gold";
    opacity?: number;
}

export function InkSpot({ className, variant = 1, color = "sakura", opacity = 0.1 }: InkSpotProps) {
    const colorClass = {
        sakura: "text-sakura",
        ink: "text-ink",
        gold: "text-gold",
    }[color];

    const paths = {
        1: "M45.5 15.5C28.5 22.5 12.5 45.5 18.5 65.5C24.5 85.5 58.5 88.5 75.5 75.5C92.5 62.5 88.5 28.5 70.5 18.5C52.5 8.5 45.5 15.5 45.5 15.5Z",
        2: "M35.5 25.5C21.5 35.5 15.5 65.5 25.5 80.5C35.5 95.5 75.5 92.5 85.5 75.5C95.5 58.5 85.5 25.5 65.5 18.5C45.5 11.5 35.5 25.5 35.5 25.5Z",
        3: "M55.5 20.5C38.5 25.5 25.5 50.5 28.5 70.5C31.5 90.5 65.5 95.5 80.5 80.5C95.5 65.5 88.5 30.5 70.5 22.5C52.5 14.5 55.5 20.5 55.5 20.5Z"
    };

    return (
        <motion.svg
            viewBox="0 0 100 100"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("absolute pointer-events-none mix-blend-multiply", colorClass, className)}
            style={{ opacity }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: opacity }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <path d={paths[variant]} />
            {/* Adding a second overlapping layer for watercolor density effect */}
            <path d={paths[variant]} className="opacity-50" transform="scale(0.9) translate(5,5)" />
        </motion.svg>
    );
}
