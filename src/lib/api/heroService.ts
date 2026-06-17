const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

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

export const getHeroSection = async (): Promise<HeroSectionData> => {
  try {
    const response = await fetch(`${BASE_URL}/hero/get`);
    if (!response.ok) throw new Error(`Hero API responded with ${response.status}`);

    const json = await response.json();
    const data = json.data ?? json;

    // Bilkul pehle jaisa spread structure, bas syntax fix kar diya hai
    return {
      ...data,
      animatingTexts: data.animatingTexts || [],
      bulletPoints: data.bulletPoints || []
    };
  } catch (error) {
    console.error("Hero section fetch failed:", error);
    throw error;
  }
};