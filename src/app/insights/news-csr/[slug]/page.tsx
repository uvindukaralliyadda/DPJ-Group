import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostDetail } from "@/components/insights/PostDetail";
import {
  NEWS_CSR_POSTS,
  getNewsCsrPostBySlug,
  getRelatedNewsCsrPosts,
} from "@/data/insights";

export function generateStaticParams() {
  return NEWS_CSR_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/news-csr/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsCsrPostBySlug(slug);

  if (!post) return { title: "Update Not Found | DPJ Group of Companies" };

  return {
    title: `${post.headline} | DPJ Group of Companies`,
    description: post.description,
    openGraph: {
      title: post.headline,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function NewsCsrPostPage({
  params,
}: PageProps<"/insights/news-csr/[slug]">) {
  const { slug } = await params;
  const post = getNewsCsrPostBySlug(slug);

  if (!post) notFound();

  return (
    <PostDetail
      post={post}
      basePath="/insights/news-csr"
      backLabel="Back to News & CSR"
      relatedLabel="Related Posts"
      relatedPosts={getRelatedNewsCsrPosts(slug)}
    />
  );
}
