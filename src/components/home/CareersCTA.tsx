"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export function CareersCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-[30px] text-[#F8F9FA]">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#1a1a1a_0%,#000000_70%)]" />
      <span className="absolute right-6 top-6 z-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
        Image Placeholder
      </span>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F9FA]/60">
            <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
            Careers
          </span>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight">
            Build the Next Chapter With Us.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#F8F9FA]/70 md:text-lg">
            Join a group shaped by experience, driven by people, and focused on
            building what comes next.
          </p>
          <ButtonLink
            href="/careers"
            variant="primary"
            className="mt-10 bg-[#FFEB3B]! text-black! hover:bg-[#F8F9FA]!"
          >
            Explore Careers
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}
