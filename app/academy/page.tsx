import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { academyBranches } from "@/lib/academyBranches";
import { instituteSections } from "@/lib/instituteSections";

export const metadata: Metadata = {
  title: "The Academy",
  description:
    "Aligned foundations. 10 branches. One child. The Academy builds the foundations for a whole human life through ten branches of learning, grounded in the Institute for Whole Human Alignment.",
};

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-academy-bg text-academy-text font-sans">
           <nav className="flex items-center justify-between px-6 sm:px-7 py-4 border-b border-academy-border">
        <Breadcrumb current="The Academy" accentClassName="text-academy-accent" />
        <div className="flex items-center gap-4">
          <Link href="/academy/resources" className="text-[13px] text-academy-accent">
            Resource Library
          </Link>
          <button className="bg-academy-sage text-white text-[13px] px-[18px] py-[9px] rounded-lg font-sans">
            Join the waitlist
          </button>
        </div>
      </nav>

      <section className="px-6 sm:px-7 pt-12 pb-5 text-center">
        <p className="text-xs tracking-[0.16em] uppercase text-academy-accent mb-4">
          The Academy
        </p>
        <p className="font-serif text-3xl leading-snug text-academy-text">Aligned foundations.</p>
        <p className="font-serif text-3xl leading-snug text-academy-text">
          <span className="text-academy-coral">10 branches.</span> One child.
        </p>
        <p className="text-sm text-academy-intro max-w-xl mx-auto mt-6 leading-relaxed">
          The Academy is designed to build the foundations for a whole human life — developing
          knowledge, awareness, character, relationships, practical skills, and the capacity to
          make intentional choices.
        </p>
        <p className="text-sm text-academy-intro max-w-xl mx-auto mt-3.5 leading-relaxed">
          Ten branches, each offering a different way to learn, explore, create, connect, and
          grow. Together, they create a learning experience designed around the whole child.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 px-6 sm:px-7 pt-8 pb-12 max-w-4xl mx-auto">
        {academyBranches.map((branch) => (
          <div
            key={branch.num}
            className="bg-white border border-academy-border rounded-[10px] px-5 py-[18px]"
          >
            <div className="text-[11px] text-academy-accent mb-1">{branch.num}</div>
            <div className="text-sm font-bold text-academy-text mb-2">{branch.name}</div>
            <div className="text-[11.5px] text-academy-topics leading-relaxed">{branch.topics}</div>
          </div>
        ))}
      </section>

      <section id="institute" className="border-t border-academy-border px-6 sm:px-7 pt-12 pb-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs tracking-[0.16em] uppercase text-academy-accent mb-4 text-center">
            The Institute for Whole Human Alignment
          </p>
          <p className="font-serif text-2xl sm:text-[26px] italic leading-relaxed text-center mb-11">
            What creates alignment in the whole human experience?
          </p>

          <div className="space-y-7">
            {instituteSections.map((section) => (
              <div key={section.numeral}>
                <p className="text-[13px] text-academy-accent mb-1.5">{section.numeral}</p>
                <p className="text-[15px] font-semibold text-academy-text mb-1">{section.heading}</p>
                {section.lead && (
                  <p className="text-sm italic text-academy-intro leading-relaxed mb-2.5">
                    {section.lead}
                  </p>
                )}
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm text-academy-intro leading-relaxed mt-3 first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-academy-border mt-9 mb-4" />
          <p className="text-[13px] text-academy-accent">Educator or organization? Get in touch.</p>
        </div>
      </section>
    </main>
  );
}
