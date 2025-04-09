/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/kieran-mahon.github.io/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
