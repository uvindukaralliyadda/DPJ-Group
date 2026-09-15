import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectOverview } from "@/components/projects/ProjectOverview";
import { ProjectScope } from "@/components/projects/ProjectScope";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { ProjectsCTA } from "@/components/projects/ProjectsCTA";
import {
  getAdjacentProjects,
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found | DPJ Group of Companies" };
  }

  return {
    title: `${project.title} | DPJ Group of Companies`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | DPJ Group of Companies`,
      description: project.shortDescription,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);
  const relatedProjects = getRelatedProjects(project);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectScope project={project} />
      <ProjectDetails project={project} />
      <ProjectGallery gallery={project.gallery} />
      <ProjectNavigation previous={previous} next={next} />
      <RelatedProjects projects={relatedProjects} />
      <ProjectsCTA />
    </>
  );
}
