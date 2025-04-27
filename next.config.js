/** @type {import('next').NextConfig} */

// Определяем, в каком окружении мы находимся
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Используем basePath и assetPrefix только в production
  ...(isProduction ? {
    basePath: '/climatase',
    assetPrefix: '/climatase/',
    trailingSlash: true,
  } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
};

module.exports = nextConfig;
