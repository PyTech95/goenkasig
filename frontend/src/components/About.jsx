import { stats } from "../mock";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="eyebrow mb-5">Know Us</div>
          <h2 className="h-section text-[var(--ink)]">
            Where great <span className="serif-italic gold-text">All-Rounders</span> are made.
          </h2>
          <span className="gold-divider-thin mt-6 block" />
        </div>
        <div className="md:col-span-7">
          <p className="text-[17px] leading-[1.85] text-[var(--ink)]/80 mb-6">
            GD Goenka Signature School is a premium CBSE-affiliated day, weekly and full boarding school, sprawled across a 20-acre signature campus on Sohna Road, Gurugram — just 60 minutes from the New Delhi airport.
          </p>
          <p className="text-[17px] leading-[1.85] text-[var(--ink)]/80 mb-6">
            Parents, visitors and our wider community consistently rank the school ahead of most institutions in India, including international ones. This is due to our advanced <span className="serif-italic gold-text">Real World Curriculum™</span>, premium infrastructure built to support it, and well-trained mentors who quietly deliver excellent results year after year.
          </p>
          <p className="text-[17px] leading-[1.85] text-[var(--ink)]/80">
            At GDGSS, we cultivate the values of mutual respect, personal responsibility, equality and compassion — nurturing children who are not just exam-ready, but life-ready.
          </p>
        </div>
      </div>

      {/* stats strip */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <div className="stat-number">{s.value}</div>
            <span className="gold-divider-thin my-3" />
            <div className="text-[12px] tracking-[0.22em] uppercase text-[var(--muted)]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
