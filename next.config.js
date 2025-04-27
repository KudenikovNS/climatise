/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Настройка для SVG файлов
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
};

module.exports = nextConfig;
