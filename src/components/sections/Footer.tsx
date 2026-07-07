import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "LOLA", href: "#lola" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Ambassadors", href: "#ambassador" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-pine pb-10 pt-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <Image
              src="/assets/apex-logo.png"
              alt="APEX logo"
              width={112}
              height={38}
              className="mx-auto h-8 w-auto invert sm:mx-0"
            />
            <p className="mt-3 max-w-xs text-sm text-cream/60">
              The AI planner built for student life. School, goals, and a social
              life, one schedule that fits it all.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 sm:flex-row">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} APEX. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            Made by students, for students. 🏔️
          </p>
        </div>
      </div>
    </footer>
  );
}
