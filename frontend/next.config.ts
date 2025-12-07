import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Allow production builds even if ESLint errors exist
    // This allows docker to make a container even if our ESLint errors are being thrown
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
