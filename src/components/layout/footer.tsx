import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0912] border-t border-white/5 text-white mt-auto">
      
      {/* Top section */}
      <div className="container mx-auto px-6 py-12 md:py-20 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

          {/* Left: Brand */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/cs.webp" alt="IEEE CS Logo" width={56} height={56} className="w-auto h-10 md:h-12 object-contain" />
              <div className="flex flex-col">
                <span className="text-[10px] leading-none text-[#5C667B] tracking-[2px] uppercase">IEEE</span>
                <span className="text-base font-bold text-[#F8F7FC] tracking-tight leading-tight whitespace-nowrap">Computer Society</span>
              </div>
            </Link>
            <p className="text-sm text-[#8E9CB0] leading-relaxed max-w-sm">
              Advancing computing through community, collaboration and innovation. Empowering students to build a better tomorrow.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.instagram.com/ieee_cs_avv.chn?obrf=MTRreWtndjhhamRpZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#8E9CB0] hover:border-[#B96CFF] hover:text-[#B96CFF] hover:bg-white/[0.06] transition-all"
                aria-label="Official Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle: Join Info (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-4 lg:col-span-4 lg:px-8">
            <span className="text-[10px] tracking-[3px] uppercase text-[#5C667B] font-mono mb-1">Get Involved</span>
            <p className="text-sm text-[#8E9CB0] leading-relaxed pr-6">
              We are a vibrant community of tech enthusiasts. Join our chapter to participate in exclusive hackathons, expert-led workshops, and unparalleled networking events.
            </p>
            <Link href="/team" className="text-sm text-[#B96CFF] hover:text-[#D09BFF] transition-colors mt-1 inline-flex items-center gap-1.5 w-fit">
              Meet our team <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right: Nav links */}
          <div className="md:col-span-6 lg:col-span-4 flex flex-wrap gap-12 sm:gap-16 lg:justify-end">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[3px] uppercase text-[#5C667B] font-mono mb-1">Navigate</span>
              {["Home", "About", "Events", "Team"].map(item => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : item === "About" ? "/#about" : `/${item.toLowerCase()}`}
                  className="text-sm text-[#8E9CB0] hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[3px] uppercase text-[#5C667B] font-mono mb-1">Community</span>
              {["Initiatives", "Resources", "Gallery", "News"].map(item => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-[#8E9CB0] hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left sm:pl-10 md:pl-0">
            <p className="text-xs text-[#5C667B]">
              &copy; {currentYear} IEEE Computer Society Chapter. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-0">
              <Link href="/privacy" className="text-[10px] sm:text-xs text-[#8E9CB0] hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-[#5C667B] text-[10px] hidden sm:inline">•</span>
              <Link href="/terms" className="text-[10px] sm:text-xs text-[#8E9CB0] hover:text-white transition-colors">
                Terms
              </Link>
              <span className="text-[#5C667B] text-[10px] hidden sm:inline">•</span>
              <Link href="/registration-policy" className="text-[10px] sm:text-xs text-[#8E9CB0] hover:text-white transition-colors">
                Registration & Cancellation
              </Link>
              <span className="text-[#5C667B] text-[10px] hidden sm:inline">•</span>
              <Link href="/document-policy" className="text-[10px] sm:text-xs text-[#8E9CB0] hover:text-white transition-colors">
                Documents & Copyright
              </Link>
              <span className="text-[#5C667B] text-[10px] hidden sm:inline">•</span>
              <Link href="/contact" className="text-[10px] sm:text-xs text-[#8E9CB0] hover:text-white transition-colors">
                Contact & Accessibility
              </Link>
            </div>
          </div>
          <Link
            href="/events"
            className="group flex items-center gap-1.5 text-[11px] text-[#B96CFF] hover:text-[#D09BFF] transition-colors font-mono tracking-[2px] uppercase"
          >
            View All Events
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

    </footer>
  );
}
