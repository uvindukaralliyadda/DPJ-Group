import { PROJECTS } from "@/data/projects";
import type { Project, SubsidiaryKey } from "@/types";

export const CATEGORY_LABELS: Record<SubsidiaryKey, string> = {
  construction: "Construction",
  piling: "Piling",
  transport: "Transport",
  steel: "Steel",
};

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}

export function getProjectsByCategory(category: SubsidiaryKey | "all"): Project[] {
  if (category === "all") return PROJECTS;
  return PROJECTS.filter((project) => project.category === category);
}

/** Returns the previous/next project based on data order, wrapping at the edges gracefully (undefined, not wrapped). */
export function getAdjacentProjects(slug: string) {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: index > 0 ? PROJECTS[index - 1] : undefined,
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : undefined,
  };
}

/** Prioritises same-category projects, falling back to any other project to fill up to `limit`. */
export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const sameCategory = PROJECTS.filter(
    (candidate) => candidate.slug !== project.slug && candidate.category === project.category
  );
  const others = PROJECTS.filter(
    (candidate) =>
      candidate.slug !== project.slug && candidate.category !== project.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}
