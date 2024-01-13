/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.ophim9.cc",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "img.ophim9.cc",
        pathname: "**",
      },
    ],
  },
  compress: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = true;
      config.resolve.fallback = {...config.resolve.fallback, fs: false, module: false };
    }

    return config;
  },
};

module.exports = nextConfig;
