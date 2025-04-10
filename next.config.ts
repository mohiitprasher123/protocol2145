import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      loaders: {},
      resolveAlias: {},
    },
  },
};

export default nextConfig;