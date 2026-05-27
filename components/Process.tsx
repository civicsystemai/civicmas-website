const steps = [
  {
    number: "01",
    title: "Secure Intake",
    description:
      "Public RFPs securely routed via encrypted channels. All source documents remain isolated from Prime enterprise networks throughout the engagement.",
  },
  {
    number: "02",
    title: "Automated Extraction",
    description:
      "Proprietary Python and Natural Language Processing (NLP) architecture isolates mandatory requirements (shall / must / will). Processing utilizes enterprise-grade, zero-retention API endpoints. Data is processed statelessly with zero persistence or model training.",
  },
  {
    number: "03",
    title: "Flawless Output",
    description:
      "Formatted, color-coded Excel Compliance Matrix returned within 4 to 24 hours. Deliverable includes full requirement traceability and section references.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-6 bg-[#F1F1F1]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#112E51] text-balance">
            The Extraction Process
          </h2>
          <p className="text-[#5B616B] mt-3 max-w-xl text-pretty">
            A fully auditable, three-stage pipeline designed for defensible GovCon deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 flex flex-col gap-4 h-full border border-[#D6D7D9]"
            >
              <span className="font-mono text-3xl font-bold text-[#D6D7D9] select-none">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-[#112E51]">{step.title}</h3>
              <p className="text-sm text-[#5B616B] leading-relaxed grow text-pretty">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
