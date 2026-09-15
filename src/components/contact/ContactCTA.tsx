"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";

export function ContactCTA() {
  function scrollToForm() {
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-black/70 md:text-lg">
            Let&apos;s start a conversation about how DPJ Group can support
            your next project or business requirement.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={scrollToForm}
              className="group inline-flex items-center gap-2 bg-black px-8 py-4 text-sm font-medium uppercase tracking-wide text-[#F8F9FA] transition-colors duration-300 hover:bg-[#FFEB3B] hover:text-black"
            >
              Send an Enquiry
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
