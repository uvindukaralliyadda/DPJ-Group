"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";

export function ContactHero() {
  return (
    <section className="bg-[#F8F9FA] pt-36 pb-[30px] md:pt-44">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
            Contact DPJ Group
          </span>
          <h1 className="text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-black">
            Let&apos;s Build What Comes Next.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
            Whether you&apos;re looking to discuss a project, explore a
            partnership, or connect with DPJ Group, we&apos;d be glad to hear
            from you.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
