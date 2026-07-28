import type { Faq } from "@hydroscope/types";

export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mx-auto grid max-w-4xl gap-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-hydro border border-hydro-line bg-white p-5 shadow-hydro">
          <summary className="cursor-pointer text-base font-extrabold text-hydro-ink">{faq.question}</summary>
          <p className="mt-3 text-sm text-hydro-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
