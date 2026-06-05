import type { NextConfig } from "next";

// Served from a GitHub Pages project page: https://yizhakbot.github.io/yizhakbot.com/
// basePath/assetPrefix make routing and asset URLs resolve under the /yizhakbot.com subpath.
const repoBasePath = "/yizhakbot.com";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
