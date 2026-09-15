"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CATEGORY_LABELS } from "@/lib/projects";
import { fadeUp } from "@/lib/animations";
import type { Project } from "@/types";

const metaOrder: {
  key: "location" | "year" | "client" | "status";
  label: string;
}[] = [
  { key: "location", label: "Location" },
  { key: "year", label: "Year" },
  { key: "client", label: "Client" },
  { key: "status", label: "Status" },
];

export function ProjectHero({ project }: { project: Project }) {
  const meta = metaOrder.filter(({ key }) => Boolean(project[key]));

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

      <span className="absolute right-6 top-24 z-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
        Image Placeholder
      </span>

      <Container className="relative z-10 pb-24 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFEB3B]">
            <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
            {CATEGORY_LABELS[project.category]}
          </span>

          <h1 className="max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            {project.title}
          </h1>

          {meta.length > 0 && (
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {meta.map(({ key, label }) => (
                <div key={key}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F8F9FA]/50">
                    {label}
                  </dt>

                  <dd className="mt-1 text-base font-medium text-[#F8F9FA]">
                    {project[key]}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </motion.div>
      </Container>
    </section>
  );
}