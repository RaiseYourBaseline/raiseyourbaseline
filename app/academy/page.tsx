import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { academyBranches } from "@/lib/academyBranches";

export const metadata: Metadata = {
  title: "The Academy",
  description:
    "Aligned foundations. 10 branches. One child. The Academy builds the foundations for a whole human life through ten branches of learning.",
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
    </main>
  );
}
