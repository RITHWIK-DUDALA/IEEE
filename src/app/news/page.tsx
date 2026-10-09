import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import { Post } from "@/lib/types";

export const metadata = {
  title: "News | Organization",
  description: "Latest news and updates from the Organization.",
};

// Next.js config to ensure dynamic rendering if env vars are not available at build time
export const dynamic = 'force-dynamic';

async function getPublishedPosts(): Promise<Post[]> {
  // Database removed for static landing page.
  return [];
}

export default async function NewsPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-[#0B0912] text-white pb-24 relative overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#00A3FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">News & Updates</h1>
          <p className="text-xl text-[#8E9CB0]">
            The latest stories, announcements, and insights from our community.
          </p>
        </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/news/${post.slug}`} className="group flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden hover:border-[#00A3FF]/50 transition-colors">
              <div className="aspect-[3/2] bg-white/5 border-b border-white/10 flex items-center justify-center overflow-hidden">
                {post.coverImage ? (
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                ) : (
                  <ImageIcon className="text-white/20 w-10 h-10 transition-transform group-hover:scale-110" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-mono font-semibold text-[#00A3FF] mb-2 uppercase">
                {post.publishedAt?.toDate ? post.publishedAt.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
              </div>
              <h2 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-[#00A3FF] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-[#8E9CB0] line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="mt-auto text-sm font-medium text-[#B9B3CC]">
                By {post.authorName}
              </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-white/5 border border-white/10 rounded-xl">
          <p className="text-[#8E9CB0] text-lg">No news posts have been published yet.</p>
        </div>
      )}
      </div>
    </div>
  );
}
