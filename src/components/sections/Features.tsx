import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const FEATURES = [
  {
    title: "AI syllabus scanner",
    body: "Upload the PDF once. Every exam, essay, and quiz lands in your plan. No more decoding course policy.",
    icon: <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 8h6M9 12h6M9 16h3" />,
  },
  {
    title: "Smart calendar builder",
    body: "Classes, deadlines, and plans arranged into a week that flows, synced with the calendar you already use.",
    icon: <path d="M8 3v3M16 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1z" />,
  },
  {
    title: "Assignment & exam planning",
    body: "Big deadlines get broken into small, scheduled steps, so finals week starts weeks before finals week.",
    icon: <path d="M9 11l3 3 8-8M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />,
  },
  {
    title: "Life balance planning",
    body: "Gym, friends, shifts, clubs. APEX plans around your life instead of paving over it.",
    icon: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12C19 16.5 12 21 12 21z" />,
  },
  {
    title: "Habit & goal tracking",
    body: "Morning runs, weekly reviews, actually sleeping. Small routines, tracked until they stick.",
    icon: <path d="M12 2v4M12 18v4M2 12h4M18 12h4M12 8a4 4 0 1 0 4 4" />,
  },
  {
    title: "Weekly optimization",
    body: "Your Efficiency Map learns when you focus best and tunes next week's schedule to match.",
    icon: <path d="M3 20h18M6 16v-4M11 16V8M16 16v-6M21 16V4" />,
  },
  {
    title: "Progress & streaks",
    body: "Consistency you can see. Streaks turn showing up into something you don't want to break.",
    icon: <path d="M12 2c1 4-2 5-2 8a4 4 0 0 0 8 .5C18 7 14 6 12 2zM8 14a4 4 0 1 0 8 0" />,
  },
  {
    title: "Personalized reminders",
    body: "Nudges timed to when you'll act on them, not 47 notifications you swipe away.",
    icon: <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" />,
  },
  {
    title: "LOLA assistant guidance",
    body: "Behind, overbooked, or just stuck? Ask LOLA. You'll get a plan, not a lecture.",
    icon: <path d="M12 8a5 5 0 0 1 5 5v0a5 5 0 0 1-10 0v0a5 5 0 0 1 5-5zM12 8V5M9.5 4.5 12 5l2.5-.5M9.75 12.5h.01M14.25 12.5h.01" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-mist/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything a chaotic semester needs"
          description="One app between your syllabus and your social life, doing the work a planner, a calendar, and a very organized friend would do."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 80}>
              <div className="h-full rounded-3xl border border-ink/8 bg-paper p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sprout text-leaf">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-soft">{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
