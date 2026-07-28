"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent: formData.get("consent") === "on", sourcePage: window.location.pathname })
      });

      if (!response.ok) throw new Error("Unable to submit enquiry");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-hydro border border-hydro-line bg-white p-6 shadow-hydro">
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" />
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <Field label="Name" name="name" required />
        <Field label="Organization" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" />
        <Field label="Country" name="country" defaultValue="India" required />
        <Field label="City and state" name="cityState" />
        <label className="grid gap-2 text-sm font-bold">
          Requirement type
          <select name="requirementType" required className="min-h-12 rounded-md border border-hydro-line px-3 font-medium text-hydro-ink">
            <option>Rural drinking-water scheme</option>
            <option>Municipal / government project</option>
            <option>Industrial water treatment</option>
            <option>Product demo</option>
            <option>Dashboard walkthrough</option>
            <option>Model recommendation</option>
            <option>Partnership</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <Field label="Application type" name="applicationType" />
        <Field label="Daily water demand" name="dailyWaterDemand" />
        <Field label="Tank capacity" name="tankCapacity" />
        <Field label="Number of sites" name="numberOfSites" />
        <Field label="Power availability" name="powerAvailability" />
        <Field label="Solar requirement" name="solarRequirement" />
      </div>
      <Field label="Monitoring requirement" name="interest" />
      <label className="grid gap-2 text-sm font-bold">
        Message
        <textarea name="message" required rows={5} className="rounded-md border border-hydro-line px-3 py-3 font-medium text-hydro-ink" />
      </label>
      <label className="flex gap-3 text-sm text-hydro-muted">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4" />
        I consent to HYDROscope contacting me about this enquiry.
      </label>
      <button type="submit" disabled={status === "sending"} className="hydro-gradient min-h-12 rounded-[7px] px-5 text-sm font-bold text-white disabled:opacity-70">
        {status === "sending" ? "Sending..." : "Submit enquiry"}
      </button>
      {status === "sent" ? <p className="text-sm font-bold text-hydro-blue">Thanks. Your enquiry has been recorded.</p> : null}
      {status === "error" ? <p className="text-sm font-bold text-red-600">Submission failed. You can also email contact@hydroscope.in.</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text", required, defaultValue }: { label: string; name: string; type?: string; required?: boolean; defaultValue?: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      {label}
      <input name={name} type={type} required={required} defaultValue={defaultValue} className="min-h-12 rounded-md border border-hydro-line px-3 font-medium text-hydro-ink" />
    </label>
  );
}
