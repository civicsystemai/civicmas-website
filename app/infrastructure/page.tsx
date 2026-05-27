import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Infrastructure & Security | Civic Automation Systems",
  description:
    "Zero-trust data isolation methodology and security posture for federal subcontract operations.",
};

const sections = [
  {
    ref: "SEC-01",
    title: "The Black Box Methodology",
    subtitle: "Zero Integration. Zero Footprint.",
    body: "Civic Automation Systems requires zero integration with a Prime's internal enterprise network. We do not require API keys, and we deploy no software on your servers. Our engagement model is fully asynchronous: Primes transmit public acquisition documents via agreed encrypted channels, and we return deliverables via the same path. At no point does any Civic Automation Systems system touch a Prime's internal infrastructure.",
    properties: [
      { label: "Network Integration Required", value: "None" },
      { label: "Software Deployed on Prime Systems", value: "None" },
      { label: "API Keys Required", value: "None" },
      { label: "VPN or Remote Access Required", value: "None" },
      { label: "Engagement Model", value: "Asynchronous / File-Based" },
    ],
  },
  {
    ref: "SEC-02",
    title: "Data Processing Architecture",
    subtitle: "Stateless. Isolated. Non-Retentive.",
    body: "All public RFP and pricing data is processed in isolated, stateless environments. Processing pipelines are initialized per-engagement and do not persist client data across sessions. We do not use Prime data — or any client-furnished acquisition documents — to train, fine-tune, or evaluate commercial artificial intelligence models or any third-party model. Processing utilizes enterprise-grade, zero-retention architecture to ensure ephemeral data handling.",
    properties: [
      { label: "Processing Environment", value: "Isolated / Stateless" },
      { label: "Client Data Retention", value: "Per-engagement only; purged on delivery confirmation" },
      { label: "LLM Training on Client Data", value: "Prohibited — contractually and architecturally" },
      { label: "Third-Party Cloud AI APIs", value: "Enterprise APIs (Zero Data Retention / Zero Training)" },
      { label: "Data Persistence", value: "Non-retentive beyond engagement window" },
    ],
  },
  {
    ref: "SEC-03",
    title: "Compliance Posture",
    subtitle: "Designed for Public-Release Acquisition Data.",
    body: "Our infrastructure is designed to process public-release acquisition data, shielding Prime internal networks from external software supply-chain risks. Our engagement scope is limited to publicly available solicitation documents sourced from SAM.gov and agency portals. We do not handle Controlled Unclassified Information (CUI), classified material, or proprietary Prime internal data unless separately scoped and governed under a NDA and applicable flow-down clauses.",
    properties: [
      { label: "Data Classification Handled", value: "Public release / Unclassified acquisition data" },
      { label: "CUI Handling", value: "Not in scope (Phase 1)" },
      { label: "Supply Chain Risk", value: "Zero software footprint on Prime network" },
      { label: "NDA Availability", value: "Available upon request prior to engagement" },
      { label: "HUBZone Certification", value: "SBA-certified — SAM.gov registration active" },
    ],
  },
];

const certifications = [
  { label: "HUBZone Certified", issuer: "U.S. Small Business Administration" },
  { label: "SAM.gov Registered", issuer: "System for Award Management — Active" },
  { label: "UEI", issuer: "CXCTUMJH1728" },
  { label: "CAGE Code", issuer: "19ST2" },
  { label: "NAICS Primary", issuer: "541519 · Other Computer Related Services" },
  { label: "NAICS Secondary", issuer: "518210 · Computing Infrastructure Providers" },
];

export default function Infrastructure() {
  return (
    <PageLayout>
      {/* Page header */}
      <div className="bg-[#112E51] text-white px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9] mb-3">
            Civic Automation Systems — Security Architecture
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Zero-Trust Data Isolation & Security Posture
          </h1>
          <p className="text-[#D6D7D9] max-w-2xl text-sm leading-relaxed">
            Designed for federal IT auditors, Prime compliance officers, and contracting officials
            evaluating subcontractor risk. This document describes our data handling architecture,
            processing methodology, and current compliance status.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="flex-1 bg-white">
        {sections.map((sec, i) => (
          <div key={sec.ref} className={`border-b border-[#D6D7D9] ${i % 2 === 1 ? "bg-[#F1F1F1]" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto px-6 py-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-white bg-[#5B616B] px-2 py-1">
                  {sec.ref}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-[#112E51] mb-1 text-balance">{sec.title}</h2>
              <p className="text-sm font-mono text-[#5B616B] mb-6">{sec.subtitle}</p>

              <p className="text-[#5B616B] leading-relaxed mb-10 max-w-3xl">{sec.body}</p>

              {/* Properties table */}
              <div className="border border-[#D6D7D9] divide-y divide-[#D6D7D9]">
                <div className="grid grid-cols-2 bg-[#112E51] px-6 py-3">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9]">
                    Property
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#D6D7D9]">
                    Status / Value
                  </span>
                </div>
                {sec.properties.map((prop) => (
                  <div
                    key={prop.label}
                    className="grid grid-cols-2 px-6 py-3 bg-white hover:bg-[#F1F1F1] transition-colors"
                  >
                    <span className="text-sm text-[#5B616B] font-medium">{prop.label}</span>
                    <span className="text-sm text-[#212121] font-mono">{prop.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Certifications table */}
        <div className="bg-[#F1F1F1] border-t border-[#D6D7D9]">
          <div className="max-w-6xl mx-auto px-6 py-14">
            <p className="text-xs font-mono tracking-widest uppercase text-[#5B616B] mb-3">
              SEC-04 — Registrations & Certifications
            </p>
            <h2 className="text-xl font-bold text-[#112E51] mb-8">Federal Identifiers</h2>
            <div className="border border-[#D6D7D9] divide-y divide-[#D6D7D9]">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 px-6 py-4 bg-white"
                >
                  <span className="font-semibold text-[#112E51] text-sm sm:w-56 shrink-0">
                    {cert.label}
                  </span>
                  <span className="text-sm text-[#5B616B] font-mono">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
