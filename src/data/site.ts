// ============================================================
// EMIGARMENTS — central content.
// Items marked `placeholder: true` or commented "CONFIRM" must be
// replaced with verified company data before public launch.
// ============================================================

export interface Img {
  /** Unsplash CDN path token, e.g. "photo-1741176505800-caaa3a52631a" */
  img: string;
  alt: string;
  credit: string;
}

export interface Division {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  stages: string[];
  hero: Img;
  gallery: Img[];
}

export interface Stat {
  value: string;
  label: string;
  note?: string;
  placeholder?: boolean;
}

export const site = {
  name: "EMIGARMENTS",
  tagline: "A Progressive Industrial Group",
  founded: "2021",
  founder: "Muhammad Musa",
  city: "Karachi",
  country: "Pakistan",
  domain: "emigarments.com",
  url: "https://emigarments.com",
  description:
    "EMIGARMENTS is a Karachi-based progressive industrial group manufacturing leather, denim, home textiles, and terry, engineered end to end under modern automation and audited quality.",
  hero: {
    headline: "Engineered Textiles. End to End.",
    sub: "A progressive industrial group manufacturing leather, denim, home textiles, and terry, built end to end under modern automation and audited quality for partners worldwide.",
  },
} as const;

export const contact = {
  email: "info@emigarments.com",
  // Fill these in when confirmed — empty values are simply not shown on the site.
  phone: "",
  phoneHref: "",
  whatsapp: "",
  whatsappHref: "",
  addressLines: ["Karachi, Pakistan"],
  mapQuery: "Karachi, Pakistan",
  hours: "Monday – Saturday · 09:00 – 18:00 PKT",
} as const;

