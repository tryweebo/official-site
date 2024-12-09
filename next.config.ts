import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.hashnode.com' },
      { hostname: 'cdn.dribbble.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig
