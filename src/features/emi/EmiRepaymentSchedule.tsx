"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

interface ScheduleRow {
  period: number;
  principalPaid: number;
  interestPaid: number;
  totalPayment: number;
  remainingBalance: number;
  months: any[];
}

export function EmiRepaymentSchedule({ schedule }: { schedule: ScheduleRow[] }) {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-card sm:p-8 mt-12">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-navy">Home Loan Repayment Schedule</h3>
        <p className="text-sm text-slate-500">Yearly and monthly principal vs interest split over your entire loan duration.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-200">
            <tr>
              <th className="py-4 px-5">Year / Month</th>
              <th className="py-4 px-5">Principal Paid</th>
              <th className="py-4 px-5">Interest Paid</th>
              <th className="py-4 px-5">Total Payment</th>
              <th className="py-4 px-5 text-right">Outstanding Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {schedule.map((yearRow) => {
              const isExpanded = expandedYear === yearRow.period;
              return (
                <caption key={yearRow.period} className="contents">
                  {/* Yearly Row */}
                  <tr 
                    className="cursor-pointer transition-colors hover:bg-slate-50/80 font-medium text-navy"
                    onClick={() => toggleYear(yearRow.period)}
                  >
                    <td className="py-4 px-5 flex items-center gap-2">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                      >
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                      </svg>
                      Year {yearRow.period}
                    </td>
                    <td className="py-4 px-5 text-slate-700">{formatCurrency(yearRow.principalPaid)}</td>
                    <td className="py-4 px-5 text-slate-700">{formatCurrency(yearRow.interestPaid)}</td>
                    <td className="py-4 px-5 text-slate-700">{formatCurrency(yearRow.totalPayment)}</td>
                    <td className="py-4 px-5 text-right font-semibold text-brand">
                      {formatCurrency(yearRow.remainingBalance)}
                    </td>
                  </tr>

                  {/* Monthly Rows */}
                  {isExpanded && yearRow.months.map((monthRow) => (
                    <tr key={`m-${monthRow.period}`} className="bg-slate-50/50 text-xs text-slate-600 font-normal">
                      <td className="py-3 px-5 pl-11 text-slate-500">Month {monthRow.period}</td>
                      <td className="py-3 px-5">{formatCurrency(monthRow.principalPaid)}</td>
                      <td className="py-3 px-5">{formatCurrency(monthRow.interestPaid)}</td>
                      <td className="py-3 px-5">{formatCurrency(monthRow.totalPayment)}</td>
                      <td className="py-3 px-5 text-right text-slate-700">
                        {formatCurrency(monthRow.remainingBalance)}
                      </td>
                    </tr>
                  ))}
                </caption>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}