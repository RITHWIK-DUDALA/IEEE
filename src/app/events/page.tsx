import Link from "next/link";
import { Image as ImageIcon, Calendar } from "lucide-react";
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

  const EventCard = ({ event }: { event: typeof eventsData[0] }) => (
    <Card className="flex flex-col h-full overflow-hidden hover:border-[var(--color-brand-primary)] transition-colors">
      <div className="aspect-video bg-gray-100 relative flex items-center justify-center border-b border-[var(--color-border)]">
        <ImageIcon className="text-gray-300 w-10 h-10" />
      </div>
      <CardHeader>
        <div className="flex items-center text-xs font-mono font-semibold text-[var(--color-signal-teal)] mb-2">
          <Calendar className="w-3 h-3 mr-1" />
          {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
        <CardTitle className="text-xl line-clamp-2">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-[var(--color-ink-muted)] line-clamp-3">{event.summary}</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/events/${event.slug}`}>Event Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="w-full h-screen relative overflow-hidden bg-[#08070F]">
      <EventsNavbar />
      <EventsHeroFull />
    </div>
  );
}
