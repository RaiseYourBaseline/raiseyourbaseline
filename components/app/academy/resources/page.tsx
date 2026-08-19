import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ResourceLibrary from "@/components/ResourceLibrary";

export const metadata: Metadata = {
  title: "Academy Resource Library",
  description: "Free resources to support your journey through the Academy.",
};

const academyResources = [
  {
    title: "Colour Mixing Experiment",
    description:
      "A hands-on activity exploring primary and secondary colours — predict each combination, mix and check, then colour in the results.",
    pdf: "/resources/academy/colour-mixing-experiment.pdf",
  },
];

export default function AcademyResourcesPage() {
  return (
    <main className="min-h-screen bg-academy-bg text-academy-text font-sans">
      <nav className="flex items-center px-6 sm:px-7 py-4 border-b border-academy-border">
        <Breadcrumb current="Resource Library" accentClassName="text-academy-accent" />
      </nav>

      <section className="px-6 sm:px-7 pt-12 pb-5 text-center">
        <p className="text-xs tracking-[0.16em] uppercase text-academy-accent mb-4">
          Academy Resource Library
        </p>
        <p className="text-sm text-academy-intro max-w-xl mx-auto leading-relaxed">
          Free resources to support your journey through the Academy.
        </p>
      </section>

      <section className="px-6 sm:px-7 pb-16 max-w-4xl mx-auto">
        <ResourceLibrary
          storageKey="academy_resources_unlocked"
          pitchLine="Enter your email to unlock the Academy resource library."
          resources={academyResources}
          hubspot={{
            scriptSrc: "https://js-na3.hsforms.net/forms/embed/343531732.js",
            region: "na3",
            formId: "5460407c-9a48-4591-9c10-7dad60b557c1",
            portalId: "343531732",
          }}
          theme={{
            text: "text-academy-text",
            accent: "text-academy-accent",
            cardBorder: "border-academy-border",
            body: "text-academy-topics",
          }}
        />
      </section>
    </main>
  );
}
