"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

interface AboutCTAAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface AboutCTAProps {
  heading: string;
  actions: AboutCTAAction[];
}

export function AboutCTA({ heading, actions }: AboutCTAProps) {
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
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.1] tracking-tight text-black">
            {heading}
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {actions.map((action) => (
              <ButtonLink
                key={action.href}
                href={action.href}
                variant={action.variant ?? "primary"}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
