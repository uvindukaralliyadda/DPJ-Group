import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { PostList } from "@/components/insights/PostList";
import { NEWS_CSR_POSTS } from "@/data/insights";

export const metadata: Metadata = {
  title: "News & CSR | DPJ Group of Companies",
  description: "News, updates and impact from DPJ Group of Companies.",
};

export default function NewsCsrPage() {
  return (
    <>
      <AboutHero
        content={{
          eyebrow: "News & CSR",
          title: "News, Updates & Our Impact",
          description:
            "Updates from across DPJ Group, including community initiatives and business developments.",
        }}
      />
      <PostList
        posts={NEWS_CSR_POSTS}
        basePath="/insights/news-csr"
        sectionLabel="Latest Updates"
        emptyMessage="No updates are available right now. Please check back soon."
      />
    </>
  );
}
