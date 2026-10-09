"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center h-[68px] lg:h-[76px] transition-all duration-300 ${scrolled ? 'bg-[#0B0912]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="w-full max-w-[1400px] h-full px-6 md:px-10 flex items-center justify-between relative z-10">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image src="/cs.webp" alt="IEEE CS Logo" width={56} height={56} className="w-auto h-10 md:h-14 object-contain" />
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[10px] leading-none text-[#B9B3CC] tracking-[2px] uppercase">IEEE</span>
              <span className="text-[13px] md:text-[15px] leading-tight font-semibold text-[#F8F7FC] whitespace-nowrap">Computer Society</span>
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {["Home", "About", "Events", "Resources", "Team"].map((item) => {
            const itemPath = item === "Home" ? "/" : item === "About" ? "/#about" : `/${item.toLowerCase()}`;
            const isActive = pathname === itemPath || (pathname.startsWith(itemPath) && itemPath !== "/");
            return (
              <Link 
                key={item} 
                href={itemPath}
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

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-[#F8F7FC] p-2 z-50 relative"
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
            {["Home", "About", "Events", "Resources", "Team"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : item === "About" ? "/#about" : `/${item.toLowerCase()}`}
                className="text-3xl font-medium text-[#F8F7FC] hover:text-[#B96CFF] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/events" 
              className="mt-8 flex items-center justify-center px-10 h-[64px] rounded-[20px] bg-[#B96CFF] text-[#171020] text-[18px] font-semibold transition-all hover:bg-[#D09BFF]"
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
