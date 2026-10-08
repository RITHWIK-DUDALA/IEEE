import Link from "next/link";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Image as ImageIcon } from "lucide-react";
import { db } from "@/lib/firebase";
import { Post } from "@/lib/types";

export const metadata = {
  title: "News | Organization",
  description: "Latest news and updates from the Organization.",
};

// Next.js config to ensure dynamic rendering if env vars are not available at build time
export const dynamic = 'force-dynamic';

async function getPublishedPosts(): Promise<Post[]> {
  try {
    const q = query(
      collection(db, "posts"),
      where("status", "==", "published"),
      // If we want to order, we need a composite index in firestore
      // orderBy("publishedAt", "desc") 
    );
    const querySnapshot = await getDocs(q);
    const posts: Post[] = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as Post);
    });
    
    // Sort manually to avoid needing a composite index for simple setups
    return posts.sort((a, b) => {
      const timeA = a.publishedAt?.toMillis ? a.publishedAt.toMillis() : 0;
      const timeB = b.publishedAt?.toMillis ? b.publishedAt.toMillis() : 0;
      return timeB - timeA;
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function NewsPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-[var(--color-ink)] mb-6">News & Updates</h1>
        <p className="text-xl text-[var(--color-ink-muted)]">
          The latest stories, announcements, and insights from our community.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.id} href={`/news/${post.slug}`} className="group flex flex-col h-full">
              <div className="aspect-[3/2] bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-[var(--color-border)]">
                {post.coverImage ? (
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                ) : (
                  <ImageIcon className="text-gray-300 w-10 h-10 transition-transform group-hover:scale-110" />
                )}
              </div>
              <div className="text-xs font-mono font-semibold text-[var(--color-signal-teal)] mb-2 uppercase">
                {post.publishedAt?.toDate ? post.publishedAt.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Unknown Date'}
              </div>
              <h2 className="text-2xl font-bold font-display text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-[var(--color-ink-muted)] line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <div className="mt-auto text-sm font-medium text-[var(--color-ink)]">
                By {post.authorName}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-gray-50 border border-[var(--color-border)] rounded-xl">
          <p className="text-[var(--color-ink-muted)] text-lg">No news posts have been published yet.</p>
        </div>
      )}
    </div>
  );
}