export const forms = {
  // Get a free access key at https://web3forms.com (enter info@emigarments.com as the
  // destination), then paste it here. Until it's replaced, the form shows a friendly
  // "email us directly" fallback instead of failing silently.
  web3formsKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Divisions", href: "/divisions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ---- Verbatim value blocks (client-supplied) ----
export const valueBlocks = [
  {
    title: "Precision-Driven Manufacturing Solutions",
    body: "Every product we develop is engineered through responsible manufacturing practices and processed with advanced systems to ensure durability, performance, and consistent quality.",
  },
  {
    title: "Premium Quality Industrial Production",
    body: "Our facilities operate with modern automation and strict quality controls to deliver reliable output, operational efficiency, and excellence across every stage of production.",
  },
] as const;

// ---- The real 4-step process (client-supplied, verbatim) ----
export const processSteps = [
  { n: "01", title: "Plan & Design", body: "Develop technical concepts and detailed specifications with precision." },
  { n: "02", title: "Source Quality Materials", body: "Select reliable raw materials that meet strict industry standards." },
  { n: "03", title: "Manufacture with Accuracy", body: "Utilize advanced machinery and skilled teams for flawless execution." },
  { n: "04", title: "Inspect & Deliver", body: "Perform thorough quality checks to ensure reliable final output." },
] as const;

// ---- Proof: true, verifiable facts up front; provisional figures flagged ----
export const proof: Stat[] = [
  { value: "4", label: "Integrated divisions", note: "Leather · Denim · Home Textiles · Terry" },
  { value: "2021", label: "Founded", note: "Modern, automated facilities" },
  { value: "End-to-end", label: "In-house production", note: "Source → make → inspect → ship" },
  { value: "Global", label: "Built for export", note: "Partners worldwide" },
];

// ---- Facility at-a-glance (About) — figures to confirm ----
export const facility: Stat[] = [
  { value: "00,000", label: "Units / month capacity", note: "Across divisions", placeholder: true },
  { value: "000+", label: "People employed", placeholder: true },
  { value: "00,000 m²", label: "Combined facility area", placeholder: true },
  { value: "00+", label: "Export markets served", placeholder: true },
];

// ---- Compliance: framed as standards we build to / are pursuing, NOT certificates held.
//      Replace with real, currently-held certifications (+ logos + validity dates) before launch. ----
export const compliance = {
  note: "We manufacture to the international standards global buyers screen for, from product safety to ethical and environmental audit.",
  flag: "✱ Confirm EMIGARMENTS holds each standard, then swap these seals for the official certification marks and certificate numbers before launch.",
  standards: [
    { name: "OEKO-TEX® Standard 100", note: "Tested for harmful substances" },
    { name: "ISO 9001", note: "Quality management" },
    { name: "amfori BSCI", note: "Social compliance" },
    { name: "Sedex / SMETA", note: "Ethical audit" },
    { name: "WRAP", note: "Responsible production" },
    { name: "GRS", note: "Recycled content" },
  ] as { name: string; note: string }[],
};

// ---- Static imagery (verified Unsplash; swap for real EMIGARMENTS photos before launch) ----
export const images = {
  hero: { img: "photo-1610891015188-5369212db097", alt: "Spinning machines running across a modern textile mill floor", credit: "Lalit Kumar" },
  hall: { img: "photo-1636986056375-184676d8ca14", alt: "Indigo warp threads drawn across the warping machine before weaving", credit: "Prince Prabhakaran" },
  looms: { img: "photo-1758270804188-8ca0b6d254bc", alt: "Industrial looms running warp beams across the production floor", credit: "Bergstrand Consultancy" },
  qc: { img: "photo-1770196009760-bead9eb10514", alt: "Operator inspecting fabric for faults at the quality-control table", credit: "Shanjir H" },
  cutter: { img: "photo-1642222437557-bdc7c9f012d3", alt: "Automated cutter tracing a pattern across layered fabric", credit: "Kin Shing Lai" },
} satisfies Record<string, Img>;

export const divisions: Division[] = [
  {
    slug: "leather",
    name: "Leather",
    tagline: "Tannery to finished goods",
    blurb:
      "Full-grain and corrected-grain leather and finished leather goods, selected, cut, and constructed to specification. Consistent hand, colour, and durability across every hide, with traceable inputs and tight tolerance on every panel.",
    stages: ["Material selection", "Cutting", "Skiving & prep", "Stitching", "Finishing & QC"],
    hero: { img: "photo-1623854156816-4c4fc355ffc7", alt: "A finished full-grain leather jacket, cognac tan, hung and inspected off the line", credit: "Derick McKinney" },
    gallery: [
      { img: "photo-1741086154510-522e68f76933", alt: "Hand-stitched leather panel showing tight, even saddle stitching", credit: "Olga Kovalski" },
      { img: "photo-1549396555-3d107fd70c85", alt: "A graduated run of leather gloves, consistent hand and colour across every hide", credit: "Philippe Jausions" },
      { img: "photo-1758252510544-867de633a4cd", alt: "Close grain on a finished hide, ready for cutting", credit: "Sheila C" },
    ],
  },
  {
    slug: "denim",
    name: "Denim",
    tagline: "Indigo, woven and finished",
    blurb:
      "Contemporary denim and five-pocket garments, from raw indigo to laundered finish. Engineered washes, repeatable shades, and clean construction at volume, so the thousandth piece matches the first.",
    stages: ["Cutting", "Stitching", "Washing", "Finishing", "Inspection"],
    hero: { img: "photo-1770795945883-96c07ae379dc", alt: "Raw indigo denim weave, macro of the warp-faced twill", credit: "Saifee Art" },
    gallery: [
      { img: "photo-1637069585336-827b298fe84a", alt: "Finished denim folded and stacked off the line", credit: "Claire Abdo" },
      { img: "photo-1770795263937-cf927f63c001", alt: "Dark indigo selvedge texture under raking light", credit: "Saifee Art" },
    ],
  },
  {
    slug: "home-textiles",
    name: "Home Textiles",
    tagline: "Woven for everyday living",
    blurb:
      "Woven home textiles: bed, table, and furnishing fabrics in cotton and blends. Stable weaves, fast colours, and finishes built to survive real-world laundering, produced to consistent width and weight.",
    stages: ["Yarn sourcing", "Weaving", "Dyeing", "Finishing", "Cut & sew"],
    hero: { img: "photo-1705493625048-f3ae8452d249", alt: "Woven home textile, macro of the interlaced cotton structure", credit: "Victor Volkov" },
    gallery: [
      { img: "photo-1518019671582-55004f1bc9ab", alt: "Natural grey linen, close detail of the slubbed weave", credit: "Luca Laurence" },
      { img: "photo-1638310533874-6c124c012e1d", alt: "Cotton warp running on the loom during home-textile production", credit: "Joel Heard" },
    ],
  },
  {
    slug: "towels-terry",
    name: "Towels & Terry",
    tagline: "Terry, spun to plush",
    blurb:
      "Bath, hand, and kitchen terry in combed and ring-spun cotton, absorbent, colourfast, and consistent in GSM and pile from first piece to last. Spun, woven, and finished under one roof for repeatable quality.",
    stages: ["Spinning", "Weaving", "Dyeing", "Embroidery", "Cut, hem & pack"],
    hero: { img: "photo-1760722974657-f64bce2f9cc5", alt: "Folded terry towels stacked straight off the finishing line", credit: "Mads Leif Hansen" },
    gallery: [
      { img: "photo-1724847885015-be191f1a47ef", alt: "Plush terry towels stacked on the rack, loop pile up close", credit: "Murat Ts." },
      { img: "photo-1575052734309-6008d800b7dc", alt: "Combed cotton yarn on the spinning floor, ready for terry weaving", credit: "K15 Photos" },
    ],
  },
];

export const divisionOptions = divisions.map((d) => ({ value: d.slug, label: d.name }));
