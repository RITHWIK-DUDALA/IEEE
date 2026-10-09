"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, MousePointer2, ArrowDown, X } from "lucide-react";
import dynamic from "next/dynamic";
import { eventsData } from "@/data/events";
import Link from "next/link";

const LaserFlow = dynamic(() => import("./LaserFlow"), { ssr: false });

export default function EventsHeroFull() {
  const [mounted, setMounted] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    // Delay mounting slightly to allow Next.js client-side navigation 
    // to finish layout calculations before WebGL initializes
    const timer = setTimeout(() => {
      setMounted(true);
    }, 150);
    
    return () => clearTimeout(timer);
  }, []);

  // Simple calendar math for October 2026 (based on the event data)
  // Oct 1, 2026 is a Thursday
  const daysInMonth = 31;
  const firstDayOfMonth = 4; // 0 = Sun, 1 = Mon ... 4 = Thu
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="relative w-full overflow-hidden bg-[#08070F] text-[#F7F5FC] flex flex-col items-center" style={{ minHeight: "100vh" }}>
      
      {/* BACKGROUND & EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle purple atmospheric tint */}
        <div className="absolute inset-0 bg-[#0D0B17] opacity-60"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(20,70,120,0.15)_0%,transparent_70%)]"></div>
      </div>

      {/* CENTRAL GLOWING LIGHT BEAM (LaserFlow WebGL) */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-90">
        {mounted && (
          <LaserFlow
            horizontalBeamOffset={0.025}
            verticalBeamOffset={-0.34}
            color="#00E5FF"
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
        )}
      </div>



      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-[10] w-full max-w-[1560px] flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-[60px] xl:px-[40px] pt-[110px] md:pt-[160px] lg:pt-[200px] pb-[60px] md:pb-[200px]">
        
        {/* LEFT COLUMN: COPY & CTA & STATS */}
        <div className="w-full lg:w-[45%] max-w-[600px] flex flex-col relative z-20">
          
          <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '0ms' }}>
            <span className="text-[14px] font-medium tracking-[6px] text-[#00E5FF] mb-[22px] block">
              EVENTS
            </span>
          </div>

          <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '100ms' }}>
            <h1 className="font-bold text-[clamp(36px,4.35vw,72px)] leading-[1.05] tracking-[-0.02em] text-[#F7F5FC] mb-[20px] max-w-[660px]">
              <div>Ideas today.</div>
              <div><span className="text-transparent bg-clip-text bg-[linear-gradient(100deg,#0088FF_0%,#00E5FF_100%)]">Impact</span> tomorrow.</div>
            </h1>
          </div>

          <div className={`transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '200ms' }}>
            <p className="text-[clamp(15px,1.05vw,18px)] leading-[1.6] text-[#B3AEC7] max-w-[520px] mb-[28px]">
              Workshops, talks, hackathons and more —<br className="hidden lg:block" />
              explore what&apos;s happening at Organization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-[10px] w-full sm:w-auto transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`} style={{ transitionDelay: '300ms' }}>
            <button onClick={() => document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' })} className="group relative inline-flex items-center justify-center h-[56px] sm:w-[218px] sm:h-[60px] rounded-[30px] bg-[linear-gradient(110deg,#0088FF_0%,#00E5FF_100%)] text-[#171020] text-[14px] font-semibold px-[30px] transition-all duration-[220ms] hover:-translate-y-[2px] hover:brightness-110 cursor-pointer" style={{ boxShadow: "0 0 24px rgba(0, 136, 255, 0.2)" }}>
              Explore Events 
              <ArrowRight className="w-[18px] h-[18px] ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
            </button>
            <button onClick={() => setIsCalendarOpen(true)} className="group inline-flex items-center justify-center h-[56px] sm:w-[214px] sm:h-[60px] rounded-[30px] bg-transparent border border-[rgba(0,229,255,0.55)] text-[#F0EAFB] text-[15px] font-medium transition-all duration-[220ms] hover:bg-[rgba(0,136,255,0.09)] hover:border-[rgba(0,229,255,0.8)] cursor-pointer">
              <Calendar className="w-[17px] h-[17px] mr-[12px]" />
              View Calendar
            </button>
          </div>

          {/* Statistics */}
          <div className={`flex flex-row items-center gap-[24px] xl:gap-[40px] mt-[40px] lg:mt-[68px] max-w-[650px] transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '400ms' }}>
            
            <div className="flex flex-col">
              <span className="text-[22px] md:text-[24px] font-semibold text-[#00E5FF]">20+</span>
              <span className="text-[11px] md:text-[12px] font-normal text-[#AAA4BF] mt-[6px]">Events Annually</span>
            </div>

            <div className="w-[1px] h-[44px] bg-[rgba(0,229,255,0.45)] hidden sm:block"></div>

            <div className="hidden sm:flex flex-col">
              <span className="text-[15px] font-medium text-[#00E5FF]">Industry Experts</span>
              <span className="text-[12px] font-normal text-[#AAA4BF] mt-[6px]">Learn from the best</span>
            </div>

            <div className="w-[1px] h-[44px] bg-[rgba(0,229,255,0.45)] hidden sm:block"></div>

            <div className="hidden sm:flex flex-col">
              <span className="text-[15px] font-medium text-[#00E5FF]">A Stronger Community</span>
              <span className="text-[12px] font-normal text-[#AAA4BF] mt-[6px]">Build. Collaborate. Grow.</span>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: 3D PANELS & EDITORIAL TEXT */}
        <div className="hidden lg:flex w-[55%] relative h-[500px] items-center justify-end z-10" style={{ perspective: '1400px' }}>
          
          <div className="relative w-full h-full flex items-center justify-end" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Panel 3 (Back) */}
            <div className={`absolute w-[300px] h-[380px] bg-[#100D1D]/60 border border-[rgba(0,229,255,0.2)] flex flex-col justify-center p-10 right-[40px] transition-all duration-1000 ease-out animate-float-panel-3 ${mounted ? 'opacity-55 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transform: 'rotateY(-36deg) translateZ(-150px)', zIndex: 1, transitionDelay: '500ms' }}>
              <div className="text-[16px] tracking-[6px] leading-[2.5] text-[#80D8FF]/40 font-medium">
                TECHNOLOGY<br/>PEOPLE<br/>IDEAS<br/>IMPACT
              </div>
            </div>

            {/* Panel 2 (Middle) */}
            <div className={`absolute w-[300px] h-[400px] bg-[#100D1D] border border-[rgba(0,229,255,0.4)] overflow-hidden right-[90px] transition-all duration-1000 ease-out animate-float-panel-2 ${mounted ? 'opacity-75 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transform: 'rotateY(-24deg) translateZ(-50px)', zIndex: 2, transitionDelay: '350ms' }}>
               <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Audience" className="w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-75 contrast-125" />
               <div className="absolute inset-0 bg-[#002255] mix-blend-overlay opacity-40"></div>
            </div>

            {/* Panel 1 (Front) */}
            <div className={`absolute w-[300px] h-[420px] bg-[#100D1D] border border-[rgba(0,229,255,0.7)] overflow-hidden right-[140px] transition-all duration-1000 ease-out animate-float-panel-1 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transform: 'rotateY(-12deg) translateZ(50px)', zIndex: 3, boxShadow: 'inset 0 0 40px rgba(0,136,255,0.15)', transitionDelay: '200ms' }}>
              <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Presenter" className="w-full h-full object-cover opacity-80 mix-blend-luminosity brightness-90 contrast-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D1D] to-transparent opacity-80"></div>
              <div className="absolute top-[25%] left-8 text-white font-medium text-2xl leading-tight opacity-90 drop-shadow-lg">
                Build<br/>Learn<br/>Connect
              </div>
            </div>
            
            {/* Editorial Typographic Details on far right */}
            <div className={`absolute right-[-40px] flex flex-col justify-center h-full z-10 transition-all duration-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms', transform: 'translateZ(100px)' }}>
              <div className="text-[10px] xl:text-[11px] tracking-[4px] leading-[2.0] text-[#80D8FF] font-medium mb-12">
                TECHNOLOGY<br/>PEOPLE<br/>IDEAS<br/>IMPACT
              </div>
              <div className="flex border-l border-[#80D8FF]/30 pl-[18px]">
                <div className="text-[9px] xl:text-[10px] tracking-[3px] leading-[2.0] text-[#80D8FF] font-medium">
                  A PLATFORM<br/>FOR CURIOUS MINDS
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Calendar Modal Overlay */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-4xl bg-[#110C1A]/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-300 max-h-[90vh] md:max-h-[80vh]">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsCalendarOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Calendar Grid */}
            <div className="p-8 flex-1 border-b md:border-b-0 md:border-r border-white/10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-white">October 2026</h3>
              </div>
              
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-xs font-semibold text-[#8E9CB0] uppercase tracking-wider">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {blanks.map(b => (
                  <div key={`blank-${b}`} className="aspect-square rounded-xl bg-white/[0.01]"></div>
                ))}
                {days.map(d => {
                  // Check if there is an event on this day (Oct 2026)
                  const hasEvent = eventsData.some(e => new Date(e.date).getDate() === d && new Date(e.date).getMonth() === 9);
                  return (
                    <div 
                      key={`day-${d}`} 
                      className={`aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all ${hasEvent ? 'bg-[#00E5FF]/20 border border-[#00E5FF]/50 text-white cursor-pointer hover:bg-[#00E5FF]/30 hover:scale-105 shadow-[0_0_15px_rgba(0,229,255,0.2)]' : 'bg-white/[0.03] text-gray-400 hover:bg-white/10 cursor-default'}`}
                    >
                      {d}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Upcoming Events List */}
            <div className="p-8 w-full md:w-[350px] bg-white/[0.02]">
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00E5FF]" /> Event Details
              </h4>
              <div className="space-y-4">
                {eventsData.filter(e => new Date(e.date).getMonth() === 9).map(e => (
                  <div key={e.slug} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 transition-colors">
                    <div className="text-xs text-[#00E5FF] font-mono mb-2">OCT {new Date(e.date).getDate()}, 2026</div>
                    <h5 className="font-semibold text-white mb-2">{e.title}</h5>
                    <p className="text-sm text-[#8E9CB0] line-clamp-2 mb-4">{e.summary}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
