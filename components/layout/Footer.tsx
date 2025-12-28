import Link from "next/link";
import { portfolioData } from "@/data/content";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 bg-gray-50 py-12 md:py-16">
            <div className="container-custom flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">
                        © {year} {portfolioData.personal.name}. All rights reserved.
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                        Handcrafted with Next.js, Tailwind, & Sakura.
                    </p>
                </div>

                <div className="flex gap-6">
                    {Object.entries(portfolioData.personal.social).map(([key, url]) => (
                        <a
                            key={key}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium capitalize text-gray-500 transition-colors hover:text-sakura"
                        >
                            {key}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
