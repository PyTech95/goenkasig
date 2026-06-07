import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { LOGO_URL } from "../mock";

export default function EnquiryDialog({ open, onOpenChange }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", grade: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock submission — saves to localStorage for now
    const all = JSON.parse(localStorage.getItem("gdgss_enquiries") || "[]");
    all.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("gdgss_enquiries", JSON.stringify(all));
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Thank you. Our admissions team will reach out shortly.");
    setForm({ name: "", email: "", phone: "", grade: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[560px] p-0 border-0 overflow-hidden" style={{ background: "var(--navy-deep)", color: "#fff" }}>
        <div className="p-8 md:p-10">
          <DialogHeader className="items-center text-center">
            <img src={LOGO_URL} alt="GD Goenka Signature" className="h-12 w-auto mb-2" />
            <DialogTitle className="serif text-white text-[28px] md:text-[34px] leading-tight">
              Begin your <span className="serif-italic gold-text">enquiry.</span>
            </DialogTitle>
            <DialogDescription className="text-white/65 text-[14px] mt-1">
              We'll respond within one working day.
            </DialogDescription>
          </DialogHeader>
          <span className="gold-divider-thin block mx-auto my-6" />
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field id="name" label="Parent Name" value={form.name} onChange={(v) => onChange("name", v)} required />
            <Field id="email" label="Email" type="email" value={form.email} onChange={(v) => onChange("email", v)} required />
            <Field id="phone" label="Phone" value={form.phone} onChange={(v) => onChange("phone", v)} required />
            <div className="space-y-2">
              <Label className="text-[11px] tracking-[0.24em] uppercase text-[var(--gold-light)]">Grade Applying For</Label>
              <Select value={form.grade} onValueChange={(v) => onChange("grade", v)}>
                <SelectTrigger className="bg-transparent border-x-0 border-t-0 border-b border-[rgba(184,148,86,0.4)] rounded-none text-white focus:ring-0 focus:border-[var(--gold)]">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {["Pre-Nursery", "Nursery", "K1 — K2", "Grade 1 — 5", "Grade 6 — 9", "Grade 11"].map((g) => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label className="text-[11px] tracking-[0.24em] uppercase text-[var(--gold-light)]">Message</Label>
              <Textarea
                value={form.message}
                onChange={(e) => onChange("message", e.target.value)}
                rows={3}
                className="bg-transparent border-x-0 border-t-0 border-b border-[rgba(184,148,86,0.4)] rounded-none text-white focus-visible:ring-0 focus-visible:border-[var(--gold)] resize-none"
              />
            </div>
            <button type="submit" disabled={loading} className="md:col-span-2 btn-gold mt-3" style={{ background: "var(--gold)", color: "var(--navy)" }}>
              {loading ? "Sending\u2026" : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ id, label, value, onChange, type = "text", required }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[11px] tracking-[0.24em] uppercase text-[var(--gold-light)]">{label}</Label>
      <Input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-x-0 border-t-0 border-b border-[rgba(184,148,86,0.4)] rounded-none text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-[var(--gold)] px-0"
      />
    </div>
  );
}
