import { STATS } from "@/lib/constants";

export function StatsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-card-lg"
        >
          <div className="font-heading text-3xl font-extrabold text-brand sm:text-4xl">{stat.value}</div>
          <div className="mt-1 text-sm font-medium text-slate-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
