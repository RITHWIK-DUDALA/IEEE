import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Accessibility",
  description: "Contact information and accessibility commitment for the IEEE CS Chapter.",
};

export default function ContactAccessibilityPage() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-10 max-w-[900px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-[#F8F7FC] mb-8">Contact & Accessibility</h1>
      
      <div className="space-y-8 text-[#B9B3CC] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">1. Contact Us</h2>
          <p>
            If you have questions, concerns, or need to report an issue with the website, please reach out to our official club contact channels:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Email:</strong> (Please refer to the mail icon in the footer for our official email address)</li>
            <li><strong>Social Media:</strong> You can also message us through our official Instagram page linked in the footer.</li>
          </ul>
          <p className="mt-4">
            We strive to respond to all inquiries within a reasonable timeframe. Please avoid using personal phone numbers of committee members for official club inquiries.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">2. Accessibility Commitment</h2>
          <p>
            The IEEE Computer Society Student Chapter is committed to ensuring digital accessibility for all users, including those with disabilities. We are continuously improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">3. Accessibility Features</h2>
          <p>
            Our website is designed with the following accessibility guidelines in mind:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Keyboard-navigable interfaces.</li>
            <li>Semantic HTML markup for screen readers.</li>
            <li>Appropriate color contrast for text readability.</li>
            <li>Descriptive alt text for significant images.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">4. Reporting Accessibility Issues</h2>
          <p>
            If you encounter any accessibility barriers on our website, please contact us immediately. Your feedback is vital to helping us improve access for all students.
          </p>
        </section>
      </div>
    </div>
  );
}
