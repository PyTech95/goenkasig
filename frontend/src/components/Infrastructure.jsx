import { useState } from "react";
import { Check } from "lucide-react";
import { infrastructureTabs } from "../mock";

export default function Infrastructure() {
  const [active, setActive] = useState(infrastructureTabs[0].id);
  const current = infrastructureTabs.find((t) => t.id === active);

  return (
    <section id="campus" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--navy-deep)" }}>
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-[760px] mx-auto mb-12 md:mb-16">
          <div className="eyebrow mb-5">Infrastructure & Resources</div>
          <h2 className="h-section text-white">
            A campus designed to
            <span className="block serif-italic gold-text">grow, flourish, excel.</span>
          </h2>
          <span className="gold-divider" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-14">
          {infrastructureTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative px-4 py-2 text-[12px] md:text-[13px] tracking-[0.22em] uppercase transition-colors ${
                active === t.id ? 'text-[var(--gold)]' : 'text-white/55 hover:text-white'
              }`}
            >
              {t.label}
              <span
                className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1px] bg-[var(--gold)] transition-all duration-500 ${active === t.id ? 'w-full' : 'w-0'}`}
              />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              key={current.id}
              src={current.image}
              alt={current.label}
              className="w-full h-full object-cover fade-up"
            />
            <div className="absolute inset-0 ring-1 ring-[rgba(184,148,86,0.35)]" />
          </div>
          <div>
            <h3 className="serif text-white text-[34px] md:text-[42px] leading-tight">
              {current.label.split(' ')[0]}
              <span className="block serif-italic gold-text">{current.label.split(' ').slice(1).join(' ') || 'at GDGSS'}</span>
            </h3>
            <span className="gold-divider-thin block my-6" />
            <ul className="space-y-4">
              {current.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <Check size={18} className="text-[var(--gold)] mt-1 shrink-0" strokeWidth={1.5} />
                  <span className="text-[15.5px] leading-[1.7]">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
