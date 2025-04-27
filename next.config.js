/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/climatase',
  assetPrefix: '/climatase/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,

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
