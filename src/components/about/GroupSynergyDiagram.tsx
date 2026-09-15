"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SUBSIDIARIES } from "@/data/subsidiaries";

export function GroupSynergyDiagram() {
  return (
    <section className="bg-black py-[30px] text-[#F8F9FA]">
      <Container className="border-t border-white/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/50">
          Group Structure
        </span>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight">
          Four Businesses, One Group.
        </h2>

        <div className="mt-16 flex flex-col items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="border border-white/20 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
          >
            DPJ Group
          </motion.div>

          <div className="h-10 w-px bg-white/20" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.1)}
            className="grid w-full grid-cols-2 gap-6 md:grid-cols-4"
          >
            {SUBSIDIARIES.map((subsidiary) => (
              <motion.div
                key={subsidiary.key}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <div className="h-6 w-px bg-white/20" />
                <div className="w-full border border-white/10 px-4 py-6 text-center transition-colors duration-300 hover:border-[#FFEB3B]">
                  <span className="text-sm font-medium">{subsidiary.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
