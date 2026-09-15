"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/lib/animations";
import { PostCard } from "./PostCard";
import type { InsightPost } from "@/types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PostDetail({
  post,
  basePath,
  backLabel,
  relatedLabel,
  relatedPosts,
}: {
  post: InsightPost;
  basePath: string;
  backLabel: string;
  relatedLabel: string;
  relatedPosts: InsightPost[];
}) {
  return (
    <>
      <article className="bg-[#F8F9FA] pt-36 pb-[30px] md:pt-44">
        <Container className="max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              href={basePath}
              className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-black/60 transition-colors duration-200 hover:text-black"
            >
              <ArrowLeft size={14} />
              {backLabel}
            </Link>

            <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-black">
              {post.headline}
            </h1>
            <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
              {formatDate(post.date)}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mt-10 h-72 overflow-hidden bg-black md:h-105"
          >
            <div className="absolute inset-0 bg-[linear-gradient(160deg,#2a2a2a_0%,#000000_70%)]" />
            <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Image Placeholder
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-6"
          >
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-black/80 md:text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </Container>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-[#F8F9FA] py-[30px]">
          <Container className="border-t border-black/10 pt-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
              {relatedLabel}
            </span>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <PostCard key={related.id} post={related} basePath={basePath} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
