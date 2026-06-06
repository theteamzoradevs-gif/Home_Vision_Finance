"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";
import { calculateEmi } from "@/lib/emi";
import { formatCurrency } from "@/lib/utils";
import { EmiRepaymentSchedule } from "./EmiRepaymentSchedule";

interface EmiCalculatorWidgetProps {
  showCta?: boolean;
  showScheduleInline?: boolean;
}

export function EmiCalculatorWidget({
  showCta = true,
  showScheduleInline = false,
}: EmiCalculatorWidgetProps) {
  const [amount, setAmount] = useState(5_000_000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => calculateEmi(amount, rate, tenure), [amount, rate, tenure]);
  const rad = 45;
  const circ = 2 * Math.PI * rad;
  const principalArc = (result.principalPercent / 100) * circ;

  return (
    <div className="space-y-0">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <h3 className="mb-8 font-heading text-xl font-bold text-navy">Calculate Your EMI</h3>

          <div className="mb-7">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-600">Loan Amount</span>
              <strong className="text-navy">{formatCurrency(amount)}</strong>
            </div>
            <input
              type="range"
              min={100000}
              max={50000000}
              step={100000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand"
              aria-label="Loan amount"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>₹1 Lakh</span>
              <span>₹5 Crore</span>
            </div>
          </div>

          <div className="mb-7">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-600">Interest Rate (% p.a.)</span>
              <strong className="text-navy">{rate}%</strong>
            </div>
            <input
              type="range"
              min={5}
              max={15}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand"
              aria-label="Interest rate"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>5%</span>
              <span>15%</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-600">Loan Tenure</span>
              <strong className="text-navy">{tenure} Years</strong>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-brand"
              aria-label="Loan tenure"
            />
            <div className="mt-1 flex justify-between text-xs text-slate-400">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>

          {showCta && (
            <Button href="/contact" className="w-full justify-center" size="lg">
              Get Best Rate — Apply Now
            </Button>
          )}
        </div>

        <div className="rounded-[20px] border border-brand/20 bg-gradient-to-br from-brand-pale/60 via-white to-white p-6 shadow-card sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">Monthly Payment</p>
          <div className="mt-2 font-heading text-4xl font-extrabold text-brand sm:text-5xl">
            {formatCurrency(result.emi)}
          </div>
          <p className="mb-6 text-sm text-slate-500">Estimated EMI per month</p>

          <div className="mb-6 flex flex-col items-center gap-6 rounded-xl border border-slate-200/80 bg-white/80 p-5 sm:flex-row">
            <div className="relative h-[130px] w-[130px] shrink-0">
              <svg width="130" height="130" viewBox="0 0 120 120" className="-rotate-90" aria-hidden>
                <circle cx="60" cy="60" r={rad} fill="none" stroke="#e2e8f0" strokeWidth="10" />
                <circle
                  cx="60"
                  cy="60"
                  r={rad}
                  fill="none"
                  stroke="#1a4f9e"
                  strokeWidth="10"
                  strokeDasharray={`${principalArc} ${circ - principalArc}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <small className="text-[10px] text-slate-400">Total</small>
                <strong className="text-xs font-bold text-navy">{formatCurrency(result.totalPayment)}</strong>
              </div>
            </div>
            <div className="w-full space-y-3 text-sm">
              <div className="flex items-center gap-3 rounded-lg bg-brand-pale/50 p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
                  {Icons.rupee}
                </span>
                <div>
                  <div className="font-semibold text-navy">Principal</div>
                  <div className="text-slate-500">
                    {formatCurrency(amount)} ({result.principalPercent}%)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-300 text-navy">
                  {Icons.percent}
                </span>
                <div>
                  <div className="font-semibold text-navy">Interest</div>
                  <div className="text-slate-500">
                    {formatCurrency(result.totalInterest)} ({result.interestPercent}%)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
            <div className="rounded-xl bg-white/70 p-3 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wide text-slate-500">Total Interest</span>
              <strong className="mt-1 block text-navy">{formatCurrency(result.totalInterest)}</strong>
            </div>
            <div className="rounded-xl bg-white/70 p-3 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wide text-slate-500">Total Repayment</span>
              <strong className="mt-1 block text-navy">{formatCurrency(result.totalPayment)}</strong>
            </div>
            <div className="rounded-xl bg-white/70 p-3 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wide text-slate-500">Principal</span>
              <strong className="mt-1 block text-navy">{formatCurrency(amount)}</strong>
            </div>
          </div>
        </div>
      </div>

      {showScheduleInline && (
        <EmiRepaymentSchedule schedule={result.schedule} integrated />
      )}
    </div>
  );
}
