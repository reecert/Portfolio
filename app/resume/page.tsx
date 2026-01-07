"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-paper pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="w-full max-w-5xl space-y-8">
                {/* Header Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Link
                        href="/"
                        className="flex items-center text-ink/60 hover:text-ink transition-colors text-sm font-medium group"
                    >
                        <svg
                            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Portfolio
                    </Link>

                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:py-2 bg-ink text-white rounded-sm hover:bg-gray-800 transition-colors shadow-sm text-sm font-medium"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Download PDF
                    </a>
                </div>

                {/* PDF Viewer Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-[80vh] sm:h-auto sm:aspect-[1/1.2] bg-white rounded-sm shadow-md overflow-hidden border border-gray-200 relative"
                >
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-full"
                        title="Resume PDF"
                    />
                </motion.div>
            </div>
        </div>
    );
}
