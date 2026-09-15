"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SITE } from "@/data/site";

const stats = [
  { value: `${SITE.generations}`, label: "Generations" },
  { value: `${SITE.divisions}`, label: "Business Divisions" },
  { value: SITE.yearsOfExperience, label: "Years" },
];

export function LegacySection() {
  return (
    <section className="relative z-10 bg-[#F8F9FA] py-[30px] pb-24 md:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our Legacy"
            title="Five Decades. Three Generations. One Legacy."
            description="DPJ Group has grown across five decades and continues to operate under third-generation leadership, carrying forward a legacy of engineering and operational capability."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <div className="flex items-end gap-4 border-b border-black/10 pb-8">
              <span className="text-[clamp(4rem,10vw,8rem)] font-semibold leading-none tracking-tight text-black">
                {SITE.yearsOfExperience}
              </span>
              <span className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
                Years of
                <br />
                Experience
              </span>
            </div>

            <motion.div
              variants={staggerContainer(0.1)}
              className="mt-8 grid grid-cols-3 gap-6"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <span className="block text-3xl font-semibold text-black">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-black/60">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <ButtonLink href="/about" variant="secondary" className="mt-10">
              Discover Our Story
            </ButtonLink>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
