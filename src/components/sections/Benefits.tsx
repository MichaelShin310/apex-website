import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const BENEFITS = [
  "Always know what to do next",
  "Stop missing deadlines",
  "Make time for friends — on purpose",
  "Build habits that survive midterms",
  "Turn every syllabus into a real plan",
  "Feel less overwhelmed, week after week",
  "Feel in control of your time again",
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-mist/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="What changes"
            title="Less managing your life. More living it."
            description="Features are what APEX does. This is what you get back."
          />

          <div>
            <ul className="space-y-3">
              {BENEFITS.map((benefit, index) => (
                <Reveal key={benefit} delay={index * 70}>
                  <li className="flex items-center gap-3.5 rounded-2xl border border-ink/8 bg-paper px-5 py-4 shadow-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-leaf text-white">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="font-medium text-ink">{benefit}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
