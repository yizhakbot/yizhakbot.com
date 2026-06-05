import type { NextConfig } from "next";

// Served from a GitHub Pages project page: https://yizhakbot.github.io/yizhakbot.com/
// basePath/assetPrefix make routing and asset URLs resolve under the /yizhakbot.com subpath.
// Only applied for the production build/export — in `next dev` we keep it empty so
// the site is reachable at http://localhost:3000/ instead of a 404 under the subpath.
const repoBasePath =
  process.env.NODE_ENV === "production" ? "/yizhakbot.com" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  // Exposed to client code that must prefix asset URLs manually (e.g. next/image
  // with unoptimized images, which doesn't auto-apply basePath).
  env: { NEXT_PUBLIC_BASE_PATH: repoBasePath },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
