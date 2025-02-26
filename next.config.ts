import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
