export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  status: "draft" | "published";
  authorName: string;
  createdAt: any;
  publishedAt: any | null;
};
