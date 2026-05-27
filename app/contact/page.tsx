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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Initiate a Pilot Extract</h1>
          <p className="text-[#D6D7D9] max-w-xl text-sm leading-relaxed">
            Initial pilot extracts are available at no cost for qualified prime contractors.
            Turnaround on first contact is typically within one business day.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Left: Contact details */}
            <div className="lg:col-span-1">
              <p className="text-xs font-mono tracking-widest uppercase text-[#5B616B] mb-6">
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

              <div className="mt-8 p-5 bg-[#F1F1F1] border border-[#D6D7D9]">
                <p className="text-xs font-mono tracking-widest uppercase text-[#5B616B] mb-3">
                  Response SLA
                </p>
                <div className="space-y-2">
                  {[
                    ["Initial response", "≤ 1 business day"],
                    ["Pilot extract delivery", "4 – 24 hours"],
                    ["Engagement kickoff", "Same week"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-[#5B616B]">{label}</span>
                      <span className="font-mono text-[#112E51] font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <p className="text-xs font-mono tracking-widest uppercase text-[#5B616B] mb-6">
                Engagement Request Form
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
