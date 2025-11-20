/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.shields.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.thum.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    // Deduplicate Three.js to prevent multiple instances
    if (!isServer) {
      // Get the absolute path to the three module
      const threeModulePath = require.resolve('three');
      const threeBasePath = threeModulePath.substring(0, threeModulePath.lastIndexOf('node_modules') + 'node_modules/three'.length);

      config.resolve.alias = {
        ...config.resolve.alias,
        'three': threeBasePath,
      };

      // Ensure only one instance is loaded
      config.optimization = {
        ...config.optimization,
        providedExports: true,
        usedExports: true,
      };
    }
    return config;
  },
};

export default nextConfig;
