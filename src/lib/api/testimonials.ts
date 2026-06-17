import { cache } from "react";
import { apiFetch } from "@/lib/api/apiClient";

export type Testimonial = {
  _id: string;
  clientName?: string;
  location?: string;
  rating?: number;
  feedback?: string;
};

export function normalizeTestimonials(payload: unknown): Testimonial[] {
  if (Array.isArray(payload)) return payload as Testimonial[];
  if (payload && typeof payload === "object") {
    const obj = payload as Record<string, unknown>;
    if (Array.isArray(obj.data)) return obj.data as Testimonial[];
    if (Array.isArray(obj.testimonials)) return obj.testimonials as Testimonial[];
  }
  return [];
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await apiFetch("/testimonials/gettestimonials", { method: "GET" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Testimonials fetch failed.");
    }

    return normalizeTestimonials(data);
  } catch (error) {
    console.error("TESTIMONIAL_SERVICE_FETCH_ERROR:", error);
    return [];
  }
}

export const getTestimonials = cache(fetchTestimonials);
export const getTestimonialsClient = fetchTestimonials;

/** @deprecated Use getTestimonials instead */
export const getAllTestimonials = getTestimonials;
