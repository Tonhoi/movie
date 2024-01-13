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

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Loại bỏ các đoạn mã không cần thiết ở môi trường production
      config.optimization.minimize = true;
    }

    return config;
  },
};

module.exports = nextConfig;
