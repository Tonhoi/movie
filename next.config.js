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
};

module.exports = nextConfig;
