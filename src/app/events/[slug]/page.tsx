"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import CrystalizedBall from "./CrystalizedBall";
import { eventsData } from "@/data/events";
import EventChatbot from "@/components/EventChatbot";
import { safeRulebookText } from "@/data/rulebook";
import TechText from "@/components/TechText";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-2 sm:gap-4 mt-8 mb-4 p-4 sm:p-6 bg-white/[0.02] border border-[#00E5FF]/20 rounded-2xl w-full sm:w-fit max-w-full items-center justify-between sm:justify-start">
      <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
        <div className="text-2xl sm:text-3xl font-bold text-[#00E5FF]">{timeLeft.days}</div>
        <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-1">Days</div>
      </div>
      <div className="text-xl sm:text-2xl text-[#00E5FF]/40 font-light mb-4 sm:mb-4">:</div>
      <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
        <div className="text-2xl sm:text-3xl font-bold text-[#00E5FF]">{timeLeft.hours}</div>
        <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-1">Hours</div>
      </div>
      <div className="text-xl sm:text-2xl text-[#00E5FF]/40 font-light mb-4 sm:mb-4">:</div>
      <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
        <div className="text-2xl sm:text-3xl font-bold text-[#00E5FF]">{timeLeft.minutes}</div>
        <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-1">Mins</div>
      </div>
      <div className="text-xl sm:text-2xl text-[#00E5FF]/40 font-light mb-4 sm:mb-4">:</div>
      <div className="flex flex-col items-center min-w-[45px] sm:min-w-[60px]">
        <div className="text-2xl sm:text-3xl font-bold text-[#00E5FF]">{timeLeft.seconds}</div>
        <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest mt-1">Secs</div>
      </div>
    </div>
  );
};

export default function EventDetailedPage() {
  const params = useParams();
  const slug = params.slug as string;
  const event = eventsData.find(e => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <Link href="/events" className="text-[#00E5FF] hover:underline">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[#0A0910]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <Link href="/events" className="inline-flex items-center text-sm font-medium text-[#00E5FF] hover:text-[#80D8FF] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Event Details */}
          <div className="flex flex-col lg:col-span-7 pt-4">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center text-[#00E5FF] text-sm font-semibold tracking-wider uppercase">
                <Calendar className="w-4 h-4 mr-2" /> {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-1.5" /> 9:00 AM - 4:00 PM
              </span>
            </div>

            {event.slug === 'nexora-hackathon' ? (
              <div style={{ width: '100%', height: '180px', position: 'relative', marginTop: '-20px', marginBottom: '20px' }}>
                <TechText
                  text="NEXORA"
                  fontWeight={800}
                  fontSize={100}
                  reveal="letter"
                  dashLength={4}
                  dashGap={2}
                  specks={15}
                  fontFamily=""
                  color="#ffffff"
                  accentColor="#00E5FF"
                  letterSpacing={-0.05}
                  reach={200}
                  softness={0.7}
                  strokeWidth={1.5}
                  speed={1}
                  lineStyle="dashed"
                  selection
                  labels
                  draggable
                  sweep
                  style={{}}
                />
              </div>
            ) : (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
                {event.title}
              </h1>
            )}

            {event.slug === 'nexora-hackathon' && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 w-fit relative z-10">
                <div className="flex items-center gap-3 relative">
                  <div className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFB800] opacity-20 blur-xl rounded-full -z-10"></div>
                  <Image src="/cs.webp" alt="IEEE CS" width={40} height={40} className="w-8 h-auto object-contain relative z-10" />
                  <span className="text-xs md:text-sm text-gray-300 font-medium leading-tight relative z-10">IEEE Computer<br/>Society</span>
                </div>
                <span className="hidden sm:inline-block text-[#555] font-light text-lg">×</span>
                <div className="flex items-center gap-3 relative">
                  <div className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00AEEF] opacity-20 blur-xl rounded-full -z-10"></div>
                  <Image src="/ciis%20final.webp" alt="IEEE CIS" width={40} height={40} className="w-8 h-auto object-contain relative z-10" />
                  <span className="text-xs md:text-sm text-gray-300 font-medium leading-tight relative z-10">IEEE Computational<br/>Intelligence Society</span>
                </div>
              </div>
            )}

            <div className="prose prose-invert prose-p:text-[#8E9CB0] prose-p:leading-relaxed prose-p:text-lg mb-10">
              <p className="whitespace-pre-wrap">{event.description || event.summary}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href={event.registrationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 rounded-full bg-[#00E5FF] text-[#171020] font-semibold hover:bg-[#80D8FF] transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)] inline-block text-center"
              >
                Register Now
              </a>
            </div>

            <CountdownTimer targetDate={event.slug === 'nexora-hackathon' ? '2026-10-14T09:00:00' : '2026-10-15T09:00:00'} />
          </div>

          {/* Right Column: Crystalized Ball Component & Chatbot */}
          <div className="relative flex flex-col items-center lg:col-span-5 lg:sticky lg:top-24 h-[calc(100vh-8rem)]">
            <div className="w-full max-w-[400px] h-[250px] lg:h-[350px] relative shrink-0 animate-continuous-hue">
              <CrystalizedBall
                preset="plasma"
                color="#6366F1"
                size={0.7}
                crackle={0.85}
                fill={0.5}
                interactive
                hoverStrength={0.7}
                strands={6}
                flares={0.65}
                glow={0.9}
                sparks={0.6}
                particleCount={15000}
                motion="rise"
                particleShape="square"
                depth={0.6}
                sway={0.5}
                twinkle={0.5}
                haze={0.7}
                dustSpeed={1}
                speed={1}
                intro
                paused={false}
              />
            </div>
            {/* Interactive Chatbot */}
            <div className="w-full">
              <EventChatbot rulebookText={safeRulebookText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
