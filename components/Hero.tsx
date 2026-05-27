import { Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#112E51] leading-tight mb-6 max-w-3xl text-balance">
          Automated RFP Compliance Extraction for Prime Contractors.
        </h1>

        <p className="text-lg text-[#5B616B] mb-10 max-w-2xl leading-relaxed text-pretty">
          A specialized, HUBZone-certified data infrastructure firm specializing in
          zero-integration compliance matrix&nbsp;generation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:colin@civicmas.com?subject=Pilot Extract Request"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#112E51] text-white text-sm font-semibold rounded-sm hover:bg-[#1a3f6f] transition-colors w-fit"
          >
            <Mail size={16} />
            Request Pilot Extract
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#D6D7D9] text-[#5B616B] text-sm font-medium rounded-sm hover:border-[#112E51] hover:text-[#112E51] transition-colors w-fit"
          >
            View Process
          </a>
          <a
            href="/Civic-Automation-Systems-Cap-Statement.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#D6D7D9] text-[#5B616B] text-sm font-medium rounded-sm hover:border-[#112E51] hover:text-[#112E51] transition-colors w-fit"
          >
            <Download size={15} />
            Download Capability Statement (PDF)
          </a>
        </div>

        {/* Rule */}
        <div className="mt-16 border-t border-[#D6D7D9]" />
      </div>
    </section>
  );
}
