import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 192, 384],
    remotePatterns: [],
  },
  async headers() {
    const assetCache = [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }];
    return [
      { source: "/projects/:path*", headers: assetCache },
      { source: "/services/:path*", headers: assetCache },
    ];
  },
};

export default nextConfig;
