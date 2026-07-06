import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Set when the section sits on a dark (pine) background. */
  dark?: boolean;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-antenna" : "text-leaf"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-balance ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-cream/70" : "text-slate-soft"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
