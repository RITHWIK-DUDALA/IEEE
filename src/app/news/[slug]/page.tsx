import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { Post } from "@/lib/types";

export const dynamic = 'force-dynamic';

async function getPostBySlug(slug: string): Promise<Post | null> {
  // Database removed for static landing page.
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  return {
    title: post ? `${post.title} | Organization News` : "News Article Not Found",
    description: post?.excerpt || "Read the latest news from Organization.",
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-24">
      <div className="bg-[var(--color-navy)] text-white pt-12 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-brand-primary)] opacity-50 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <Link href="/news" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-mono text-[var(--color-signal-teal)] mb-4 tracking-widest uppercase">
              {post.publishedAt?.toDate ? post.publishedAt.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-white/70 font-medium">
              By {post.authorName}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md border border-[var(--color-border)] overflow-hidden">
          {post.coverImage ? (
            <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover" />
          ) : (
            <div className="w-full aspect-video bg-gray-100 flex items-center justify-center">
              <ImageIcon className="text-gray-300 w-16 h-16" />
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-[var(--color-ink)]" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </article>
  );
}
