import type { Metadata } from "next";
import { BRAND } from "./constants";

export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title: `${title} | ${BRAND}`,
    description,
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      type: "website",
    },
    alternates: {
      canonical: path,
    },
  };
}
