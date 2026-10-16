import type { Metadata } from "next";
import StoryPart from "@/components/StoryPart";

export const metadata: Metadata = {
  title: "Meet Me Outside",
  description: "Part 3 from RYB YOY.",
  robots: { index: false, follow: false },
};

const passages = [
  "This skirt’s so short, but then I promised easy access. And it felt nice grazing the bottom of my butt. My ass hadn’t been touched in so long.",
  "I reached for my fuzzy boots, you know the ones. Perfect with a far-too-short, low-cut, naked dress. The rough fur against the slinky satin.",
  "Flats, of course. You need to keep your footing. I put on my barely there, but perfect shelf bra so my nipples stood at attention. The cold fall air will help. I decide to go for ponytails, two perfectly placed, cuffed just under the jawbone.",
  "Perfect control for him.",
  "“Meet me outside.” SMS sent.",
];

export default function MeetMeOutsidePage() {
  return (
    <StoryPart
      part={3}
      title="Meet Me Outside"
      passages={passages}
      previous={{ label: "I Should Get His Number", href: "/yoy/i-should-get-his-number" }}
      lookHref="/yoy/shop#meet-me-outside"
    />
  );
}
