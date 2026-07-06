import Image from "next/image";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const LOLA_LINES = [
  "Chem midterm moved to Friday? Already reshuffled your week. You're welcome.",
  "You focus best from 12–2. So that's where the hard stuff goes.",
  "Saturday stays free. That was the deal, and I keep deals.",
];

export default function Lola() {
  return (
    <section id="lola" className="bg-pine py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="justify-self-center lg:order-1">
            <div className="relative">
              <div className="animate-float rounded-[2.5rem] bg-white p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-10">
                <Image
                  src="/assets/lola-full.png"
                  alt="LOLA, the APEX mascot — a friendly white robot with big eyes and two yellow-tipped antennae"
                  width={280}
                  height={280}
                  className="h-auto w-56 sm:w-64"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-4 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-black/40 blur-xl"
              />
            </div>
          </Reveal>

          <div className="lg:order-0">
            <SectionHeading
              align="left"
              dark
              eyebrow="Meet your assistant"
              title="Meet LOLA — your Life Optimization Learning Assistant"
              description="LOLA reads your syllabi, learns your rhythm, and quietly keeps your week balanced. Less drill sergeant, more very organized friend who never sleeps."
            />

            <div className="mt-8 space-y-3">
              {LOLA_LINES.map((line, index) => (
                <Reveal key={line} delay={index * 110}>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-8 w-8 shrink-0 overflow-hidden rounded-full bg-cream p-1">
                      <Image
                        src="/assets/lola-head.png"
                        alt=""
                        width={32}
                        height={32}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="rounded-2xl rounded-tl-sm bg-cream/10 px-4 py-3 text-sm leading-relaxed text-cream/90">
                      {line}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={360}>
              <p className="mt-8 text-sm text-cream/60">
                LOLA plans with you, not for show — every suggestion is editable, and you always
                have the final say over your schedule.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
