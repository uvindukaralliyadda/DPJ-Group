"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

export function FinalCTA() {
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
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-black">
            Let&apos;s Build What Comes Next.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
            Talk to DPJ Group about your next project, partnership or business
            requirement.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Contact DPJ Group
            </ButtonLink>
            <ButtonLink href="/subsidiaries" variant="secondary">
              Explore Our Capabilities
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
