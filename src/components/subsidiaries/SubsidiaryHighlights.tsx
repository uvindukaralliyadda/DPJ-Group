"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE } from "@/data/site";
import type { SubsidiaryDetail } from "@/types";

export function SubsidiaryHighlights({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  return (
    <section className="bg-black py-[30px] text-[#F8F9FA]">
      <Container className="border-t border-white/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/50">
          At a Glance
        </span>

        {subsidiary.highlights.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.1)}
            className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {subsidiary.highlights.map((highlight) => (
              <motion.div key={highlight.label} variants={fadeUp}>
                <span className="block text-3xl font-semibold text-[#FFEB3B] md:text-4xl">
                  {highlight.value}
                </span>
                <span className="mt-2 block text-xs uppercase tracking-[0.15em] text-[#F8F9FA]/60">
                  {highlight.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="mt-8"
          >
            <h2 className="max-w-2xl text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight">
              Built on {SITE.yearsOfExperience} Years of Experience
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#F8F9FA]/70">
              {subsidiary.name} operates as part of DPJ Group, drawing on {SITE.generations}{" "}
              generations of leadership across {SITE.divisions} business divisions.
            </p>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
