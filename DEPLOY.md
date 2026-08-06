# Deploying to Hostinger (hPanel Node.js app)

The site is a Next.js app. It needs Node to run, so it goes in hPanel's
**Node.js app**, not in `public_html` as static files.

## Why the old design was showing

The repo used to carry a 3.6 MB `index.html` at its root - a design reference
kept from the very first commit, never part of the built site. Whatever was
uploaded to the host included it, and LiteSpeed serves `index.html` at `/`
before anything else. So the domain returned that file and the Next.js app was
never reached.

That file has been deleted from the repo. **It also has to be deleted from the
server** - see step 5. Until it is gone from the web root, it will keep
shadowing the real site.

## 1. Build the bundle

From the repo root:

```bash
npm install
npm run bundle
```

That runs `next build` with `output: "standalone"` and then assembles
`deploy/`. The bundle is around 130 MB, most of it Payload CMS and `sharp`.

`npm run bundle` is the only build command you need. Do not run `npm install`
on the server: the bundle already contains the exact `node_modules` the build
traced, and the `package.json` inside it declares no dependencies for that
reason.

## 2. Upload

Upload the **contents** of `deploy/` (not the folder itself) to the application
directory you will point hPanel at - for example `domains/hydroscope.in/app`.

Keep the structure exactly as it is. `server.js` looks for `.next` beside
itself, so moving files around breaks it.

## 3. Create the Node.js app in hPanel

**Advanced → Node.js**, then:

| Field | Value |
| --- | --- |
| Node.js version | 20 or newer |
| Application mode | Production |
| Application root | the folder you uploaded into, e.g. `domains/hydroscope.in/app` |
| Application URL | `hydroscope.in` |
| Application startup file | `app.js` |

`app.js` is a one-line shim that hands over to the real server. It exists so the
startup file is the same whatever shape the build produced.

## 4. Environment variables

Set these in the Node.js app's environment section. `apps/web/.env.example`
lists them all; these are the ones the site will not work correctly without:

| Variable | Notes |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://hydroscope.in` - canonical URLs, sitemap and OG tags read this. If it is missing the site silently falls back and publishes the wrong URLs. |
| `DATABASE_URI` / `MONGODB_URI` | MongoDB connection string for Payload |
| `PAYLOAD_SECRET` | long random string |
| `PAYLOAD_PUBLIC_SERVER_URL` | `https://hydroscope.in` |
| `CONTACT_NOTIFICATION_EMAIL` | where the contact form sends to |
| `SMTP_*` or `RESEND_API_KEY` | whichever mail route you use |

Do not set `PORT`. Passenger assigns it.

## 5. Remove the old file from the server

In **File Manager**, delete `index.html` from the domain's web root
(`public_html` or `domains/hydroscope.in/public_html`). If any other files from
an earlier upload are sitting there, clear those too - the Node app serves the
site now, and anything left in the web root can take precedence over it.

## 6. Check it worked

```
https://hydroscope.in            -> the new home page, hero reads "Empowering Smarter Water Management"
https://hydroscope.in/solutions  -> the three-card range
https://hydroscope.in/admin      -> Payload login
```

If the page loads but has no styling, `.next/static` did not make it into the
upload. If images 404, `public/` did not. Both are copied in by
`tools/bundle-standalone.mjs`; re-run `npm run bundle` and re-upload.

## Redeploying after a change

```bash
git pull
npm run bundle
```

Upload the contents of `deploy/` again, then **Restart** the app in hPanel.
Passenger caches the running process; without a restart it keeps serving the
previous build.
