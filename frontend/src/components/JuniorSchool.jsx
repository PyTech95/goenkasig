import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { juniorSchoolHome } from "../mock";
import Reveal from "./Reveal";

export default function JuniorSchool() {
  const [active, setActive] = useState(0);
  const slides = juniorSchoolHome.carousel;
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % slides.length), 4500);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const go = (dir) => {
    clearInterval(timerRef.current);
    setActive((a) => (a + dir + slides.length) % slides.length);
  };

  return (
    <section id="junior" className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Left text */}
        <Reveal variant="left" className="md:col-span-5 order-2 md:order-1">
          <div className="eyebrow mb-5">{juniorSchoolHome.eyebrow}</div>
          <h2 className="h-section text-[var(--ink)]">
            {juniorSchoolHome.heading}
            <span className="block serif-italic gold-text">{juniorSchoolHome.italic}.</span>
          </h2>
          <span className="gold-divider-thin block my-6 md:my-7" />
          <p className="text-[15.5px] md:text-[16.5px] leading-[1.85] text-[var(--ink)]/80 mb-5">
            {juniorSchoolHome.body}
          </p>
          <p className="text-[13px] md:text-[13.5px] tracking-[0.08em] text-[var(--muted)] italic mb-7 md:mb-8">
            {juniorSchoolHome.meta}
          </p>
          <Link
            to="/junior-school"
            className="btn-gold inline-flex items-center gap-2"
            style={{ background: "var(--gold)", color: "var(--navy-deep)", borderColor: "var(--gold)" }}
          >
            Explore Junior School
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </Link>
        </Reveal>

        {/* Right carousel */}
        <Reveal variant="right" delay={100} className="md:col-span-7 order-1 md:order-2">
          <div className="relative">
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden bg-[var(--navy-deep)]">
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* gradient + label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,13,34,0.65)] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10.5px] md:text-[11px] tracking-[0.32em] uppercase text-[var(--gold-light)]">Concept Design · EDI</div>
                  <div className="serif text-white text-[22px] md:text-[28px] leading-tight mt-1">
                    {slides[active].label}
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <button onClick={() => go(-1)} aria-label="Prev" className="w-10 h-10 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] flex items-center justify-center transition-colors"><ChevronLeft size={16} /></button>
                  <button onClick={() => go(1)} aria-label="Next" className="w-10 h-10 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] flex items-center justify-center transition-colors"><ChevronRight size={16} /></button>
                </div>
              </div>
              {/* gold corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-[var(--gold)] pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[var(--gold)] pointer-events-none" />
            </div>

            {/* dots */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-[2px] transition-all duration-500 ${i === active ? "w-10 bg-[var(--gold)]" : "w-5 bg-[var(--ink)]/20"}`}
                />
              ))}
            </div>
            {/* mobile arrows */}
            <div className="flex md:hidden items-center justify-center gap-3 mt-4">
              <button onClick={() => go(-1)} aria-label="Prev" className="w-9 h-9 border border-[var(--gold)] text-[var(--gold)] flex items-center justify-center"><ChevronLeft size={16} /></button>
              <button onClick={() => go(1)} aria-label="Next" className="w-9 h-9 border border-[var(--gold)] text-[var(--gold)] flex items-center justify-center"><ChevronRight size={16} /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
