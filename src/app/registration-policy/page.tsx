import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration & Cancellation",
  description: "Event registration and cancellation policies for the IEEE CS Chapter.",
};

export default function RegistrationPolicyPage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-10 max-w-[900px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8F7FC] mb-8">Event Registration & Cancellation</h1>
      
      <div className="space-y-8 text-[#B9B3CC] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Registration Process</h2>
          <p>
            All registrations for IEEE Computer Society events are handled through official Microsoft Forms links provided on our website. Registration statuses (Open, Closed, or Coming Soon) are clearly indicated on our Events page.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Submitting a form does not guarantee a spot if the event has limited capacity, unless explicitly stated otherwise.</li>
            <li>Please ensure you provide accurate contact information so we can reach you with event updates.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility</h2>
          <p>
            Event eligibility is specified on the registration form. Some events may be restricted to specific students, members, or academic years. We reserve the right to verify eligibility and cancel registrations that do not meet the criteria.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Cancellation & Attendance</h2>
          <p>
            If you have registered for an event but can no longer attend, we kindly ask that you notify us as soon as possible through our official contact channels. This allows us to offer your spot to students on the waitlist.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Event Changes</h2>
          <p>
            We reserve the right to modify event dates, times, venues, or agendas. In the event of a significant change or cancellation, we will notify registered attendees using the contact information provided during registration.
          </p>
        </section>
      </div>
    </div>
  );
}
