import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#112E51] text-white">
      {/* Contact band */}
      <div className="border-b border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs text-[#D6D7D9] font-mono tracking-widest uppercase mb-2">
              Section 04 — Contact
            </p>
            <h2 className="text-xl font-bold">Request an Engagement</h2>
            <p className="text-sm text-[#D6D7D9] mt-1">
              No-cost pilot extracts for qualified prime contractors.
            </p>
          </div>
          <a
            href="mailto:colin@civicmas.com?subject=Pilot Extract Request"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#112E51] text-sm font-semibold rounded-sm hover:bg-[#F1F1F1] transition-colors w-fit shrink-0"
          >
            <Mail size={16} />
            colin@civicmas.com
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-1">
              Civic Automation Systems
            </p>
            <p className="text-xs text-[#D6D7D9]">
              © 2026 Civic Media and Automation Systems LLC. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-xs text-[#D6D7D9] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs text-[#D6D7D9] hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
