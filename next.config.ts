import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { esmExternals: "loose" },
  compiler: { removeConsole: process.env.NODE_ENV === "production" },
  output: "standalone",
};

export default nextConfig;
