"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { LEADERSHIP_PRINCIPLES } from "@/data/about";

export function LeadershipPhilosophy() {
  return (
    <section className="bg-black py-[30px] text-[#F8F9FA]">
      <Container className="border-t border-white/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/50">
          Leadership Philosophy
        </span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LEADERSHIP_PRINCIPLES.map((principle) => (
            <motion.div key={principle.id} variants={fadeUp}>
              <span className="block h-0.5 w-8 bg-[#FFEB3B]" />
              <h3 className="mt-4 text-lg font-semibold text-[#F8F9FA]">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#F8F9FA]/70">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
