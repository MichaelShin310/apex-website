import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const STEPS = [
  {
    title: "Upload your syllabus",
    body: "PDF, screenshot, whatever you've got. One upload per class covers the whole semester.",
    icon: <path d="M12 16V4m0 0L7 9m5-5 5 5M5 20h14" />,
  },
  {
    title: "Tell LOLA about your life",
    body: "Classes, work shifts, gym days, goals, when you actually focus. Two minutes of talking beats two hours of planning.",
    icon: (
      <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5zM9 11h.01M13 11h.01M17 11h.01" />
    ),
  },
  {
    title: "Get your optimized week",
    body: "APEX places study blocks in your peak-focus hours and protects the time that keeps you sane.",
    icon: (
      <path d="M8 3v3M16 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1zM9 14l2 2 4-4" />
    ),
  },
  {
    title: "Adjust as life happens",
    body: "Exam moved? Shift added? Tell LOLA once and the rest of your week reshuffles itself.",
    icon: (
      <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5" />
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps to a week that runs itself"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="relative h-full rounded-3xl border border-ink/8 bg-paper p-6 shadow-sm">
                <span
                  aria-hidden
                  className="absolute right-5 top-4 font-display text-4xl font-bold text-mist"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine text-antenna">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {step.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
