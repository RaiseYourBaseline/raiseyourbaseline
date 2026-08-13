import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Institute for Whole Human Alignment",
  description:
    "What creates alignment in the whole human experience? Philosophy, frameworks, research, and standards & methodology from the Institute for Whole Human Alignment.",
};

const sections = [
  {
    numeral: "I.",
    heading: "Philosophy",
    body: [
      "Alignment begins with awareness. As awareness grows, so does our understanding of the forces that shape us — within ourselves, between us, and in the world around us. With that understanding comes choice: the ability to recognize where we are, consider what influences us, and choose how we move next.",
    ],
  },
  {
    numeral: "II.",
    heading: "Frameworks",
    body: [
      "We explore the many practices, experiences, and relationships that influence alignment — from movement, breath, yoga, grounding, energy, and vibration to intimacy, connection, environment, and the way we live our everyday lives.",
      "Each framework offers another way to understand ourselves, recognize what influences us, and explore how we can choose how we move next.",
    ],
  },
  {
    numeral: "III.",
    heading: "Research",
    lead: "Generations old, yet brand new.",
    body: [
      "We bring together perspectives, practices, and emerging knowledge to examine what influences human behaviour, awareness, and alignment — and how those influences interact over time.",
    ],
  },
  {
    numeral: "IV.",
    heading: "Standards & Methodology",
    lead: "Turning understanding into practice.",
    body: [
      "We develop the principles, frameworks, and methods that help translate what we learn into meaningful practice — creating a foundation for how alignment can be explored, understood, and applied across the whole human experience.",
    ],
  },
];

export default function InstitutePage() {
  return (
    <main className="min-h-screen bg-institute-bg text-institute-text px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl font-serif">
        <p className="font-sans text-[11px] tracking-[0.14em] uppercase text-institute-accent mb-2">
          The Institute for Whole Human Alignment
        </p>
        <div className="w-full h-px bg-institute-rule mb-8" />

        <p className="text-2xl sm:text-[26px] italic leading-relaxed mb-11">
          What creates alignment in the whole human experience?
        </p>

        <div className="space-y-7">
          {sections.map((section) => (
            <div key={section.numeral}>
              <p className="font-sans text-[13px] text-institute-accent mb-1.5">{section.numeral}</p>
              <p className="font-sans text-[15px] font-semibold text-institute-text mb-1">
                {section.heading}
              </p>
              {section.lead && (
                <p className="font-sans text-sm italic text-institute-body leading-relaxed mb-2.5">
                  {section.lead}
                </p>
              )}
              {section.body.map((paragraph, i) => (
                <p key={i} className="font-sans text-sm text-institute-body leading-relaxed mt-3 first:mt-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-institute-footerRule mt-9 mb-4" />
        <p className="font-sans text-[13px] text-institute-accent">
          Educator or organization? Get in touch.
        </p>
      </div>
    </main>
  );
}
