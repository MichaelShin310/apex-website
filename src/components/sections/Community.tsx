import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

/**
 * Honest early-community section. APEX is pre-launch, so there are no
 * public testimonials yet — the cards below are clearly labeled
 * placeholders. Swap them for real quotes as beta feedback comes in.
 */
const PLACEHOLDER_QUOTES = [
  {
    quote:
      "This space is reserved for one of our early testers. Real quote coming soon.",
    name: "Beta tester",
    detail: "College sophomore",
  },
  {
    quote:
      "We'd rather show you nothing than something fake. Early feedback lands here at launch.",
    name: "Beta tester",
    detail: "Student athlete",
  },
  {
    quote:
      "Testing is underway on real semesters, real syllabi, and real group-project chaos.",
    name: "Beta tester",
    detail: "High school senior",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Early community"
          title="Built with students, for students"
          description="APEX is currently preparing for launch with early student testers. Every feature ships only after real students have used it during a real week of school."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PLACEHOLDER_QUOTES.map((item, index) => (
            <Reveal key={item.quote} delay={index * 90}>
              <figure className="relative h-full rounded-3xl border border-dashed border-ink/15 bg-paper/60 p-6">
                <span className="absolute right-4 top-4 rounded-full bg-mist px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-soft">
                  Placeholder
                </span>
                <blockquote className="mt-4 text-sm leading-relaxed text-slate-soft">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-ink">{item.name}</span>
                  <span className="text-slate-soft"> · {item.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm text-slate-soft">
            Want to be one of the students quoted here?{" "}
            <a href="#join" className="font-semibold text-leaf underline-offset-4 hover:underline">
              Join the launch list
            </a>{" "}
            and help shape APEX before everyone else gets it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
