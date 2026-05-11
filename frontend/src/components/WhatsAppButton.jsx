import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "917082009200"; // admissions number, no plus sign
const MESSAGE = encodeURIComponent(
  "Hi GD Goenka Signature School, I'd like to know more about admissions for 2026-27."
);

export default function WhatsAppButton() {
  const [pulse, setPulse] = useState(true);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTooltip(true), 4000);
    const t2 = setTimeout(() => setTooltip(false), 10000);
    const t3 = setTimeout(() => setPulse(false), 14000);
    return () => {
      clearTimeout(t); clearTimeout(t2); clearTimeout(t3);
    };
  }, []);

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed left-5 bottom-5 md:left-7 md:bottom-7 z-[60] flex items-center group"
    >
      <div className="relative">
        {pulse && (
          <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "#25D366", opacity: 0.35 }} />
        )}
        <span
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: "#25D366" }}
        >
          <MessageCircle size={28} className="text-white" strokeWidth={2} fill="white" stroke="#25D366" />
        </span>
      </div>
      <span
        className={`ml-3 hidden md:inline-flex items-center px-4 py-2 rounded-full bg-white shadow-xl text-[13px] text-[var(--ink)] transition-all duration-500 ${
          tooltip ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}
      >
        Chat with Admissions on WhatsApp
      </span>
    </a>
  );
}
