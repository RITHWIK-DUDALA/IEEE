"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, MousePointer2, ArrowDown } from "lucide-react";
import LaserFlow from "./LaserFlow";

export default function EventsHeroFull() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#08070F] text-[#F7F5FC] flex flex-col items-center" style={{ minHeight: "100vh" }}>
      
      {/* BACKGROUND & EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle purple atmospheric tint */}
        <div className="absolute inset-0 bg-[#0D0B17] opacity-60"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(50,20,90,0.15)_0%,transparent_70%)]"></div>
      </div>

      {/* CENTRAL GLOWING LIGHT BEAM (LaserFlow WebGL) */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-90">
        <LaserFlow
          horizontalBeamOffset={0.025}
          verticalBeamOffset={-0.34}
          color="#CF9EFF"
          horizontalSizing={0.5}
          verticalSizing={2.0}
          wispDensity={2.5}
          wispSpeed={18.0}
          wispIntensity={12.0}
          flowSpeed={0.6}
          flowStrength={0.7}
          fogIntensity={0.45}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
          backgroundColor="transparent"
        />
      </div>

      {/* BOTTOM SCROLL INDICATOR PANEL & FLARE */}
      <div className="absolute bottom-0 left-[5%] w-[90%] h-[145px] z-[5] rounded-t-[52px] border-t border-l border-r border-[rgba(188,134,255,0.8)] bg-[rgba(14,11,25,0.92)] flex flex-col items-center pt-[18px] cursor-pointer group"
           style={{ backgroundImage: 'radial-gradient(circle, rgba(188,134,255,0.22) 1.5px, transparent 1.5px)', backgroundSize: '45px 45px', backgroundPosition: 'center top' }}>
        
        {/* Horizontal Flare on intersection */}
        <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-[600px] h-[4px] bg-[radial-gradient(ellipse_at_center,#F4DFFF_0%,rgba(188,134,255,0.8)_20%,transparent_70%)] blur-[2px] opacity-90 animate-flare-pulse"></div>
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[800px] h-[80px] bg-[radial-gradient(ellipse_at_center,rgba(187,100,255,0.25)_0%,transparent_60%)] pointer-events-none animate-flare-pulse"></div>

        {/* Removed Scroll to Explore text and mouse icon as requested */}
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-[10] w-full max-w-[1560px] flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-[60px] xl:px-[40px] pt-[200px] pb-[200px]">
        
        {/* LEFT COLUMN: COPY & CTA & STATS */}
        <div className="w-full lg:w-[45%] max-w-[600px] flex flex-col relative z-20">
          
          <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '0ms' }}>
            <span className="text-[14px] font-medium tracking-[6px] text-[#C9A0FF] mb-[22px] block">
              EVENTS
            </span>
          </div>

          <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '100ms' }}>
            <h1 className="font-bold text-[clamp(48px,4.35vw,72px)] leading-[1.05] tracking-[-0.02em] text-[#F7F5FC] mb-[20px] max-w-[660px]">
              <div className="whitespace-nowrap">Ideas today.</div>
              <div className="whitespace-nowrap"><span className="text-transparent bg-clip-text bg-[linear-gradient(100deg,#B66BFF_0%,#D3A4FF_100%)]">Impact</span> tomorrow.</div>
            </h1>
          </div>

          <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '200ms' }}>
            <p className="text-[clamp(15px,1.05vw,18px)] leading-[1.6] text-[#B3AEC7] max-w-[520px] mb-[28px]">
              Workshops, talks, hackathons and more —<br className="hidden lg:block" />
              explore what&apos;s happening at Organization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center gap-[28px] mt-[10px] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '300ms' }}>
            <button className="group relative inline-flex items-center justify-center w-[218px] h-[60px] rounded-[30px] bg-[linear-gradient(110deg,#B96CFF_0%,#D09BFF_100%)] text-[#171020] text-[14px] font-semibold px-[30px] transition-all duration-[220ms] hover:-translate-y-[2px] hover:brightness-110" style={{ boxShadow: "0 0 24px rgba(180, 100, 255, 0.16)" }}>
              Explore Events 
              <ArrowRight className="w-[18px] h-[18px] ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
            </button>
            <button className="group inline-flex items-center justify-center w-[214px] h-[60px] rounded-[30px] bg-transparent border border-[rgba(177,135,230,0.55)] text-[#F0EAFB] text-[15px] font-medium transition-all duration-[220ms] hover:bg-[rgba(179,109,255,0.09)] hover:border-[rgba(177,135,230,0.8)]">
              <Calendar className="w-[17px] h-[17px] mr-[12px]" />
              View Calendar
            </button>
          </div>

          {/* Statistics */}
          <div className={`flex flex-row items-center gap-[32px] xl:gap-[40px] mt-[62px] lg:mt-[68px] max-w-[650px] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '400ms' }}>
            
            <div className="flex flex-col">
              <span className="text-[24px] font-semibold text-[#C58AFF]">20+</span>
              <span className="text-[12px] font-normal text-[#AAA4BF] mt-[6px]">Events Annually</span>
            </div>

            <div className="w-[1px] h-[44px] bg-[rgba(188,150,235,0.45)]"></div>

            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-[#D4A5FF]">Industry Experts</span>
              <span className="text-[12px] font-normal text-[#AAA4BF] mt-[6px]">Learn from the best</span>
            </div>

            <div className="w-[1px] h-[44px] bg-[rgba(188,150,235,0.45)] hidden sm:block"></div>

            <div className="flex flex-col hidden sm:flex">
              <span className="text-[15px] font-medium text-[#D4A5FF]">A Stronger Community</span>
              <span className="text-[12px] font-normal text-[#AAA4BF] mt-[6px]">Build. Collaborate. Grow.</span>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: 3D PANELS & EDITORIAL TEXT */}
        <div className="hidden lg:flex w-[55%] relative h-[500px] items-center justify-end z-10" style={{ perspective: '1400px' }}>
          
          <div className="relative w-full h-full flex items-center justify-end" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Panel 3 (Back) */}
            <div className={`absolute w-[300px] h-[380px] bg-[#100D1D]/60 border border-[rgba(191,142,255,0.2)] flex flex-col justify-center p-10 right-[40px] transition-all duration-1000 ease-out animate-float-panel-3 ${mounted ? 'opacity-55 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transform: 'rotateY(-36deg) translateZ(-150px)', zIndex: 1, transitionDelay: '500ms' }}>
              <div className="text-[16px] tracking-[6px] leading-[2.5] text-[#C5A9E8]/40 font-medium">
                TECHNOLOGY<br/>PEOPLE<br/>IDEAS<br/>IMPACT
              </div>
            </div>

            {/* Panel 2 (Middle) */}
            <div className={`absolute w-[300px] h-[400px] bg-[#100D1D] border border-[rgba(191,142,255,0.4)] overflow-hidden right-[90px] transition-all duration-1000 ease-out animate-float-panel-2 ${mounted ? 'opacity-75 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transform: 'rotateY(-24deg) translateZ(-50px)', zIndex: 2, transitionDelay: '350ms' }}>
               <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Audience" className="w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-75 contrast-125" />
               <div className="absolute inset-0 bg-[#3a1a6b] mix-blend-overlay opacity-40"></div>
            </div>

            {/* Panel 1 (Front) */}
            <div className={`absolute w-[300px] h-[420px] bg-[#100D1D] border border-[rgba(191,142,255,0.7)] overflow-hidden right-[140px] transition-all duration-1000 ease-out animate-float-panel-1 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transform: 'rotateY(-12deg) translateZ(50px)', zIndex: 3, boxShadow: 'inset 0 0 40px rgba(175,112,255,0.15)', transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Presenter" className="w-full h-full object-cover opacity-80 mix-blend-luminosity brightness-90 contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D1D] to-transparent opacity-80"></div>
              <div className="absolute top-[25%] left-8 text-white font-medium text-2xl leading-tight opacity-90 drop-shadow-lg">
                Build<br/>Learn<br/>Connect
              </div>
            </div>
            
            {/* Editorial Typographic Details on far right */}
            <div className={`absolute right-[-40px] flex flex-col justify-center h-full z-10 transition-all duration-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms', transform: 'translateZ(100px)' }}>
              <div className="text-[10px] xl:text-[11px] tracking-[4px] leading-[2.0] text-[#C5A9E8] font-medium mb-12">
                TECHNOLOGY<br/>PEOPLE<br/>IDEAS<br/>IMPACT
              </div>
              <div className="flex border-l border-[#C5A9E8]/30 pl-[18px]">
                <div className="text-[9px] xl:text-[10px] tracking-[3px] leading-[2.0] text-[#BDB5CE] font-medium">
                  A PLATFORM<br/>FOR CURIOUS MINDS
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
