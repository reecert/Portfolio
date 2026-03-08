import { portfolioData } from "@/data/content";
import { notFound } from "next/navigation";
import { ProjectPageClient } from "./ProjectPageClient";

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: slugify(p.title) }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => slugify(p.title) === slug);
  if (!project) notFound();
  return <ProjectPageClient project={project} />;
}
