export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center pt-24 sm:pt-28">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-pale border-t-brand" role="status" aria-label="Loading" />
    </div>
  );
}
