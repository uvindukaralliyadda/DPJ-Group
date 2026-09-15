"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { SubsidiaryDetail } from "@/types";

export function SubsidiaryApproach({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
          How We Work
        </span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {subsidiary.approach.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp}>
              <span className="text-2xl font-semibold text-black/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
