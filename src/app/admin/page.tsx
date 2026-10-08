"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, User } from "firebase/auth";
import { collection, query, getDocs, doc, deleteDoc, orderBy } from "firebase/firestore";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { Post } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Posts state
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchPosts();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, "posts")); // Need all posts (draft + published)
      const querySnapshot = await getDocs(q);
      const fetchedPosts: Post[] = [];
      querySnapshot.forEach((doc) => {
        fetchedPosts.push({ id: doc.id, ...doc.data() } as Post);
      });
      // Sort manually by creation date descending
      fetchedPosts.sort((a, b) => {
        const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return timeB - timeA;
      });
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setLoginError(error.message || "Failed to login");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteDoc(doc(db, "posts", id));
        setPosts(posts.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("Failed to delete post");
      }
    }
  };

  if (loading) {
    return <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-md">
        <div className="bg-white p-8 rounded-xl border border-[var(--color-border)] shadow-sm">
          <h1 className="text-2xl font-bold font-display text-[var(--color-ink)] mb-6 text-center">Admin Login</h1>
          {loginError && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm border border-red-200">
              {loginError}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-ink-muted)] mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] text-[var(--color-ink)]"
                required
              />
            </div>
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-[var(--color-ink)]">Admin Dashboard</h1>
          <p className="text-[var(--color-ink-muted)]">Manage your news and blog posts.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
          <Button asChild>
            <Link href="/admin/editor">
              <Plus className="w-4 h-4 mr-2" /> New Post
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-[var(--color-border)]">
              <tr>
                <th className="px-6 py-4 font-medium text-[var(--color-ink-muted)]">Title</th>
                <th className="px-6 py-4 font-medium text-[var(--color-ink-muted)]">Status</th>
                <th className="px-6 py-4 font-medium text-[var(--color-ink-muted)]">Date Created</th>
                <th className="px-6 py-4 font-medium text-[var(--color-ink-muted)] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-[var(--color-ink-muted)]">
                    No posts found. Create one to get started.
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-[var(--color-ink)]">{post.title}</div>
                      <div className="text-sm text-[var(--color-ink-muted)]">{post.slug}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-mono font-medium ${post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {post.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--color-ink-muted)]">
                      {post.createdAt?.toDate ? post.createdAt.toDate().toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/editor?id=${post.id}`}>
                            <Edit className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleDelete(post.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
