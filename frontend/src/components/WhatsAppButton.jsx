import { useEffect, useState } from "react";
import { Phone, Mail, X, MessageCircle, Headset } from "lucide-react";

const WHATSAPP_NUMBER = "917082009200";
const PHONE_NUMBER = "+917082009200";
const EMAIL = "admissions@gdgss.in";
const WA_MESSAGE = encodeURIComponent(
  "Hi GD Goenka Signature School, I'd like to know more about admissions for 2026-27."
);

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 12000);
    return () => clearTimeout(t);
  }, []);

  const actions = [
    {
      key: "wa",
      label: "WhatsApp",
      sublabel: "+91 70820 09200",
      Icon: MessageCircle,
      bg: "#25D366",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`,
      target: "_blank",
    },
    {
      key: "call",
      label: "Call Admissions",
      sublabel: "+91 70820 09200",
      Icon: Phone,
      bg: "var(--gold)",
      color: "var(--navy-deep)",
      href: `tel:${PHONE_NUMBER}`,
    },
    {
      key: "mail",
      label: "Email Admissions",
      sublabel: EMAIL,
      Icon: Mail,
      bg: "var(--navy)",
      color: "#fff",
      href: `mailto:${EMAIL}`,
    },
  ];

  return (
    <div className="fixed left-4 bottom-4 md:left-6 md:bottom-6 z-[60]">
      {/* Action items */}
      <div
        className={`flex flex-col gap-2.5 mb-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {actions.map((a, i) => (
          <a
            key={a.key}
            href={a.href}
            target={a.target}
            rel={a.target ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 group"
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            onClick={() => setTimeout(() => setOpen(false), 200)}
          >
            <span
              className="hidden md:flex flex-col items-end px-3 py-1.5 bg-white shadow-lg rounded-full text-[12px] leading-tight text-[var(--ink)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 order-2"
            >
              <span className="font-medium">{a.label}</span>
              <span className="text-[10px] text-[var(--muted)]">{a.sublabel}</span>
            </span>
            <span
              className="order-1 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
              style={{ background: a.bg, color: a.color || "#fff" }}
              aria-label={a.label}
            >
              <a.Icon size={17} strokeWidth={2} />
            </span>
          </a>
        ))}
      </div>

      {/* Main toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact" : "Open contact"}
        aria-expanded={open}
        className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
        style={{ background: "var(--gold)", color: "var(--navy-deep)" }}
      >
        {pulse && !open && (
          <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "var(--gold)", opacity: 0.4 }} />
        )}
        <span className="relative transition-transform duration-300" style={{ transform: open ? "rotate(90deg)" : "rotate(0)" }}>
          {open ? <X size={18} strokeWidth={2.2} /> : <Headset size={18} strokeWidth={2} />}
        </span>
      </button>
    </div>
  );
}
