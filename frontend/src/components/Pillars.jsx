import { pillars } from "../mock";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Pillars() {
  return (
    <section id="academics" className="bg-[var(--cream)] py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <Reveal>
          <div className="max-w-[760px] mb-12 md:mb-16">
            <div className="eyebrow mb-5">Beyond the Classroom</div>
            <h2 className="h-section text-[var(--ink)]">
              A holistic life,
              <span className="block serif-italic gold-text">crafted with intention.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16">
          {pillars.map((p, i) => (
            <Reveal key={p.title} variant={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 100}>
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden mb-5 md:mb-6 aspect-[4/3]" style={{ background: "var(--navy)" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,13,34,0.55)] via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 text-[var(--gold-light)] serif-italic text-[14px] tracking-[0.18em]">0{i + 1}</div>
                </div>
                <div className="flex items-start justify-between gap-4 md:gap-6">
                  <div>
                    <h3 className="serif text-[26px] md:text-[36px] text-[var(--ink)] leading-tight">
                      {p.title}
                      <span className="block serif-italic gold-text text-[20px] md:text-[26px] mt-1">{p.italic}</span>
                    </h3>
                    <p className="text-[14.5px] md:text-[15.5px] leading-[1.85] text-[var(--ink)]/75 mt-4 max-w-[480px]">{p.body}</p>
                  </div>
                  <ArrowUpRight className="text-[var(--gold)] mt-2 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" size={26} strokeWidth={1.3} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
