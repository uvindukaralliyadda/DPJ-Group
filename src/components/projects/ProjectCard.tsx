"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_LABELS } from "@/lib/projects";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(featured && "md:col-span-2 md:row-span-2")}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group relative flex flex-col justify-end overflow-hidden bg-black",
          featured ? "h-130" : "h-95"
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)] transition-transform duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
        <span className="absolute right-6 top-6 z-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
          Image Placeholder
        </span>

        <div className="relative z-10 flex items-end justify-between gap-4 p-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFEB3B]">
              {CATEGORY_LABELS[project.category]}
            </span>
            <h3
              className={cn(
                "mt-2 font-semibold text-[#F8F9FA]",
                featured ? "text-2xl md:text-3xl" : "text-xl"
              )}
            >
              {project.title}
            </h3>
            {project.location && (
              <p className="mt-1 text-xs uppercase tracking-widest text-[#F8F9FA]/50">
                {project.location}
              </p>
            )}
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#F8F9FA]/70">
              {project.shortDescription}
            </p>
          </div>
          <ArrowUpRight
            size={22}
            className="shrink-0 text-[#F8F9FA] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </Link>
    </motion.div>
  );
}
