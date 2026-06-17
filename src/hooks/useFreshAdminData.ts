import { useEffect, useState } from "react";

const REFRESH_INTERVAL_MS = 15_000;

export function useFreshAdminData<T>(initial: T, fetcher: () => Promise<T>) {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let cancelled = false;

    const refresh = async () => {
      try {
        const fresh = await fetcher();
        if (!cancelled) setData(fresh);
      } catch {
        /* keep showing current data */
      }
    };

    refresh();

    const onVisible = () => {
      if (document.visibilityState === "visible") refresh();
    };

    document.addEventListener("visibilitychange", onVisible);
    const interval = window.setInterval(refresh, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
      window.clearInterval(interval);
    };
  }, [fetcher]);

  return data;
}
