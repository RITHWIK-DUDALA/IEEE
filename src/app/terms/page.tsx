import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the IEEE CS Chapter website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-10 max-w-[900px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8F7FC] mb-8">Terms of Use</h1>
      
      <div className="space-y-8 text-[#B9B3CC] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the IEEE Computer Society Student Chapter website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Website</h2>
          <p>
            This website serves as a public, read-only landing page for our student chapter. You may use the site to view information about our events, team, and resources. You agree not to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Attempt to gain unauthorized access to any portion of the website.</li>
            <li>Use the website for any unlawful purpose.</li>
            <li>Interfere with or disrupt the operation of the website.</li>
            <li>Use automated scripts or scrapers to collect information from the website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
          <p>
            The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. Unless explicitly stated otherwise, you may not reproduce, download, transmit or retransmit any part of this website without prior permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Links</h2>
          <p>
            Our website contains links to third-party websites (such as Microsoft Forms for event registration and social media platforms). We are not responsible for the content, privacy policies, or practices of any third-party websites.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">5. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will take effect immediately upon posting to the website.
          </p>
        </section>
      </div>
    </div>
  );
}
