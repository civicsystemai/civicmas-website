import type { Metadata } from "next";
import { Mail, MapPin, Award } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Civic Automation Systems",
  description: "Initiate a pilot extract engagement with Civic Automation Systems.",
};

export default function Contact() {
  return (
    <PageLayout>
      {/* Page header */}
      <div className="bg-[#112E51] text-white px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9] mb-3">
            Civic Automation Systems — Engagement Intake
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Initiate a Pilot Extract</h1>
          <p className="text-[#D6D7D9] max-w-xl text-sm leading-relaxed text-pretty">
            Initial pilot extracts are available at no cost for qualified prime contractors.
            Turnaround on first contact is typically within one business&nbsp;day.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: Contact details */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <p className="text-xs font-mono tracking-widest uppercase text-[#5B616B]">
                Primary Point of Contact
              </p>

              <div className="border border-[#D6D7D9] divide-y divide-[#D6D7D9]">
                <div className="p-5">
                  <p className="font-bold text-[#112E51] text-base">Colin Davis</p>
                  <p className="text-sm text-[#5B616B] mt-1">Principal</p>
                </div>

                <div className="p-5 flex items-start gap-3">
                  <Mail size={15} className="text-[#5B616B] mt-0.5 shrink-0" />
                  <a
                    href="mailto:colin@civicmas.com"
                    className="text-sm text-[#112E51] font-mono hover:underline break-all"
                  >
                    colin@civicmas.com
                  </a>
                </div>

                <div className="p-5 flex items-start gap-3">
                  <Award size={15} className="text-[#5B616B] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-[#212121]">Civic Automation Systems</p>
                    <p className="text-xs text-[#5B616B] mt-0.5">A HUBZone Certified Firm (SBA)</p>
                  </div>
                </div>

                <div className="p-5 flex items-start gap-3">
                  <MapPin size={15} className="text-[#5B616B] mt-0.5 shrink-0" />
                  <p className="text-sm text-[#5B616B]">
                    HUBZone Designated Area<br />United States
                  </p>
                </div>
              </div>

              <div className="border border-[#D6D7D9]">
                <div className="bg-[#112E51] px-5 py-3">
                  <p className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9]">
                    Response SLA
                  </p>
                </div>
                <div className="divide-y divide-[#D6D7D9]">
                  {[
                    ["Initial response", "≤ 1 business day"],
                    ["Pilot extract delivery", "4 – 24 hours"],
                    ["Engagement kickoff", "Same week"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between px-5 py-3 text-sm">
                      <span className="text-[#5B616B]">{label}</span>
                      <span className="font-mono text-[#112E51] font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <p className="text-xs font-mono tracking-widest uppercase text-[#5B616B]">
                Engagement Request Form
              </p>
              <div className="border border-[#D6D7D9] p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
