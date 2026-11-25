export type Knot = {
  slug: string;
  title: string;
  summary: string;
  steps: string[];
  // Set once the tutorial video (and its background music track, if any) is ready —
  // drop the files in /public/videos and /public/audio and point these at them.
  videoUrl?: string;
  musicUrl?: string;
};

// The two starter knots — free and public. Add more here as tutorials are ready;
// each one gets its own page automatically at /knots/[slug].
export const freeKnots: Knot[] = [
  {
    slug: "chinese-good-luck-knot",
    title: "Chinese Good Luck Knot",
    summary: "A classic knot said to carry good fortune — the first knot to learn.",
    steps: [
      "Placeholder step 1 — swap in the real instructions when ready.",
      "Placeholder step 2 — swap in the real instructions when ready.",
      "Placeholder step 3 — swap in the real instructions when ready.",
    ],
    videoUrl: "/videos/chinese-good-luck-knot.mp4",
  },
  {
    slug: "celtic-heart-knot",
    title: "Celtic Heart Knot",
    summary: "A heart woven from a single cord, unbroken.",
    steps: [
      "Placeholder step 1 — swap in the real instructions when ready.",
      "Placeholder step 2 — swap in the real instructions when ready.",
      "Placeholder step 3 — swap in the real instructions when ready.",
    ],
    videoUrl: "/videos/celtic-heart-knot.mp4",
  },
  {
    slug: "sliding-barrel-knot",
    title: "Sliding Barrel Knot",
    summary: "An adjustable knot that lets the rope move and fit with you.",
    steps: [
      "Placeholder step 1 — swap in the real instructions when ready.",
      "Placeholder step 2 — swap in the real instructions when ready.",
      "Placeholder step 3 — swap in the real instructions when ready.",
    ],
    videoUrl: "/videos/sliding-barrel-knot.mp4",
  },
];

// Categories that unlock with the QR code on the product. No individual pages
// yet — just the locked/unlocked state on the library home until there's real
// content to give each one its own page.
export const lockedCategories = [
  { title: "Full Wearable Tutorials", description: "Every wearable style, start to finish." },
  { title: "Meditations", description: "Guided audio to go with the rope." },
  { title: "Somatic Content", description: "Body-based practices for coming back to yourself." },
  { title: "Notes", description: "Letters, woman to woman." },
];
