"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const SUBJECT_OPTIONS = [
  { value: "", label: "Select inquiry type" },
  { value: "home-loan", label: "Home Loan" },
  { value: "balance-transfer", label: "Balance Transfer" },
  { value: "lap", label: "Loan Against Property" },
  { value: "other", label: "Other" },
];

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(values.phone)) {
    errors.phone = "Enter a valid 10-digit mobile number";
  }
  if (!values.subject) errors.subject = "Please select an inquiry type";
  if (!values.message.trim()) errors.message = "Message is required";
  else if (values.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact:", values);
    setLoading(false);
    setSubmitted(true);
    setValues({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
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

      <Input
        label="Full Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        error={errors.name}
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
        options={SUBJECT_OPTIONS}
        value={values.subject}
        onChange={(e) => setValues({ ...values, subject: e.target.value })}
        error={errors.subject}
        required
      />
      <Textarea
        label="Message"
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        error={errors.message}
        required
      />
      <Button type="submit" className="w-full justify-center" disabled={loading}>
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
