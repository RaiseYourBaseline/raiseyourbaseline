import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Institute is now part of the Academy page.
      { source: "/institute", destination: "/academy#institute", permanent: true },
      // RYB YOY used to live at /wink.
      { source: "/wink/:path*", destination: "/yoy/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
