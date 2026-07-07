import ContactForm from "../forms/ContactForm";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

/* TODO: replace placeholder email and social URLs with real accounts. */
const CONTACT_EMAIL = "hello@apexstudent.app";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/apexstudentapp", handle: "@apexstudentapp" },
  { label: "TikTok", href: "https://tiktok.com/@apexstudentapp", handle: "@apexstudentapp" },
  { label: "X / Twitter", href: "https://x.com/apexstudentapp", handle: "@apexstudentapp" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-mist/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Talk to the team"
              description="For partnerships, campus ambassadors, press, or general questions, reach out."
            />

            <Reveal delay={120}>
              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-soft">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 inline-block font-display text-lg font-semibold text-leaf underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-soft">Social</p>
                  <ul className="mt-2 space-y-1.5">
                    {SOCIALS.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-ink hover:text-leaf"
                        >
                          <span className="font-semibold">{social.label}</span>
                          <span className="text-slate-soft"> · {social.handle}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-3xl border border-ink/8 bg-paper/70 p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
