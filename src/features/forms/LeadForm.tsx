"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Icons } from "@/components/ui/icons";
import { WHATSAPP_HOME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AMOUNT_OPTIONS = [
  { value: "", label: "Select amount range" },
  { value: "upto-20L", label: "Up to ₹20 Lakhs" },
  { value: "20-50L", label: "₹20 - 50 Lakhs" },
  { value: "50L-1Cr", label: "₹50 Lakhs - 1 Crore" },
  { value: "1Cr-3Cr", label: "₹1 - 3 Crore" },
  { value: "3Cr+", label: "Above ₹3 Crore" },
];

type LeadFormProps = {
  variant?: "default" | "compact";
  title?: string;
  subtitle?: string;
};

export function LeadForm({
  variant = "default",
  title = "Get Free Consultation",
  subtitle = "Quick details — expert callback in minutes",
}: LeadFormProps) {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", amount: "", city: "" });
  const isCompact = variant === "compact";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || form.phone.length !== 10 || !form.amount || !form.city) return;
    console.log("Lead:", form);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setForm({ name: "", phone: "", amount: "", city: "" });
  };

  if (success) {
    return (
      <div
        className={cn(
          "form-card text-center",
          isCompact ? "bg-white/95 p-8 backdrop-blur-sm" : "p-10"
        )}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-pale text-2xl text-brand">
          ✓
        </div>
        <h3 className={cn("font-heading font-bold text-navy", isCompact ? "text-lg" : "text-xl")}>
          Thank You!
        </h3>
        <p className="mt-1 text-sm text-slate-500">Our loan expert will call you within 30 minutes.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "form-card",
        isCompact ? "bg-white/95 p-5 backdrop-blur-sm" : "p-8"
      )}
    >
      <div className="form-card-accent" />
      <h3 className={cn("font-heading font-bold text-navy", isCompact ? "text-base" : "text-xl")}>
        {title}
      </h3>
      <p className={cn("text-slate-500", isCompact ? "mb-3 text-xs" : "mb-5 text-sm")}>{subtitle}</p>
      <form onSubmit={submit} className={isCompact ? "space-y-3" : undefined}>
        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={form.name}
          pattern="^[a-zA-Z\s]+$"
          onChange={(e) => {
            const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
            setForm({ ...form, name: onlyLetters });
          }}
          required
          minLength={3}
        />
        <Input
          label="Mobile Number"
          type="tel"
          placeholder="10-digit mobile number"
          maxLength={10}
          pattern="[6-9][0-9]{9}"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
          required
        />
        {isCompact ? (
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
        ) : (
          <>
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
          </>
        )}
        <Button
          type="submit"
          variant="primary"
          className={cn("w-full justify-center", isCompact ? "py-3 text-sm" : "py-3.5")}
        >
          Check Eligibility — Free
        </Button>
        <p className={cn("text-center text-xs font-medium text-slate-400", isCompact ? "my-2" : "my-3")}>
          or
        </p>
        <Button href={WHATSAPP_HOME} variant="outline" className="w-full justify-center" external>
          {Icons.wa} WhatsApp Instant Response
        </Button>
        <p
          className={cn(
            "flex items-center justify-center gap-1.5 text-slate-400",
            isCompact ? "mt-2.5 text-[11px]" : "mt-3 text-xs"
          )}
        >
          {Icons.shield} Your information is 100% safe & secure
        </p>
      </form>
    </div>
  );
}
