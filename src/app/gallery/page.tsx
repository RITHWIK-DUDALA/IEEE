import { Image as ImageIcon } from "lucide-react";

export const metadata = {
  title: "Gallery | Organization",
  description: "A look back at our past events, hackathons, and community moments.",
};

export default function GalleryPage() {
  // Placeholder array for gallery images
  const galleryItems = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: `Gallery Event ${i + 1}`,
  }));

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-[var(--color-ink)] mb-6">Gallery</h1>
        <p className="text-xl text-[var(--color-ink-muted)]">
          A look back at our past events, hackathons, and community moments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden border border-[var(--color-border)] relative">
               <ImageIcon className="text-gray-300 w-12 h-12" />
               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white font-medium px-4 text-center">{item.title}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
