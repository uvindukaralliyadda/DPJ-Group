"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { InsightPost } from "@/types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PostCard({ post, basePath }: { post: InsightPost; basePath: string }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`${basePath}/${post.slug}`} className="group block">
        <div className="relative h-64 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)] transition-transform duration-700 ease-out group-hover:scale-105" />
          <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
            Image Placeholder
          </span>
        </div>

        <div className="pt-5">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
            {formatDate(post.date)}
          </span>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-black">
            {post.headline}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-black/70">
            {post.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/60 transition-colors duration-200 group-hover:text-black">
            Read More
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
