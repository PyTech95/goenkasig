import { useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { events } from "../mock";

export default function EventsSection() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    if (!trackRef.current) return;
    const w = trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: dir * (w * 0.7), behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[var(--cream)]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
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

        <div ref={trackRef} className="flex gap-6 overflow-x-auto snap-x-scroll no-scrollbar pb-2 pr-2">
          {events.map((e) => (
            <article key={e.id} className="shrink-0 w-[280px] md:w-[340px] bg-white border border-[rgba(184,148,86,0.25)] hover:border-[var(--gold)] transition-colors group">
              <div className="relative aspect-[4/5] overflow-hidden" style={{ background: "var(--navy)" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <Calendar size={28} className="text-[var(--gold)] mb-3" strokeWidth={1.2} />
                  <div className="serif text-[var(--gold-light)] text-[14px] tracking-[0.3em] uppercase">{e.date}</div>
                  <span className="gold-divider-thin my-4" />
                  <h3 className="serif-italic text-white text-[34px] md:text-[42px] leading-tight">{e.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[14.5px] leading-[1.75] text-[var(--ink)]/75 mb-4">{e.body}</p>
                <span className="fancy-link">Read more</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
