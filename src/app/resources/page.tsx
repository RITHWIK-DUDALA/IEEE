import { ResourcesTerminal } from "@/components/ResourcesTerminal";

export const metadata = {
  title: "Resources | IEEE CS",
  description: "Access event materials, presentations, and other resources.",
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col pt-32 pb-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col items-center justify-center max-w-4xl">
        
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[4px] uppercase font-mono text-[#B96CFF] mb-4">IEEE CS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Resources Hub</h1>
        </div>

        {/* Animated Terminal Window */}
        <ResourcesTerminal />

      </div>
    </div>
  );
}
