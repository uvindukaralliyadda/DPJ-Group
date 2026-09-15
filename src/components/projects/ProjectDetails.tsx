"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Project } from "@/types";

export function ProjectDetails({ project }: { project: Project }) {
  if (!project.specifications || project.specifications.length === 0) return null;

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-black">
          Project Details
        </h2>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.06)}
          className="mt-10 divide-y divide-black/10 border-t border-black/10"
        >
          {project.specifications.map((spec) => (
            <motion.div
              key={spec.label}
              variants={fadeUp}
              className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
                {spec.label}
              </dt>
              <dd className="text-base text-black">{spec.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
