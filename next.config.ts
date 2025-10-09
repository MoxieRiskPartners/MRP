import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/client-portal',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.nowcerts.com https://www7.nowcerts.com https://*.nowcerts.com",
              "style-src 'self' 'unsafe-inline' https://www.nowcerts.com https://www7.nowcerts.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https:",
              "connect-src 'self' https://www.nowcerts.com https://www7.nowcerts.com https://*.nowcerts.com",
              "frame-src 'self' https://www.nowcerts.com https://www7.nowcerts.com https://*.nowcerts.com",
              "form-action 'self' https://www.nowcerts.com https://www7.nowcerts.com https://*.nowcerts.com"
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ]
  },
  
  // Allow images from NowCerts domain
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.nowcerts.com',
      },
      {
        protocol: 'https',
        hostname: 'www7.nowcerts.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nowcerts.com',
      }
    ],
  },

  // Enable CORS for the client portal
  async rewrites() {
    return [
      {
        source: '/api/nowcerts/:path*',
        destination: 'https://www7.nowcerts.com/:path*',
      },
    ]
  },
  // Add webpack config to help with module resolution
  webpack: (config) => {
    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js'];
    return config;
  },
};

export default nextConfig;