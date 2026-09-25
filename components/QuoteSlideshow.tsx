"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* Edit quotes here. Leave author as "" if you don't want one. */
const QUOTES = [
  { text: "The invisible snake bites. Now I see.", author: "Taoist Proverb" },
  {
    text: "A fool thinks he will live forever if he avoids fight; but old age gives him no peace, even if spears do.",
    author: "The Words of Odin",
  },
  { text: "Placeholder quote three.", author: "" },
  { text: "Placeholder quote four.", author: "" },
  { text: "Placeholder quote five.", author: "" },
];

const SECONDS_PER_SLIDE = 6;

export default function QuoteSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0); // bump to restart the timer after manual navigation
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setCurrent((i + QUOTES.length) % QUOTES.length);
  }, []);

  useEffect(() => {
    if (paused || QUOTES.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (timer || document.hidden) return;
      timer = setInterval(() => setCurrent((c) => (c + 1) % QUOTES.length), SECONDS_PER_SLIDE * 1000);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused, tick]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Quotes"
      className="mt-10 touch-pan-y"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current !== null) {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1));
        }
        touchStartX.current = null;
        setPaused(false);
      }}
    >
      <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-home-stance to-transparent" />

      <div className="grid min-h-[8rem] my-8" aria-live="polite">
        {QUOTES.map((q, i) => (
          <figure
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${QUOTES.length}`}
            aria-hidden={i !== current}
            className={`[grid-area:1/1] m-0 flex flex-col justify-center transition-[opacity,visibility] duration-[1200ms] ease-in-out motion-reduce:transition-none ${
              i === current ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <blockquote className="m-0 font-serif italic text-2xl sm:text-[32px] leading-snug text-home-text">
              {q.text}
            </blockquote>
            {q.author && (
              <figcaption className="mt-6 font-sans text-sm tracking-[0.08em] text-home-stance">
                {q.author}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-home-stance to-transparent" />

      <div role="group" aria-label="Choose a quote" className="flex justify-center gap-3.5 mt-10">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show quote ${i + 1}`}
            aria-current={i === current}
            onClick={() => {
              go(i);
              setTick((t) => t + 1);
            }}
            className={`w-[9px] h-[9px] p-0 rounded-full border border-home-stance cursor-pointer transition-colors duration-[400ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-home-text ${
              i === current ? "bg-home-stance" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
