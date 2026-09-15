import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { PostList } from "@/components/insights/PostList";
import { BLOG_POSTS } from "@/data/insights";

export const metadata: Metadata = {
  title: "Blog | DPJ Group of Companies",
  description:
    "Ideas, perspectives and industry insights from DPJ Group of Companies.",
};

export default function BlogPage() {
  return (
    <>
      <AboutHero
        content={{
          eyebrow: "Blog",
          title: "Ideas, Perspectives & Industry Insights",
          description:
            "Perspectives from across DPJ Group's construction, piling, transport and steel businesses.",
        }}
      />
      <PostList
        posts={BLOG_POSTS}
        basePath="/insights/blog"
        sectionLabel="Latest Articles"
        emptyMessage="No articles are available right now. Please check back soon."
      />
    </>
  );
}
