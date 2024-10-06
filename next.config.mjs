/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{ hostname: 'github.com' }],
  },
}

export default nextConfig
