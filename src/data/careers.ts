import type { JobPosting } from "@/types";

/** Leave empty until a verified DPJ recruitment email is confirmed — do not invent one. */
export const CAREERS_EMAIL = "";

// DEMO DATA - REPLACE WITH ACTUAL DPJ JOB POSTINGS
export const JOB_POSTINGS: JobPosting[] = [
  {
    id: "1",
    slug: "site-engineer-construction",
    title: "Site Engineer",
    department: "Construction",
    businessArea: "construction",
    location: "Colombo, Sri Lanka",
    employmentType: "Full-Time",
    postedDate: "2026-08-20",
    description:
      "Support the planning and execution of construction works on active project sites, coordinating with site teams to maintain quality and progress.",
    requirements: [
      "Degree or diploma in Civil Engineering or a related field",
      "Prior site experience in construction projects",
      "Strong coordination and communication skills",
    ],
  },
  {
    id: "2",
    slug: "piling-supervisor",
    title: "Piling Supervisor",
    department: "Piling",
    businessArea: "piling",
    location: "Colombo, Sri Lanka",
    employmentType: "Full-Time",
    postedDate: "2026-08-10",
    description:
      "Oversee day-to-day piling operations on site, ensuring works are carried out safely and in line with project requirements.",
    requirements: [
      "Experience supervising piling or foundation works",
      "Sound understanding of site safety practices",
      "Ability to coordinate with engineering teams",
    ],
  },
  {
    id: "3",
    slug: "logistics-coordinator-transport",
    title: "Logistics Coordinator",
    department: "Transport",
    businessArea: "transport",
    location: "Colombo, Sri Lanka",
    employmentType: "Full-Time",
    postedDate: "2026-07-28",
    description:
      "Coordinate transport and logistics support across group projects, helping ensure materials and equipment move efficiently between sites.",
    requirements: [
      "Experience in logistics or fleet coordination",
      "Strong organisational skills",
      "Ability to work across multiple active sites",
    ],
  },
];
