import { differences } from "../mock";

export default function Difference() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--navy)" }}>
      <div className="mandala-bg" />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="eyebrow mb-5">The Signature Difference</div>
          <h2 className="h-section text-white">
            A school where students are
            <span className="block serif-italic gold-text">Inspired to achieve</span>
          </h2>
          <span className="gold-divider" />
          <p className="serif text-white/75 text-[18px] max-w-[640px]">
            Rooted in 29 years of group excellence, GD Goenka Signature shapes future-ready leaders with the poise, intellect and creativity to excel on the world stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {differences.map((d) => (
            <div key={d.id} className="dark-card p-8 md:p-10">
              <div className="text-[var(--gold)] serif text-[34px] md:text-[40px] leading-tight">
                {d.title}
                <span className="block serif-italic text-white/95">{d.subtitle}</span>
              </div>
              <span className="gold-divider-thin mt-5 mb-5 block" />
              <p className="text-[15.5px] leading-[1.85] text-white/75">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
