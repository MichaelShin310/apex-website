import PhoneFrame from "../PhoneFrame";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const SCREENS = [
  {
    src: "/assets/screen-today.png",
    caption: "Today dashboard",
    detail: "Your best study window, streak, and schedule at a glance.",
    alt: "APEX Today screen with the day's best study window, efficiency score, and streak",
  },
  {
    src: "/assets/screen-calendar.png",
    caption: "Smart calendar",
    detail: "Month and week views, synced with your existing calendar.",
    alt: "APEX calendar screen showing a month view for July with calendar sync",
  },
  {
    src: "/assets/screen-chat.png",
    caption: "LOLA chat",
    detail: "Message APEX like a friend. Plans come back, not lectures.",
    alt: "APEX chat screen for messaging LOLA, the AI study optimizer",
  },
  {
    src: "/assets/screen-efficiency.png",
    caption: "Efficiency Map",
    detail: "See how productive you are at every hour of the day.",
    alt: "APEX Efficiency Map screen with hourly productivity bars across the day",
  },
  {
    src: "/assets/screen-study-windows.png",
    caption: "Best study windows",
    detail: "APEX finds your peak hours and schedules the hard work there.",
    alt: "APEX screen showing weekly efficiency and recommended best study windows",
  },
  {
    src: "/assets/screen-menu.png",
    caption: "Your toolkit",
    detail: "GPA tracker, courses, reminders, and the mascot shop.",
    alt: "APEX menu screen with efficiency chart, settings, reminders, courses, and GPA tracker",
  },
];

export default function AppPreview() {
  return (
    <section id="preview" className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="App preview"
          title="A first look inside APEX"
          description="Real screens from the beta build our student testers are using right now."
        />
      </div>

      <Reveal>
        <div
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto px-[max(1.25rem,calc((100vw-72rem)/2+2rem))] pb-6"
          role="region"
          aria-label="APEX app screenshots"
        >
          {SCREENS.map((screen) => (
            <figure key={screen.src} className="w-[240px] shrink-0 snap-center sm:w-[260px]">
              <PhoneFrame src={screen.src} alt={screen.alt} width={240} />
              <figcaption className="mt-4 px-1">
                <p className="font-display text-base font-semibold text-ink">{screen.caption}</p>
                <p className="mt-0.5 text-sm text-slate-soft">{screen.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <p className="mx-auto mt-2 max-w-6xl px-5 text-center text-xs text-slate-soft/70 sm:px-8">
        Swipe or scroll to see more →
      </p>
    </section>
  );
}
