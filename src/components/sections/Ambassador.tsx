import Image from "next/image";
import AmbassadorForm from "../forms/AmbassadorForm";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const PERKS = [
  "First access to every new feature",
  "Direct line to the founding team",
  "APEX merch and launch event kits",
  "A real launch story for your resume",
];

export default function Ambassador() {
  return (
    <section id="ambassador" className="bg-pine py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              dark
              eyebrow="Campus ambassadors"
              title="Bring APEX to your campus"
              description="We're recruiting a small crew of students to launch APEX at their schools. The kind of people friends already ask for organization advice."
            />

            <ul className="mt-8 space-y-3">
              {PERKS.map((perk, index) => (
                <Reveal key={perk} delay={index * 80}>
                  <li className="flex items-center gap-3 text-sm text-cream/85">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-antenna/20 text-antenna">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {perk}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={340}>
              <div className="mt-10 hidden w-44 lg:block">
                <Image
                  src="/assets/lola-flag.png"
                  alt="LOLA planting a yellow flag on a mountain peak"
                  width={427}
                  height={560}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-cream/10 bg-cream/5 p-6 sm:p-8">
              <AmbassadorForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
