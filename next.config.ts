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

  // 301 Redirects for SEO and old URLs
  async redirects() {
    return [
      // Workers Comp redirect
      {
        source: '/workers-comp',
        destination: '/workers-compensation',
        permanent: true,
      },
      // Construction redirect
      {
        source: '/construction',
        destination: '/construction-insurance',
        permanent: true,
      },
      // Accessibility redirect
      {
        source: '/accessibility',
        destination: '/about-us',
        permanent: true,
      },
      // Owner Operator nested URL redirect
      {
        source: '/trucking-insurance/owner-operator',
        destination: '/owner-operator',
        permanent: true,
      },
      // All fleet insurance nested pages redirect to trucking
      {
        source: '/fleet-insurance/:path*',
        destination: '/trucking-transportation',
        permanent: true,
      },
      // All trucking insurance nested pages redirect to main page
      {
        source: '/trucking-insurance/:path*',
        destination: '/trucking-transportation',
        permanent: true,
      },
      // All owner operator nested pages redirect to main page
      {
        source: '/owner-operator-insurance/:path*',
        destination: '/owner-operator',
        permanent: true,
      },
      // All manufacturing nested pages redirect to main page
      {
        source: '/manufacturing-insurance/:path*',
        destination: '/manufacturing-insurance',
        permanent: true,
      },
      // All construction nested pages redirect to main page
      {
        source: '/construction-insurance/:path*',
        destination: '/construction-insurance',
        permanent: true,
      },
      // All nonprofit nested pages redirect to main page
      {
        source: '/nonprofit-insurance/:path*',
        destination: '/non-profit',
        permanent: true,
      },
      // All public entity nested pages redirect to main page
      {
        source: '/public-entity-insurance/:path*',
        destination: '/public-entity',
        permanent: true,
      },
      // Other standalone insurance pages
      {
        source: '/cyber-liability-insurance',
        destination: '/coverage-options',
        permanent: true,
      },
      {
        source: '/directors-officers-insurance',
        destination: '/non-profit',
        permanent: true,
      },
      {
        source: '/employment-practices-liability',
        destination: '/coverage-options',
        permanent: true,
      },
      {
        source: '/professional-liability-insurance',
        destination: '/coverage-options',
        permanent: true,
      },
      {
        source: '/commercial-property-insurance',
        destination: '/coverage-options',
        permanent: true,
      },
      {
        source: '/general-liability-insurance',
        destination: '/coverage-options',
        permanent: true,
      },
      // Service areas and industries pages
      {
        source: '/service-areas',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/industries/:path*',
        destination: '/coverage-options',
        permanent: true,
      },
      // Quote page variations
      {
        source: '/quote',
        destination: '/quote-form',
        permanent: true,
      },
    ];
  },

  // Add webpack config to help with module resolution
  webpack: (config) => {
    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js'];
    return config;
  },
};

export default nextConfig;