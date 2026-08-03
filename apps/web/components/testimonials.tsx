import type { CSSProperties } from "react";

const testimonials = [
  {
    text: "Hydroscope helped us move away from manual chlorine checks. The field team now sees dosing status and alerts before small issues become complaints.",
    name: "Rajesh Meena",
    role: "Water Works Engineer"
  },
  {
    text: "The HydroPure installation was straightforward for our site team. Having on-site generation reduced chemical handling and made reporting much easier.",
    name: "Priya Sharma",
    role: "Municipal Project Lead"
  },
  {
    text: "We needed monitoring that could work across distributed water points. HydroSure gave our operators a clearer view of tank status, residual chlorine and response priorities.",
    name: "Amit Verma",
    role: "Operations Manager"
  },
  {
    text: "The dashboard has made our daily review meetings faster. Everyone can see the same site data, maintenance history and alert trends.",
    name: "Neha Kulkarni",
    role: "Quality Manager"
  },
  {
    text: "Solar compatibility mattered for our deployment. The Hydroscope team understood the site constraints and helped us choose a practical setup.",
    name: "Farhan Khan",
    role: "Infrastructure Consultant"
  },
  {
    text: "HydroSense has been useful for tracking water quality parameters without waiting for manual rounds. It gives our supervisors more confidence.",
    name: "Meera Joshi",
    role: "Plant Supervisor"
  },
  {
    text: "The biggest difference is accountability. Dosing, sensor readings and alerts are visible, which makes field follow-up much cleaner.",
    name: "Sanjay Patel",
    role: "Public Health Engineer"
  },
  {
    text: "For rural schemes, simple operation matters. HydroPure made chlorination less dependent on manual chemical preparation at each site.",
    name: "Kavita Rao",
    role: "Program Coordinator"
  },
  {
    text: "The product range gave us room to standardize across different capacities while keeping the monitoring layer consistent.",
    name: "Vikram Singh",
    role: "Procurement Head"
  }
];

const STYLES = `
@keyframes hydro-testimonial-scroll {
  from { transform: translateY(0); }
  to { transform: translateY(-50%); }
}

.hydro-testimonial-track {
  animation: hydro-testimonial-scroll var(--testimonial-duration, 18s) linear infinite;
}

.hydro-testimonial-column:hover .hydro-testimonial-track {
  animation-play-state: paused;
}
`;

type Testimonial = (typeof testimonials)[number];

const avatarColors = [
  "bg-[#e8f3ff] text-hydro-blue",
  "bg-[#eafbf6] text-[#07845f]",
  "bg-[#fff3df] text-[#b56300]",
  "bg-[#f0ecff] text-[#6a42d8]",
  "bg-[#ffecef] text-[#c73558]",
  "bg-[#e9fbff] text-[#087d9d]",
  "bg-[#f3f8e8] text-[#63840f]",
  "bg-[#f4eef8] text-[#8a3fa0]"
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function TestimonialsColumn({
  items,
  className = "",
  duration
}: {
  items: Testimonial[];
  className?: string;
  duration: number;
}) {
  return (
    <div className={`hydro-testimonial-column ${className}`}>
      <div className="hydro-testimonial-track flex flex-col gap-6 pb-6" style={{ "--testimonial-duration": `${duration}s` } as CSSProperties}>
        {[0, 1].map((loop) =>
          items.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${loop}`}
              className="w-full max-w-xs rounded-2xl border border-hydro-line bg-white p-7 shadow-hydro transition hover:-translate-y-1 hover:border-[#b7d7f6] hover:shadow-hydroHover"
            >
              <p className="text-sm leading-7 text-hydro-muted">{testimonial.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className={`grid h-11 w-11 flex-none place-items-center rounded-full text-xs font-extrabold ${avatarColors[(index + loop * 3) % avatarColors.length]}`}>
                  {getInitials(testimonial.name)}
                </span>
                <span>
                  <strong className="block text-sm font-extrabold leading-5 text-hydro-ink">{testimonial.name}</strong>
                  <span className="block text-xs leading-5 text-hydro-muted">{testimonial.role}</span>
                </span>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const firstColumn = [testimonials[0], testimonials[4], testimonials[8]].filter(Boolean);
  const secondColumn = [testimonials[1], testimonials[5], testimonials[6]].filter(Boolean);
  const thirdColumn = [testimonials[2], testimonials[3], testimonials[7]].filter(Boolean);
  const fourthColumn = [testimonials[8], testimonials[0], testimonials[5]].filter(Boolean);

  return (
    <section className="hydro-section bg-white">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="mx-auto w-[90%]">
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <span className="mb-4 inline-flex border border-hydro-line bg-hydro-soft px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-hydro-blue">
            Testimonials
          </span>
          <h2 className="m-0 text-[clamp(24px,2.4vw,34px)] font-normal leading-[1.12] tracking-[-0.03em] text-hydro-ink">
            What operating teams say about Hydroscope
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-hydro-muted">
            Feedback from water infrastructure teams using smarter chlorination, sensing and dashboard visibility.
          </p>
        </div>

        <div className="mx-auto flex max-h-[740px] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] xl:gap-6">
          <TestimonialsColumn items={firstColumn} className="w-full max-w-[330px]" duration={16} />
          <TestimonialsColumn items={secondColumn} className="hidden w-full max-w-[330px] md:block" duration={21} />
          <TestimonialsColumn items={thirdColumn} className="hidden w-full max-w-[330px] lg:block" duration={18} />
          <TestimonialsColumn items={fourthColumn} className="hidden w-full max-w-[330px] xl:block" duration={23} />
        </div>
      </div>
    </section>
  );
}
