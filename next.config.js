/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.sport-nutrition-premium.ru',
                pathname: '/uploads/**',
            },
        ],
    },
    reactStrictMode: false,
}

module.exports = nextConfig
