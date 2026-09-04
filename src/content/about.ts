import type { Tone } from "./types";

/**
 * About page copy. The page is a 3 × 2 grid of tiles (four text tiles and two
 * image tiles) followed by the principles and the FAQ.
 * Everything in square brackets is a placeholder to be replaced.
 */
export interface AboutTile {
  title: string;
  body: string[];
  tone: Tone;
}

export const about = {
  title: "About",
  lede: "A small, independent methodological consultancy for clinical research, founded in Italy and working across Europe.",
  tiles: [
    {
      title: "Origins",
      tone: "sand",
      body: [
        "Quantum Care was founded in 2025 in Italy, to give clinical researchers access to the kind of methodological and statistical support that is usually only available inside large academic centres: rigorous, involved from the first idea, and honest about what the data can support.",
      ],
    },
    {
      title: "Clients",
      tone: "dark",
      body: [
        "We work with hospitals, universities, scientific societies and companies in Italy and across Europe, in Italian and English. Projects range from a single sample-size memo to multi-year collaborations on registries, guidelines and research tooling.",
      ],
    },
    {
      title: "Research",
      tone: "lavender",
      body: [
        "Alongside client work we run our own research programme on research methods and on the responsible use of large language models in evidence synthesis, and we publish the tools that come out of it as open source.",
      ],
    },
    {
      title: "Team",
      tone: "purple",
      body: [
        // TODO: replace with the real founder bio.
        "Founder — biostatistician and research methodologist",
        "[Two or three sentences: training, years of experience, fields of clinical research, notable collaborations or publications.]",
      ],
    },
  ] satisfies AboutTile[],
  /** Image tiles: row 1 middle and row 2 middle. */
  images: [
    { src: "/images/gradient-warm.jpg", alt: "" },
    { src: "/images/gradient-purple.jpg", alt: "" },
  ],
  principles: {
    eyebrow: "How we work",
    title: "Principles we do not\nnegotiate on",
  },
};
