import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Privacy Policy | HYDROscope", description: "HYDROscope privacy policy for website visitors and B2B enquiries.", path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return <Legal title="Privacy Policy" body="HYDROscope collects enquiry details submitted through the website to respond to product, solution, deployment and partnership requests. Do not submit confidential information through public forms." />;
}

function Legal({ title, body }: { title: string; body: string }) {
  return <main className="hydro-section"><Container><h1 className="text-5xl font-extrabold">{title}</h1><p className="mt-6 max-w-3xl text-hydro-muted">{body}</p></Container></main>;
}
