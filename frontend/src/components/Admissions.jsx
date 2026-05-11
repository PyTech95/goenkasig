import { admissionsInfo } from "../mock";
import { Mail, Phone, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function Admissions({ onEnquire }) {
  return (
    <section id="admissions" className="relative bg-white py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <Reveal variant="left" className="md:col-span-7">
            <div className="eyebrow mb-5">Admissions</div>
            <h2 className="h-section text-[var(--ink)]">
              {admissionsInfo.open}
              <span className="block serif-italic gold-text">for the 2026 — 2027 session.</span>
            </h2>
            <span className="gold-divider-thin block my-6 md:my-7" />
            <p className="text-[15.5px] md:text-[17px] leading-[1.85] text-[var(--ink)]/80 max-w-[600px] mb-7 md:mb-8">
              We invite parents of children entering <span className="serif-italic">Pre-Nursery through Grade 9, and Grade 11</span>, to begin the admissions journey. Limited seats are available across day, weekly and full boarding. Transfer cases and bespoke enquiries are warmly welcomed.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button onClick={onEnquire} className="btn-gold" style={{ color: "var(--navy)", borderColor: "var(--gold)", background: "var(--gold)" }}>Begin Enquiry</button>
              <a href={`tel:${admissionsInfo.phone.replace(/\s/g, '')}`} className="btn-gold" style={{ color: "var(--navy)" }}>Call Admissions</a>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100} className="md:col-span-5">
            <div className="relative p-7 md:p-10" style={{ background: "var(--navy)" }}>
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 border-l border-t border-[var(--gold)]" />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 border-r border-b border-[var(--gold)]" />
              <GraduationCap size={32} className="text-[var(--gold)]" strokeWidth={1.2} />
              <div className="mt-5 md:mt-6 serif text-white text-[24px] md:text-[28px] leading-tight">
                Admissions Office
                <span className="block serif-italic gold-text text-[18px] md:text-[20px] mt-1">we'd love to hear from you.</span>
              </div>
              <span className="gold-divider-thin block my-5" />
              <div className="space-y-4 text-white/85">
                <a href={`mailto:${admissionsInfo.email}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
                  <Mail size={16} className="text-[var(--gold)]" />
                  <span className="text-[14px] md:text-[15px]">{admissionsInfo.email}</span>
                </a>
                <a href={`tel:${admissionsInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
                  <Phone size={16} className="text-[var(--gold)]" />
                  <span className="text-[14px] md:text-[15px]">{admissionsInfo.phone}</span>
                </a>
              </div>
              <p className="mt-6 md:mt-7 text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[var(--gold-light)]">
                Pre-Nursery to Grade 9 & 11 · {admissionsInfo.session}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
