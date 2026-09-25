"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type Quote = {
  text?: string;
  dialogue?: { speaker: string; line: string }[];
  author: string;
  seconds?: number; // how long this slide shows; defaults to SECONDS_PER_SLIDE
};

/* Edit quotes here. Leave author as "" if you don't want one.
   For a conversation, use `dialogue` instead of `text`. */
const QUOTES: Quote[] = [
  { text: "The invisible snake bites. Now I see.", author: "Taoist Proverb" },
  {
    text: "A fool thinks he will live forever if he avoids fight; but old age gives him no peace, even if spears do.",
    author: "The Words of Odin",
  },
  { text: "After victory, tighten your helmet cord.", author: "Hōjō Ujitsuna" },
  { text: "If each of us held a candle, the disagreement would go out of our words.", author: "Rumi" },
  { text: "Truth is the daughter of time.", author: "Aulus Gellius" },
  {
    text: "Only when the last tree has died, the last river been poisoned, and the last fish been caught will we realize we cannot eat money.",
    author: "Cree Wisdom",
  },
  { text: "The bamboo that bends is stronger than the oak that resists.", author: "Japanese Proverb" },
  {
    dialogue: [
      { speaker: "Uddalaka", line: "Bring me a fruit from that banyan tree." },
      { speaker: "Svetaketu", line: "Here it is, venerable sir." },
      { speaker: "Uddalaka", line: "Break it open." },
      { speaker: "Svetaketu", line: "It is broken, sir." },
      { speaker: "Uddalaka", line: "What do you see inside?" },
      { speaker: "Svetaketu", line: "These tiny seeds, sir." },
      { speaker: "Uddalaka", line: "Now, my son, take one of those seeds and break it open." },
      { speaker: "Svetaketu", line: "It is broken, sir." },
      { speaker: "Uddalaka", line: "What do you see inside?" },
      { speaker: "Svetaketu", line: "Nothing at all, sir." },
    ],
    author: "The Upanishads",
    seconds: 20,
  },
];

const SECONDS_PER_SLIDE = 6;

export default function QuoteSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0); // bump to restart the timer after manual navigation
  const touchStartX = useRef<number | null>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const [stageHeight, setStageHeight] = useState<number>();

  // Ease the stage to the current slide's height so short quotes don't sit in the dialogue's empty space.
  useLayoutEffect(() => {
    const slide = slideRefs.current[current];
    if (!slide) return;
    const measure = () => setStageHeight(slide.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    return () => observer.disconnect();
  }, [current]);

  const go = useCallback((i: number) => {
    setCurrent((i + QUOTES.length) % QUOTES.length);
  }, []);

  useEffect(() => {
    if (paused || QUOTES.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setTimeout> | null = null;
    const start = () => {
      if (timer || document.hidden) return;
      const seconds = QUOTES[current].seconds ?? SECONDS_PER_SLIDE;
      timer = setTimeout(() => setCurrent((c) => (c + 1) % QUOTES.length), seconds * 1000);
    };
    const stop = () => {
      if (timer) clearTimeout(timer);
      timer = null;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused, tick, current]);

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

      <div
        className="relative my-8 overflow-hidden transition-[height] duration-700 ease-in-out motion-reduce:transition-none"
        style={{ height: stageHeight }}
        aria-live="polite"
      >
        {QUOTES.map((q, i) => (
          <figure
            key={i}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${QUOTES.length}`}
            aria-hidden={i !== current}
            className={`m-0 flex flex-col justify-center transition-[opacity,visibility] duration-[1200ms] ease-in-out motion-reduce:transition-none ${
              i === current ? "relative opacity-100 visible" : "absolute inset-x-0 top-0 opacity-0 invisible"
            }`}
          >
            {q.dialogue ? (
              <blockquote className="m-0 space-y-1.5 font-serif italic text-lg sm:text-xl leading-snug text-home-text">
                {q.dialogue.map((d, n) => (
                  <p key={n} className="m-0">
                    <span className="not-italic font-sans text-[11px] tracking-[0.12em] uppercase text-home-stance mr-2">
                      {d.speaker}
                    </span>
                    {d.line}
                  </p>
                ))}
              </blockquote>
            ) : (
              <blockquote className="m-0 font-serif italic text-2xl sm:text-[32px] leading-snug text-home-text">
                {q.text}
              </blockquote>
            )}
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
