import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.m-okamoto.jp",
        pathname: "/wp-content/**",
      },
      {
        protocol: "http",
        hostname: "www.m-okamoto.jp",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
