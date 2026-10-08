import { Image as ImageIcon } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/instagram-icon";
import { teamData } from "@/data/team";

export const metadata = {
  title: "Team | Organization",
  description: "Meet the team behind the Organization chapter.",
};

export default function TeamPage() {
  const facultyAdvisor = teamData.find(m => m.isFacultyAdvisor);
  const coreTeam = teamData.filter(m => !m.isFacultyAdvisor);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mb-16 text-center mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-[var(--color-ink)] mb-6">Our Team</h1>
        <p className="text-xl text-[var(--color-ink-muted)]">
          The dedicated individuals working behind the scenes to bring you the best experience, events, and opportunities.
        </p>
      </div>

      {facultyAdvisor && (
        <section className="mb-20">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold font-display text-[var(--color-ink)] mb-8">Faculty Advisor</h2>
            <div className="bg-[var(--color-bg)] rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <ImageIcon className="text-gray-400 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold">{facultyAdvisor.name}</h3>
              <p className="text-[var(--color-signal-teal)] font-mono mt-2">{facultyAdvisor.role}</p>
            </div>
          </div>
        </section>
      )}

      <section>
        <h2 className="text-3xl font-bold font-display text-[var(--color-ink)] mb-12 text-center">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                <ImageIcon className="text-gray-400 w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-[var(--color-brand-primary)] font-mono text-sm mb-4">{member.role}</p>
              
              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto p-2 text-gray-400 hover:text-[var(--color-ink)] hover:bg-gray-50 rounded-full transition-colors"
                  aria-label={`${member.name}'s Instagram`}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
