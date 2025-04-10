/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      loaders: {},
      rules: {},
    },
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias['@react-three/fiber'] = '@react-three/fiber/dist/react-three-fiber.esm.js';
      config.resolve.alias['@react-three/drei'] = '@react-three/drei/web';
    }
    return config;
  },
};

module.exports = nextConfig;