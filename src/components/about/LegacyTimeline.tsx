"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { LEGACY_TIMELINE } from "@/data/about";

export function LegacyTimeline() {
  return (
    <section className="bg-black py-[30px] text-[#F8F9FA]">
      <Container className="border-t border-white/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/50">
          Our Timeline
        </span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.12)}
          className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {LEGACY_TIMELINE.map((milestone, index) => (
            <motion.div key={milestone.key} variants={fadeUp} className="relative">
              {index > 0 && (
                <span className="absolute -left-5 top-2 hidden text-[#FFEB3B]/40 md:block">
                  &rarr;
                </span>
              )}
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFEB3B]">
                {milestone.label}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-[#F8F9FA]">
                {milestone.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F8F9FA]/70">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
