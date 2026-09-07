export type CaseStudy = {
  id: string;
  name: string;
  stageLabel: string;
  overlayLabel: string;
  accentClassName: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "orjar",
    name: "Orjar",
    stageLabel: "Featured concept",
    overlayLabel: "Orjar placeholder",
    accentClassName: "bg-[#e8e8e8]",
  },
  {
    id: "ealho",
    name: "Ealho",
    stageLabel: "Case study preview",
    overlayLabel: "Ealho placeholder",
    accentClassName: "bg-[#e3e3e3]",
  },
  {
    id: "hyperrails",
    name: "HyperRails",
    stageLabel: "Product story",
    overlayLabel: "HyperRails placeholder",
    accentClassName: "bg-[#dddddd]",
  },
  {
    id: "spotflow",
    name: "Spotflow",
    stageLabel: "Design system",
    overlayLabel: "Spotflow placeholder",
    accentClassName: "bg-[#e5e5e5]",
  },
  {
    id: "momentum",
    name: "Momentum",
    stageLabel: "Experience snapshot",
    overlayLabel: "Momentum placeholder",
    accentClassName: "bg-[#dfdfdf]",
  },
];
