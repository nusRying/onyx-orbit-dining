import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/onyx-orbit-dining',
  trailingSlash: true,
};

export default nextConfig;
