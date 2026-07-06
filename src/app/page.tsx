import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Lola from "@/components/sections/Lola";
import AppPreview from "@/components/sections/AppPreview";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Benefits from "@/components/sections/Benefits";
import Community from "@/components/sections/Community";
import Faq from "@/components/sections/Faq";
import { FAQ_ITEMS } from "@/data/faq";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Ambassador from "@/components/sections/Ambassador";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

/** FAQ rich-result structured data for search engines. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Lola />
        <AppPreview />
        <WhoItsFor />
        <Benefits />
        <Community />
        <Faq />
        <About />
        <Ambassador />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
