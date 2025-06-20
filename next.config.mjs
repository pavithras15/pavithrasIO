/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pavithrasIO',      // your repo name
  assetPrefix: '/pavithrasIO/',  // your repo name
  images: { unoptimized: true }, // if using next/image
  devIndicators: false // disables dev tools UI
};

export default nextConfig;
