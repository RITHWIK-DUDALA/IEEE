import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents & Copyright",
  description: "Document usage and copyright policies for the IEEE CS Chapter.",
};

export default function DocumentPolicyPage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-10 max-w-[900px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8F7FC] mb-8">Documents & Copyright</h1>
      
      <div className="space-y-8 text-[#B9B3CC] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Document Usage</h2>
          <p>
            The resources, presentation slides, PDFs, and other materials provided on this website are intended solely for educational purposes and the benefit of our student community.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>You may view and download public documents for personal, educational use.</li>
            <li>You may not modify, distribute, or use these materials for commercial purposes without explicit prior written consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Copyright & Ownership</h2>
          <p>
            All materials published on this website are the property of the IEEE Computer Society Student Chapter, its speakers, or respective copyright holders. Publication on this website does not grant you ownership rights to the content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. External Links and Materials</h2>
          <p>
            Some documents or resources may link to external websites or third-party repositories. We are not responsible for the copyright compliance or content accuracy of external materials.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Reporting Violations</h2>
          <p>
            If you believe any content on this website infringes upon your copyright or contains unauthorized private information, please contact us immediately through our official channels so we can investigate and remove the material if necessary.
          </p>
        </section>
      </div>
    </div>
  );
}
