# HYDROscope MERN Website

Production-oriented MERN-compatible rebuild for HYDROscope with a Next.js SEO-first frontend and Payload CMS as the MongoDB-backed admin/backend.

## Structure

- `apps/web` - Next.js App Router, Payload CMS, TypeScript, Tailwind CSS, metadata API, sitemap, robots, JSON-LD via `next-seo` and `schema-dts`
- `apps/api` - legacy Express API scaffold retained but no longer required for the Payload-powered site
- `packages/types` - shared TypeScript content and API types

## Local Setup

```bash
npm install
cp apps/web/.env.example apps/web/.env.local
npm run dev:web
```

Set `DATABASE_URI` or `MONGODB_URI` and `PAYLOAD_SECRET` before using the Payload admin at `/admin`.
Set `CLOUDINARY_URL` to enable Cloudinary-backed Payload media uploads.

## Build Commands

```bash
npm run typecheck
npm run build
```

## SEO Implementation

- `generateMetadata` is used for all indexable static and dynamic routes.
- `next-seo` is used for JSON-LD helpers: Product, Article, FAQ and Breadcrumb schemas.
- `/app/sitemap.ts` includes static, product, solution, blog and case-study URLs.
- `/app/robots.ts` allows public routes and blocks `/admin`.
- Clean URLs are used for products, solutions, blog and case studies.
- Content is server-rendered for SEO-critical pages.

## Payload CMS

- Admin panel: `/admin`
- REST API: `/api/{collection}`
- GraphQL: `/graphql`
- GraphQL Playground: `/graphql-playground`
- Collections: Pages, Products, Solutions, Applications, Blog Posts, Case Studies, Categories, Tags, FAQs, Media, Users, Enquiries and Menus.
- Globals: Website Settings, Header, Footer and Home Page.
- SEO plugin: enabled on core content collections and globals with extra fields for focus keyword, canonical URL, robots toggles, OG/Twitter fields, schema selector, custom JSON-LD and a practical SEO checklist score.

## Deployment

- Frontend: Vercel. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_API_URL`.
- Backend/CMS: Payload runs inside the Next.js app. Deploy on Vercel or a Node host that supports Payload and MongoDB.
- Database: MongoDB Atlas.
- DNS/CDN: Cloudflare.

## Production Checklist

- Use a long random `PAYLOAD_SECRET`.
- Create the first admin user at `/admin` after MongoDB is configured.
- Replace any MongoDB URI username placeholders before enabling `DATABASE_URI` or `MONGODB_URI`.
- Keep `CLOUDINARY_URL` and database credentials out of git and configure them only in local `.env.local` or hosting provider secrets.
- Confirm verified company address, logo, OG image and LocalBusiness details before expanding schema.
- Add real product media and verified case studies through the CMS.
- Configure transactional email for enquiry notifications.
- Enable HTTPS, server logs, backups and MongoDB Atlas IP/network rules.
- Run Lighthouse and Core Web Vitals checks after deployment.
