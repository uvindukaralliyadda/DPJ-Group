import type { Subsidiary, SubsidiaryDetail, SubsidiaryKey } from "@/types";

export const SUBSIDIARIES: Subsidiary[] = [
  {
    key: "construction",
    name: "Construction",
    description:
      "Building spaces and infrastructure designed for lasting performance.",
    href: "/subsidiaries/construction",
    image: "/images/placeholders/construction.jpg",
  },
  {
    key: "piling",
    name: "Piling",
    description:
      "Specialized foundation and piling capabilities supporting complex construction requirements.",
    href: "/subsidiaries/piling",
    image: "/images/placeholders/piling.jpg",
  },
  {
    key: "transport",
    name: "Transport",
    description:
      "Reliable transportation capabilities supporting projects and operations.",
    href: "/subsidiaries/transport",
    image: "/images/placeholders/transport.jpg",
  },
  {
    key: "steel",
    name: "Steel",
    description:
      "Steel capabilities supporting structural and industrial requirements.",
    href: "/subsidiaries/steel",
    image: "/images/placeholders/steel.jpg",
  },
];

const APPROACH_STEPS: Record<SubsidiaryKey, SubsidiaryDetail["approach"]> = {
  construction: [
    { title: "Understand", description: "Reviewing project requirements and site conditions before work begins." },
    { title: "Plan", description: "Structuring the delivery approach around sequencing, coordination and quality." },
    { title: "Execute", description: "Carrying out construction works with discipline and close supervision." },
    { title: "Deliver", description: "Handing over completed work aligned with the agreed scope." },
  ],
  piling: [
    { title: "Understand", description: "Assessing ground conditions and structural requirements for each project." },
    { title: "Plan", description: "Selecting a piling approach suited to the site and structural demands." },
    { title: "Execute", description: "Carrying out piling operations with technical precision and supervision." },
    { title: "Deliver", description: "Handing over a stable foundation ready for the next construction phase." },
  ],
  transport: [
    { title: "Understand", description: "Assessing material, equipment and site movement requirements." },
    { title: "Plan", description: "Coordinating logistics around project timelines and site access." },
    { title: "Execute", description: "Carrying out transport operations to keep projects moving." },
    { title: "Deliver", description: "Ensuring materials and equipment arrive where they are needed." },
  ],
  steel: [
    { title: "Understand", description: "Reviewing structural steel requirements for each project." },
    { title: "Plan", description: "Coordinating steel-related works around the wider project programme." },
    { title: "Execute", description: "Carrying out steel-related works with precision and supervision." },
    { title: "Deliver", description: "Supporting durable, structurally sound project outcomes." },
  ],
};

// CONTENT PLACEHOLDER - REPLACE WITH VERIFIED DPJ INFORMATION
export const SUBSIDIARY_DETAILS: Record<SubsidiaryKey, SubsidiaryDetail> = {
  construction: {
    slug: "construction",
    name: "Construction",
    eyebrow: "DPJ CONSTRUCTION",
    heroTitle: "Building What Lasts.",
    heroDescription:
      "Delivering construction solutions with the experience, precision and discipline built over five decades.",
    introduction: {
      eyebrow: "About Construction",
      heading: "Experience That Shapes Every Build.",
      description:
        "DPJ Construction operates as one of the four core businesses within DPJ Group, contributing construction delivery capability shaped by the group's five decades of experience and third-generation leadership.",
    },
    capabilities: [
      { title: "Project Planning & Coordination", description: "Structuring construction works around clear sequencing and site coordination." },
      { title: "Structural & Building Works", description: "Carrying out core structural and building works with disciplined execution." },
      { title: "Site Supervision & Quality Control", description: "Maintaining oversight and quality throughout the construction process." },
      { title: "End-to-End Project Involvement", description: "Supporting projects from early stages through to completion." },
    ],
    businessSpecific: {
      heading: "From Planning to Completion.",
      description:
        "DPJ Construction supports projects across their lifecycle, from early planning and coordination through structural works to final completion, with an emphasis on quality and disciplined execution.",
    },
    highlights: [],
    approach: APPROACH_STEPS.construction,
  },
  piling: {
    slug: "piling",
    name: "Piling",
    eyebrow: "DPJ PILING",
    heroTitle: "Strength Starts Below.",
    heroDescription:
      "Specialized piling solutions engineered to create stable foundations for demanding projects.",
    introduction: {
      eyebrow: "About Piling",
      heading: "Engineering Confidence From the Ground Up.",
      description:
        "DPJ Piling contributes specialized foundation capability within DPJ Group, supporting projects that require stable ground conditions and technically considered foundation solutions.",
    },
    capabilities: [
      { title: "Ground Condition Assessment", description: "Considering site and ground conditions as part of foundation planning." },
      { title: "Foundation Engineering Support", description: "Supporting foundation requirements for a range of structural needs." },
      { title: "Piling Operations", description: "Carrying out piling works with technical care and supervision." },
      { title: "Structural Stability Focus", description: "Working toward foundations that support long-term structural stability." },
    ],
    businessSpecific: {
      heading: "The Foundation Behind Every Structure.",
      description:
        "DPJ Piling focuses on the foundation stage of construction, where technical precision and an understanding of ground conditions support the stability of everything built above.",
    },
    highlights: [],
    approach: APPROACH_STEPS.piling,
  },
  transport: {
    slug: "transport",
    name: "Transport",
    eyebrow: "DPJ TRANSPORT",
    heroTitle: "Moving What Matters.",
    heroDescription:
      "Reliable transport capabilities supporting projects, materials and operations across the group.",
    introduction: {
      eyebrow: "About Transport",
      heading: "The Movement Behind Progress.",
      description:
        "DPJ Transport supports DPJ Group's wider operations by helping materials, equipment and resources move reliably between sites and projects.",
    },
    capabilities: [
      { title: "Project Logistics Support", description: "Coordinating movement of materials and equipment for active projects." },
      { title: "Operational Reliability", description: "Supporting consistent, dependable transport for ongoing operations." },
      { title: "Site Coordination", description: "Working alongside project teams to align transport with site needs." },
      { title: "Delivery Efficiency", description: "Focusing on efficient movement that supports project timelines." },
    ],
    businessSpecific: {
      heading: "Keeping Projects Moving.",
      description:
        "DPJ Transport plays a supporting role across the group, helping ensure that materials, equipment and resources reach the right place at the right time.",
    },
    highlights: [],
    approach: APPROACH_STEPS.transport,
  },
  steel: {
    slug: "steel",
    name: "Steel",
    eyebrow: "DPJ STEEL",
    heroTitle: "Built From Strength.",
    heroDescription:
      "Steel capabilities supporting durable structures, demanding applications and dependable project delivery.",
    introduction: {
      eyebrow: "About Steel",
      heading: "Strength Engineered for Performance.",
      description:
        "DPJ Steel contributes structural steel capability within DPJ Group, supporting projects that call for durable, dependable steel-related solutions.",
    },
    capabilities: [
      { title: "Structural Steel Support", description: "Supporting structural requirements that rely on steel-based solutions." },
      { title: "Precision-Focused Execution", description: "Approaching steel-related works with attention to precision." },
      { title: "Project Coordination", description: "Aligning steel-related works with the wider project programme." },
      { title: "Durability Focus", description: "Working toward outcomes built for long-term structural performance." },
    ],
    businessSpecific: {
      heading: "Precision in Every Structure.",
      description:
        "DPJ Steel supports the structural needs of projects across the group, contributing capability suited to demanding applications that depend on strength and precision.",
    },
    highlights: [],
    approach: APPROACH_STEPS.steel,
  },
};

