"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE } from "@/data/site";

const stats = [
  { value: `${SITE.generations}`, label: "Generations" },
  { value: `${SITE.divisions}`, label: "Business Divisions" },
  { value: SITE.yearsOfExperience, label: "Years" },
];

export function StorySection() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our Heritage"
            title="Built Across Generations."
            description="DPJ Group has grown across five decades and continues to operate under third-generation leadership, carrying forward a legacy across construction, piling, transport and steel."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-3 gap-6 border-t border-black/10 pt-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <span className="block text-4xl font-semibold text-black md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-black/60">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
