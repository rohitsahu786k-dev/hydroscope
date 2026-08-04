import { getFooterData } from "@/lib/cms/globals";
import { siteConfig } from "@/lib/site";
import { MotionFooter } from "./ui/motion-footer";

/* Footer link groups follow the content guide: Company, then the whole
   Solutions range including the smaller IoT modules. Address, phone and email
   are rendered separately by MotionFooter from siteConfig, which is the guide's
   "Inquire" group. */
const defaultColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "HydroPure", href: "/solutions/hydropure" },
      { label: "HydroSense", href: "/solutions/hydrosense" },
      { label: "HydroSure", href: "/solutions/hydrosure" },
      { label: "HydroPilot", href: "/solutions/other-iot-solutions#hydropilot" },
      { label: "HydroEdge", href: "/solutions/other-iot-solutions#hydroedge" },
      { label: "HydroVerse", href: "/solutions/hydroverse" }
    ]
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export async function Footer() {
  const footer = await getFooterData();
  const columns = footer.columns.length ? footer.columns : defaultColumns;

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
