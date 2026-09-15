"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { DirectorProfileModal } from "./DirectorProfileModal";
import type { DirectorProfile } from "@/types";

export function DirectorGrid({ directors }: { directors: DirectorProfile[] }) {
  const [selected, setSelected] = useState<DirectorProfile | null>(null);

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {directors.map((director) => (
            <motion.button
              key={director.id}
              type="button"
              variants={fadeUp}
              onClick={() => setSelected(director)}
              className="group text-left"
            >
              <div className="flex h-72 items-center justify-center overflow-hidden bg-black transition-transform duration-500 group-hover:scale-[1.02]">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Image Placeholder
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-black">{director.name}</h3>
              <p className="mt-1 text-sm text-black/60">{director.position}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/50 transition-colors duration-200 group-hover:text-black">
                View Profile
              </span>
            </motion.button>
          ))}
        </motion.div>
      </Container>

      <DirectorProfileModal director={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
