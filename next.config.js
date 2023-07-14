/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.scenit-russia.ru',
                pathname: '/uploads/**',
            },
        ],
    },
    reactStrictMode: false,
    env: {
        // declare here all your variables
        MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
      }
}

module.exports = nextConfig
