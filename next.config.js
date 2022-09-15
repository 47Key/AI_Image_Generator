/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['stablediffusion.0gku54smtinjm.us-east-1.cs.amazonlightsail.com'],
  }
}

module.exports = nextConfig
