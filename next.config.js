/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  ...(isProduction && {
    basePath: '/climatise',
    assetPrefix: '/climatise/',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: isProduction
      ? '/climatise/'
      : '/',
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
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
