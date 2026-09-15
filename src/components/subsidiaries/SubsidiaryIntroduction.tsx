"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";
import type { SubsidiaryDetail } from "@/types";

export function SubsidiaryIntroduction({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            {subsidiary.introduction.eyebrow}
          </span>

          <div>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-black">
              {subsidiary.introduction.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              {subsidiary.introduction.description}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export function SubsidiaryFocus({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  return (
    <section className="bg-black py-[30px] text-[#F8F9FA]">
      <Container className="grid grid-cols-1 gap-12 border-t border-white/10 pt-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/50">
          How {subsidiary.name} Works
        </span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            {subsidiary.businessSpecific.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F8F9FA]/70 md:text-lg">
            {subsidiary.businessSpecific.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
