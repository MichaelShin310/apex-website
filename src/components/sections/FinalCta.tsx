import Image from "next/image";
import LaunchForm from "../forms/LaunchForm";
import Reveal from "../Reveal";

export default function FinalCta() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-pine py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(46,125,87,0.25),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cream p-3 shadow-lg">
            <Image
              src="/assets/lola-head.png"
              alt="LOLA mascot head"
              width={80}
              height={80}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl text-balance">
            Be early to the student planner that actually understands student life.
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
            Early access opens in waves. The sooner you&apos;re on the list, the sooner
            LOLA starts planning your week.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-cream/10 bg-cream/5 p-6 text-left sm:p-8">
            <LaunchForm dark idPrefix="final" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
