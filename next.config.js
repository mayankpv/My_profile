/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/My_profile',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
