"use client";

import { Fragment, useState } from "react";
import { Icons } from "@/components/ui/icons";
import type { YearlySchedule } from "@/lib/emi";
import { cn, formatCurrency } from "@/lib/utils";

export function EmiRepaymentSchedule({
  schedule,
  integrated = false,
}: {
  schedule: YearlySchedule[];
  integrated?: boolean;
}) {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div
      className={cn(
        integrated
          ? "mt-12 border-t border-slate-200 pt-10"
          : "mt-12 rounded-[20px] border border-slate-200 bg-white p-6 shadow-card sm:p-8"
      )}
    >
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-navy">Home Loan Repayment Schedule</h3>
        <p className="text-sm text-slate-500">
          Yearly and monthly principal vs interest split over your entire loan duration.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[640px] text-left text-sm text-slate-600">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <tr>
              <th className="sticky left-0 z-10 bg-slate-50 px-5 py-4">Year / Month</th>
              <th className="px-5 py-4">Principal Paid</th>
              <th className="px-5 py-4">Interest Paid</th>
              <th className="px-5 py-4">Total Payment</th>
              <th className="px-5 py-4 text-right">Outstanding Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {schedule.map((yearRow) => {
              const isExpanded = expandedYear === yearRow.period;
              return (
                <Fragment key={yearRow.period}>
                  <tr
                    className="cursor-pointer font-medium text-navy transition-colors hover:bg-slate-50/80"
                    onClick={() => toggleYear(yearRow.period)}
                  >
                    <td className="sticky left-0 z-10 bg-white px-5 py-4">
                      <span className="flex items-center gap-2">
                        <span
                          className={cn(
                            "flex h-4 w-4 items-center justify-center text-slate-400 transition-transform duration-200",
                            isExpanded && "rotate-90"
                          )}
                        >
                          {Icons.chevronRight}
                        </span>
                        Year {yearRow.period}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-700">{formatCurrency(yearRow.principalPaid)}</td>
                    <td className="px-5 py-4 text-slate-700">{formatCurrency(yearRow.interestPaid)}</td>
                    <td className="px-5 py-4 text-slate-700">{formatCurrency(yearRow.totalPayment)}</td>
                    <td className="px-5 py-4 text-right font-semibold text-brand">
                      {formatCurrency(yearRow.remainingBalance)}
                    </td>
                  </tr>

                  {isExpanded &&
                    yearRow.months.map((monthRow) => (
                      <tr
                        key={`m-${yearRow.period}-${monthRow.period}`}
                        className="bg-slate-50/50 text-xs font-normal text-slate-600"
                      >
                        <td className="sticky left-0 z-10 bg-slate-50/50 px-5 py-3 pl-11 text-slate-500">
                          Month {monthRow.period}
                        </td>
                        <td className="px-5 py-3">{formatCurrency(monthRow.principalPaid)}</td>
                        <td className="px-5 py-3">{formatCurrency(monthRow.interestPaid)}</td>
                        <td className="px-5 py-3">{formatCurrency(monthRow.totalPayment)}</td>
                        <td className="px-5 py-3 text-right text-slate-700">
                          {formatCurrency(monthRow.remainingBalance)}
                        </td>
                      </tr>
                    ))}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
