"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProjectFilters, type ProjectCategoryFilter } from "./ProjectFilters";
import { ProjectGrid } from "./ProjectGrid";
import { CATEGORY_LABELS } from "@/lib/projects";
import type { Project } from "@/types";

const CATEGORIES: { key: ProjectCategoryFilter; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "construction", label: CATEGORY_LABELS.construction },
  { key: "piling", label: CATEGORY_LABELS.piling },
  { key: "transport", label: CATEGORY_LABELS.transport },
  { key: "steel", label: CATEGORY_LABELS.steel },
];

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategoryFilter>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = category === "all" || project.category === category;
      const matchesQuery =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        (project.location?.toLowerCase().includes(query) ?? false);

      return matchesCategory && matchesQuery;
    });
  }, [projects, category, search]);

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <ProjectFilters
          categories={CATEGORIES}
          active={category}
          onSelect={setCategory}
          search={search}
          onSearchChange={setSearch}
        />
        <div className="mt-12">
          <ProjectGrid projects={filtered} />
        </div>
      </Container>
    </section>
  );
}
