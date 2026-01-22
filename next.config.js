/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "cdn.oregontowncar.com",
      "images.oregontowncar.com",
      "images.unsplash.com",
      "unsplash.com",
    ],
  },
}

module.exports = nextConfig
