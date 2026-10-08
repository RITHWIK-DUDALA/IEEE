"use client";

import React, { useRef } from 'react';
import LaserFlow from './LaserFlow';

export default function EventsHero() {
  const revealImgRef = useRef<HTMLImageElement>(null);

  return (
    <div 
      className="relative overflow-hidden bg-[#120F17] w-full h-screen mb-12"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#CF9EFF"
        horizontalSizing={0.5}
        verticalSizing={2}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
      />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[86%] h-[70%] md:h-[60%] bg-[#120F17] rounded-[20px] border-2 border-[#FF79C6] flex flex-col items-center justify-center text-white text-center z-[6] p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">Discover Events</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Join us for tech talks, hackathons, and workshops designed to help you learn and grow.
        </p>
      </div>

      <img
        ref={revealImgRef}
        src="/hero.jpg"
        alt="Reveal effect"
        className="absolute w-full h-full object-cover top-0 left-0 z-[5] pointer-events-none opacity-30 mix-blend-lighten"
        style={{
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties}
      />
    </div>
  );
}
