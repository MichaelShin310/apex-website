import Image from "next/image";
import LaunchForm from "../forms/LaunchForm";
import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[120px] pb-16 sm:pt-[140px] sm:pb-24">
      {/* soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_10%,rgba(46,125,87,0.10),transparent_70%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-sprout px-3.5 py-1.5 text-xs font-semibold text-leaf">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
              </span>
              Now in private beta — launch list open
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] text-balance">
              Your schedule should work for your life.
              <span className="text-leaf"> Not against it.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-soft">
              APEX turns your syllabi, deadlines, and goals into one smart weekly
              plan — with room left for the gym, your friends, and your actual life.
              Guided by LOLA, your AI assistant.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div id="join" className="mt-8 max-w-xl rounded-3xl border border-ink/8 bg-paper/80 p-5 shadow-[0_20px_50px_-30px_rgba(13,31,23,0.35)] backdrop-blur-sm sm:p-6">
              <LaunchForm idPrefix="hero" />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-soft">
              <a href="#how-it-works" className="group inline-flex items-center gap-1.5 font-semibold text-ink">
                See how it works
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  <path d="M12 5v14M6 13l6 6 6-6" />
                </svg>
              </a>
              <p>Built for students who want more from their time.</p>
            </div>
          </Reveal>
        </div>

        {/* Phone mockup */}
        <Reveal delay={200} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <PhoneFrame
              src="/assets/screen-today.png"
              alt="APEX app Today screen showing the best study window from 12 to 2 PM with an efficiency score of 79, a one-day streak, and today's schedule"
              width={290}
              priority
            />
            {/* LOLA peeking beside the phone */}
            <div className="absolute -left-20 bottom-8 hidden animate-float sm:block lg:-left-24">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-paper p-4 shadow-[0_16px_40px_-12px_rgba(16,27,21,0.3)] ring-1 ring-ink/5 lg:h-32 lg:w-32">
                <Image
                  src="/assets/lola-head.png"
                  alt="LOLA, the APEX assistant mascot — a friendly white robot head with yellow-tipped antennae"
                  width={128}
                  height={128}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
