export type Recipe = {
  slug: string; // used in the page address: /nutrition/<slug>
  title: string;
  category: string; // must match one of recipeCategories
  intro: string;
  image: string; // photo in public/recipes/
  card?: string; // optional printable card (image or PDF) in public/recipes/
  details: string[]; // short facts shown on the grid card, e.g. "8×8 pan"
  ingredients: { name: string; amount?: string; note?: string }[];
  steps: { title: string; text: string }[];
  tip?: { text: string; closing?: string };
};

// Order here is the order of the filter buttons. Categories with no recipes are hidden.
export const recipeCategories = ["Breakfast", "Snacks & Bars", "Mains", "Soups", "Sides", "Drinks & Teas"];

export const recipes: Recipe[] = [
  {
    slug: "baked-apple-oat-bars",
    title: "Baked Apple Oat Bars",
    category: "Snacks & Bars",
    intro: "Turn yesterday’s baked apples into something new.",
    image: "/recipes/baked-apple-oat-bars.jpg",
    details: ["8×8 pan", "Bake 20–25 min"],
    ingredients: [
      { name: "Baked apples", amount: "1 – 1½ cups" },
      { name: "Old-fashioned rolled oats", amount: "2 cups" },
      { name: "Nut butter", amount: "¼ cup", note: "or 1 mashed banana" },
      { name: "Salt", amount: "a pinch" },
      { name: "Spice it up", note: "cinnamon, nutmeg, clove, a drop of vanilla, maybe some black pepper" },
      { name: "A little sweetness, if you’d like", note: "maple syrup, honey, or dates" },
    ],
    steps: [
      { title: "Prep", text: "Heat oven to 350°F / 180°C. Line an 8×8-inch pan with parchment paper." },
      { title: "Mash", text: "Mash the baked apples with a fork, leaving some small pieces for texture." },
      {
        title: "Mix",
        text: "Add oats, salt and your chosen binder. Spice it up and add a little sweetness if you’d like. Mix until the oats are completely coated.",
      },
      {
        title: "Press",
        text: "Transfer to the pan and press down firmly. The more tightly packed, the better the bars will hold together.",
      },
      { title: "Bake", text: "Bake for 20–25 minutes, until the edges are golden." },
      { title: "Chill", text: "Cool completely, then refrigerate for 30 minutes before cutting." },
    ],
    tip: {
      text: "If your baked apples are thick and sticky, you may not need a binder at all.",
      closing: "Start with what you have. Add only what you need.",
    },
  },
];
