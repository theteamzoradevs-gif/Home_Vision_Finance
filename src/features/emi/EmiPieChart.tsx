"use client";

import { formatCurrency } from "@/lib/utils";

interface EmiPieChartProps {
  principal: number;
  interest: number;
  principalPercent: number;
  interestPercent: number;
}

function polarToCartesian(cx: number, cy: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

function describePieSlice(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  if (endAngle - startAngle >= 360) {
    return `M ${cx} ${cy - radius} A ${radius} ${radius} 0 1 1 ${cx - 0.001} ${cy - radius} Z`;
  }

  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  return `M ${cx} ${cy} L ${end.x} ${end.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${start.x} ${start.y} Z`;
}

export function EmiPieChart({
  principal,
  interest,
  principalPercent,
  interestPercent,
}: EmiPieChartProps) {
  const cx = 60;
  const cy = 60;
  const radius = 52;
  const principalAngle = (principalPercent / 100) * 360;
  const principalPath =
    principalPercent > 0 ? describePieSlice(cx, cy, radius, 0, principalAngle) : "";
  const interestPath =
    interestPercent > 0
      ? describePieSlice(cx, cy, radius, principalAngle, 360)
      : principalPercent === 0
        ? describePieSlice(cx, cy, radius, 0, 360)
        : "";

  return (
    <div
      className="flex min-h-[120px] items-center gap-3 sm:min-h-[140px] sm:gap-5"
      role="img"
      aria-label={`Loan breakdown: ${principalPercent}% principal, ${interestPercent}% interest`}
    >
      <div className="relative h-[100px] w-[100px] shrink-0 sm:h-[120px] sm:w-[120px]">
        <svg
          viewBox="0 0 120 120"
          width="100%"
          height="100%"
          className="block"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <circle cx={cx} cy={cy} r={radius} fill="#f1f5f9" />

          {interestPath && <path d={interestPath} fill="#94a3b8" />}

          {principalPath && <path d={principalPath} fill="#1a4f9e" />}
        </svg>
      </div>

      <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
        <div className="flex min-h-[44px] items-center gap-2 sm:min-h-[48px] sm:gap-3">
          <span className="h-3 w-3 shrink-0 rounded-sm bg-brand sm:h-3.5 sm:w-3.5" aria-hidden />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">Principal Amount</p>
            <p className="text-[11px] tabular-nums text-slate-500 sm:text-sm">
              {formatCurrency(principal)} ({principalPercent}%)
            </p>
          </div>
        </div>
        <div className="flex min-h-[44px] items-center gap-2 sm:min-h-[48px] sm:gap-3">
          <span className="h-3 w-3 shrink-0 rounded-sm bg-slate-400 sm:h-3.5 sm:w-3.5" aria-hidden />
          <div className="min-w-0">
            <p className="text-xs font-semibold text-navy sm:text-sm">Interest Amount</p>
            <p className="text-[11px] tabular-nums text-slate-500 sm:text-sm">
              {formatCurrency(interest)} ({interestPercent}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
