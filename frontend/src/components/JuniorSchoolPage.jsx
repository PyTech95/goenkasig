import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, MapPin, Sparkles } from "lucide-react";
import { LOGO_URL, juniorRooms, juniorSchoolHome } from "../mock";
import Reveal from "./Reveal";
import EnquiryDialog from "./EnquiryDialog";
import ContactWidget from "./WhatsAppButton";
import Footer from "./Footer";
import { Toaster } from "./ui/sonner";

export default function JuniorSchoolPage() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white">
      {/* Slim header */}
      <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "rgba(6,13,34,0.92)" }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 text-[var(--gold-light)] hover:text-white text-[12px] tracking-[0.22em] uppercase transition-colors">
            <ArrowLeft size={16} /> Home
          </Link>
          <Link to="/" className="flex flex-col items-center">
            <img src={LOGO_URL} alt="GD Goenka Signature" className="h-10 md:h-12 w-auto" />
          </Link>
          <button onClick={() => setEnquireOpen(true)} className="enquire-pill">Enquire</button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--navy-deep)" }}>
        <div className="absolute inset-0">
          <img src="/junior/clean/p24.jpg" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,13,34,0.55) 0%, rgba(6,13,34,0.85) 100%)" }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 py-24 md:py-36 text-center">
          <div className="eyebrow mb-6">Junior School · Pre-Nursery — Class 2</div>
          <h1 className="h-display text-white">
            Where childhood
            <span className="block serif-italic gold-text">begins beautifully.</span>
          </h1>
          <span className="gold-divider mx-auto" />
          <p className="serif text-white/80 text-[17px] md:text-[20px] max-w-[760px] mx-auto leading-[1.7]">
            {juniorSchoolHome.body}
          </p>
          <p className="mt-6 text-[11.5px] md:text-[12.5px] tracking-[0.28em] uppercase text-[var(--gold-light)]">
            Designed by Education Design International · USA
          </p>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="bg-[var(--cream)] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { t: "Heart", i: "compassion", b: "Spaces that feel like home — soft corners, warm wood, gentle daylight." },
            { t: "Hands", i: "making", b: "Studios for art, lego, music and movement — because young minds learn by doing." },
            { t: "Head", i: "curiosity", b: "Question-led classrooms with display walls, libraries and story circles." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 120}>
              <div className="text-center">
                <Sparkles size={22} className="text-[var(--gold)] mx-auto" strokeWidth={1.3} />
                <div className="serif text-[34px] md:text-[42px] text-[var(--ink)] mt-3">
                  {p.t}
                  <span className="block serif-italic gold-text text-[22px] md:text-[26px]">{p.i}</span>
                </div>
                <span className="gold-divider-thin block mx-auto my-4" />
                <p className="text-[15px] leading-[1.8] text-[var(--ink)]/75 max-w-[320px] mx-auto">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Rooms showcase — alternating layout */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <Reveal>
            <div className="text-center max-w-[760px] mx-auto mb-14 md:mb-20">
              <div className="eyebrow mb-5">A Tour of the Spaces</div>
              <h2 className="h-section text-[var(--ink)]">
                Every corner,
                <span className="block serif-italic gold-text">designed for wonder.</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-20 md:space-y-32">
            {juniorRooms.map((r, i) => {
              const reverse = i % 2 === 1;
              return (
                <article key={r.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  <Reveal variant={reverse ? "right" : "left"} className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                    <div className="relative aspect-video overflow-hidden group">
                      <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105" />
                      <div className="absolute inset-0 ring-1 ring-[rgba(184,148,86,0.25)]" />
                      <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-[var(--gold)]" />
                      <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[var(--gold)]" />
                    </div>
                  </Reveal>
                  <Reveal variant={reverse ? "left" : "right"} delay={100} className="md:col-span-5">
                    <div className="text-[11px] md:text-[12px] tracking-[0.28em] uppercase text-[var(--gold)] flex items-center gap-2">
                      <MapPin size={13} /> {r.sub}
                    </div>
                    <h3 className="serif text-[34px] md:text-[44px] text-[var(--ink)] leading-tight mt-2">
                      {r.title}
                      <span className="block serif-italic gold-text text-[24px] md:text-[28px]">designed to inspire.</span>
                    </h3>
                    <span className="gold-divider-thin block my-5" />
                    <p className="text-[15px] md:text-[16px] leading-[1.85] text-[var(--ink)]/80 mb-5">{r.body}</p>
                    <ul className="space-y-2.5">
                      {r.pillars.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[var(--ink)]/80">
                          <Check size={16} className="text-[var(--gold)] mt-1 shrink-0" strokeWidth={1.6} />
                          <span className="text-[14.5px] leading-[1.7]">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--navy)" }}>
        <div className="mandala-bg" />
        <div className="relative max-w-[900px] mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="h-section text-white">
              Begin the journey at
              <span className="block serif-italic gold-text">GD Goenka Junior School.</span>
            </h2>
            <span className="gold-divider mx-auto" />
            <p className="text-white/75 text-[15.5px] md:text-[17px] leading-[1.8] max-w-[640px] mx-auto mb-9">
              Admissions are open for Pre-Nursery to Class 2 for the 2026 — 2027 academic year. Visit the campus and walk through these spaces with our admissions team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <button onClick={() => setEnquireOpen(true)} className="btn-gold inline-flex items-center gap-2" style={{ background: "var(--gold)", color: "var(--navy-deep)" }}>
                Begin Enquiry <ArrowUpRight size={16} />
              </button>
              <Link to="/" className="btn-gold inline-flex items-center gap-2">
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer onEnquire={() => setEnquireOpen(true)} />
      <ContactWidget />
      <EnquiryDialog open={enquireOpen} onOpenChange={setEnquireOpen} />
      <Toaster position="top-center" />
    </div>
  );
}
