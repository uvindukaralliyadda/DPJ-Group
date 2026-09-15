"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Project } from "@/types";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60"
        >
          More From DPJ Group
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
