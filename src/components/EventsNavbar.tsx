"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

export default function EventsNavbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center w-full" style={{ height: "clamp(72px, 6.3vw, 104px)", backgroundColor: "rgba(9, 8, 17, 0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(180, 150, 220, 0.12)" }}>
      <div className="w-full max-w-[1560px] mx-auto px-6 md:px-[60px] xl:px-[40px] h-full flex items-center justify-between relative z-10">
        
        {/* Left: Logos */}
        <div className="flex items-center gap-4 relative">
          <div className="flex items-center gap-4 h-[40px]">
            {/* Logo Placeholder */}
            <div className="text-white font-bold text-2xl tracking-tighter flex items-center gap-1">
              <div className="grid grid-cols-2 gap-[2px] w-5 h-5 rotate-45 mr-1">
                <div className="bg-white"></div><div className="bg-white"></div>
                <div className="bg-white"></div><div className="bg-white"></div>
              </div>
              Logo
            </div>
            
            {/* Vertical Divider */}
            <div className="w-[1px] h-full bg-white/20"></div>
            
            {/* CS Logo Placeholder */}
            <div className="flex flex-col justify-center">
              <div className="text-white font-medium text-sm flex items-center leading-tight">
                <span className="text-xl mr-2 font-serif border border-white rounded-full w-6 h-6 flex items-center justify-center">Φ</span>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-none text-gray-300">Logo</span>
                  <span className="text-[14px] leading-none">organization</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -bottom-5 left-0 text-[7px] tracking-[1px] text-[#B3AEC7] uppercase whitespace-nowrap">
            AMRITA VISHWA VIDYAPEETHAM, CHENNAI
          </div>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-[44px] xl:gap-[52px]">
          {["Home", "About", "Events", "Initiatives", "Resources", "Team"].map((item) => {
            const isActive = item === "Events";
            return (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : item === "About" ? "/#about" : `/${item.toLowerCase()}`}
                className={`relative text-[14px] xl:text-[15px] font-medium transition-colors ${isActive ? 'text-white' : 'text-[#D6D1E3] hover:text-white'}`}
              >
                {item}
                {isActive && (
                  <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-[48px] h-[2px] bg-[#C58AFF]" style={{ boxShadow: "0 0 12px 2px rgba(197, 138, 255, 0.4)" }}></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/join" className="group flex items-center justify-center w-[150px] h-[60px] rounded-[17px] border border-[#A96CF4] bg-transparent text-[15px] font-medium text-white transition-all duration-[220ms] ease-in-out hover:bg-[rgba(178,105,255,0.12)] hover:border-[#D3A4FF]" style={{ boxShadow: "0 0 15px rgba(169, 108, 244, 0.15)" }}>
            Join Us 
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>

      </div>
    </header>
  );
}
