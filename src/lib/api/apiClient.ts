const DEFAULT_DEV_BASE_URL = "http://localhost:5000/api";

export function getApiBaseUrl(): string | null {
  const baseUrl =
    process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || DEFAULT_DEV_BASE_URL;

  if (process.env.NODE_ENV === "production" && baseUrl === DEFAULT_DEV_BASE_URL) {
    return null;
  }

  return baseUrl;
}

function withCacheBuster(path: string) {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}_t=${Date.now()}`;
}

export async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) throw new Error("API base URL not configured");

  const isServer = typeof window === "undefined";
  const requestPath = isServer ? path : withCacheBuster(path);

  return fetch(`${baseUrl}${requestPath}`, {
    ...init,
    cache: "no-store",
    headers: {
      ...(init?.headers as Record<string, string>),
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
    },
  });
}

/** Client-only fetch — always bypasses any intermediary cache */
export async function clientApiFetch(path: string, init?: RequestInit): Promise<Response> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) throw new Error("API base URL not configured");

  return fetch(`${baseUrl}${withCacheBuster(path)}`, {
    ...init,
    cache: "no-store",
    headers: {
      ...(init?.headers as Record<string, string>),
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
    },
  });
}
