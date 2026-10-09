import { teamData } from "@/data/team";

export const metadata = {
  title: "Team | IEEE CS",
  description: "Meet the IEEE CS Team 2026.",
};

export default function TeamPage() {
  const mentor = teamData.find(m => m.isFacultyAdvisor);
  const coreTeam = teamData.filter(m => !m.isFacultyAdvisor);

  const getInitials = (name: string) =>
    name.split(" ").filter(w => w.match(/[A-Z]/)).slice(0, 2).map(w => w[0]).join("");

  return (
    <div className="pb-24">

      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[4px] uppercase font-mono text-[#B96CFF] mb-4">IEEE CS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Team 2026</h1>
          <p className="text-[#8E9CB0] max-w-xl mx-auto">
            The dedicated individuals working to advance computing and create opportunities for our community.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="w-full bg-[#0d0d0d] rounded-xl overflow-hidden border border-[#222] shadow-2xl">
          {/* Terminal Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-[#222]">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            <div className="ml-4 text-xs font-mono text-gray-500">~/ieee-cs/team_2026.json</div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-gray-300">
            <span className="text-[#B96CFF]">const</span> <span className="text-[#FFB3A0]">team2026</span> = [
            <div className="pl-4 md:pl-8 py-2">
              {/* Mentor */}
              {mentor && (
                <div className="mb-4 group">
                  <span className="text-[#8E9CB0]">{"{"}</span><br/>
                  <span className="pl-4 md:pl-8 text-[#79C0FF]">"role"</span>: <span className="text-[#A5D6FF]">"{mentor.role}"</span>,<br/>
                  <span className="pl-4 md:pl-8 text-[#79C0FF]">"name"</span>: <span className="text-[#7EE787] font-semibold">"{mentor.name}"</span>,<br/>
                  <span className="pl-4 md:pl-8 text-[#79C0FF]">"isFacultyAdvisor"</span>: <span className="text-[#FF7B72]">true</span><br/>
                  <span className="text-[#8E9CB0]">{"},"}</span>
                </div>
              )}
              
              {/* Core Team */}
              {coreTeam.map((member, i) => (
                <div key={member.name} className="mb-4 group">
                  <span className="text-[#8E9CB0]">{"{"}</span><br/>
                  <span className="pl-4 md:pl-8 text-[#79C0FF]">"role"</span>: <span className="text-[#A5D6FF]">"{member.role}"</span>,<br/>
                  <span className="pl-4 md:pl-8 text-[#79C0FF]">"name"</span>: <span className="text-[#7EE787] font-semibold">"{member.name}"</span><br/>
                  <span className="text-[#8E9CB0]">{"}"}{i !== coreTeam.length - 1 ? "," : ""}</span>
                </div>
              ))}
            </div>
            <span className="text-[#8E9CB0]">]</span>;
          </div>
        </div>

      </div>
    </div>
  );
}
