import path from "path";
import { fileURLToPath } from "url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { buildConfig, type SharpDependency } from "payload";
import sharp from "sharp";
import { Applications } from "./collections/Applications";
import { BlogPosts } from "./collections/BlogPosts";
import { CaseStudies } from "./collections/CaseStudies";
import { Categories } from "./collections/Categories";
import { Enquiries } from "./collections/Enquiries";
import { FAQs } from "./collections/FAQs";
import { Media } from "./collections/Media";
import { Menus } from "./collections/Menus";
import { Pages } from "./collections/Pages";
import { Products } from "./collections/Products";
import { Solutions } from "./collections/Solutions";
import { Tags } from "./collections/Tags";
import { Users } from "./collections/Users";
import { FooterGlobal } from "./globals/Footer";
import { HeaderGlobal } from "./globals/Header";
import { HomePageGlobal } from "./globals/HomePage";
import { SiteSettings } from "./globals/SiteSettings";
import { seoHelperFields } from "./collections/fields";
import { cloudinaryAdapter } from "./lib/cms/cloudinary-adapter";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [Users, Media, Pages, Products, Solutions, Applications, BlogPosts, CaseStudies, Categories, Tags, FAQs, Enquiries, Menus],
  globals: [SiteSettings, HeaderGlobal, FooterGlobal, HomePageGlobal],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "dev-only-change-this-secret-before-production",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/hydroscope"
  }),
  sharp: sharp as unknown as SharpDependency,
  plugins: [
    cloudStoragePlugin({
      enabled: Boolean(process.env.CLOUDINARY_URL),
      collections: {
        media: {
          adapter: cloudinaryAdapter({ folder: "hydroscope" }),
          disableLocalStorage: true,
          disablePayloadAccessControl: true
        }
      }
    }),
    seoPlugin({
      collections: ["pages", "products", "solutions", "applications", "blog-posts", "case-studies"],
      globals: ["site-settings", "home-page"],
      uploadsCollection: "media",
      tabbedUI: true,
      generateTitle: ({ doc }) => {
        const source = doc as { title?: string; name?: string; siteName?: string };
        return source.title || source.name || source.siteName || "HYDROscope";
      },
      generateDescription: ({ doc }) => {
        const source = doc as { excerpt?: string; shortDescription?: string; subtitle?: string };
        return source.excerpt || source.shortDescription || source.subtitle || "HYDROscope smart water solutions.";
      },
      fields: ({ defaultFields }) => [...defaultFields, ...seoHelperFields]
    })
  ]
});
