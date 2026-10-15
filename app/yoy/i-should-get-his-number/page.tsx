import type { Metadata } from "next";
import StoryPart from "@/components/StoryPart";

export const metadata: Metadata = {
  title: "I Should Get His Number",
  description: "Part 2 from RYB YOY.",
  robots: { index: false, follow: false },
};

const passages = [
  "See, it all started that night I went straight, then left, instead of turning right.",
  "He smiled. Sweet, but hurried. Interested, but not ready to show it. Cute, but harmless.",
  "I smiled and kept moving.",
  "Then I turned left.",
  "And there he was, standing by the bench, smiling, phone to his ear.",
  "I passed him, but I had to stop and turn around.",
  "“What are you doing?”",
  "I could hear the accent. Arabic?",
  "“I want to see who was smiling so much.”",
  "That caught him off guard.",
  "And then we spoke. We kept our distance and had a conversation.",
  "He rides racehorses.",
  "Hmm.",
  "I should get his number.",
];

export default function IShouldGetHisNumberPage() {
  return (
    <StoryPart
      part={2}
      title="I Should Get His Number"
      passages={passages}
      previous={{ label: "Re-Awakening", href: "/yoy/re-awakening" }}
      next={{ label: "Meet Me Outside", href: "/yoy/meet-me-outside" }}
    />
  );
}
