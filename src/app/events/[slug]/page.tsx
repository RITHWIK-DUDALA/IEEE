import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { eventsData } from "@/data/events";

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Use React.use() here conceptually, but metadata is async in Next 15
  return {
    title: `Event Details | Organization`,
  };
}

export function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const event = eventsData.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  const isUpcoming = event.status === "upcoming";

  return (
    <article className="pb-24">
      {/* Event Header */}
      <div className="bg-[var(--color-navy)] text-white pt-12 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-brand-primary)] opacity-50 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <Link href="/events" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full ${isUpcoming ? 'bg-[var(--color-signal-teal)]/20 text-[var(--color-signal-teal)]' : 'bg-white/10 text-white/60'}`}>
                {isUpcoming ? 'UPCOMING' : 'PAST'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              {event.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {event.summary}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-gray-100 rounded-xl mb-8 flex items-center justify-center border border-[var(--color-border)] overflow-hidden shadow-sm">
              {/* Cover Image Placeholder */}
              <ImageIcon className="text-gray-300 w-16 h-16" />
            </div>

            <div className="prose prose-lg max-w-none text-[var(--color-ink)]">
              <h2 className="text-2xl font-bold font-display text-[var(--color-ink)] mb-4">About this event</h2>
              <p className="mb-8 whitespace-pre-wrap">{event.description}</p>
            </div>

            {/* Agenda */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold font-display text-[var(--color-ink)] mb-6">Agenda</h3>
                <div className="space-y-4">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                      <div className="font-mono text-[var(--color-brand-primary)] font-semibold shrink-0 w-24">
                        {item.time}
                      </div>
                      <div className="text-[var(--color-ink)]">{item.item}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Gallery (Past Events) */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold font-display text-[var(--color-ink)] mb-6">Event Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.gallery.map((img, idx) => (
                    <div key={idx} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                       <ImageIcon className="text-gray-400 w-8 h-8" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold font-display text-[var(--color-ink)] mb-6">Event Details</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-[var(--color-ink-muted)]">
                  <Calendar className="w-5 h-5 shrink-0 text-[var(--color-brand-primary)]" />
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Date</div>
                    <div>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>
                </li>
                <li className="flex gap-3 text-[var(--color-ink-muted)]">
                  <Clock className="w-5 h-5 shrink-0 text-[var(--color-brand-primary)]" />
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Time</div>
                    <div>{new Date(event.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
                  </div>
                </li>
                <li className="flex gap-3 text-[var(--color-ink-muted)]">
                  <MapPin className="w-5 h-5 shrink-0 text-[var(--color-brand-primary)]" />
                  <div>
                    <div className="font-semibold text-[var(--color-ink)]">Location</div>
                    <div>TBD</div>
                  </div>
                </li>
              </ul>

              {isUpcoming && (
                <Button size="lg" className="w-full" asChild>
                  <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
