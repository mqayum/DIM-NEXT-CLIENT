/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      },
      {
        protocol: 'https',
        hostname: 'dim-next-client.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9999'
      },
      {
        protocol: 'https',
        hostname: 'dim-next-server.up.railway.app',
      },
    ],
  },
}
module.exports = nextConfig
