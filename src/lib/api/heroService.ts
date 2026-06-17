import { cache } from "react";
import { apiFetch, clientApiFetch } from "@/lib/api/apiClient";

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

async function fetchHeroSection(
  fetchFn: (path: string, init?: RequestInit) => Promise<Response> = apiFetch
): Promise<HeroSectionData> {
  try {
    const response = await fetchFn("/hero/get");
    if (!response.ok) throw new Error(`Hero API responded with ${response.status}`);

    const json = await response.json();
    const data = json.data ?? json;

    if (!data || typeof data !== "object") return DEFAULT_HERO_DATA;

    return {
      ...DEFAULT_HERO_DATA,
      ...data,
      animatingTexts: data.animatingTexts?.length ? data.animatingTexts : DEFAULT_HERO_DATA.animatingTexts,
      bulletPoints: data.bulletPoints?.length ? data.bulletPoints : DEFAULT_HERO_DATA.bulletPoints,
    };
  } catch (error) {
    console.error("Hero section fetch failed:", error);
    return DEFAULT_HERO_DATA;
  }
}

export const getHeroSection = cache(() => fetchHeroSection(apiFetch));
export const getHeroSectionClient = () => fetchHeroSection(clientApiFetch);
