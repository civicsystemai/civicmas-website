import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Civic Automation Systems",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="border-b border-[#D6D7D9] py-4 px-6">
        <Link
          href="/"
          className="text-[#112E51] font-bold text-sm tracking-widest uppercase"
        >
          Civic Automation Systems
        </Link>
      </div>
      <main className="max-w-3xl mx-auto px-6 py-20 flex-1">
        <p className="text-xs text-[#5B616B] font-mono tracking-widest uppercase mb-4">
          Legal — Terms of Service
        </p>
        <h1 className="text-3xl font-bold text-[#112E51] mb-8">Terms of Service</h1>
        <div className="p-8 border border-[#D6D7D9] bg-[#F1F1F1] text-center">
          <p className="text-[#5B616B] font-medium">Document Pending Publication</p>
          <p className="text-sm text-[#5B616B] mt-2">
            Terms of service are currently under legal review and will be published prior to full
            commercial launch.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-sm text-[#112E51] font-medium underline"
          >
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
