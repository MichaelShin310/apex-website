import { APP_STORE_URL } from "@/data/site";

type AppStoreButtonProps = {
  /** Set when the button sits on the dark pine background. */
  dark?: boolean;
  className?: string;
};

/**
 * Primary download call to action. Plain text button on purpose: Apple's official
 * "Download on the App Store" badge artwork (from Apple's marketing resources) can be
 * dropped in here later if desired.
 */
export default function AppStoreButton({ dark = false, className = "" }: AppStoreButtonProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold shadow-md transition-colors ${
        dark
          ? "bg-cream text-pine hover:bg-white"
          : "bg-leaf text-white hover:bg-leaf-deep"
      } ${className}`}
    >
      Download on the App Store
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </a>
  );
}
