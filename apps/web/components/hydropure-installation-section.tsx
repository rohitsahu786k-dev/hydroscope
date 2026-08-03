import Image from "next/image";
import Link from "next/link";
import styles from "./hydropure-installation-section.module.css";

/* --------------------------------------------------------------------------
 * Background artwork.
 *
 * Save the supplied infographic here, unmodified:
 *   apps/web/public/images/hydropure-infographic/hydropure-installation-village-tank.png
 *
 * No text is baked into the file - every word below is HTML overlaid on top.
 * `width`/`height` must equal the file's real pixel size: they set the reserved
 * aspect ratio, and a mismatch would letterbox or shift the overlay anchors.
 * ---------------------------------------------------------------------- */
const backgroundImage = {
  src: "/images/hydropure-infographic/hydropure-installation-village-tank.png",
  alt: "HydroPure automated village water-tank chlorination installation with solar power, IoT monitoring and cloud dashboard.",
  width: 1672,
  height: 941
};

type TextItem = {
  id: string;
  heading: string;
  description: string;
};

const features: TextItem[] = [
  {
    id: "on-site-chlorine-generation",
    heading: "On-Site Chlorine Generation",
    description: "Fresh disinfectant produced directly at the installation site."
  },
  {
    id: "fully-automated-operation",
    heading: "Fully Automated Operation",
    description: "Automated dosing, safety controls and continuous system operation."
  },
  {
    id: "iot-enabled-monitoring",
    heading: "IoT-Enabled Monitoring",
    description: "Live device status, alerts and operational data from the cloud dashboard."
  },
  {
    id: "consistent-water-quality",
    heading: "Consistent Water Quality",
    description: "Accurate chlorination helps maintain safe and reliable water distribution."
  }
];

const benefits: TextItem[] = [
  {
    id: "safe-drinking-water",
    heading: "Safe Drinking Water",
    description: "Consistent disinfection for community water supplies."
  },
  {
    id: "reliable-and-protected",
    heading: "Reliable & Protected",
    description: "Automated safeguards reduce dosing and handling risks."
  },
  {
    id: "sustainable-technology",
    heading: "Sustainable Technology",
    description: "Low-power operation with solar-compatible deployment."
  },
  {
    id: "remote-visibility",
    heading: "Remote Visibility",
    description: "Monitor performance, alerts and reports from anywhere."
  }
];

type HydroPureInstallationSectionProps = {
  primaryHref?: string;
  secondaryHref?: string;
};

export function HydroPureInstallationSection({
  primaryHref = "/products/hydropure-intelligent-electrochlorinator",
  secondaryHref = "/how-it-works"
}: HydroPureInstallationSectionProps = {}) {
  return (
    <section
      id="hydropure-installation"
      aria-labelledby="hydropure-installation-heading"
      className={styles["hydropure-installation-section"]}
    >
      <div className={styles["hydropure-installation-visual"]}>
        {/* A. large top-left white area */}
        <div className={styles["hydropure-installation-hero"]}>
          <p className={styles["hydropure-installation-eyebrow-text"]}>HYDROPURE INSTALLATION</p>
          <h2
            id="hydropure-installation-heading"
            className={styles["hydropure-installation-heading-text"]}
          >
            Intelligent <span className={styles["hydropure-installation-highlight-text"]}>Water Safety</span> for
            Village Tanks
          </h2>
          <p className={styles["hydropure-installation-paragraph-text"]}>
            Automated on-site chlorination, real-time monitoring and reliable water-quality control for safer
            community water distribution.
          </p>
          <div className={styles["hydropure-installation-actions"]}>
            <Link
              href={primaryHref}
              className={`${styles["hydropure-installation-button"]} ${styles["hydropure-installation-button-primary"]}`}
            >
              Explore HydroPure
            </Link>
            <Link
              href={secondaryHref}
              className={`${styles["hydropure-installation-button"]} ${styles["hydropure-installation-button-secondary"]}`}
            >
              View How It Works
            </Link>
          </div>
        </div>

        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          width={backgroundImage.width}
          height={backgroundImage.height}
          sizes="(min-width: 1200px) 1200px, 100vw"
          loading="lazy"
          /* Background artwork, not a control: clicks and drags do nothing. */
          draggable={false}
          className={`${styles["hydropure-installation-image"]} pointer-events-none select-none`}
        />

        {/* B. middle-left supporting card */}
        <div className={styles["hydropure-installation-support"]}>
          <h3 className={styles["hydropure-installation-support-heading-text"]}>
            Smart Village Water Infrastructure
          </h3>
          <p className={styles["hydropure-installation-support-text-body"]}>
            A compact, automated and remotely monitored solution designed for village tanks, rural communities
            and decentralized water systems.
          </p>
        </div>

        {/* C. four right-side feature cards */}
        <ul className={styles["hydropure-installation-features"]}>
          {features.map((feature) => (
            <li key={feature.id} className={styles["hydropure-installation-feature"]}>
              <h3 className={styles["hydropure-installation-feature-heading-text"]}>{feature.heading}</h3>
              <p className={styles["hydropure-installation-feature-text-body"]}>{feature.description}</p>
            </li>
          ))}
        </ul>

        {/* D. four bottom benefit areas */}
        <ul className={styles["hydropure-installation-benefits"]}>
          {benefits.map((benefit) => (
            <li key={benefit.id} className={styles["hydropure-installation-benefit"]}>
              <h3 className={styles["hydropure-installation-benefit-heading-text"]}>{benefit.heading}</h3>
              <p className={styles["hydropure-installation-benefit-text-body"]}>{benefit.description}</p>
            </li>
          ))}
        </ul>

        {/* E. blue dashboard label below the laptop and mobile */}
        <div className={styles["hydropure-installation-dashboard"]}>
          <h3 className={styles["hydropure-installation-dashboard-heading-text"]}>Real-Time Cloud Dashboard</h3>
          <p className={styles["hydropure-installation-dashboard-text-body"]}>
            Live monitoring • Alerts • Analytics • Multi-site visibility
          </p>
        </div>
      </div>
    </section>
  );
}
