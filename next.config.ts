import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo is NOT <username>.github.io, add basePath: '/your-repo-name'
};

export default nextConfig;
