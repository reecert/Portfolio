"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { HankoBadge } from "@/components/ui/HankoBadge";
import { portfolioData } from "@/data/content";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Writing", href: "#writing" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b transition-colors duration-300",
                isScrolled
                    ? "border-gray-200/50 bg-paper/80 backdrop-blur-md"
                    : "border-transparent bg-transparent"
            )}
        >
            <div className="container-custom flex h-20 items-center justify-between w-full">
                <Link href="/" className="group flex items-center gap-3">
                    <div className="scale-75 origin-left">
                        <HankoBadge />
                    </div>
                    <span className="font-serif text-lg font-medium tracking-tight opacity-0 transition-opacity duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hidden sm:block">
                        {portfolioData.personal.name}
                    </span>
                </Link>
                <nav className="flex items-center gap-6 md:gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium tracking-wide text-ink/70 transition-colors hover:text-ink hover:underline hover:decoration-sakura hover:decoration-2 hover:underline-offset-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 pl-4 border-l border-ink/10 ml-2">
                        <a
                            href={portfolioData.personal.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink/60 hover:text-ink transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                        <a
                            href={portfolioData.personal.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink/60 hover:text-ink transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </motion.header >
    );
}
