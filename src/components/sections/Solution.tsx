import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const FLOW = [
  {
    title: "Upload your syllabus",
    body: "Drop in the PDF from every class. That's the last time you'll read it.",
  },
  {
    title: "LOLA reads what matters",
    body: "Exams, essays, quizzes, due dates, all pulled out automatically and organized by course.",
  },
  {
    title: "APEX builds your schedule",
    body: "A real weekly plan: study blocks, deadlines, habits, and free time that stays free.",
  },
  {
    title: "Your week adjusts with you",
    body: "Plans change. APEX reshuffles around school, social life, and goals, so one surprise doesn't wreck the week.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="bg-mist/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The solution"
              title="From syllabus chaos to one clear plan"
              description="APEX does the planning work you keep putting off, then keeps doing it all semester."
            />

            <ol className="mt-10 space-y-6">
              {FLOW.map((step, index) => (
                <Reveal key={step.title} delay={index * 90}>
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf font-display text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 leading-relaxed text-slate-soft">{step.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={150} className="justify-self-center">
            <div className="flex items-end gap-5">
              <PhoneFrame
                src="/assets/screen-chat.png"
                alt="APEX chat screen where students message LOLA, the AI study optimizer"
                width={230}
                className="hidden sm:block translate-y-6 -rotate-3"
              />
              <PhoneFrame
                src="/assets/screen-calendar.png"
                alt="APEX calendar screen showing a full month view with synced events"
                width={250}
                className="rotate-2"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
