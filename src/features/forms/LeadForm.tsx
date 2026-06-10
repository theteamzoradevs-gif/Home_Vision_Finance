"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Icons } from "@/components/ui/icons";
import { WHATSAPP_HOME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/lib/api/contactService";

const AMOUNT_OPTIONS = [
  { value: "", label: "Select range" },
  { value: "2000000", label: "Up to ₹20L" },
  { value: "5000000", label: "₹20L – 50L" },
  { value: "10000000", label: "₹50L – 1Cr" },
  { value: "30000000", label: "₹1 – 3 Cr" },
  { value: "30000001", label: "Above ₹3 Cr" },
];

type LeadFormProps = {
  variant?: "default" | "compact";
  title?: string;
  subtitle?: string;
};

type FormState = {
  fullName: string;
  phone: string;
  loanAmount: string;
  city: string;
  serviceType: string;
};

export function LeadForm({
  variant = "default",
  title = "Get Free Consultation",
  subtitle = "Quick details — expert callback in minutes",
}: LeadFormProps) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    loanAmount: "",
    city: "",
    serviceType: "home loan",
  });

  const isCompact = variant === "compact";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!form.fullName || form.phone.length !== 10 || !form.loanAmount || !form.city) return;

    setLoading(true);
    try {
      await submitContactForm({
        fullName: form.fullName,
        email: `${form.fullName.toLowerCase().replace(/\s+/g, "")}${Math.floor(Math.random() * 1000)}@homevision.com`,
        phone: form.phone,
        loanAmount: Number(form.loanAmount),
        city: form.city,
        serviceType: form.serviceType,
        message: `Consultation request initialized via home page main quick widget block.`,
      });

      setSuccess(true);
      setForm({ fullName: "", phone: "", loanAmount: "", city: "", serviceType: "home loan" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: unknown) {
      console.error("Quick Lead submission failed:", err);
      const message = err instanceof Error ? err.message : "Failed to submit lead parameters. Please try again.";
      setSubmitError(message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className={cn(
          "form-card text-center",
          isCompact ? "bg-white/95 p-6 backdrop-blur-sm" : "p-10"
        )}
        role="status"
      >
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-pale text-xl text-brand">
          ✓
        </div>
        <h3 className={cn("font-heading font-bold text-navy", isCompact ? "text-base" : "text-xl")}>
          Thank You!
        </h3>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm">Our loan expert will call you within 30 minutes.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "form-card",
        isCompact ? "bg-white/95 p-4 backdrop-blur-sm sm:p-5" : "p-8"
      )}
    >
      <div className="form-card-accent" />
      <h3 className={cn("font-heading font-bold text-navy", isCompact ? "text-sm sm:text-base" : "text-xl")}>
        {title}
      </h3>
      <p className={cn("text-slate-500", isCompact ? "mb-2.5 text-[11px] sm:text-xs" : "mb-5 text-sm")}>
        {subtitle}
      </p>

      {submitError && (
        <div
          role="alert"
          className={cn(
            "rounded-xl bg-red-50 text-center font-medium text-red-600",
            isCompact ? "mb-2.5 p-2 text-[11px]" : "mb-4 p-2.5 text-xs"
          )}
        >
          {submitError}
        </div>
      )}

      <form onSubmit={submit} className={isCompact ? "space-y-0" : undefined}>
        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={form.fullName}
          pattern="^[a-zA-Z\s]+$"
          onChange={(e) => {
            const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
            setForm({ ...form, fullName: onlyLetters });
          }}
          required
          minLength={3}
          compact={isCompact}
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
          compact={isCompact}
        />

        {isCompact ? (
          <div className="grid grid-cols-2 gap-2.5">
            <Select
              label="Loan Amount"
              options={AMOUNT_OPTIONS}
              value={form.loanAmount}
              onChange={(e) => setForm({ ...form, loanAmount: e.target.value })}
              required
              compact
            />
            <Input
              label="City"
              placeholder="e.g. Delhi"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
              minLength={3}
              compact
            />
          </div>
        ) : (
          <>
            <Select
              label="Loan Amount"
              options={AMOUNT_OPTIONS}
              value={form.loanAmount}
              onChange={(e) => setForm({ ...form, loanAmount: e.target.value })}
              required
            />
            <Input
              label="City"
              placeholder="e.g. Delhi, Noida, Gurgaon"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
              minLength={3}
            />
          </>
        )}

        <Button
          type="submit"
          variant="primary"
          size={isCompact ? "sm" : "md"}
          className={cn("w-full justify-center", isCompact && "py-2.5 text-xs sm:text-sm")}
          disabled={loading}
        >
          {loading ? "Processing..." : "Check Free Eligibility"}
        </Button>

        <p
          className={cn(
            "text-center text-xs font-medium text-slate-400",
            isCompact ? "my-1.5 text-[10px]" : "my-3"
          )}
        >
          or
        </p>

        <Button
          href={WHATSAPP_HOME}
          variant="whatsappSolid"
          size={isCompact ? "sm" : "md"}
          className={cn("w-full justify-center", isCompact && "py-2.5 text-xs sm:text-sm")}
          external
        >
          {Icons.wa} WhatsApp Instant Response
        </Button>

        <p
          className={cn(
            "flex items-center justify-center gap-1.5 text-slate-400",
            isCompact ? "mt-2 text-[10px]" : "mt-3 text-xs"
          )}
        >
          {Icons.shield} Your information is 100% safe & secure
        </p>
      </form>
    </div>
  );
}
