/* Assembles the folder that gets uploaded to Hostinger's Node.js app.
 *
 * `next build` with output: "standalone" writes a runnable server.js and the
 * traced dependencies, but deliberately leaves out two things, because on most
 * platforms a CDN serves them:
 *   - .next/static  (the JS and CSS the browser loads)
 *   - public/       (images, logo, robots.txt)
 * Passenger serves everything from the app directory itself, so both have to be
 * copied in or the site loads as unstyled HTML with broken images.
 *
 * Run with: npm run bundle   (from the repo root)
 * Result:   deploy/  - upload its contents to the app root on the host. */

import { cp, mkdir, rm, readdir, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const web = path.join(root, "apps", "web");
const standalone = path.join(web, ".next", "standalone");
const out = path.join(root, "deploy");

/* In a workspace monorepo Next mirrors the repo layout inside standalone, so
   server.js lands at standalone/apps/web/server.js with node_modules hoisted
   to standalone/. A single-package build puts server.js at the top instead;
   handle both rather than assuming. */
function appDir() {
  const nested = path.join(standalone, "apps", "web");
  if (existsSync(path.join(nested, "server.js"))) return nested;
  if (existsSync(path.join(standalone, "server.js"))) return standalone;
  return null;
}

async function dirSize(dir) {
  let total = 0;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    total += entry.isDirectory() ? await dirSize(full) : (await stat(full)).size;
  }
  return total;
}

async function main() {
  if (!existsSync(standalone)) {
    console.error("No standalone output found. Run `npm run build` first.");
    process.exit(1);
  }

  const app = appDir();
  if (!app) {
    console.error("Could not find server.js inside the standalone output.");
    process.exit(1);
  }

  await rm(out, { recursive: true, force: true });
  await mkdir(out, { recursive: true });

  await cp(standalone, out, { recursive: true });

  /* Mirror the same nesting in the destination, so server.js keeps finding its
     own .next directory at the path it was built to expect. */
  const relative = path.relative(standalone, app);
  const target = path.join(out, relative);

  await cp(path.join(web, ".next", "static"), path.join(target, ".next", "static"), { recursive: true });
  await cp(path.join(web, "public"), path.join(target, "public"), { recursive: true });

  /* Passenger looks for its entry file at the application root. When the build
     nested it, leave a one-line shim at the top so the hPanel "startup file"
     is always app.js, whichever shape the build produced. */
  if (relative) {
    await writeFile(
      path.join(out, "app.js"),
      `/* Passenger entry point. The real server lives in the workspace folder\n` +
        `   the build nested it into; this only hands over to it. */\n` +
        `import("./${relative.split(path.sep).join("/")}/server.js");\n`
    );
  }

  /* Next copies the monorepo root package.json into the bundle, workspaces and
     dev scripts included. Pressing "NPM install" in hPanel against that would
     try to resolve workspaces that were never uploaded. Replace it with a
     minimal manifest: the dependencies are already vendored in node_modules,
     so there is nothing left to install. */
  await writeFile(
    path.join(out, "package.json"),
    JSON.stringify(
      {
        name: "hydroscope-web",
        private: true,
        version: "1.0.0",
        type: "commonjs",
        main: relative ? "app.js" : "server.js",
        scripts: { start: `node ${relative ? "app.js" : "server.js"}` },
        engines: { node: ">=20.11.0" }
      },
      null,
      2
    ) + "\n"
  );

  const size = await dirSize(out);
  console.log("Bundled to deploy/");
  console.log("  server entry :", path.join(relative || ".", "server.js"));
  console.log("  passenger    : app.js");
  console.log("  size         :", (size / 1024 / 1024).toFixed(1) + " MB");
  console.log("\nUpload the CONTENTS of deploy/ to the application root on the host.");
}

main();
