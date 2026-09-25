import Link from "next/link";
import QuoteSlideshow from "@/components/QuoteSlideshow";

// Facets without an href show as "Coming soon" until their pages exist.
const facets: { numeral: string; name: string; href?: string }[] = [
  { numeral: "I", name: "Nutrition" },
  { numeral: "II", name: "Apothecary" },
  { numeral: "III", name: "Movement" },
  { numeral: "IV", name: "Clothing and Accessories" },
  { numeral: "V", name: "Academy", href: "/academy" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-home-bg text-home-text px-5 py-16 sm:py-24 text-center">
      <div className="mx-auto max-w-xl">
        <svg
          width="150"
          height="157"
          viewBox="0 0 220 230"
          className="mx-auto block"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="g1" gradientUnits="userSpaceOnUse" x1="110" y1="230" x2="110" y2="40">
              <stop offset="0%" stopColor="#8A6E32" />
              <stop offset="35%" stopColor="#C8A951" />
              <stop offset="60%" stopColor="#F2DFA8" />
              <stop offset="100%" stopColor="#F0DDA6" />
            </linearGradient>
          </defs>
          <line x1="99" y1="40" x2="121" y2="40" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
          <line x1="85" y1="66" x2="135" y2="66" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
          <line x1="70" y1="92" x2="150" y2="92" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
          <line x1="56" y1="118" x2="164" y2="118" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
          <line x1="42" y1="144" x2="178" y2="144" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
          <line x1="27" y1="170" x2="193" y2="170" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
          <line x1="13" y1="196" x2="207" y2="196" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        <p className="mt-8 gold-text font-sans font-bold text-[22px] tracking-[0.28em]">
          RAISE YOUR BASELINE
        </p>
        <QuoteSlideshow />

        <Link
          href="#facets"
          className="inline-block mt-10 border border-home-stance/60 text-home-tag text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 rounded-full hover:bg-home-stance/10 transition-colors"
        >
          Discover the facets of RYB
        </Link>

        <div id="facets" className="flex justify-center flex-wrap mt-11 gap-x-10 gap-y-6">
          {facets.map((facet) =>
            facet.href ? (
              <Link key={facet.name} href={facet.href} className="group">
                <div className="text-xs text-home-eyebrow mb-2">{facet.numeral}</div>
                <div className="text-[15px] text-home-tag group-hover:text-home-text transition-colors">
                  {facet.name}
                </div>
              </Link>
            ) : (
              <div key={facet.name}>
                <div className="text-xs text-home-eyebrow mb-2">{facet.numeral}</div>
                <div className="text-[15px] text-home-tag">{facet.name}</div>
                <div className="text-[11px] text-home-eyebrow mt-1">Coming soon</div>
              </div>
            )
          )}
        </div>

              <div className="mt-11 pt-7 border-t border-home-rule">
          <p className="text-[11px] tracking-widest uppercase text-home-muted mb-2.5">
            Raise Your Baseline is growing
          </p>
          <p className="font-serif italic text-base text-home-stance">
            Men&rsquo;s Collection &mdash; Coming Soon
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-home-rule">
          <p className="text-[11px] tracking-[0.3em] uppercase text-home-eyebrow mb-5">
            We&rsquo;re Building
          </p>
          <p className="font-serif italic text-base text-home-body leading-relaxed max-w-sm mx-auto">
            Raise Your Baseline is a living platform &mdash; growing, evolving, and taking shape
            with intention.
          </p>
          <p className="text-xs text-home-muted mt-6">
            Thank you for being here early.
          </p>
        </div>
      </div>
    </main>
  );
}
