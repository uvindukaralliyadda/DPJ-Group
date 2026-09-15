"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SUBSIDIARIES } from "@/data/subsidiaries";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface GroupBusinessesProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function GroupBusinesses({ eyebrow, title, description }: GroupBusinessesProps) {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 gap-px bg-black/10 md:grid-cols-2 lg:grid-cols-4"
        >
          {SUBSIDIARIES.map((subsidiary) => (
            <motion.div key={subsidiary.key} variants={fadeUp}>
              <Link
                href={subsidiary.href}
                className="group relative flex h-95 flex-col justify-end overflow-hidden bg-black p-8"
              >
                <div className="absolute inset-0 bg-[linear-gradient(160deg,#242424_0%,#000000_70%)] transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <span className="mb-3 block h-0.5 w-8 bg-[#FFEB3B] transition-all duration-300 group-hover:w-14" />
                  <h3 className="text-2xl font-semibold text-[#F8F9FA]">
                    {subsidiary.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F8F9FA]/70">
                    {subsidiary.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8F9FA]">
                    Explore
                    <ArrowUpRight
                      size={16}
                      className="text-[#FFEB3B] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
