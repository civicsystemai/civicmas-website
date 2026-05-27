import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Civic Automation Systems",
  description: "Terms of Service for Civic Automation Systems — Civic Media and Automation Systems LLC.",
};

const sections = [
  {
    num: "1.",
    title: "Acceptance of Terms",
    body: `These Terms of Service ("Terms") govern the business relationship between Civic Media and Automation Systems LLC, doing business as Civic Automation Systems ("Company"), and any individual or entity ("Client") that engages our services. By requesting or receiving services from the Company, the Client agrees to be bound by these Terms.

These Terms may be supplemented by a separate Statement of Work (SOW) or Non-Disclosure Agreement (NDA). In the event of conflict, the executed SOW or NDA controls.`,
  },
  {
    num: "2.",
    title: "Description of Services",
    body: `The Company provides data extraction, normalization, and formatting services in support of U.S. federal government proposal and capture operations. Services include, but are not limited to:

— Automated RFP Compliance Matrix generation from public solicitation documents;
— Sub-tier pricing normalization and labor category cross-walking;
— FOIA document OCR extraction and Price-to-Win financial model construction.

All services are provided on a business-to-business basis to prime contractors, subcontractors, and other entities engaged in U.S. federal acquisition activities.`,
  },
  {
    num: "3.",
    title: "Nature of Deliverables — Administrative Support",
    body: `All deliverables provided by the Company, including but not limited to Excel Compliance Matrices, pricing models, and extracted financial data, are provided as administrative support tools only. Deliverables are intended to assist the Client's proposal and capture teams in organizing and processing publicly available acquisition information.

THE PRIME CONTRACTOR RETAINS FINAL AND SOLE RESPONSIBILITY FOR PROPOSAL COMPLIANCE. The Company makes no representation that any deliverable constitutes legal, compliance, or contracting advice, or that use of a deliverable will result in a compliant proposal submission. The Client is solely responsible for reviewing all deliverables, verifying accuracy against source documents, and determining suitability for use in any proposal, bid, or government submission.`,
  },
  {
    num: "4.",
    title: "Client Responsibilities",
    body: `The Client agrees to:

— Furnish only publicly available solicitation documents or materials the Client is authorized to share;
— Not furnish Controlled Unclassified Information (CUI), classified materials, or proprietary Prime internal data unless separately authorized under a written agreement;
— Review all deliverables for accuracy prior to incorporation into any proposal or submission;
— Maintain all deliverables in confidence consistent with applicable procurement integrity requirements.`,
  },
  {
    num: "5.",
    title: "Intellectual Property",
    body: `Upon full payment for services, the Client receives a non-exclusive, non-transferable license to use the deliverables for the specific engagement purpose described in the applicable Statement of Work. The Company retains all rights to its proprietary processing architecture, extraction pipelines, methodologies, and software.

The Client shall not reverse-engineer, decompile, or attempt to replicate the Company's processing methodology based on deliverable outputs.`,
  },
  {
    num: "6.",
    title: "Confidentiality",
    body: `Both parties agree to maintain the confidentiality of the other party's proprietary information disclosed in connection with an engagement. Client engagement details, RFP targets, and pricing information shall be treated as confidential by the Company. The Company's methodology, pricing, and technical architecture shall be treated as confidential by the Client.

Confidentiality obligations survive termination of any engagement for a period of three (3) years unless a separate NDA specifies a longer period.`,
  },
  {
    num: "7.",
    title: "Limitation of Liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY'S TOTAL LIABILITY TO THE CLIENT FOR ANY CLAIM ARISING OUT OF OR RELATED TO THESE TERMS OR ANY ENGAGEMENT SHALL NOT EXCEED THE TOTAL FEES PAID BY THE CLIENT TO THE COMPANY IN THE THREE (3) MONTHS PRECEDING THE CLAIM.

IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF CONTRACT, OR COST OF SUBSTITUTE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

This limitation applies regardless of the theory of liability (contract, tort, strict liability, or otherwise) and applies fully to claims arising from errors in deliverables, missed deadlines, or failure to isolate all requirements within a solicitation document.`,
  },
  {
    num: "8.",
    title: "Warranty Disclaimer",
    body: `SERVICES AND DELIVERABLES ARE PROVIDED "AS IS" AND "AS AVAILABLE." THE COMPANY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR THAT DELIVERABLES WILL CAPTURE ALL REQUIREMENTS WITHIN ANY GIVEN SOLICITATION DOCUMENT.

The Client acknowledges that automated extraction processes may not identify every mandatory requirement in complex or non-standard solicitation formats, and assumes full responsibility for independent review of all deliverables.`,
  },
  {
    num: "9.",
    title: "Payment Terms",
    body: `Unless otherwise specified in a Statement of Work, invoices are due within thirty (30) days of delivery of the applicable deliverable. The Company reserves the right to suspend services for accounts with outstanding balances exceeding thirty (30) days past due.

Pilot extracts provided at no cost are exempt from payment terms and are subject to separate pilot agreement terms communicated at engagement initiation.`,
  },
  {
    num: "10.",
    title: "Governing Law & Dispute Resolution",
    body: `These Terms are governed by the laws of the United States and the state in which the Company is registered, without regard to conflict of law principles. Any dispute arising under these Terms shall first be submitted to good-faith negotiation between the parties. If unresolved within thirty (30) days, disputes shall be submitted to binding arbitration under the rules of the American Arbitration Association.`,
  },
  {
    num: "11.",
    title: "Modifications",
    body: `The Company reserves the right to modify these Terms at any time. Updated Terms will be posted at civicmas.com/terms with an updated effective date. Continued engagement following notice of modification constitutes acceptance of the revised Terms.`,
  },
  {
    num: "12.",
    title: "Contact",
    body: `Questions regarding these Terms should be directed to:

Colin Davis, Principal Solutions Architect
Civic Media and Automation Systems LLC
colin@civicmas.com`,
  },
];

export default function Terms() {
  return (
    <PageLayout>
      <div className="bg-[#112E51] text-white px-6 py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9] mb-3">
            Legal Document — Effective Date: January 1, 2026
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
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
