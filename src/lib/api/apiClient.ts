export const API_REVALIDATE_SECONDS = 300;

const DEFAULT_DEV_BASE_URL = "http://localhost:5000/api";

export function getApiBaseUrl(): string | null {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || DEFAULT_DEV_BASE_URL;
  if (process.env.NODE_ENV === "production" && baseUrl === DEFAULT_DEV_BASE_URL) {
    return null;
  }
  return baseUrl;
}

export async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) throw new Error("API base URL not configured");

  const isServer = typeof window === "undefined";

  return fetch(`${baseUrl}${path}`, {
    ...init,
    ...(isServer ? { next: { revalidate: API_REVALIDATE_SECONDS } } : {}),
  });
}
