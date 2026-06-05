import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Contact – Yizhak Bot",
  description: "Get in touch with Yizhak Bot and BQR Reliability Engineering Ltd.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="section-divider" />
      <div className="px-6 py-4 border-b border-divider">
        <p className="text-xs text-text-light">Home &rsaquo; Contact</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-6 min-w-0">
          <h1 className="text-xl font-semibold text-text-main border-b border-divider pb-2 mb-5">
            Contact
          </h1>

          <div className="article-body mb-6">
            <p>
              For questions about reliability engineering, consulting engagements, or BQR
              software, feel free to reach out.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-3 mb-8">
            <div className="flex gap-3 text-sm">
              <span className="text-primary font-medium w-16 shrink-0">Email:</span>
              <a href="mailto:info@bqr.com" className="text-primary hover:underline">
                info@bqr.com
              </a>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="text-primary font-medium w-16 shrink-0">Website:</span>
              <a
                href="https://www.bqr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.bqr.com
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-[38%] shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
