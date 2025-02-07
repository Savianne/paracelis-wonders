import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
        {
            source: '/:path*', // Match all routes
            headers: [
                { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
                { key: 'Pragma', value: 'no-cache' },
                { key: 'Expires', value: '0' },
            ],
        },
    ];
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '88.222.244.153',
        port: '3001',  // Include the port used in your error message
        pathname: '/images/gallery/**',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  }, 
};

export default nextConfig;
