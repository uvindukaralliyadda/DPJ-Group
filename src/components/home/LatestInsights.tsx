"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const articles = [
  { category: "News" },
  { category: "Insights" },
  { category: "CSR" },
];

export function LatestInsights() {
  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Insights" title="Latest from DPJ" />
          <ButtonLink href="/insights" variant="secondary" className="shrink-0">
            View All Insights
          </ButtonLink>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href="/insights"
              variants={fadeUp}
              className="group block"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)] transition-transform duration-700 ease-out group-hover:scale-105" />
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Image Placeholder
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
                <span className="text-[#FFEB3B]">{article.category}</span>
                <span>&middot;</span>
                <span>Date Placeholder</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-black">
                Article Title Placeholder
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-black">
                Read Article
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
