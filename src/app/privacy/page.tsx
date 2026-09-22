import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How APEX collects, uses, and protects student information, including the AI assistant, health data, and school use.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 pt-[110px] sm:pt-[130px]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <header className="mb-10">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-slate-soft">Last updated: September 21, 2026 &middot; Apex Student LLC</p>
          </header>

        <nav aria-label="Contents" className="mb-10 rounded-2xl border border-ink/10 bg-paper p-6">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-soft">Contents</h2>
            <ol className="list-decimal space-y-1.5 pl-5 text-sm">
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#intro">Introduction</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#collect">Information We Collect</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#health">Health Data (HealthKit)</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#use">How We Use Your Information</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#ai">The AI Assistant &amp; OpenAI</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#access">Who Can See Your Data</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#third-party">Service Providers</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#storage">Security</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#retention">Retention &amp; Deletion</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#rights">Your Rights</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#children">Students, Parents &amp; Schools</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#changes">Changes to This Policy</a></li>
              <li><a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="#contact">Contact</a></li>
            </ol>
          </nav>

          <section id="intro" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">1. Introduction</h2>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Apex (&quot;we,&quot; &quot;our,&quot; or &quot;the app&quot;) is an AI-powered student planner for iOS, developed by
              Apex Student LLC. This policy explains what information we collect, how we use and protect
              it, and the choices you have. We wrote it to be read, not skimmed past. If anything is
              unclear, email us.
            </p>
            <div className="my-4 rounded-r-xl border-l-4 border-leaf bg-sprout px-4 py-3 text-sm leading-relaxed text-ink">
              We do not sell personal data. We do not show ads. We do not use advertising or analytics
              trackers of any kind. We use student data only to run Apex for that student.
            </div>
          </section>

          <section id="collect" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">2. Information We Collect</h2>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Account information</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Your first and last name, email address, and date of birth (used to confirm you are at
              least 13), and, optionally, your school&apos;s name. If you use Sign in with Apple, Apple
              shares the name and email you choose to share.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Schedule and course data</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Events, reminders, and classes you create or import (titles, dates, times, categories,
              priorities), plus course details such as professor names, office hours, credit hours, and
              assignment deadlines. If you connect an Apple Calendar or Canvas calendar feed, the events
              you import are stored in your account.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Grades</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              If you use the GPA tracker: assignment titles, categories, weights, scores, and credit
              hours.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Daily check-ins (optional)</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Your optional daily energy check-in (sleep hours, mood, stress) and quick mood check-ins.
              You are never required to complete them.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">AI conversations and memory</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Your chat messages with Apex and a short &quot;memory&quot; summary of durable facts you mention
              (habits, goals, preferences). You can view and erase the memory in
              Settings &rarr; What Apex Knows. We keep your most recent 100 messages.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Study patterns and progress</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Feedback on when you study best, how long assignments actually took, your streaks, and
              Apex Points. These stay on your device and are backed up to your account.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Feedback you send us</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Messages you submit through the in-app feedback form, with your app and iOS version. We
              can read these; they are meant for us.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">What we do not collect</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              No precise location, contacts, photos library, advertising identifiers, or browsing
              activity. The photo and file pickers are used only when you choose to import a syllabus or schedule; Apex sees only the item you select.
            </p>
          </section>

          <section id="health" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">3. Health Data (HealthKit)</h2>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              With your explicit permission, Apex reads your sleep data from Apple Health to pre-fill your
              daily check-in. Access is read-only; we never write to Health. The resulting sleep-hours
              value is saved with your check-in so your trends survive a new phone.
            </p>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Your energy (&quot;body battery&quot;) score, which is calculated from sleep, mood, and stress, and
              your recent mood and stress ratings are included in requests to our AI provider (see
              section 5) so the assistant can plan around how you feel. Your raw Health records are not
              sent. Health-related data is never sold, never used for advertising, marketing, or data
              mining, and you can revoke access any time in iOS Settings &rarr; Privacy &amp; Security
              &rarr; Health.
            </p>
          </section>

          <section id="use" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">4. How We Use Your Information</h2>
            <ul className="mb-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink/85">
              <li>To run the app: your schedule, courses, grades, streaks, and reminders.</li>
              <li>To power the AI assistant and syllabus import (section 5).</li>
              <li>To suggest study times based on your own patterns.</li>
              <li>To back up your data across devices and reinstalls.</li>
              <li>To send notifications you turn on.</li>
              <li>To keep the service secure, prevent abuse (for example, rate-limiting AI requests), and fix bugs.</li>
              <li>To answer your support and feedback messages.</li>
            </ul>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              We do not use student data to build advertising profiles or for any purpose unrelated to
              operating Apex for that student.
            </p>
          </section>

          <section id="ai" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">5. The AI Assistant &amp; OpenAI</h2>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">Apex&apos;s assistant is powered by OpenAI&apos;s API. When you chat with Apex or import a syllabus, we send OpenAI:</p>
            <ul className="mb-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink/85">
              <li>your message and recent conversation;</li>
              <li>your upcoming schedule, courses, and professor names;</li>
              <li>your AI memory summary, streak, and skipped-event patterns;</li>
              <li>if you use check-ins: your energy score and recent mood and stress ratings;</li>
              <li>for syllabus import: the text or photo of the syllabus you chose to upload.</li>
            </ul>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              We do not send your email address or date of birth. Your name is included only if you told Apex your name and it is in your memory. OpenAI states that it does not use data
              submitted through its API to train its models by default. OpenAI may keep API inputs and
              outputs for a limited period (currently up to 30 days) to detect abuse, under its own
              policies, so we do not promise that data is erased by OpenAI at the end of a request.
            </p>

            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Safety</h3>
            <div className="my-4 rounded-r-xl border-l-4 border-leaf bg-sprout px-4 py-3 text-sm leading-relaxed text-ink">
              Apex is a scheduling assistant, not a counselor or emergency service. Messages are screened
              for signs of self-harm; if detected, Apex responds with support resources (988, Crisis Text
              Line 741741, 911) and encourages you to talk to a trusted adult. Apex does <strong>not</strong> monitor
              conversations, and does not notify your school or parents. If you or someone you know is in
              danger, contact a trusted adult or call or text 988 or call 911.
            </div>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              To prevent misuse and control costs, each account has a limit on AI requests per minute and
              per day.
            </p>
          </section>

          <section id="access" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">6. Who Can See Your Data</h2>
            <ul className="mb-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink/85">
              <li><strong>Other students: no.</strong> Access is enforced by the database itself: every account can read and change only its own records.</li>
              <li><strong>Apex admin tools: totals only.</strong> The in-app admin dashboard shows aggregate counts and averages, and hides averages until at least five students contribute. It cannot open any individual&apos;s schedule, grades, check-ins, profile, or conversations.</li>
              <li><strong>Our team.</strong> Apex Student LLC operates the database and therefore has technical ability to access it. We use that access only to run and secure the service, to fix a problem you report, or when required by law. Access is limited to authorized personnel and protected with multi-factor authentication.</li>
              <li><strong>Schools and parents.</strong> We do not share individual student data with any school, parent, or third party except (a) at your request, (b) under a written agreement with a school that is subject to section 11, (c) to service providers in section 7, (d) as required by law, or (e) to protect someone from imminent serious harm.</li>
            </ul>
          </section>

          <section id="third-party" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">7. Service Providers</h2>
            <div className="mb-3 rounded-2xl border border-ink/10 bg-paper p-4 text-sm leading-relaxed text-ink/85">
                <strong className="mb-1 block text-base text-leaf">Supabase</strong>
              Hosts our database and sign-in. Stores everything described in section 2.<br />
              <a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="https://supabase.com/privacy" target="_blank" rel="noopener">supabase.com/privacy</a>
            </div>
            <div className="mb-3 rounded-2xl border border-ink/10 bg-paper p-4 text-sm leading-relaxed text-ink/85">
                <strong className="mb-1 block text-base text-leaf">OpenAI</strong>
              Generates AI replies, parses syllabi, and screens messages for safety (section 5).<br />
              <a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener">openai.com/policies/privacy-policy</a>
            </div>
            <div className="mb-3 rounded-2xl border border-ink/10 bg-paper p-4 text-sm leading-relaxed text-ink/85">
                <strong className="mb-1 block text-base text-leaf">Apple</strong>
              Sign in with Apple, HealthKit, Calendar, Reminders, and the App Store.<br />
              <a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
            </div>
            <div className="mb-3 rounded-2xl border border-ink/10 bg-paper p-4 text-sm leading-relaxed text-ink/85">
                <strong className="mb-1 block text-base text-leaf">RateMyProfessors</strong>
              When you add a course with a professor&apos;s name, Apex may search that public site for the
              professor&apos;s ratings. Only the professor&apos;s name is sent.<br />
              <a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="https://www.ratemyprofessors.com/privacy-policy" target="_blank" rel="noopener">ratemyprofessors.com/privacy-policy</a>
            </div>
          </section>

          <section id="storage" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">8. Security</h2>
            <ul className="mb-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink/85">
              <li>Encryption in transit (TLS) and at rest.</li>
              <li>Row-level security on every table: each account can access only its own records.</li>
              <li>Sign-in sessions are stored in the iOS Keychain; passwords are handled by Supabase Auth and never stored by us in readable form. Email addresses are verified at sign-up.</li>
              <li>AI provider keys are held on our servers, never in the app. Every AI request is authenticated and rate-limited.</li>
              <li>We review our own security and re-test access controls whenever we change them.</li>
            </ul>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              No system is perfectly secure. If we confirm a breach affecting your information, we will
              notify you and, where a school agreement applies, the school, promptly and as required by
              applicable law.
            </p>
          </section>

          <section id="retention" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">9. Retention &amp; Deletion</h2>
            <ul className="mb-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink/85">
              <li>Your data is kept while your account is active.</li>
              <li>Chat history is trimmed to your 100 most recent messages. Calendar events older than about 60 days may be summarized into your AI memory and then deleted.</li>
              <li><strong>Delete Account</strong> (Settings &rarr; Delete Account) removes your profile, schedule, courses, grades, check-ins, conversations, memory, and progress from our database, and then deletes your login. If any step fails, your account is left intact so you can retry, rather than being partly deleted.</li>
              <li>After deletion, encrypted backups held by our database host may persist for a limited time until they expire on their normal schedule, and OpenAI may retain API data for its abuse-monitoring period (section 5).</li>
              <li>Email us to request deletion if you cannot access your account.</li>
            </ul>
          </section>

          <section id="rights" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">10. Your Rights</h2>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">Regardless of where you live, you can:</p>
            <ul className="mb-4 list-disc space-y-1.5 pl-6 text-[15px] leading-relaxed text-ink/85">
              <li>view and edit your profile in Settings;</li>
              <li>view and erase what Apex remembers about you (Settings &rarr; What Apex Knows);</li>
              <li>delete your account and data (Settings &rarr; Delete Account);</li>
              <li>ask us for a copy of your data, or to correct or delete it, by emailing us. We respond within 30 days.</li>
            </ul>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Residents of California and other U.S. states with privacy laws, and of the EEA or U.K.,
              have the additional rights those laws provide, including access, correction, deletion, and
              the right not to be discriminated against for exercising them. We do not sell or &quot;share&quot;
              personal information for advertising.
            </p>
          </section>

          <section id="children" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">11. Students, Parents &amp; Schools</h2>
            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Age</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Apex is for people 13 and older. We check date of birth at sign-up, both in the app and on
              our servers, and do not knowingly collect information from children under 13. If we learn we
              have, we will delete it. Contact us if you believe this has happened.
            </p>
            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Parents and guardians</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              A parent or guardian of a student under 18 may email us to review, correct, or delete their
              child&apos;s information.
            </p>
            <h3 className="mb-2 mt-5 font-display text-lg font-semibold text-ink">Schools</h3>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              If a school adopts Apex, it does so under a written agreement. Under that agreement we act as
              a &quot;school official&quot; with a legitimate educational interest for purposes of the Family
              Educational Rights and Privacy Act (FERPA): we use student information only for the
              educational purpose the school authorized, do not re-disclose it or use it for advertising,
              apply the protections in this policy, and delete it at the school&apos;s written request, subject
              to section 9.
            </p>
          </section>

          <section id="changes" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">12. Changes to This Policy</h2>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              If we make a material change, we will tell you in the app or by email before it takes
              effect, and, where a school agreement applies, tell the school. We will not use existing
              student data in a materially different way without notice and, where required, consent. The
              date at the top shows the latest revision.
            </p>
          </section>

          <section id="contact" className="mb-10 scroll-mt-28">
            <h2 className="mb-3 border-b border-ink/10 pb-2 font-display text-2xl font-semibold text-leaf">13. Contact</h2>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              Questions, requests, or a security concern? Contact us:
            </p>
            <p className="mb-3 text-[15px] leading-relaxed text-ink/85">
              <strong>Apex Student LLC</strong><br />
              <a className="font-medium text-leaf underline underline-offset-2 hover:text-leaf-deep" href="mailto:hello@apexstudent.app">hello@apexstudent.app</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
