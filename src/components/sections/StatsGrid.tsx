import { STATS } from "@/lib/constants";

export function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col justify-center rounded-xl border border-slate-200/80 bg-white p-2 text-center shadow-card ring-1 ring-brand/[0.08] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-brand-pale hover:shadow-card-lg hover:ring-brand/15 sm:rounded-2xl sm:p-5 lg:p-6"
        >
          <div className="font-heading text-base font-extrabold leading-tight text-brand sm:text-2xl lg:text-4xl">
            {stat.value}
          </div>
          <div className="mt-0.5 text-[10px] font-medium leading-tight text-slate-500 sm:mt-1 sm:text-xs lg:text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
