import path from "node:path";
import { fileURLToPath } from "node:url";
import { withPayload } from "@payloadcms/next/withPayload";

const here = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.join(here, "..", "..");

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || ".next",

  /* Hostinger's hPanel Node.js app runs a single entry file under Passenger,
     with whatever sits beside it. "standalone" emits exactly that shape: a
     server.js plus only the dependencies the build actually traced. Without it
     a deploy would mean uploading the entire node_modules tree of a workspace
     monorepo. */
  output: "standalone",

  /* Dependencies are hoisted to the monorepo root node_modules rather than
     apps/web, so tracing has to start from the root or the bundle comes out
     missing them. */
  outputFileTracingRoot: monorepoRoot,

  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default withPayload(nextConfig);
