import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data collection details for the IEEE CS Chapter.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-10 max-w-[900px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8F7FC] mb-8">Privacy Policy</h1>
      
      <div className="space-y-8 text-[#B9B3CC] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
          <p>
            Welcome to the IEEE Computer Society Student Chapter website. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or register for our events. Our primary goal is to ensure your privacy while providing accurate information about our activities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl text-[#F8F7FC] mb-2 mt-4">Website Usage Data</h3>
          <p>
            Our website is designed as a public, read-only landing page. We do not use intrusive third-party trackers or advertising scripts. Basic anonymous analytics may be collected to ensure the website functions correctly and to monitor traffic.
          </p>
          
          <h3 className="text-xl text-[#F8F7FC] mb-2 mt-4">Event Registration via Microsoft Forms</h3>
          <p>
            We handle all event registrations securely through Microsoft Forms. When you register for an event, we only ask for the necessary details required to facilitate your attendance. These responses are stored securely within our institutional Microsoft accounts and are only accessible by authorized committee members. We do not store this registration data directly on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Your Information</h2>
          <p>
            Any information collected through Microsoft Forms is strictly used for the following purposes:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Managing event registrations, waitlists, and attendance.</li>
            <li>Communicating event updates, cancellations, or required materials.</li>
            <li>Complying with institutional or IEEE reporting requirements (in an aggregated, anonymized format where possible).</li>
          </ul>
          <p className="mt-4">
            We will never sell your data, use it for targeted advertising, or share it with unauthorized third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Committee Member Information</h2>
          <p>
            The names, roles, and photographs of our committee members are published on this website strictly with their explicit prior consent. This information is provided to facilitate official club communication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, or if you wish to inquire about the data we have collected, please contact the chapter through our official channels provided on the Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
