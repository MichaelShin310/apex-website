"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { FAQ_ITEMS } from "@/data/faq";

function FaqItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-ink/8 bg-paper shadow-sm">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-base font-semibold text-ink">{item.q}</span>
          <span
            aria-hidden
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sprout text-leaf transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        hidden={!open}
        className="px-6 pb-5"
      >
        <p className="text-sm leading-relaxed text-slate-soft">{item.a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mist/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything students (and parents) ask us most."
        />

        <Reveal className="mt-12">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                index={index}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
