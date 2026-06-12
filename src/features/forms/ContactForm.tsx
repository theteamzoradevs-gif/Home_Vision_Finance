"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { submitContactForm } from "@/lib/api/contactService";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const SERVICE_OPTIONS = [
  { value: "", label: "Select inquiry type" },
  { value: "home loan", label: "Home Loan" },
  { value: "loan against property", label: "Loan Against Property" },
  { value: "balance-transfer", label: "Balance Transfer" },
  { value: "other", label: "Other" },
];

const NAME_PATTERN = /^[a-zA-Z\s]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  } else if (!NAME_PATTERN.test(values.fullName.trim())) {
    errors.fullName = "Only alphabets are allowed in the name field.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[0-9]{10}$/.test(values.phone)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (!values.serviceType) errors.serviceType = "Please select an inquiry type.";

  if (values.message.trim() && values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    try {
      await submitContactForm(values);

      setSubmitted(true);
      setValues({ fullName: "", email: "", phone: "", serviceType: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      console.error("Form transmission failed:", err);
      const message = err instanceof Error ? err.message : "Failed to submit inquiry. Please try again.";
      setSubmitError(message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="form-card p-10 text-center" role="status">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl text-white">
          ✓
        </div>
        <h3 className="font-heading text-xl font-bold text-navy">Message Sent!</h3>
        <p className="mt-2 text-slate-600">We will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-card p-8" noValidate>
      <div className="form-card-accent" />
      <h3 className="font-heading text-xl font-bold text-navy">Send an Inquiry</h3>
      <p className="mb-5 text-sm text-slate-500">Fill in your details and we&apos;ll respond promptly.</p>

      {submitError && (
        <div role="alert" className="mb-4 rounded-xl bg-red-50 p-3 text-xs font-medium text-red-600">
          {submitError}
        </div>
      )}

      <Input
        label="Full Name"
        value={values.fullName}
        onChange={(e) => {
          const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
          setValues({ ...values, fullName: onlyLetters });
        }}
        error={errors.fullName}
        required
      />

      <Input
        label="Email Address"
        type="email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        error={errors.email}
        required
      />

      <Input
        label="Mobile Number"
        type="tel"
        maxLength={10}
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value.replace(/\D/g, "") })}
        error={errors.phone}
        required
      />

      <Select
        label="Inquiry Type"
        options={SERVICE_OPTIONS}
        value={values.serviceType}
        onChange={(e) => setValues({ ...values, serviceType: e.target.value })}
        error={errors.serviceType}
        required
      />

      <Textarea
        label="Message"
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        error={errors.message}
      />

      <Button type="submit" className="w-full justify-center" disabled={loading}>
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
