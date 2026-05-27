import type { Metadata } from "next";
import { Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Capabilities | Civic Automation Systems",
  description:
    "Core competency architecture for automated RFP compliance extraction, sub-tier pricing normalization, and FOIA/PTW OCR extraction.",
};

const services = [
  {
    index: "CAP-01",
    naics: "NAICS 541519",
    title: "Automated RFP Compliance Matrix Generation",
    description:
      "We operate as an asynchronous back-office for Prime capture teams. We ingest public 200+ page government RFPs and utilize a proprietary, stateless Python and NLP extraction architecture. The system isolates all mandatory 'shall, must, and will' requirements, maps evaluation criteria, and outputs a flawlessly formatted, color-coded Excel Compliance Matrix within a guaranteed 4-hour SLA.",
    sla: "4-Hour Guaranteed SLA",
    outputs: [
      "Color-coded Excel Compliance Matrix (Section M / L aligned)",
      "Mandatory requirement isolation: shall / must / will clauses",
      "Evaluation factor mapping with weighting notation",
      "RFP section cross-reference index",
      "Delivery via encrypted file transfer within SLA window",
    ],
    inputs: ["Public RFP PDF (SAM.gov or agency portal)", "Solicitation number", "Target submission date"],
  },
  {
    index: "CAP-02",
    naics: "NAICS 518210",
    title: "Sub-Tier Pricing Normalization",
    description:
      "When Primes receive messy, unstructured labor rate cards from 30+ subcontractors, our extraction engine ingests the disparate formats (PDF, Word, Excel). We normalize labor categories, cross-walk them to required federal naming conventions, and deliver a unified, audit-ready master Excel pricing model.",
    sla: "12-Hour Turnaround (standard volume)",
    outputs: [
      "Unified master labor rate Excel model",
      "Cross-walk to federal naming conventions (e.g., GSA Schedule categories)",
      "Audit-ready formatting with source traceability",
      "Duplicate and anomaly flagging report",
      "Normalized fringe / overhead / G&A rate columns",
    ],
    inputs: [
      "Sub-tier labor rate cards (PDF, Word, or Excel — any format)",
      "Target contract vehicle or IDIQ vehicle",
      "Required labor category taxonomy",
    ],
  },
  {
    index: "CAP-03",
    naics: "NAICS 541519",
    title: "FOIA & Price-to-Win OCR Extraction",
    description:
      "We support Capture and PTW teams by converting flattened, scanned incumbent FOIA documents into workable financial models. Our machine-vision OCR pipelines accurately scrape competitor pricing tables and labor categories into clean Excel architectures.",
    sla: "24-Hour Turnaround",
    outputs: [
      "Extracted competitor labor categories and loaded rates",
      "Scanned table reconstruction to structured Excel",
      "Historical pricing trend analysis (multi-award support)",
      "Incumbent burn-rate and period-of-performance mapping",
      "PTW-ready Excel model with annotated confidence scores",
    ],
    inputs: [
      "FOIA-released scanned PDF documents",
      "Prior contract number or agency FOIA request reference",
      "Target recompete solicitation number (if available)",
    ],
  },
];

export default function Capabilities() {
  return (
    <PageLayout>
      {/* Page header */}
      <div className="bg-[#112E51] text-white px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9] mb-3">
            Civic Automation Systems — Capability Statement
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Core Competencies</h1>
          <p className="text-[#D6D7D9] max-w-2xl text-sm leading-relaxed text-pretty">
            Automated data extraction services purpose-built for federal proposal operations.
            All processing occurs on stateless processing environments with zero integration
            requirements from the Prime.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="flex-1 bg-white">
        {services.map((svc, i) => (
          <div key={svc.index} className={i % 2 === 1 ? "bg-[#F1F1F1]" : "bg-white"}>
            <div className="max-w-6xl mx-auto px-6 py-16">
              {/* Service header */}
              <div className="flex flex-wrap items-start gap-3 mb-6">
                <span className="font-mono text-xs text-white bg-[#112E51] px-2 py-1">
                  {svc.index}
                </span>
                <span className="font-mono text-xs text-[#5B616B] border border-[#D6D7D9] px-2 py-1">
                  {svc.naics}
                </span>
                <span className="font-mono text-xs text-[#5B616B] border border-[#D6D7D9] px-2 py-1">
                  SLA: {svc.sla}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-[#112E51] mb-5 text-balance">
                {svc.title}
              </h2>

              <p className="text-[#5B616B] leading-relaxed mb-10 max-w-3xl text-pretty">{svc.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D6D7D9]">
                {/* Inputs */}
                <div className="bg-white md:bg-inherit p-6" style={{ background: i % 2 === 1 ? "#F1F1F1" : "#FFFFFF" }}>
                  <p className="text-xs font-mono tracking-widest uppercase text-[#5B616B] mb-4">
                    Required Inputs
                  </p>
                  <ul className="space-y-2">
                    {svc.inputs.map((inp) => (
                      <li key={inp} className="flex items-start gap-3 text-sm text-[#212121]">
                        <span className="font-mono text-[#112E51] mt-0.5 shrink-0">→</span>
                        {inp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outputs */}
                <div className="p-6 bg-[#112E51]">
                  <p className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9] mb-4">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {svc.outputs.map((out) => (
                      <li key={out} className="flex items-start gap-3 text-sm text-white">
                        <span className="font-mono text-[#D6D7D9] mt-0.5 shrink-0">✓</span>
                        {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="bg-[#F1F1F1] border-t border-[#D6D7D9] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-semibold text-[#112E51]">Ready to pilot?</p>
            <p className="text-sm text-[#5B616B]">
              Initial pilot extracts are available at no cost for qualified prime contractors.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="mailto:colin@civicmas.com?subject=Pilot Extract Request"
              className="inline-block px-6 py-3 bg-[#112E51] text-white text-sm font-semibold rounded-sm hover:bg-[#1a3f6f] transition-colors w-fit"
            >
              Request Pilot Extract
            </a>
            <a
              href="/Civic-Automation-Systems-Cap-Statement.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#112E51] text-[#112E51] text-sm font-medium rounded-sm hover:bg-[#112E51] hover:text-white transition-colors w-fit"
            >
              <Download size={15} />
              Download Capability Statement (PDF)
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
