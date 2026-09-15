"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SUBSIDIARIES } from "@/data/subsidiaries";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { SubsidiaryDetail } from "@/types";

export function GroupSynergy({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
          Part of a Larger Capability
        </span>
        <h2 className="mt-4 max-w-2xl text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-black">
          Four specialized businesses. One group working together.
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="mt-10 grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SUBSIDIARIES.map((item) => {
            const isCurrent = item.key === subsidiary.slug;
            return (
              <motion.div key={item.key} variants={fadeUp}>
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "group flex h-48 flex-col justify-between bg-black p-6 transition-colors duration-300",
                    isCurrent && "ring-2 ring-inset ring-[#FFEB3B]"
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.15em]",
                      isCurrent ? "text-[#FFEB3B]" : "text-[#F8F9FA]/50"
                    )}
                  >
                    {isCurrent ? "Currently Viewing" : "Explore"}
                  </span>
                  <span className="flex items-center justify-between text-lg font-semibold text-[#F8F9FA]">
                    {item.name}
                    <ArrowUpRight
                      size={18}
                      className="text-[#F8F9FA]/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
