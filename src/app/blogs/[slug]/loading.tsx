export default function BlogDetailLoading() {
  return (
    <article className="section-padding bg-white">
      <div className="container-site animate-pulse">
        <div className="h-4 w-24 rounded bg-slate-200" />
        <div className="mt-6 aspect-[16/9] w-full rounded-2xl bg-slate-200" />
        <div className="max-w-3xl">
        <div className="mt-8 space-y-4 border-b border-slate-200 pb-8">
          <div className="h-5 w-28 rounded-full bg-slate-200" />
          <div className="h-10 w-full rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-100" />
          <div className="h-4 w-48 rounded bg-slate-100" />
        </div>
        <div className="mt-8 space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full rounded bg-slate-100" />
              <div className="h-4 w-full rounded bg-slate-100" />
              <div className="h-4 w-2/3 rounded bg-slate-100" />
            </div>
          ))}
        </div>
        </div>
      </div>
    </article>
  );
}
