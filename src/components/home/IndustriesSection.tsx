"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

const industryPlaceholders = Array.from({ length: 6 }, (_, index) => index + 1);

export function IndustriesSection() {
  return (
    <section className="bg-black py-[30px]">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Built Across Industries"
          description="Our subsidiaries collectively support diverse construction and infrastructure requirements across a range of industries."
          className="mb-16 [&_h2]:text-[#F8F9FA] [&_p]:text-[#F8F9FA]/70 [&_span]:text-[#F8F9FA]/60"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3 lg:grid-cols-6"
        >
          {industryPlaceholders.map((index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex aspect-square flex-col items-center justify-center gap-2 bg-black text-center"
            >
              <span className="text-2xl font-semibold text-[#F8F9FA]/20">
                {String(index).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-[#F8F9FA]/40">
                Industry
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
