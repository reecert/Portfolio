"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { portfolioData } from "@/data/content";

// Project-relevant thumbnails — cycles: ecommerce, AI, android, ecommerce, AI...
const thumbnails = [
  // E-commerce Deals Platform
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  // AI Incident Response Agent
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  // Android Chat App
  "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&q=80",
  // E-commerce (2)
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  // AI (2)
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  // Android (2)
  "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80",
  // E-commerce (3)
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  // AI (3)
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
  // Android (3)
  "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&q=80",
  // E-commerce (4)
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
];

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// Expand 3 projects → 10 product cards (2 rows × 5)
const products = Array.from({ length: 10 }, (_, i) => {
  const project = portfolioData.projects[i % portfolioData.projects.length];
  return {
    title: project.title,
    link: `/projects/${slugify(project.title)}`,
    thumbnail: thumbnails[i],
  };
});

export function Projects() {
  return (
    <section id="projects" className="bg-black">
      <HeroParallax products={products} />
    </section>
  );
}
