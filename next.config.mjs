/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  ...(isVercel ? {} : { output: "export" }),
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        // Block access to PHP files on the Node.js/Vercel server
        // so source code (and credentials) aren't leaked as plain text.
        source: '/:path*.php',
        destination: '/404',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
