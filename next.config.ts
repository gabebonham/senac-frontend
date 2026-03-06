import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "id-preview--c4ab52ad-9dc5-4aae-80b3-ac5c87436a18.lovable.app",
      },
      {
        protocol: "https",
        hostname: "ec.europa.eu",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
