import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/resume",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
