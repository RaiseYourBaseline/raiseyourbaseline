import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Institute is now part of the Academy page.
  async redirects() {
    return [{ source: "/institute", destination: "/academy#institute", permanent: true }];
  },
};

export default nextConfig;
