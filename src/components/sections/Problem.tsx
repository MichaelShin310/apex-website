import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const PAINS = [
  {
    title: "Assignments everywhere",
    body: "Canvas says one thing, the group chat says another, and the professor changed the date in lecture. Nothing lives in one place.",
    icon: (
      <path d="M4 6h16M4 12h10M4 18h7M18 15l3 3-3 3" />
    ),
  },
  {
    title: "Syllabi nobody decodes",
    body: "Twelve pages of policy hiding the five dates that actually matter. Every class, every semester, all over again.",
    icon: (
      <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 7h6M9 11h6M9 15h3" />
    ),
  },
  {
    title: "A life that won't pause",
    body: "Work shifts, practice, club meetings, the gym, actual friends. School isn't the only thing on your calendar. It just acts like it.",
    icon: (
      <path d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9zM12 7v5l3 3" />
    ),
  },
  {
    title: "Busy, but not in control",
    body: "You're doing something all day and still feel behind. That Sunday night dread isn't a discipline problem. It's a planning problem.",
    icon: (
      <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    ),
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The problem"
          title="Student life is a scheduling problem no one taught you to solve"
          description="You're managing five syllabi, a job, a social life, and your own goals, all with tools built for office workers."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PAINS.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 80}>
              <div className="group h-full rounded-3xl border border-ink/8 bg-paper p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sprout text-leaf">
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
                    {pain.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{pain.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-soft">{pain.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
