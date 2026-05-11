import { gallery } from "../mock";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal>
          <div className="text-center max-w-[760px] mx-auto mb-10 md:mb-16">
            <div className="eyebrow mb-5">GDGSS at Glance</div>
            <h2 className="h-section text-[var(--ink)]">
              Glimpses of life on
              <span className="serif-italic gold-text"> our 20‑acre campus.</span>
            </h2>
            <span className="gold-divider mx-auto" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4">
          {gallery.map((src, i) => (
            <Reveal key={i} variant="zoom" delay={(i % 4) * 80}>
              <div
                className={`relative overflow-hidden group ${
                  i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <img
                  src={src}
                  alt={`Campus moment ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[rgba(6,13,34,0.0)] group-hover:bg-[rgba(6,13,34,0.35)] transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-[rgba(184,148,86,0.0)] group-hover:ring-[rgba(184,148,86,0.6)] transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
