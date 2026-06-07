import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, LOGO_URL } from "../mock";

export default function Header({ onEnquire }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleAnchor = (href) => {
    setMobileOpen(false);
    if (href?.startsWith('#')) {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(6,13,34,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,148,86,0.18)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-3 md:py-4 flex items-center justify-between gap-3">
          {/* left: enquire */}
          <button
            onClick={onEnquire}
            className="shrink-0 inline-flex items-center border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-colors uppercase tracking-[0.22em] sm:tracking-[0.24em] font-medium text-[10px] sm:text-[11px] px-2.5 sm:px-4 py-1.5 sm:py-2"
            aria-label="Enquire now"
          >
            Enquire
          </button>

          {/* center: logo */}
          <a href="#home" className="flex items-center justify-center group min-w-0 flex-1 sm:flex-initial mx-2">
            <img
              src={LOGO_URL}
              alt="GD Goenka Signature"
              className="h-[64px] sm:h-12 md:h-14 lg:h-16 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* right: menu trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="text-[var(--gold)] hover:text-white transition-colors shrink-0"
            aria-label="Open menu"
          >
            <Menu size={22} className="sm:hidden" strokeWidth={1.4} />
            <Menu size={28} className="hidden sm:block" strokeWidth={1.4} />
          </button>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: "var(--navy-deep)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-3 md:py-4 flex items-center justify-between gap-3">
          <button
            onClick={() => { setMobileOpen(false); onEnquire(); }}
            className="shrink-0 inline-flex items-center border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-colors uppercase tracking-[0.22em] sm:tracking-[0.24em] font-medium text-[10px] sm:text-[11px] px-2.5 sm:px-4 py-1.5 sm:py-2"
          >
            Enquire
          </button>
          <div className="flex items-center justify-center min-w-0 flex-1 sm:flex-initial mx-2">
            <img src={LOGO_URL} alt="GD Goenka Signature" className="h-[64px] sm:h-12 md:h-14 w-auto max-w-full object-contain" />
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-[var(--gold)] hover:text-white transition-colors shrink-0" aria-label="Close menu">
            <X size={22} className="sm:hidden" strokeWidth={1.4} />
            <X size={26} className="hidden sm:block" strokeWidth={1.4} />
          </button>
        </div>

        <nav className="max-w-[1100px] mx-auto px-5 md:px-10 pt-6 md:pt-12 pb-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 overflow-y-auto" style={{ maxHeight: "calc(100vh - 80px)" }}>
          {navLinks.map((l, i) => (
            <div key={l.label} className="border-b border-[rgba(184,148,86,0.16)] py-3.5 md:py-4">
              <button
                onClick={() => l.children ? setOpenSub(openSub === i ? null : i) : handleAnchor(l.href)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="serif text-[22px] sm:text-[26px] md:text-[30px] text-white group-hover:text-[var(--gold)] transition-colors">{l.label}</span>
                {l.children && (
                  <ChevronDown size={20} className={`text-[var(--gold)] transition-transform duration-300 ${openSub === i ? 'rotate-180' : ''}`} />
                )}
              </button>
              {l.children && openSub === i && (
                <div className="pl-2 pt-2 pb-1 flex flex-col gap-1.5 fade-up">
                  {l.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      onClick={() => handleAnchor(c.href)}
                      className="serif-italic text-[var(--gold-light)] hover:text-white transition-colors text-[16px] md:text-[17px]"
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
