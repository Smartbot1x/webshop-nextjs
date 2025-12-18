import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.figma.com" },
      { protocol: "https", hostname: "fakestoreapi.com" },
      { protocol: "https", hostname: "i.dummyjson.com" },
      { protocol: "https", hostname: "cdn.dummyjson.com" },
    ],
  },
};

export default nextConfig;
