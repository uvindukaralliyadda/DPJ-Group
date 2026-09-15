"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const placeholderProjects = [
  { id: 1, category: "Construction", size: "lg" },
  { id: 2, category: "Piling", size: "sm" },
  { id: 3, category: "Transport", size: "sm" },
  { id: 4, category: "Steel", size: "md" },
];

function ProjectCard({
  category,
  size,
}: {
  category: string;
  size: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden bg-black",
        size === "lg" && "md:col-span-2 md:row-span-2 h-130",
        size === "md" && "md:col-span-2 h-95",
        size === "sm" && "h-95"
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)] transition-transform duration-700 ease-out group-hover:scale-105" />
      <span className="absolute right-6 top-6 z-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
        Image Placeholder
      </span>

      <div className="relative z-10 flex items-end justify-between p-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFEB3B]">
            {category}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-[#F8F9FA]">
            Project Name Placeholder
          </h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-[#F8F9FA]/50">
            Location Placeholder
          </p>
        </div>
        <ArrowUpRight
          size={22}
          className="shrink-0 text-[#F8F9FA] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our Work" title="Work That Speaks for Itself." />
          <ButtonLink href="/projects" variant="secondary" className="shrink-0">
            View All Projects
          </ButtonLink>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-6 md:grid-cols-4"
        >
          {placeholderProjects.map((project) => (
            <ProjectCard key={project.id} category={project.category} size={project.size} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
