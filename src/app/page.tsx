import Link from "next/link";
import { ArrowRight, BookOpen, Wrench, Users, Presentation, Image as ImageIcon, Calendar, Lightbulb, Monitor, Globe, Mouse, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitTrace } from "@/components/layout/circuit-trace";
import PixelBlast from "@/components/PixelBlast";
import { eventsData } from "@/data/events";
import { teamData } from "@/data/team";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen page-enter">
      {/* 1. Hero */}
      <section className="relative w-full min-h-screen pt-[120px] pb-16 lg:pt-0 lg:pb-0 lg:h-screen flex flex-col items-center justify-center bg-[#0B0912] overflow-hidden">
        {/* PixelBlast Background with Center Mask */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 60%)', WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 60%)' }}>
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#C88AFF"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            speed={0.5}
            edgeFade={0.25}
            transparent
            className=""
            style={{}}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1200px] mt-4 lg:mt-[72px]">
          {/* Overline */}
          <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8 w-full max-w-md py-4" style={{ background: 'radial-gradient(ellipse at center, rgba(11,9,18,0.95) 10%, rgba(11,9,18,0) 70%)' }}>
            <div className="h-[1px] w-8 md:w-16 bg-[#B9B3CC]/30"></div>
            <span className="text-[#B9B3CC] text-[10px] md:text-[11px] tracking-[3px] uppercase whitespace-nowrap">IEEE Computer Society • Amrita</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#B9B3CC]/30"></div>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[84px] font-bold text-[#F8F7FC] leading-[1.05] tracking-tight mb-5 md:mb-8">
            Advancing Computing <br />
            for a <span className="text-[#B96CFF]">Better Tomorrow.</span>
          </h1>
          
          {/* Sub-label */}
          <div className="text-[#B9B3CC] text-[10px] md:text-[13px] tracking-[3px] md:tracking-[4px] font-medium mb-5 md:mb-8 uppercase">
            LEARN · COLLABORATE · INNOVATE · MAKE AN IMPACT
          </div>
          
          {/* Description */}
          <p className="text-[#B9B3CC] text-base md:text-xl max-w-[700px] leading-relaxed mb-8 md:mb-12">
            A vibrant community of students, researchers and professionals building technology, creating opportunities, and shaping a better future.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-10 md:mb-16 w-full sm:w-auto">
            <Link href="/events" className="group flex items-center justify-center h-[52px] md:h-[56px] w-full sm:w-auto px-8 rounded-full bg-[#B96CFF] text-[#F8F7FC] font-medium text-base transition-all hover:bg-[#C88AFF]" style={{ boxShadow: "0 0 20px rgba(185, 108, 255, 0.4)" }}>
              <Calendar className="w-4 h-4 mr-2" /> Discover Events <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Feature Row */}
          <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-12 text-left">
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-[#B9B3CC]" />
              <div className="text-[#B9B3CC] text-sm leading-tight">Student-led<br/>Community</div>
            </div>
            <div className="flex items-center gap-4">
              <Monitor className="w-6 h-6 text-[#B9B3CC]" />
              <div className="text-[#B9B3CC] text-sm leading-tight">Technical<br/>Workshops</div>
            </div>
            <div className="flex items-center gap-4">
              <Lightbulb className="w-6 h-6 text-[#B9B3CC]" />
              <div className="text-[#B9B3CC] text-sm leading-tight">Projects &<br/>Innovation</div>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-6 h-6 text-[#B9B3CC]" />
              <div className="text-[#B9B3CC] text-sm leading-tight">Global Network<br/>with Us</div>
            </div>
          </div>
        </div>
        

      </section>

      {/* 2. About / Mission */}
      <section id="about" className="relative w-full py-12 md:py-16 bg-[#0B0912] overflow-hidden flex flex-col text-white border-t border-white/5">
        
        {/* Background Glowing Orbs */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#00A3FF] opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#FF6B4A] opacity-[0.1] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-40 w-[400px] h-[400px] bg-[#A855F7] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>

        {/* Dotted Grid Background */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>


        
        <div className="absolute bottom-10 right-10 flex flex-col items-end pointer-events-none z-10">
          <div className="text-[#5C667B] text-xs font-mono mb-2"><span className="text-white">02</span> / 05</div>
          <div className="flex gap-2 text-[10px] tracking-widest font-mono">
            <span className="text-[#5C667B] hover:text-white cursor-pointer transition-colors">&lt;</span>
            <span className="text-white hover:text-[#5C667B] cursor-pointer transition-colors">&gt;</span>
          </div>
        </div>

        {/* Floating Script Text - hidden on mobile */}
        <div className="hidden md:block absolute right-[5%] top-[45%] -rotate-[15deg] pointer-events-none opacity-50 z-20">
          <span className="font-serif italic text-3xl text-[#B9B3CC]" style={{ fontFamily: 'Georgia, serif' }}>Technology<br/>for a better<br/>tomorrow</span>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            
            {/* Left Column: Copy & CTA */}
            <div className="flex-1 w-full max-w-[600px] pt-12">
              
              <ScrollReveal>
              {/* Overline */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[#FF6B4A] text-xs font-mono">02</span>
                <div className="h-[1px] w-12 bg-[#FF6B4A]/50"></div>
                <span className="text-[#8E9CB0] text-[10px] tracking-[4px] uppercase font-mono">ABOUT</span>
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-5 md:mb-6">
                A Community <br/>
                that Builds <br/>
                <span className="text-[#00A3FF]">What's</span> <span className="text-[#FF6B4A]">Next.</span>
              </h2>
              
              {/* Paragraph */}
              <p className="text-[#8E9CB0] text-lg max-w-[480px] leading-relaxed mb-10">
                Our organization empowers students to learn, collaborate and build technology for a better tomorrow.
              </p>
              </ScrollReveal>
              
              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 md:mb-16 w-full sm:w-auto">
                <Link href="/about" className="group flex items-center justify-center h-[52px] md:h-[56px] w-full sm:w-auto px-8 rounded-full bg-[#FF6B4A] text-[#0B0912] font-semibold text-sm transition-all hover:bg-[#FF8367]">
                  Explore Our Story <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="#video" className="group flex items-center justify-center h-[52px] md:h-[56px] w-full sm:w-auto px-8 rounded-full border border-white/20 text-white font-medium text-sm transition-all hover:bg-white/5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full border border-[#FF6B4A] text-[#FF6B4A] mr-3 group-hover:bg-[#FF6B4A] group-hover:text-[#0B0912] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                  Watch Video
                </Link>
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6 border-t border-white/10 pt-8 mt-auto">
                <div className="text-center pr-2 md:pr-6 md:border-r border-white/10 flex-1 md:flex-none">
                  <div className="text-3xl font-bold text-[#FF6B4A] mb-1">500+</div>
                  <div className="text-[#8E9CB0] text-[11px] uppercase tracking-wider font-medium">Members</div>
                </div>
                <div className="text-center px-2 md:px-6 md:border-r border-white/10 flex-1 md:flex-none">
                  <div className="text-3xl font-bold text-[#00A3FF] mb-1">50+</div>
                  <div className="text-[#8E9CB0] text-[11px] uppercase tracking-wider font-medium">Events</div>
                </div>
                <div className="text-center px-2 md:px-6 md:border-r border-white/10 flex-1 md:flex-none">
                  <div className="text-3xl font-bold text-[#FBBF24] mb-1">20+</div>
                  <div className="text-[#8E9CB0] text-[11px] uppercase tracking-wider font-medium">Projects</div>
                </div>
                <div className="text-center pl-2 md:pl-6 flex-1 md:flex-none">
                  <div className="text-[34px] font-bold text-[#10B981] mb-1 leading-none -mt-1 font-serif">∞</div>
                  <div className="text-[#8E9CB0] text-[11px] uppercase tracking-wider font-medium mt-1">Opportunities</div>
                </div>
              </div>
              
            </div>

            {/* Right Column: 3D Image Composition - hidden on mobile */}
            <div className="hidden lg:flex flex-1 w-full relative h-[500px] lg:h-[600px] items-center justify-center mt-12 lg:mt-0" style={{ perspective: '1200px' }}>
              
              {/* Floating Text Left */}
              <div className="hidden lg:flex absolute -left-10 top-[20%] flex-col gap-3 text-[#5C667B] text-[9px] tracking-[4px] font-mono z-20">
                <span className="hover:text-white transition-colors cursor-default">PEOPLE</span>
                <span className="hover:text-white transition-colors cursor-default">IDEAS</span>
                <span className="hover:text-white transition-colors cursor-default">TECHNOLOGY</span>
                <span className="hover:text-white transition-colors cursor-default">IMPACT</span>
                <div className="h-10 w-[1px] bg-[#FF6B4A]/50 mt-2 ml-1"></div>
              </div>

              {/* Floating Text Right */}
              <div className="hidden lg:flex absolute right-0 top-10 flex-col gap-3 text-[#5C667B] text-[9px] tracking-[4px] font-mono z-20 text-right">
                <span className="text-[#8E9CB0]">LEARN</span>
                <span className="text-[#8E9CB0]">COLLABORATE</span>
                <span className="text-[#8E9CB0]">BUILD</span>
                <span className="text-[#8E9CB0]">BELONG</span>
                <div className="h-[1px] w-12 bg-[#FF6B4A]/50 mt-2 ml-auto"></div>
              </div>

              {/* Back Layer (Cyan Outline) */}
              <div 
                className="absolute w-[80%] md:w-[450px] h-[300px] md:h-[350px] bg-white/[0.02] backdrop-blur-md border border-[#00A3FF]/40 rounded-xl transition-transform duration-1000 ease-out z-0"
                style={{ transform: 'rotateY(-25deg) translateZ(-100px) translateX(-50px) translateY(-30px)' }}
              ></div>

              {/* Middle Layer (Image Panel) */}
              <div 
                className="absolute w-[95%] md:w-[560px] h-[320px] md:h-[380px] bg-[#161320] border border-[#FF6B4A]/60 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,107,74,0.15)] z-10 transition-transform duration-1000 ease-out"
                style={{ transform: 'rotateY(-15deg) translateZ(50px) translateX(20px)' }}
              >
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#101015] to-[#1A1A24]">
                  <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" alt="Campus Building" className="w-full h-full object-cover mix-blend-screen opacity-80" />
                </div>
                
                {/* Overlaid Logo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-90 drop-shadow-2xl">
                   <div className="text-[#FFB3A0] font-light tracking-[10px] text-lg md:text-xl mb-4">AMRITA</div>
                   <div className="flex items-center gap-3">
                     <img src="/cs.webp" alt="IEEE CS Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-sm" />
                     <div className="flex flex-col">
                       <span className="text-[10px] md:text-xs leading-none text-white/80">IEEE</span>
                       <span className="text-base md:text-lg leading-none font-medium text-white">Computer Society</span>
                     </div>
                   </div>
                </div>
              </div>

              {/* Front Layer (Blurred accent pane) */}
              <div 
                className="absolute w-[180px] md:w-[200px] h-[250px] md:h-[300px] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md border border-white/20 rounded-xl z-20 transition-transform duration-1000 ease-out hidden sm:block"
                style={{ transform: 'rotateY(-5deg) translateZ(150px) translateX(-60px) translateY(60px)' }}
              ></div>

            </div>
          </div>

          {/* Bottom Features Bar */}
          <div className="hidden md:flex mt-20 w-full max-w-[1200px] mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[30px] p-6 lg:p-8 flex-col md:flex-row justify-between items-center gap-8 relative z-20 shadow-2xl">
            
            <div className="flex items-center justify-center md:justify-start gap-5 flex-1 w-full">
              <div className="w-12 h-12 rounded-full border border-[#FF6B4A]/30 flex items-center justify-center text-[#FF6B4A] bg-[#FF6B4A]/10">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Learn</h4>
                <p className="text-[#8E9CB0] text-sm">From peers and experts</p>
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>
            <div className="block md:hidden h-[1px] w-full bg-white/10"></div>

            <div className="flex items-center justify-center gap-5 flex-1 w-full">
              <div className="w-12 h-12 rounded-full border border-[#00A3FF]/30 flex items-center justify-center text-[#00A3FF] bg-[#00A3FF]/10">
                <div className="w-5 h-5 border-[1.5px] border-current rotate-45 flex items-center justify-center">
                   <div className="w-2 h-2 border-[1.5px] border-current rotate-45"></div>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Build</h4>
                <p className="text-[#8E9CB0] text-sm">Through real projects</p>
              </div>
            </div>

            <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>
            <div className="block md:hidden h-[1px] w-full bg-white/10"></div>

            <div className="flex items-center justify-center md:justify-end gap-5 flex-1 w-full">
              <div className="w-12 h-12 rounded-full border border-[#FBBF24]/30 flex items-center justify-center text-[#FBBF24] bg-[#FBBF24]/10">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Belong</h4>
                <p className="text-[#8E9CB0] text-sm">To a global network</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 5. Team Preview */}
      <section className="py-24 md:py-32 bg-[#0B0912] border-t border-white/5 text-white relative overflow-hidden">
        <div className="absolute -left-20 top-40 w-[300px] h-[300px] bg-[#10B981] opacity-[0.05] blur-[100px] rounded-full pointer-events-none"></div>
        <CircuitTrace className="top-1/2 -translate-y-1/2 opacity-20 text-[#00A3FF]" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display mb-4">Meet the Team</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The dedicated individuals working behind the scenes to bring you the best experience.
            </p>
          </ScrollReveal>

          {/* Terminal Window */}
          <div className="w-full max-w-4xl mx-auto bg-[#0d0d0d] rounded-xl overflow-hidden border border-[#222] shadow-2xl text-left">
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
                {teamData.filter(m => m.isFacultyAdvisor).map(mentor => (
                  <div key={mentor.name} className="mb-4 group">
                    <span className="text-[#8E9CB0]">{"{"}</span><br/>
                    <span className="pl-4 md:pl-8 text-[#79C0FF]">"role"</span>: <span className="text-[#A5D6FF]">"{mentor.role}"</span>,<br/>
                    <span className="pl-4 md:pl-8 text-[#79C0FF]">"name"</span>: <span className="text-[#7EE787] font-semibold">"{mentor.name}"</span>,<br/>
                    <span className="pl-4 md:pl-8 text-[#79C0FF]">"isFacultyAdvisor"</span>: <span className="text-[#FF7B72]">true</span><br/>
                    <span className="text-[#8E9CB0]">{"},"}</span>
                  </div>
                ))}
                
                {/* Core Team (Preview limited to Chair and Vice Chair for homepage) */}
                {teamData.filter(m => !m.isFacultyAdvisor).slice(0,2).map((member, i) => (
                  <div key={member.name} className="mb-4 group">
                    <span className="text-[#8E9CB0]">{"{"}</span><br/>
                    <span className="pl-4 md:pl-8 text-[#79C0FF]">"role"</span>: <span className="text-[#A5D6FF]">"{member.role}"</span>,<br/>
                    <span className="pl-4 md:pl-8 text-[#79C0FF]">"name"</span>: <span className="text-[#7EE787] font-semibold">"{member.name}"</span><br/>
                    <span className="text-[#8E9CB0]">{"}"}{i !== 1 ? "," : ""}</span>
                  </div>
                ))}
                <div className="text-[#5C667B]">... // see full team</div>
              </div>
              <span className="text-[#8E9CB0]">]</span>;
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/team" className="inline-flex items-center gap-2 text-sm text-[#8E9CB0] hover:text-white transition-colors font-mono tracking-wider border border-white/10 hover:border-white/30 px-6 py-2.5 rounded-full">
              View full team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
}
