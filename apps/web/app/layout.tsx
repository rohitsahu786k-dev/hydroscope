import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/json-ld";
import { WaterAnimation } from "@/components/water-animation";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

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
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
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
