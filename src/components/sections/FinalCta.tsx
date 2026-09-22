import Image from "next/image";
import AppStoreButton from "../AppStoreButton";
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
          <div className="mx-auto w-24 animate-float sm:w-28">
            <Image
              src="/assets/lola-pointing.png"
              alt="LOLA pointing upward"
              width={338}
              height={560}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl text-balance">
            Get the student planner that actually understands student life.
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
            APEX is live and free on the App Store. Upload a syllabus and LOLA
            starts planning your week in minutes.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 flex justify-center">
            <AppStoreButton dark />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
