import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { heroSlides } from "../mock";

export default function Hero({ onEnquire }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden" style={{ background: "var(--navy-deep)" }}>
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.image} alt={s.headline} className="w-full h-full object-cover" style={{ transform: 'scale(1.05)' }} />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="flex flex-col items-center max-w-[1100px]">
          <div className="eyebrow text-[var(--gold-light)] mb-6 fade-up">A Premium CBSE Boarding School</div>
          <h1 className="text-white fade-up" key={active}>
            <span className="block serif text-[clamp(1.25rem,1.6vw,1.5rem)] tracking-[0.08em] text-white/85 mb-3">{heroSlides[active].accent}</span>
            <span className="h-display-italic gold-text">{heroSlides[active].headline}</span>
          </h1>
          <span className="gold-divider" />
          <p className="serif text-white/85 text-[clamp(1rem,1.4vw,1.25rem)] tracking-[0.08em] max-w-[640px]">
            {heroSlides[active].tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button onClick={onEnquire} className="btn-gold">Contact Admissions</button>
            <a href="#about" className="btn-gold" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>Discover the School</a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/70">
          <div className="flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[2px] transition-all duration-500 ${i === active ? 'w-10 bg-[var(--gold)]' : 'w-5 bg-white/40'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
