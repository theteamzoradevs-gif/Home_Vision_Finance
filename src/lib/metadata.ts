import type { Metadata } from "next";
import { BRAND } from "./constants";

export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const resolvedTitle = title || BRAND;
  return {
    title: resolvedTitle,
    description,
    openGraph: {
      title: resolvedTitle,
      description,
      type: "website",
    },
    alternates: {
      canonical: path,
    },
  };
}
