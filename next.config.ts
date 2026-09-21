import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Tambahkan domain di sini jika nanti gambar project/portfolio
    // di-hosting secara eksternal (mis. CMS atau storage terpisah).
    remotePatterns: [],
  },
};

export default nextConfig;
