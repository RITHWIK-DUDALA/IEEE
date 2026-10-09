import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { eventsData } from "@/data/events";
import EventsHeroFull from "@/components/EventsHeroFull";
import EventsNavbar from "@/components/EventsNavbar";

export const metadata = {
  title: "Events | Organization",
  description: "Upcoming and past events hosted by the Organization.",
};

export default function EventsPage() {
  const upcomingEvents = eventsData.filter(e => e.status === "upcoming").sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents = eventsData.filter(e => e.status === "past").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const EventCard = ({ event, isFeatured }: { event: typeof eventsData[0], isFeatured?: boolean }) => (
    <div className={`flex flex-col h-full overflow-hidden bg-[#0d0d0d] border border-[#222] rounded-xl hover:border-[#00E5FF]/40 transition-colors group ${isFeatured ? 'md:flex-row' : ''}`}>
      <div className={`${isFeatured ? 'md:w-2/5 aspect-video md:aspect-auto' : 'aspect-video'} bg-[#161616] relative flex items-center justify-center border-b ${isFeatured ? 'md:border-b-0 md:border-r' : ''} border-[#222] min-h-[200px] overflow-hidden`}>
        <ImageIcon className="text-[#333] w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className={`p-6 md:p-8 flex flex-col flex-1 ${isFeatured ? 'justify-center' : ''}`}>
        <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
          <div className="flex items-center text-[10px] md:text-[11px] font-mono tracking-widest uppercase text-[#00E5FF]">
            <Calendar className="w-3.5 h-3.5 mr-2" />
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold tracking-wider text-[#171020] bg-gradient-to-r from-[#00E5FF] to-[#0088FF] uppercase">
            IEEE CS × IEEE CIS
          </div>
        </div>
        <h3 className={`font-semibold text-white mb-3 md:mb-4 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl line-clamp-2'}`}>{event.title}</h3>
        
        {event.slug === 'nexora-hackathon' && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 w-fit relative z-10">
            <div className="flex items-center gap-3 relative">
              {/* Yellow backlighting for CS */}
              <div className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFB800] opacity-20 blur-xl rounded-full -z-10"></div>
              <Image src="/cs.webp" alt="IEEE CS" width={40} height={40} className="w-8 h-auto object-contain relative z-10" />
              <span className="text-xs md:text-sm text-gray-300 font-medium leading-tight relative z-10">IEEE Computer<br/>Society</span>
            </div>
            <span className="hidden sm:inline-block text-[#555] font-light text-lg">×</span>
            <div className="flex items-center gap-3 relative">
              {/* Blue backlighting for CIS */}
              <div className="absolute top-1/2 left-4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00AEEF] opacity-20 blur-xl rounded-full -z-10"></div>
              <Image src="/ciis%20final.webp" alt="IEEE CIS" width={40} height={40} className="w-8 h-auto object-contain relative z-10" />
              <span className="text-xs md:text-sm text-gray-300 font-medium leading-tight relative z-10">IEEE Computational<br/>Intelligence Society</span>
            </div>
          </div>
        )}

        <p className={`text-[#8E9CB0] leading-relaxed mb-8 flex-1 ${isFeatured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'}`}>{isFeatured ? event.description : event.summary}</p>
        
        <Link href={`/events/${event.slug}`} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#00E5FF] border border-[#00E5FF] text-sm font-medium text-[#171020] hover:bg-[#80D8FF] hover:border-[#80D8FF] transition-all w-fit">
          View Event <ArrowRight className="w-4 h-4 ml-1.5 transition-transform" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="w-full relative min-h-screen">
      <EventsHeroFull />
      
      {/* CONNECTED SCROLL PANEL WRAPPER */}
      <div id="events-section" className="relative w-[95%] md:w-[90%] mx-auto z-[5] rounded-t-[32px] md:rounded-t-[52px] border-t border-l border-r border-[rgba(0,136,255,0.8)] bg-[rgba(14,11,25,0.92)] -mt-6 md:-mt-[120px] pt-12 pb-24 px-6 md:px-12"
           style={{ backgroundImage: 'radial-gradient(circle, rgba(0,136,255,0.22) 1.5px, transparent 1.5px)', backgroundSize: '45px 45px', backgroundPosition: 'center top' }}>
        
        {/* Horizontal Flare on intersection */}
        <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[4px] bg-[radial-gradient(ellipse_at_center,#E0FFFF_0%,rgba(0,136,255,0.8)_20%,transparent_70%)] blur-[2px] opacity-90 animate-flare-pulse pointer-events-none"></div>
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[80px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.25)_0%,transparent_60%)] pointer-events-none animate-flare-pulse"></div>

        <div className="container mx-auto relative z-10 max-w-5xl mt-12">
          {upcomingEvents.length > 0 && (
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-white mb-10 tracking-tight flex items-center gap-3">
                <span className="w-2 h-8 bg-[#00E5FF] rounded-full inline-block"></span>
                Upcoming Events
              </h2>
              <div className="flex flex-col gap-6">
                {/* First event is always featured */}
                <EventCard event={upcomingEvents[0]} isFeatured={true} />
                
                {/* Remaining events in a grid */}
                {upcomingEvents.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-2">
                    {upcomingEvents.slice(1).map(event => (
                      <EventCard key={event.slug} event={event} isFeatured={false} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {pastEvents.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-10 tracking-tight flex items-center gap-3">
                <span className="w-2 h-8 bg-[#222] rounded-full inline-block"></span>
                Past Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
                {pastEvents.map(event => <EventCard key={event.slug} event={event} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
