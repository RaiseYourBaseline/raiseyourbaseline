// Each RYB YOY story is a look you can shop. Pieces are listed before suppliers are final,
// so every piece shows as "coming soon" until it has a link.
export type LookPiece = {
  name: string;
  detail: string;
  href?: string;
};

export type Look = {
  slug: string;
  part: number;
  story: string;
  storyHref: string;
  line: string;
  pieces: LookPiece[];
};

export const yoyLooks: Look[] = [
  {
    slug: "re-awakening",
    part: 1,
    story: "Re-Awakening",
    storyHref: "/yoy/re-awakening",
    line: "Just one picture.",
    pieces: [
      { name: "The white tank", detail: "Thin enough to show everything." },
      { name: "The pink panties", detail: "Soft and simple." },
      { name: "The hoodie", detail: "Oversized, for a night in." },
      { name: "The slippers", detail: "Kicked off by the bed." },
    ],
  },
  {
    slug: "meet-me-outside",
    part: 3,
    story: "Meet Me Outside",
    storyHref: "/yoy/meet-me-outside",
    line: "Perfect control for him.",
    pieces: [
      { name: "The satin slip", detail: "Far too short, low-cut, naked satin." },
      { name: "The shelf bra", detail: "Barely there, but perfect." },
      { name: "The cropped leather jacket", detail: "For the cold fall air." },
      { name: "The fur boots", detail: "Flats, of course. You need to keep your footing." },
      { name: "The finish", detail: "A piece from Nagin, Collection 01." },
    ],
  },
];

export const instagramDm = "https://ig.me/m/ryb_yoy";
