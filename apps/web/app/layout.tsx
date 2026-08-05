import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/json-ld";
import { WaterAnimation } from "@/components/water-animation";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

/* Google Analytics 4. The id is not a secret - it ships in the page source of
   every site that uses it - so it lives here rather than in an env var, which
   would mean a missing variable silently switching analytics off in
   production. */
const GA_MEASUREMENT_ID = "G-K24DWY2RE8";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "HYDROscope | Smart Water Quality Monitoring",
    template: "%s"
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/og-hydroscope.svg"
  },
  /* Search Console ownership. Next renders this as the google-site-verification
     meta tag, so it does not have to be hand-written into the head. */
  verification: {
    google: "hnb3J2PjWBaEE-Jx8BelhCPWxpsscnEDlLEDVLLRz3Y"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        {/* afterInteractive: the tag loads once the page is usable, so it never
            competes with content for the first paint. next/script also keeps it
            out of the way of client-side route changes. */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>

        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <WaterAnimation />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
