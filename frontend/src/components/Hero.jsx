import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { heroSlides } from "../mock";
import VideoModal from "./VideoModal";

const HERO_VIDEO_URL = "https://customer-assets.emergentagent.com/job_goenkasig-new/artifacts/35b17ugl_25yrs-of-excellence-gd-goenka-group.mp4";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden" style={{ background: "var(--navy-deep)" }}>
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.image}
            alt=""
            className={`w-full h-full object-cover ${i === active ? 'kenburns' : ''}`}
            style={{ transform: 'scale(1.04)' }}
          />
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Bottom info bar with centered play button */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-10 md:pb-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 items-end gap-6">
          {/* Left: school identity */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="serif text-white text-[18px] md:text-[24px] leading-tight">
              GD Goenka <span className="serif-italic gold-text">Signature</span>
            </div>
            <div className="text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-white/75 mt-1">
              A Premium CBSE Boarding School · Gurugram
            </div>
          </div>

          {/* Center: animated play button */}
          <div className="flex flex-col items-center order-1 md:order-2">
            <button
              onClick={() => setVideoOpen(true)}
              aria-label="Take a virtual tour"
              className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-500 hover:scale-110"
            >
              <span className="absolute inset-0 rounded-full border border-[var(--gold)] opacity-70 animate-ping" />
              <span
                className="absolute inset-0 rounded-full border border-[var(--gold)] opacity-30 animate-ping"
                style={{ animationDelay: "0.8s", animationDuration: "2.2s" }}
              />
              <span
                className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-500"
                style={{ background: "rgba(184,148,86,0.95)", boxShadow: "0 8px 30px rgba(184,148,86,0.45)" }}
              >
                <Play size={22} className="text-[var(--navy-deep)] ml-1" strokeWidth={1.5} fill="currentColor" />
              </span>
            </button>
            <span className="mt-3 text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-white/85">
              Take a Tour
            </span>
          </div>

          {/* Right: slide indicators */}
          <div className="flex items-center justify-center md:justify-end gap-2 order-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-[2px] transition-all duration-500 ${i === active ? 'w-10 bg-[var(--gold)]' : 'w-5 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} videoUrl={HERO_VIDEO_URL} />
    </section>
  );
}
