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
    <div className="min-h-screen bg-[#0B0912] text-white pb-24 relative overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-[#FF6B4A] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Gallery</h1>
          <p className="text-xl text-[#8E9CB0]">
            A look back at our past events, hackathons, and community moments.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-white/5 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 relative transition-colors group-hover:border-[#FF6B4A]/50">
               <ImageIcon className="text-white/20 w-12 h-12" />
               <div className="absolute inset-0 bg-[#0B0912]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white font-medium px-4 text-center">{item.title}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
