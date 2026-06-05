"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Icons } from "@/components/ui/icons";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PHONE, WHATSAPP_HOME } from "@/lib/constants";

// Form Dropdown Options
const AMOUNT_OPTIONS = [
  { value: "", label: "Select range" },
  { value: "upto-20L", label: "Up to ₹20L" },
  { value: "20-50L", label: "₹20 - 50L" },
  { value: "50L-1Cr", label: "₹50L - 1Cr" },
  { value: "1Cr-3Cr", label: "₹1 - 3Cr" },
  { value: "3Cr+", label: "Above ₹3Cr" },
];

const WORDS = ["Trusted Banking Partners", "SBI Authorised Partners", "₹0 Processing Fees"];

const HERO_USPS = [
  { text: "₹0 Processing Fees", isGreen: true, subtitle: "Save Thousands" },
  { text: "Processing Support & Quick Eligibility", isGreen: false, subtitle: "End-to-end documentation help" },
  { text: "Builder & Broker Coordination", isGreen: false, subtitle: "We handle the running around" },
  { text: "Rates starting from 8.50%* p.a.", isGreen: false, subtitle: "Best market rates compared" },
];

const TAGS = ["Fresh Purchase", "Resale", "Balance Transfer", "Plot Loan", "Construction"];

// --- INTERNAL LEAD FORM COMPONENT ---
function InlineLeadForm() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", amount: "", city: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || form.phone.length !== 10 || !form.amount || !form.city) {
      alert("Please fill all fields correctly.");
      return;
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setForm({ name: "", phone: "", amount: "", city: "" });
  };

  if (success) {
    return (
      <div className="rounded-[20px] border border-slate-200 bg-white p-8 text-center shadow-card-lg">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-pale text-2xl text-accent">
          ✓
        </div>
        <h3 className="font-heading text-lg font-bold text-navy">Thank You!</h3>
        <p className="mt-1 text-sm text-slate-500">Our loan expert will call you within 30 minutes.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5 shadow-card-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-accent" />
      <h3 className="font-heading text-base font-bold text-navy">Get Free Consultation</h3>
      <p className="mb-3 text-xs text-slate-500">Expert callback in minutes</p>
      
      <form onSubmit={submit} className="space-y-3">
        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          minLength={3}
        />
        
        <Input
          label="Mobile Number"
          type="tel"
          placeholder="10-digit mobile number"
          maxLength={10}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
          required
          pattern="[6-9][0-9]{9}"
        />

        <div className="grid grid-cols-2 gap-3">
          <Select
            label="Loan Amount"
            options={AMOUNT_OPTIONS}
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            required
          />
          <Input
            label="City"
            placeholder="e.g. Delhi, Noida"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            required
            minLength={3}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-brand to-brand-light py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-light hover:to-brand hover:shadow-[0_8px_24px_rgba(26,79,158,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        >
          Check Eligibility — Free →
        </button>
        
        <p className="my-2 text-center text-xs font-medium text-slate-400">or</p>
        
        <Button href={WHATSAPP_HOME} variant="green" className="w-full justify-center py-2.5 text-sm" external>
          {Icons.wa} WhatsApp Instant Response
        </Button>
        
        <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          {Icons.shield} Information is 100% secure
        </p>
      </form>
    </div>
  );
}

// --- MAIN HERO SECTION COMPONENT ---
export function HeroSection() {
  const currentWord = useTypewriter(WORDS);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-brand-pale/50 to-white pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/5" />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white">
            {Icons.shield} SBI Authorised Channel Partner
          </div>
          
          <h1 className="font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl lg:text-4xl">
            <span className="bg-gradient-to-r from-navy to-brand bg-clip-text text-transparent block sm:inline">
              Fast Home Loan Approval with
            </span>
            <br />
            <span className="italic text-brand block mt-1">
              {currentWord}
              <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-brand align-middle" aria-hidden />
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
            SBI is our authorised partner for priority support. We also compare offers across leading banks to get you the best fit.
          </p>

          {/* Ultra-compact Tags with Smooth Vibrant Blue Hover Transition */}
          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-full bg-[#004094] px-3 py-1 text-xs font-bold text-white transition-all duration-200 ease-in-out hover:bg-[#2563eb] shadow-[0_4px_10px_rgba(0,64,148,0.3)] hover:shadow-[0_4px_12px_rgba(37,99,235,0.45)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Re-designed Smaller USPs Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {HERO_USPS.map((item) => (
              <div 
                key={item.text} 
                className={`flex items-center gap-3 rounded-xl border p-3.5 shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${
                  item.isGreen
                    ? "border-amber-200/80 bg-amber-50/60 ring-1 ring-amber-200/50 hover:border-amber-300"
                    : "border-slate-100 bg-white hover:border-blue-200"
                }`}
              >
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  item.isGreen ? "bg-amber-400 text-white" : "bg-blue-50 text-blue-600"
                }`}>
                  <span className="h-3.5 w-3.5 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                    {Icons.check}
                  </span>
                </div>
                <div>
                  <h4 className={`text-[13px] font-bold leading-tight ${
                    item.isGreen ? "text-amber-700" : "text-navy"
                  }`}>
                    {item.text}
                  </h4>
                  <p className={`text-[11px] mt-0.5 ${
                    item.isGreen ? "text-amber-600/80" : "text-slate-400"
                  }`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" variant="green" size="lg">
              Get Free Consultation →
            </Button>

            <div className="relative inline-block group">
              {/* Tooltip Popup */}
              <span className="absolute bottom-full left-1/2 mb-2 z-10 scale-0 opacity-0 bg-blue-600 text-white text-lg font-semibold px-3 py-1.5 rounded-lg shadow-md transition-all duration-200 origin-bottom center group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap">
                Call Now
                <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-blue-600"></span>
              </span>

              {/* Icon Button */}
              <Button 
                href={`tel:${PHONE}`} 
                variant="ghost" 
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8fafc] p-0 text-[#2563eb] hover:bg-[#f1f5f9] transition-colors focus:ring-0 focus-visible:ring-0 shadow-sm"
              >
                <span className="h-6 w-6 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                  {Icons.phone}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Render merged form component */}
        <InlineLeadForm />
      </div>
    </section>
  );
}