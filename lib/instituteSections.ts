export type InstituteSection = {
  numeral: string;
  heading: string;
  lead?: string;
  body: string[];
};

export const instituteSections: InstituteSection[] = [
  {
    numeral: "I.",
    heading: "Philosophy",
    body: [
      "Alignment begins with awareness. As awareness grows, so does our understanding of the forces that shape us — within ourselves, between us, and in the world around us. With that understanding comes choice: the ability to recognize where we are, consider what influences us, and choose how we move next.",
    ],
  },
  {
    numeral: "II.",
    heading: "Frameworks",
    body: [
      "We explore the many practices, experiences, and relationships that influence alignment — from movement, breath, yoga, grounding, energy, and vibration to intimacy, connection, environment, and the way we live our everyday lives.",
      "Each framework offers another way to understand ourselves, recognize what influences us, and explore how we can choose how we move next.",
    ],
  },
  {
    numeral: "III.",
    heading: "Research",
    lead: "Generations old, yet brand new.",
    body: [
      "We bring together perspectives, practices, and emerging knowledge to examine what influences human behaviour, awareness, and alignment — and how those influences interact over time.",
    ],
  },
  {
    numeral: "IV.",
    heading: "Standards & Methodology",
    lead: "Turning understanding into practice.",
    body: [
      "We develop the principles, frameworks, and methods that help translate what we learn into meaningful practice — creating a foundation for how alignment can be explored, understood, and applied across the whole human experience.",
    ],
  },
];
