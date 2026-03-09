/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // Self-contained Node.js server — supports API routes on cPanel
  output: "export",
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
};

export default nextConfig;
