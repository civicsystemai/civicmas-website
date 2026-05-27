"use client";

import { toast } from "sonner";

export default function Navbar() {
  function handlePortalLogin() {
    toast.info("System Offline — Portal Coming Q3 2026", {
      description: "Contact colin@civicmas.com to request early access.",
      duration: 5000,
    });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#D6D7D9]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-[#112E51] font-bold text-sm tracking-widest uppercase select-none"
        >
          Civic Automation Systems
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="/capabilities"
            className="text-[#5B616B] text-sm font-medium hover:text-[#112E51] transition-colors"
          >
            Capabilities
          </a>
          <a
            href="/infrastructure"
            className="text-[#5B616B] text-sm font-medium hover:text-[#112E51] transition-colors"
          >
            Infrastructure
          </a>
          <a
            href="/contact"
            className="text-[#5B616B] text-sm font-medium hover:text-[#112E51] transition-colors"
          >
            Contact
          </a>
          <button
            onClick={handlePortalLogin}
            className="px-4 py-1.5 border border-[#112E51] text-[#112E51] text-sm font-medium rounded-sm hover:bg-[#112E51] hover:text-white transition-colors cursor-pointer"
          >
            Portal Login
          </button>
        </div>

        {/* Mobile: portal login only */}
        <button
          onClick={handlePortalLogin}
          className="md:hidden px-3 py-1.5 border border-[#112E51] text-[#112E51] text-xs font-medium rounded-sm cursor-pointer"
        >
          Portal Login
        </button>
      </nav>
    </header>
  );
}
