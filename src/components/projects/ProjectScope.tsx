"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Project } from "@/types";

export function ProjectScope({ project }: { project: Project }) {
  if (!project.scope || project.scope.length === 0) return null;

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-black">
          Our Scope
        </h2>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2"
        >
          {project.scope.map((item, index) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-baseline gap-6 border-b border-black/10 pb-6"
            >
              <span className="text-2xl font-semibold text-black/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-medium text-black">{item}</span>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
