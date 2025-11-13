import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: { removeConsole: process.env.NODE_ENV === "production" },
  output: "standalone",
};

export default nextConfig;
