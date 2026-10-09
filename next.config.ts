import type { NextConfig } from "next";

// Static export for Cloudflare Pages.
// Security headers live in public/_headers (Cloudflare Pages applies them).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
