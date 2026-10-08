"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-6 left-0 w-full z-50 flex items-center justify-center h-[72px] lg:h-[80px]" style={{ backgroundColor: 'transparent' }}>
      <div className="w-full max-w-[1400px] h-full px-6 md:px-10 flex items-center justify-between relative z-10">
        
        {/* Left: Logos */}
        <div className="flex items-center gap-5 relative">
          <div className="flex items-center gap-4">
            {/* Logo Placeholder */}
            <div className="text-[#F8F7FC] font-bold text-3xl tracking-tighter flex items-center gap-1.5">
              <div className="grid grid-cols-2 gap-[3px] w-[26px] h-[26px] rotate-45 mr-1.5">
                <div className="bg-[#F8F7FC]"></div><div className="bg-[#F8F7FC]"></div>
                <div className="bg-[#F8F7FC]"></div><div className="bg-[#F8F7FC]"></div>
              </div>
              Logo
            </div>
            
            {/* Vertical Divider */}
            <div className="w-[1px] h-[36px] bg-white/20"></div>
            
            {/* CS Logo Placeholder */}
            <div className="flex flex-col justify-center">
              <div className="text-[#F8F7FC] font-medium text-base flex items-center leading-tight">
                <span className="text-2xl mr-2.5 font-serif border-2 border-[#F8F7FC] rounded-full w-8 h-8 flex items-center justify-center">Φ</span>
                <div className="flex flex-col">
                  <span className="text-[11px] leading-none text-[#B9B3CC] mb-[1px]">Logo</span>
                  <span className="text-[17px] leading-none">organization</span>
                </div>
              </div>
            </div>
          </div>
          {/* Subtext below logo */}
          <div className="hidden xl:block absolute -bottom-7 left-1 text-[9px] tracking-[1.5px] text-[#B9B3CC] uppercase whitespace-nowrap">
            AMRITA VISHWA VIDYAPEETHAM, CHENNAI
          </div>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {["Home", "About", "Events", "Initiatives", "Resources", "Team"].map((item) => {
            const isActive = item === "Home";
            return (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : item === "About" ? "/#about" : `/${item.toLowerCase()}`}
                className={`relative text-[14px] font-medium transition-colors ${isActive ? 'text-[#F8F7FC]' : 'text-[#B9B3CC] hover:text-[#F8F7FC]'}`}
              >
                {item}
                {isActive && (
                  <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-[32px] h-[2px] bg-[#B96CFF]" style={{ boxShadow: "0 0 10px 1px rgba(185, 108, 255, 0.5)" }}></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/join" className="group flex items-center justify-center px-6 h-[48px] rounded-full border border-white/20 bg-transparent text-[14px] font-medium text-[#F8F7FC] transition-all duration-[220ms] ease-in-out hover:bg-white/5 hover:border-white/40">
            Join Us 
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1 group-hover:-translate-y-[2px]" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden text-[#F8F7FC] p-2">
          <Menu className="w-6 h-6" />
        </button>

      </div>
    </header>
  );
}
