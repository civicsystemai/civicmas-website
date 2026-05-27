"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    entity: "",
    rfp: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast.info("Form submission currently routed to email for security.", {
      description: "Please email colin@civicmas.com directly to initiate your engagement.",
      duration: 7000,
    });
  }

  const fieldClass =
    "w-full border border-[#D6D7D9] bg-white px-4 py-3 text-sm text-[#212121] font-mono placeholder:text-[#5B616B] focus:outline-none focus:border-[#112E51] transition-colors rounded-none";

  const labelClass = "block text-xs font-mono tracking-widest uppercase text-[#5B616B] mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="First Last"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="entity" className={labelClass}>
          Prime Contractor Entity *
        </label>
        <input
          id="entity"
          name="entity"
          type="text"
          required
          value={form.entity}
          onChange={handleChange}
          placeholder="Company Name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="rfp" className={labelClass}>
          Target RFP / Agency
        </label>
        <input
          id="rfp"
          name="rfp"
          type="text"
          value={form.rfp}
          onChange={handleChange}
          placeholder="e.g., RFP W52P1J-25-R-0001 · Army Contracting Command"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your engagement need, timeline, and any relevant context."
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-[#112E51] text-white text-sm font-semibold hover:bg-[#1a3f6f] transition-colors cursor-pointer"
      >
        Submit Engagement Request
      </button>

      <p className="text-xs text-[#5B616B] font-mono">
        * Required fields. Submissions are reviewed by the Principal within
        one business day.
      </p>
    </form>
  );
}
