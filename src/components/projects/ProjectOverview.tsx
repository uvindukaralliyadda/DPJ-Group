"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CATEGORY_LABELS } from "@/lib/projects";
import { fadeUp } from "@/lib/animations";
import type { Project } from "@/types";

const metaOrder: { key: keyof Project; label: string }[] = [
  { key: "category", label: "Business Area" },
  { key: "location", label: "Location" },
  { key: "client", label: "Client" },
  { key: "year", label: "Year" },
  { key: "status", label: "Status" },
];

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24"
        >
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            Project Overview
          </h2>

          <div>
            <p className="max-w-2xl text-base leading-relaxed text-black/80 md:text-lg">
              {project.description}
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-black/10 pt-8 sm:grid-cols-3">
              {metaOrder
                .filter(({ key }) => Boolean(project[key]))
                .map(({ key, label }) => (
                  <div key={key}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
                      {label}
                    </dt>
                    <dd className="mt-1 text-base font-medium text-black">
                      {key === "category"
                        ? CATEGORY_LABELS[project.category]
                        : project[key]}
                    </dd>
                  </div>
                ))}
            </dl>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
