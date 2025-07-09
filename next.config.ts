import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Exclude gRPC libraries from bundling to prevent build errors
  serverExternalPackages: ['google-gax', '@google-cloud/datastore'],
};

export default nextConfig;
