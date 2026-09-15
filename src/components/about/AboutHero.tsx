"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import type { AboutHeroContent } from "@/types";

interface AboutHeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface AboutHeroProps {
  content: AboutHeroContent;
  actions?: AboutHeroAction[];
}

export function AboutHero({ content, actions }: AboutHeroProps) {
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
            {content.eyebrow}
          </span>
          <h1 className="max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F8F9FA]/75 md:text-lg">
            {content.description}
          </p>

          {actions && actions.length > 0 && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {actions.map((action) => (
                <ButtonLink
                  key={action.href}
                  href={action.href}
                  variant={action.variant ?? "primary"}
                  className={
                    (action.variant ?? "primary") === "secondary"
                      ? "border-white/40! text-[#F8F9FA]! hover:bg-[#F8F9FA]! hover:text-black!"
                      : undefined
                  }
                >
                  {action.label}
                </ButtonLink>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
