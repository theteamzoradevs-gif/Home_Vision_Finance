const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

type RawBannerResponse = Record<string, any>;

export type LiveBannerData = {
  isVisible: boolean;
  mainHeading: string;
  subHeading: string;
  badgeText: string;
  expiryText: string;
  discountHighlight: string;
  discountSubtext: string;
  backgroundImage: string;
};

export const DEFAULT_LIVE_BANNER: LiveBannerData = {
  isVisible: false,
  mainHeading: "",
  subHeading: "",
  badgeText: "",
  expiryText: "",
  discountHighlight: "",
  discountSubtext: "",
  backgroundImage: "",
};

const pickFirstString = (source: RawBannerResponse, keys: string[]) => {
  for (const key of keys) {
    const value = source?.[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
};

const pickVisibility = (source: RawBannerResponse) => {
  const possibleKeys = [
    "isVisible",
    "isActive",
    "displayLiveBanner",
    "showBanner",
    "liveBanner",
    "enabled",
  ];

  for (const key of possibleKeys) {
    if (typeof source?.[key] === "boolean") return source[key];
  }

  return false;
};

const normalizeBanner = (payload: RawBannerResponse): LiveBannerData => ({
  isVisible: pickVisibility(payload),
  mainHeading: pickFirstString(payload, ["mainHeading", "title", "heading"]),
  subHeading: pickFirstString(payload, ["subHeading", "subtitle", "description"]),
  badgeText: pickFirstString(payload, ["badgeText", "labelText", "offerLabel"]),
  expiryText: pickFirstString(payload, ["expiryText", "validTill", "expiry", "expiresOn"]),
  discountHighlight: pickFirstString(payload, ["discountHighlight", "highlightText", "discountText"]),
  discountSubtext: pickFirstString(payload, ["discountSubtext", "subtext", "offerSubtext"]),
  backgroundImage: pickFirstString(payload, ["backgroundImage", "image", "bannerImage", "imageUrl"]),
});

export const getActiveBanner = async (): Promise<LiveBannerData> => {
  try {
    const response = await fetch(`${BASE_URL}/banner/getbanner`, {
      method: "GET",
      credentials: "include",
    });

    const contentType = response.headers.get("content-type");
    if (contentType?.includes("text/html")) return DEFAULT_LIVE_BANNER;

    if (!response.ok) return DEFAULT_LIVE_BANNER;

    const json = await response.json();
    const data = (json?.data ?? json) as RawBannerResponse;

    if (!data || typeof data !== "object") return DEFAULT_LIVE_BANNER;

    return normalizeBanner(data);
  } catch (error) {
    console.error("Banner fetch failed, skipping live banner:", error);
    return DEFAULT_LIVE_BANNER;
  }
};
