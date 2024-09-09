/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "i.ibb.co.com" },
      { hostname: "picsum.photos" },
      { hostname: "camo.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
