import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Crown } from "lucide-react";
import { navLinks } from "../mock";

export default function Header({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? '' : 'bg-transparent'}`}
        style={{ background: scrolled ? "rgba(6,13,34,0.92)" : "transparent", backdropFilter: scrolled ? "blur(8px)" : "none" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* left: enquire */}
          <button onClick={onEnquire} className="enquire-pill" aria-label="Enquire now">Enquire</button>

          {/* center: crest */}
          <a href="#home" className="flex flex-col items-center group">
            <Crown size={28} className="text-[var(--gold)] mb-1 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
            <div className="serif text-white text-[18px] md:text-[22px] leading-none">GD Goenka Signature</div>
            <div className="text-[10px] md:text-[11px] tracking-[0.4em] text-[var(--gold-light)] mt-1">GURUGRAM · INDIA</div>
          </a>

          {/* right: menu */}
          <button onClick={() => setMobileOpen(true)} className="text-[var(--gold)] hover:text-white transition-colors" aria-label="Open menu">
            <Menu size={28} strokeWidth={1.4} />
          </button>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: "var(--navy-deep)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <button onClick={() => { setMobileOpen(false); onEnquire(); }} className="enquire-pill">Enquire</button>
          <div className="flex flex-col items-center">
            <Crown size={26} className="text-[var(--gold)] mb-1" strokeWidth={1.2} />
            <div className="serif text-white text-[20px] leading-none">GD Goenka Signature</div>
            <div className="text-[10px] tracking-[0.4em] text-[var(--gold-light)] mt-1">GURUGRAM · INDIA</div>
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-[var(--gold)] hover:text-white transition-colors" aria-label="Close menu">
            <X size={28} strokeWidth={1.4} />
          </button>
        </div>

        <nav className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8 md:pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
          {navLinks.map((l, i) => (
            <div key={l.label} className="border-b border-[rgba(184,148,86,0.18)] py-4">
              <button
                onClick={() => l.children ? setOpenSub(openSub === i ? null : i) : (setMobileOpen(false), document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }))}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="serif text-[26px] md:text-[32px] text-white group-hover:text-[var(--gold)] transition-colors">{l.label}</span>
                {l.children && (
                  <ChevronDown size={20} className={`text-[var(--gold)] transition-transform ${openSub === i ? 'rotate-180' : ''}`} />
                )}
              </button>
              {l.children && openSub === i && (
                <div className="pl-2 pt-3 pb-2 flex flex-col gap-2 fade-up">
                  {l.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      onClick={() => setMobileOpen(false)}
                      className="serif-italic text-[var(--gold-light)] hover:text-white transition-colors text-[18px]"
                    >
                      — {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
