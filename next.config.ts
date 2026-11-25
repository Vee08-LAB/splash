import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  
  // THIS IS THE FIX: Stops Turbopack from aggressively bundling Prisma, 
  // which breaks TypeScript resolution during `next build`.
  serverExternalPackages: ["@prisma/client", "prisma"],
  
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;