import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// TODO: swap to a custom domain later (e.g. https://joinapex.app) and update here.
const siteUrl = "https://apex-website-azure-chi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "APEX | The AI planner built for student life",
    template: "%s · APEX",
  },
  description:
    "APEX turns your syllabi, deadlines, and goals into one smart weekly schedule. Meet LOLA, your Life Optimization Learning Assistant. Join the launch list for early access.",
  keywords: [
    "student planner app",
    "AI schedule builder",
    "syllabus scanner",
    "college productivity",
    "student time management",
    "APEX app",
    "LOLA assistant",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "APEX",
    title: "APEX | The AI planner built for student life",
    description:
      "Upload your syllabus. Get a week that actually works. APEX balances school, social life, and goals. Join the launch list for early access.",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "APEX, the AI student life optimization app, with LOLA the assistant mascot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX | The AI planner built for student life",
    description:
      "Upload your syllabus. Get a week that actually works. Join the APEX launch list.",
    images: ["/assets/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
