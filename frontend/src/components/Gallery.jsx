import { gallery } from "../mock";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-[760px] mx-auto mb-12 md:mb-16">
          <div className="eyebrow mb-5">GDGSS at Glance</div>
          <h2 className="h-section text-[var(--ink)]">
            Glimpses of life on
            <span className="serif-italic gold-text"> our 20‑acre campus.</span>
          </h2>
          <span className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${
                i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Campus moment ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgba(6,13,34,0.0)] group-hover:bg-[rgba(6,13,34,0.35)] transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-[rgba(184,148,86,0.0)] group-hover:ring-[rgba(184,148,86,0.6)] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
