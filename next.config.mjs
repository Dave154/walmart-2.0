/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          },
          {
            protocol: 'https',
            hostname: 'i5.walmartimages.com',
          },
        ],
        unoptimized: false,
        minimumCacheTTL: 60, //Cache TTL in seconds
        deviceSizes: [320, 420, 768, 1024, 1200],
      },
};

export default nextConfig;
