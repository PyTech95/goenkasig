import { stats, whyUs, aboutCopy } from "../mock";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="eyebrow mb-5">{aboutCopy.eyebrow}</div>
          <h2 className="h-section text-[var(--ink)]">
            {aboutCopy.heading}
            <span className="block serif-italic gold-text">{aboutCopy.italic}</span>
          </h2>
          <span className="gold-divider-thin block my-7" />
          {aboutCopy.paragraphs.map((p, i) => (
            <p key={i} className="text-[16.5px] leading-[1.85] text-[var(--ink)]/80 mb-5">
              {p}
            </p>
          ))}
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
            <img src={aboutCopy.image} alt="GD Goenka Signature campus" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-[rgba(184,148,86,0.25)]" />
            <div className="absolute -bottom-5 -left-5 w-28 h-28 border-l-2 border-b-2 border-[var(--gold)]" />
            <div className="absolute -top-5 -right-5 w-28 h-28 border-r-2 border-t-2 border-[var(--gold)]" />
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <div className="stat-number">{s.value}</div>
            <span className="gold-divider-thin my-3" />
            <div className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] max-w-[180px]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Why Us */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-24 md:mt-28">
        <div className="text-center mb-12">
          <div className="eyebrow mb-5">Why GD Goenka Signature</div>
          <h3 className="h-section text-[var(--ink)]">
            The Best School in
            <span className="serif-italic gold-text"> Gurgaon.</span>
          </h3>
          <span className="gold-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6">
          {whyUs.map((w, i) => (
            <div key={i} className="flex items-start gap-3 border-b border-[rgba(184,148,86,0.25)] pb-5">
              <span className="serif-italic gold-text text-[18px] shrink-0">0{i + 1}</span>
              <Check size={18} className="text-[var(--gold)] mt-1 shrink-0" strokeWidth={1.5} />
              <span className="serif text-[18px] text-[var(--ink)]/85 leading-snug">{w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
