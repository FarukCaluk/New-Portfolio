import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all local image formats
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  // Performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",   value: "nosniff" },
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-XSS-Protection",          value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
