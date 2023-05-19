/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:4200/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `http://localhost:4200/uploads/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
