import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { rtsCollections } from "@/lib/rtsCollections";

export const metadata: Metadata = {
  title: "Reignite the Spark",
  description:
    "Raise Your Baseline — for women only. Created for women who are ready to reconnect with themselves, raise their baseline, and choose how they move next.",
};

export default function ReigniteTheSparkPage() {
  return (
    <main className="min-h-screen bg-rts-bg text-rts-text font-sans">
      <nav className="px-6 sm:px-7 py-4">
        <Breadcrumb current="Reignite the Spark" accentClassName="text-rts-gold" />
      </nav>

      <div className="mx-auto max-w-2xl px-6 pb-16">
        <p className="text-[11px] tracking-[0.14em] uppercase text-rts-rose text-center mb-5">
          Reignite the Spark
        </p>
        <p className="font-serif text-2xl sm:text-[26px] text-center leading-relaxed mb-1.5">
          It all starts with a spark.
        </p>
        <p className="font-serif italic text-2xl sm:text-[26px] text-center leading-relaxed text-rts-rose">
          Re-ignite it.
        </p>

        <p className="text-xs font-semibold tracking-wide uppercase text-rts-gold text-center mt-7 mb-2.5">
          Raise Your Baseline &mdash; for women only
        </p>
        <p className="text-sm text-rts-sub text-center max-w-md mx-auto leading-relaxed">
          Created for women who are ready to reconnect with themselves, raise their baseline, and
          choose how they move next.
        </p>

        <p className="text-[11px] uppercase tracking-wide text-rts-gold text-center mt-11 mb-4">
          Core Experiences
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="bg-rts-card rounded-md px-6 py-[26px]">
            <div className="text-[10px] uppercase tracking-wide text-rts-rose mb-2">Course</div>
            <div className="font-serif text-xl text-rts-cardText mb-2">Heartbreak High</div>
            <p className="text-[12.5px] text-rts-cardBody leading-relaxed mb-4">
              A guided return, one lesson at a time — for women finding their way back to
              themselves.
            </p>
                        <form action="https://formspree.io/f/mrpzlekv" method="POST" className="flex gap-2">
              <input type="hidden" name="product" value="Heartbreak High" />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="flex-1 min-w-0 bg-transparent border-b border-rts-rose text-rts-cardText text-xs placeholder:text-rts-cardBody/70 focus:outline-none py-0.5"
              />
              <button
                type="submit"
                className="text-xs text-rts-cardText border-b border-rts-rose pb-0.5 whitespace-nowrap"
              >
                Join waitlist
              </button>
            </form>
          </div>
          <div className="bg-rts-card rounded-md px-6 py-[26px]">
            <div className="text-[10px] uppercase tracking-wide text-rts-rose mb-2">Companion</div>
            <div className="font-serif text-xl text-rts-cardText mb-2">The Guidebook</div>
            <p className="text-[12.5px] text-rts-cardBody leading-relaxed mb-4">
              The companion that brings the Raise Your Baseline philosophy into everyday life.
            </p>
                        <form action="https://formspree.io/f/mrpzlekv" method="POST" className="flex gap-2">
              <input type="hidden" name="product" value="The Guidebook" />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="flex-1 min-w-0 bg-transparent border-b border-rts-rose text-rts-cardText text-xs placeholder:text-rts-cardBody/70 focus:outline-none py-0.5"
              />
              <button
                type="submit"
                className="text-xs text-rts-cardText border-b border-rts-rose pb-0.5 whitespace-nowrap"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </div>

        <p className="text-[11px] uppercase tracking-wide text-rts-gold mt-11 mb-4">Collections</p>
        {rtsCollections.map((category) => (
          <div key={category.title} className="mb-8">
            <p className="text-[13px] font-bold tracking-wide uppercase text-rts-text mb-2.5">
              {category.title}
            </p>
            <div className="flex flex-col">
              {category.items.map((item, i) => (
                <div
                  key={item}
                  className={`flex justify-between items-center py-[11px] text-sm ${
                    i !== category.items.length - 1 ? "border-b border-rts-itemBorder" : ""
                  }`}
                >
                  <span>{item}</span>
                  <span className="text-rts-gold text-sm" aria-hidden="true">
                    &rarr;
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
