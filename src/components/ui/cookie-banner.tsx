"use client";

import React, { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing slightly for a better entrance effect
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
    // Here you would typically initialize analytics/tracking
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
    // Ensure tracking scripts remain disabled
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B0912]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div 
        className="relative max-w-[500px] w-full bg-white border border-gray-100 rounded-2xl p-8 shadow-2xl flex flex-col gap-6 items-center text-center animate-in zoom-in-95 duration-300"
        style={{
          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2), 0 0 20px 2px rgba(185, 108, 255, 0.1)"
        }}
      >
        
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-[#B96CFF]/10 flex items-center justify-center border border-[#B96CFF]/20">
          <ShieldCheck className="w-6 h-6 text-[#B96CFF]" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold text-gray-900 text-xl">Your Privacy Choices</h3>
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies.
            <br />
            <Link href="/privacy" className="text-[#B96CFF] hover:text-[#9c4be8] underline underline-offset-2 transition-colors mt-2 inline-block font-medium">
              Read our Privacy Policy
            </Link>
          </p>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col gap-3 mt-2">
          <button
            onClick={handleAcceptAll}
            className="w-full py-3 rounded-xl bg-[#B96CFF] text-white text-sm font-semibold hover:bg-[#a555ee] hover:shadow-[0_0_15px_rgba(185,108,255,0.3)] transition-all"
          >
            Accept All
          </button>
          <button
            onClick={handleEssentialOnly}
            className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 bg-gray-50 text-sm font-medium hover:bg-gray-100 transition-all"
          >
            Essential Only
          </button>
        </div>
        
        <button 
          onClick={handleEssentialOnly}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
}
