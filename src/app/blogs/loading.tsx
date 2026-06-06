export default function BlogsLoading() {
  return (
    <section className="section-padding section-gradient-neutral">
      <div className="container-site">
        <div className="mb-8 flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-24 animate-pulse rounded-full bg-slate-200" />
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-2xl border border-slate-200 bg-white p-7">
              <div className="h-5 w-20 rounded-full bg-slate-200" />
              <div className="mt-4 h-6 w-full rounded bg-slate-200" />
              <div className="mt-2 h-4 w-full rounded bg-slate-100" />
              <div className="mt-2 h-4 w-3/4 rounded bg-slate-100" />
              <div className="mt-6 h-3 w-32 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
