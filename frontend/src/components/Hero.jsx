import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { heroSlides } from "../mock";
import VideoModal from "./VideoModal";

// Placeholder video URL — replace with the school's actual video
const HERO_VIDEO_URL = "https://www.gdgoenkasignature.com/video/gdg-signature.mp4";

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

      {/* Centered animated play button */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <button
          onClick={() => setVideoOpen(true)}
          aria-label="Play campus film"
          className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full transition-transform duration-500 hover:scale-110"
        >
          {/* Outer pulse rings */}
          <span className="absolute inset-0 rounded-full border border-[var(--gold)] opacity-60 animate-ping" />
          <span
            className="absolute inset-0 rounded-full border border-[var(--gold)] opacity-30 animate-ping"
            style={{ animationDelay: "0.8s", animationDuration: "2.2s" }}
          />
          {/* Inner solid disc */}
          <span
            className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl transition-all duration-500"
            style={{ background: "rgba(184,148,86,0.95)", boxShadow: "0 8px 40px rgba(184,148,86,0.45)" }}
          >
            <Play size={34} className="text-[var(--navy-deep)] ml-1.5" strokeWidth={1.5} fill="currentColor" />
          </span>
          {/* Label */}
          <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] md:text-[12px] tracking-[0.32em] uppercase text-white/90">
            Watch the film
          </span>
        </button>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-8 md:pb-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-5">
          {/* Left: school identity */}
          <div className="text-center md:text-left">
            <div className="serif text-white text-[20px] md:text-[26px] leading-tight">
              GD Goenka <span className="serif-italic gold-text">Signature</span>
            </div>
            <div className="text-[10.5px] md:text-[11.5px] tracking-[0.32em] uppercase text-white/75 mt-1">
              A Premium CBSE Boarding School · Gurugram
            </div>
          </div>

          {/* Right: slide indicators */}
          <div className="flex items-center gap-2">
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
