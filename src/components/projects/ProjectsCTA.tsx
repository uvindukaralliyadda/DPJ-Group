"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export function ProjectsCTA() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="border border-black/10 p-10 text-center md:p-20"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
            Start a Conversation
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-black">
            Have a Project in Mind?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
            Let&apos;s discuss how DPJ Group can support your next project.
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact" variant="primary">
              Send an Enquiry
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
