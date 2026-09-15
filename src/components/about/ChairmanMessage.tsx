"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";
import { CHAIRMAN_MESSAGE } from "@/data/about";

export function ChairmanMessage() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="relative flex h-105 items-center justify-center overflow-hidden bg-black lg:sticky lg:top-24">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)]" />
            <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Image Placeholder
            </span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              A Message From the Chairman
            </span>
            <p className="mt-8 text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-relaxed text-black">
              &ldquo;{CHAIRMAN_MESSAGE.message}&rdquo;
            </p>

            <div className="mt-10 border-t border-black/10 pt-6">
              <span className="block text-base font-semibold text-black">
                {CHAIRMAN_MESSAGE.name}
              </span>
              <span className="block text-sm text-black/60">
                {CHAIRMAN_MESSAGE.position}
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
