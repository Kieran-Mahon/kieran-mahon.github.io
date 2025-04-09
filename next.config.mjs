/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/kieran-mahon.github.io/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
