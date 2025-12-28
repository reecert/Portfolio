import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: { unoptimized: true },

  // Set the base path for GitHub Pages deployment (subdirectory)
  // CHANGE THIS if your repository name is different!
  basePath: "/portfolio-sakura",
};

export default nextConfig;
