import { products, solutions } from "@/lib/content";
import { getFooterData } from "@/lib/cms/globals";
import { siteConfig } from "@/lib/site";
import { MotionFooter } from "./ui/motion-footer";

export async function Footer() {
  const footer = await getFooterData();
  const columns = footer.columns.length
    ? footer.columns
    : [
        { heading: "Solutions", links: solutions.slice(0, 5).map((solution) => ({ label: solution.title, href: `/solutions/${solution.slug}` })) },
        { heading: "Products", links: products.slice(0, 5).map((product) => ({ label: product.title, href: `/products/${product.slug}` })) }
      ];

  return (
    <MotionFooter
      description={footer.description}
      columns={columns}
      bottomText={footer.bottomText}
      email={siteConfig.email}
      phone={siteConfig.phone}
      location={siteConfig.location}
      tagline={siteConfig.tagline}
    />
  );
}
