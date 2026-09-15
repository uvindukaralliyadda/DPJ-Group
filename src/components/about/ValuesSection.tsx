"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { VALUES } from "@/data/about";
import { cn } from "@/lib/utils";

export function ValuesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container className="border-t border-black/10 pt-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
          Our Values
        </span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.06)}
          className="mt-10 flex flex-col"
        >
          {VALUES.map((value, index) => {
            const isActive = active === index;
            return (
              <motion.button
                key={value.id}
                type="button"
                variants={fadeUp}
                aria-expanded={isActive}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "group flex items-baseline gap-6 border-b border-black/10 py-6 text-left transition-colors duration-300",
                  isActive ? "text-black" : "text-black/40"
                )}
              >
                <span
                  className={cn(
                    "text-lg font-semibold transition-colors duration-300",
                    isActive ? "text-[#FFEB3B]" : "text-black/20"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-xl font-semibold md:text-2xl">
                    {value.title}
                  </span>
                  <motion.span
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="block overflow-hidden text-sm leading-relaxed text-black/60"
                  >
                    <span className="block pt-2">{value.description}</span>
                  </motion.span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
