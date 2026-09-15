"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/data/site";
import { fadeUp } from "@/lib/animations";

const mapQuery = encodeURIComponent(CONTACT.address.address);
const embedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

export function ContactMap() {
  return (
    <motion.div
      id="map"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
        <span className="h-1.5 w-1.5 bg-[#FFEB3B]" />
        Our Head Office
      </span>
      <p className="text-lg font-medium text-black">{CONTACT.address.name}</p>
      <p className="mt-1 text-sm text-black/60">{CONTACT.address.plusCode}</p>

      <div className="mt-6 aspect-4/3 w-full overflow-hidden border border-black/10 grayscale transition-all duration-500 hover:grayscale-0 sm:aspect-16/10">
        <iframe
          title="DPJ Tower - Dematagoda location"
          src={embedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      <a
        href={directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center gap-2 bg-black px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-[#F8F9FA] transition-colors duration-300 hover:bg-[#FFEB3B] hover:text-black"
      >
        Get Directions
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </motion.div>
  );
}
