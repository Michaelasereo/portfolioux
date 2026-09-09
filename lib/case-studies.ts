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
    accentClassName: "bg-[var(--surface-overlay)]",
  },
  {
    id: "ealho",
    name: "Ealho",
    stageLabel: "Case study preview",
    overlayLabel: "Ealho placeholder",
    accentClassName: "bg-[var(--surface-dark)]",
  },
  {
    id: "hyperrails",
    name: "HyperRails",
    stageLabel: "Product story",
    overlayLabel: "HyperRails placeholder",
    accentClassName: "bg-[var(--surface)]",
  },
  {
    id: "spotflow",
    name: "Spotflow",
    stageLabel: "Design system",
    overlayLabel: "Spotflow placeholder",
    accentClassName: "bg-[var(--surface-overlay)]",
  },
  {
    id: "momentum",
    name: "Momentum",
    stageLabel: "Experience snapshot",
    overlayLabel: "Momentum placeholder",
    accentClassName: "bg-[var(--surface-dark)]",
  },
];
