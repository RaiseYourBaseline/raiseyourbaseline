import type { Metadata } from "next";
import StoryPart from "@/components/StoryPart";

export const metadata: Metadata = {
  title: "Re-Awakening",
  description: "Part 1 from RYB YOY.",
  robots: { index: false, follow: false },
};

const passages = [
  "Have you ever seen a picture of a cock and instantly gotten wet?",
  "I hadn’t. Actually, I used to be repulsed.",
  "But I had written about this one. Large, thick, with just the right amount of cum. Mmmm.",
  "It had gotten me in a lot of trouble at the end of our engagement. But I had written about it. I had seen it.",
  "And then I see it on the phone.",
  "Shit, should have disobeyed and kept a copy.",
  "Wet. Instantly.",
  "You could see my nipples get hard under my white tank.",
  "I don’t know if you’ve had your pussy pulse at the mere image of a penis, but f***. It happened.",
  "Just one photo, and I was soaking through my pink panties.",
  "And damn, it felt nice.",
  "Years of pent-up repression. Gone. Just one picture.",
  "It was nice.",
];

export default function ReAwakeningPage() {
  return (
    <StoryPart
      part={1}
      title="Re-Awakening"
      passages={passages}
      next={{ label: "I Should Get His Number", href: "/yoy/i-should-get-his-number" }}
    />
  );
}
