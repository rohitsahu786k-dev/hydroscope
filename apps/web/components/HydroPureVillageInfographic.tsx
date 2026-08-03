import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Eye,
  FileCheck2,
  Pipette,
  RadioTower,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";

const challengePoints = [
  "Aging water infrastructure and leakages",
  "Inconsistent chlorination practices",
  "Manual handling and human error",
  "No real-time monitoring or visibility",
  "Health risks and waterborne diseases"
];

const traditionalCards = ["Manual chlorination", "Inconsistent dosing", "No monitoring", "Health risks"];

const benefits = [
  ["Accurate Dosing", Pipette],
  ["Real-Time Visibility", Eye],
  ["Audit-Ready Reporting", FileCheck2],
  ["Safer Disinfection", ShieldCheck]
];

const processSteps = [
  ["Manual gap", "Irregular field dosing"],
  ["Smart unit", "Automated HydroPure control"],
  ["Live proof", "Dashboard-ready reporting"]
];

const liveStats = [
  ["0.35", "mg/L chlorine"],
  ["12.5", "KL/hr flow"],
  ["Live", "tank status"],
  ["Auto", "dosing control"]
];

const imagePaths = {
  solution: "/images/hydropure-infographic/hydropure-smart-automated-water-safety-solution.webp"
};

export default function HydroPureVillageInfographic() {
  return (
    <section className="relative mt-10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-hydro-blue shadow-[0_10px_24px_rgba(18,88,182,0.08)]">
            <RadioTower size={14} aria-hidden="true" />
            Smart Jal Suraksha
          </span>
          <h2 className="mt-4 text-[clamp(34px,4.7vw,64px)] font-normal leading-[0.98] tracking-[-0.05em] text-hydro-ink">
            One monitored layer for safer village water tanks
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-hydro-muted sm:text-lg">
            HydroPure brings the field installation, dosing automation and live dashboard into one clear operating story.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-md bg-white shadow-[0_28px_80px_rgba(18,88,182,0.12)]">
          <div className="relative min-h-[440px] overflow-hidden bg-hydro-soft sm:min-h-[560px] lg:min-h-[620px]">
            <Image
              src={imagePaths.solution}
              alt="HydroPure smart automated water safety solution with dashboard and mobile monitoring"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,36,76,0.76)_0%,rgba(9,36,76,0.42)_38%,rgba(9,36,76,0.04)_72%)]" aria-hidden="true" />
            <div className="absolute left-5 top-5 rounded-full bg-white/92 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1e8f4d] shadow-[0_10px_24px_rgba(9,36,76,0.16)] sm:left-8 sm:top-8">
              HydroPure Solution
            </div>
            <div className="absolute bottom-0 left-0 max-w-2xl p-5 text-white sm:p-8 lg:p-10">
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#b9f0d0]">
                <Sparkles size={15} aria-hidden="true" />
                Automated dosing + live monitoring
              </p>
              <h3 className="mt-4 text-[clamp(34px,5vw,72px)] font-normal leading-[0.95] tracking-[-0.055em]">
                Smart disinfection with proof on screen
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#dcecff]">
                HydroPure turns every tank into a measurable water-safety node with accurate dosing, dashboard visibility, alerts and audit-ready reporting.
              </p>
            </div>
            <div className="absolute bottom-5 right-5 hidden w-[330px] gap-3 sm:grid sm:grid-cols-2 lg:bottom-8 lg:right-8">
              {liveStats.map(([value, label]) => (
                <div key={label} className="rounded-md bg-white/92 p-4 shadow-[0_16px_34px_rgba(9,36,76,0.18)] backdrop-blur">
                  <p className="text-2xl font-extrabold tracking-[-0.04em] text-hydro-ink">{value}</p>
                  <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.11em] text-hydro-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.95fr_0.36fr_1.12fr]">
            <div className="bg-[#fffafa] p-5 sm:p-7 lg:p-8">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-[#fff0ef] text-[#d64343]">
                  <AlertTriangle size={19} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#d64343]">The challenge</p>
                  <h3 className="mt-1 text-2xl font-normal tracking-[-0.04em] text-hydro-ink">Manual operation creates blind spots</h3>
                  <p className="mt-2 text-sm leading-6 text-hydro-muted">
                    Even treated water can become unsafe when storage, dosing and field reporting depend on irregular manual checks.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-2">
                {challengePoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-bold text-hydro-ink shadow-[0_8px_20px_rgba(214,67,67,0.06)]">
                    <span className="h-2.5 w-2.5 flex-none rounded-full bg-[#ef5b50]" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid bg-[linear-gradient(180deg,#f8fbff_0%,#eef7ff_100%)] p-5 sm:p-7 lg:p-6">
              <div className="self-center">
                <p className="text-center text-xs font-extrabold uppercase tracking-[0.16em] text-hydro-blue">Traditional practice</p>
                <div className="my-5 flex items-center justify-center" aria-hidden="true">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-hydro-blue text-white shadow-[0_14px_28px_rgba(18,88,182,0.22)]">
                    <ArrowRight size={20} />
                  </span>
                </div>
                <div className="grid gap-3">
                  {traditionalCards.map((card) => (
                    <div key={card} className="flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-[0_10px_24px_rgba(16,23,41,0.06)]">
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#fff0ef] text-[#d64343]">
                        <X size={19} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <p className="text-sm font-extrabold leading-snug text-hydro-ink">{card}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f4fbff_100%)] p-5 sm:p-7 lg:p-8">
              <p className="inline-flex rounded-full bg-[#e9f8ef] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1e8f4d]">
                What changes
              </p>
              <h3 className="mt-4 text-[clamp(26px,2.6vw,38px)] font-normal leading-[1.02] tracking-[-0.045em] text-hydro-ink">
                A monitored dosing layer built for distributed water tanks
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-hydro-muted">
                The operator no longer waits for manual reports. HydroPure creates a live operating picture with dosing accuracy, health status and proof for review.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {benefits.map(([label, Icon]) => (
                  <div key={label as string} className="rounded-md bg-white p-4 shadow-[0_12px_26px_rgba(18,88,182,0.07)]">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-[#e8f3ff] text-hydro-blue">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-sm font-extrabold leading-tight text-hydro-ink">{label as string}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-md bg-[#f2fbf6] px-4 py-3 text-sm font-extrabold text-[#1d6d3b]">
                <CheckCircle2 size={18} className="flex-none text-[#1e8f4d]" aria-hidden="true" />
                Village Tank Problem - Manual Practice Gap - HydroPure Smart Solution
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {processSteps.map(([title, text], index) => {
            const Icon = index === 0 ? AlertTriangle : index === 1 ? Activity : CheckCircle2;

            return (
              <div key={title} className="flex items-center gap-4 rounded-md bg-white p-4 shadow-[0_12px_30px_rgba(18,88,182,0.07)]">
                <span className={`grid h-11 w-11 flex-none place-items-center rounded-full ${index === 0 ? "bg-[#fff0ef] text-[#d64343]" : index === 1 ? "bg-[#e8f3ff] text-hydro-blue" : "bg-[#e9f8ef] text-[#1e8f4d]"}`}>
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-hydro-ink">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-hydro-muted">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
