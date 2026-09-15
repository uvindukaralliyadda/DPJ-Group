"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PostCard } from "./PostCard";
import { staggerContainer } from "@/lib/animations";
import type { InsightPost } from "@/types";

export function PostGrid({
  posts,
  basePath,
  emptyMessage,
}: {
  posts: InsightPost[];
  basePath: string;
  emptyMessage: string;
}) {
  const reducedMotion = useReducedMotion();

  if (posts.length === 0) {
    return <p className="py-24 text-center text-sm text-black/50">{emptyMessage}</p>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={reducedMotion ? undefined : staggerContainer(0.08)}
      className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post) => (
        <PostCard key={post.id} post={post} basePath={basePath} />
      ))}
    </motion.div>
  );
}
