"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SortControl, type SortOrder } from "./SortControl";
import { PostGrid } from "./PostGrid";
import type { InsightPost } from "@/types";

export function PostList({
  posts,
  basePath,
  sectionLabel,
  emptyMessage,
}: {
  posts: InsightPost[];
  basePath: string;
  sectionLabel: string;
  emptyMessage: string;
}) {
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return sortOrder === "newest" ? -diff : diff;
    });
  }, [posts, sortOrder]);

  return (
    <section className="bg-[#F8F9FA] py-[30px]">
      <Container>
        <div className="flex flex-col gap-6 border-b border-black/10 pb-8 md:flex-row md:items-center md:justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            {sectionLabel}
          </span>
          {posts.length > 0 && (
            <SortControl
              value={sortOrder}
              onChange={setSortOrder}
              label={`Sort ${sectionLabel.toLowerCase()} by date`}
            />
          )}
        </div>

        <div className="mt-12">
          <PostGrid posts={sortedPosts} basePath={basePath} emptyMessage={emptyMessage} />
        </div>
      </Container>
    </section>
  );
}
