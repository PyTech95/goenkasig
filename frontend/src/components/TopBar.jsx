import { Phone, Mail } from "lucide-react";
import { admissionsInfo } from "../mock";

export default function TopBar({ onEnquire }) {
  return (
    <div className="hidden md:block w-full text-[12px] tracking-[0.18em]" style={{ background: "var(--navy-deep)", color: "#e6dcc6" }}>
      <div className="max-w-[1400px] mx-auto px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="uppercase">{admissionsInfo.open} · Pre-Nursery to Grade 9 & 11 · 2026-2027</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={`mailto:${admissionsInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={13} /> <span>{admissionsInfo.email}</span>
          </a>
          <a href={`tel:${admissionsInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={13} /> <span>{admissionsInfo.phone}</span>
          </a>
          <button onClick={onEnquire} className="text-[var(--gold-light)] hover:text-white uppercase">Enquire</button>
        </div>
      </div>
    </div>
  );
}
