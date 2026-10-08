"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { ArrowLeft, Save, Globe } from "lucide-react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";

export default function EditorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/admin");
        return;
      }
      
      if (editId) {
        try {
          const docRef = doc(db, "posts", editId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setTitle(data.title || "");
            setSlug(data.slug || "");
            setExcerpt(data.excerpt || "");
            setContent(data.content || "");
            setCoverImage(data.coverImage || "");
            setAuthorName(data.authorName || "");
            setStatus(data.status || "draft");
          } else {
            setError("Post not found");
          }
        } catch (err) {
          console.error("Error loading post:", err);
          setError("Failed to load post");
        }
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, [editId, router]);

  // Auto-generate slug from title if not editing an existing slug manually
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!editId) {
      setSlug(newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""));
    }
  };

  const handleSave = async (publish: boolean) => {
    if (!title || !slug || !content || !authorName) {
      setError("Title, slug, author, and content are required.");
      return;
    }
    
    setSaving(true);
    setError("");
    const newStatus = publish ? "published" : "draft";
    
    try {
      const postData: any = {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        authorName,
        status: newStatus,
        updatedAt: serverTimestamp(),
      };

      if (publish && status !== "published") {
        postData.publishedAt = serverTimestamp();
      }

      if (editId) {
        await updateDoc(doc(db, "posts", editId), postData);
      } else {
        postData.createdAt = serverTimestamp();
        await addDoc(collection(db, "posts"), postData);
      }

      router.push("/admin");
    } catch (err: any) {
      console.error("Error saving post:", err);
      setError(err.message || "Failed to save post");
      setSaving(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading editor...</div>;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/admin"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <h1 className="text-3xl font-bold font-display text-[var(--color-ink)]">
            {editId ? "Edit Post" : "Create New Post"}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            onClick={() => handleSave(false)} 
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" /> {saving ? "Saving..." : "Save Draft"}
          </Button>
          <Button 
            variant="primary" 
            onClick={() => handleSave(true)} 
            disabled={saving}
          >
            <Globe className="w-4 h-4 mr-2" /> {saving ? "Publishing..." : "Publish"}
          </Button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-8 border border-red-200">
          {error}
        </div>
      )}

      <div className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)]"
            placeholder="Post Title"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)]"
              placeholder="post-url-slug"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Author Name</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)]"
              placeholder="John Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Cover Image URL (Optional)</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)]"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)] resize-none"
            placeholder="A short summary of the post..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Content (HTML supported)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={15}
            className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)]"
            placeholder="<p>Write your content here...</p>"
          />
        </div>
      </div>
    </div>
  );
}
