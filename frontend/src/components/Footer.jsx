import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { contactInfo, navLinks, LOGO_URL } from "../mock";

export default function Footer({ onEnquire }) {
  return (
    <footer id="contact" className="relative" style={{ background: "var(--navy-deep)" }}>
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex flex-col items-start">
              <img src={LOGO_URL} alt="GD Goenka Signature" className="h-14 md:h-16 w-auto mb-3" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
            <p className="serif-italic text-white/70 text-[18px] mt-6 max-w-[420px] leading-[1.6]">
              "A school where students are inspired to achieve."
            </p>
            <span className="gold-divider-thin mt-7 block" />
            <div className="mt-6 space-y-3 text-white/75 text-[14px]">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--gold)] mt-1 shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
                <Mail size={16} className="text-[var(--gold)]" />
                <span>{contactInfo.email}</span>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-[var(--gold)] transition-colors">
                <Phone size={16} className="text-[var(--gold)]" />
                <span>{contactInfo.phone} · {contactInfo.altPhone}</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Quick Links</div>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {navLinks.slice(0, 8).map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="serif text-white/80 hover:text-[var(--gold)] text-[16px] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Enquire</div>
            <p className="text-white/70 text-[14px] leading-[1.7] mb-6">
              Begin a conversation with our admissions team — we'll get in touch within one working day.
            </p>
            <button onClick={onEnquire} className="btn-gold">Contact Admissions</button>
            <div className="flex items-center gap-4 mt-8">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-[rgba(184,148,86,0.4)] hover:border-[var(--gold)] hover:bg-[var(--gold)] flex items-center justify-center transition-colors group" aria-label="social">
                  <Icon size={15} className="text-[var(--gold-light)] group-hover:text-[var(--navy)] transition-colors" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(184,148,86,0.18)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/55 text-[12px] tracking-[0.18em] uppercase">
            © {new Date().getFullYear()} GD Goenka Signature School · {contactInfo.affiliation}
          </p>
          <div className="flex items-center gap-6 text-[12px] tracking-[0.18em] uppercase text-white/55">
            <a href="#" className="hover:text-[var(--gold)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">CBSE Disclosure</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
