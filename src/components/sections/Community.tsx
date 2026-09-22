import Image from "next/image";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import AppStoreButton from "../AppStoreButton";
import { CONTACT_EMAIL } from "@/data/site";

export default function Community() {
  return (
    <section id="community" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal className="mb-6 flex justify-center">
          <Image
            src="/assets/lola-celebrating.png"
            alt="LOLA celebrating with arms raised and yellow confetti"
            width={140}
            height={141}
            className="h-auto w-28 sm:w-32"
          />
        </Reveal>
        <SectionHeading
          eyebrow="Built with students"
          title="Built with students, for students"
          description="APEX is live, and it keeps getting better because of the students using it. Every feature ships after real students have used it during a real week of school."
        />

        <Reveal delay={150}>
          <div className="mt-8 flex justify-center">
            <AppStoreButton />
          </div>
          <p className="mt-6 text-sm text-slate-soft">
            Something missing, or something you love? Tell us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-leaf underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            . We read every message.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
