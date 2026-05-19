import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/darkpix.ru",
  trailingSlash: true,
};

export default nextConfig;
