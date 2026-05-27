"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handlePortalLogin() {
    setOpen(false);
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#5B616B] text-sm font-medium hover:text-[#112E51] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handlePortalLogin}
            className="px-4 py-1.5 border border-[#112E51] text-[#112E51] text-sm font-medium rounded-sm hover:bg-[#112E51] hover:text-white transition-colors cursor-pointer"
          >
            Portal Login
          </button>
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-[#112E51]"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#D6D7D9]">
          <div className="px-6 py-4 flex flex-col divide-y divide-[#D6D7D9]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-[#5B616B] hover:text-[#112E51] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-1">
              <button
                onClick={handlePortalLogin}
                className="w-full px-4 py-2.5 border border-[#112E51] text-[#112E51] text-sm font-medium rounded-sm hover:bg-[#112E51] hover:text-white transition-colors cursor-pointer"
              >
                Portal Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
