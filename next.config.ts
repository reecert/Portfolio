import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

// CHANGE THIS if your repository name is different!
const repoName = "Portfolio";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: isGithubActions ? "export" : undefined,
  images: { unoptimized: true },

  // Set the base path ONLY for GitHub Pages deployment
  basePath: isGithubActions ? `/${repoName}` : undefined,
};

export default nextConfig;
