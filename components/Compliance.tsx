const identifiers = [
  { label: "Certification", value: "HUBZone Certified (SBA)" },
  { label: "UEI", value: "[PENDING]" },
  { label: "CAGE Code", value: "[PENDING]" },
  { label: "Primary NAICS", value: "541519 · 518210" },
  { label: "Infrastructure", value: "Zero-Integration / Disconnected Local Processing" },
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 px-6 bg-[#5B616B]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs text-[#D6D7D9] font-mono tracking-widest uppercase mb-2">
            Section 03 — Trust & Compliance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Federal Identifiers
          </h2>
          <p className="text-[#D6D7D9] mt-3 max-w-xl text-sm">
            Registered and compliant with SBA HUBZone program. All identifiers current as of filing.
          </p>
        </div>

        <div className="border border-white/20 divide-y divide-white/20">
          {identifiers.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-6 py-4"
            >
              <span className="text-xs font-mono text-[#D6D7D9] uppercase tracking-wider sm:w-48 shrink-0">
                {item.label}
              </span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#D6D7D9] font-mono">
          SAM.gov registration active. All certifications maintained in good standing.
        </p>
      </div>
    </section>
  );
}
