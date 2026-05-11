import { stats, whyUs, aboutCopy } from "../mock";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <Reveal variant="left" className="md:col-span-6 order-2 md:order-1">
          <div className="eyebrow mb-5">{aboutCopy.eyebrow}</div>
          <h2 className="h-section text-[var(--ink)]">
            {aboutCopy.heading}
            <span className="block serif-italic gold-text">{aboutCopy.italic}</span>
          </h2>
          <span className="gold-divider-thin block my-6 md:my-7" />
          {aboutCopy.paragraphs.map((p, i) => (
            <p key={i} className="text-[15.5px] md:text-[16.5px] leading-[1.85] text-[var(--ink)]/80 mb-5">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal variant="right" delay={100} className="md:col-span-6 order-1 md:order-2">
          <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
            <img src={aboutCopy.image} alt="GD Goenka Signature campus" className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-[rgba(184,148,86,0.25)]" />
            <div className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 w-20 h-20 md:w-28 md:h-28 border-l-2 border-b-2 border-[var(--gold)]" />
            <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 w-20 h-20 md:w-28 md:h-28 border-r-2 border-t-2 border-[var(--gold)]" />
          </div>
        </Reveal>
      </div>

      {/* stats strip */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="flex flex-col items-center text-center">
              <div className="stat-number">{s.value}</div>
              <span className="gold-divider-thin my-3" />
              <div className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[var(--muted)] max-w-[180px]">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Why Us */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 mt-20 md:mt-28">
        <Reveal>
          <div className="text-center mb-10 md:mb-12">
            <div className="eyebrow mb-5">Why GD Goenka Signature</div>
            <h3 className="h-section text-[var(--ink)]">
              The Best School in
              <span className="serif-italic gold-text"> Gurgaon.</span>
            </h3>
            <span className="gold-divider mx-auto" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-5 md:gap-y-6">
          {whyUs.map((w, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <div className="flex items-start gap-3 border-b border-[rgba(184,148,86,0.25)] pb-5">
                <span className="serif-italic gold-text text-[18px] shrink-0">0{i + 1}</span>
                <Check size={18} className="text-[var(--gold)] mt-1 shrink-0" strokeWidth={1.5} />
                <span className="serif text-[16px] md:text-[18px] text-[var(--ink)]/85 leading-snug">{w}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
