"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function EventsNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center w-full" style={{ height: "clamp(72px, 6.3vw, 104px)", backgroundColor: "rgba(9, 8, 17, 0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(180, 150, 220, 0.12)" }}>
      <div className="w-full max-w-[1560px] mx-auto px-6 md:px-[60px] xl:px-[40px] h-full flex items-center justify-between relative z-10">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image src="/cs.webp" alt="IEEE CS Logo" width={56} height={56} className="w-auto h-10 md:h-14 object-contain" />
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] leading-none text-gray-400 tracking-[2px] uppercase">IEEE</span>
              <span className="text-[13px] md:text-[14px] leading-tight font-semibold text-white whitespace-nowrap">Computer Society</span>
            </div>
          </Link>
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

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>
    </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0B0912]/95 backdrop-blur-md flex flex-col pt-32 px-6 lg:hidden animate-in fade-in duration-200">
          <button 
            className="absolute top-6 right-6 text-white p-2 z-[70]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col gap-8 items-center text-center mt-12">
            {["Home", "About", "Events", "Initiatives", "Resources", "Team"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : item === "About" ? "/#about" : `/${item.toLowerCase()}`}
                className="text-3xl font-medium text-white hover:text-[#C58AFF] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/events" 
              className="mt-8 flex items-center justify-center px-10 h-[64px] rounded-[20px] bg-[#A96CF4] text-white text-[18px] font-semibold transition-all hover:bg-[#D3A4FF] hover:text-[#171020]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
