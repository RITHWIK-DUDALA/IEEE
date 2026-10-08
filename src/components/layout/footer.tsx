import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--color-navy)] text-white py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold font-display text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[var(--color-navy)] rounded-sm flex items-center justify-center text-xs">
              Logo
            </div>
            Organization
          </Link>
          <p className="text-sm text-white/70">
            &copy; {currentYear} Organization Chapter. All rights reserved.
          </p>
        </div>

        {/* Socials & Contact */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:placeholder@example.com"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Contact Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/organization_placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Official Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
