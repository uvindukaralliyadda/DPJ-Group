import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsBrowser } from "@/components/projects/ProjectsBrowser";
import { ProjectsCTA } from "@/components/projects/ProjectsCTA";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | DPJ Group of Companies",
  description:
    "Explore projects delivered across construction, piling, transport and steel by DPJ Group of Companies.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <ProjectsHero />
      <ProjectsBrowser projects={projects} />
      <ProjectsCTA />
    </>
  );
}
