export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export type SubsidiaryKey = "construction" | "piling" | "transport" | "steel";

export interface Subsidiary {
  key: SubsidiaryKey;
  name: string;
  description: string;
  href: string;
  image: string;
}

export interface SubsidiaryCapability {
  title: string;
  description: string;
}

export interface SubsidiaryApproachStep {
  title: string;
  description: string;
}

export interface SubsidiaryHighlight {
  label: string;
  value: string;
}

export interface SubsidiaryDetail {
  slug: SubsidiaryKey;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  introduction: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  capabilities: SubsidiaryCapability[];
  businessSpecific: {
    heading: string;
    description: string;
  };
  /** Only verified, group-level statistics belong here — leave empty rather than inventing numbers. */
  highlights: SubsidiaryHighlight[];
  approach: SubsidiaryApproachStep[];
}


export interface ContactFormValues {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: string;
  businessArea: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ProjectStatus = "Completed" | "Ongoing" | "Upcoming";

export interface ProjectSpecification {
  label: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: SubsidiaryKey;
  location?: string;
  year?: string;
  client?: string;
  status?: ProjectStatus;
  shortDescription: string;
  description: string;
  heroImage: string;
  gallery?: GalleryImage[];
  scope?: string[];
  specifications?: ProjectSpecification[];
  featured?: boolean;
}

export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  businessArea: SubsidiaryKey | "Group";
  location: string;
  employmentType: string;
  postedDate: string;
  description: string;
  requirements: string[];
  applicationEmail?: string;
}

export interface AboutHeroContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface TimelineMilestone {
  key: string;
  label: string;
  title: string;
  description: string;
}

export interface DirectorProfile {
  id: string;
  name: string;
  position: string;
  bio: string;
  responsibilities: string[];
  linkedin?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export type InsightCategory = "blog" | "news-csr";

export interface InsightPost {
  id: string;
  slug: string;
  headline: string;
  date: string;
  image: string;
  description: string;
  content: string[];
}


