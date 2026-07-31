import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default withPayload(nextConfig);
