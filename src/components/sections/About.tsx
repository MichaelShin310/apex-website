import Image from "next/image";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Made by students who got tired of feeling behind"
        />

        <Reveal delay={120}>
          <div className="mt-8 space-y-5 text-left text-base leading-relaxed text-slate-soft sm:text-lg">
            <p>
              APEX started the way most student projects do: with a week that fell apart.
              Deadlines scattered across five platforms, a syllabus nobody had read since
              week one, and that constant feeling of being busy all day while somehow
              still falling behind.
            </p>
            <p>
              We tried everything: planners we abandoned by October, Notion setups that
              took longer to maintain than the homework itself, calendar apps built for
              people with 9 to 5 jobs. Nothing understood the way a student week actually
              works: irregular, social, and one surprise away from chaos.
            </p>
            <p>
              So we&apos;re building the tool we wanted. APEX exists so students can do
              well in school <em className="font-medium not-italic text-ink">and</em> have
              a life, without spending Sunday nights doing damage control. That&apos;s
              the whole mission.
            </p>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-paper px-5 py-3 shadow-sm">
            <Image
              src="/assets/apex-mark.png"
              alt="APEX mountain logo mark"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <p className="text-sm font-medium text-ink">
              The APEX team. Students, building for students.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
