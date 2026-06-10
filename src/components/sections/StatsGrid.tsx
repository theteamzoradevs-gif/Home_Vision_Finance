import { STATS } from "@/lib/constants";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-6">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex min-h-[88px] flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white px-2 py-4 text-center shadow-card ring-1 ring-brand/[0.08] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-brand-pale hover:shadow-card-lg hover:ring-brand/15 sm:min-h-[120px] sm:rounded-2xl sm:px-4 sm:py-5 lg:min-h-[140px] lg:p-6"
        >
          <div className="font-heading text-lg font-extrabold leading-none text-brand sm:text-2xl lg:text-4xl">
            {stat.value}
          </div>
          <div className="mt-2 max-w-[120px] text-[10px] font-medium leading-tight text-slate-500 sm:max-w-none sm:text-xs lg:mt-2.5 lg:text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
