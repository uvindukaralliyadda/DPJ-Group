import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostDetail } from "@/components/insights/PostDetail";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedBlogPosts } from "@/data/insights";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return { title: "Article Not Found | DPJ Group of Companies" };

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

export default async function BlogPostPage({
  params,
}: PageProps<"/insights/blog/[slug]">) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <PostDetail
      post={post}
      basePath="/insights/blog"
      backLabel="Back to Blog"
      relatedLabel="Related Articles"
      relatedPosts={getRelatedBlogPosts(slug)}
    />
  );
}
