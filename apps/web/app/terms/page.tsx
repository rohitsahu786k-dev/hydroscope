import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Terms | HYDROscope", description: "Terms for using the HYDROscope website and requesting B2B product information.", path: "/terms" });

export default function TermsPage() {
  return (
    <main className="hydro-section">
      <Container>
        <h1 className="text-5xl font-normal">Terms</h1>
        <p className="mt-6 max-w-3xl text-hydro-muted">Website content is provided for business information. Product suitability, specifications and deployment scope should be confirmed directly with HYDROscope before procurement or implementation.</p>
      </Container>
    </main>
  );
}
