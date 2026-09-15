"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { staggerContainer } from "@/lib/animations";
import type { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const reducedMotion = useReducedMotion();

  if (projects.length === 0) {
    return (
      <p className="py-24 text-center text-sm text-black/50">
        No projects match your filters right now.
      </p>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={reducedMotion ? undefined : staggerContainer(0.08)}
      className="grid grid-cols-1 gap-6 md:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} featured={project.featured} />
      ))}
    </motion.div>
  );
}
