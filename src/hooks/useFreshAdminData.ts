import { useEffect, useState } from "react";

export function useFreshAdminData<T>(initial: T, fetcher: () => Promise<T>) {
  const [data, setData] = useState(initial);

  useEffect(() => {
    setData(initial);
  }, [initial]);

  useEffect(() => {
    let cancelled = false;

    fetcher()
      .then((fresh) => {
        if (!cancelled) setData(fresh);
      })
      .catch(() => {
        /* keep server-rendered initial data */
      });

    return () => {
      cancelled = true;
    };
    // Refresh once after mount so admin updates appear without waiting for cache.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
