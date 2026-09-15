"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
          <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-black">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-black/70 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
