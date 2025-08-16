import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "x.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
