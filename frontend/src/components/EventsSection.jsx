import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "../mock";
import Reveal from "./Reveal";

export default function EventsSection() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    const w = trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: dir * (w * 0.7), behavior: 'smooth' });
  };

  return (
    <section id="events" className="relative py-20 md:py-32 bg-[var(--cream)]">
      <div className="max-w-[1300px] mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between mb-10 md:mb-12 flex-wrap gap-6">
            <div>
              <div className="eyebrow mb-5">Recent Events</div>
              <h2 className="h-section text-[var(--ink)]">
                Stories from
                <span className="serif-italic gold-text"> our campus.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => scrollBy(-1)} className="w-11 h-11 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors flex items-center justify-center" aria-label="Prev">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => scrollBy(1)} className="w-11 h-11 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-colors flex items-center justify-center" aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div ref={trackRef} className="flex gap-5 md:gap-6 overflow-x-auto snap-x-scroll no-scrollbar pb-2 pr-2">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={(i % 4) * 80} className="shrink-0">
              <article className="w-[260px] sm:w-[300px] md:w-[360px] bg-white border border-[rgba(184,148,86,0.2)] hover:border-[var(--gold)] transition-colors group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--navy)]">
                  <img src={e.image} alt={e.title} loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1200ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,13,34,0.85)] via-[rgba(6,13,34,0.15)] to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-[var(--gold-light)] text-[10px] md:text-[11px] tracking-[0.3em] uppercase">{e.date}</div>
                    <h3 className="serif text-white text-[24px] md:text-[28px] leading-tight mt-1">{e.title}</h3>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[13.5px] md:text-[14.5px] leading-[1.75] text-[var(--ink)]/75 mb-4">{e.body}</p>
                  <span className="fancy-link">Know more</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
