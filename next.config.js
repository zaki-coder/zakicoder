/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: "",
            }
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
};