"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";
import { VISION_STATEMENT } from "@/data/about";

export function VisionSection() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr]"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            Our Vision
          </span>
          <p className="max-w-2xl text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium leading-relaxed text-black">
            {VISION_STATEMENT}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
