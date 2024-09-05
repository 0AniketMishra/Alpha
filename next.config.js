/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos'], // Add your image domains here
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://identitytoolkit.googleapis.com/v1/:path*',
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
        ];
    },
}

module.exports = nextConfig
