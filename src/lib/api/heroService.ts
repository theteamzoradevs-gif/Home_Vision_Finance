import { cache } from "react";
import { apiFetch } from "@/lib/api/apiClient";

export type HeroBulletPoint = {
  title: string;
  subTitle: string;
};

export type HeroSectionData = {
  animatingTexts: string[];
  backgroundImage: string;
  badgeText: string;
  mainHeading: string;
  subHeading: string;
  bulletPoints: HeroBulletPoint[];
};

export const DEFAULT_HERO_DATA: HeroSectionData = {
  animatingTexts: ["Trusted Banking Partners", "Lowest Interest Rates", "Zero Processing Fees"],
  backgroundImage: "/hero-bg2.jpeg",
  badgeText: "SBI Authorised Channel Partner",
  mainHeading: "Fast Home Loan Approval with",
  subHeading:
    "SBI is our authorised partner for priority support. We also compare offers across leading banks to get you the best fit.",
  bulletPoints: [
    { title: "₹0 Processing Fees", subTitle: "No hidden charges on your loan" },
    { title: "24–48 Hour Approval", subTitle: "Fast-track eligibility confirmation" },
    { title: "Multi-Bank Comparison", subTitle: "Best rates across leading banks" },
    { title: "End-to-End Support", subTitle: "From application to disbursement" },
  ],
};

function normalizeHeroData(raw: Record<string, unknown>): HeroSectionData {
  return {
    animatingTexts:
      Array.isArray(raw.animatingTexts) && raw.animatingTexts.length > 0
        ? (raw.animatingTexts as string[])
        : DEFAULT_HERO_DATA.animatingTexts,
    backgroundImage:
      typeof raw.backgroundImage === "string" && raw.backgroundImage.trim()
        ? raw.backgroundImage
        : DEFAULT_HERO_DATA.backgroundImage,
    badgeText:
      typeof raw.badgeText === "string" && raw.badgeText.trim()
        ? raw.badgeText
        : DEFAULT_HERO_DATA.badgeText,
    mainHeading:
      typeof raw.mainHeading === "string" && raw.mainHeading.trim()
        ? raw.mainHeading
        : DEFAULT_HERO_DATA.mainHeading,
    subHeading:
      typeof raw.subHeading === "string" && raw.subHeading.trim()
        ? raw.subHeading
        : DEFAULT_HERO_DATA.subHeading,
    bulletPoints:
      Array.isArray(raw.bulletPoints) && raw.bulletPoints.length > 0
        ? (raw.bulletPoints as HeroBulletPoint[])
        : DEFAULT_HERO_DATA.bulletPoints,
  };
}

async function fetchHeroSection(): Promise<HeroSectionData> {
  try {
    const response = await apiFetch("/hero/get");
    if (!response.ok) throw new Error(`Hero API responded with ${response.status}`);

    const json = await response.json();
    const data = json.data ?? json;

    if (!data || typeof data !== "object") return DEFAULT_HERO_DATA;

    return normalizeHeroData(data as Record<string, unknown>);
  } catch (error) {
    console.error("Hero section fetch failed:", error);
    return DEFAULT_HERO_DATA;
  }
}

export const getHeroSection = cache(fetchHeroSection);
