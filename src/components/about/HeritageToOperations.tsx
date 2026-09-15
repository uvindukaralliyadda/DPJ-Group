"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";
import { SITE } from "@/data/site";

export function HeritageToOperations() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          <div className="relative flex h-64 items-center justify-center overflow-hidden bg-black">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Image Placeholder
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 text-center">
            <span className="text-3xl font-semibold text-black">
              {SITE.yearsOfExperience}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-black/50">
              Experience &rarr; Evolution &rarr; Future
            </span>
          </div>
          <div className="relative flex h-64 items-center justify-center overflow-hidden bg-black">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Image Placeholder
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
