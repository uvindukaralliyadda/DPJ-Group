import type {
  AboutHeroContent,
  DirectorProfile,
  TimelineMilestone,
  ValueItem,
} from "@/types";

// CONTENT PLACEHOLDER - REPLACE WITH VERIFIED DPJ INFORMATION
export const ABOUT_HEROES: Record<
  "story" | "chairman" | "board" | "visionMissionValues" | "groupOverview",
  AboutHeroContent
> = {
  story: {
    eyebrow: "Our Story & Legacy",
    title: "Five Decades. Three Generations. One Legacy.",
    description:
      "From one generation to the next, DPJ Group has continued to build, evolve and create lasting value through decades of change.",
  },
  chairman: {
    eyebrow: "Chairman's Message",
    title: "Leading With Purpose. Building For Tomorrow.",
    description:
      "A message from DPJ Group's leadership on the direction and outlook of the business.",
  },
  board: {
    eyebrow: "Board of Directors",
    title: "Leadership With Experience.",
    description:
      "Meet the leadership responsible for guiding DPJ Group into its next chapter.",
  },
  visionMissionValues: {
    eyebrow: "Our Vision, Mission & Values",
    title: "What Guides Us. What Drives Us.",
    description:
      "Our direction is shaped by a commitment to responsible growth, lasting relationships and work that creates value for generations.",
  },
  groupOverview: {
    eyebrow: "Group Overview",
    title: "One Group. Four Capabilities.",
    description:
      "DPJ Group brings together specialized businesses working across construction, piling, transport and steel.",
  },
};

// CONTENT PLACEHOLDER - REPLACE WITH VERIFIED DPJ INFORMATION
export const LEGACY_TIMELINE: TimelineMilestone[] = [
  {
    key: "then",
    label: "Then",
    title: "Where It Began",
    description:
      "TIMELINE MILESTONE - REPLACE WITH VERIFIED DPJ HISTORY. The foundations of DPJ Group's business activity were established, beginning a journey that would span five decades.",
  },
  {
    key: "evolution",
    label: "Evolution",
    title: "Growing Across Generations",
    description:
      "TIMELINE MILESTONE - REPLACE WITH VERIFIED DPJ HISTORY. Leadership passed across generations, and the group's activities expanded into new areas of capability.",
  },
  {
    key: "today",
    label: "Today",
    title: "Four Businesses, One Group",
    description:
      "TIMELINE MILESTONE - REPLACE WITH VERIFIED DPJ HISTORY. DPJ Group today operates across construction, piling, transport and steel under third-generation leadership.",
  },
];

// CONTENT PLACEHOLDER - REPLACE WITH APPROVED CONTENT
export const CHAIRMAN_MESSAGE = {
  name: "Chairman Name Placeholder",
  position: "Chairman, DPJ Group of Companies",
  message:
    "CHAIRMAN MESSAGE - REPLACE WITH APPROVED CONTENT. This space is reserved for a message from DPJ Group's Chairman, reflecting on the group's journey and its direction for the future.",
};

export const LEADERSHIP_PRINCIPLES: ValueItem[] = [
  { id: "long-term-thinking", title: "Long-Term Thinking", description: "Making decisions with lasting outcomes in mind, not only immediate results." },
  { id: "responsibility", title: "Responsibility", description: "Taking ownership of commitments made to clients, partners and people." },
  { id: "quality", title: "Quality", description: "Holding work to a standard that reflects the group's experience." },
  { id: "people", title: "People", description: "Recognising that the group's capability is built by the people within it." },
];

// DIRECTOR PROFILE - REPLACE WITH VERIFIED DPJ INFORMATION
export const BOARD_OF_DIRECTORS: DirectorProfile[] = [
  {
    id: "director-1",
    name: "Director Name Placeholder",
    position: "Position Placeholder",
    bio: "CONTENT PLACEHOLDER - REPLACE WITH VERIFIED DPJ INFORMATION.",
    responsibilities: ["Area of Responsibility Placeholder"],
  },
  {
    id: "director-2",
    name: "Director Name Placeholder",
    position: "Position Placeholder",
    bio: "CONTENT PLACEHOLDER - REPLACE WITH VERIFIED DPJ INFORMATION.",
    responsibilities: ["Area of Responsibility Placeholder"],
  },
  {
    id: "director-3",
    name: "Director Name Placeholder",
    position: "Position Placeholder",
    bio: "CONTENT PLACEHOLDER - REPLACE WITH VERIFIED DPJ INFORMATION.",
    responsibilities: ["Area of Responsibility Placeholder"],
  },
];

// VISION STATEMENT - REPLACE WITH APPROVED DPJ CONTENT
export const VISION_STATEMENT =
  "VISION STATEMENT - REPLACE WITH APPROVED DPJ CONTENT.";

// MISSION STATEMENT - REPLACE WITH APPROVED DPJ CONTENT
export const MISSION_STATEMENT =
  "MISSION STATEMENT - REPLACE WITH APPROVED DPJ CONTENT.";

// CONTENT PLACEHOLDER - suggested values only, not confirmed official DPJ values
export const VALUES: ValueItem[] = [
  { id: "integrity", title: "Integrity", description: "Operating honestly and consistently across every relationship and project." },
  { id: "quality", title: "Quality", description: "Holding work to a standard shaped by decades of experience." },
  { id: "responsibility", title: "Responsibility", description: "Taking ownership of commitments made to clients and partners." },
  { id: "innovation", title: "Innovation", description: "Adapting ways of working to meet changing project demands." },
  { id: "people", title: "People", description: "Valuing the people who carry the group's capability forward." },
  { id: "long-term-thinking", title: "Long-Term Thinking", description: "Making decisions built for lasting outcomes, not short-term gains." },
];
