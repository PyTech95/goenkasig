import { useState } from "react";
import { Check, ShieldCheck, Heart, Moon, Utensils } from "lucide-react";
import { boardingHome } from "../mock";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function Boarding({ onEnquire }) {
  const [active, setActive] = useState(0);
  const opt = boardingHome.options[active];

  const featureIcons = [Moon, ShieldCheck, Heart, ShieldCheck, Utensils, Heart];

  return (
    <section id="boarding" className="relative py-12 md:py-20 overflow-hidden" style={{ background: "var(--navy-deep)" }}>
      {/* soft mandala behind */}
      <div className="mandala-bg" style={{ opacity: 0.35 }} />

      <div className="relative max-w-[1300px] mx-auto px-5 md:px-10">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-[780px] mx-auto mb-10 md:mb-14">
            <div className="eyebrow mb-5">{boardingHome.eyebrow}</div>
            <h2 className="h-section text-white">
              {boardingHome.heading}
              <span className="block serif-italic gold-text">{boardingHome.italic}</span>
            </h2>
            <span className="gold-divider mx-auto" />
            <p className="text-white/75 text-[15.5px] md:text-[17px] leading-[1.85]">
              {boardingHome.body}
            </p>
          </div>
        </Reveal>

        {/* Option selector + image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Left: option tabs */}
          <Reveal variant="left" className="md:col-span-5">
            <div className="space-y-3">
              {boardingHome.options.map((o, i) => (
                <button
                  key={o.key}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-5 md:p-6 border transition-colors ${
                    i === active
                      ? "border-[var(--gold)] bg-[rgba(184,148,86,0.06)]"
                      : "border-[rgba(184,148,86,0.2)] hover:border-[var(--gold)]/60 hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="serif text-white text-[22px] md:text-[26px] leading-tight">
                        {o.title}
                        <span className="block serif-italic gold-text text-[14px] md:text-[16px] mt-0.5">{o.sub}</span>
                      </div>
                    </div>
                    <span
                      className={`mt-1 shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
                        i === active ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--navy-deep)]" : "border-white/30 text-white/40"
                      }`}
                    >
                      <span className="block w-1.5 h-1.5 rounded-full bg-current" />
                    </span>
                  </div>
                  <p
                    className={`text-[14px] leading-[1.7] mt-3 transition-colors ${
                      i === active ? "text-white/80" : "text-white/55"
                    }`}
                  >
                    {o.desc}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Right: image */}
          <Reveal variant="right" delay={100} className="md:col-span-7">
            <div className="relative aspect-[5/4] md:aspect-[4/3] overflow-hidden">
              {boardingHome.options.map((o, i) => (
                <img
                  key={o.key}
                  src={o.image}
                  alt={o.title}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,13,34,0.6)] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-[var(--gold-light)] text-[11px] md:text-[12px] tracking-[0.3em] uppercase">
                {opt.sub}
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-[var(--gold)] pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[var(--gold)] pointer-events-none" />
            </div>
          </Reveal>
        </div>

        {/* Features grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          {boardingHome.features.map((f, i) => {
            const Icon = featureIcons[i] || Check;
            return (
              <Reveal key={f} delay={(i % 3) * 100}>
                <div className="flex items-start gap-3 border-b border-[rgba(184,148,86,0.2)] pb-4">
                  <Icon size={18} className="text-[var(--gold)] mt-0.5 shrink-0" strokeWidth={1.4} />
                  <span className="serif text-white/85 text-[15.5px] md:text-[16.5px] leading-snug">{f}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {boardingHome.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="stat-number"><CountUp value={s.value} /></div>
                <span className="gold-divider-thin my-3" />
                <div className="text-[11px] md:text-[12px] tracking-[0.22em] uppercase text-[var(--gold-light)]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-12 md:mt-16 text-center">
            <button onClick={onEnquire} className="btn-gold" style={{ background: "var(--gold)", color: "var(--navy-deep)" }}>
              Enquire about Boarding
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
