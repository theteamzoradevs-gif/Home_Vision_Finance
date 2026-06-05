"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Icons } from "@/components/ui/icons";

type CallbackModalProps = {
  open: boolean;
  onClose: () => void;
};

function validatePhone(phone: string) {
  if (!phone.trim()) return "Phone number is required";
  if (!/^[6-9][0-9]{9}$/.test(phone)) return "Enter a valid 10-digit mobile number";
  return undefined;
}

export function CallbackModal({ open, onClose }: CallbackModalProps) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => {
      document.getElementById("mobile-number")?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setPhone("");
      setError(undefined);
      setLoading(false);
      setSubmitted(false);
    }
  }, [open]);

  useEffect(() => {
    if (!submitted) return;

    const timer = window.setTimeout(() => {
      onClose();
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [submitted, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading || submitted) return;

    const nextError = validatePhone(phone);
    setError(nextError);
    if (nextError) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    console.log("Callback request:", phone);
    setLoading(false);
    setSubmitted(true);
    setPhone("");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1004] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close callback form"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-modal-title"
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-card-lg sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          aria-label="Close"
        >
          {Icons.close}
        </button>

        {submitted ? (
          <div className="pt-2 text-center" role="status">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-pale text-2xl text-brand">
              ✓
            </div>
            <h3 id="callback-modal-title" className="font-heading text-xl font-bold text-navy">
              Request Received
            </h3>
            <p className="mt-2 text-slate-600">Our team will call you soon.</p>
          </div>
        ) : (
          <>
            <h3 id="callback-modal-title" className="font-heading text-xl font-bold text-navy">
              Instant Callback
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Enter your mobile number and our loan expert will call you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <Input
                id="mobile-number"
                label="Mobile Number"
                type="tel"
                placeholder="10-digit mobile number"
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, ""));
                  if (error) setError(undefined);
                }}
                error={error}
                required
                pattern="[6-9][0-9]{9}"
                className="mb-0"
              />

              <Button
                type="submit"
                variant="primary"
                className="mt-4 w-full justify-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
