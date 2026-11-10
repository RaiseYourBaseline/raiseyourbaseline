import Image from "next/image";
import Link from "next/link";

type PartLink = { label: string; href: string };

type StoryPartProps = {
  part: number;
  title: string;
  passages: string[];
  previous?: PartLink;
  next?: PartLink;
  lookHref?: string;
};

export default function StoryPart({ part, title, passages, previous, next, lookHref }: StoryPartProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ryb-black px-6 py-20">
      <Image
        src="/landing/raise-your-baseline-clean.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />

      <article className="relative z-10 mx-auto max-w-md">
        <header className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ryb-muted">RYB YOY &middot; Part {part}</p>
          <h1 className="mt-4 font-serif leading-[1.08] tracking-[0.02em] text-ryb-white text-[clamp(2.25rem,7vw,3.5rem)]">
            {title}
          </h1>
          <div className="mx-auto mt-8 h-px w-10 bg-ryb-muted" />
        </header>

        <div className="mt-12 space-y-7 font-serif text-xl leading-relaxed text-ryb-white sm:text-[1.375rem]">
          {passages.map((passage) => (
            <p key={passage}>{passage}</p>
          ))}
        </div>

        {lookHref && (
          <div className="mt-14 text-center">
            <Link
              href={lookHref}
              className="inline-block border border-ryb-muted px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-ryb-white transition-colors hover:bg-ryb-white hover:text-ryb-black"
            >
              Shop this look
            </Link>
          </div>
        )}

        {(previous || next) && (
          <nav className="mt-16 flex justify-between gap-6 border-t border-ryb-graphiteLight pt-6">
            {previous ? (
              <Link href={previous.href} className="group text-left">
                <p className="text-[11px] tracking-[0.2em] text-ryb-muted">&larr; Part {part - 1}</p>
                <p className="mt-1 font-serif text-lg text-ryb-white transition-colors group-hover:text-ryb-muted">
                  {previous.label}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={next.href} className="group text-right">
                <p className="text-[11px] tracking-[0.2em] text-ryb-muted">Part {part + 1} &rarr;</p>
                <p className="mt-1 font-serif text-lg text-ryb-white transition-colors group-hover:text-ryb-muted">
                  {next.label}
                </p>
              </Link>
            )}
          </nav>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/yoy"
            className="text-[11px] tracking-[0.2em] text-ryb-muted/70 transition-colors hover:text-ryb-white"
          >
            &larr; RYB YOY
          </Link>
        </div>
      </article>
    </main>
  );
}
