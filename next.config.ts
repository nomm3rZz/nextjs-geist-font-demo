import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  allowedDevOrigins: ['j74pxn-8000.csb.app'], // Add the allowed origin for development
}

export default nextConfig
