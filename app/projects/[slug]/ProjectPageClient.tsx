"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/content";

function parseDescription(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.replace(/^-\s*/, "").trim())
    .filter(Boolean);
}

export function ProjectPageClient({
  project,
}: {
  project: (typeof portfolioData.projects)[0];
}) {
  const bullets = parseDescription(project.description);

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col">
      {/* Background boxes */}
      <Boxes />
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Content — pointer-events-none so boxes receive hover everywhere */}
      <div className="relative z-30 flex flex-col min-h-screen px-6 md:px-16 py-12 max-w-5xl mx-auto w-full pointer-events-none">

        {/* Back button */}
        <Link
          href="/#projects"
          className="pointer-events-auto inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-16 w-fit"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
            >
              View Live <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Bullets */}
        <div className="mb-12 space-y-5">
          {bullets.map((bullet, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-white/30 mt-1 flex-shrink-0">—</span>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs uppercase border border-white/15 px-3 py-1.5 text-white/50 tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
