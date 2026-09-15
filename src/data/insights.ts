import type { InsightPost } from "@/types";

// DEMO DATA - REPLACE WITH ACTUAL DPJ CONTENT
export const BLOG_POSTS: InsightPost[] = [
  {
    id: "b1",
    slug: "building-with-purpose",
    headline: "Building With Purpose Across Five Decades",
    date: "2026-08-12",
    image: "/images/placeholders/insights/blog-1.jpg",
    description:
      "A look at how DPJ Group's approach to construction has been shaped by decades of experience across generations.",
    content: [
      "DEMO DATA - REPLACE WITH ACTUAL DPJ CONTENT. This is placeholder article content illustrating how a blog post would read on the DPJ Group website.",
      "Replace this text with an approved article once real DPJ Group content is available.",
    ],
  },
  {
    id: "b2",
    slug: "the-role-of-piling-in-modern-construction",
    headline: "The Role of Piling in Modern Construction",
    date: "2026-07-02",
    image: "/images/placeholders/insights/blog-2.jpg",
    description:
      "Understanding why foundation work plays such a critical role in the success of any construction project.",
    content: [
      "DEMO DATA - REPLACE WITH ACTUAL DPJ CONTENT. This is placeholder article content illustrating how a blog post would read on the DPJ Group website.",
    ],
  },
  {
    id: "b3",
    slug: "keeping-projects-moving",
    headline: "Keeping Projects Moving: A Look at Transport & Logistics",
    date: "2026-05-18",
    image: "/images/placeholders/insights/blog-3.jpg",
    description:
      "How reliable transport and logistics support keeps complex projects on schedule.",
    content: [
      "DEMO DATA - REPLACE WITH ACTUAL DPJ CONTENT. This is placeholder article content illustrating how a blog post would read on the DPJ Group website.",
    ],
  },
];

// DEMO DATA - REPLACE WITH ACTUAL DPJ CONTENT
export const NEWS_CSR_POSTS: InsightPost[] = [
  {
    id: "n1",
    slug: "dpj-group-community-initiative",
    headline: "DPJ Group Supports Local Community Initiative",
    date: "2026-08-25",
    image: "/images/placeholders/insights/news-1.jpg",
    description:
      "An update on DPJ Group's ongoing commitment to supporting the communities it operates within.",
    content: [
      "DEMO DATA - REPLACE WITH ACTUAL DPJ CONTENT. This is placeholder news content illustrating how an update would read on the DPJ Group website.",
    ],
  },
  {
    id: "n2",
    slug: "expanding-steel-capabilities",
    headline: "DPJ Group Expands Steel Capabilities",
    date: "2026-06-14",
    image: "/images/placeholders/insights/news-2.jpg",
    description:
      "A brief update on developments within DPJ Group's steel business area.",
    content: [
      "DEMO DATA - REPLACE WITH ACTUAL DPJ CONTENT. This is placeholder news content illustrating how an update would read on the DPJ Group website.",
    ],
  },
];

function sortByDate(posts: InsightPost[], order: "newest" | "oldest") {
  return [...posts].sort((a, b) => {
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
    return order === "newest" ? -diff : diff;
  });
}

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getNewsCsrPostBySlug(slug: string) {
  return NEWS_CSR_POSTS.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  return sortByDate(BLOG_POSTS.filter((post) => post.slug !== slug), "newest").slice(0, limit);
}

export function getRelatedNewsCsrPosts(slug: string, limit = 3) {
  return sortByDate(NEWS_CSR_POSTS.filter((post) => post.slug !== slug), "newest").slice(0, limit);
}
