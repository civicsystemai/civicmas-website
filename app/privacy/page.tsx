import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Civic Automation Systems",
  description: "Privacy Policy for Civic Automation Systems — Civic Media and Automation Systems LLC.",
};

const sections = [
  {
    num: "1.",
    title: "Overview",
    body: `This Privacy Policy describes how Civic Media and Automation Systems LLC, doing business as Civic Automation Systems ("Company," "we," "us," or "our"), collects, uses, and protects information in connection with our services. As a federal subcontractor and HUBZone-certified firm operating within the U.S. government acquisition ecosystem, data isolation and non-disclosure are foundational to our operating methodology, not merely a policy commitment.

This Policy applies to information collected through our website (civicmas.com) and through our professional service engagements.`,
  },
  {
    num: "2.",
    title: "Information We Collect",
    body: `We collect only the minimum information necessary to deliver our services and maintain contact with clients.

Website visitors: We may collect standard server log data (IP address, browser type, pages visited, referral source) for operational and security purposes. We do not deploy behavioral tracking cookies or cross-site advertising technologies.

Engagement clients: We collect business contact information (name, company, email address) and engagement-specific documents furnished by the client (e.g., public RFP solicitations, labor rate cards) solely for the purpose of performing contracted deliverables.

We do not collect personal financial information, Social Security Numbers, or any information protected under the Privacy Act of 1974.`,
  },
  {
    num: "3.",
    title: "How We Use Information",
    body: `Information collected is used exclusively to:

— Deliver contracted extraction, normalization, and analysis deliverables;
— Communicate with clients regarding engagement status, deliverables, and billing;
— Maintain records required for federal contracting compliance (e.g., SAM.gov registration obligations);
— Operate and improve our website infrastructure.

We do not use client-furnished acquisition documents to train, fine-tune, or evaluate any commercial large language model (LLM) or third-party artificial intelligence system.`,
  },
  {
    num: "4.",
    title: "Data Isolation & Non-Disclosure",
    body: `As a subcontractor operating within federal procurement environments, we maintain strict data isolation practices. Client-furnished documents are processed in isolated, stateless local environments and are not co-mingled with other client data. Engagement data is purged upon client confirmation of deliverable receipt unless a longer retention period is required by law or agreed to in writing.

We do not disclose client information, engagement scope, or deliverable contents to any third party without prior written authorization from the client, except as required by applicable federal law or a valid legal order.`,
  },
  {
    num: "5.",
    title: "Data Sale Prohibition",
    body: `We do not sell, rent, trade, or otherwise transfer client data or personal information to third parties for commercial purposes. This prohibition is absolute and applies regardless of whether data has been aggregated or de-identified.`,
  },
  {
    num: "6.",
    title: "Security",
    body: `We implement administrative, technical, and physical safeguards appropriate to the sensitivity of information processed. Our processing infrastructure operates on disconnected local systems that do not interface with client enterprise networks. Deliverables are transmitted via encrypted channels agreed upon with each client prior to engagement commencement.`,
  },
  {
    num: "7.",
    title: "Third-Party Services",
    body: `Our website may use minimal third-party services for hosting and analytics (e.g., Netlify). These providers are contractually obligated to handle data in accordance with applicable privacy law. We do not embed third-party advertising, retargeting pixels, or social media tracking on our website.`,
  },
  {
    num: "8.",
    title: "Your Rights",
    body: `Clients and website visitors may request access to, correction of, or deletion of personal information we hold by contacting us at colin@civicmas.com. We will respond to verifiable requests within 30 days. Requests from individuals exercising rights under the California Consumer Privacy Act (CCPA) or equivalent state law will be handled in accordance with applicable requirements.`,
  },
  {
    num: "9.",
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy periodically. Material changes will be posted on this page with an updated effective date. Continued use of our services following notice of changes constitutes acceptance of the revised Policy.`,
  },
  {
    num: "10.",
    title: "Contact",
    body: `Questions regarding this Privacy Policy should be directed to:

Colin Davis, Principal Solutions Architect
Civic Media and Automation Systems LLC
colin@civicmas.com`,
  },
];

export default function Privacy() {
  return (
    <PageLayout>
      <div className="bg-[#112E51] text-white px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9] mb-3">
            Legal Document — Effective Date: January 1, 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-[#D6D7D9] text-sm mt-3">
            Civic Media and Automation Systems LLC · civicmas.com
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="space-y-10">
            {sections.map((sec) => (
              <div key={sec.num} className="border-b border-[#D6D7D9] pb-10 last:border-0">
                <h2 className="text-base font-bold text-[#112E51] mb-4">
                  {sec.num} {sec.title}
                </h2>
                <div className="text-sm text-[#5B616B] leading-relaxed whitespace-pre-line">
                  {sec.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
