"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { calculateEmi } from "@/lib/emi";
import { formatCurrency } from "@/lib/utils";
import { EmiPieChart } from "./EmiPieChart";
import { EmiRepaymentSchedule } from "./EmiRepaymentSchedule";

interface EmiCalculatorWidgetProps {
  showCta?: boolean;
  showScheduleInline?: boolean;
  collapsibleSchedule?: boolean;
}

export function EmiCalculatorWidget({
  showCta = true,
  showScheduleInline = false,
  collapsibleSchedule = false,
}: EmiCalculatorWidgetProps) {
  const [amount, setAmount] = useState(5_000_000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const result = useMemo(() => calculateEmi(amount, rate, tenure), [amount, rate, tenure]);

  return (
    <div className="space-y-0">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Left Side: Inputs */}
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

        {/* Right Side: Output Results Container */}
        <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-card sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
            Monthly Payment
          </p>
          <div className="mt-1 font-heading text-3xl font-extrabold text-brand sm:text-5xl">
            {formatCurrency(result.emi)}
          </div>
          <p className="mb-5 text-xs text-slate-400 sm:mb-6 sm:text-sm">Estimated EMI per month</p>

          <div className="mb-5 min-h-[148px] rounded-xl border border-slate-100 p-3 sm:mb-6 sm:min-h-[168px] sm:p-5">
            <EmiPieChart
              principal={amount}
              interest={result.totalInterest}
              principalPercent={result.principalPercent}
              interestPercent={result.interestPercent}
            />
          </div>

          {/* Bottom Breakdown Metric Grid */}
          <div className="grid grid-cols-3 gap-1.5 border-t border-slate-100 pt-4 sm:gap-3 sm:pt-5">
            <div className="rounded-lg bg-slate-50/60 p-2 text-center sm:bg-transparent sm:p-3 sm:text-left">
              <span className="block text-[9px] font-semibold uppercase tracking-wide text-slate-400 sm:text-xs">
                Total Interest
              </span>
              <strong className="mt-1 block text-xs font-bold leading-tight text-navy sm:text-lg">
                {formatCurrency(result.totalInterest)}
              </strong>
            </div>
            <div className="rounded-lg bg-slate-50/60 p-2 text-center sm:bg-transparent sm:p-3 sm:text-left">
              <span className="block text-[9px] font-semibold uppercase tracking-wide text-slate-400 sm:text-xs">
                Total Payment
              </span>
              <strong className="mt-1 block text-xs font-bold leading-tight text-navy sm:text-lg">
                {formatCurrency(result.totalPayment)}
              </strong>
            </div>
            <div className="rounded-lg bg-slate-50/60 p-2 text-center sm:bg-transparent sm:p-3 sm:text-left">
              <span className="block text-[9px] font-semibold uppercase tracking-wide text-slate-400 sm:text-xs">
                Monthly EMI
              </span>
              <strong className="mt-1 block text-xs font-bold leading-tight text-brand sm:text-lg">
                {formatCurrency(result.emi)}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {showScheduleInline && <EmiRepaymentSchedule schedule={result.schedule} integrated />}

      {collapsibleSchedule && (
        <div className="mt-16 flex justify-center border-t border-slate-100 pt-10 sm:mt-20 sm:pt-12 lg:mt-24">
          <Link
            href="/emi-calculator#repayment-schedule"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-light active:translate-y-0 active:bg-navy active:shadow-sm focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Repayment Schedule
          </Link>
        </div>
      )}
    </div>
  );
}
