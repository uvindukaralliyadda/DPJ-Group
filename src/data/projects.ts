import type { Project } from "@/types";

// DEMO DATA - REPLACE WITH ACTUAL DPJ PROJECT DATA
export const PROJECTS: Project[] = [
  {
    slug: "riverside-commercial-complex",
    title: "Riverside Commercial Complex",
    category: "construction",
    location: "Colombo, Sri Lanka",
    year: "2023",
    client: "Sample Client Pte Ltd",
    status: "Completed",
    featured: true,
    shortDescription:
      "A multi-storey commercial development built for long-term operational performance.",
    description:
      "This sample project illustrates the scale and coordination involved in DPJ Group's construction capability, from site mobilisation through to structural completion. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/riverside-commercial-complex.jpg",
    gallery: [
      { src: "/images/placeholders/projects/gallery-1.jpg", alt: "Project gallery placeholder 1" },
      { src: "/images/placeholders/projects/gallery-2.jpg", alt: "Project gallery placeholder 2" },
      { src: "/images/placeholders/projects/gallery-3.jpg", alt: "Project gallery placeholder 3" },
    ],
    scope: [
      "Site Preparation",
      "Foundation Works",
      "Structural Works",
      "Building Envelope",
    ],
    specifications: [
      { label: "Business Area", value: "Construction" },
      { label: "Structure Type", value: "Reinforced Concrete Frame" },
    ],
  },
  {
    slug: "coastal-highway-piling-works",
    title: "Coastal Highway Piling Works",
    category: "piling",
    location: "Galle, Sri Lanka",
    year: "2023",
    client: "Sample Infrastructure Authority",
    status: "Completed",
    featured: true,
    shortDescription:
      "Specialised piling works supporting a major coastal infrastructure corridor.",
    description:
      "A sample case study demonstrating DPJ Group's piling capability on infrastructure-scale works. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/coastal-highway-piling-works.jpg",
    gallery: [
      { src: "/images/placeholders/projects/gallery-4.jpg", alt: "Project gallery placeholder 4" },
      { src: "/images/placeholders/projects/gallery-5.jpg", alt: "Project gallery placeholder 5" },
    ],
    scope: ["Ground Investigation", "Pile Driving", "Load Testing"],
    specifications: [{ label: "Business Area", value: "Piling" }],
  },
  {
    slug: "regional-logistics-fleet-expansion",
    title: "Regional Logistics Fleet Expansion",
    category: "transport",
    location: "Western Province, Sri Lanka",
    year: "2022",
    status: "Completed",
    shortDescription:
      "Fleet and logistics support enabling regional material movement across active project sites.",
    description:
      "A sample case study representing DPJ Group's transport capability supporting group-wide operations. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/regional-logistics-fleet-expansion.jpg",
    scope: ["Fleet Planning", "Route Logistics", "Site Coordination"],
  },
  {
    slug: "industrial-steel-frame-facility",
    title: "Industrial Steel Frame Facility",
    category: "steel",
    location: "Gampaha, Sri Lanka",
    year: "2022",
    client: "Sample Industrial Client",
    status: "Completed",
    featured: true,
    shortDescription:
      "Structural steel fabrication and erection for an industrial-scale facility.",
    description:
      "A sample case study illustrating DPJ Group's steel capability across fabrication and erection. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/industrial-steel-frame-facility.jpg",
    gallery: [
      { src: "/images/placeholders/projects/gallery-6.jpg", alt: "Project gallery placeholder 6" },
      { src: "/images/placeholders/projects/gallery-7.jpg", alt: "Project gallery placeholder 7" },
      { src: "/images/placeholders/projects/gallery-8.jpg", alt: "Project gallery placeholder 8" },
    ],
    scope: ["Structural Design Coordination", "Fabrication", "Erection"],
    specifications: [
      { label: "Business Area", value: "Steel" },
      { label: "Structure Type", value: "Structural Steel Frame" },
    ],
  },
  {
    slug: "urban-residential-development",
    title: "Urban Residential Development",
    category: "construction",
    location: "Colombo, Sri Lanka",
    year: "2021",
    status: "Completed",
    shortDescription:
      "A residential development built to support long-term community living.",
    description:
      "A sample case study representing DPJ Group's residential construction capability. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/urban-residential-development.jpg",
    scope: ["Site Preparation", "Structural Works", "Finishing Works"],
  },
  {
    slug: "port-access-road-foundations",
    title: "Port Access Road Foundations",
    category: "piling",
    location: "Colombo, Sri Lanka",
    year: "2021",
    status: "Completed",
    shortDescription:
      "Foundation and piling works supporting critical port access infrastructure.",
    description:
      "A sample case study representing DPJ Group's piling capability on port-related infrastructure. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/port-access-road-foundations.jpg",
    scope: ["Ground Investigation", "Pile Driving"],
  },
  {
    slug: "heavy-equipment-transport-programme",
    title: "Heavy Equipment Transport Programme",
    category: "transport",
    location: "Island-wide, Sri Lanka",
    year: "2020",
    status: "Completed",
    shortDescription:
      "Ongoing transport support for heavy equipment movement across group projects.",
    description:
      "A sample case study representing DPJ Group's transport capability for heavy equipment logistics. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/heavy-equipment-transport-programme.jpg",
  },
  {
    slug: "manufacturing-plant-steelworks",
    title: "Manufacturing Plant Steelworks",
    category: "steel",
    location: "Kurunegala, Sri Lanka",
    year: "2020",
    status: "Ongoing",
    shortDescription:
      "Structural steelworks supporting a new manufacturing facility currently in progress.",
    description:
      "A sample case study representing DPJ Group's steel capability for an in-progress industrial facility. Replace this description with verified details of an actual DPJ Group project.",
    heroImage: "/images/placeholders/projects/manufacturing-plant-steelworks.jpg",
    scope: ["Fabrication", "Erection"],
  },
];
