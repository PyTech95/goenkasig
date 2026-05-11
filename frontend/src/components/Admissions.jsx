import { admissionsInfo } from "../mock";
import { Mail, Phone, GraduationCap } from "lucide-react";

export default function Admissions({ onEnquire }) {
  return (
    <section id="admissions" className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="eyebrow mb-5">Admissions</div>
            <h2 className="h-section text-[var(--ink)]">
              {admissionsInfo.open}
              <span className="block serif-italic gold-text">for the 2026 — 2027 session.</span>
            </h2>
            <span className="gold-divider-thin block my-7" />
            <p className="text-[17px] leading-[1.85] text-[var(--ink)]/80 max-w-[600px] mb-8">
              We invite parents of children entering <span className="serif-italic">Pre-Nursery through Grade 9, and Grade 11</span>, to begin the admissions journey. Limited seats are available across day, weekly and full boarding. Transfer cases and bespoke enquiries are warmly welcomed.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onEnquire} className="btn-gold" style={{ color: "var(--navy)", borderColor: "var(--gold)", background: "var(--gold)" }}>Begin Enquiry</button>
              <a href={`tel:${admissionsInfo.phone.replace(/\s/g, '')}`} className="btn-gold" style={{ color: "var(--navy)" }}>Call Admissions</a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative p-8 md:p-10" style={{ background: "var(--navy)" }}>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l border-t border-[var(--gold)]" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r border-b border-[var(--gold)]" />
              <GraduationCap size={36} className="text-[var(--gold)]" strokeWidth={1.2} />
              <div className="mt-6 serif text-white text-[28px] leading-tight">
                Admissions Office
                <span className="block serif-italic gold-text text-[20px] mt-1">we'd love to hear from you.</span>
              </div>
              <span className="gold-divider-thin block my-5" />
              <div className="space-y-4 text-white/85">
                <a href={`mailto:${admissionsInfo.email}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
                  <Mail size={16} className="text-[var(--gold)]" />
                  <span className="text-[15px]">{admissionsInfo.email}</span>
                </a>
                <a href={`tel:${admissionsInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
                  <Phone size={16} className="text-[var(--gold)]" />
                  <span className="text-[15px]">{admissionsInfo.phone}</span>
                </a>
              </div>
              <p className="mt-7 text-[12px] tracking-[0.22em] uppercase text-[var(--gold-light)]">
                Pre-Nursery to Grade 9 & 11 · {admissionsInfo.session}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
