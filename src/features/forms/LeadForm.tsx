"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Icons } from "@/components/ui/icons";
import { WHATSAPP_HOME } from "@/lib/constants";

const AMOUNT_OPTIONS = [
  { value: "", label: "Select amount range" },
  { value: "upto-20L", label: "Up to ₹20 Lakhs" },
  { value: "20-50L", label: "₹20 - 50 Lakhs" },
  { value: "50L-1Cr", label: "₹50 Lakhs - 1 Crore" },
  { value: "1Cr-3Cr", label: "₹1 - 3 Crore" },
  { value: "3Cr+", label: "Above ₹3 Crore" },
];

type LeadFormProps = {
  title?: string;
  subtitle?: string;
};

export function LeadForm({
  title = "Get Free Consultation",
  subtitle = "Quick details — expert callback in minutes",
}: LeadFormProps) {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", amount: "", city: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead:", form);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setForm({ name: "", phone: "", amount: "", city: "" });
  };

  if (success) {
    return (
      <div className="rounded-[20px] border border-slate-200 bg-white p-10 text-center shadow-card-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-pale text-3xl text-accent">
          ✓
        </div>
        <h3 className="font-heading text-xl font-bold text-navy">Thank You!</h3>
        <p className="mt-2 text-slate-500">Our loan expert will call you within 30 minutes.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-8 shadow-card-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-accent" />
      <h3 className="font-heading text-xl font-bold text-navy">{title}</h3>
      <p className="mb-5 text-sm text-slate-500">{subtitle}</p>
      <form onSubmit={submit}>
        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={form.name}
          // Yahan changes kiye hain: sirf letters aur spaces allow honge
          pattern="^[a-zA-Z\s]+$"
          onChange={(e) => {
            const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
            setForm({ ...form, name: onlyLetters });
          }}
          required
        />
        <Input
          label="Mobile Number"
          type="tel"
          placeholder="10-digit mobile number"
          maxLength={10}
          pattern="[0-9]{10}"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
          required
        />
        <Select
          label="Loan Amount"
          options={AMOUNT_OPTIONS}
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
        <Input
          label="City"
          placeholder="e.g. Delhi, Noida, Gurgaon"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-accent to-emerald-700 py-3.5 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Check Eligibility — It&apos;s Free →
        </button>
        <p className="my-3 text-center text-xs font-medium text-slate-400">or</p>
        <Button href={WHATSAPP_HOME} variant="green" className="w-full justify-center" external>
          {Icons.wa} WhatsApp for Instant Response
        </Button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
          {Icons.shield} Your information is 100% safe & secure
        </p>
      </form>
    </div>
  );
}