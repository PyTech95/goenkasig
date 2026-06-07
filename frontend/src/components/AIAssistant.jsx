import { useEffect, useRef, useState } from "react";
import { X, Send, MessageSquare, Sparkles } from "lucide-react";
import { LOGO_URL } from "../mock";

const STORAGE_KEY = "gdgss_ai_closed"; // sessionStorage flag

const FAQ = [
  {
    q: "What is the admission process?",
    a: "Admissions for 2026-27 are open for Pre-Nursery to Grade 9, and Grade 11. The process is: (1) submit an enquiry, (2) campus visit & counselling, (3) child interaction / readiness assessment, (4) parent interview, (5) offer of admission. Begin by clicking the gold ENQUIRE button at the top.",
  },
  {
    q: "What grades are currently open?",
    a: "Pre-Nursery, Nursery, Kindergarten, Grades 1\u20139 and Grade 11 are open for the 2026-2027 session. Limited seats; transfer cases are warmly considered.",
  },
  {
    q: "Do you offer boarding?",
    a: "Yes. We offer three options on our 20-acre campus: Day boarding, Weekly boarding (Mon\u2013Fri) and Full boarding. The residences have dedicated house parents, evening prep, weekend trips and a thriving community.",
  },
  {
    q: "Where is the school located?",
    a: "GD Goenka Signature School is on Sohna Road, Gurugram, Haryana \u2014 about 60 minutes from New Delhi International Airport.",
  },
  {
    q: "What is the Real World Curriculum\u2122?",
    a: "Our signature CBSE-aligned programme that takes children beyond textbooks. Real-life phenomena, projects, robotics, design thinking and field experiences shape children who can think, build and lead.",
  },
  {
    q: "What sports & arts are available?",
    a: "A 60,000 sq.ft. indoor sports complex, Olympic-standard cricket field, heated semi-Olympic pool, tennis, badminton, squash, basketball, equestrian, archery and yoga. Arts has a dedicated cultural hub for music, dance, theatre, visual arts and pottery.",
  },
  {
    q: "How do I contact admissions?",
    a: "Call +91 70820 09200, email admissions@gdgss.in, or click the gold ENQUIRE button. Our team responds within one working day.",
  },
  {
    q: "What's the affiliation?",
    a: "GD Goenka Signature School is CBSE-affiliated, Affiliation No. 531501.",
  },
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! I\u2019m Signature \u2014 the GDGSS admissions assistant. How may I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 15000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  const findAnswer = (text) => {
    const t = text.toLowerCase();
    // first match by keyword
    const item = FAQ.find((f) => {
      const keys = f.q.toLowerCase();
      return keys.split(/\W+/).filter((w) => w.length > 3).some((w) => t.includes(w));
    });
    if (item) return item.a;
    if (/(fee|fees|cost|charge)/i.test(text)) {
      return "Fee details are shared with shortlisted families after the campus visit and counselling. Please tap ENQUIRE or call +91 70820 09200 and our admissions team will guide you.";
    }
    if (/(transport|bus|pickup)/i.test(text)) {
      return "We operate a GPS-monitored, air-conditioned transport fleet covering most of Gurugram & South Delhi. Routes are confirmed at the time of admission.";
    }
    if (/(hello|hi|hey|namaste)/i.test(text)) {
      return "Hi there! Tap one of the quick questions below, or type your own.";
    }
    return "That\u2019s a great question. Our admissions team can answer that in detail \u2014 please tap ENQUIRE or call +91 70820 09200.";
  };

  const send = (text) => {
    const value = (text ?? input).trim();
    if (!value) return;
    setMessages((m) => [...m, { role: "user", text: value }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: findAnswer(value) }]);
    }, 450);
  };

  if (!open) return null;

  return (
    <div className="fixed right-4 bottom-4 md:right-7 md:bottom-7 z-[70] w-[min(92vw,380px)] fade-up">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-[rgba(184,148,86,0.4)]" style={{ background: "var(--navy-deep)" }}>
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3.5" style={{ background: "var(--navy)" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-white" style={{ border: "1px solid rgba(184,148,86,0.5)" }}>
            <img src={LOGO_URL} alt="" className="w-7 h-7 object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="serif text-white text-[17px] leading-tight flex items-center gap-1.5">
              Signature <Sparkles size={13} className="text-[var(--gold)]" />
            </div>
            <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--gold-light)]">Admissions Assistant</div>
          </div>
          <button onClick={handleClose} aria-label="Close" className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="px-4 py-4 max-h-[360px] overflow-y-auto space-y-3 no-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] text-[13.5px] leading-[1.55] px-3.5 py-2.5 rounded-2xl ${
                  m.role === 'user'
                    ? 'rounded-br-sm bg-[var(--gold)] text-[var(--navy-deep)]'
                    : 'rounded-bl-sm bg-white/5 text-white border border-[rgba(184,148,86,0.18)]'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Quick questions */}
        <div className="px-4 pb-3 pt-1">
          <div className="text-[10px] tracking-[0.24em] uppercase text-[var(--gold-light)] mb-2">Quick Questions</div>
          <div className="flex flex-wrap gap-1.5">
            {FAQ.slice(0, 5).map((f) => (
              <button
                key={f.q}
                onClick={() => send(f.q)}
                className="text-[11.5px] px-2.5 py-1.5 rounded-full border border-[rgba(184,148,86,0.4)] text-white/85 hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] hover:border-[var(--gold)] transition-colors"
              >
                {f.q}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); send(); }}
          className="flex items-center gap-2 p-3 border-t border-[rgba(184,148,86,0.18)]"
        >
          <MessageSquare size={16} className="text-[var(--gold-light)] shrink-0" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            className="flex-1 bg-transparent text-white placeholder:text-white/40 text-[13.5px] outline-none px-1 py-1.5"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors disabled:opacity-40"
            style={{ background: "var(--gold)", color: "var(--navy-deep)" }}
            aria-label="Send"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
