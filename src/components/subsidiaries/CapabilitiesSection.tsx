"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { SubsidiaryDetail } from "@/types";

export function CapabilitiesSection({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
          Our Capabilities
        </span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.08)}
          className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2"
        >
          {subsidiary.capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              variants={fadeUp}
              className="border-b border-black/10 pb-8"
            >
              <span className="text-2xl font-semibold text-black/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-black">
                {capability.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-black/70">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
