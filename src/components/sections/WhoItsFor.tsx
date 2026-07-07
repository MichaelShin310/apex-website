import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const AUDIENCES = [
  {
    title: "College students",
    body: "Five classes, five syllabi, one schedule that finally holds it together.",
  },
  {
    title: "High school students",
    body: "APs, extracurriculars, college apps, organized before it gets overwhelming.",
  },
  {
    title: "Student athletes",
    body: "Practice and games come first. APEX plans your studying around them.",
  },
  {
    title: "Working students",
    body: "Shifts change weekly. Your study plan should change with them automatically.",
  },
  {
    title: "Chronic procrastinators",
    body: "Big scary deadlines become small unavoidable steps. Starting gets easier.",
  },
  {
    title: "Routine builders",
    body: "Trying to fix your sleep, gym, or study habits? APEX holds the structure for you.",
  },
  {
    title: "People with actual lives",
    body: "School matters. So do your friends. APEX makes sure the plan includes both.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who it's for"
          title="Built for how students actually live"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {AUDIENCES.map((audience, index) => (
            <Reveal
              key={audience.title}
              delay={(index % 4) * 70}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.9375rem)]"
            >
              <div className="h-full rounded-3xl border border-ink/8 bg-paper p-6 shadow-sm">
                <h3 className="font-display text-base font-semibold text-ink">{audience.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-soft">{audience.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
