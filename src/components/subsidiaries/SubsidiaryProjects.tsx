import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getProjectsByCategory } from "@/lib/projects";
import type { SubsidiaryDetail } from "@/types";

export function SubsidiaryProjects({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  const projects = getProjectsByCategory(subsidiary.slug).slice(0, 4);

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            Selected Projects
          </span>
          <ButtonLink href="/projects" variant="secondary" className="shrink-0">
            View All Projects
          </ButtonLink>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="border border-dashed border-black/15 p-10 text-center text-sm text-black/50">
            Project case studies for {subsidiary.name} will be added here soon.
          </p>
        )}
      </Container>
    </section>
  );
}
